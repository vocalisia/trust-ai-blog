import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Trustly-AI. Learn how we collect, use, and protect your personal data.',
}

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-4xl font-bold text-foreground mb-8">Privacy Policy</h1>
      <p className="text-muted text-sm mb-8">Last updated: March 2026</p>

      <div className="space-y-8 text-muted leading-relaxed">
        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">1. Introduction</h2>
          <p>
            Trustly-AI (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;), operated by <strong className="text-foreground">VAULT 369 LTD</strong> (Company
            No. 16952492), registered at 128 City Road, EC1V 2NX, London, United Kingdom, and accessible at trustly-ai.com,
            is committed to protecting your personal data. This Privacy Policy explains how we collect, use,
            disclose, and safeguard your information when you visit our website.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">2. Information We Collect</h2>
          <p className="mb-3">We may collect the following types of information:</p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong className="text-foreground">Personal Information:</strong> Name, email address, and any information you voluntarily provide through contact forms.</li>
            <li><strong className="text-foreground">Payment Information:</strong> Payments are processed through Stripe. We do not store your credit card details. Stripe&apos;s privacy policy applies to payment data.</li>
            <li><strong className="text-foreground">Usage Data:</strong> Pages visited, time spent on pages, browser type, device information, and IP address (anonymized where possible).</li>
            <li><strong className="text-foreground">Cookies:</strong> We use essential cookies for site functionality. See Section 6 for details.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">3. How We Use Your Information</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>To provide and maintain our services</li>
            <li>To process transactions via Stripe</li>
            <li>To respond to inquiries and support requests</li>
            <li>To improve our website and content</li>
            <li>To comply with legal obligations</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">4. Data Sharing</h2>
          <p>
            We do not sell your personal data. We may share information with:
          </p>
          <ul className="list-disc list-inside space-y-2 mt-3">
            <li><strong className="text-foreground">Stripe:</strong> For payment processing</li>
            <li><strong className="text-foreground">Hosting providers:</strong> For website delivery</li>
            <li><strong className="text-foreground">Legal authorities:</strong> When required by law</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">5. Your Rights (GDPR / CCPA)</h2>
          <p className="mb-3">You have the right to:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Access the personal data we hold about you</li>
            <li>Request correction or deletion of your data</li>
            <li>Object to or restrict processing of your data</li>
            <li>Request data portability</li>
            <li>Withdraw consent at any time</li>
          </ul>
          <p className="mt-3">
            To exercise these rights, contact us at{' '}
            <a href="mailto:contact@trustly-ai.com" className="text-primary hover:underline">contact@trustly-ai.com</a>.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">6. Cookies</h2>
          <p>
            We use essential cookies required for site functionality. We do not use tracking or advertising cookies.
            By using our site, you consent to essential cookies.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">7. Data Retention</h2>
          <p>
            We retain personal data only as long as necessary for the purposes outlined in this policy,
            or as required by law. Contact form data is retained for up to 12 months.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">8. Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your data,
            including SSL encryption (256-bit) for all data in transit.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">9. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Changes will be posted on this page
            with an updated &quot;Last updated&quot; date.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">10. Contact</h2>
          <p>
            For any questions about this Privacy Policy, contact us at:{' '}
            <a href="mailto:contact@trustly-ai.com" className="text-primary hover:underline">contact@trustly-ai.com</a>
          </p>
        </section>
      </div>
    </div>
  )
}
