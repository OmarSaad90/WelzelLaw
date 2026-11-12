import type { MetadataRoute } from 'next'
import { ARTICLE_SEO, SITE_URL } from '@/data/seo'

// Generated at build time from SITE_URL and the article list, so switching
// domains or adding an article updates the sitemap automatically.
// (Replaces the hand-maintained public/sitemap.xml.)

const PAGES_LAST_MODIFIED = '2026-11-12'

type ChangeFrequency = NonNullable<MetadataRoute.Sitemap[number]['changeFrequency']>

const PAGES: { path: string; changeFrequency: ChangeFrequency; priority: number }[] = [
  { path: '/',                           changeFrequency: 'weekly',  priority: 1.0 },
  { path: '/about',                      changeFrequency: 'monthly', priority: 0.9 },
  { path: '/business-law',               changeFrequency: 'monthly', priority: 0.9 },
  { path: '/fractional-general-counsel', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/real-estate-law',            changeFrequency: 'monthly', priority: 0.9 },
  { path: '/insights',                   changeFrequency: 'weekly',  priority: 0.8 },
  { path: '/contact',                    changeFrequency: 'monthly', priority: 0.8 },
  // Privacy/Terms are noindex, so they stay out of the sitemap.
]

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = PAGES.map(({ path, changeFrequency, priority }) => ({
    url: `${SITE_URL}${path}`,
    lastModified: PAGES_LAST_MODIFIED,
    changeFrequency,
    priority,
  }))

  const articles = ARTICLE_SEO.map(({ slug, publishedDate }) => ({
    url: `${SITE_URL}/insights/${slug}`,
    lastModified: publishedDate,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...pages, ...articles]
}
