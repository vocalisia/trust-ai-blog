import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: { default: 'Trust-AI — Make Money with Artificial Intelligence', template: '%s | Trust-AI' },
  description: 'Discover proven strategies to earn money with AI. Tools, agents, side hustles, crypto, and passive income guides updated daily.',
  keywords: ['make money with AI', 'AI tools 2025', 'AI side hustles', 'passive income AI', 'AI agents money', 'artificial intelligence income'],
  authors: [{ name: 'Trust-AI', url: 'https://trust-ai.com' }],
  creator: 'Trust-AI',
  metadataBase: new URL('https://trust-ai.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://trust-ai.com',
    siteName: 'Trust-AI',
    title: 'Trust-AI — Make Money with Artificial Intelligence',
    description: 'Proven AI strategies to generate income. Updated daily by autonomous AI agents.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Trust-AI' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trust-AI',
    description: 'Make money with AI — daily strategies, tools & agents.',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
