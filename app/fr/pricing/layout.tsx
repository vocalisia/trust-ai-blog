import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tarifs Trustly-AI',
  description: 'Découvrez les offres et ressources Trustly-AI.',
  alternates: { canonical: '/fr/pricing/' },
}

export default function FrenchPricingLayout({ children }: { children: React.ReactNode }) {
  return children
}
