import type { Metadata } from 'next'
import { DEFAULT_OG_IMAGE, FIRM_NAME, type PageSEO } from '../data/seo'

interface ArticleMeta {
  publishedTime: string
  author: string
  section: string
}

interface BuildMetadataInput extends PageSEO {
  ogImage?: string
  article?: ArticleMeta
}

/**
 * Translate the site's per-page SEO record into a Next.js Metadata object.
 *
 * Replaces the old react-helmet <SEO> component: same tags, but rendered into
 * the static HTML at build time so crawlers and link-preview bots (WhatsApp,
 * LinkedIn, iMessage — none of which run JS) see per-page titles and images.
 * Relative URLs resolve against `metadataBase` set in app/layout.tsx.
 */
export function buildMetadata({
  title,
  description,
  canonical,
  ogType = 'website',
  noindex = false,
  ogImage = DEFAULT_OG_IMAGE,
  article,
}: BuildMetadataInput): Metadata {
  const image = {
    url: ogImage,
    width: 1200,
    height: 630,
    alt: `${FIRM_NAME} — Ontario Corporate & Real Estate Law`,
  }

  const openGraph: Metadata['openGraph'] = article
    ? {
        type: 'article',
        title,
        description,
        url: canonical,
        images: [image],
        siteName: FIRM_NAME,
        locale: 'en_CA',
        publishedTime: article.publishedTime,
        authors: [article.author],
        section: article.section,
      }
    : {
        type: ogType,
        title,
        description,
        url: canonical,
        images: [image],
        siteName: FIRM_NAME,
        locale: 'en_CA',
      }

  return {
    title,
    description,
    alternates: { canonical },
    // Only set robots when overriding. An explicit `undefined` would wipe the
    // layout's site-wide `index, follow` default instead of inheriting it.
    ...(noindex && { robots: { index: false, follow: false } }),
    openGraph,
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  }
}
