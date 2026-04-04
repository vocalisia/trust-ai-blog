import { getAllArticles } from '@/lib/mdx'
import ArticleCard from '@/components/blog/ArticleCard'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'All Articles — Trustly-AI',
  description: 'Browse all articles about making money with AI, AI tools, side hustles, and passive income.',
}

export default function BlogPage() {
  const articles = getAllArticles()
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-foreground mb-8">All Articles</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map(article => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div>
      {articles.length === 0 && (
        <p className="text-muted text-center py-20">No articles yet. Run <code className="text-primary">npm run generate</code> to create content.</p>
      )}
    </div>
  )
}
