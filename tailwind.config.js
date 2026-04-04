/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#0B0D0F',
        surface:    '#13161A',
        'surface-2':'#1C2026',
        foreground: '#F0F2F5',
        muted:      '#8B95A5',
        primary:    '#00D4AA',
        secondary:  '#00B4D8',
        accent:     '#7C3AED',
      },
    },
  },
  plugins: [],
}
