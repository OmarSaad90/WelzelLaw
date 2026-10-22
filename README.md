# Welzel Law

Marketing site for Welzel Law (Burlington, ON). Next.js 16 App Router, React 19, TypeScript, framer-motion, Lenis.
Every route is prerendered to static HTML at build time.

## Commands

```bash
npm run dev     # http://localhost:3000
npm run build   # production build; fails on type errors and on missing image imports
npm run start   # serve the production build locally
npm run lint
```

## Layout

```
src/app/            Routes. Each page.tsx owns metadata + JSON-LD (server) and renders a view.
  layout.tsx        <html>, fonts (next/font), site-wide metadata, Navbar/Footer, Lenis
  insights/[slug]/  15 articles via generateStaticParams; unknown slugs 404
src/views/          Page bodies ('use client': framer-motion, form state)
src/components/     Navbar, Footer, InnerPageHero, JsonLd, sections/ (homepage)
src/data/           seo.ts (titles/descriptions), articles.ts (bodies), articleMeta.ts (titles/images)
src/lib/metadata.ts PAGE_SEO record → Next.js Metadata
src/styles/tokens.css, src/index.css   Design tokens + all styles (global CSS)
src/assets/images/  All images, imported statically → served through next/image
public/             favicon, og-image, robots.txt, sitemap.xml, videos/hero.mp4
```

## Deploy

Netlify, using the Next.js runtime (`netlify.toml` → `@netlify/plugin-nextjs`).
Before launch, update `SITE_URL` in `src/data/seo.ts` and the URLs in `public/sitemap.xml` / `public/robots.txt`.
