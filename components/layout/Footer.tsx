import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-surface-2 py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-sm">T</span>
              </div>
              <span className="text-lg font-bold">Trustly-<span className="text-primary">AI</span></span>
            </div>
            <p className="text-muted text-sm mb-3">Proven strategies to make money with artificial intelligence. No hype, just results.</p>
            <div className="text-muted text-xs space-y-1">
              <p>A project by <strong className="text-foreground">VAULT 369 LTD</strong></p>
              <p>Company No. 16952492</p>
              <p>128 City Road, EC1V 2NX, London, UK</p>
              <p>Chem. Saint-Hubert 2, 1950 Sion, Switzerland</p>
              <p>Contact: <a href="mailto:contact@trustly-ai.com" className="text-primary hover:underline">contact@trustly-ai.com</a></p>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-3">Categories</h4>
            <ul className="space-y-2 text-sm text-muted">
              <li><Link href="/categories/make-money-with-ai" className="hover:text-primary">Make Money with AI</Link></li>
              <li><Link href="/categories/ai-tools" className="hover:text-primary">AI Tools</Link></li>
              <li><Link href="/categories/ai-agents" className="hover:text-primary">AI Agents</Link></li>
              <li><Link href="/categories/side-hustles" className="hover:text-primary">Side Hustles</Link></li>
              <li><Link href="/categories/passive-income" className="hover:text-primary">Passive Income</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-3">Resources</h4>
            <ul className="space-y-2 text-sm text-muted">
              <li><Link href="/blog" className="hover:text-primary">All Articles</Link></li>
              <li><Link href="/learn" className="hover:text-primary">Learn AI (Free)</Link></li>
              <li><Link href="/pricing" className="hover:text-primary">Pricing</Link></li>
              <li><Link href="/about" className="hover:text-primary">About</Link></li>
              <li><Link href="/contact" className="hover:text-primary">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-3">Legal</h4>
            <ul className="space-y-2 text-sm text-muted">
              <li><Link href="/privacy-policy" className="hover:text-primary">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-primary">Terms of Service</Link></li>
              <li><Link href="/refund" className="hover:text-primary">Refund Policy</Link></li>
            </ul>
            <h4 className="font-semibold text-foreground mb-3 mt-6">Ecosystem</h4>
            <ul className="space-y-2 text-sm text-muted">
              <li><a href="https://www.vocalis.pro" target="_blank" rel="noopener noreferrer" className="hover:text-primary">Vocalis.pro</a></li>
              <li><a href="https://www.seo-true.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary">SEO-True.com</a></li>
              <li><a href="https://ai-due.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary">AI-DUE</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-surface-2 mt-8 pt-8 text-center text-sm text-muted">
          <p>&copy; {new Date().getFullYear()} Trustly-AI — VAULT 369 LTD. All rights reserved.</p>
          <p className="text-xs mt-1">VAULT 369 LTD — Company No. 16952492 — 128 City Road, EC1V 2NX, London, United Kingdom</p>
        </div>
      </div>
    </footer>
  )
}
