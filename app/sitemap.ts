import { getAllArticles, CATEGORIES } from '@/lib/mdx'
import type { MetadataRoute } from 'next'

const BASE_URL = 'https://trustly-ai.com'

const learnSlugs = [
  'what-is-ai-income', 'best-free-ai-tools', 'prompt-engineering', 'chatgpt-vs-claude-vs-gemini',
  'ai-automation-make', 'freelancing-with-ai', 'ai-content-strategy', 'sell-ai-digital-products',
  'build-ai-agent', 'launch-micro-saas', 'ai-passive-income', 'scale-10k-ai',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const articles = getAllArticles()
  const lastDeploy = '2026-03-27'

  const staticPages = [
    '', '/blog', '/learn', '/pricing', '/about', '/contact',
    '/privacy-policy', '/terms', '/refund', '/thank-you',
  ].map(path => ({
    url: `${BASE_URL}${path}/`,
    lastModified: lastDeploy,
    changeFrequency: 'weekly' as const,
    priority: path === '' ? 1 : 0.8,
  }))

  const categoryPages = CATEGORIES.map(cat => ({
    url: `${BASE_URL}/categories/${cat.slug}/`,
    lastModified: lastDeploy,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  const articlePages = articles.map(article => ({
    url: `${BASE_URL}/blog/${article.slug}/`,
    lastModified: new Date(article.date),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  const learnPages = learnSlugs.map(slug => ({
    url: `${BASE_URL}/learn/${slug}/`,
    lastModified: lastDeploy,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const frPages = ['', '/about', '/contact', '/learn', '/pricing'].map(path => ({
    url: `${BASE_URL}/fr${path}/`,
    lastModified: lastDeploy,
    changeFrequency: 'weekly' as const,
    priority: path === '' ? 0.9 : 0.7,
  }))

  return [...staticPages, ...frPages, ...categoryPages, ...articlePages, ...learnPages]
}
