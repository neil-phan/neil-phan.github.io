import Link from 'next/link'
import { formatDate, getWritings } from 'app/writings/utils'

export function Writings({ limit } : {limit?: number}) {
  let allEssays = getWritings()

  let sortedEssays = allEssays.sort((a, b) => {
    if (
      new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
    ) {
      return -1
    }
    return 1
  })

  if (limit) {
    sortedEssays = sortedEssays.slice(0, limit)
  }

  return (
      <div>
        {sortedEssays.map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col space-y-1 mb-4"
            href={`/writings/${post.slug}`}
          >
            <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
              <p className="text-neutral-600 w-[120px] tabular-nums">
                {formatDate(post.metadata.publishedAt, false)}
              </p>
              <p className="text-neutral-900 tracking-tight">
                {post.metadata.title}
              </p>
            </div>
          </Link>
        ))}
      </div>
    )
}


