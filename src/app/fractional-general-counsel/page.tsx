import type { Metadata } from 'next'
import { BreadcrumbJsonLd, ServiceJsonLd } from '@/components/JsonLd'
import { PAGE_SEO } from '@/data/seo'
import { buildMetadata } from '@/lib/metadata'
import FractionalGeneralCounsel from '@/views/FractionalGeneralCounsel'

export const metadata: Metadata = buildMetadata(PAGE_SEO.fgc)

export default function Page() {
  return (
    <>
      <ServiceJsonLd name="Fractional General Counsel" description="Executive-level legal oversight for growing Ontario businesses at a fixed monthly fee. Strategic legal support without the cost of a full-time General Counsel." url="/fractional-general-counsel" />
      <BreadcrumbJsonLd crumbs={[{ name: 'Home', href: '/' }, { name: 'Fractional General Counsel', href: '/fractional-general-counsel' }]} />
      <FractionalGeneralCounsel />
    </>
  )
}
