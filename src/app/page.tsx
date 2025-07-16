import { Hero } from '../components/sections/hero'
import { Services } from '../components/sections/services'
import { CloudTechnology } from '../components/sections/cloud-technology'
import { Testimonials } from '../components/sections/testimonials'

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <CloudTechnology />
      <Testimonials />
    </main>
  )
} 