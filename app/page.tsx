import { Writings } from 'app/components/posts'
import Image from 'next/image'

export default function Page() {
  return (
    <section>
      <Image className="mb-16 center"
        src="/images/gingko.jpg"
        width={550}
        height={400}
        alt="Gingko Trees"
      />
      <p className="mb-4">
        {
          `I'm a software engineer, researcher, and artist.`
        }
      </p>
      <div className="my-8">
        <Writings />
      </div>
    </section>
  )
}
