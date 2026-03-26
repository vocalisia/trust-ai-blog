import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'

const lessons: Record<string, { title: string; time: string; level: string; color: string; content: string }> = {
  'what-is-ai-income': {
    title: 'What is AI and Why It Matters for Your Income',
    time: '8 min',
    level: 'Beginner',
    color: '#00FF88',
    content: `
## Why AI is the Biggest Income Opportunity of This Decade

Artificial Intelligence isn't just a buzzword anymore — it's a practical tool that millions of people are using right now to generate real income. Whether you want to freelance, build a passive income stream, or launch a business, AI dramatically lowers the barrier to entry.

### What Exactly is AI?

AI (Artificial Intelligence) refers to software that can perform tasks that normally require human intelligence — writing, coding, image creation, data analysis, customer service, and more.

**The key AI tools you need to know:**
- **ChatGPT** — Write content, emails, code, business plans
- **Claude** — Complex analysis, long documents, reasoning
- **Midjourney** — Generate professional images
- **Make.com** — Automate workflows without coding
- **ElevenLabs** — Clone voices, create audio content

### How People Are Making Real Money With AI

1. **AI Freelancing** — Offer AI-enhanced services (copywriting, design, video editing) at 3-5x the speed, charging the same rates = more clients, more profit

2. **Content Monetization** — Build niche blogs, YouTube channels, or newsletters powered by AI content generation

3. **AI Automation Agency** — Help businesses automate their repetitive tasks using AI tools. Charge $500-$5,000/month per client

4. **Digital Product Sales** — Create and sell AI-generated ebooks, templates, prompt packs, courses

5. **Passive Income Sites** — Build niche websites that rank on Google and earn from ads + affiliate commissions

### Your First Step

The fastest way to start: pick **one** income model and spend 2 hours per day for 30 days on it. Most people who follow through see their first $100-$500 within the first 30 days.

Ready to go deeper? Check out the next lesson on the best free AI tools to use.
    `
  },
  'best-free-ai-tools': {
    title: 'The 10 Best Free AI Tools to Start Today',
    time: '12 min',
    level: 'Beginner',
    color: '#00FF88',
    content: `
## The 10 Best Free AI Tools You Can Start Using Today

You don't need to spend money to start making money with AI. These 10 tools have generous free tiers that give you everything you need to get started.

### 1. ChatGPT (Free tier)
**Best for:** Writing, brainstorming, coding, research
- Access GPT-3.5 for free, unlimited
- Use it to write articles, emails, product descriptions, scripts
- Prompt tip: "Act as a [role]. Help me [specific task] for [specific goal]."

### 2. Claude.ai (Free tier)
**Best for:** Long documents, analysis, reasoning
- Handles 100,000+ character context windows
- Perfect for analyzing PDFs, writing long-form content
- Often more accurate than ChatGPT for complex tasks

### 3. Canva AI (Free)
**Best for:** Design, image generation, presentations
- AI image generator, text-to-design
- Perfect for social media, thumbnails, pitch decks
- No design skills required

### 4. Make.com (Free, 1,000 operations/month)
**Best for:** Automating workflows
- Connect apps without code
- Example: Auto-post new blog articles to Twitter + LinkedIn
- Saves 5-10 hours/week of manual work

### 5. Notion AI (Free trial)
**Best for:** Note-taking, project management, AI writing
- Summarize meeting notes, draft documents, organize projects

### 6. Gamma.app (Free)
**Best for:** AI-powered presentations
- Turn a topic into a beautiful deck in 30 seconds
- Freelancers charge $200-$500 per deck — you can do it in 2 minutes

### 7. Perplexity AI (Free)
**Best for:** AI-powered research
- Google + AI combined
- Gives sources, perfect for fact-checking content

### 8. ElevenLabs (Free, 10,000 chars/month)
**Best for:** AI voice generation
- Create realistic voiceovers for videos, podcasts
- Huge demand on Fiverr for voiceover services

### 9. Udio / Suno (Free)
**Best for:** AI music generation
- Generate full songs from text prompts
- License-free music for YouTube videos, ads

### 10. Remove.bg (Free, 50 images/month)
**Best for:** Background removal
- Instant background removal for product photos
- E-commerce clients pay $2-$5 per image

### Your Action Plan
Start with ChatGPT + Canva + Make.com. These three alone can power a $1,000/month freelance business within 60 days.
    `
  },
  'prompt-engineering': {
    title: 'How to Write Perfect AI Prompts (Prompt Engineering)',
    time: '15 min',
    level: 'Beginner',
    color: '#00FF88',
    content: `
## Prompt Engineering: The Skill That Separates $10/hr from $100/hr

The difference between a mediocre AI output and an outstanding one is almost entirely in how you write your prompt. This skill — called "prompt engineering" — is one of the most valuable things you can learn in 2025.

### The CORE Framework

Every great prompt has these elements:

**C** — Context (who, what situation)
**O** — Objective (what you want)
**R** — Role (who the AI should act as)
**E** — Examples (show, don't just tell)

### The Basic Formula

\`\`\`
Act as [ROLE]. Your task is to [OBJECTIVE].
Context: [CONTEXT].
Requirements: [SPECIFIC REQUIREMENTS].
Format: [OUTPUT FORMAT].
\`\`\`

### 10 Power Prompts You Can Use Today

**1. Sales Email**
"Act as a world-class B2B copywriter. Write a cold email to a small business owner offering AI automation services. The email should be under 150 words, create urgency without being pushy, and end with a clear CTA to book a 15-min call. Avoid jargon."

**2. SEO Blog Article**
"Act as an expert SEO content writer. Write a 1,500-word article about [TOPIC] targeting the keyword '[KEYWORD]'. Include: an engaging H1, 5 H2 subheadings, a meta description under 160 chars, bullet points, and a clear CTA at the end."

**3. Product Description**
"Act as an e-commerce conversion specialist. Write 3 versions of a product description for [PRODUCT]. Each version should target a different buyer persona: budget-conscious, quality-focused, and impulse buyer."

**4. Social Media Content**
"Create a 30-day content calendar for a [NICHE] brand on Instagram. Include: post type, caption hook (first line), main content, and 5 relevant hashtags. Format as a table."

**5. Business Plan**
"You are a startup advisor who has helped 50+ companies raise funding. Create a lean business plan for [IDEA] including: problem, solution, target market, revenue model, and 90-day action plan."

### Common Mistakes to Avoid

Too vague: "Write me an article about AI"
Specific: "Write a 1,200-word beginner's guide to using ChatGPT for freelance writers, with 5 practical examples and a weekly workflow"

No format specified: "Give me some ideas"
Formatted: "Give me 10 ideas in a numbered list, each with a one-sentence explanation and estimated revenue potential"

### Chain Prompting (Advanced)

For complex projects, break it into steps:
1. "First, give me 10 headline ideas for..."
2. "Great, expand idea #3 into a full outline"
3. "Now write section 2 of that outline in full"

This produces much better results than asking for everything at once.

### Monetizing This Skill

- Sell prompt packs on Gumroad ($7-$47)
- Offer "AI prompt audit" service to businesses ($97-$297)
- Create a prompt newsletter (charge $5-$15/month)
    `
  },
  'chatgpt-vs-claude-vs-gemini': {
    title: 'ChatGPT vs Claude vs Gemini: Which One to Use?',
    time: '10 min',
    level: 'Beginner',
    color: '#00FF88',
    content: `
## ChatGPT vs Claude vs Gemini: The Honest Comparison

With so many AI tools available, picking the right one for your task can feel overwhelming. Here's the definitive breakdown based on real-world usage.

### Quick Comparison Table

| Feature | ChatGPT | Claude | Gemini |
|---------|---------|--------|--------|
| Best for | Versatility | Long docs, reasoning | Google integration |
| Free tier | GPT-3.5 | Claude 3 Haiku | Gemini 1.5 Flash |
| Context window | 128K (GPT-4) | 200K | 1M tokens |
| Image generation | Yes (DALL-E) | No | Yes (Imagen) |
| Coding | Excellent | Excellent | Good |
| Price (Pro) | $20/mo | $20/mo | $19.99/mo |

### When to Use ChatGPT

**Best for:**
- General-purpose writing and brainstorming
- Image generation (DALL-E integration)
- Plugin/GPT ecosystem
- Code generation and debugging
- Most versatile for freelancers

**Use it when:** You need a reliable all-rounder that handles 80% of tasks well.

### When to Use Claude

**Best for:**
- Analyzing long documents (upload entire PDFs)
- Complex reasoning and nuanced writing
- Following detailed instructions precisely
- Less "corporate" sounding content
- Legal, financial, or medical content analysis

**Use it when:** You need to process large amounts of text or need more thoughtful, nuanced output.

### When to Use Gemini

**Best for:**
- Searching the web in real-time
- Google Workspace integration (Docs, Sheets, Gmail)
- Multimodal tasks (image + text)
- Free access to a capable model

**Use it when:** You need current information or are already in the Google ecosystem.

### The Winning Strategy

Don't pick one — use all three strategically:

1. **Start with ChatGPT** — for the first draft of anything
2. **Refine with Claude** — for more nuanced, human-sounding output
3. **Fact-check with Gemini** — for current data and research

This "triple AI" workflow is used by top content creators earning $10,000+/month.

### Money Tip

Clients don't know which AI you use. They pay for the result. A freelancer using all three tools strategically can deliver $500 worth of content in 2 hours.
    `
  },
  'ai-automation-make': {
    title: 'Build Your First AI Automation with Make.com',
    time: '20 min',
    level: 'Intermediate',
    color: '#00C8FF',
    content: `
## Build Your First AI Automation with Make.com

Make.com (formerly Integromat) is the most powerful no-code automation platform available. Combined with AI, it can save you — and your clients — dozens of hours per week.

### What is Make.com?

Make.com lets you connect apps and create automated workflows (called "scenarios") without writing a single line of code. Think of it as a visual flowchart where data moves between apps automatically.

**Example:** New lead fills out a form → AI writes a personalized email → Email is sent automatically → Lead is added to your CRM → You get a Slack notification.

### Your First Automation: AI Blog Post Publisher

This automation takes a keyword from a Google Sheet and automatically:
1. Uses ChatGPT to write an article
2. Posts it to WordPress
3. Shares it on Twitter
4. Notifies you in Slack

**Step-by-step setup:**

**Step 1: Create your Make.com account**
- Go to make.com → Sign up free
- You get 1,000 free operations/month

**Step 2: Create a new scenario**
- Click "Create a new scenario"
- Search for "Google Sheets" as your trigger

**Step 3: Set up Google Sheets trigger**
- Connect your Google account
- Create a sheet with columns: Keyword, Status
- Set trigger: "Watch Rows" — fires when a new row is added

**Step 4: Add OpenAI module**
- Add a new module: search "OpenAI"
- Select "Create a Completion"
- Model: GPT-4
- Prompt: "Write a 1,500-word SEO blog post about: {{keyword}}. Include H2 subheadings, bullet points, and a meta description."

**Step 5: Add WordPress module**
- Connect your WordPress site
- Module: "Create a Post"
- Title: Extract from OpenAI output
- Content: OpenAI output
- Status: Published

**Step 6: Activate and test**
- Click "Run once" to test
- Add a keyword to your Google Sheet
- Watch the automation run!

### 5 Automation Ideas to Sell to Clients

1. **Lead Follow-up** — New lead → AI email → CRM entry ($500-$1,000 setup fee)
2. **Social Media Manager** — Blog post → 5 social media posts → auto-scheduled ($300/month retainer)
3. **Review Responder** — New Google review → AI response draft → email to owner ($200/month)
4. **Invoice Generator** — Sales form → AI invoice → PDF → email ($400 setup)
5. **Customer Support** — Support ticket → AI response → human review → send ($800/month)

### Pricing Your Automation Services

- Simple automation (2-3 steps): $300-$500
- Complex automation (5+ steps): $800-$2,000
- Monthly maintenance: $100-$300/month per client
- 5 clients × $200/month = $1,000/month passive income
    `
  },
  'freelancing-with-ai': {
    title: 'Freelancing with AI: How to Get Your First Client',
    time: '18 min',
    level: 'Intermediate',
    color: '#00C8FF',
    content: `
## Freelancing with AI: Land Your First $500 Client This Week

AI has completely changed freelancing. You can now deliver work 5-10x faster, which means more clients, higher margins, and more income — all working fewer hours.

### The AI Freelancer Advantage

Before AI: A copywriter writes 1 article in 3 hours → earns $150
After AI: A copywriter writes 5 articles in 3 hours → earns $750

Same skill, same rate per article — 5x the income.

### The 5 Best AI Freelance Services to Offer

**1. SEO Content Writing ($50-$300/article)**
- Use ChatGPT + Claude to draft
- Use SurferSEO to optimize
- Deliver in 30-60 minutes per article
- Scale to 10 articles/day = $500-$3,000/day

**2. Social Media Management ($500-$2,000/month)**
- Use ChatGPT for captions + hashtags
- Use Canva AI for graphics
- Use Make.com to schedule automatically
- Manage 5-10 clients simultaneously

**3. AI Chatbot Setup ($500-$2,000/project)**
- Set up Manychat or Voiceflow bots for businesses
- Connect to their CRM and email
- High demand from restaurants, clinics, e-commerce

**4. Video Script Writing ($100-$500/script)**
- YouTube, TikTok, ads scripts
- AI drafts in 5 minutes, you edit in 20 minutes
- Scale to 5-10 scripts/day

**5. Email Marketing ($300-$1,500/month)**
- AI writes email sequences, newsletters
- Connect to Klaviyo or Mailchimp
- Set up once, maintain monthly

### Getting Your First Client (Step by Step)

**Day 1: Create your profile**
- Upwork or Fiverr account
- Service: "AI-Enhanced SEO Blog Writing"
- Rate: $50/article (below market to get reviews first)
- Portfolio: Write 3 sample articles with AI, publish them

**Day 2: Send 20 cold outreach messages**
Template:
> "Hi [Name], I noticed your website hasn't been updated with fresh content in a while. I specialize in SEO content writing using AI, delivering high-quality articles at 2-3x the speed of traditional writers. I'd love to write you a free sample article — no strings attached. Interested?"

**Day 3-7: Follow up + deliver**
- Follow up with everyone who didn't respond
- Deliver the free sample article (takes 30 min with AI)
- Convert 1-2 into paying clients

**Week 2+: Scale**
- Raise your rate to $80/article after 5 reviews
- Add more services
- Hire a VA to handle client communication

### Income Targets

| Month | Articles/day | Rate | Monthly Income |
|-------|-------------|------|----------------|
| 1 | 3 | $50 | $3,000 |
| 3 | 5 | $80 | $8,000 |
| 6 | 8 | $100 | $16,000 |
    `
  },
  'ai-content-strategy': {
    title: 'AI Content Strategy: Publish 30 Articles in 1 Day',
    time: '25 min',
    level: 'Intermediate',
    color: '#00C8FF',
    content: `
## How to Publish 30 SEO Articles in 1 Day Using AI

This is the strategy that niche site builders use to go from 0 to 10,000 monthly visitors in under 90 days. Here's the exact system.

### Why Volume Matters for SEO

Google rewards sites that publish consistently and cover topics comprehensively. A site with 100 articles on a niche topic will almost always outrank a site with 10 articles — even if the 10 articles are better.

With AI, you can produce 30 quality articles in a single day.

### The 30-Article Day System

**Morning (6am-9am): Research & Planning (3 hours)**

1. Go to Google Keyword Planner or Ahrefs
2. Find 30 keywords in your niche with:
   - 500-5,000 monthly searches
   - Low-medium competition
   - Clear search intent (informational)
3. Export to a Google Sheet with columns: Keyword, Title, Status

**Mid-Morning (9am-12pm): Batch Writing (3 hours)**

Use this ChatGPT prompt for each keyword:
> "Write a comprehensive 1,200-word SEO article about '[KEYWORD]'. Include: 1 H1, 5 H2s, bullet points, a 155-char meta description, and an FAQ section with 3 questions. Optimize naturally for the keyword without stuffing. Tone: helpful expert."

Run 10 articles in parallel using multiple browser tabs.

**Afternoon (12pm-4pm): Edit + Optimize (4 hours)**

For each article:
- Read through for accuracy (AI can hallucinate facts)
- Add 1-2 real statistics from reliable sources
- Add internal links to other articles
- Run through Hemingway app for readability
- Upload to WordPress with proper meta data

**Evening (4pm-6pm): Publish + Promote (2 hours)**

- Schedule articles to publish over the next 30 days (1/day)
- Submit sitemap to Google Search Console
- Share first 3 articles on Reddit and social media

### Monetization Strategy

Once you hit 10,000 monthly visitors (~90 days):
1. **Display ads** (Mediavine/AdThrive): $15-$30 per 1,000 views = $150-$300/month
2. **Affiliate links**: Add relevant product recommendations = $200-$2,000/month
3. **Digital products**: Sell related ebooks/courses = $500-$5,000/month

### Niche Selection (Critical)

Best niches for AI content + high monetization:
- Personal finance / investing
- Health & fitness
- Software reviews (SaaS)
- AI tools (meta!)
- Home improvement
- Travel on a budget

Avoid: news, politics, anything requiring professional licenses
    `
  },
  'sell-ai-digital-products': {
    title: 'Creating and Selling AI Digital Products',
    time: '22 min',
    level: 'Intermediate',
    color: '#00C8FF',
    content: `
## How to Create and Sell AI Digital Products (And Make $3,000+/Month)

Digital products are the ultimate passive income vehicle. You create them once and sell them forever. With AI, you can create in hours what used to take weeks.

### The 6 Best AI Digital Products to Sell

**1. Prompt Packs ($7-$97)**
Collections of proven prompts for specific use cases.
- "100 ChatGPT Prompts for Real Estate Agents" — $27
- "500 Marketing Prompts for E-commerce" — $47
- "AI Prompts for Lawyers" — $97
Time to create: 2-3 hours with AI
Platform: Gumroad, Etsy, your own site

**2. AI-Generated Ebooks ($7-$37)**
- Write 5,000-word guides on profitable topics
- ChatGPT writes the content, Canva designs the layout
- Popular topics: make money online, health, relationships
Time to create: 4-6 hours
Platform: Gumroad, Amazon KDP

**3. Templates & SOPs ($17-$97)**
- Notion templates, Google Sheet templates
- AI business templates, content calendars
- Social media posting templates
Time to create: 3-5 hours
Platform: Etsy, Gumroad, Notion marketplace

**4. Mini-Courses ($97-$297)**
- Screen-record yourself using AI tools
- Teach specific workflows: "How to Build an AI Blog in 1 Day"
- 5-10 short video lessons (15-30 min each)
Time to create: 1-2 weekends
Platform: Gumroad, Teachable, your site

**5. AI Art Packs ($5-$30)**
- Generate 50-100 images on a theme with Midjourney
- Sell as: social media templates, digital wall art, Etsy prints
Time to create: 2-3 hours
Platform: Etsy, Creative Market

**6. Newsletter + Content Templates ($17-$47)**
- Email newsletter templates for specific industries
- Social media content calendars
- Blog post structure templates
Time to create: 3-4 hours
Platform: Gumroad, your own site

### The Launch Strategy

**Week 1: Create your first product**
- Pick the easiest: a prompt pack for a specific niche
- Use ChatGPT to generate 100 prompts
- Format in Notion or Google Docs
- Export as PDF

**Week 2: Set up your store**
- Create a free Gumroad account
- Write a compelling product description (use AI!)
- Set price at $17 (sweet spot for first products)
- Add a preview image (Canva)

**Week 3: Drive traffic**
- Post in relevant Reddit communities (r/ChatGPT, r/entrepreneur)
- Share on Twitter/X with a free sample
- Post in Facebook groups
- DM 50 people who could benefit

**Week 4: Scale**
- Collect testimonials
- Create 2-3 more related products
- Bundle them for higher average order value
- Launch email list for repeat buyers

### Revenue Projections

| Scenario | Products | Price | Sales/Month | Revenue |
|----------|----------|-------|-------------|---------|
| Conservative | 3 | $27 avg | 20 total | $540 |
| Realistic | 5 | $37 avg | 50 total | $1,850 |
| Optimistic | 10 | $47 avg | 100 total | $4,700 |
    `
  },
  'build-ai-agent': {
    title: 'Build a Fully Autonomous AI Agent from Scratch',
    time: '35 min',
    level: 'Advanced',
    color: '#A78BFA',
    content: `
## Build a Fully Autonomous AI Agent from Scratch

AI agents are the next evolution beyond chatbots. While a chatbot answers questions, an agent takes actions — browsing the web, writing code, sending emails, making decisions — all autonomously.

### What is an AI Agent?

An AI agent is a system that:
1. Receives a goal (not just a prompt)
2. Plans how to achieve it
3. Uses tools to take action
4. Evaluates results and adjusts
5. Continues until the goal is met

### The Tools You Need

- **Claude API or OpenAI API** — The AI brain
- **Python** — To write the agent logic
- **LangChain or AutoGen** — Agent frameworks
- **Tools**: web search, file system, email, browser

### Building a Research Agent (Step by Step)

This agent automatically researches a topic and writes a report.

**Step 1: Install dependencies**

pip install langchain openai duckduckgo-search python-dotenv

**Step 2: Create the agent**

from langchain.agents import initialize_agent, AgentType
from langchain.tools import DuckDuckGoSearchTool
from langchain.chat_models import ChatOpenAI
import os

# Initialize the LLM
llm = ChatOpenAI(model="gpt-4", temperature=0)

# Give the agent tools
tools = [DuckDuckGoSearchTool()]

# Create the agent
agent = initialize_agent(
    tools=tools,
    llm=llm,
    agent=AgentType.ZERO_SHOT_REACT_DESCRIPTION,
    verbose=True
)

# Run it
result = agent.run(
    "Research the top 5 AI tools for content creators in 2025. "
    "Find real products, their pricing, and user reviews. "
    "Write a 500-word comparison report."
)

print(result)

### Advanced: Building an Income-Generating Agent

This agent finds freelance opportunities and drafts proposals:

# Agent goal
goal = """
1. Search Upwork for Python + AI projects posted in the last 24 hours
2. Filter for projects with budget $500-$5,000
3. Draft a personalized proposal for the top 3 opportunities
4. Save proposals to a file
"""

agent.run(goal)

### Monetizing AI Agents

1. **Build agents for businesses** ($2,000-$10,000/agent)
   - Customer service agent
   - Lead generation agent
   - Data analysis agent

2. **Agent-as-a-Service** ($500-$2,000/month)
   - Run agents for clients on your infrastructure
   - Report weekly on results

3. **Sell agent templates** ($97-$497)
   - Pre-built agents for specific use cases
   - Documentation + support included

### The Future

Agents that can autonomously run entire business functions will be worth millions. Getting ahead of this curve now — even with basic agents — positions you as an expert in one of the fastest-growing fields in tech.
    `
  },
  'launch-micro-saas': {
    title: 'Launch a Micro-SaaS with AI in 7 Days',
    time: '40 min',
    level: 'Advanced',
    color: '#A78BFA',
    content: `
## How to Launch a Micro-SaaS Product with AI in 7 Days

A Micro-SaaS is a small, focused software product that solves one specific problem for a specific audience. With AI coding assistants, you can build one in a week even without being an expert developer.

### What Makes a Good Micro-SaaS?

- Solves ONE specific problem
- Has a clear, measurable ROI for users
- Can be built with 1-2 features initially
- Priced at $19-$99/month (low price, high volume)
- Target audience can be reached online

### 7-Day Launch Plan

**Day 1: Ideation & Validation**

Find your idea by looking for:
- Tasks you do manually that take 30+ min/week
- Complaints in Reddit communities, forums, Facebook groups
- "I wish there was a tool that..." moments

Validate in 24 hours:
- Post in a relevant subreddit: "Would you pay $29/month for a tool that [does X]?"
- DM 20 people who seem like ideal customers
- If 3+ say yes → build it

**Ideas that work:**
- AI-powered resume tailoring for job seekers ($19/mo)
- Automated competitor analysis for agencies ($49/mo)
- AI reply generator for customer reviews ($29/mo)
- SEO audit + fix suggestions for WordPress sites ($39/mo)

**Day 2-3: Build the MVP**

Use AI to write the code. Tools to use:
- **Frontend**: Next.js + Tailwind CSS
- **Backend**: Supabase (database + auth, free tier)
- **AI**: Anthropic or OpenAI API
- **Payments**: Stripe ($0 until you charge)
- **Deployment**: Vercel (free tier)

**Day 4: Add Stripe Payments**

Connect Stripe Checkout for subscription billing. Set up a single plan to start ($29/month is a proven price point).

**Day 5: Set up the marketing site**

One-page landing with:
- Clear headline: "Tailor your resume to any job in 30 seconds"
- 3 key benefits
- Before/after example
- Pricing (1 plan to start: $29/month)
- FAQ
- Testimonials

**Day 6: Launch**

- Post on ProductHunt (big traffic spike)
- Post on relevant subreddits
- Tweet the launch
- Email everyone you know
- Offer first 10 customers 50% lifetime discount

**Day 7: Iterate based on feedback**

- Talk to every single user
- Fix bugs immediately
- Add the one feature everyone is asking for

### Revenue Timeline

| Month | Subscribers | MRR |
|-------|------------|-----|
| 1 | 10 | $290 |
| 3 | 50 | $1,450 |
| 6 | 150 | $4,350 |
| 12 | 500 | $14,500 |
    `
  },
  'ai-passive-income': {
    title: 'AI-Powered Passive Income Systems',
    time: '30 min',
    level: 'Advanced',
    color: '#A78BFA',
    content: `
## Build AI-Powered Passive Income Systems That Run Without You

True passive income with AI means building systems where AI does the ongoing work — content creation, customer service, marketing, even sales — while you collect the revenue.

### The 4 Pillars of AI Passive Income

**Pillar 1: Automated Content + Monetization**

System: AI writes content → Auto-publishes → Monetizes via ads/affiliate

Setup time: 2 weeks
Ongoing work: 1-2 hours/week
Income potential: $500-$10,000/month after 6-12 months

How it works:
1. Set up a WordPress blog on a profitable niche
2. Use Claude API to generate 1 article/day automatically
3. Schedule auto-publishing via WordPress
4. Monetize with Google AdSense + Amazon Associates
5. Promote via automated social sharing (Make.com)

**Pillar 2: AI-Powered Newsletter**

System: AI curates content → writes newsletter → sends to subscribers

Setup time: 3 days
Ongoing work: 30 min/week
Income potential: $1,000-$20,000/month

How it works:
1. Choose a niche: AI tools, crypto, real estate, fitness
2. Use Perplexity AI to find the week's top stories
3. Use Claude to write a weekly digest in your voice
4. Send via ConvertKit (free up to 1,000 subs)
5. Monetize with sponsorships ($500-$5,000 per email) or paid tier

**Pillar 3: Digital Product + AI Marketing Funnel**

System: AI drives traffic → Captures email → Sells digital product automatically

Setup time: 1 week
Ongoing work: 0 after setup
Income potential: $1,000-$15,000/month

How it works:
1. Create a digital product (prompt pack, ebook, course)
2. Write AI-generated blog content that drives organic traffic
3. Capture emails with a lead magnet (free version of product)
4. Send automated email sequence (written by AI) that sells the paid product
5. Stripe collects payments automatically

**Pillar 4: AI SaaS + Automated Customer Support**

System: Users sign up → Use AI product → AI handles support → Stripe charges monthly

Setup time: 2-4 weeks
Ongoing work: 2-3 hours/week
Income potential: $3,000-$50,000/month

How it works:
1. Build Micro-SaaS (see previous lesson)
2. Use Intercom + AI to handle 80% of support tickets
3. Use Make.com to automate onboarding
4. Grow via automated email campaigns
5. Stripe handles all billing

### The Compounding Effect

The power of passive income is compounding:

Year 1: $1,000/month passive
Year 2: $3,000/month (reinvest profits into ads + more products)
Year 3: $10,000/month (multiple systems running)
Year 5: $50,000/month (established authority, team, multiple products)

### Getting Started This Week

Pick ONE system and spend 2 hours/day for 14 days:
- Day 1-3: Niche research and setup
- Day 4-7: Build the system
- Day 8-14: Launch and first traffic

The hardest part is starting. The AI tools do the heavy lifting once you set them up correctly.
    `
  },
  'scale-10k-ai': {
    title: 'Scale to $10,000/month with AI Automation',
    time: '45 min',
    level: 'Advanced',
    color: '#A78BFA',
    content: `
## Scale to $10,000/Month with AI: The Full System

Getting to $10K/month with AI is not about working harder — it's about building systems that run automatically at scale. Here's the complete playbook used by top AI entrepreneurs.

### The $10K/Month Stack

Most people earning $10K+/month with AI are combining multiple income streams:

| Stream | Monthly Revenue | Time Investment |
|--------|----------------|-----------------|
| AI Content Agency (3 clients) | $3,000 | 5 hrs/week |
| Niche Blog (ad + affiliate) | $2,000 | 2 hrs/week |
| Digital Products | $2,500 | 1 hr/week |
| Micro-SaaS | $2,500 | 3 hrs/week |
| **Total** | **$10,000** | **11 hrs/week** |

### Phase 1: $0 to $1,000/month (Days 1-30)

**Goal:** Land your first 2-3 paying clients or make first 50 digital product sales.

Action plan:
1. Choose ONE service (AI content writing recommended)
2. Create 3 sample pieces with AI
3. Send 20 cold outreach messages per day
4. Offer first month at 50% off
5. Over-deliver to get testimonials

Target: $500-$1,000 from 2 clients at $250-$500/month each.

### Phase 2: $1,000 to $3,000/month (Days 31-90)

**Goal:** Systematize delivery and start adding passive income.

Actions:
1. Create SOPs for everything you do (AI helps write these)
2. Set up a niche blog (your first passive income asset)
3. Raise rates by 50% with new clients
4. Add 1-2 more clients
5. Launch first digital product

Key tool: Make.com for automating client deliverables.

### Phase 3: $3,000 to $10,000/month (Days 91-180)

**Goal:** Multiply income streams and build passive assets.

Actions:
1. Hire a VA ($200-$400/month) to handle client communication
2. Your blog starts generating $500-$1,000/month from ads + affiliate
3. Launch a Micro-SaaS ($500-$2,000 MRR)
4. Start an email newsletter (monetize with sponsorships)
5. Launch premium digital product bundle ($97-$297)

### The Systems That Power $10K+

**System 1: Content Production**
- Input: Keyword list
- Output: Published articles, social posts, newsletter
- AI tools: Claude (writing), Canva (graphics), Make.com (publishing)
- Time: 2 hours setup → 30 min/week maintenance

**System 2: Client Delivery**
- Input: Client brief
- Output: 10 articles, 30 social posts, 4 newsletters
- AI tools: ChatGPT, Claude, Grammarly
- Time: 5 hours/month per client (down from 20 hours without AI)

**System 3: Sales Funnel**
- Input: Ad spend or organic traffic
- Output: Email subscribers → Product buyers
- Tools: ConvertKit, Gumroad, Stripe
- Time: 1 hour setup → 0 ongoing

**System 4: Customer Support**
- Input: Customer questions
- Output: Resolved tickets
- Tools: Intercom + Claude API
- Time: 30 min/week to review AI responses

### The Mindset Shift

People stuck at $1,000-$2,000/month are thinking like freelancers (trading time for money).

People earning $10,000+/month are thinking like business owners (building systems that produce money).

The transition happens when you start asking: "How can AI do this so I don't have to?"

Every repetitive task in your business can be automated. Every piece of content can be AI-assisted. Every client deliverable can be templatized.

The goal isn't to work less — it's to accomplish 10x more with the same effort.

### Your 30-Day Action Plan to Start

Week 1: Close first client ($500/month)
Week 2: Deliver first month of work using AI (3 hours total)
Week 3: Launch blog + publish 10 AI articles
Week 4: Launch first digital product on Gumroad

By day 30, you should have $500-$1,500 MRR and the foundation for everything else.
    `
  },
}

interface Props { params: { slug: string } }

export function generateStaticParams() {
  return Object.keys(lessons).map(slug => ({ slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const lesson = lessons[params.slug]
  if (!lesson) return {}
  return {
    title: lesson.title,
    description: `Free ${lesson.level} guide: ${lesson.title}. Learn AI tools and strategies to build income online.`,
    alternates: { canonical: `/learn/${params.slug}/` },
  }
}

function renderContent(content: string) {
  const lines = content.trim().split('\n')
  const elements: React.ReactNode[] = []
  let key = 0

  for (const line of lines) {
    const trimmed = line.trim()
    if (!trimmed) { elements.push(<br key={key++} />); continue }
    if (trimmed.startsWith('### ')) {
      elements.push(<h3 key={key++} className="text-xl font-bold text-white mt-8 mb-3">{trimmed.slice(4)}</h3>)
    } else if (trimmed.startsWith('## ')) {
      elements.push(<h2 key={key++} className="text-2xl font-bold text-white mt-10 mb-4">{trimmed.slice(3)}</h2>)
    } else if (trimmed.startsWith('**') && trimmed.endsWith('**')) {
      elements.push(<p key={key++} className="font-bold text-white mb-2">{trimmed.slice(2, -2)}</p>)
    } else if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
      elements.push(<li key={key++} className="text-gray-300 mb-1 ml-4">{trimmed.slice(2)}</li>)
    } else if (trimmed.startsWith('```')) {
      // skip code fences themselves
    } else if (/^\d+\.\s/.test(trimmed)) {
      elements.push(<li key={key++} className="text-gray-300 mb-1 ml-4 list-decimal">{trimmed.replace(/^\d+\.\s/, '')}</li>)
    } else if (trimmed.startsWith('|')) {
      elements.push(<p key={key++} className="text-gray-400 text-sm font-mono mb-1">{trimmed}</p>)
    } else if (trimmed.startsWith('>')) {
      elements.push(<blockquote key={key++} className="border-l-4 border-purple-500 pl-4 text-gray-300 italic my-4">{trimmed.slice(1).trim()}</blockquote>)
    } else {
      elements.push(<p key={key++} className="text-gray-300 mb-4 leading-relaxed">{trimmed}</p>)
    }
  }
  return elements
}

export default function LessonPage({ params }: Props) {
  const lesson = lessons[params.slug]
  if (!lesson) notFound()

  const allSlugs = Object.keys(lessons)
  const currentIndex = allSlugs.indexOf(params.slug)
  const prevSlug = currentIndex > 0 ? allSlugs[currentIndex - 1] : null
  const nextSlug = currentIndex < allSlugs.length - 1 ? allSlugs[currentIndex + 1] : null

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-gray-500 font-mono mb-8">
        <Link href="/" className="hover:text-green-400 transition-colors">Home</Link>
        <span>/</span>
        <Link href="/learn" className="hover:text-green-400 transition-colors">Learn AI</Link>
        <span>/</span>
        <span className="text-white">{lesson.level}</span>
      </div>

      {/* Header */}
      <div className="mb-10">
        <span className="inline-block text-xs font-bold px-3 py-1 rounded-full mb-4"
          style={{ color: lesson.color, background: lesson.color + '20', border: `1px solid ${lesson.color}40` }}>
          {lesson.level}
        </span>
        <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
          {lesson.title}
        </h1>
        <div className="flex items-center gap-4 text-sm text-gray-500 font-mono border-b border-white/10 pb-6">
          <span>{lesson.time} read</span>
          <span>•</span>
          <span>Free lesson</span>
        </div>
      </div>

      {/* Content */}
      <div className="prose-custom">
        {renderContent(lesson.content)}
      </div>

      {/* Navigation */}
      <div className="flex justify-between mt-16 gap-4">
        {prevSlug ? (
          <Link href={`/learn/${prevSlug}`}
            className="flex-1 border border-white/10 rounded-xl p-4 hover:border-white/30 transition-colors text-left">
            <span className="text-gray-500 text-xs font-mono block mb-1">← Previous</span>
            <span className="text-white text-sm font-medium">{lessons[prevSlug].title.slice(0, 40)}...</span>
          </Link>
        ) : <div />}
        {nextSlug ? (
          <Link href={`/learn/${nextSlug}`}
            className="flex-1 border border-white/10 rounded-xl p-4 hover:border-white/30 transition-colors text-right">
            <span className="text-gray-500 text-xs font-mono block mb-1">Next →</span>
            <span className="text-white text-sm font-medium">{lessons[nextSlug].title.slice(0, 40)}...</span>
          </Link>
        ) : <div />}
      </div>

      {/* CTA */}
      <div className="mt-12 rounded-2xl border border-purple-500/30 bg-purple-500/5 text-center py-10 px-6">
        <h3 className="text-2xl font-bold text-white mb-2">Ready to go faster?</h3>
        <p className="text-gray-400 mb-6">Get all our premium courses, tools and templates in one place.</p>
        <Link href="/pricing" className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold px-8 py-3 rounded-xl hover:opacity-90 transition-opacity">
          View All Courses →
        </Link>
      </div>
    </div>
  )
}
