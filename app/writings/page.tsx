import { Writings } from 'app/components/posts'

export const metadata = {
  title: 'Writings',
  description: 'My random, semi-filtered thoughts.',
}

export default function Page() {
  return (
    <section>
      <Writings />
    </section>
  )
}
