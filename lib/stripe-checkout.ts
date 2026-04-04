// Stripe Payment Links — organized by product + currency
// All links are live Stripe Checkout sessions (account: SAvtaBJD1Ga5lmq)

export const STRIPE_LINKS = {
  // ── One-time products ──
  starter: {
    usd: 'https://buy.stripe.com/8x2dR82UO8N21Os9tIco00p', // AI Starter Kit $27
    eur: 'https://buy.stripe.com/fZu9ASeDw1kA1OseO2co00q', // AI Starter Kit €24
    gbp: 'https://buy.stripe.com/dRmdR87b47IY2SwcFUco00r', // AI Starter Kit £21
  },
  blueprint: {
    usd: 'https://buy.stripe.com/bJefZgcvo4wM0KofS6co00s', // Done-For-You Prompts $47
    eur: 'https://buy.stripe.com/8x29AS7b47IY50EdJYco00t', // Done-For-You Prompts €43
    gbp: 'https://buy.stripe.com/fZu4gycvo6EUgJm49oco00u', // Done-For-You Prompts £37
  },
  mastery: {
    usd: 'https://buy.stripe.com/7sY28qbrk8N20KoaxMco00v', // AI Mastery Course $97
    eur: 'https://buy.stripe.com/bJe9ASfHA5AQ2SwaxMco00w', // AI Mastery Course €89
    gbp: 'https://buy.stripe.com/7sYaEW8f8bZe8cQdJYco00x', // AI Mastery Course £77
  },
  // ── Subscriptions ──
  insider: {
    usd: 'https://buy.stripe.com/6oU4gy0MG9R6gJmgWaco00d', // AI Insider Club $19/mo
    eur: 'https://buy.stripe.com/00w5kC9jc5AQeBe35kco00e', // AI Insider Club €17/mo
    gbp: 'https://buy.stripe.com/4gMfZg670gfugJmdJYco00f', // AI Insider Club £15/mo
  },
  toolspro: {
    usd: 'https://buy.stripe.com/eVqeVc670e7m3WAbBQco00g', // AI Tools Pro $29/mo
    eur: 'https://buy.stripe.com/28E00iang1kAct6gWaco00h', // AI Tools Pro €27/mo
    gbp: 'https://buy.stripe.com/28E28qdzsgfu3WA7lAco00i', // AI Tools Pro £23/mo
  },
  mastermind: {
    usd: 'https://buy.stripe.com/fZu5kC2UO0gw50E9tIco00j', // AI Mastermind $97/mo
    eur: 'https://buy.stripe.com/9B6fZgang4wMdxacFUco00k', // AI Mastermind €89/mo
    gbp: 'https://buy.stripe.com/cNi28q1QK9R6gJmbBQco00l', // AI Mastermind £77/mo
  },
  agency: {
    usd: 'https://buy.stripe.com/00weVc6702oE78M35kco00m', // AI Agency Blueprint $197
    eur: 'https://buy.stripe.com/fZufZg52W8N2ct69tIco00n', // AI Agency Blueprint €181
    gbp: 'https://buy.stripe.com/28E7sK52Wgfu0Ko9tIco00o', // AI Agency Blueprint £155
  },
}

export type StripeProduct = keyof typeof STRIPE_LINKS
export type StripeCurrency = 'usd' | 'eur' | 'gbp'

export function stripeCheckout(product: StripeProduct, currency: StripeCurrency) {
  const url = STRIPE_LINKS[product][currency]
  window.open(url, '_blank', 'noopener noreferrer')
}
