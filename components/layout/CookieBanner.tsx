'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) setVisible(true)
  }, [])

  function accept() {
    localStorage.setItem('cookie-consent', 'accepted')
    setVisible(false)
  }

  function decline() {
    localStorage.setItem('cookie-consent', 'declined')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] p-4">
      <div className="max-w-4xl mx-auto bg-surface border border-surface-2 rounded-xl p-5 shadow-2xl flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <p className="text-sm text-muted flex-1">
          We use essential cookies for site functionality and analytics (Google Analytics) to improve your experience.
          See our <Link href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</Link> for details.
        </p>
        <div className="flex gap-3 flex-shrink-0">
          <button onClick={decline}
            className="px-4 py-2 text-sm text-muted border border-surface-2 rounded-lg hover:border-primary/50 transition-colors">
            Decline
          </button>
          <button onClick={accept}
            className="px-4 py-2 text-sm font-semibold bg-primary text-black rounded-lg hover:bg-emerald-400 transition-colors">
            Accept
          </button>
        </div>
      </div>
    </div>
  )
}
