require('dotenv').config()
const Anthropic = require('@anthropic-ai/sdk')
const fs        = require('fs')
const path      = require('path')

const client          = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })
const CONTENT_DIR     = path.join(__dirname, 'content/blog')
const TOPICS_FILE     = path.join(__dirname, 'topics-database.json')
const ARTICLES_PER_RUN = parseInt(process.env.ARTICLES_PER_RUN || '10')

if (!fs.existsSync(CONTENT_DIR)) fs.mkdirSync(CONTENT_DIR, { recursive: true })

function getExistingSlugs() {
  return new Set(
    fs.readdirSync(CONTENT_DIR)
      .filter(f => f.endsWith('.mdx'))
      .map(f => f.replace('.mdx', ''))
  )
}

function getNextTopics(count) {
  const topics   = JSON.parse(fs.readFileSync(TOPICS_FILE, 'utf-8'))
  const existing = getExistingSlugs()
  const unused   = topics.filter(t => !existing.has(t.slug))
  if (unused.length === 0) { console.log('All topics published.'); return [] }
  return unused.slice(0, count)
}

async function generateArticle(topic) {
  const today       = new Date().toISOString().split('T')[0]
  const keywordsStr = topic.keywords.join(', ')

  const prompt = `You are an expert content writer for Trust-AI.com, a US-focused blog about making money with artificial intelligence.

Write a high-quality SEO article in English for the following topic:
- Title: ${topic.title}
- Category: ${topic.category}
- Keywords: ${keywordsStr}
- Date: ${today}
- Slug: ${topic.slug}

REQUIRED MDX FORMAT (copy exactly):

---
title: "${topic.title}"
description: "[Write a compelling 150-char meta description]"
date: "${today}"
category: "${topic.category}"
keywords: [${topic.keywords.map(k => `"${k}"`).join(', ')}]
---

## Introduction

[2-3 engaging paragraphs. Hook the reader. Use real numbers and specifics.]

## [Section 2 title]

[Content with actionable advice]

## [Section 3 title]

[Tools, methods, or strategies. Include a table if relevant.]

## [Section 4 title]

[Case study or real example with numbers]

## [Section 5 title]

[Step-by-step guide or tips]

## Final Thoughts

[Conclusion with CTA to visit trust-ai.com or subscribe to newsletter]

RULES:
- Write in American English, conversational but professional
- Include real tool names, platforms, realistic income numbers
- Minimum 800 words
- Use bold for key terms
- Add a markdown table somewhere in the article
- End with a link or mention to trust-ai.com
- NO made-up statistics — use realistic ranges`

  const resp = await client.messages.create({
    model:      'claude-sonnet-4-6',
    max_tokens: 2000,
    messages:   [{ role: 'user', content: prompt }],
  })

  let raw = resp.content[0].text.trim()
  if (raw.startsWith('```')) {
    raw = raw.split('```')[1]
    if (raw.startsWith('mdx') || raw.startsWith('markdown')) raw = raw.slice(raw.indexOf('\n') + 1)
  }
  return raw.trim()
}

async function main() {
  const topics = getNextTopics(ARTICLES_PER_RUN)
  if (topics.length === 0) return

  console.log(`Generating ${topics.length} articles for trust-ai.com...`)
  console.log('='.repeat(50))

  for (const topic of topics) {
    process.stdout.write(`Writing: ${topic.title.slice(0, 60)}... `)
    try {
      const content  = await generateArticle(topic)
      const filePath = path.join(CONTENT_DIR, `${topic.slug}.mdx`)
      fs.writeFileSync(filePath, content, 'utf-8')
      console.log('DONE')
    } catch (e) {
      console.log(`ERROR: ${e.message}`)
    }
    await new Promise(r => setTimeout(r, 1500))
  }

  console.log('='.repeat(50))
  console.log(`Done. Run: npm run deploy`)
}

main().catch(console.error)
