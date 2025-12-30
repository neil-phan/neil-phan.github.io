import { Writings } from 'app/components/posts'

export const metadata = {
  title: 'Writings',
  description: 'My random, semi-filtered thoughts.',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tight">Writings</h1>
      <Writings />
    </section>
  )
}
