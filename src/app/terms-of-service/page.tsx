import type { Metadata } from 'next'
import { PAGE_SEO } from '@/data/seo'
import { buildMetadata } from '@/lib/metadata'
import TermsOfService from '@/views/TermsOfService'

export const metadata: Metadata = buildMetadata(PAGE_SEO.terms)

export default function Page() {
  return <TermsOfService />
}
