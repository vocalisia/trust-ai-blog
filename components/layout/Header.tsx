'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="border-b border-surface-2 sticky top-0 z-50 bg-background/80 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
            <span className="text-black font-bold text-sm">T</span>
          </div>
          <span className="text-xl font-bold text-foreground">Trustly-<span className="text-primary">AI</span></span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm text-muted">
          <Link href="/blog" className="hover:text-primary transition-colors">Articles</Link>
          <Link href="/categories/make-money-with-ai" className="hover:text-primary transition-colors">Make Money</Link>
          <Link href="/categories/ai-tools" className="hover:text-primary transition-colors">AI Tools</Link>
          <Link href="/categories/side-hustles" className="hover:text-primary transition-colors">Side Hustles</Link>
          <Link href="/learn" className="hover:text-primary transition-colors">Learn</Link>
          <div className="flex items-center gap-1 text-xs border border-surface-2 rounded-lg overflow-hidden">
            <Link href="/" className="px-2 py-1 hover:bg-surface-2 transition-colors">EN</Link>
            <Link href="/fr" className="px-2 py-1 hover:bg-surface-2 transition-colors">FR</Link>
          </div>
          <Link href="/pricing" className="btn-primary text-xs py-2 px-4">Get Started</Link>
        </nav>
        <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-muted hover:text-foreground" aria-label="Menu">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            {open
              ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>
      </div>
      {open && (
        <nav className="md:hidden border-t border-surface-2 bg-background px-4 py-4 space-y-3 text-sm text-muted">
          <Link href="/blog" onClick={() => setOpen(false)} className="block hover:text-primary">Articles</Link>
          <Link href="/categories/make-money-with-ai" onClick={() => setOpen(false)} className="block hover:text-primary">Make Money</Link>
          <Link href="/categories/ai-tools" onClick={() => setOpen(false)} className="block hover:text-primary">AI Tools</Link>
          <Link href="/categories/side-hustles" onClick={() => setOpen(false)} className="block hover:text-primary">Side Hustles</Link>
          <Link href="/learn" onClick={() => setOpen(false)} className="block hover:text-primary">Learn</Link>
          <div className="flex items-center gap-1 text-xs border border-surface-2 rounded-lg overflow-hidden w-fit">
            <Link href="/" onClick={() => setOpen(false)} className="px-2 py-1 hover:bg-surface-2 transition-colors">EN</Link>
            <Link href="/fr" onClick={() => setOpen(false)} className="px-2 py-1 hover:bg-surface-2 transition-colors">FR</Link>
          </div>
          <Link href="/pricing" onClick={() => setOpen(false)} className="block btn-primary text-center text-xs py-2 px-4">Get Started</Link>
        </nav>
      )}
    </header>
  )
}
