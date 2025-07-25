import { Hero } from '../components/sections/hero'
import { Services } from '../components/sections/services'
import { Testimonials } from '../components/sections/testimonials'
import FeaturedClients from '../components/sections/featured-clients'
import CloudUSPSection from '../components/sections/cloud-usp'
import { ContactSection } from '../components/sections/contact'

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturedClients />
      <CloudUSPSection />
      <Services />
      <Testimonials />
      <ContactSection />
    </main>
  )
} 