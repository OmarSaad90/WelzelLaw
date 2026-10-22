import type { Metadata } from 'next'
import { PAGE_SEO } from '@/data/seo'
import { buildMetadata } from '@/lib/metadata'
import Home from '@/views/Home'

export const metadata: Metadata = buildMetadata(PAGE_SEO.home)

export default function Page() {
  return <Home />
}
