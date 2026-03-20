import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Learn AI — Free Guides & Tutorials',
  description: 'Free step-by-step guides to learn AI tools, build automations, and start earning money with artificial intelligence.',
}

const modules = [
  {
    level: 'Beginner',
    color: '#00FF88',
    icon: '🌱',
    lessons: [
      { title: 'What is AI and Why It Matters for Your Income',       time: '8 min' },
      { title: 'The 10 Best Free AI Tools to Start Today',            time: '12 min' },
      { title: 'How to Write Perfect AI Prompts (Prompt Engineering)', time: '15 min' },
      { title: 'ChatGPT vs Claude vs Gemini: Which One to Use?',      time: '10 min' },
    ]
  },
  {
    level: 'Intermediate',
    color: '#00C8FF',
    icon: '⚡',
    lessons: [
      { title: 'Build Your First AI Automation with Make.com',        time: '20 min' },
      { title: 'Freelancing with AI: How to Get Your First Client',   time: '18 min' },
      { title: 'AI Content Strategy: Publish 30 Articles in 1 Day',  time: '25 min' },
      { title: 'Creating and Selling AI Digital Products',            time: '22 min' },
    ]
  },
  {
    level: 'Advanced',
    color: '#A78BFA',
    icon: '🚀',
    lessons: [
      { title: 'Build a Fully Autonomous AI Agent from Scratch',      time: '35 min' },
      { title: 'Launch a Micro-SaaS with AI in 7 Days',              time: '40 min' },
      { title: 'AI-Powered Passive Income Systems',                    time: '30 min' },
      { title: 'Scale to $10,000/month with AI Automation',          time: '45 min' },
    ]
  },
]

export default function LearnPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
      {/* Header */}
      <div className="text-center mb-14">
        <span className="inline-flex items-center gap-2 border border-primary/30 bg-primary/5 rounded-full px-4 py-2 text-sm text-primary font-mono mb-6">
          <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
          Free Curriculum
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-5">
          Learn AI.<br />
          <span className="text-primary">Earn Real Money.</span>
        </h1>
        <p className="text-lg text-muted max-w-2xl mx-auto">
          From zero to income — free step-by-step guides on using AI tools, building automations, and generating passive revenue.
        </p>
      </div>

      {/* Modules */}
      <div className="space-y-10 mb-16">
        {modules.map(module => (
          <div key={module.level}>
            <div className="flex items-center gap-3 mb-5">
              <span className="text-2xl">{module.icon}</span>
              <h2 className="text-xl font-bold text-foreground">{module.level}</h2>
              <span className="h-px flex-1 bg-border" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {module.lessons.map((lesson, i) => (
                <div key={lesson.title}
                  className="card flex items-center gap-4 cursor-pointer hover:scale-[1.01] transition-transform">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold text-black flex-shrink-0"
                    style={{ backgroundColor: module.color }}>
                    {i + 1}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-semibold text-foreground leading-snug">{lesson.title}</h3>
                    <p className="text-xs text-muted font-mono mt-0.5">{lesson.time} read</p>
                  </div>
                  <svg className="w-4 h-4 text-muted flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* CTA to full course */}
      <div className="card border-primary/30 bg-primary/5 text-center py-12 glow-green">
        <h2 className="text-2xl font-bold text-foreground mb-3">
          Want the full structured course?
        </h2>
        <p className="text-muted mb-6 max-w-xl mx-auto">
          Get the complete AI Mastery Course — 8 modules, 40+ video lessons, and lifetime access. Start earning in 30 days.
        </p>
        <Link href="/pricing" className="btn-primary text-lg px-8">
          View Pricing & Courses
        </Link>
      </div>
    </div>
  )
}
