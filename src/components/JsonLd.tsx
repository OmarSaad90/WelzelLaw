import { SITE_URL, DEFAULT_OG_IMAGE } from '../data/seo'

// ─── Sitewide: LegalService + LocalBusiness ──────────────────────────────────
export function SitewideJsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['LegalService', 'LocalBusiness'],
        '@id': `${SITE_URL}/#organization`,
        name: 'Welzel Law',
        url: SITE_URL,
        logo: DEFAULT_OG_IMAGE,
        image: DEFAULT_OG_IMAGE,
        telephone: '+16479075459',
        email: 'info@welzellaw.ca',
        priceRange: '$$',
        currenciesAccepted: 'CAD',
        paymentAccepted: 'Cash, Credit Card, E-Transfer',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '5063 North Service Rd., Suite 100',
          addressLocality: 'Burlington',
          addressRegion: 'ON',
          postalCode: 'L7L 5H6',
          addressCountry: 'CA',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 43.3697,
          longitude: -79.8021,
        },
        areaServed: [
          { '@type': 'City', name: 'Burlington' },
          { '@type': 'City', name: 'Hamilton' },
          { '@type': 'City', name: 'Oakville' },
          { '@type': 'City', name: 'Mississauga' },
          { '@type': 'City', name: 'Toronto' },
          { '@type': 'AdministrativeArea', name: 'Greater Toronto Area' },
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
          'https://www.linkedin.com/company/welzel-law',
          'https://www.instagram.com/welzellaw',
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
        name: 'Welzel Law',
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
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
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
      servicePhone: '+16479075459',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
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
      name: 'Welzel Law',
      logo: { '@type': 'ImageObject', url: DEFAULT_OG_IMAGE },
    },
    articleSection: category,
    inLanguage: 'en-CA',
    about: {
      '@type': 'LegalService',
      name: 'Welzel Law',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
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
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
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
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
