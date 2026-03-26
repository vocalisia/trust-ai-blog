import { CATEGORIES, getArticlesByCategory } from '@/lib/mdx'
import ArticleCard from '@/components/blog/ArticleCard'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

export function generateStaticParams() {
  return CATEGORIES.map(c => ({ slug: c.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const cat = CATEGORIES.find(c => c.slug === params.slug)
  if (!cat) return {}
  return { title: `${cat.name} — Trustly-AI`, description: `Articles about ${cat.name}`, alternates: { canonical: `/categories/${params.slug}/` } }
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const cat = CATEGORIES.find(c => c.slug === params.slug)
  if (!cat) notFound()
  const articles = getArticlesByCategory(params.slug)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-4 h-4 rounded-full" style={{ backgroundColor: cat.color }} />
        <h1 className="text-3xl font-bold text-foreground">{cat.name}</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map(a => <ArticleCard key={a.slug} article={a} />)}
      </div>
      {articles.length === 0 && <p className="text-muted py-20 text-center">No articles in this category yet.</p>}
    </div>
  )
}
