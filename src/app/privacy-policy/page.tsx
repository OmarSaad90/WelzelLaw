import type { Metadata } from 'next'
import { PAGE_SEO } from '@/data/seo'
import { buildMetadata } from '@/lib/metadata'
import PrivacyPolicy from '@/views/PrivacyPolicy'

export const metadata: Metadata = buildMetadata(PAGE_SEO.privacy)

export default function Page() {
  return <PrivacyPolicy />
}
