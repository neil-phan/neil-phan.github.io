export const metadata = {
  title: 'bookshelf',
  description: 'collection of meaningful works in my life',
}

interface Book {
  title: string;
  author: string;
  description: string;
}


interface Movie {
  title: string;
  director: string;
  description: string;
}


interface Game {
  title: string;
  studio: string;
  description: string;
}

const books: Book[] = [
  {
    title: "Never Let Me Go",
    author: "Kazuo Ishiguro",
    description: "Heartbreaking story."
  },
  {
    title: "A Man of Two Faces",
    author: "Viet Thanh Nguyen",
    description: "Past and present reflections of a refugee."
  },
  {
    title: "The Martian",
    author: "Andy Weir",
    description: "A science fiction classic."
  },
  {
    title: "Algorithms to Live By",
    author: "Brian Christian, Tom Griffiths",
    description: "Seeking computational kindness, please."
  },
];


const movies: Movie[] = [
  {
    title: "In the Mood for Love",
    director: "Wong Kar Wai",
    description: "Atmospheric and emotional."
  },
  {
    title: "Good Will Hunting",
    director: "Gus Van Sant",
    description: "Robin Williams is the goat."
  },
  {
    title: "Ponyo",
    director: "Hayao Miyazaki",
    description: "The animation is just phenomenal."
  },
  {
    title: "The Truman Show",
    director: "Peter Weir",
    description: "What if we're on stage too?"
  },
];


const games: Game[] = [
  {
    title: "Counter Strike 2",
    studio: "Valve",
    description: "No other e-sport like it."
  },
  {
    title: "Baldur's Gate 3",
    studio: "Larian Studio",
    description: "My all-time favorite RPG."
  },
  {
    title: "Papers, Please",
    studio: "Lucas Pope",
    description: "Incredible suspense and storytelling."
  },
  {
    title: "Mario Kart Wii",
    studio: "Nintendo",
    description: "Hooked me into gaming."
  },
];

export default function Page() {
  return (
    <section>
      <div className="mb-4">
        <p>
          {`Bookshelf is a misleading name for this page. This rests my favorite pieces of work that have inspired me, are outright entertaining, or left me shedding (many) tears. I'm always lookings for new modes of inspiration, so feel free to message me your favorites!`}
        </p>
      </div>

      <div className="mb-4 space-y-2">
        <h1 className="title font-semibold text-xl tracking-tighter">
          Books
        </h1>
        <ul>
          {books.map((book ,index) => (
          <li
            className={`px-4 py-4 ${index % 2 === 1 ? 'text-right' : ''}`}
            key={book.title}
          >
            <strong>{book.title}</strong> - {book.author}
            <p className="italic">{book.description}</p>
          </li>
          ))}
        </ul> 
      </div>
      <div className="mb-4">
        <h1 className="title font-semibold text-xl tracking-tighter">
          Movies
        </h1>
        <ul>
          {movies.map((movie, index) => (
          <li
            className={`px-4 py-4 ${index % 2 === 1 ? 'text-right' : ''}`}
            key={movie.title}
          >
            <strong>{movie.title}</strong> - {movie.director}
            <p className="italic">{movie.description}</p>
          </li>
          ))}
        </ul> 
      </div>
      <div className="mb-4">
        <h1 className="title font-semibold text-xl tracking-tighter">
          Video Games
        </h1>
        <ul>
          {games.map((game, index) => (
          <li
            className={`px-4 py-4 ${index % 2 === 1 ? 'text-right' : ''}`}
            key={game.title}
          >
            <strong>{game.title}</strong> - {game.studio}
            <p className="italic">{game.description}</p>
          </li>
          ))}
        </ul> 
      </div>
    </section>
  )
}
