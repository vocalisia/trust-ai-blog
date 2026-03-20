'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const toolsDropdown = [
  { name: 'Productivity',    href: '/categories/ai-tools' },
  { name: 'AI Agents',       href: '/categories/ai-agents' },
  { name: 'Copywriting',     href: '/categories/make-money-ai' },
  { name: 'Passive Income',  href: '/categories/passive-income' },
]

export default function Header() {
  const pathname = usePathname()
  const [toolsOpen, setToolsOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + '/')
      ? 'text-white font-semibold'
      : 'text-gray-400 hover:text-white'

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 backdrop-blur-xl bg-black/80">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
            <span className="text-white font-black text-sm">AI</span>
          </div>
          <span className="font-black text-xl">
            trust<span className="gradient-text">ai</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/blog" className={`text-sm font-medium transition-colors ${isActive('/blog')}`}>Blog</Link>

          {/* AI Tools dropdown */}
          <div className="relative" onMouseEnter={() => setToolsOpen(true)} onMouseLeave={() => setToolsOpen(false)}>
            <button className={`flex items-center gap-1 text-sm font-medium transition-colors ${isActive('/categories') ? 'text-white font-semibold' : 'text-gray-400 hover:text-white'}`}>
              AI Tools
              <svg className={`w-3.5 h-3.5 transition-transform ${toolsOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {toolsOpen && (
              <div className="absolute top-full left-0 mt-1 w-48 bg-black/90 border border-white/10 rounded-xl shadow-xl py-1 z-50 backdrop-blur-xl">
                {toolsDropdown.map(item => (
                  <Link key={item.href} href={item.href}
                    className="block px-4 py-2.5 text-sm text-gray-400 hover:text-white hover:bg-white/5 transition-colors">
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/learn" className={`text-sm font-medium transition-colors ${isActive('/learn')}`}>Learn AI</Link>
          <Link href="/pricing" className={`text-sm font-medium transition-colors ${isActive('/pricing')}`}>Pricing</Link>
          <Link href="/about" className={`text-sm font-medium transition-colors ${isActive('/about')}`}>About</Link>
          <Link href="/contact" className={`text-sm font-medium transition-colors ${isActive('/contact')}`}>Contact</Link>
        </nav>

        {/* Right side */}
        <div className="hidden md:flex items-center gap-3">
          {/* Search */}
          <Link href="/blog" aria-label="Search" className="text-gray-400 hover:text-white transition-colors p-1.5">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </Link>

          {/* X / Twitter */}
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-gray-400 hover:text-white transition-colors p-1.5">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.254 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
            </svg>
          </a>

          <span className="text-gray-600 text-sm hidden md:block">Sign in</span>

          <Link href="/pricing"
            className="btn-shine bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-sm px-5 py-2.5 rounded-xl hover:opacity-90 transition-opacity">
            Start Free →
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button className="md:hidden text-gray-400 hover:text-white transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {mobileOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-white/5 py-4 space-y-1 bg-black/95 backdrop-blur-xl px-6">
          {[
            { href: '/blog',                    label: 'Blog' },
            { href: '/categories/ai-tools',     label: 'AI Tools' },
            { href: '/learn',                   label: 'Learn AI' },
            { href: '/pricing',                 label: 'Pricing' },
            { href: '/about',                   label: 'About' },
            { href: '/contact',                 label: 'Contact' },
          ].map(item => (
            <Link key={item.href} href={item.href}
              onClick={() => setMobileOpen(false)}
              className={`block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${isActive(item.href) ? 'text-white bg-white/10' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}>
              {item.label}
            </Link>
          ))}
          <div className="pt-2 border-t border-white/5">
            <Link href="/pricing" onClick={() => setMobileOpen(false)}
              className="block text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-sm py-3 rounded-xl mt-2">
              Start Free →
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
