import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Thank You — Trustly-AI' }

export default function ThankYouPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-24 text-center">
      <div className="text-6xl mb-6">🎉</div>
      <h1 className="text-4xl font-bold text-foreground mb-4">
        Thank You for Your Purchase!
      </h1>
      <p className="text-muted text-lg mb-8">
        You will receive an email shortly with access to your content. Welcome to the Trustly-AI community!
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link href="/learn" className="btn-primary">Start Learning Now</Link>
        <Link href="/blog" className="btn-secondary">Read the Blog</Link>
      </div>
    </div>
  )
}
