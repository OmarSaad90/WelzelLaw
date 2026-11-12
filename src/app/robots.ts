import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/data/seo'

// Generated from SITE_URL (replaces the hand-maintained public/robots.txt).
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        // Keep legal boilerplate out of the crawl budget
        '/privacy-policy',
        '/terms-of-service',
        // Netlify Forms registry, never a page for visitors
        '/__forms.html',
      ],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  }
}
