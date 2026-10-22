import type { Metadata } from 'next'
import { Manrope, Spectral } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SmoothScroll from '@/components/SmoothScroll'
import { SitewideJsonLd } from '@/components/JsonLd'
import { DEFAULT_OG_IMAGE, FIRM_NAME, PAGE_SEO, SITE_URL } from '@/data/seo'
import '@/index.css'

// Weights mirror exactly what the old Google Fonts URL actually served.
// Spectral has no 900; Google silently dropped it, so `font-weight: 900`
// has always rendered as 700. Adding weights here would change approved visuals.
const spectral = Spectral({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  style: ['normal', 'italic'],
  variable: '--font-spectral',
  display: 'swap',
})

const manrope = Manrope({
  subsets: ['latin'],
  // Same weights the Vite build loaded. 700 is deliberately absent: CSS that
  // asks for 700 has always rendered as 600, and the approved design is that.
  weight: ['300', '400', '500', '600'],
  variable: '--font-manrope',
  display: 'swap',
})

// Site-wide defaults. Each page's `metadata` export overrides title,
// description, canonical, openGraph and twitter via buildMetadata().
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: PAGE_SEO.home.title,
  description: PAGE_SEO.home.description,
  authors: [{ name: 'Fernanda Welzel, Welzel Law' }],
  robots: { index: true, follow: true },
  icons: { icon: '/favicon.svg' },
  openGraph: {
    siteName: FIRM_NAME,
    type: 'website',
    locale: 'en_CA',
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', images: [DEFAULT_OG_IMAGE] },
  other: {
    'geo.region': 'CA-ON',
    'geo.placename': 'Burlington, Ontario',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${spectral.variable} ${manrope.variable}`}>
      <body>
        <SitewideJsonLd />
        <SmoothScroll />
        <div id="root">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
