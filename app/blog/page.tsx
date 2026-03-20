import { getAllArticles } from '@/lib/mdx'
import ArticleCard from '@/components/blog/ArticleCard'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'All Articles',
  description: 'All AI money strategies, tools, and side hustle guides on Trust-AI.',
}

export default function BlogPage() {
  const articles = getAllArticles()
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-foreground mb-2">All Articles</h1>
        <p className="text-muted">{articles.length} articles published — updated daily by AI agents</p>
      </div>
      {articles.length === 0 ? (
        <div className="text-center py-20 text-muted font-mono">
          <p>No articles yet. Run: <code className="text-primary">node auto-generate-articles.js</code></p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map(article => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      )}
    </div>
  )
}
