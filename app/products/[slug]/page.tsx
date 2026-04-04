import { Metadata } from 'next'
import Link from 'next/link'
import { PRODUCTS, getProduct, CURRENCY_SYMBOLS } from '@/lib/products'
import ProductCheckout from '@/components/products/ProductCheckout'

/* ─── Static generation ─── */

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const product = getProduct(params.slug)
  if (!product) return { title: 'Product Not Found' }

  return {
    title: `${product.name} -- ${product.tagline}`,
    description: product.description.slice(0, 160),
    alternates: { canonical: `/products/${product.slug}/` },
    openGraph: {
      title: `${product.name} | Trustly-AI`,
      description: product.tagline,
      url: `https://trustly-ai.com/products/${product.slug}/`,
      type: 'website',
    },
  }
}

/* ─── UI helpers ─── */

function Check() {
  return (
    <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  )
}

function Star() {
  return (
    <svg className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  )
}

/* ─── Page ─── */

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProduct(params.slug)

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: '#09090b' }}>
        <div className="text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">Product Not Found</h1>
          <Link href="/pricing/" className="btn-primary">
            View All Products
          </Link>
        </div>
      </div>
    )
  }

  const isPremium = product.stripeLinks === null

  return (
    <div className="min-h-screen" style={{ background: '#09090b' }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 md:py-24">

        {/* ── Header ── */}
        <div className="text-center mb-16">
          {product.badge && (
            <span
              className="inline-block text-xs font-bold px-4 py-1.5 rounded-full text-white mb-6"
              style={{ background: 'linear-gradient(135deg,#3b82f6,#8b5cf6)' }}
            >
              {product.badge}
            </span>
          )}
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
            {product.name}
          </h1>
          <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto leading-relaxed">
            {product.tagline}
          </p>
          <div className="flex items-center justify-center gap-2 mt-6">
            <span className="text-4xl font-black gradient-text">
              ${product.price.usd}
            </span>
            <span className="text-muted text-sm">USD &middot; one-time</span>
          </div>
        </div>

        {/* ── Description ── */}
        <div className="card mb-12">
          <h2 className="text-xl font-bold text-foreground mb-4">What is this?</h2>
          <p className="text-gray-300 leading-relaxed">{product.description}</p>
        </div>

        {/* ── What You Get ── */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6 text-center">What You Get</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {product.whatYouGet.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-xl p-4"
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
              >
                <Check />
                <span className="text-sm text-gray-300">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Features ── */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6 text-center">Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {product.features.map((feat) => (
              <div key={feat} className="flex items-start gap-3 text-sm text-gray-300">
                <Check />
                {feat}
              </div>
            ))}
          </div>
        </div>

        {/* ── Bonuses ── */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
            <span className="gradient-text">Bonuses Included</span>
          </h2>
          <div className="space-y-3">
            {product.bonuses.map((bonus) => (
              <div
                key={bonus}
                className="flex items-start gap-3 rounded-xl p-4"
                style={{
                  background: 'linear-gradient(135deg, rgba(0,212,170,0.06), rgba(0,180,216,0.04))',
                  border: '1px solid rgba(0,212,170,0.2)',
                }}
              >
                <Star />
                <span className="text-sm text-gray-200 font-medium">{bonus}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Checkout / CTA ── */}
        <div className="mb-16">
          {isPremium ? (
            <div className="text-center rounded-2xl p-8" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <div className="text-center mb-4">
                <span className="text-5xl font-black text-white">
                  ${product.price.usd}
                </span>
                <span className="text-gray-500 text-sm ml-2">USD</span>
              </div>
              <p className="text-muted text-sm mb-6">
                Contact us to get started. We will respond within 24 hours.
              </p>
              <Link
                href="/contact/"
                className="inline-block font-bold py-4 px-10 rounded-xl text-base transition-all hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] text-white"
                style={{ background: 'linear-gradient(135deg,#3b82f6,#8b5cf6)' }}
              >
                {product.cta} &rarr;
              </Link>
              <p className="text-center text-xs text-gray-500 mt-4">
                30-day money-back guarantee &bull; Secure payment via Stripe &bull; Lifetime access
              </p>
            </div>
          ) : (
            <ProductCheckout product={product} />
          )}
        </div>

        {/* ── FAQ ── */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {product.faq.map((item) => (
              <div
                key={item.q}
                className="rounded-2xl px-6 py-5"
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
              >
                <h3 className="font-semibold text-foreground mb-2 text-sm">{item.q}</h3>
                <p className="text-muted text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Trust bar ── */}
        <div className="grid grid-cols-3 gap-4 mb-12">
          {[
            { icon: '🔒', label: 'Secure Stripe Checkout' },
            { icon: '💰', label: '30-Day Money-Back' },
            { icon: '♾️', label: 'Lifetime Access' },
          ].map((item) => (
            <div
              key={item.label}
              className="text-center py-4 rounded-xl"
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
            >
              <div className="text-xl mb-1">{item.icon}</div>
              <div className="text-xs text-gray-400">{item.label}</div>
            </div>
          ))}
        </div>

        {/* ── Back link ── */}
        <div className="text-center">
          <Link
            href="/pricing/"
            className="text-sm text-muted hover:text-primary transition-colors"
          >
            &larr; Back to all products
          </Link>
        </div>

      </div>
    </div>
  )
}
