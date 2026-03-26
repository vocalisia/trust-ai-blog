import { getAllArticles, getArticleBySlug } from '@/lib/mdx'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

export function generateStaticParams() {
  return getAllArticles().map(a => ({ slug: a.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const article = getArticleBySlug(params.slug)
  if (!article) return {}
  return {
    title: article.title,
    description: article.excerpt,
    keywords: article.keywords,
    alternates: { canonical: `/blog/${params.slug}/` },
    openGraph: { title: article.title, description: article.excerpt, type: 'article', url: `/blog/${params.slug}/` },
  }
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticleBySlug(params.slug)
  if (!article) notFound()

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <div className="mb-8">
        <span className="text-primary text-sm font-medium">{article.category}</span>
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">{article.title}</h1>
        <div className="text-muted text-sm">{article.date} &middot; {article.readingTime}</div>
      </div>
      <article className="prose max-w-none">
        <MDXRemote source={article.content} />
      </article>
      <div className="mt-12 card p-8 text-center">
        <h3 className="text-xl font-bold text-foreground mb-2">Want more AI money strategies?</h3>
        <p className="text-muted mb-4">Get weekly insights delivered to your inbox.</p>
        <a href="/learn" className="btn-primary">Start Learning Free</a>
      </div>
    </div>
  )
}
