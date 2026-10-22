import type { Metadata } from 'next'
import { BreadcrumbJsonLd } from '@/components/JsonLd'
import { PAGE_SEO } from '@/data/seo'
import { buildMetadata } from '@/lib/metadata'
import Insights from '@/views/Insights'

export const metadata: Metadata = buildMetadata(PAGE_SEO.insights)

export default function Page() {
  return (
    <>
      <BreadcrumbJsonLd crumbs={[{ name: 'Home', href: '/' }, { name: 'Insights', href: '/insights' }]} />
      <Insights />
    </>
  )
}
