import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/data/seo'

// Generated from SITE_URL (replaces the hand-maintained public/robots.txt).
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // Privacy/Terms are NOT disallowed here: they carry a noindex meta tag,
      // and a robots.txt block would stop Google from ever reading it.
      disallow: [
        // Netlify Forms registry, never a page for visitors
        '/__forms.html',
      ],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  }
}
