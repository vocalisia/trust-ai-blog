import { STRIPE_LINKS } from '@/lib/stripe-checkout'

/* ─── Types ─── */

export type Currency = 'usd' | 'eur' | 'gbp'

export interface Product {
  slug: string
  name: string
  tagline: string
  price: Record<Currency, number>
  stripeLinks: Record<Currency, string> | null
  type: 'one-time' | 'subscription' | 'premium'
  badge?: string
  features: string[]
  bonuses: string[]
  description: string
  whatYouGet: string[]
  faq: { q: string; a: string }[]
  cta: string
}

export const CURRENCY_SYMBOLS: Record<Currency, string> = {
  usd: '$',
  eur: '\u20ac',
  gbp: '\u00a3',
}

/* ─── Products ─── */

export const PRODUCTS: Product[] = [
  {
    slug: 'ai-starter-kit',
    name: 'AI Starter Kit',
    tagline: 'Everything you need to start making money with AI today',
    price: { usd: 27, eur: 25, gbp: 22 },
    stripeLinks: STRIPE_LINKS.starter,
    type: 'one-time',
    cta: 'Get Instant Access',
    description:
      'The AI Starter Kit is your fast-track to earning with artificial intelligence. Inside you get 50 battle-tested prompts that real freelancers and solopreneurs use to land clients, create content, and automate tasks -- plus a 30-page beginner guide that walks you through the exact steps from zero to your first AI-powered dollar. No fluff, no theory. Just actionable tactics you can use tonight.',
    features: [
      '50 income-generating prompts tested across real projects',
      '30-page step-by-step beginner guide (PDF)',
      'Top 10 free AI tools explained with use cases',
      'Copy-paste prompt templates for freelancing',
      'Quick-start checklist to earn within 48 hours',
      'Works with ChatGPT, Claude, and Gemini',
    ],
    bonuses: [
      'Bonus: 5 "money-now" prompt chains that stack together for instant results',
      'Bonus: Curated list of 20 platforms hiring AI freelancers right now',
    ],
    whatYouGet: [
      '50 tested prompts organized by income method',
      '30-page PDF beginner guide with screenshots',
      'AI tool comparison chart (free vs paid)',
      'Quick-start income checklist',
      'Lifetime access and all future updates',
    ],
    faq: [
      {
        q: 'Do I need any AI experience?',
        a: 'Not at all. The Starter Kit is designed for complete beginners. Every prompt comes with instructions and the guide walks you through each tool step by step.',
      },
      {
        q: 'Which AI tools does this work with?',
        a: 'All prompts are optimized for ChatGPT, Claude, and Gemini. Most also work with other LLMs. The guide covers the best free tools so you can start without paying for any subscription.',
      },
      {
        q: 'How fast can I see results?',
        a: 'Many of our customers land their first paid gig within 48 hours using the freelancing prompts. The quick-start checklist is designed to get you earning as fast as possible.',
      },
    ],
  },
  {
    slug: 'done-for-you-prompts',
    name: 'Done-For-You Prompts',
    tagline: '500+ expert prompts across 12 niches -- your unfair advantage',
    price: { usd: 47, eur: 43, gbp: 38 },
    stripeLinks: STRIPE_LINKS.blueprint,
    type: 'one-time',
    cta: 'Unlock 500+ Prompts',
    description:
      'Stop wasting hours writing mediocre prompts. This library gives you 500+ professionally crafted prompts organized across 12 high-demand niches -- from copywriting and ecommerce to coding and agency work. Each prompt has been tested on real projects and refined for maximum output quality. Just copy, paste, customize, and deliver client-quality work in minutes instead of hours.',
    features: [
      '500+ prompts across 12 profitable niches',
      'Works with ChatGPT, Claude, Gemini, and Midjourney',
      'Organized in a searchable Notion database',
      'Niche categories: copywriting, ecom, SaaS, agency, content, coding, and more',
      'Each prompt includes context notes and output examples',
      'Updated quarterly with new prompts and niches',
      'Commercial use license included',
    ],
    bonuses: [
      'Bonus: 20 automation workflow templates (Zapier + Make.com)',
      'Bonus: Prompt engineering cheat sheet -- write your own expert prompts',
      'Bonus: Private community access for prompt sharing',
    ],
    whatYouGet: [
      '500+ copy-paste prompts in a Notion database',
      '12 niche-specific prompt collections',
      '20 automation workflow templates',
      'Prompt engineering cheat sheet (PDF)',
      'Commercial use license for client work',
      'Lifetime access and quarterly updates',
    ],
    faq: [
      {
        q: 'Can I use these prompts for client work?',
        a: 'Yes. The commercial use license means you can use every prompt to deliver work for clients, create content for businesses, or build products. There are no restrictions.',
      },
      {
        q: 'How are the prompts organized?',
        a: 'Everything lives in a clean Notion database. You can filter by niche, use case, AI tool, or difficulty level. Each prompt includes context notes so you know exactly when and how to use it.',
      },
      {
        q: 'How often is the library updated?',
        a: 'We add new prompts and niches every quarter. As AI tools evolve, we update existing prompts to stay current. You get all updates automatically, forever.',
      },
    ],
  },
  {
    slug: 'ai-side-hustle-blueprint',
    name: 'AI Side Hustle Blueprint',
    tagline: 'Launch your AI side hustle in 7 days -- step by step',
    price: { usd: 47, eur: 43, gbp: 38 },
    stripeLinks: STRIPE_LINKS.blueprint,
    type: 'one-time',
    cta: 'Start Your Side Hustle',
    description:
      'This is the exact 7-day blueprint our team uses to launch profitable AI side hustles from scratch. Day by day, you will pick your niche, set up your tools, create your offer, find clients, and close your first deal. Includes 5 proven business models, a complete AI toolstack for each one, and an income tracking spreadsheet so you can see your progress in real time.',
    features: [
      '7-day step-by-step action plan with daily tasks',
      '5 proven AI business models explained in depth',
      'Complete AI toolstack recommendation for each model',
      'Client outreach templates and scripts',
      'Income tracking spreadsheet (Google Sheets)',
      'Private community access for accountability',
      'Real case studies from students earning $2K-$8K/month',
    ],
    bonuses: [
      'Bonus: Pricing calculator -- know exactly what to charge',
      'Bonus: 10 "first client" email templates that convert',
      'Bonus: Weekly accountability tracker template',
    ],
    whatYouGet: [
      '7-day launch blueprint (PDF + video walkthroughs)',
      '5 AI business model breakdowns with real numbers',
      'Client outreach scripts and templates',
      'Income tracking spreadsheet',
      'Pricing calculator tool',
      'Private community access',
      'Lifetime access and updates',
    ],
    faq: [
      {
        q: 'What kind of side hustles does this cover?',
        a: 'Five proven models: AI content agency, AI-assisted freelancing, prompt engineering services, AI automation consulting, and AI-powered ecommerce. Each one has a full breakdown with real income numbers.',
      },
      {
        q: 'Can I do this alongside a full-time job?',
        a: 'Absolutely. The 7-day plan is designed for people with limited time. Each daily task takes 1-2 hours. Many of our students launched while working full-time and transitioned once their side income matched their salary.',
      },
      {
        q: 'What if I have no clients or portfolio yet?',
        a: 'The blueprint includes a "first client" strategy that works even with zero experience. You will build a mini portfolio in day 3 and land your first paying client by day 6 using our outreach templates.',
      },
    ],
  },
  {
    slug: 'ai-mastery-course',
    name: 'AI Mastery Course',
    tagline: 'The complete system to build a $10K/month AI income',
    price: { usd: 97, eur: 89, gbp: 79 },
    stripeLinks: STRIPE_LINKS.mastery,
    type: 'one-time',
    badge: 'BEST VALUE',
    cta: 'Enroll Now',
    description:
      'This is our flagship course and the most comprehensive AI income program available. Eight modules, 40+ lessons, and a personal 1-on-1 strategy call take you from complete beginner to a $10K/month AI income. You will master prompt engineering, build automated workflows, learn to sell AI services, and scale your business with systems that run without you. This is the course we wish existed when we started.',
    features: [
      '8 in-depth modules with 40+ video lessons',
      'From absolute beginner to $10K/month roadmap',
      'AI automation blueprints you can deploy immediately',
      '1-on-1 strategy call with our team (30 min)',
      'Private Discord community for students',
      'Weekly live Q&A sessions for 3 months',
      'All prompt libraries and templates included',
      'Lifetime access with all future module updates',
    ],
    bonuses: [
      'Bonus: Complete AI Agency Starter Pack (service packages + contracts)',
      'Bonus: Done-For-You Prompts library (500+ prompts -- $47 value)',
      'Bonus: AI Side Hustle Blueprint included ($47 value)',
    ],
    whatYouGet: [
      '40+ video lessons across 8 modules',
      '1-on-1 strategy call (30 minutes)',
      'All prompt libraries and templates',
      'AI automation blueprints (Zapier, Make, n8n)',
      'Private Discord community access',
      'Weekly live Q&A for 3 months',
      'Lifetime access and all future updates',
    ],
    faq: [
      {
        q: 'How long does the course take to complete?',
        a: 'Most students finish in 4-6 weeks going at their own pace. Each module builds on the previous one, but you can skip ahead to the topics most relevant to your goals. The content is available forever.',
      },
      {
        q: 'What happens on the 1-on-1 strategy call?',
        a: 'A 30-minute private video call with a member of our team. We review your situation, help you pick the best AI income model for your skills, and create a personalized 90-day action plan. You can book it anytime after enrolling.',
      },
      {
        q: 'Is this different from the Starter Kit and Blueprint?',
        a: 'Yes -- and it includes both as bonuses. The Mastery Course is the full system: strategy, implementation, automation, scaling, and ongoing support. The other products are standalone tools for people who want a specific piece of the puzzle.',
      },
    ],
  },
  {
    slug: 'ai-agency-blueprint',
    name: 'AI Agency Blueprint',
    tagline: 'Build a full AI service agency from the ground up',
    price: { usd: 197, eur: 179, gbp: 159 },
    stripeLinks: null,
    type: 'premium',
    cta: 'Apply Now',
    description:
      'The AI Agency Blueprint is a complete business-in-a-box for anyone serious about building a real AI services agency. You get our proven agency structure, three done-for-you service packages with pricing, client outreach scripts that book calls, contract templates reviewed by lawyers, and detailed case studies from agencies already earning $5K-$20K per month. This is the playbook we used to build our own agency.',
    features: [
      'Complete agency structure and positioning framework',
      '3 done-for-you service packages with tiered pricing',
      'Client outreach scripts that book discovery calls',
      'Contract templates and proposals (lawyer-reviewed)',
      'Pricing calculator with profit margin analysis',
      'Case studies from agencies earning $5K-$20K/month',
      'Hiring guide: when and who to bring on first',
      'Client onboarding and delivery SOPs',
    ],
    bonuses: [
      'Bonus: Agency website template (Framer) ready to customize',
      'Bonus: 30-day client acquisition challenge with daily tasks',
      'Bonus: Monthly group coaching call for 3 months',
    ],
    whatYouGet: [
      'Full agency playbook (PDF + video modules)',
      '3 service packages with pricing and scope documents',
      'Client outreach scripts and email sequences',
      'Contract and proposal templates',
      'Pricing calculator spreadsheet',
      'Agency website template (Framer)',
      'Access to monthly group coaching calls (3 months)',
    ],
    faq: [
      {
        q: 'Do I need to know how to code?',
        a: 'Not at all. The service packages are designed around no-code AI tools. You will use platforms like ChatGPT, Make.com, and other no-code tools to deliver services to clients.',
      },
      {
        q: 'How is this different from the AI Mastery Course?',
        a: 'The Mastery Course teaches multiple AI income models. The Agency Blueprint is laser-focused on one model: building and scaling an AI agency. It includes agency-specific assets like contracts, service packages, and hiring guides that are not in the course.',
      },
      {
        q: 'Why do I need to apply?',
        a: 'We want to make sure this is the right fit for you. The application takes 2 minutes and helps us understand your background so we can give you the best onboarding experience. Most applicants are accepted within 24 hours.',
      },
    ],
  },
  {
    slug: 'ai-coaching',
    name: '1:1 AI Coaching Session',
    tagline: 'Your personal AI income roadmap -- built live with an expert',
    price: { usd: 497, eur: 449, gbp: 399 },
    stripeLinks: null,
    type: 'premium',
    cta: 'Book Your Session',
    description:
      'A 90-minute private video call with a senior member of our team. We will audit your current setup, identify the highest-ROI AI income opportunity for your specific skills and situation, and build a custom roadmap you can execute immediately. This is not a generic webinar -- it is a focused strategy session tailored entirely to you, with 30 days of email follow-up support afterward.',
    features: [
      '90-minute private 1-on-1 video call',
      'Custom AI income roadmap tailored to your skills',
      'Live tool audit and optimization of your current setup',
      'Personalized action plan with 30/60/90 day milestones',
      'Recommendations for tools, niches, and pricing',
      '30-day email follow-up support after the call',
    ],
    bonuses: [
      'Bonus: Call recording sent to you within 24 hours',
      'Bonus: Written summary with action items and resource links',
      'Bonus: Priority access to future group coaching sessions',
    ],
    whatYouGet: [
      '90-minute private strategy call (Zoom)',
      'Custom AI income roadmap document',
      'Personalized 30/60/90 day action plan',
      'Tool and niche recommendations report',
      'Call recording (video + audio)',
      'Written summary with action items',
      '30-day email follow-up support',
    ],
    faq: [
      {
        q: 'Who will I speak with?',
        a: 'A senior member of the Trustly-AI team with hands-on experience building AI income streams. We match you with someone who has expertise in your target niche or business model.',
      },
      {
        q: 'How do I book the call?',
        a: 'After you contact us and we confirm your spot, you will receive a Calendly link to book at a time that works for you. Most sessions are scheduled within 3-5 business days.',
      },
      {
        q: 'What if I am a complete beginner?',
        a: 'That is perfectly fine. Many of our coaching clients start from zero. The session is designed to meet you where you are and create a realistic plan based on your time, budget, and goals.',
      },
    ],
  },
  {
    slug: 'ai-business-in-a-box',
    name: 'AI Business in a Box',
    tagline: 'We build your entire AI business -- you just close clients',
    price: { usd: 997, eur: 899, gbp: 799 },
    stripeLinks: null,
    type: 'premium',
    badge: 'DONE FOR YOU',
    cta: 'Get Started',
    description:
      'This is our highest-tier done-for-you service. We build your complete AI business from scratch: a custom website, a full offer stack with three pricing tiers, a lead magnet with a 7-email nurture sequence, a landing page with Stripe checkout, and an AI content system that runs on autopilot. You get two onboarding calls, 60 days of priority support, and a business that is ready to generate revenue from day one.',
    features: [
      'Custom website designed, built, and deployed',
      'Full offer stack with 3 pricing tiers',
      'Lead magnet creation + 7-email nurture sequence',
      'Landing page with Stripe checkout configured',
      'AI content system set up and automated',
      '2 x 1-on-1 onboarding calls (60 min each)',
      '60-day priority support via email and chat',
      'Complete brand kit (logo, colors, messaging)',
    ],
    bonuses: [
      'Bonus: Social media content calendar for your first 30 days',
      'Bonus: SEO setup with 5 optimized blog posts published',
      'Bonus: Lifetime access to the AI Mastery Course ($97 value)',
    ],
    whatYouGet: [
      'Custom-designed website (live and deployed)',
      '3-tier offer stack with pricing and sales pages',
      'Lead magnet + 7-email automated sequence',
      'Stripe checkout fully configured',
      'AI content automation system',
      'Brand kit (logo, colors, fonts, messaging guide)',
      '2 onboarding calls (60 min each)',
      '60-day priority support',
    ],
    faq: [
      {
        q: 'How long does the build take?',
        a: 'Most projects are delivered within 14-21 business days. The first onboarding call happens within 48 hours of purchase, and you will see progress updates throughout the build.',
      },
      {
        q: 'What do I need to provide?',
        a: 'Just your niche preference, target audience, and any existing branding. We handle everything else -- design, copy, tech setup, and deployment. The onboarding calls help us nail your positioning.',
      },
      {
        q: 'Can I make changes after delivery?',
        a: 'Absolutely. You get 60 days of priority support which includes revisions and adjustments. After that, everything is yours to modify however you like -- you own all the assets we create.',
      },
    ],
  },
]

/* ─── Helpers ─── */

export function getProduct(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug)
}

export function getProductsByType(type: Product['type']): Product[] {
  return PRODUCTS.filter((p) => p.type === type)
}
