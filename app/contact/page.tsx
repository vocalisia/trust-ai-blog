import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Trust-AI',
  description: 'Get in touch with the Trust-AI team for partnerships, questions, or feedback.',
}

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-foreground mb-4">
          Get in <span className="text-primary">Touch</span>
        </h1>
        <p className="text-muted text-lg">
          Questions, partnerships, or feedback — we read every message.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
        {[
          { icon: '🤝', title: 'Partnerships', desc: 'Sponsorships & collaborations' },
          { icon: '💬', title: 'Feedback',     desc: 'Help us improve the content' },
          { icon: '❓', title: 'Questions',    desc: 'AI strategies & tools' },
        ].map(item => (
          <div key={item.title} className="card text-center">
            <div className="text-3xl mb-3">{item.icon}</div>
            <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
            <p className="text-xs text-muted">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Contact form (static - mailto) */}
      <div className="card">
        <h2 className="text-xl font-bold text-foreground mb-6">Send a Message</h2>
        <form action="mailto:contact@trust-ai.com" method="post" encType="text/plain" className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium text-muted mb-2">Name</label>
              <input name="name" type="text" placeholder="Your name" required
                className="w-full bg-surface border border-border rounded-lg px-4 py-3 text-foreground placeholder-muted/50 focus:outline-none focus:border-primary transition-colors text-sm" />
            </div>
            <div>
              <label className="block text-sm font-medium text-muted mb-2">Email</label>
              <input name="email" type="email" placeholder="you@example.com" required
                className="w-full bg-surface border border-border rounded-lg px-4 py-3 text-foreground placeholder-muted/50 focus:outline-none focus:border-primary transition-colors text-sm" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-muted mb-2">Subject</label>
            <input name="subject" type="text" placeholder="Partnership / Question / Feedback"
              className="w-full bg-surface border border-border rounded-lg px-4 py-3 text-foreground placeholder-muted/50 focus:outline-none focus:border-primary transition-colors text-sm" />
          </div>
          <div>
            <label className="block text-sm font-medium text-muted mb-2">Message</label>
            <textarea name="body" rows={5} placeholder="Tell us what's on your mind..." required
              className="w-full bg-surface border border-border rounded-lg px-4 py-3 text-foreground placeholder-muted/50 focus:outline-none focus:border-primary transition-colors text-sm resize-none" />
          </div>
          <button type="submit" className="btn-primary w-full text-center">
            Send Message
          </button>
        </form>
        <p className="text-xs text-muted/50 text-center mt-4">
          Or email us directly at <span className="text-primary font-mono">contact@trust-ai.com</span>
        </p>
      </div>
    </div>
  )
}
