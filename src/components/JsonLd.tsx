import { SITE_URL, DEFAULT_OG_IMAGE } from '../data/seo'
import { FIRM } from '../data/firm'

// Escape `<` so a stray "</script>" inside any string value can't close the tag early.
// Server-rendered, so these scripts now ship in the static HTML crawlers read.
function serializeJsonLd(schema: object): string {
  return JSON.stringify(schema).replace(/</g, '\\u003c')
}

// ─── Sitewide: LegalService + LocalBusiness ──────────────────────────────────
export function SitewideJsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['LegalService', 'LocalBusiness'],
        '@id': `${SITE_URL}/#organization`,
        name: FIRM.name,
        legalName: FIRM.legalName,
        url: SITE_URL,
        logo: DEFAULT_OG_IMAGE,
        image: DEFAULT_OG_IMAGE,
        telephone: FIRM.phoneE164,
        email: FIRM.email,
        priceRange: '$$',
        currenciesAccepted: 'CAD',
        paymentAccepted: 'Cash, Credit Card, E-Transfer',
        address: {
          '@type': 'PostalAddress',
          streetAddress: FIRM.address.street,
          addressLocality: FIRM.address.city,
          addressRegion: FIRM.address.region,
          postalCode: FIRM.address.postalCode,
          addressCountry: FIRM.address.country,
        },
        areaServed: [
          { '@type': 'City', name: 'Kitchener' },
          { '@type': 'City', name: 'Waterloo' },
          { '@type': 'City', name: 'Cambridge' },
          { '@type': 'City', name: 'Guelph' },
          { '@type': 'AdministrativeArea', name: 'Ontario' },
        ],
        serviceType: [
          'Corporate Law',
          'Real Estate Law',
          'Business Law',
          'Fractional General Counsel',
          'Commercial Contracts',
          'Business Incorporation',
          'Shareholder Agreements',
          'Real Estate Closing',
        ],
        knowsAbout: [
          'Ontario Business Corporations Act',
          'Canada Business Corporations Act',
          'Ontario real estate law',
          'Land transfer tax',
          'Title insurance Ontario',
          'Fractional general counsel',
          'Business incorporation Ontario',
          'Commercial leasing Ontario',
        ],
        founder: {
          '@type': 'Person',
          '@id': `${SITE_URL}/#fernanda`,
          name: 'Fernanda Welzel',
          jobTitle: 'Founder & Principal Lawyer',
          worksFor: { '@id': `${SITE_URL}/#organization` },
          memberOf: {
            '@type': 'Organization',
            name: 'Law Society of Ontario',
          },
        },
        sameAs: [
          FIRM.social.linkedin,
          FIRM.social.instagram,
        ],
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '09:00',
            closes: '17:00',
          },
        ],
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: SITE_URL,
        name: FIRM.name,
        publisher: { '@id': `${SITE_URL}/#organization` },
        potentialAction: {
          '@type': 'SearchAction',
          target: `${SITE_URL}/insights?q={search_term_string}`,
          'query-input': 'required name=search_term_string',
        },
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serializeJsonLd(schema) }}
    />
  )
}

// ─── Service page schema ──────────────────────────────────────────────────────
interface ServiceJsonLdProps {
  name: string
  description: string
  url: string
}

export function ServiceJsonLd({ name, description, url }: ServiceJsonLdProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: name,
    name,
    description,
    url: `${SITE_URL}${url}`,
    provider: { '@id': `${SITE_URL}/#organization` },
    areaServed: { '@type': 'AdministrativeArea', name: 'Ontario, Canada' },
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: `${SITE_URL}/contact`,
      servicePhone: FIRM.phoneE164,
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serializeJsonLd(schema) }}
    />
  )
}

// ─── Article schema ───────────────────────────────────────────────────────────
interface ArticleJsonLdProps {
  title: string
  description: string
  slug: string
  publishedDate: string
  image: string
  category: string
}

export function ArticleJsonLd({
  title,
  description,
  slug,
  publishedDate,
  image,
  category,
}: ArticleJsonLdProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    url: `${SITE_URL}/insights/${slug}`,
    image,
    datePublished: publishedDate,
    dateModified: publishedDate,
    author: {
      '@type': 'Person',
      '@id': `${SITE_URL}/#fernanda`,
      name: 'Fernanda Welzel',
      url: `${SITE_URL}/about`,
    },
    publisher: {
      '@id': `${SITE_URL}/#organization`,
      name: FIRM.name,
      logo: { '@type': 'ImageObject', url: DEFAULT_OG_IMAGE },
    },
    articleSection: category,
    inLanguage: 'en-CA',
    about: {
      '@type': 'LegalService',
      name: FIRM.name,
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serializeJsonLd(schema) }}
    />
  )
}

// ─── FAQ schema (for accordion sections) ─────────────────────────────────────
interface FAQItem { q: string; a: string }

export function FAQJsonLd({ items }: { items: FAQItem[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serializeJsonLd(schema) }}
    />
  )
}

// ─── Breadcrumb schema ────────────────────────────────────────────────────────
interface Crumb { name: string; href: string }

export function BreadcrumbJsonLd({ crumbs }: { crumbs: Crumb[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((crumb, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: crumb.name,
      item: `${SITE_URL}${crumb.href}`,
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serializeJsonLd(schema) }}
    />
  )
}
