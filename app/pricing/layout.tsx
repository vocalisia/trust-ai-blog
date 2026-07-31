import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Trustly-AI Pricing',
  description: 'Explore Trustly-AI offers and learning resources.',
  alternates: { canonical: '/pricing/' },
}

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return children
}
