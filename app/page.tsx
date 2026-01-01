import { Writings } from 'app/components/posts'
import Image from 'next/image'

export default function Page() {
  return (
    <section>
      <div className="space-y-4">
        <p>
          Generalist software engineer with proficiency in high performance systems. 
          Currently at Capital One under the EMP Training team, building reliable and
          scalable ML infrastructure for our AI teams.
        </p>
        <p>
          Open source software is a new horizon I'm exploring early into my career.
          Actively learning about machine learning compilers, game engines, 
          and audio plugin development.
        </p>
        <p>
          When I have extra time on my hands, you'll find me reading, songwriting, 
          running, weightlifting, and playing Counter Strike. 
        </p>
      </div>
      <div className="my-8">
        <Writings limit={5}/>
      </div>
    </section>
  )
}
