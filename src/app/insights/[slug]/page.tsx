import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ArticleJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd'
import { ARTICLES_CONTENT } from '@/data/articles'
import { ARTICLES_META } from '@/data/articleMeta'
import { ARTICLE_SEO, SITE_URL, articleTitleTag } from '@/data/seo'
import { buildMetadata } from '@/lib/metadata'
import ArticlePage from '@/views/ArticlePage'

type Params = { slug: string }

// Every article is prerendered at build time; any other slug is a real 404
// (the old SPA returned 200 with an inline "Article not found").
export const dynamicParams = false

export function generateStaticParams(): Params[] {
  return ARTICLE_SEO.map(({ slug }) => ({ slug }))
}

/**
 * Join the three per-article records (SEO copy, display meta, body content).
 * Throws if a slug exists in ARTICLE_SEO but is missing from the other two:
 * that is a data bug and should fail the build, not ship a broken page.
 */
function getArticle(slug: string) {
  const seo = ARTICLE_SEO.find(a => a.slug === slug)
  if (!seo) return null

  const meta = ARTICLES_META.find(a => a.slug === slug)
  const content = ARTICLES_CONTENT.find(a => a.slug === slug)
  if (!meta || !content) {
    throw new Error(`Article "${slug}" is in ARTICLE_SEO but missing from ARTICLES_META or ARTICLES_CONTENT`)
  }
  return { seo, meta, content }
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const article = getArticle((await params).slug)
  if (!article) return {}
  const { seo, meta } = article

  return buildMetadata({
    title: articleTitleTag(seo.title),
    description: seo.description,
    canonical: `/insights/${seo.slug}`,
    ogType: 'article',
    ogImage: meta.img.src,
    article: {
      publishedTime: seo.publishedDate,
      author: 'Fernanda Welzel',
      section: seo.category,
    },
  })
}

export default async function Page({ params }: { params: Promise<Params> }) {
  const article = getArticle((await params).slug)
  if (!article) notFound()
  const { seo, meta, content } = article

  return (
    <>
      <ArticleJsonLd
        title={seo.title}
        description={seo.description}
        slug={seo.slug}
        publishedDate={seo.publishedDate}
        image={`${SITE_URL}${meta.img.src}`}
        category={seo.category}
      />
      <BreadcrumbJsonLd crumbs={[
        { name: 'Home', href: '/' },
        { name: 'Insights', href: '/insights' },
        { name: meta.title, href: `/insights/${seo.slug}` },
      ]} />
      <ArticlePage meta={meta} sections={content.sections} />
    </>
  )
}
