import { Hero } from '../components/sections/hero'
import { Services } from '../components/sections/services'
import { CloudTechnology } from '../components/sections/cloud-technology'
import { Testimonials } from '../components/sections/testimonials'
import FeaturedClients from '../components/sections/featured-clients'
import CoreSolutions from '../components/sections/core-solutions'
import { Certifications } from '../components/sections/certifications'
import { TechShowcase } from '../components/TechShowcase'

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturedClients />
      <CoreSolutions />
      <Services />
      <TechShowcase />
      <CloudTechnology />
      <Certifications />
      <Testimonials />
    </main>
  )
} 