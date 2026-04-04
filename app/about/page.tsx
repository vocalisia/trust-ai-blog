import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Trustly-AI',
  description: 'Learn about Trustly-AI — who we are, our mission, and why we built a top resource for making money with artificial intelligence.',
}

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
      {/* Header */}
      <div className="text-center mb-16">
        <span className="inline-flex items-center gap-2 border border-primary/30 bg-primary/5 rounded-full px-4 py-2 text-sm text-primary font-mono mb-6">
          <span className="w-2 h-2 bg-primary rounded-full" />
          Our Story
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
          Built by AI believers.<br />
          <span className="text-primary">For income seekers.</span>
        </h1>
        <p className="text-lg text-muted max-w-2xl mx-auto">
          Trustly-AI was born from one simple idea: artificial intelligence is the greatest wealth-creation opportunity of our generation — and most people have no idea how to use it.
        </p>
      </div>

      {/* Mission */}
      <div className="card border-primary/20 mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">Our Mission</h2>
        <p className="text-muted leading-relaxed mb-4">
          We publish daily, actionable strategies to help you generate real income using AI tools, agents, and automation — no PhD required, no hype, no fluff.
        </p>
        <p className="text-muted leading-relaxed">
          Every article is researched, tested, and written to give you a concrete edge. Whether you want to freelance, build SaaS products, sell digital goods, or automate passive income streams — we cover it all.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        {[
          { value: '12',  label: 'Free Lessons' },
          { value: '6',   label: 'AI Categories' },
          { value: '100%', label: 'Free Content' },
          { value: '30+', label: 'In-depth Articles' },
        ].map(stat => (
          <div key={stat.label} className="card text-center">
            <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
            <div className="text-xs text-muted font-mono">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* What we cover */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6">What We Cover</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { icon: '💰', title: 'Make Money with AI', desc: 'Proven income strategies using the latest AI tools.' },
            { icon: '🤖', title: 'AI Agents & Automation', desc: 'Build bots and agents that work while you sleep.' },
            { icon: '🛠️', title: 'AI Tools Reviews', desc: 'Honest reviews of the tools actually worth your money.' },
            { icon: '📈', title: 'Side Hustles', desc: 'Launch profitable side businesses powered by AI.' },
            { icon: '🪙', title: 'Crypto & AI', desc: 'Where blockchain meets artificial intelligence.' },
            { icon: '💤', title: 'Passive Income', desc: 'Set up income streams that compound over time.' },
          ].map(item => (
            <div key={item.title} className="card flex items-start gap-4">
              <span className="text-2xl">{item.icon}</span>
              <div>
                <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                <p className="text-sm text-muted">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="card border-primary/30 bg-primary/5 text-center py-12 glow-green">
        <h2 className="text-2xl font-bold text-foreground mb-3">Ready to start earning with AI?</h2>
        <p className="text-muted mb-6">Join thousands of readers getting daily AI income strategies. Free.</p>
        <Link href="/learn" className="btn-primary text-lg px-8">
          Start Learning for Free
        </Link>
      </div>
    </div>
  )
}
