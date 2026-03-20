export default function Logo({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="40" height="40" rx="10" fill="#00FF88" />
      {/* Shield shape */}
      <path d="M20 6L10 11V21C10 27.6 14.4 33.7 20 35C25.6 33.7 30 27.6 30 21V11L20 6Z" fill="#04080A" />
      {/* AI text */}
      <text x="13" y="25" fontFamily="monospace" fontWeight="900" fontSize="12" fill="#00FF88">AI</text>
    </svg>
  )
}
