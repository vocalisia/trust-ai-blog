'use client'

import { useState } from 'react'
import type { Product, Currency } from '@/lib/products'
import { CURRENCY_SYMBOLS } from '@/lib/products'

const currencies: { code: Currency; label: string }[] = [
  { code: 'usd', label: 'USD' },
  { code: 'eur', label: 'EUR' },
  { code: 'gbp', label: 'GBP' },
]

const gradBtn = { background: 'linear-gradient(135deg,#3b82f6,#8b5cf6)', color: '#fff' }

export default function ProductCheckout({ product }: { product: Product }) {
  const [currency, setCurrency] = useState<Currency>('usd')
  const symbol = CURRENCY_SYMBOLS[currency]
  const price = product.price[currency]
  const link = product.stripeLinks?.[currency]

  return (
    <div className="rounded-2xl p-8" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
      {/* Currency selector */}
      <div className="flex items-center justify-center gap-1 mb-6 rounded-xl p-1 mx-auto w-fit" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}>
        {currencies.map((c) => (
          <button
            key={c.code}
            onClick={() => setCurrency(c.code)}
            className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all ${
              currency === c.code ? 'text-white' : 'text-gray-500 hover:text-gray-300'
            }`}
            style={currency === c.code ? gradBtn : {}}
          >
            {CURRENCY_SYMBOLS[c.code]} {c.label}
          </button>
        ))}
      </div>

      {/* Price */}
      <div className="text-center mb-6">
        <span className="text-5xl font-black text-white">
          {symbol}{price}
        </span>
        <span className="text-gray-500 text-sm ml-2">one-time payment</span>
      </div>

      {/* Buy button */}
      {link ? (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full text-center font-bold py-4 rounded-xl text-base transition-all hover:opacity-90 hover:scale-[1.02] active:scale-[0.98]"
          style={gradBtn}
        >
          {product.cta} &mdash; {symbol}{price}
        </a>
      ) : (
        <a
          href="/contact/"
          className="block w-full text-center font-bold py-4 rounded-xl text-base transition-all hover:opacity-90 hover:scale-[1.02] active:scale-[0.98]"
          style={gradBtn}
        >
          {product.cta} &rarr;
        </a>
      )}

      {/* Trust line */}
      <p className="text-center text-xs text-gray-500 mt-4">
        30-day money-back guarantee &bull; Secure payment via Stripe &bull; Lifetime access
      </p>
    </div>
  )
}
