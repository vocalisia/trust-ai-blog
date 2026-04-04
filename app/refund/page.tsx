import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Refund Policy',
  description: 'Refund Policy for Trustly-AI. 30-day money-back guarantee on all products.',
}

export default function RefundPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-4xl font-bold text-foreground mb-8">Refund Policy</h1>
      <p className="text-muted text-sm mb-8">Last updated: March 2026</p>

      <div className="space-y-8 text-muted leading-relaxed">
        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">30-Day Money-Back Guarantee</h2>
          <p>
            At Trustly-AI, we stand behind our products. All digital products and courses come with a
            <strong className="text-foreground"> 30-day money-back guarantee</strong>. If you are not satisfied
            with your purchase for any reason, you can request a full refund within 30 days of purchase.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">How to Request a Refund</h2>
          <ol className="list-decimal list-inside space-y-2">
            <li>Send an email to <a href="mailto:contact@trustly-ai.com" className="text-primary hover:underline">contact@trustly-ai.com</a></li>
            <li>Include your order number or the email used for purchase</li>
            <li>Briefly describe the reason for your refund request</li>
          </ol>
          <p className="mt-3">
            We will process your refund within <strong className="text-foreground">5-10 business days</strong>.
            The refund will be credited back to your original payment method via Stripe.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">One-Time Products</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Full refund available within 30 days of purchase</li>
            <li>No questions asked</li>
            <li>Access to the product will be revoked upon refund</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">Subscriptions</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>You can cancel your subscription at any time from your Stripe account</li>
            <li>Cancellation takes effect at the end of the current billing period</li>
            <li>Refunds for subscription payments are available within 30 days of the most recent charge</li>
            <li>No refunds for partial months</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">Premium Services (Coaching, Done-For-You)</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Refund requests for coaching sessions must be made at least 48 hours before the scheduled call</li>
            <li>Done-For-You services: refund available before work begins. Once work has started, refunds are prorated based on completion</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">Exceptions</h2>
          <p>
            Refunds may be denied in cases of:
          </p>
          <ul className="list-disc list-inside space-y-2 mt-3">
            <li>Repeated refund requests (pattern of abuse)</li>
            <li>Products purchased more than 30 days ago</li>
            <li>Services that have been fully delivered</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">Contact</h2>
          <p>
            For refund requests or questions, email us at:{' '}
            <a href="mailto:contact@trustly-ai.com" className="text-primary hover:underline">contact@trustly-ai.com</a>
          </p>
        </section>
      </div>
    </div>
  )
}
