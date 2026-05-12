import { useLenis } from './hooks/useLenis'
import Navbar from './components/Navbar'
import Hero from './components/sections/Hero'
import Services from './components/sections/Services'
import WhyWelzel from './components/sections/WhyWelzel'
import Testimonials from './components/sections/Testimonials'
import FourPillars from './components/sections/FourPillars'
import Footer from './components/Footer'

export default function App() {
  useLenis()

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyWelzel />
        <FourPillars />
        <Testimonials />
      </main>
      <Footer />
    </>
  )
}
