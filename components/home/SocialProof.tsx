import Link from 'next/link'

const stats = [
  { value: '12',   label: 'Free AI Lessons' },
  { value: '49',   label: 'In-Depth Articles' },
  { value: '6',    label: 'AI Categories' },
  { value: '500+', label: 'Prompts Available' },
]

const testimonials = [
  {
    name: 'Marcus R.',
    role: 'Freelance Copywriter',
    country: '🇬🇧',
    text: 'The AI copywriting blueprints helped me go from 2 clients to 8 in under 3 months. I doubled my monthly revenue just by following the exact process laid out here.',
    stars: 5,
  },
  {
    name: 'Sofia L.',
    role: 'E-commerce Entrepreneur',
    country: '🇫🇷',
    text: "J'ai lancé ma micro-boutique IA en un weekend grâce au guide. Première vente au bout de 48 heures. Contenu sérieux, pas de blabla.",
    stars: 5,
  },
  {
    name: 'Jake T.',
    role: 'YouTuber & Content Creator',
    country: '🇺🇸',
    text: 'The AI social media automation guide saved me literally 6 hours a week. My channel grew 40% in 2 months after implementing the system.',
    stars: 5,
  },
  {
    name: 'Priya M.',
    role: 'Digital Marketing Consultant',
    country: '🇮🇳',
    text: 'The AI agency blueprint is the most practical business guide I have read this year. Clear, actionable, and no fluff. Already landed my first $1,200/month client.',
    stars: 5,
  },
]

const ecosystem = [
  {
    name: 'Vocalis.pro',
    description: 'AI Voice Agents — Automate phone calls 24/7',
    href: 'https://www.vocalis.pro',
  },
  {
    name: 'SEO-True.com',
    description: 'AI SEO Automation — Backlinks & content at scale',
    href: 'https://www.seo-true.com',
  },
]

export default function SocialProof() {
  return (
    <section className="py-16">
      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
        {stats.map((stat) => (
          <div key={stat.label} className="card text-center py-6">
            <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
              {stat.value}
            </div>
            <div className="text-sm text-muted">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Testimonials */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
          <span className="w-1 h-6 bg-accent rounded-full" />
          What Our Readers Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {testimonials.map((t) => (
            <div key={t.name} className="card p-6">
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <span key={i} className="text-yellow-400 text-sm">★</span>
                ))}
              </div>
              <p className="text-sm text-muted leading-relaxed mb-4">&quot;{t.text}&quot;</p>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold text-primary">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{t.country} {t.name}</p>
                  <p className="text-xs text-muted">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Ecosystem */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
          <span className="w-1 h-6 bg-primary rounded-full" />
          Our Ecosystem
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ecosystem.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="card bg-surface-2 p-6 hover:scale-105 transition-transform"
            >
              <h3 className="text-lg font-bold text-primary mb-2">{item.name}</h3>
              <p className="text-muted text-sm">{item.description}</p>
            </Link>
          ))}
        </div>
      </div>

      {/* Trust Bar */}
      <p className="text-center text-xs text-muted">
        Operated by VAULT 369 LTD (UK) &bull; 256-bit SSL &bull; Stripe Secure Payments &bull; 30-Day Money-Back Guarantee
      </p>
    </section>
  )
}
