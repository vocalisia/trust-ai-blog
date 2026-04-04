import Link from 'next/link'
import { getAllArticles, CATEGORIES } from '@/lib/mdx'
import ArticleCard from '@/components/blog/ArticleCard'
import SocialProof from '@/components/home/SocialProof'
import NewsletterCapture from '@/components/home/NewsletterCapture'

export default function HomePage() {
  const articles = getAllArticles()
  const featured = articles.slice(0, 1)[0]
  const recent = articles.slice(1, 7)

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden py-24 px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5 pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 text-sm text-primary mb-6">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            Free AI money-making strategies every week
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight mb-6">
            Trust the AI.<br />
            <span className="gradient-text">Stack the Cash.</span>
          </h1>
          <p className="text-xl text-muted max-w-2xl mx-auto mb-8">
            Proven strategies to make real money with artificial intelligence. No hype, no fluff — just results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/blog" className="btn-secondary text-center">Read Articles</Link>
            <Link href="/pricing" className="btn-primary text-center">
              Get Started
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Featured */}
        {featured && (
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
              <span className="w-1 h-6 bg-primary rounded-full" />
              Featured
            </h2>
            <ArticleCard article={featured} featured />
          </section>
        )}

        {/* Categories */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
            <span className="w-1 h-6 bg-secondary rounded-full" />
            Categories
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {CATEGORIES.map(cat => (
              <Link key={cat.slug} href={`/categories/${cat.slug}`}
                className="card text-center p-4 hover:scale-105 transition-transform">
                <div className="w-3 h-3 rounded-full mx-auto mb-2" style={{ backgroundColor: cat.color }} />
                <span className="text-sm font-medium text-foreground">{cat.name}</span>
              </Link>
            ))}
          </div>
        </section>

        {/* Social Proof */}
        <SocialProof />
      </div>

      {/* Newsletter Capture */}
      <NewsletterCapture />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Recent Articles */}
        {recent.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
              <span className="w-1 h-6 bg-accent rounded-full" />
              Latest Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recent.map(article => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>
            <div className="text-center mt-8">
              <Link href="/blog" className="btn-secondary">View all articles</Link>
            </div>
          </section>
        )}
      </div>
    </div>

  )
}
