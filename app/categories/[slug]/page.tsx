import { getArticlesByCategory, CATEGORIES } from '@/lib/mdx'
import ArticleCard from '@/components/blog/ArticleCard'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

interface Props { params: { slug: string } }

export async function generateStaticParams() {
  return CATEGORIES.map(c => ({ slug: c.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const cat = CATEGORIES.find(c => c.slug === params.slug)
  if (!cat) return {}
  return { title: cat.name, description: `All ${cat.name} articles on Trust-AI` }
}

export default function CategoryPage({ params }: Props) {
  const cat = CATEGORIES.find(c => c.slug === params.slug)
  if (!cat) notFound()

  const articles = getArticlesByCategory(params.slug)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-3">
          <span className="w-3 h-3 rounded-full" style={{ backgroundColor: cat.color, boxShadow: `0 0 8px ${cat.color}` }} />
          <h1 className="text-4xl font-bold text-foreground">{cat.name}</h1>
        </div>
        <p className="text-muted">{articles.length} articles in this category</p>
      </div>
      {articles.length === 0 ? (
        <p className="text-muted font-mono">No articles yet in this category.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map(a => <ArticleCard key={a.slug} article={a} />)}
        </div>
      )}
    </div>
  )
}
