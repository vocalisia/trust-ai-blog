import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-12 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <span className="text-white font-black text-sm">AI</span>
              </div>
              <span className="font-black text-xl">
                trust<span className="gradient-text">ai</span>
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              The #1 resource for entrepreneurs building income with AI tools.
            </p>
          </div>

          {/* Products */}
          <div>
            <div className="font-bold mb-4 text-gray-300">Products</div>
            <div className="space-y-2 text-gray-500 text-sm">
              {[
                { label: 'ChatGPT Cheat Sheet', href: '/pricing' },
                { label: 'AI Prompt Bible',     href: '/pricing' },
                { label: 'AI Mastery Course',   href: '/pricing' },
                { label: 'AI Agency Blueprint', href: '/pricing' },
              ].map(l => (
                <div key={l.label}>
                  <Link href={l.href} className="hover:text-white transition-colors">{l.label}</Link>
                </div>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div>
            <div className="font-bold mb-4 text-gray-300">Resources</div>
            <div className="space-y-2 text-gray-500 text-sm">
              {[
                { label: 'Blog',              href: '/blog' },
                { label: 'Learn AI',          href: '/learn' },
                { label: 'About',             href: '/about' },
                { label: 'Contact',           href: '/contact' },
                { label: 'Affiliate Program', href: '/contact' },
              ].map(l => (
                <div key={l.label}>
                  <Link href={l.href} className="hover:text-white transition-colors">{l.label}</Link>
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <div className="font-bold mb-4 text-gray-300">Join 10,000+ members</div>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-purple-500 transition-colors"
              />
              <button className="bg-purple-600 hover:bg-purple-500 text-white font-bold px-4 py-3 rounded-xl transition-colors text-sm">
                →
              </button>
            </div>
            <p className="text-gray-600 text-xs mt-2">Free weekly AI income tips. Unsubscribe anytime.</p>
          </div>

        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm">© 2026 TrustAI.com — All rights reserved</p>
          <div className="flex gap-6 text-gray-600 text-sm">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
            <Link href="/refund" className="hover:text-white transition-colors">Refund Policy</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
          </div>
          <p className="text-gray-700 text-xs">⚠️ Results not guaranteed. Income claims are examples only.</p>
        </div>

      </div>
    </footer>
  )
}
