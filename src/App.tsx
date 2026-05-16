import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { useLenis } from './hooks/useLenis'
import { SitewideJsonLd } from './components/JsonLd'
import Home from './pages/Home'
import About from './pages/About'
import BusinessLaw from './pages/BusinessLaw'
import FractionalGeneralCounsel from './pages/FractionalGeneralCounsel'
import RealEstateLaw from './pages/RealEstateLaw'
import Contact from './pages/Contact'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfService from './pages/TermsOfService'
import Insights from './pages/Insights'
import ArticlePage from './pages/ArticlePage'

export default function App() {
  useLenis()

  return (
    <HelmetProvider>
      <SitewideJsonLd />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/business-law" element={<BusinessLaw />} />
          <Route path="/fractional-general-counsel" element={<FractionalGeneralCounsel />} />
          <Route path="/real-estate-law" element={<RealEstateLaw />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/insights/:slug" element={<ArticlePage />} />
        </Routes>
      </Router>
    </HelmetProvider>
  )
}
