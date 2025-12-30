import { Writings } from 'app/components/posts'

export const metadata = {
  title: 'writings',
  description: 'My random, semi-filtered thoughts.',
}

export default function Page() {
  return (
    <section>
      <Writings />
    </section>
  )
}
