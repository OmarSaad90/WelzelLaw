import type { Metadata } from 'next'
import { BreadcrumbJsonLd } from '@/components/JsonLd'
import { PAGE_SEO } from '@/data/seo'
import { buildMetadata } from '@/lib/metadata'
import Contact from '@/views/Contact'

export const metadata: Metadata = buildMetadata(PAGE_SEO.contact)

export default function Page() {
  return (
    <>
      <BreadcrumbJsonLd crumbs={[{ name: 'Home', href: '/' }, { name: 'Contact', href: '/contact' }]} />
      <Contact />
    </>
  )
}
