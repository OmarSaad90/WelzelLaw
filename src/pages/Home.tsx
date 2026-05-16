import Navbar from '../components/Navbar'
import SEO from '../components/SEO'
import { PAGE_SEO } from '../data/seo'
import Hero from '../components/sections/Hero'
import Services from '../components/sections/Services'
import WhyWelzel from '../components/sections/WhyWelzel'
import Testimonials from '../components/sections/Testimonials'
import FourPillars from '../components/sections/FourPillars'
import Affiliations from '../components/sections/Affiliations'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <SEO {...PAGE_SEO.home} />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyWelzel />
        <FourPillars />
        <Testimonials />
        <Affiliations />
      </main>
      <Footer />
    </>
  )
}
