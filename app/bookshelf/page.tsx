export const metadata = {
  title: 'Bookshelf',
  description: 'Books, movies, and music I really like.',
}

export default function Page() {
  return (
    <section>
      <div className="mb-4">
        <p>
          {`Bookshelf is a misleading name for this page. This rests my favorite pieces of work that have inspired me, are outright entertaining, or left me shedding (many) tears.`}
        </p>
      </div>

      <div className="mb-4">
        <h1 className="title font-semibold text-2xl tracking-tighter">
          Books
        </h1>
        
      </div>
      <div className="mb-4">
        <h1 className="title font-semibold text-2xl tracking-tighter">
          Movies
        </h1>
      </div>
    </section>
  )
}
