import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import CookieBanner from '@/components/layout/CookieBanner'

export const metadata: Metadata = {
  title: { default: 'Make Money with AI — Proven Strategies & Tools | Trustly-AI', template: '%s | Trustly-AI' },
  description: 'Proven strategies to make money with AI. Newsletters, AI tools, side hustles, and passive income powered by artificial intelligence. Join 5000+ entrepreneurs.',
  keywords: ['make money with AI', 'AI side hustle', 'AI tools', 'passive income AI', 'AI newsletter'],
  authors: [{ name: 'Trustly-AI', url: 'https://trustly-ai.com' }],
  creator: 'Trustly-AI',
  metadataBase: new URL('https://trustly-ai.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en': 'https://trustly-ai.com',
      'fr': 'https://trustly-ai.com/fr',
      'x-default': 'https://trustly-ai.com',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://trustly-ai.com',
    siteName: 'Trustly-AI',
    title: 'Trustly-AI — Make Money with Artificial Intelligence',
    description: 'Proven strategies to make money with AI.',
    images: [{ url: '/og-image.svg', width: 1200, height: 630, alt: 'Trustly-AI' }],
  },
  twitter: { card: 'summary_large_image', title: 'Trustly-AI', description: 'Make Money with AI' },
  robots: { index: true, follow: true },
  verification: {
    google: process.env.NEXT_PUBLIC_GSC_VERIFICATION,
    other: {
      'msvalidate.01': '542FBF2D273FC7D1C14160FFB564D4C7',
    },
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Trustly-AI',
  legalName: 'VAULT 369 LTD',
  taxID: '16952492',
  url: 'https://trustly-ai.com',
  logo: 'https://trustly-ai.com/og-image.svg',
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
  sameAs: [
    'https://www.vocalis.pro',
    'https://www.seo-true.com',
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              var _c = (typeof localStorage !== 'undefined') ? localStorage.getItem('cookie-consent') : null;
              gtag('consent', 'default', { analytics_storage: _c === 'rejected' ? 'denied' : 'granted', ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied', wait_for_update: 500 });
            `,
          }}
        />
        <script async src="https://subscribe-forms.beehiiv.com/embed.js" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-D3XG48MBSM" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-D3XG48MBSM');
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-background text-foreground min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  )
}
