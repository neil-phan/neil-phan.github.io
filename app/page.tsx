import { Writings } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tight">
        Neil's Place
      </h1>
      <p className="mb-4">
        {`This is a work in progress!`}
      </p>
      <div className="my-8">
        <Writings />
      </div>
    </section>
  )
}
