import type { Metadata } from 'next'
import { BreadcrumbJsonLd } from '@/components/JsonLd'
import { PAGE_SEO } from '@/data/seo'
import { buildMetadata } from '@/lib/metadata'
import About from '@/views/About'

export const metadata: Metadata = buildMetadata(PAGE_SEO.about)

export default function Page() {
  return (
    <>
      <BreadcrumbJsonLd crumbs={[{ name: 'Home', href: '/' }, { name: 'About', href: '/about' }]} />
      <About />
    </>
  )
}
