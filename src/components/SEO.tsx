import { Helmet } from 'react-helmet-async'
import { SITE_URL, DEFAULT_OG_IMAGE, FIRM_NAME } from '../data/seo'

interface SEOProps {
  title: string
  description: string
  canonical: string
  ogImage?: string
  ogType?: 'website' | 'article'
  article?: {
    publishedTime: string
    author: string
    section: string
  }
  noindex?: boolean
}

export default function SEO({
  title,
  description,
  canonical,
  ogImage,
  ogType = 'website',
  article,
  noindex = false,
}: SEOProps) {
  const fullUrl = `${SITE_URL}${canonical}`
  const image = ogImage ?? DEFAULT_OG_IMAGE

  return (
    <Helmet>
      {/* Core */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullUrl} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph — WhatsApp, Facebook, LinkedIn, iMessage */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={`${FIRM_NAME} — Ontario Corporate & Real Estate Law`} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={FIRM_NAME} />
      <meta property="og:locale" content="en_CA" />

      {/* Twitter / X */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Article-specific (Insights pages) */}
      {article && (
        <>
          <meta property="article:published_time" content={article.publishedTime} />
          <meta property="article:author" content={article.author} />
          <meta property="article:section" content={article.section} />
          <meta property="article:publisher" content={`${SITE_URL}/`} />
        </>
      )}
    </Helmet>
  )
}
