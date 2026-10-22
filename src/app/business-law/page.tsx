import type { Metadata } from 'next'
import { BreadcrumbJsonLd, ServiceJsonLd } from '@/components/JsonLd'
import { PAGE_SEO } from '@/data/seo'
import { buildMetadata } from '@/lib/metadata'
import BusinessLaw from '@/views/BusinessLaw'

export const metadata: Metadata = buildMetadata(PAGE_SEO.businessLaw)

export default function Page() {
  return (
    <>
      <ServiceJsonLd name="Business Law" description="Shareholder agreements, commercial contracts, incorporations, employment agreements, and commercial leases for Ontario entrepreneurs." url="/business-law" />
      <BreadcrumbJsonLd crumbs={[{ name: 'Home', href: '/' }, { name: 'Business Law', href: '/business-law' }]} />
      <BusinessLaw />
    </>
  )
}
