'use client'
import { useState } from 'react'
import type { Metadata } from 'next'

const currencies = [
  { code: 'usd', symbol: '$', label: 'USD' },
  { code: 'eur', symbol: '€', label: 'EUR' },
  { code: 'gbp', symbol: '£', label: 'GBP' },
]

const products = [
  {
    name: 'AI Tools Starter Pack',
    icon: '🛠️',
    description: 'Curated list of 50+ AI tools with tutorials, prompts and workflows to 10x your productivity instantly.',
    highlight: false,
    features: [
      '50+ hand-picked AI tools',
      'Ready-to-use prompt library',
      'Step-by-step workflow guides',
      'Lifetime updates included',
    ],
    prices: { usd: 27, eur: 24, gbp: 21 },
    links: {
      usd: 'https://buy.stripe.com/00wfZjggO2KPeGN5En4c91C',
      eur: 'https://buy.stripe.com/aFa6oJ9Sq1GL7el7Mv4c91D',
      gbp: 'https://buy.stripe.com/8x228te8GgBF56deaT4c91E',
    },
  },
  {
    name: 'AI Side Hustle Blueprint',
    icon: '⚡',
    description: 'Step-by-step guide to launch your first AI-powered side hustle in 7 days. Templates + tools included.',
    highlight: false,
    features: [
      '7-day action plan',
      'Business model templates',
      'AI toolstack for each hustle',
      'Income tracking spreadsheet',
      'Private community access',
    ],
    prices: { usd: 47, eur: 43, gbp: 37 },
    links: {
      usd: 'https://buy.stripe.com/eVqbJ33u2etxeGN2sb4c91z',
      eur: 'https://buy.stripe.com/6oU14p7Kidptaqx5En4c91A',
      gbp: 'https://buy.stripe.com/bJecN79Sq4SX6ah1o74c91B',
    },
  },
  {
    name: 'AI Mastery Course',
    icon: '🚀',
    description: 'Complete course to master AI tools and generate passive income. 8 modules, 40+ lessons, lifetime access.',
    highlight: true,
    badge: 'Most Popular',
    features: [
      '8 complete learning modules',
      '40+ video & text lessons',
      'From beginner to $10K/month',
      'AI automation blueprints',
      'Lifetime access + updates',
      '1-on-1 strategy call included',
      'Private Discord community',
    ],
    prices: { usd: 97, eur: 89, gbp: 79 },
    links: {
      usd: 'https://buy.stripe.com/3cI3cx4y64SXdCJ0k34c91w',
      eur: 'https://buy.stripe.com/3cI28t6Geadh1U1d6P4c91x',
      gbp: 'https://buy.stripe.com/aFacN79SqdptbuB0k34c91y',
    },
  },
]

export default function PricingPage() {
  const [currency, setCurrency] = useState<'usd' | 'eur' | 'gbp'>('usd')
  const cur = currencies.find(c => c.code === currency)!

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <span className="inline-flex items-center gap-2 border border-primary/30 bg-primary/5 rounded-full px-4 py-2 text-sm text-primary font-mono mb-6">
          <span className="w-2 h-2 bg-primary rounded-full" />
          One-time payment • No subscription
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-5">
          Invest in Your<br />
          <span className="text-primary">AI Income Journey</span>
        </h1>
        <p className="text-lg text-muted max-w-2xl mx-auto mb-8">
          Everything you need to go from zero to generating real income with AI. One-time payment, lifetime access.
        </p>

        {/* Currency switcher */}
        <div className="inline-flex items-center gap-1 border border-border rounded-xl p-1 bg-surface">
          {currencies.map(c => (
            <button key={c.code} onClick={() => setCurrency(c.code as any)}
              className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all ${currency === c.code ? 'bg-primary text-black' : 'text-muted hover:text-foreground'}`}>
              {c.symbol} {c.label}
            </button>
          ))}
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {products.map(product => (
          <div key={product.name}
            className={`card flex flex-col relative ${product.highlight ? 'border-primary/50 bg-primary/5 glow-green' : ''}`}>
            {product.badge && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="bg-primary text-black text-xs font-bold px-3 py-1 rounded-full">{product.badge}</span>
              </div>
            )}
            <div className="text-3xl mb-4">{product.icon}</div>
            <h2 className="text-xl font-bold text-foreground mb-2">{product.name}</h2>
            <p className="text-sm text-muted mb-6 leading-relaxed">{product.description}</p>

            <div className="mb-6">
              <span className="text-4xl font-black text-foreground">{cur.symbol}{product.prices[currency]}</span>
              <span className="text-muted text-sm ml-2">one-time</span>
            </div>

            <ul className="space-y-2.5 mb-8 flex-1">
              {product.features.map(f => (
                <li key={f} className="flex items-start gap-2.5 text-sm text-muted">
                  <span className="text-primary mt-0.5 flex-shrink-0">✓</span>
                  {f}
                </li>
              ))}
            </ul>

            <a href={product.links[currency]} target="_blank" rel="noopener noreferrer"
              className={product.highlight ? 'btn-primary text-center' : 'btn-secondary text-center'}>
              Get Access — {cur.symbol}{product.prices[currency]}
            </a>
          </div>
        ))}
      </div>

      {/* Trust signals */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        {[
          { icon: '🔒', text: 'Secure Payment' },
          { icon: '♾️', text: 'Lifetime Access' },
          { icon: '🔄', text: 'Free Updates' },
          { icon: '💬', text: '30-Day Guarantee' },
        ].map(item => (
          <div key={item.text} className="card text-center py-4">
            <div className="text-2xl mb-2">{item.icon}</div>
            <div className="text-sm font-medium text-muted">{item.text}</div>
          </div>
        ))}
      </div>

      {/* FAQ */}
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold text-foreground mb-6 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            { q: 'Is this really a one-time payment?', a: 'Yes. No subscription, no hidden fees. Pay once, access forever.' },
            { q: 'What if I want a refund?', a: 'We offer a 30-day money-back guarantee. No questions asked.' },
            { q: 'Do I need prior AI knowledge?', a: 'No. Our content goes from absolute beginner to advanced income strategies.' },
            { q: 'How is payment processed?', a: 'Payments are processed securely by Stripe in your chosen currency (USD, EUR, or GBP).' },
          ].map(faq => (
            <div key={faq.q} className="card">
              <h3 className="font-semibold text-foreground mb-2">{faq.q}</h3>
              <p className="text-sm text-muted">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
