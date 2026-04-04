import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'

const CONTENT_DIR = path.join(process.cwd(), 'content/blog')

export const CATEGORIES = [
  { name: 'Make Money with AI', slug: 'make-money-with-ai', color: '#00D4AA' },
  { name: 'AI Tools',           slug: 'ai-tools',           color: '#00B4D8' },
  { name: 'AI Agents',          slug: 'ai-agents',          color: '#7C3AED' },
  { name: 'Side Hustles',       slug: 'side-hustles',       color: '#F59E0B' },
  { name: 'Crypto & AI',        slug: 'crypto-ai',          color: '#EF4444' },
  { name: 'Passive Income',     slug: 'passive-income',     color: '#10B981' },
]

export interface Article {
  slug: string
  title: string
  excerpt: string
  category: string
  date: string
  readingTime: string
  keywords: string[]
  content: string
}

export function getAllArticles(): Article[] {
  if (!fs.existsSync(CONTENT_DIR)) return []
  const files = fs.readdirSync(CONTENT_DIR).filter(f => f.endsWith('.mdx'))

  const articles = files.map(file => {
    const raw = fs.readFileSync(path.join(CONTENT_DIR, file), 'utf-8')
    const { data, content } = matter(raw)
    const stats = readingTime(content)
    return {
      slug: file.replace('.mdx', ''),
      title: data.title || '',
      excerpt: data.excerpt || '',
      category: data.category || '',
      date: data.date || '',
      readingTime: stats.text,
      keywords: data.keywords || [],
      content,
    }
  })

  return articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getArticleBySlug(slug: string): Article | null {
  const filePath = path.join(CONTENT_DIR, `${slug}.mdx`)
  if (!fs.existsSync(filePath)) return null
  const raw = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(raw)
  const stats = readingTime(content)
  return {
    slug,
    title: data.title || '',
    excerpt: data.excerpt || '',
    category: data.category || '',
    date: data.date || '',
    readingTime: stats.text,
    keywords: data.keywords || [],
    content,
  }
}

export function getArticlesByCategory(categorySlug: string): Article[] {
  const cat = CATEGORIES.find(c => c.slug === categorySlug)
  if (!cat) return []
  return getAllArticles().filter(a => a.category === cat.name)
}
