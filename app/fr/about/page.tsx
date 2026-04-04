import type { Metadata } from 'next'
import Link from 'next/link'
import { t } from '@/lib/i18n'

const locale = 'fr'

export const metadata: Metadata = {
  title: 'À propos de Trustly-AI',
  description: 'Découvrez Trustly-AI — qui nous sommes, notre mission, et pourquoi nous avons créé la meilleure ressource pour gagner de l\'argent avec l\'intelligence artificielle.',
}

export default function AboutPageFr() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
      {/* Header */}
      <div className="text-center mb-16">
        <span className="inline-flex items-center gap-2 border border-primary/30 bg-primary/5 rounded-full px-4 py-2 text-sm text-primary font-mono mb-6">
          <span className="w-2 h-2 bg-primary rounded-full" />
          {t(locale, 'about.badge')}
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
          {t(locale, 'about.title_line1')}<br />
          <span className="text-primary">{t(locale, 'about.title_line2')}</span>
        </h1>
        <p className="text-lg text-muted max-w-2xl mx-auto">
          {t(locale, 'about.intro')}
        </p>
      </div>

      {/* Mission */}
      <div className="card border-primary/20 mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">{t(locale, 'about.mission_title')}</h2>
        <p className="text-muted leading-relaxed mb-4">
          {t(locale, 'about.mission_p1')}
        </p>
        <p className="text-muted leading-relaxed">
          {t(locale, 'about.mission_p2')}
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        {[
          { value: '12',  label: t(locale, 'stats.lessons') },
          { value: '6',   label: t(locale, 'stats.categories') },
          { value: '100%', label: t(locale, 'stats.free_content') },
          { value: '4+',  label: t(locale, 'stats.articles') },
        ].map(stat => (
          <div key={stat.label} className="card text-center">
            <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
            <div className="text-xs text-muted font-mono">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* What we cover */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6">{t(locale, 'about.what_we_cover')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { icon: '💰', title: t(locale, 'about.cover_money'), desc: t(locale, 'about.cover_money_desc') },
            { icon: '🤖', title: t(locale, 'about.cover_agents'), desc: t(locale, 'about.cover_agents_desc') },
            { icon: '🛠️', title: t(locale, 'about.cover_tools'), desc: t(locale, 'about.cover_tools_desc') },
            { icon: '📈', title: t(locale, 'about.cover_side'), desc: t(locale, 'about.cover_side_desc') },
            { icon: '🪙', title: t(locale, 'about.cover_crypto'), desc: t(locale, 'about.cover_crypto_desc') },
            { icon: '💤', title: t(locale, 'about.cover_passive'), desc: t(locale, 'about.cover_passive_desc') },
          ].map(item => (
            <div key={item.title} className="card flex items-start gap-4">
              <span className="text-2xl">{item.icon}</span>
              <div>
                <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                <p className="text-sm text-muted">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="card border-primary/30 bg-primary/5 text-center py-12 glow-green">
        <h2 className="text-2xl font-bold text-foreground mb-3">{t(locale, 'about.cta_title')}</h2>
        <p className="text-muted mb-6">{t(locale, 'about.cta_sub')}</p>
        <Link href="/fr/learn" className="btn-primary text-lg px-8">
          {t(locale, 'about.cta_button')}
        </Link>
      </div>
    </div>
  )
}
