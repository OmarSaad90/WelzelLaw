import type { Metadata } from 'next'
import { BreadcrumbJsonLd, ServiceJsonLd } from '@/components/JsonLd'
import { PAGE_SEO } from '@/data/seo'
import { buildMetadata } from '@/lib/metadata'
import RealEstateLaw from '@/views/RealEstateLaw'

export const metadata: Metadata = buildMetadata(PAGE_SEO.realEstate)

export default function Page() {
  return (
    <>
      <ServiceJsonLd name="Real Estate Law" description="Real estate closing lawyer in Kitchener, Ontario. Residential purchases and sales, title insurance, land transfer tax, and commercial leasing for Ontario buyers and investors." url="/real-estate-law" />
      <BreadcrumbJsonLd crumbs={[{ name: 'Home', href: '/' }, { name: 'Real Estate Law', href: '/real-estate-law' }]} />
      <RealEstateLaw />
    </>
  )
}
