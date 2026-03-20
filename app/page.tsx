import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="bg-black text-white overflow-x-hidden">

      {/* ── ANNOUNCEMENT BAR ── */}
      <div className="bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 border-b border-purple-500/20">
        <div className="py-2.5 text-center text-sm">
          <span className="text-gray-300">🔥 Limited time:</span>
          <span className="text-white font-semibold ml-1">AI Prompt Bible now only $7</span>
          <span className="text-gray-400 ml-2">— Save 60%</span>
          <Link href="/pricing" className="ml-3 text-blue-400 font-bold underline hover:text-blue-300 transition-colors">
            Grab it now →
          </Link>
        </div>
      </div>

      {/* ── HERO ── */}
      <section className="hero-glow min-h-screen flex flex-col items-center justify-center px-6 py-24 text-center relative">

        {/* Grid bg */}
        <div className="absolute inset-0 grid-bg opacity-100 pointer-events-none" />

        {/* Live badge */}
        <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/30 rounded-full px-4 py-2 mb-8 relative z-10">
          <span className="w-2 h-2 bg-green-400 rounded-full pulse-dot" />
          <span className="text-green-400 text-sm font-medium">
            <span className="font-black">2,847</span> people making money with AI right now
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-6xl md:text-8xl font-black leading-[0.95] mb-6 max-w-5xl relative z-10 tracking-tight">
          Make
          <span className="gradient-text"> $3,000</span>
          <br />
          <span className="text-white">Per Month</span>
          <br />
          <span className="text-gray-500">With AI Tools</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-4 relative z-10 leading-relaxed">
          Join <strong className="text-white">10,000+ entrepreneurs</strong> using our proven AI systems to build passive income —{' '}
          <span className="text-blue-400">no tech skills required.</span>
        </p>

        <p className="text-gray-600 mb-10 relative z-10">⚡ Results in as little as 7 days</p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 relative z-10 mb-12">
          <Link href="/pricing"
            className="btn-shine bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-black text-xl px-10 py-5 rounded-2xl hover:scale-105 transition-transform shadow-2xl shadow-purple-500/30">
            🎁 Get Free AI Starter Kit →
          </Link>
          <Link href="/blog"
            className="border border-white/20 text-white font-bold text-xl px-10 py-5 rounded-2xl hover:bg-white/5 transition-colors flex items-center gap-3">
            <span className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-sm">▶</span>
            Read the Blog
          </Link>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500 relative z-10">
          <span>✓ No credit card required</span>
          <span className="hidden sm:block">•</span>
          <span>✓ Instant access</span>
          <span className="hidden sm:block">•</span>
          <span>✓ 30-day money back guarantee</span>
        </div>

        {/* Floating cards */}
        <div className="hidden md:block absolute left-12 top-1/3 floating" style={{ animationDelay: '0s' }}>
          <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-4 text-left w-48">
            <div className="text-3xl font-black text-green-400">$4,200</div>
            <div className="text-gray-400 text-xs mt-1">Jake earned last month</div>
            <div className="text-yellow-400 text-xs mt-2">★★★★★</div>
          </div>
        </div>

        <div className="hidden md:block absolute right-12 top-1/4 floating" style={{ animationDelay: '2s' }}>
          <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-4 text-left w-48">
            <div className="text-3xl font-black text-blue-400">$7,100</div>
            <div className="text-gray-400 text-xs mt-1">Tom&apos;s AI agency revenue</div>
            <div className="text-green-400 text-xs mt-2">↑ +340% this month</div>
          </div>
        </div>

        <div className="hidden md:block absolute right-16 bottom-1/4 floating" style={{ animationDelay: '4s' }}>
          <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-4 text-left w-44">
            <div className="text-2xl font-black text-purple-400">10,248</div>
            <div className="text-gray-400 text-xs mt-1">Active members</div>
            <div className="flex gap-1 mt-2 text-xs">🧑👩👨🧑👩</div>
          </div>
        </div>
      </section>

      {/* ── TICKER ── */}
      <div className="border-y border-white/5 py-4 overflow-hidden">
        <div className="flex ticker gap-16 whitespace-nowrap">
          {[1, 2].map((i) => (
            <div key={i} className="flex gap-16 items-center">
              <span className="text-gray-500 text-sm">🎉 Jake R. just made <strong className="text-white">$4,200</strong> this month</span>
              <span className="text-purple-400">★</span>
              <span className="text-gray-500 text-sm">🚀 Sarah M. launched her <strong className="text-white">3rd niche site</strong></span>
              <span className="text-purple-400">★</span>
              <span className="text-gray-500 text-sm">💰 Tom K. landed a <strong className="text-white">$2,000 client</strong> in 48h</span>
              <span className="text-purple-400">★</span>
              <span className="text-gray-500 text-sm">⚡ Maria just downloaded the <strong className="text-white">AI Prompt Bible</strong></span>
              <span className="text-purple-400">★</span>
              <span className="text-gray-500 text-sm">🎯 David made his <strong className="text-white">first $500</strong> with AI</span>
              <span className="text-purple-400">★</span>
              <span className="text-gray-500 text-sm">🔥 New member from <strong className="text-white">Paris 🇫🇷</strong> just joined</span>
              <span className="text-purple-400">★</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── AS SEEN IN ── */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-gray-600 uppercase tracking-widest text-xs mb-10">Featured in</p>
          <div className="flex flex-wrap justify-center items-center gap-12">
            {['Forbes', 'TechCrunch', 'Product Hunt', 'Entrepreneur', 'Inc.'].map(name => (
              <span key={name} className="text-2xl font-black text-gray-700 hover:text-gray-400 transition-colors cursor-default">{name}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="py-20 px-6 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent">
        <div className="max-w-5xl mx-auto grid md:grid-cols-4 gap-8 text-center">
          {[
            { num: '10,248', label: 'Active Members', icon: '👥' },
            { num: '$2.4M', label: 'Earned by students', icon: '💰' },
            { num: '47', label: 'AI Tools Covered', icon: '🤖' },
            { num: '4.9★', label: 'Average Rating', icon: '⭐' },
          ].map(s => (
            <div key={s.label} className="space-y-2">
              <div className="text-4xl mb-2">{s.icon}</div>
              <div className="text-4xl font-black gradient-text">{s.num}</div>
              <div className="text-gray-400 text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── PRICING ── */}
      <section className="py-24 px-6" id="pricing">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">
            <span className="text-purple-400 font-bold text-sm uppercase tracking-wider">Pricing</span>
            <h2 className="text-5xl font-black mt-2 mb-4">Start Where You Are</h2>
            <p className="text-gray-400 text-xl max-w-xl mx-auto">
              Every product is a step in your AI income journey. Start at $7, scale to $10k/month.
            </p>
          </div>

          {/* TIER 1 */}
          <div className="mb-6">
            <h3 className="text-gray-500 uppercase tracking-widest text-xs font-bold mb-4 flex items-center gap-3">
              <span className="flex-1 h-px bg-white/10" />
              🚀 Quick Wins — Start Here
              <span className="flex-1 h-px bg-white/10" />
            </h3>
          </div>
          <div className="grid md:grid-cols-3 gap-4 mb-12">
            {[
              { icon: '📄', price: '$7', name: 'ChatGPT Cheat Sheet', desc: '100+ commands & power prompts on 1 page. The fastest ROI you\'ll ever get.' },
              { icon: '📚', price: '$17', name: 'AI Prompt Bible', desc: '500 ready-to-use prompts for content, business, coding and marketing.' },
              { icon: '🧰', price: '$27', name: 'AI Tools Starter Pack', desc: 'Curated list of 50+ AI tools with tutorials, prompts and workflows.' },
            ].map(p => (
              <div key={p.name} className="card-glow border border-white/10 rounded-2xl p-6 bg-white/[0.02] transition-all">
                <div className="text-2xl mb-3">{p.icon}</div>
                <div className="text-blue-400 font-black text-3xl mb-1">{p.price}</div>
                <div className="text-white font-bold text-lg mb-2">{p.name}</div>
                <div className="text-gray-400 text-sm mb-6 leading-relaxed">{p.desc}</div>
                <Link href="/pricing" className="block text-center border border-blue-500/50 text-blue-400 font-bold py-3 rounded-xl hover:bg-blue-500/10 transition-colors">
                  Get Instant Access →
                </Link>
              </div>
            ))}
          </div>

          {/* TIER 2 */}
          <div className="mb-6">
            <h3 className="text-gray-500 uppercase tracking-widest text-xs font-bold mb-4 flex items-center gap-3">
              <span className="flex-1 h-px bg-white/10" />
              💎 Most Popular — Full Systems
              <span className="flex-1 h-px bg-white/10" />
            </h3>
          </div>
          <div className="grid md:grid-cols-3 gap-4 mb-12">
            <div className="card-glow border-2 border-purple-500/60 rounded-2xl p-6 bg-purple-500/5 transition-all relative">
              <div className="absolute -top-3 left-6 bg-purple-600 text-white text-xs font-black px-3 py-1 rounded-full">BESTSELLER</div>
              <div className="text-2xl mb-3">📱</div>
              <div className="text-purple-400 font-black text-3xl mb-1">$47</div>
              <div className="text-white font-bold text-lg mb-2">AI Freelancer Toolkit</div>
              <div className="text-gray-400 text-sm mb-6 leading-relaxed">Complete toolkit to land $500-$2,000 freelance clients using AI. Templates + scripts included.</div>
              <Link href="/pricing" className="block text-center bg-purple-600 hover:bg-purple-500 text-white font-bold py-3 rounded-xl transition-colors">Get Instant Access →</Link>
            </div>
            <div className="card-glow border-2 border-purple-500/60 rounded-2xl p-6 bg-purple-500/5 transition-all relative">
              <div className="absolute -top-3 left-6 bg-red-500 text-white text-xs font-black px-3 py-1 rounded-full">🔥 HOT</div>
              <div className="text-2xl mb-3">📋</div>
              <div className="text-purple-400 font-black text-3xl mb-1">$47</div>
              <div className="text-white font-bold text-lg mb-2">AI Side Hustle Blueprint</div>
              <div className="text-gray-400 text-sm mb-6 leading-relaxed">Launch your first AI-powered side hustle in 7 days. Step-by-step system.</div>
              <Link href="/pricing" className="block text-center bg-purple-600 hover:bg-purple-500 text-white font-bold py-3 rounded-xl transition-colors">Get Instant Access →</Link>
            </div>
            <div className="card-glow border-2 border-purple-500/60 rounded-2xl p-6 bg-purple-500/5 transition-all relative">
              <div className="absolute -top-3 left-6 bg-blue-500 text-white text-xs font-black px-3 py-1 rounded-full">NEW ✨</div>
              <div className="text-2xl mb-3">🏭</div>
              <div className="text-purple-400 font-black text-3xl mb-1">$67</div>
              <div className="text-white font-bold text-lg mb-2">AI Content Factory</div>
              <div className="text-gray-400 text-sm mb-6 leading-relaxed">Full system to produce and monetize AI content at scale. SOPs + templates included.</div>
              <Link href="/pricing" className="block text-center bg-purple-600 hover:bg-purple-500 text-white font-bold py-3 rounded-xl transition-colors">Get Instant Access →</Link>
            </div>
          </div>

          {/* TIER 3 */}
          <div className="mb-6">
            <h3 className="text-gray-500 uppercase tracking-widest text-xs font-bold mb-4 flex items-center gap-3">
              <span className="flex-1 h-px bg-white/10" />
              🏆 Premium — Maximum Results
              <span className="flex-1 h-px bg-white/10" />
            </h3>
          </div>
          <div className="grid md:grid-cols-3 gap-4 mb-12">
            <div className="card-glow border border-yellow-500/30 rounded-2xl p-6 bg-yellow-500/5 transition-all">
              <div className="text-2xl mb-3">🎓</div>
              <div className="text-yellow-400 font-black text-3xl mb-1">$97</div>
              <div className="text-white font-bold text-lg mb-2">AI Mastery Course</div>
              <div className="text-gray-400 text-sm mb-2 leading-relaxed">8 modules, 40+ videos. Master every major AI tool and build your income stack.</div>
              <ul className="text-gray-400 text-xs space-y-1 mb-6">
                <li>✓ Lifetime access</li>
                <li>✓ Private community</li>
                <li>✓ Weekly live Q&A</li>
              </ul>
              <Link href="/pricing" className="block text-center bg-yellow-500 hover:bg-yellow-400 text-black font-black py-3 rounded-xl transition-colors">Enroll Now →</Link>
            </div>
            <div className="card-glow border-2 border-yellow-400/50 rounded-2xl p-8 bg-gradient-to-b from-yellow-500/10 to-transparent transition-all relative scale-105 shadow-2xl shadow-yellow-500/20">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-black px-4 py-1.5 rounded-full whitespace-nowrap">
                👑 MOST POPULAR
              </div>
              <div className="text-2xl mb-3">🏢</div>
              <div className="text-yellow-400 font-black text-3xl mb-1">$147</div>
              <div className="text-white font-bold text-xl mb-2">AI Agency Blueprint</div>
              <div className="text-gray-300 text-sm mb-2 leading-relaxed">Build a $5k-$20k/month AI agency. Get clients, deliver results, scale fast.</div>
              <ul className="text-gray-300 text-xs space-y-1 mb-6">
                <li>✓ Client acquisition system</li>
                <li>✓ Pricing templates</li>
                <li>✓ Done-for-you proposals</li>
                <li>✓ 1 free coaching call</li>
              </ul>
              <Link href="/pricing" className="block text-center bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-black py-4 rounded-xl hover:opacity-90 transition-opacity text-lg">Get Blueprint →</Link>
            </div>
            <div className="card-glow border border-yellow-500/30 rounded-2xl p-6 bg-yellow-500/5 transition-all">
              <div className="text-2xl mb-3">💤</div>
              <div className="text-yellow-400 font-black text-3xl mb-1">$197</div>
              <div className="text-white font-bold text-lg mb-2">AI Passive Income System</div>
              <div className="text-gray-400 text-sm mb-2 leading-relaxed">Complete niche site system with automation. Earn while you sleep — for real.</div>
              <ul className="text-gray-400 text-xs space-y-1 mb-6">
                <li>✓ 5 niche site templates</li>
                <li>✓ Full automation setup</li>
                <li>✓ Monetization guide</li>
              </ul>
              <Link href="/pricing" className="block text-center bg-yellow-500 hover:bg-yellow-400 text-black font-black py-3 rounded-xl transition-colors">Get System →</Link>
            </div>
          </div>

          {/* TIER 4 — VIP */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card-glow border border-pink-500/40 rounded-2xl p-8 bg-gradient-to-br from-pink-500/10 to-purple-500/10 transition-all">
              <div className="flex items-start justify-between mb-4">
                <div className="text-3xl">👥</div>
                <span className="bg-pink-500/20 text-pink-400 text-xs font-bold px-3 py-1 rounded-full border border-pink-500/30">VIP</span>
              </div>
              <div className="text-pink-400 font-black text-4xl mb-1">$497</div>
              <div className="text-white font-bold text-xl mb-3">AI Empire Masterclass</div>
              <div className="text-gray-300 text-sm mb-4 leading-relaxed">8-week group coaching + all templates + private Discord. Build your AI empire with a community behind you.</div>
              <div className="grid grid-cols-2 gap-2 text-xs text-gray-300 mb-6">
                <span>✓ 8 weeks coaching</span>
                <span>✓ Private Discord</span>
                <span>✓ All templates</span>
                <span>✓ Guest experts</span>
                <span>✓ Recordings</span>
                <span>✓ Lifetime access</span>
              </div>
              <Link href="/pricing" className="block text-center bg-pink-600 hover:bg-pink-500 text-white font-black py-4 rounded-xl transition-colors text-lg">Apply Now →</Link>
            </div>
            <div className="card-glow border border-pink-500/40 rounded-2xl p-8 bg-gradient-to-br from-pink-500/10 to-orange-500/10 transition-all relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <span className="bg-orange-500 text-white text-xs font-black px-3 py-1 rounded-full">LIMITED SPOTS</span>
              </div>
              <div className="text-3xl mb-4">🚀</div>
              <div className="text-orange-400 font-black text-4xl mb-1">$997</div>
              <div className="text-white font-bold text-xl mb-3">Done-For-You AI Blog</div>
              <div className="text-gray-300 text-sm mb-4 leading-relaxed">We build your complete AI niche site from scratch. Setup + 50 articles generated + monetization ready to go.</div>
              <div className="bg-white/5 rounded-xl p-4 mb-6">
                <div className="text-xs text-gray-400 mb-2">What you get:</div>
                <div className="text-xs text-gray-300 space-y-1">
                  <div>✓ Custom domain + hosting setup</div>
                  <div>✓ 50 SEO-optimized AI articles</div>
                  <div>✓ Stripe products configured</div>
                  <div>✓ Email funnel connected</div>
                  <div>✓ 30 days of support</div>
                </div>
              </div>
              <Link href="/pricing" className="block text-center bg-gradient-to-r from-orange-500 to-pink-600 text-white font-black py-4 rounded-xl hover:opacity-90 transition-opacity text-lg">Get Your Site Built →</Link>
            </div>
          </div>

        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-24 px-6 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-4">Real People. Real Results.</h2>
            <p className="text-gray-400 text-xl">Don&apos;t take our word for it — hear from our community</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                text: '"I was skeptical at first. But after following the AI Freelancer Toolkit, I landed my first $800 client in less than 2 weeks. This stuff actually works."',
                name: 'Jake R.', location: 'Freelancer, Chicago 🇺🇸', income: '+$4,200/mo', letter: 'J', gradient: 'from-blue-500 to-purple-600'
              },
              {
                text: '"The AI Passive Income System is insane. I now have 3 niche sites running on autopilot. I check them once a week and they just... make money while I sleep."',
                name: 'Sarah M.', location: 'Digital Nomad 🌍', income: '+$2,800/mo', letter: 'S', gradient: 'from-pink-500 to-red-600'
              },
              {
                text: '"I started with the $7 cheat sheet. Then the Blueprint. Then the Agency course. 90 days later I have a real AI agency making $7,100/month. Best investment of my life."',
                name: 'Tom K.', location: 'Agency Owner, London 🇬🇧', income: '+$7,100/mo', letter: 'T', gradient: 'from-green-500 to-blue-600'
              },
            ].map(t => (
              <div key={t.name} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-purple-500/30 transition-colors">
                <div className="text-yellow-400 mb-4">★★★★★</div>
                <p className="text-gray-300 mb-6 leading-relaxed">{t.text}</p>
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.gradient} flex items-center justify-center font-bold`}>{t.letter}</div>
                  <div>
                    <div className="font-bold text-white">{t.name}</div>
                    <div className="text-gray-500 text-xs">{t.location}</div>
                  </div>
                  <div className="ml-auto text-green-400 font-black text-sm">{t.income}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-5xl font-black text-center mb-16">Common Questions</h2>
          <div className="space-y-4">
            {[
              { q: 'Do I need tech skills to get started?', a: 'Absolutely not. All our products are designed for complete beginners. If you can use Google, you can use our systems. We show you exactly what to click, step by step.' },
              { q: 'How long before I see results?', a: 'Most students see their first wins within 7-14 days. Consistent results typically happen within 30-90 days depending on the path you choose.' },
              { q: 'Is there a money-back guarantee?', a: 'Yes — every product comes with a 30-day money-back guarantee. No questions asked. We want you to succeed, not to take your money if it doesn\'t work for you.' },
              { q: 'Where do I start if I\'m a complete beginner?', a: 'Start with our Free AI Starter Kit — it\'s zero risk. Then, if you want to go further, the ChatGPT Cheat Sheet ($7) is the perfect first purchase. From there, let your results guide your next step.' },
            ].map(faq => (
              <details key={faq.q} className="group border border-white/10 rounded-2xl overflow-hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-white/5 transition-colors list-none">
                  <span className="font-bold text-white">{faq.q}</span>
                  <span className="text-purple-400 text-2xl group-open:rotate-45 transition-transform flex-shrink-0 ml-4">+</span>
                </summary>
                <div className="px-6 pb-6 text-gray-400 leading-relaxed">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-24 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/20 to-transparent pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="text-6xl mb-6">🚀</div>
          <h2 className="text-6xl font-black mb-6">
            Your AI Income<span className="gradient-text"> Starts Today</span>
          </h2>
          <p className="text-gray-400 text-xl mb-10 leading-relaxed">
            Over 10,000 people have already started. The only question is — are you next?
          </p>
          <Link href="/pricing"
            className="btn-shine inline-block bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-black text-2xl px-14 py-6 rounded-2xl hover:scale-105 transition-transform shadow-2xl shadow-purple-500/30">
            🎁 Get Free Starter Kit — No Card Needed
          </Link>
          <div className="flex items-center justify-center gap-6 mt-8 text-sm text-gray-500">
            <span>🔒 Secure checkout</span>
            <span>⚡ Instant delivery</span>
            <span>↩️ 30-day guarantee</span>
          </div>
        </div>
      </section>

    </div>
  )
}
