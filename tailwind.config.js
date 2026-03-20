/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#000000',
        surface:    '#0a0a0a',
        'surface-2':'#111111',
        foreground:  '#ffffff',
        muted:       '#9ca3af',
        primary:     '#a855f7',
        secondary:   '#60a5fa',
        accent:      '#ec4899',
        border:      'rgba(255,255,255,0.1)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'ticker': 'ticker 30s linear infinite',
        'shine': 'shine 3s infinite',
        'pulse-dot': 'pulse-dot 2s infinite',
      },
    },
  },
  plugins: [],
}
