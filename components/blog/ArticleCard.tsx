import Link from 'next/link'
import { Article, CATEGORIES } from '@/lib/mdx'

interface Props { article: Article; featured?: boolean }

export default function ArticleCard({ article, featured = false }: Props) {
  const cat = CATEGORIES.find(c => c.name === article.category)

  if (featured) {
    return (
      <Link href={`/blog/${article.slug}`} className="group block">
        <div className="card glow-green border-primary/30 hover:border-primary transition-all duration-300 p-8">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <span className="tag border-primary/30 text-primary bg-primary/10" style={{ color: cat?.color, borderColor: cat?.color + '40', backgroundColor: cat?.color + '15' }}>
                  {article.category}
                </span>
                <span className="text-xs text-muted font-mono">FEATURED</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground group-hover:text-primary transition-colors mb-3 leading-tight">
                {article.title}
              </h2>
              <p className="text-muted leading-relaxed mb-4">{article.description}</p>
              <div className="flex items-center gap-4 text-xs text-muted font-mono">
                <span>{article.date}</span>
                <span>•</span>
                <span>{article.readingTime}</span>
              </div>
            </div>
            <div className="md:w-48 flex items-center justify-center">
              <div className="w-32 h-32 rounded-xl bg-surface-2 border border-border flex items-center justify-center">
                <span className="text-4xl text-primary font-black text-glow">AI</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    )
  }

  return (
    <Link href={`/blog/${article.slug}`} className="group block">
      <div className="card hover:border-primary/50 transition-all duration-200 h-full flex flex-col">
        <div className="flex items-center gap-2 mb-3">
          <span className="tag text-xs" style={{ color: cat?.color, borderColor: cat?.color + '40', backgroundColor: cat?.color + '10' }}>
            {article.category}
          </span>
        </div>
        <h3 className="font-bold text-foreground group-hover:text-primary transition-colors mb-2 leading-snug flex-1">
          {article.title}
        </h3>
        <p className="text-sm text-muted line-clamp-2 mb-4">{article.description}</p>
        <div className="flex items-center justify-between text-xs text-muted/60 font-mono mt-auto">
          <span>{article.date}</span>
          <span>{article.readingTime}</span>
        </div>
      </div>
    </Link>
  )
}
