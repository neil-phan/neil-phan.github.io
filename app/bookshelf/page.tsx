export const metadata = {
  title: 'Bookshelf',
  description: 'Books, movies, and music I really like.',
}

export default function Page() {
  return (
    <section>
      <div className="mb-4">
        <p>
          {`This is an assortment of books, movies, and songs I've thoroughly enjoyed.`}
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
      <div className="mb-4">
        <h1 className="title font-semibold text-2xl tracking-tighter">
          Songs
        </h1>
      </div>
    </section>
  )
}
