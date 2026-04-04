import Link from 'next/link'

interface Article {
  slug: string
  title: string
  excerpt: string
  category: string
  date: string
  readingTime: string
}

export default function ArticleCard({ article, featured = false }: { article: Article; featured?: boolean }) {
  const categoryColors: Record<string, string> = {
    'Make Money with AI': '#00D4AA',
    'AI Tools':           '#00B4D8',
    'AI Agents':          '#7C3AED',
    'Side Hustles':       '#F59E0B',
    'Crypto & AI':        '#EF4444',
    'Passive Income':     '#10B981',
  }
  const color = categoryColors[article.category] || '#00D4AA'

  if (featured) {
    return (
      <Link href={`/blog/${article.slug}`} className="block card p-8 hover:scale-[1.01] transition-transform">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-2 h-2 rounded-full" style={{ backgroundColor: color }} />
          <span className="text-sm font-medium" style={{ color }}>{article.category}</span>
          <span className="text-muted text-sm">{article.readingTime}</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">{article.title}</h2>
        <p className="text-muted text-lg">{article.excerpt}</p>
      </Link>
    )
  }

  return (
    <Link href={`/blog/${article.slug}`} className="block card hover:scale-[1.02] transition-transform">
      <div className="flex items-center gap-2 mb-3">
        <span className="w-2 h-2 rounded-full" style={{ backgroundColor: color }} />
        <span className="text-xs font-medium" style={{ color }}>{article.category}</span>
      </div>
      <h3 className="text-lg font-bold text-foreground mb-2 line-clamp-2">{article.title}</h3>
      <p className="text-muted text-sm line-clamp-2">{article.excerpt}</p>
      <div className="mt-3 text-xs text-muted">{article.readingTime} &middot; {article.date}</div>
    </Link>
  )
}
