import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: { default: 'Trustly-AI — Gagner de l\'Argent avec l\'Intelligence Artificielle', template: '%s | Trustly-AI' },
  description: 'Des stratégies éprouvées pour gagner de l\'argent avec l\'IA. Newsletters, outils, revenus complémentaires et revenus passifs grâce à l\'intelligence artificielle.',
  alternates: {
    canonical: '/fr',
    languages: {
      'en': 'https://trustly-ai.com',
      'fr': 'https://trustly-ai.com/fr',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://trustly-ai.com/fr',
    siteName: 'Trustly-AI',
    title: 'Trustly-AI — Gagner de l\'Argent avec l\'Intelligence Artificielle',
    description: 'Des stratégies éprouvées pour gagner de l\'argent avec l\'IA.',
  },
}

export default function FrLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
