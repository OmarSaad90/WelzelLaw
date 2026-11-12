import { FIRM } from './firm'

// ─── Site-wide constants ────────────────────────────────────────────────────
// Staging on Netlify until keysteplegal.ca is connected; then change this one line.
// Canonical URLs, Open Graph, JSON-LD, sitemap and robots all derive from it.
export const SITE_URL = 'https://keysteplegal.netlify.app'
// Raster on purpose: LinkedIn, Facebook and WhatsApp previews (and Google's
// logo guidelines) don't support SVG.
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png` // 1200×630 share card
export const LOGO_URL = `${SITE_URL}/logo.png`            // 512×512 square mark, for JSON-LD
export const FIRM_NAME = FIRM.name

// ─── Page metadata ───────────────────────────────────────────────────────────
export interface PageSEO {
  title: string
  description: string
  canonical: string
  ogType?: 'website' | 'article'
  noindex?: boolean
}

export const PAGE_SEO: Record<string, PageSEO> = {
  home: {
    title: 'Key Step Legal | Corporate & Real Estate Lawyer, Kitchener',
    description:
      'Boutique law firm in Kitchener, Ontario. Expert corporate law, real estate closings, business contracts, and fractional general counsel for Ontario entrepreneurs and investors. Book a free discovery call.',
    canonical: '/',
  },
  about: {
    title: 'About Fernanda Welzel | Corporate Lawyer Kitchener Ontario',
    description:
      'Meet Fernanda Welzel, founder of Key Step Legal. Partner-level corporate and real estate legal counsel for Ontario business owners and investors — without the big firm price tag.',
    canonical: '/about',
  },
  businessLaw: {
    title: 'Business Lawyer Kitchener-Waterloo | Key Step Legal',
    description:
      'Comprehensive business legal services in Kitchener, Ontario. Shareholder agreements, commercial contracts, incorporations, employment agreements, and commercial leases for Ontario entrepreneurs.',
    canonical: '/business-law',
  },
  fgc: {
    title: 'Fractional General Counsel Ontario | Key Step Legal',
    description:
      'Fractional General Counsel for growing Ontario businesses. Executive-level legal oversight at a fixed monthly fee — without the cost of a full-time hire. Key Step Legal serves startups and SMBs across Ontario.',
    canonical: '/fractional-general-counsel',
  },
  realEstate: {
    title: 'Real Estate Lawyer Kitchener-Waterloo | Key Step Legal',
    description:
      'Real estate closing lawyer in Kitchener, Ontario. Residential purchases and sales, title insurance, land transfer tax, and commercial leasing. Serving Ontario buyers, sellers, and investors.',
    canonical: '/real-estate-law',
  },
  insights: {
    title: 'Ontario Business & Real Estate Law Insights | Key Step Legal',
    description:
      'Expert legal articles on Ontario corporate law, real estate transactions, small business strategy, and fractional general counsel. Practical guidance for Ontario entrepreneurs.',
    canonical: '/insights',
  },
  contact: {
    title: 'Contact Key Step Legal | Free Consultation, Kitchener',
    description:
      `Book a free 15-minute discovery call with Key Step Legal. Corporate and real estate legal services in Kitchener, Ontario. Call ${FIRM.phoneDisplay} or send a message today.`,
    canonical: '/contact',
  },
  privacy: {
    title: 'Privacy Policy | Key Step Legal Kitchener Ontario',
    description: 'Privacy Policy for Key Step Legal, a boutique corporate and real estate law firm in Kitchener, Ontario.',
    canonical: '/privacy-policy',
    noindex: true,
  },
  terms: {
    title: 'Terms of Service | Key Step Legal Kitchener Ontario',
    description: 'Terms of Service for Key Step Legal, a boutique corporate and real estate law firm in Kitchener, Ontario.',
    canonical: '/terms-of-service',
    noindex: true,
  },
}

// ─── Article metadata ─────────────────────────────────────────────────────────
// Google shows roughly the first 60 characters of a <title>.
const TITLE_DISPLAY_LIMIT = 60

/**
 * <title> for an article: the plain headline, plus "| Key Step Legal" only
 * when the result still fits in what Google displays. A truncated brand
 * ("| Key Ste…") reads worse than no brand, so long headlines go without it.
 */
export function articleTitleTag(headline: string): string {
  const branded = `${headline} | ${FIRM_NAME}`
  return branded.length <= TITLE_DISPLAY_LIMIT ? branded : headline
}

export interface ArticleSEO {
  slug: string
  /** Plain headline, no brand suffix (also used as the Article JSON-LD headline). */
  title: string
  description: string
  category: string
  publishedDate: string
}

export const ARTICLE_SEO: ArticleSEO[] = [
  {
    slug: 'what-is-a-fractional-general-counsel',
    title: 'What Is a Fractional General Counsel?',
    description:
      'Learn what a Fractional General Counsel does and whether your Ontario business needs one. Expert guide from Key Step Legal — boutique corporate law firm in Kitchener.',
    category: 'Fractional GC',
    publishedDate: '2025-01-10',
  },
  {
    slug: 'do-i-need-a-general-counsel',
    title: 'Do I Need a General Counsel? 7 Signs It\'s Time',
    description:
      'Not sure if your Ontario business needs a General Counsel? Seven clear signs your company is ready for in-house legal leadership — without the full-time hire.',
    category: 'Fractional GC',
    publishedDate: '2025-01-20',
  },
  {
    slug: 'contracts-every-canadian-smb-should-have',
    title: 'Contracts Every Canadian Small Business Should Have',
    description:
      'Essential contracts for Canadian small businesses: NDAs, employment agreements, service contracts, and shareholder agreements. Protect your Ontario business with the right legal foundation.',
    category: 'Business Law',
    publishedDate: '2025-02-03',
  },
  {
    slug: 'corporate-governance-basics-canadian-businesses',
    title: 'Corporate Governance for Canadian Businesses: A Guide',
    description:
      'Corporate governance basics for Ontario companies. Shareholder agreements, director duties, minute books, and compliance essentials every Canadian business owner should know.',
    category: 'Business Law',
    publishedDate: '2025-02-14',
  },
  {
    slug: 'incorporate-or-sole-proprietorship-ontario',
    title: 'Incorporate vs. Sole Proprietorship in Ontario',
    description:
      'Incorporate or stay a sole proprietor? Compare tax implications, liability protection, and when to make the switch for your Ontario business. Key Step Legal explains.',
    category: 'Incorporation',
    publishedDate: '2025-02-28',
  },
  {
    slug: 'federal-vs-provincial-incorporation-ontario',
    title: 'Federal vs. Provincial Incorporation in Ontario',
    description:
      'Should you incorporate federally (CBCA) or provincially (OBCA) in Ontario? Compare costs, name protection, flexibility, and the right choice for your business.',
    category: 'Incorporation',
    publishedDate: '2025-03-10',
  },
  {
    slug: 'convert-sole-proprietorship-to-corporation-ontario',
    title: 'Convert a Sole Proprietorship to a Corporation in Ontario',
    description:
      'Step-by-step guide to converting your Ontario sole proprietorship to a corporation. Timing, process, legal requirements, and tax considerations explained.',
    category: 'Incorporation',
    publishedDate: '2025-03-24',
  },
  {
    slug: 'when-to-register-for-hst-ontario',
    title: 'When to Register for HST in Ontario',
    description:
      'When must your Ontario business register for HST? Learn the $30,000 threshold, voluntary registration benefits, and the consequences of registering late.',
    category: 'Incorporation',
    publishedDate: '2025-04-07',
  },
  {
    slug: 'how-incorporation-protects-personal-assets',
    title: 'How Incorporation Protects Your Personal Assets in Ontario',
    description:
      'Understand how incorporating your business in Ontario creates a legal shield for personal assets. Key protections, real limitations, and what directors need to know.',
    category: 'Incorporation',
    publishedDate: '2025-04-18',
  },
  {
    slug: 'obligations-hiring-first-employee-ontario',
    title: 'Legal Obligations When Hiring Your First Employee in Ontario',
    description:
      'Everything Ontario employers need before hiring: employment contracts, source deductions, WSIB registration, ESA compliance, and common first-hire legal mistakes.',
    category: 'Business Law',
    publishedDate: '2025-05-02',
  },
  {
    slug: 'entering-canadian-medical-device-market',
    title: 'Entering the Canadian Medical Device Market',
    description:
      'Subsidiary, distributor, or sales agent? How foreign medical device manufacturers should structure Canadian market entry, MDEL and importer roles, and liability allocation.',
    category: 'Healthcare',
    publishedDate: '2026-11-12',
  },
  {
    slug: 'how-medical-devices-are-sold-in-canada',
    title: 'How Medical Devices and Supplies Are Sold in Canada',
    description:
      'How Canadian hospitals buy medical devices: provincial tenders, group purchasing organizations, and which provinces to prioritize when entering the market.',
    category: 'Healthcare',
    publishedDate: '2026-11-12',
  },
  {
    slug: 'personal-health-information-privacy-law-canada',
    title: 'Personal Health Information and Privacy Law in Canada',
    description:
      'PIPEDA, PHIPA, and provincial data residency rules: which Canadian privacy laws apply to medical device and healthcare companies handling patient data.',
    category: 'Healthcare',
    publishedDate: '2026-11-12',
  },
  {
    slug: 'closing-costs-ontario',
    title: 'Closing Costs in Ontario: What Home Buyers Really Pay',
    description:
      'Complete breakdown of Ontario closing costs: land transfer tax, legal fees, title insurance, adjustments, and more. Know exactly what to budget before closing day.',
    category: 'Real Estate',
    publishedDate: '2025-05-15',
  },
  {
    slug: 'land-transfer-tax-ontario',
    title: 'Land Transfer Tax in Ontario: Rates, Rebates & Calculation',
    description:
      'Ontario land transfer tax rates, Toronto municipal tax, first-time buyer rebates, and a complete calculation guide for every price range. Key Step Legal real estate.',
    category: 'Real Estate',
    publishedDate: '2025-06-01',
  },
  {
    slug: 'title-insurance-ontario',
    title: 'Title Insurance in Ontario: What It Covers',
    description:
      'What does title insurance cover in Ontario? Owner vs. lender policies, covered risks, cost, and why every Ontario home buyer should have it. Key Step Legal explains.',
    category: 'Real Estate',
    publishedDate: '2025-06-16',
  },
  {
    slug: 'non-canadians-buying-property-ontario',
    title: 'Non-Canadians Buying Property in Ontario: Legal Guide',
    description:
      'Can non-Canadians buy property in Ontario? Navigate the Prohibition on the Purchase of Residential Property Act, foreign buyer rules, and your legal options in 2025.',
    category: 'Real Estate',
    publishedDate: '2025-07-01',
  },
  {
    slug: 'deposit-deal-falls-through-ontario',
    title: 'Deposit Rules When an Ontario Real Estate Deal Falls Through',
    description:
      'If your Ontario real estate deal collapses, what happens to your deposit? Learn the rules around deposit return, conditional offers, and buyer protection in Ontario.',
    category: 'Real Estate',
    publishedDate: '2025-07-15',
  },
]
