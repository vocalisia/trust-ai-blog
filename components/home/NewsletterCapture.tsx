export default function NewsletterCapture() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <div className="card p-8 md:p-12 bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20">
          <div className="text-3xl mb-3">📬</div>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            Get Free AI Money Strategies Weekly
          </h2>
          <p className="text-muted mb-6">
            Join subscribers getting one proven AI income strategy, one tool breakdown, and one actionable prompt every week.
          </p>
          <div className="flex justify-center">
            <iframe
              src="https://subscribe-forms.beehiiv.com/1213e0fa-a4c4-4c23-b045-0675952fdbbe"
              data-test-id="beehiiv-embed"
              style={{
                border: 'none',
                overflow: 'hidden',
                width: '100%',
                maxWidth: '560px',
                height: '80px',
                background: 'transparent',
              }}
            />
          </div>
          <p className="text-xs text-muted mt-4">No spam. Unsubscribe anytime. GDPR compliant.</p>
        </div>
      </div>
    </section>
  )
}