import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'

const CONTENT_DIR = path.join(process.cwd(), 'content/blog')

export interface Article {
  slug: string
  title: string
  description: string
  date: string
  category: string
  keywords: string[]
  readingTime: string
  content: string
}

export const CATEGORIES = [
  { name: 'Make Money with AI', slug: 'make-money-ai',   color: '#00FF88' },
  { name: 'AI Tools',           slug: 'ai-tools',        color: '#00C8FF' },
  { name: 'AI Agents',          slug: 'ai-agents',        color: '#A78BFA' },
  { name: 'Side Hustles',       slug: 'side-hustles',    color: '#FF4D6D' },
  { name: 'Crypto & AI',        slug: 'crypto-ai',       color: '#F59E0B' },
  { name: 'Passive Income',     slug: 'passive-income',  color: '#10B981' },
]

export function getAllArticles(): Article[] {
  if (!fs.existsSync(CONTENT_DIR)) return []
  const files = fs.readdirSync(CONTENT_DIR).filter(f => f.endsWith('.mdx'))
  return files
    .map(file => {
      const raw = fs.readFileSync(path.join(CONTENT_DIR, file), 'utf-8')
      const { data, content } = matter(raw)
      return {
        slug:        file.replace('.mdx', ''),
        title:       data.title || '',
        description: data.description || '',
        date:        data.date || '',
        category:    data.category || '',
        keywords:    data.keywords || [],
        readingTime: readingTime(content).text,
        content,
      }
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getArticleBySlug(slug: string): Article | null {
  const file = path.join(CONTENT_DIR, `${slug}.mdx`)
  if (!fs.existsSync(file)) return null
  const raw = fs.readFileSync(file, 'utf-8')
  const { data, content } = matter(raw)
  return {
    slug,
    title:       data.title || '',
    description: data.description || '',
    date:        data.date || '',
    category:    data.category || '',
    keywords:    data.keywords || [],
    readingTime: readingTime(content).text,
    content,
  }
}

export function getArticlesByCategory(categorySlug: string): Article[] {
  const cat = CATEGORIES.find(c => c.slug === categorySlug)
  if (!cat) return []
  return getAllArticles().filter(a => a.category === cat.name)
}
