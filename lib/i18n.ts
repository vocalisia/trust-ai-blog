export const LOCALES = ['en', 'fr'] as const
export type Locale = typeof LOCALES[number]
export const DEFAULT_LOCALE: Locale = 'en'

const translations = {
  /* ─── Navigation ─── */
  'nav.articles': { en: 'Articles', fr: 'Articles' },
  'nav.make_money': { en: 'Make Money', fr: 'Gagner de l\'Argent' },
  'nav.ai_tools': { en: 'AI Tools', fr: 'Outils IA' },
  'nav.side_hustles': { en: 'Side Hustles', fr: 'Revenus Complémentaires' },
  'nav.learn': { en: 'Learn', fr: 'Apprendre' },
  'nav.get_started': { en: 'Get Started', fr: 'Commencer' },

  /* ─── Hero ─── */
  'hero.badge': { en: 'Free AI money-making strategies every week', fr: 'Stratégies IA gratuites pour gagner de l\'argent chaque semaine' },
  'hero.title_line1': { en: 'Trust the AI.', fr: 'Faites confiance à l\'IA.' },
  'hero.title_line2': { en: 'Stack the Cash.', fr: 'Empilez les gains.' },
  'hero.subtitle': { en: 'Proven strategies to make real money with artificial intelligence. No hype, no fluff — just results.', fr: 'Des stratégies éprouvées pour gagner de l\'argent avec l\'intelligence artificielle. Pas de blabla — que des résultats.' },
  'hero.cta_articles': { en: 'Read Articles', fr: 'Lire les Articles' },
  'hero.cta_start': { en: 'Get Started', fr: 'Commencer' },

  /* ─── Home sections ─── */
  'home.featured': { en: 'Featured', fr: 'À la une' },
  'home.categories': { en: 'Categories', fr: 'Catégories' },
  'home.latest': { en: 'Latest Articles', fr: 'Derniers Articles' },
  'home.view_all': { en: 'View all articles', fr: 'Voir tous les articles' },
  'home.ecosystem': { en: 'Our AI Ecosystem', fr: 'Notre Écosystème IA' },
  'home.trust_bar': { en: 'Trusted by AI enthusiasts worldwide', fr: 'Adopté par les passionnés d\'IA dans le monde entier' },

  /* ─── Footer ─── */
  'footer.tagline': { en: 'Proven strategies to make money with artificial intelligence. No hype, just results.', fr: 'Des stratégies éprouvées pour gagner de l\'argent avec l\'IA. Pas de blabla, que des résultats.' },
  'footer.categories': { en: 'Categories', fr: 'Catégories' },
  'footer.resources': { en: 'Resources', fr: 'Ressources' },
  'footer.legal': { en: 'Legal', fr: 'Mentions légales' },
  'footer.ecosystem': { en: 'Ecosystem', fr: 'Écosystème' },
  'footer.all_articles': { en: 'All Articles', fr: 'Tous les Articles' },
  'footer.learn_free': { en: 'Learn AI (Free)', fr: 'Apprendre l\'IA (Gratuit)' },
  'footer.pricing': { en: 'Pricing', fr: 'Tarifs' },
  'footer.about': { en: 'About', fr: 'À propos' },
  'footer.contact': { en: 'Contact', fr: 'Contact' },
  'footer.privacy': { en: 'Privacy Policy', fr: 'Politique de confidentialité' },
  'footer.terms': { en: 'Terms of Service', fr: 'Conditions d\'utilisation' },
  'footer.refund': { en: 'Refund Policy', fr: 'Politique de remboursement' },
  'footer.make_money': { en: 'Make Money with AI', fr: 'Gagner de l\'Argent avec l\'IA' },
  'footer.ai_tools': { en: 'AI Tools', fr: 'Outils IA' },
  'footer.ai_agents': { en: 'AI Agents', fr: 'Agents IA' },
  'footer.side_hustles': { en: 'Side Hustles', fr: 'Revenus Complémentaires' },
  'footer.passive_income': { en: 'Passive Income', fr: 'Revenus Passifs' },

  /* ─── Page titles ─── */
  'page.pricing': { en: 'Pricing', fr: 'Tarifs' },
  'page.learn': { en: 'Learn AI', fr: 'Apprendre l\'IA' },
  'page.contact': { en: 'Contact', fr: 'Contact' },
  'page.about': { en: 'About', fr: 'À propos' },

  /* ─── Common ─── */
  'common.read_more': { en: 'Read More', fr: 'Lire la suite' },
  'common.learn_more': { en: 'Learn More', fr: 'En savoir plus' },
  'common.buy_now': { en: 'Buy Now', fr: 'Acheter maintenant' },
  'common.free': { en: 'Free', fr: 'Gratuit' },
  'common.one_time': { en: 'one-time', fr: 'paiement unique' },
  'common.cancel_anytime': { en: 'Cancel anytime', fr: 'Annulation à tout moment' },
  'common.send_message': { en: 'Send Message', fr: 'Envoyer le message' },

  /* ─── Cookie banner ─── */
  'cookie.message': { en: 'We use essential cookies for site functionality and analytics (Google Analytics) to improve your experience.', fr: 'Nous utilisons des cookies essentiels pour le bon fonctionnement du site et des analyses (Google Analytics) pour améliorer votre expérience.' },
  'cookie.accept': { en: 'Accept', fr: 'Accepter' },
  'cookie.decline': { en: 'Decline', fr: 'Refuser' },

  /* ─── Stats ─── */
  'stats.lessons': { en: 'Free Lessons', fr: 'Leçons gratuites' },
  'stats.articles': { en: 'In-depth Articles', fr: 'Articles approfondis' },
  'stats.categories': { en: 'AI Categories', fr: 'Catégories IA' },
  'stats.prompts': { en: 'Tested Prompts', fr: 'Prompts testés' },
  'stats.free_content': { en: 'Free Content', fr: 'Contenu gratuit' },

  /* ─── Pricing page ─── */
  'pricing.badge': { en: 'AI Income Resources', fr: 'Ressources IA pour vos revenus' },
  'pricing.title_line1': { en: 'Build Your AI Income.', fr: 'Développez vos revenus IA.' },
  'pricing.title_line2': { en: 'Choose Your Path.', fr: 'Choisissez votre voie.' },
  'pricing.subtitle': { en: 'From starter kits to done-for-you systems. Secure Stripe checkout. 30-day money-back guarantee.', fr: 'Des kits de démarrage aux systèmes clé en main. Paiement sécurisé Stripe. Garantie satisfait ou remboursé 30 jours.' },
  'pricing.subscriptions_label': { en: 'Recurring memberships', fr: 'Abonnements récurrents' },
  'pricing.subscriptions_title': { en: 'Monthly Subscriptions', fr: 'Abonnements mensuels' },
  'pricing.subscriptions_sub': { en: 'Constant value every week. Cancel anytime.', fr: 'De la valeur chaque semaine. Annulation à tout moment.' },
  'pricing.onetime_label': { en: 'Stripe Checkout — One-time', fr: 'Stripe Checkout — Paiement unique' },
  'pricing.onetime_title': { en: 'Pay Once, Keep Forever', fr: 'Payez une fois, gardez pour toujours' },
  'pricing.onetime_sub': { en: 'Secure Stripe payment. No subscription. Lifetime access + all updates.', fr: 'Paiement Stripe sécurisé. Sans abonnement. Accès à vie + mises à jour.' },
  'pricing.premium_label': { en: 'Premium & Done-For-You', fr: 'Premium & Clé en main' },
  'pricing.premium_title': { en: 'Serious About Results?', fr: 'Vous voulez des résultats concrets ?' },
  'pricing.premium_sub': { en: 'We do the heavy lifting — you get the results.', fr: 'On fait le gros du travail — vous récoltez les résultats.' },
  'pricing.ecosystem_label': { en: 'Our AI Ecosystem', fr: 'Notre Écosystème IA' },
  'pricing.ecosystem_title': { en: 'Supercharge with Our AI Agents', fr: 'Boostez avec nos Agents IA' },
  'pricing.ecosystem_sub': { en: 'Built by the same team — VAULT 369 LTD. Professional AI solutions for businesses.', fr: 'Conçu par la même équipe — VAULT 369 LTD. Des solutions IA professionnelles pour les entreprises.' },
  'pricing.trust_stripe': { en: 'Stripe Checkout', fr: 'Paiement Stripe' },
  'pricing.trust_stripe_sub': { en: '256-bit SSL encrypted', fr: 'Chiffrement SSL 256 bits' },
  'pricing.trust_lifetime': { en: 'Lifetime Access', fr: 'Accès à vie' },
  'pricing.trust_lifetime_sub': { en: 'Pay once, yours forever', fr: 'Payez une fois, c\'est à vous pour toujours' },
  'pricing.trust_updates': { en: 'Free Updates', fr: 'Mises à jour gratuites' },
  'pricing.trust_updates_sub': { en: 'Always current content', fr: 'Contenu toujours à jour' },
  'pricing.trust_guarantee': { en: '30-Day Guarantee', fr: 'Garantie 30 jours' },
  'pricing.trust_guarantee_sub': { en: 'Full refund, no questions', fr: 'Remboursement intégral, sans condition' },
  'pricing.stripe_footer': { en: 'Powered by Stripe · 256-bit SSL · PCI DSS compliant · No card stored', fr: 'Propulsé par Stripe · SSL 256 bits · Conforme PCI DSS · Aucune carte stockée' },
  'pricing.get_access': { en: 'Get Access', fr: 'Obtenir l\'accès' },

  /* ─── Pricing FAQ ─── */
  'faq.title': { en: 'FAQ', fr: 'Questions fréquentes' },
  'faq.q1': { en: 'How does Stripe checkout work?', fr: 'Comment fonctionne le paiement Stripe ?' },
  'faq.a1': { en: 'Click "Buy Now" — you\'re redirected to a secure Stripe hosted checkout page. We never store your card details. 256-bit SSL encrypted.', fr: 'Cliquez sur « Acheter maintenant » — vous êtes redirigé vers une page de paiement Stripe sécurisée. Nous ne stockons jamais vos informations bancaires. Chiffrement SSL 256 bits.' },
  'faq.q2': { en: 'Can I cancel my subscription anytime?', fr: 'Puis-je annuler mon abonnement à tout moment ?' },
  'faq.a2': { en: 'Yes. Cancel from your account at any time. No contracts, no penalties.', fr: 'Oui. Annulez depuis votre compte à tout moment. Sans engagement, sans pénalités.' },
  'faq.q3': { en: 'Is there a refund policy?', fr: 'Quelle est la politique de remboursement ?' },
  'faq.a3': { en: 'All products include a 30-day money-back guarantee. No questions asked.', fr: 'Tous les produits incluent une garantie satisfait ou remboursé de 30 jours. Sans condition.' },
  'faq.q4': { en: 'What is Vocalis.pro?', fr: 'Qu\'est-ce que Vocalis.pro ?' },
  'faq.a4': { en: 'An AI voice agent platform that handles your calls 24/7. Book a free demo at vocalis.pro.', fr: 'Une plateforme d\'agents vocaux IA qui gère vos appels 24h/24. Réservez une démo gratuite sur vocalis.pro.' },
  'faq.q5': { en: 'What is SEO-True.com?', fr: 'Qu\'est-ce que SEO-True.com ?' },
  'faq.a5': { en: '30 SEO-optimized articles generated and published per month automatically. Results in 60 days.', fr: '30 articles optimisés SEO générés et publiés automatiquement par mois. Résultats en 60 jours.' },
  'faq.q6': { en: 'Can I switch plans?', fr: 'Puis-je changer de formule ?' },
  'faq.a6': { en: 'Yes. Upgrade or downgrade any subscription, or buy additional one-time products at any time.', fr: 'Oui. Changez de formule à tout moment, ou achetez des produits supplémentaires quand vous le souhaitez.' },

  /* ─── About page ─── */
  'about.badge': { en: 'Our Story', fr: 'Notre Histoire' },
  'about.title_line1': { en: 'Built by AI believers.', fr: 'Créé par des passionnés d\'IA.' },
  'about.title_line2': { en: 'For income seekers.', fr: 'Pour ceux qui veulent gagner plus.' },
  'about.intro': { en: 'Trustly-AI was born from one simple idea: artificial intelligence is the greatest wealth-creation opportunity of our generation — and most people have no idea how to use it.', fr: 'Trustly-AI est né d\'une idée simple : l\'intelligence artificielle est la plus grande opportunité de création de richesse de notre génération — et la plupart des gens ne savent pas comment en profiter.' },
  'about.mission_title': { en: 'Our Mission', fr: 'Notre Mission' },
  'about.mission_p1': { en: 'We publish daily, actionable strategies to help you generate real income using AI tools, agents, and automation — no PhD required, no hype, no fluff.', fr: 'Nous publions chaque jour des stratégies concrètes pour vous aider à générer de vrais revenus grâce aux outils IA, aux agents et à l\'automatisation — pas besoin de doctorat, pas de blabla.' },
  'about.mission_p2': { en: 'Every article is researched, tested, and written to give you a concrete edge. Whether you want to freelance, build SaaS products, sell digital goods, or automate passive income streams — we cover it all.', fr: 'Chaque article est recherché, testé et rédigé pour vous donner un avantage concret. Que vous souhaitiez faire du freelance, créer des produits SaaS, vendre des produits numériques ou automatiser des revenus passifs — on couvre tout.' },
  'about.what_we_cover': { en: 'What We Cover', fr: 'Ce que nous couvrons' },
  'about.cover_money': { en: 'Make Money with AI', fr: 'Gagner de l\'argent avec l\'IA' },
  'about.cover_money_desc': { en: 'Proven income strategies using the latest AI tools.', fr: 'Des stratégies de revenus éprouvées avec les derniers outils IA.' },
  'about.cover_agents': { en: 'AI Agents & Automation', fr: 'Agents IA & Automatisation' },
  'about.cover_agents_desc': { en: 'Build bots and agents that work while you sleep.', fr: 'Créez des bots et agents qui travaillent pendant que vous dormez.' },
  'about.cover_tools': { en: 'AI Tools Reviews', fr: 'Tests d\'outils IA' },
  'about.cover_tools_desc': { en: 'Honest reviews of the tools actually worth your money.', fr: 'Des tests honnêtes des outils qui valent vraiment votre argent.' },
  'about.cover_side': { en: 'Side Hustles', fr: 'Revenus Complémentaires' },
  'about.cover_side_desc': { en: 'Launch profitable side businesses powered by AI.', fr: 'Lancez des activités complémentaires rentables grâce à l\'IA.' },
  'about.cover_crypto': { en: 'Crypto & AI', fr: 'Crypto & IA' },
  'about.cover_crypto_desc': { en: 'Where blockchain meets artificial intelligence.', fr: 'Là où la blockchain rencontre l\'intelligence artificielle.' },
  'about.cover_passive': { en: 'Passive Income', fr: 'Revenus Passifs' },
  'about.cover_passive_desc': { en: 'Set up income streams that compound over time.', fr: 'Mettez en place des sources de revenus qui se multiplient avec le temps.' },
  'about.cta_title': { en: 'Ready to start earning with AI?', fr: 'Prêt à gagner de l\'argent avec l\'IA ?' },
  'about.cta_sub': { en: 'Join thousands of readers getting daily AI income strategies. Free.', fr: 'Rejoignez des milliers de lecteurs qui reçoivent des stratégies IA quotidiennes. Gratuit.' },
  'about.cta_button': { en: 'Start Learning for Free', fr: 'Commencer à apprendre gratuitement' },

  /* ─── Contact page ─── */
  'contact.title_pre': { en: 'Get in', fr: 'Contactez-' },
  'contact.title_highlight': { en: 'Touch', fr: 'nous' },
  'contact.subtitle': { en: 'Questions, partnerships, or feedback — we read every message.', fr: 'Questions, partenariats ou retours — nous lisons chaque message.' },
  'contact.partnerships': { en: 'Partnerships', fr: 'Partenariats' },
  'contact.partnerships_desc': { en: 'Sponsorships & collaborations', fr: 'Sponsoring & collaborations' },
  'contact.feedback': { en: 'Feedback', fr: 'Retours' },
  'contact.feedback_desc': { en: 'Help us improve the content', fr: 'Aidez-nous à améliorer le contenu' },
  'contact.questions': { en: 'Questions', fr: 'Questions' },
  'contact.questions_desc': { en: 'AI strategies & tools', fr: 'Stratégies & outils IA' },
  'contact.form_title': { en: 'Send a Message', fr: 'Envoyer un message' },
  'contact.name': { en: 'Name', fr: 'Nom' },
  'contact.name_placeholder': { en: 'Your name', fr: 'Votre nom' },
  'contact.email': { en: 'Email', fr: 'E-mail' },
  'contact.subject': { en: 'Subject', fr: 'Objet' },
  'contact.subject_placeholder': { en: 'Partnership / Question / Feedback', fr: 'Partenariat / Question / Retour' },
  'contact.message': { en: 'Message', fr: 'Message' },
  'contact.message_placeholder': { en: 'Tell us what\'s on your mind...', fr: 'Dites-nous ce que vous avez en tête...' },
  'contact.email_direct': { en: 'Or email us directly at', fr: 'Ou écrivez-nous directement à' },

  /* ─── Learn page ─── */
  'learn.badge': { en: 'Free Curriculum', fr: 'Programme gratuit' },
  'learn.title_line1': { en: 'Learn AI.', fr: 'Apprenez l\'IA.' },
  'learn.title_line2': { en: 'Earn Real Money.', fr: 'Gagnez de l\'argent.' },
  'learn.subtitle': { en: 'From zero to income — free step-by-step guides on using AI tools, building automations, and generating passive revenue.', fr: 'De zéro à la rentabilité — des guides gratuits pas à pas pour utiliser les outils IA, créer des automatisations et générer des revenus passifs.' },
  'learn.beginner': { en: 'Beginner', fr: 'Débutant' },
  'learn.intermediate': { en: 'Intermediate', fr: 'Intermédiaire' },
  'learn.advanced': { en: 'Advanced', fr: 'Avancé' },
  'learn.read': { en: 'read', fr: 'de lecture' },
  'learn.cta_title': { en: 'Want the full structured course?', fr: 'Envie du cours complet et structuré ?' },
  'learn.cta_sub': { en: 'Get the complete AI Mastery Course — 8 modules, 40+ video lessons, and lifetime access. Start earning in 30 days.', fr: 'Accédez au cours AI Mastery complet — 8 modules, 40+ leçons vidéo et accès à vie. Commencez à gagner en 30 jours.' },
  'learn.cta_button': { en: 'View Pricing & Courses', fr: 'Voir les tarifs et formations' },
} as const

type TranslationKey = keyof typeof translations

export function t(locale: Locale, key: TranslationKey): string {
  const entry = translations[key]
  if (!entry) return key
  return entry[locale] ?? entry.en
}
