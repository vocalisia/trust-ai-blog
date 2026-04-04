import Link from 'next/link'

interface Props {
  prev: { slug: string; title: string } | null
  next: { slug: string; title: string } | null
  currentIndex: number
  total: number
}

export default function LessonNav({ prev, next, currentIndex, total }: Props) {
  return (
    <div className="border-t border-white/10 mt-12 pt-8">
      <p className="text-center text-sm text-gray-500 font-mono mb-6">
        Lesson {currentIndex + 1} of {total}
      </p>

      <div className="flex justify-between gap-4">
        {prev ? (
          <Link
            href={`/learn/${prev.slug}`}
            className="flex-1 border border-white/10 rounded-xl p-4 hover:border-white/30 transition-colors text-left"
          >
            <span className="text-gray-500 text-xs font-mono block mb-1">
              &larr; Previous
            </span>
            <span className="text-white text-sm font-medium">
              {prev.title}
            </span>
          </Link>
        ) : (
          <div />
        )}

        {next ? (
          <Link
            href={`/learn/${next.slug}`}
            className="flex-1 border border-white/10 rounded-xl p-4 hover:border-white/30 transition-colors text-right"
          >
            <span className="text-gray-500 text-xs font-mono block mb-1">
              Next &rarr;
            </span>
            <span className="text-white text-sm font-medium">
              {next.title}
            </span>
          </Link>
        ) : (
          <Link
            href="/pricing"
            className="flex-1 btn-primary text-center rounded-xl px-6 py-4 font-bold"
          >
            Ready for more? View courses &rarr;
          </Link>
        )}
      </div>
    </div>
  )
}
