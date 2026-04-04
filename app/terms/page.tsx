import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for Trustly-AI. Read our terms and conditions before using our platform.',
}

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-4xl font-bold text-foreground mb-8">Terms of Service</h1>
      <p className="text-muted text-sm mb-8">Last updated: March 2026</p>

      <div className="space-y-8 text-muted leading-relaxed">
        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">1. Acceptance of Terms</h2>
          <p>
            By accessing and using Trustly-AI (trustly-ai.com), operated by <strong className="text-foreground">VAULT 369 LTD</strong> (Company
            No. 16952492), registered at 128 City Road, EC1V 2NX, London, United Kingdom, you agree to be bound by these
            Terms of Service. If you do not agree, please do not use our website or services.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">2. Description of Services</h2>
          <p>
            Trustly-AI provides educational content, guides, courses, and digital products related to
            artificial intelligence and income strategies. Our services include free articles, paid digital
            products, and subscription-based memberships.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">3. User Accounts</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>You must provide accurate information when making a purchase</li>
            <li>You are responsible for maintaining the confidentiality of your account</li>
            <li>You must be at least 18 years old to purchase products</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">4. Payments and Pricing</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>All payments are processed securely through Stripe</li>
            <li>Prices are displayed in USD, EUR, and GBP and may vary based on currency conversion</li>
            <li>One-time purchases grant lifetime access to the purchased product</li>
            <li>Subscription fees are charged monthly and can be cancelled at any time</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">5. Digital Products</h2>
          <p>
            Digital products are delivered electronically after purchase. Due to the nature of digital goods,
            all sales are subject to our Refund Policy. Products are for personal use only and may not be
            redistributed, resold, or shared without written permission.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">6. Intellectual Property</h2>
          <p>
            All content on Trustly-AI, including articles, courses, guides, graphics, and code, is the
            intellectual property of Trustly-AI and is protected by copyright law. You may not copy,
            reproduce, or distribute our content without prior written consent.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">7. Disclaimer</h2>
          <p>
            The information provided on Trustly-AI is for educational purposes only. We do not guarantee
            any specific income or results. Individual results vary based on effort, market conditions,
            and other factors. Past results do not guarantee future performance.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">8. Limitation of Liability</h2>
          <p>
            Trustly-AI shall not be liable for any indirect, incidental, special, consequential, or punitive
            damages arising from your use of our services or products. Our total liability is limited to the
            amount you paid for the specific product or service in question.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">9. Governing Law</h2>
          <p>
            These terms shall be governed by and construed in accordance with the laws of England and Wales.
            Any disputes shall be subject to the exclusive jurisdiction of the courts of London, United Kingdom,
            after good-faith negotiation has been attempted.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">10. Changes to Terms</h2>
          <p>
            We reserve the right to modify these Terms at any time. Changes will be posted on this page.
            Continued use of our services after changes constitutes acceptance of the modified terms.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">11. Contact</h2>
          <p>
            For questions about these Terms, contact us at:{' '}
            <a href="mailto:contact@trustly-ai.com" className="text-primary hover:underline">contact@trustly-ai.com</a>
          </p>
        </section>
      </div>
    </div>
  )
}
