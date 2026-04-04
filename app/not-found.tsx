import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <p className="text-6xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent mb-4">404</p>
      <h1 className="text-2xl font-semibold text-white mb-3">Page not found</h1>
      <p className="text-gray-400 mb-8">This page doesn&apos;t exist or has been moved.</p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold px-6 py-3 rounded-xl hover:opacity-90 transition-opacity"
      >
        ← Back to home
      </Link>
    </div>
  )
}
