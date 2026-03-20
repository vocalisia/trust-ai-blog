require('dotenv').config()
const Stripe = require('stripe')
const stripe = Stripe(process.env.STRIPE_SECRET_KEY)

const products = [
  {
    name: 'AI Mastery Course',
    description: 'Complete course to master AI tools and generate passive income. 8 modules, 40+ videos, lifetime access.',
    prices: [
      { currency: 'usd', amount: 9700 },
      { currency: 'eur', amount: 8900 },
      { currency: 'gbp', amount: 7900 },
    ]
  },
  {
    name: 'AI Side Hustle Blueprint',
    description: 'Step-by-step guide to launch your first AI-powered side hustle in 7 days. Templates + tools included.',
    prices: [
      { currency: 'usd', amount: 4700 },
      { currency: 'eur', amount: 4300 },
      { currency: 'gbp', amount: 3700 },
    ]
  },
  {
    name: 'AI Tools Starter Pack',
    description: 'Curated list of 50+ AI tools with tutorials, prompts and workflows to 10x your productivity.',
    prices: [
      { currency: 'usd', amount: 2700 },
      { currency: 'eur', amount: 2400 },
      { currency: 'gbp', amount: 2100 },
    ]
  },
]

async function createProducts() {
  const results = []

  for (const product of products) {
    console.log(`Creating product: ${product.name}...`)
    const stripeProduct = await stripe.products.create({
      name: product.name,
      description: product.description,
    })

    const paymentLinks = {}

    for (const price of product.prices) {
      const stripePrice = await stripe.prices.create({
        product: stripeProduct.id,
        unit_amount: price.amount,
        currency: price.currency,
      })

      const link = await stripe.paymentLinks.create({
        line_items: [{ price: stripePrice.id, quantity: 1 }],
        after_completion: { type: 'redirect', redirect: { url: 'https://trust-ai.com/thank-you' } },
      })

      paymentLinks[price.currency] = link.url
      console.log(`  ${price.currency.toUpperCase()}: ${link.url}`)
    }

    results.push({ name: product.name, paymentLinks })
  }

  console.log('\n✅ All products created! Copy these links into your pricing page:')
  console.log(JSON.stringify(results, null, 2))
}

createProducts().catch(console.error)
