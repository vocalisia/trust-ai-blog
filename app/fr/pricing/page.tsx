'use client'
import { useState } from 'react'
import { stripeCheckout, type StripeCurrency } from '@/lib/stripe-checkout'
import { t } from '@/lib/i18n'

const locale = 'fr'

/* ─── Currency ─── */
const currencies = [
  { code: 'usd' as StripeCurrency, symbol: '$', label: 'USD', rate: 1 },
  { code: 'eur' as StripeCurrency, symbol: '€', label: 'EUR', rate: 0.92 },
  { code: 'gbp' as StripeCurrency, symbol: '£', label: 'GBP', rate: 0.79 },
]

function price(base: number, rate: number) { return Math.round(base * rate) }

/* ─── Data ─── */
const subscriptions = [
  {
    name: 'AI Insider Club', tagline: 'Stay ahead every week', highlight: false, badge: null,
    description: 'Premium weekly newsletter + 5 exclusive prompts every week, curated by our AI team.',
    priceUsd: 19, period: '/mois', link: '/contact', cta: 'Commencer',
    features: ['Newsletter hebdo premium stratégies IA','5 prompts exclusifs testés/semaine','Accès anticipé aux nouveaux outils & guides','Alertes offres réservées aux membres','Annulation à tout moment'],
  },
  {
    name: 'AI Tools Pro', tagline: 'The ultimate prompt library', highlight: true, badge: 'Le + populaire',
    description: '200+ tested prompts across all niches, updated monthly as new AI tools drop.',
    priceUsd: 29, period: '/mois', link: '/contact', cta: 'Commencer',
    features: ['200+ prompts dans 15+ catégories','Nouveaux prompts ajoutés chaque mois','ChatGPT, Claude, Midjourney, Gemini','Templates de workflows & SOPs','Support e-mail prioritaire','Annulation à tout moment'],
  },
  {
    name: 'AI Mastermind', tagline: 'Community + live coaching', highlight: false, badge: null,
    description: 'Private Discord community, monthly live session + Q&A with the team.',
    priceUsd: 97, period: '/mois', link: '/contact', cta: 'Rejoindre le Mastermind',
    features: ['Discord privé (membres vérifiés)','Session stratégique live mensuelle','Q&A en direct avec l\'équipe','Coaching en hot seat','Deal flow & partenariats entre membres','AI Tools Pro inclus','Annulation à tout moment'],
  },
]

const oneTime = [
  {
    name: 'AI Starter Kit', icon: '🎯', highlight: false, priceUsd: 27,
    stripeProduct: 'starter' as const,
    description: '50 battle-tested prompts + a 30-page beginner guide. Start making money with AI today.',
    features: ['50 prompts testés pour générer des revenus','Guide débutant de 30 pages (PDF)','Top 10 des outils IA gratuits expliqués','Accès à vie + mises à jour'],
  },
  {
    name: 'Done-For-You Prompts', icon: '⚡', highlight: false, priceUsd: 47,
    stripeProduct: 'blueprint' as const,
    description: '500 prompts organized by niche — copywriting, ecom, agency, content, coding.',
    features: ['500 prompts dans 12 niches','Compatible ChatGPT, Claude & Gemini','Base de données Notion organisée','Bonus : 20 templates d\'automatisation','Accès à vie + mises à jour'],
  },
  {
    name: 'AI Side Hustle Blueprint', icon: '🗺️', highlight: false, priceUsd: 47,
    stripeProduct: 'blueprint' as const,
    description: 'Launch your first AI-powered side hustle in 7 days. Templates, toolstack, income tracker.',
    features: ['Plan d\'action en 7 jours étape par étape','5 modèles de business IA éprouvés','Stack d\'outils IA pour chaque activité','Tableur de suivi des revenus','Accès communauté privée','Accès à vie + mises à jour'],
  },
  {
    name: 'AI Mastery Course', icon: '🚀', highlight: true, badge: 'Meilleur rapport qualité-prix', priceUsd: 97,
    stripeProduct: 'mastery' as const,
    description: '8 modules, 40+ lessons — from zero to $10K/month with AI. Most complete course.',
    features: ['8 modules complets, 40+ leçons','De débutant à 10 000$/mois — feuille de route','Blueprints d\'automatisation IA','Appel stratégique 1-on-1 inclus','Communauté Discord privée','Accès à vie + toutes les mises à jour'],
  },
  {
    name: 'AI Agency Blueprint', icon: '🏢', highlight: false, priceUsd: 197,
    stripeProduct: null,
    link: '/contact',
    description: 'Complete system to build and sell an AI agency. Scripts, packages, pricing, contracts.',
    features: ['Guide de structure & positionnement agence','3 packs de services prêts à l\'emploi','Scripts & templates de prospection clients','Calculateur de prix & contrats','Études de cas d\'agences à 5 000$/mois','Accès à vie + mises à jour'],
  },
]

const premium = [
  {
    name: '1:1 AI Coaching Session', icon: '🎓', highlight: false, priceUsd: 497, link: '/contact', cta: 'Réserver une session',
    description: '90-minute private session to map your AI income strategy and build your first revenue stream.',
    features: ['Appel vidéo privé de 90 min','Feuille de route revenus IA personnalisée','Mise en place en direct de votre première automatisation','Audit d\'outils & recommandations','Plan d\'action + ressources post-appel','Support e-mail pendant 30 jours'],
  },
  {
    name: 'AI Business in a Box', icon: '📦', highlight: true, badge: 'Clé en main', priceUsd: 997, link: '/contact', cta: 'Commencer',
    description: 'We build your entire AI business — website, offers, lead funnel, email automation. You just close clients.',
    features: ['Site web personnalisé conçu & déployé','Stack d\'offres complète (3 niveaux)','Lead magnet + séquence e-mail (7 e-mails)','Landing page + configuration checkout','Produits Stripe configurés','Système de contenu IA mis en place','2 appels d\'onboarding 1-on-1','Support prioritaire pendant 60 jours'],
  },
]

/* ─── UI helpers ─── */
function SectionTitle({ label, title, sub }: { label: string; title: string; sub: string }) {
  return (
    <div className="text-center mb-12">
      <span className="inline-flex items-center gap-2 border border-purple-500/30 bg-purple-500/5 rounded-full px-4 py-1.5 text-xs font-mono text-purple-400 mb-5">{label}</span>
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">{title}</h2>
      <p className="text-gray-400 max-w-xl mx-auto text-sm leading-relaxed">{sub}</p>
    </div>
  )
}
function Check() {
  return (
    <svg className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  )
}
const base = 'rounded-2xl border flex flex-col relative'
const normal = `${base} border-white/[0.08]`
const glow = `${base} border-purple-500/40`
const bg = 'rgba(255,255,255,0.03)'
const bgH = 'rgba(139,92,246,0.06)'
const gradBtn = { background: 'linear-gradient(135deg,#3b82f6,#8b5cf6)', color: '#fff' }
const ghostBtn = { border: '1px solid rgba(255,255,255,0.12)', color: '#fff', background: 'transparent' }

export default function PricingPageFr() {
  const [cur, setCur] = useState<StripeCurrency>('usd')
  const c = currencies.find(x => x.code === cur)!

  return (
    <div className="min-h-screen" style={{ background: '#09090b' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20">

        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-flex items-center gap-2 border border-white/10 rounded-full px-4 py-1.5 text-xs text-gray-400 font-mono mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            {t(locale, 'pricing.badge')}
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-5 leading-tight">
            {t(locale, 'pricing.title_line1')}<br />
            <span style={{ background: 'linear-gradient(135deg,#3b82f6,#8b5cf6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              {t(locale, 'pricing.title_line2')}
            </span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto mb-10 text-lg">
            {t(locale, 'pricing.subtitle')}
          </p>
          <div className="inline-flex items-center gap-1 rounded-xl p-1" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}>
            {currencies.map(x => (
              <button key={x.code} onClick={() => setCur(x.code)}
                className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all ${cur === x.code ? 'text-white' : 'text-gray-500 hover:text-gray-300'}`}
                style={cur === x.code ? gradBtn : {}}>
                {x.symbol} {x.label}
              </button>
            ))}
          </div>
        </div>

        {/* ── SECTION 1: Subscriptions ── */}
        <div className="mb-24">
          <SectionTitle label={`🔁 ${t(locale, 'pricing.subscriptions_label')}`} title={t(locale, 'pricing.subscriptions_title')} sub={t(locale, 'pricing.subscriptions_sub')} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {subscriptions.map(p => (
              <div key={p.name} className={p.highlight ? glow : normal} style={{ background: p.highlight ? bgH : bg, padding: '28px' }}>
                {p.badge && <div className="absolute -top-3.5 left-1/2 -translate-x-1/2"><span className="text-xs font-bold px-3 py-1 rounded-full text-white" style={gradBtn}>{p.badge}</span></div>}
                <div className="mb-6">
                  <div className="text-xs font-mono text-purple-400 mb-1">{p.tagline}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{p.name}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{p.description}</p>
                </div>
                <div className="mb-6 flex items-end gap-1">
                  <span className="text-4xl font-black text-white">{c.symbol}{price(p.priceUsd, c.rate)}</span>
                  <span className="text-gray-500 text-sm mb-1">{p.period}</span>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {p.features.map(f => <li key={f} className="flex items-start gap-2.5 text-sm text-gray-400"><Check />{f}</li>)}
                </ul>
                <a href={p.link} className="block text-center text-sm font-semibold py-3.5 rounded-xl transition-opacity hover:opacity-90"
                  style={p.highlight ? gradBtn : ghostBtn}>{p.cta}</a>
              </div>
            ))}
          </div>
        </div>

        {/* ── SECTION 2: One-time (Stripe Checkout) ── */}
        <div className="mb-24">
          <SectionTitle label={`⚡ ${t(locale, 'pricing.onetime_label')}`} title={t(locale, 'pricing.onetime_title')} sub={t(locale, 'pricing.onetime_sub')} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {oneTime.map(p => (
              <div key={p.name} className={p.highlight ? glow : normal} style={{ background: p.highlight ? bgH : bg, padding: '28px' }}>
                {'badge' in p && p.badge && <div className="absolute -top-3.5 left-1/2 -translate-x-1/2"><span className="text-xs font-bold px-3 py-1 rounded-full text-white" style={gradBtn}>{p.badge}</span></div>}
                <div className="text-3xl mb-4">{p.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">{p.name}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-5">{p.description}</p>
                <div className="mb-5 flex items-end gap-1">
                  <span className="text-3xl font-black text-white">{c.symbol}{price(p.priceUsd, c.rate)}</span>
                  <span className="text-gray-500 text-xs mb-1 ml-1">{t(locale, 'common.one_time')}</span>
                </div>
                <ul className="space-y-2.5 mb-7 flex-1">
                  {p.features.map(f => <li key={f} className="flex items-start gap-2.5 text-sm text-gray-400"><Check />{f}</li>)}
                </ul>
                {p.stripeProduct ? (
                  <button onClick={() => stripeCheckout(p.stripeProduct!, cur)}
                    className="w-full text-center font-bold py-3.5 rounded-xl text-sm transition-all hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                    style={p.highlight ? gradBtn : ghostBtn}>
                    {t(locale, 'common.buy_now')} — {c.symbol}{price(p.priceUsd, c.rate)}
                  </button>
                ) : (
                  <a href={'link' in p ? p.link : '#'} target="_blank" rel="noopener noreferrer"
                    className="block text-center text-sm font-semibold py-3 rounded-xl hover:opacity-90"
                    style={ghostBtn}>
                    {t(locale, 'pricing.get_access')} — {c.symbol}{price(p.priceUsd, c.rate)}
                  </a>
                )}
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center gap-3 mt-8 text-gray-600 text-xs">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.591-7.305z"/></svg>
            {t(locale, 'pricing.stripe_footer')}
          </div>
        </div>

        {/* ── SECTION 3: Premium ── */}
        <div className="mb-20">
          <SectionTitle label={`🏆 ${t(locale, 'pricing.premium_label')}`} title={t(locale, 'pricing.premium_title')} sub={t(locale, 'pricing.premium_sub')} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {premium.map(p => (
              <div key={p.name} className={p.highlight ? glow : normal} style={{ background: p.highlight ? bgH : bg, padding: '36px' }}>
                {'badge' in p && p.badge && <div className="absolute -top-3.5 left-1/2 -translate-x-1/2"><span className="text-xs font-bold px-3 py-1 rounded-full text-white" style={gradBtn}>{p.badge}</span></div>}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="text-4xl mb-3">{p.icon}</div>
                    <h3 className="text-2xl font-bold text-white mb-2">{p.name}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed max-w-sm">{p.description}</p>
                  </div>
                  <div className="text-right ml-6 flex-shrink-0">
                    <div className="text-4xl font-black text-white">{c.symbol}{price(p.priceUsd, c.rate)}</div>
                    <div className="text-gray-500 text-xs mt-1">{t(locale, 'common.one_time')}</div>
                  </div>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
                  {p.features.map(f => <li key={f} className="flex items-start gap-2.5 text-sm text-gray-400"><Check />{f}</li>)}
                </ul>
                <a href={p.link} className="block text-center font-bold py-4 rounded-xl text-sm transition-opacity hover:opacity-90"
                  style={p.highlight ? gradBtn : { border: '1px solid rgba(255,255,255,0.15)', color: '#fff' }}>
                  {p.cta} →
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* ── SECTION 4: AI Ecosystem ── */}
        <div className="mb-20">
          <SectionTitle label={`🤖 ${t(locale, 'pricing.ecosystem_label')}`} title={t(locale, 'pricing.ecosystem_title')} sub={t(locale, 'pricing.ecosystem_sub')} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a href="https://www.vocalis.pro" target="_blank" rel="noopener noreferrer"
              className="group rounded-2xl p-8 flex flex-col relative overflow-hidden transition-all hover:border-blue-500/40 hover:-translate-y-1"
              style={{ background: 'linear-gradient(135deg,rgba(59,130,246,0.08),rgba(139,92,246,0.05))', border: '1px solid rgba(59,130,246,0.2)' }}>
              <div className="absolute top-0 right-0 w-48 h-48 rounded-full opacity-10 pointer-events-none" style={{ background: 'radial-gradient(circle,#3b82f6,transparent)', filter: 'blur(40px)' }} />
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0" style={{ background: 'linear-gradient(135deg,#3b82f6,#6366f1)' }}>🎙️</div>
                <div>
                  <div className="font-bold text-white text-xl">Vocalis.pro</div>
                  <div className="text-xs text-blue-400 font-mono">Plateforme d'agents vocaux IA</div>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-5 flex-1">Des agents vocaux IA qui répondent aux appels, prennent les rendez-vous et qualifient les prospects 24h/24, dans toutes les langues. Remplacez votre centre d'appels par l'IA.</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {['Appels 24h/24','Intégration CRM','Mise en place 48h','Démo gratuite'].map(t => (
                  <span key={t} className="text-xs px-2.5 py-1 rounded-full text-blue-300" style={{ background: 'rgba(59,130,246,0.1)', border: '1px solid rgba(59,130,246,0.2)' }}>{t}</span>
                ))}
              </div>
              <span className="inline-flex items-center gap-2 text-blue-400 font-semibold text-sm group-hover:gap-3 transition-all">Découvrir Vocalis.pro <span>→</span></span>
            </a>

            <a href="https://www.seo-true.com" target="_blank" rel="noopener noreferrer"
              className="group rounded-2xl p-8 flex flex-col relative overflow-hidden transition-all hover:border-emerald-500/40 hover:-translate-y-1"
              style={{ background: 'linear-gradient(135deg,rgba(16,185,129,0.08),rgba(59,130,246,0.05))', border: '1px solid rgba(16,185,129,0.2)' }}>
              <div className="absolute top-0 right-0 w-48 h-48 rounded-full opacity-10 pointer-events-none" style={{ background: 'radial-gradient(circle,#10b981,transparent)', filter: 'blur(40px)' }} />
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0" style={{ background: 'linear-gradient(135deg,#10b981,#3b82f6)' }}>📈</div>
                <div>
                  <div className="font-bold text-white text-xl">SEO-True.com</div>
                  <div className="text-xs text-emerald-400 font-mono">Plateforme SEO automatisée par IA</div>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-5 flex-1">Articles SEO générés par IA et publiés sur des domaines à haute autorité (DA 40-60+) avec des backlinks vers votre site. Plan Pro : 30 articles/mois. <strong className="text-white">1 article gratuit pour tester.</strong></p>
              <div className="flex flex-wrap gap-2 mb-6">
                {['Backlinks DA 40-60+','30 articles/mois','15+ niches','1 article gratuit'].map(t => (
                  <span key={t} className="text-xs px-2.5 py-1 rounded-full text-emerald-300" style={{ background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.2)' }}>{t}</span>
                ))}
              </div>
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-2 text-emerald-400 font-semibold text-sm group-hover:gap-3 transition-all">Découvrir SEO-True.com <span>→</span></span>
                <span className="text-xs px-2.5 py-1 rounded-full text-emerald-300 font-semibold" style={{ background: 'rgba(16,185,129,0.15)', border: '1px solid rgba(16,185,129,0.3)' }}>1 article GRATUIT</span>
              </div>
            </a>
          </div>
        </div>

        {/* Trust */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {[
            { icon: '🔒', title: t(locale, 'pricing.trust_stripe'), sub: t(locale, 'pricing.trust_stripe_sub') },
            { icon: '♾️', title: t(locale, 'pricing.trust_lifetime'), sub: t(locale, 'pricing.trust_lifetime_sub') },
            { icon: '🔄', title: t(locale, 'pricing.trust_updates'), sub: t(locale, 'pricing.trust_updates_sub') },
            { icon: '💬', title: t(locale, 'pricing.trust_guarantee'), sub: t(locale, 'pricing.trust_guarantee_sub') },
          ].map(item => (
            <div key={item.title} className="rounded-2xl text-center py-6 px-4" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
              <div className="text-2xl mb-2">{item.icon}</div>
              <div className="text-sm font-semibold text-white mb-1">{item.title}</div>
              <div className="text-xs text-gray-500">{item.sub}</div>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">{t(locale, 'faq.title')}</h2>
          <div className="space-y-3">
            {[
              { q: t(locale, 'faq.q1'), a: t(locale, 'faq.a1') },
              { q: t(locale, 'faq.q2'), a: t(locale, 'faq.a2') },
              { q: t(locale, 'faq.q3'), a: t(locale, 'faq.a3') },
              { q: t(locale, 'faq.q4'), a: t(locale, 'faq.a4') },
              { q: t(locale, 'faq.q5'), a: t(locale, 'faq.a5') },
              { q: t(locale, 'faq.q6'), a: t(locale, 'faq.a6') },
            ].map(faq => (
              <div key={faq.q} className="rounded-2xl px-6 py-5" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
                <h3 className="font-semibold text-white mb-2 text-sm">{faq.q}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
