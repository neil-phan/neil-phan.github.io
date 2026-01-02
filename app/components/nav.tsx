import Link from 'next/link'
import Image from 'next/image'

const navItems = {
  '/bookshelf': {
    name: 'bookshelf',
  },
}

export function Navbar() {
  return (
    <aside className="mb-8 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-start justify-between relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex-column space-x-0">
            <Link
              href="/"
              className="transition-all ease-in-out duration-300 text-2xl font-semibold py-1 px-0 m-0 hover:text-neutral-600 transition-all tracking-tight"
            >
              neil phan <span className="inline-note">[???]</span>
            </Link>
            <p className="whitespace-nowrap">
              <em>
                ml • compilers • graphics
              </em>
            </p>
          </div>
          <div className="flex flex-col sm:flex-row space-x-0">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className="animation transition-all ease-in-out duration-300 hover:text-neutral-600 py-1 px-2 m-0"
                >
                  {name}
                </Link>
              )
            })}
          </div>
        </nav>
      </div>
    </aside>
  )
}
