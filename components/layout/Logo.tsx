import Link from 'next/link'

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3 group">
      {/* Shield avec circuit IA */}
      <svg width="48" height="54" viewBox="0 0 48 54" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="sh1" x1="0" y1="0" x2="48" y2="54" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#0f3460"/>
            <stop offset="50%" stopColor="#1a56db"/>
            <stop offset="100%" stopColor="#06b6d4"/>
          </linearGradient>
          <linearGradient id="sh2" x1="48" y1="0" x2="0" y2="54" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#1e40af" stopOpacity="0.8"/>
            <stop offset="100%" stopColor="#0891b2" stopOpacity="0.2"/>
          </linearGradient>
          <linearGradient id="arrow" x1="0" y1="0" x2="1" y2="0" gradientUnits="objectBoundingBox">
            <stop offset="0%" stopColor="#38bdf8"/>
            <stop offset="100%" stopColor="#e0f2fe"/>
          </linearGradient>
          <filter id="glow2">
            <feGaussianBlur stdDeviation="1" result="blur"/>
            <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
        </defs>

        {/* Shield shape */}
        <path d="M24 1L46 9V28C46 40 36 49 24 53C12 49 2 40 2 28V9L24 1Z" fill="url(#sh1)"/>
        <path d="M24 1L46 9V28C46 40 36 49 24 53C12 49 2 40 2 28V9L24 1Z" fill="url(#sh2)"/>

        {/* Inner shield border */}
        <path d="M24 5L42 12V28C42 38 33 46 24 50C15 46 6 38 6 28V12L24 5Z"
          fill="none" stroke="rgba(56,189,248,0.3)" strokeWidth="1"/>

        {/* Highlight top-left */}
        <path d="M8 12L24 6V5L6 12V14Z" fill="rgba(255,255,255,0.15)"/>

        {/* Circuit lines */}
        <path d="M14 30 Q14 22 20 18 Q26 14 28 10" stroke="#38bdf8" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.7"/>
        <path d="M14 30 Q18 34 22 38" stroke="#38bdf8" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.6"/>
        <path d="M20 24 Q26 20 32 22 Q36 24 34 16" stroke="#7dd3fc" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.65"/>

        {/* Arrow up-right */}
        <path d="M28 28 L36 18" stroke="url(#arrow)" strokeWidth="2.2" strokeLinecap="round" filter="url(#glow2)"/>
        <path d="M30 17 L36 18 L35 24" stroke="url(#arrow)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" filter="url(#glow2)"/>

        {/* Neural nodes */}
        <circle cx="14" cy="30" r="2.5" fill="#38bdf8" filter="url(#glow2)"/>
        <circle cx="20" cy="18" r="2" fill="#7dd3fc"/>
        <circle cx="28" cy="10" r="1.8" fill="#bae6fd" opacity="0.8"/>
        <circle cx="20" cy="24" r="1.8" fill="#7dd3fc" opacity="0.9"/>
        <circle cx="32" cy="22" r="1.5" fill="#38bdf8"/>
        <circle cx="22" cy="38" r="2" fill="#38bdf8" opacity="0.7"/>
        <circle cx="36" cy="18" r="2.5" fill="#e0f2fe" filter="url(#glow2)"/>

        {/* Scattered dots */}
        <circle cx="10" cy="20" r="1" fill="#7dd3fc" opacity="0.5"/>
        <circle cx="38" cy="30" r="1" fill="#7dd3fc" opacity="0.5"/>
        <circle cx="16" cy="40" r="1" fill="#38bdf8" opacity="0.4"/>
        <circle cx="28" cy="36" r="1" fill="#7dd3fc" opacity="0.5"/>
      </svg>

      {/* Wordmark */}
      <div>
        <div style={{ lineHeight: 1.15 }}>
          <span style={{
            fontFamily: "'Space Grotesk', system-ui, sans-serif",
            fontWeight: 900,
            fontSize: 22,
            letterSpacing: '0.02em',
            color: '#ffffff',
          }}>TRUSTLY</span>
          <span style={{
            fontFamily: "'Space Grotesk', system-ui, sans-serif",
            fontWeight: 900,
            fontSize: 22,
            letterSpacing: '0.02em',
            color: '#ffffff',
          }}>-</span>
          <span style={{
            fontFamily: "'Space Grotesk', system-ui, sans-serif",
            fontWeight: 900,
            fontSize: 22,
            letterSpacing: '0.02em',
            background: 'linear-gradient(90deg, #1a56db, #06b6d4)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>AI</span>
        </div>
        <div style={{
          fontFamily: "'Space Grotesk', system-ui, sans-serif",
          fontSize: 8,
          fontWeight: 500,
          letterSpacing: '0.15em',
          color: '#94a3b8',
          marginTop: 2,
        }}>SECURE ARTIFICIAL INTELLIGENCE</div>
      </div>
    </Link>
  )
}
