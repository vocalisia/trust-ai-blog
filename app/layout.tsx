import type { Metadata } from 'next'
import './globals.css'
import Script from 'next/script'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import CookieBanner from '@/components/layout/CookieBanner'

export const metadata: Metadata = {
  title: { default: 'Trustly-AI — Make Money with Artificial Intelligence', template: '%s | Trustly-AI' },
  description: 'Proven strategies to make money with AI. Newsletters, tools, side hustles, and passive income powered by artificial intelligence.',
  keywords: ['make money with AI', 'AI side hustle', 'AI tools', 'passive income AI', 'AI newsletter'],
  authors: [{ name: 'Trustly-AI', url: 'https://trustly-ai.com' }],
  creator: 'Trustly-AI',
  metadataBase: new URL('https://trustly-ai.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://trustly-ai.com',
    siteName: 'Trustly-AI',
    title: 'Trustly-AI — Make Money with Artificial Intelligence',
    description: 'Proven strategies to make money with AI.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Trustly-AI' }],
  },
  twitter: { card: 'summary_large_image', title: 'Trustly-AI', description: 'Make Money with AI' },
  robots: { index: true, follow: true },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Trustly-AI',
  legalName: 'VAULT 369 LTD',
  url: 'https://trustly-ai.com',
  logo: 'https://trustly-ai.com/og-image.jpg',
  description: 'Proven strategies to make money with AI. Newsletters, tools, side hustles, and passive income powered by artificial intelligence.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '128 City Road',
    addressLocality: 'London',
    postalCode: 'EC1V 2NX',
    addressCountry: 'GB',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'contact@trustly-ai.com',
    contactType: 'customer service',
  },
  sameAs: [],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://trustly-ai.com" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-background text-foreground min-h-screen flex flex-col">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-7HQQDGHRT2"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-7HQQDGHRT2');
          `}
        </Script>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  )
}
