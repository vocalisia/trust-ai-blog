import type { Metadata } from 'next'
import { t } from '@/lib/i18n'

const locale = 'fr'

export const metadata: Metadata = {
  title: 'Contact Trustly-AI',
  description: 'Contactez l\'équipe Trustly-AI pour des partenariats, questions ou retours.',
}

export default function ContactPageFr() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-foreground mb-4">
          {t(locale, 'contact.title_pre')}<span className="text-primary">{t(locale, 'contact.title_highlight')}</span>
        </h1>
        <p className="text-muted text-lg">
          {t(locale, 'contact.subtitle')}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
        {[
          { icon: '🤝', title: t(locale, 'contact.partnerships'), desc: t(locale, 'contact.partnerships_desc') },
          { icon: '💬', title: t(locale, 'contact.feedback'), desc: t(locale, 'contact.feedback_desc') },
          { icon: '❓', title: t(locale, 'contact.questions'), desc: t(locale, 'contact.questions_desc') },
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
        <h2 className="text-xl font-bold text-foreground mb-6">{t(locale, 'contact.form_title')}</h2>
        <form action="mailto:contact@trustly-ai.com" method="post" encType="text/plain" className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium text-muted mb-2">{t(locale, 'contact.name')}</label>
              <input name="name" type="text" placeholder={t(locale, 'contact.name_placeholder')} required
                className="w-full bg-surface border border-border rounded-lg px-4 py-3 text-foreground placeholder-muted/50 focus:outline-none focus:border-primary transition-colors text-sm" />
            </div>
            <div>
              <label className="block text-sm font-medium text-muted mb-2">{t(locale, 'contact.email')}</label>
              <input name="email" type="email" placeholder="you@example.com" required
                className="w-full bg-surface border border-border rounded-lg px-4 py-3 text-foreground placeholder-muted/50 focus:outline-none focus:border-primary transition-colors text-sm" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-muted mb-2">{t(locale, 'contact.subject')}</label>
            <input name="subject" type="text" placeholder={t(locale, 'contact.subject_placeholder')}
              className="w-full bg-surface border border-border rounded-lg px-4 py-3 text-foreground placeholder-muted/50 focus:outline-none focus:border-primary transition-colors text-sm" />
          </div>
          <div>
            <label className="block text-sm font-medium text-muted mb-2">{t(locale, 'contact.message')}</label>
            <textarea name="body" rows={5} placeholder={t(locale, 'contact.message_placeholder')} required
              className="w-full bg-surface border border-border rounded-lg px-4 py-3 text-foreground placeholder-muted/50 focus:outline-none focus:border-primary transition-colors text-sm resize-none" />
          </div>
          <button type="submit" className="btn-primary w-full text-center">
            {t(locale, 'common.send_message')}
          </button>
        </form>
        <p className="text-xs text-muted/50 text-center mt-4">
          {t(locale, 'contact.email_direct')} <span className="text-primary font-mono">contact@trustly-ai.com</span>
        </p>
      </div>
    </div>
  )
}
