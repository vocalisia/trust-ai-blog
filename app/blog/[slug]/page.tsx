import { getArticleBySlug, getAllArticles, CATEGORIES } from '@/lib/mdx'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'

interface Props { params: { slug: string } }

export async function generateStaticParams() {
  return getAllArticles().map(a => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = getArticleBySlug(params.slug)
  if (!article) return {}
  return {
    title: article.title,
    description: article.description,
    keywords: article.keywords,
    openGraph: { title: article.title, description: article.description, type: 'article' },
  }
}

export default function ArticlePage({ params }: Props) {
  const article = getArticleBySlug(params.slug)
  if (!article) notFound()

  const cat = CATEGORIES.find(c => c.name === article.category)

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-muted font-mono mb-8">
        <Link href="/" className="hover:text-primary transition-colors">Home</Link>
        <span>/</span>
        <Link href="/blog" className="hover:text-primary transition-colors">Blog</Link>
        <span>/</span>
        <span className="text-foreground">{article.title.slice(0, 30)}...</span>
      </div>

      {/* Header */}
      <div className="mb-10">
        <span className="tag text-xs mb-4 inline-block" style={{ color: cat?.color, borderColor: cat?.color + '40', backgroundColor: cat?.color + '10' }}>
          {article.category}
        </span>
        <h1 className="text-3xl md:text-4xl font-bold text-foreground leading-tight mb-4">
          {article.title}
        </h1>
        <p className="text-lg text-muted mb-6">{article.description}</p>
        <div className="flex items-center gap-4 text-sm text-muted/60 font-mono border-b border-border pb-6">
          <span>{article.date}</span>
          <span>•</span>
          <span>{article.readingTime}</span>
        </div>
      </div>

      {/* Content */}
      <article className="prose">
        <MDXRemote source={article.content} />
      </article>

      {/* CTA */}
      <div className="mt-16 card border-primary/30 bg-primary/5 text-center py-10 glow-green">
        <h3 className="text-2xl font-bold text-foreground mb-2">
          Want more AI money strategies?
        </h3>
        <p className="text-muted mb-5">Get the best ones delivered to your inbox every morning. Free.</p>
        <a href="https://trust-ai.com/newsletter" className="btn-primary">
          Subscribe to the Newsletter
        </a>
      </div>
    </div>
  )
}
