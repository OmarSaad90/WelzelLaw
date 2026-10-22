import Hero from '../components/sections/Hero'
import Services from '../components/sections/Services'
import WhyWelzel from '../components/sections/WhyWelzel'
import Testimonials from '../components/sections/Testimonials'
import FourPillars from '../components/sections/FourPillars'
import Affiliations from '../components/sections/Affiliations'

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <WhyWelzel />
      <FourPillars />
      <Testimonials />
      <Affiliations />
    </main>
  )
}
