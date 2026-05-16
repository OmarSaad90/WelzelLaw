// ─── Site-wide constants ────────────────────────────────────────────────────
// Update SITE_URL to your production domain before going live.
export const SITE_URL = 'https://welzellaw.netlify.app'
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.svg`
export const FIRM_NAME = 'Welzel Law'

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
    title: 'Welzel Law | Corporate & Real Estate Lawyer Burlington Ontario',
    description:
      'Boutique law firm in Burlington, Ontario. Expert corporate law, real estate closings, business contracts, and fractional general counsel for GTA entrepreneurs and investors. Book a free discovery call.',
    canonical: '/',
  },
  about: {
    title: 'About Fernanda Welzel | Corporate Lawyer Burlington Ontario',
    description:
      'Meet Fernanda Welzel, founder of Welzel Law. Partner-level corporate and real estate legal counsel for Ontario business owners and investors — without the big firm price tag.',
    canonical: '/about',
  },
  businessLaw: {
    title: 'Business Law Burlington Ontario | Contracts, Incorporations & Commercial Law | Welzel Law',
    description:
      'Comprehensive business legal services in Burlington, Ontario. Shareholder agreements, commercial contracts, incorporations, employment agreements, and commercial leases for GTA entrepreneurs.',
    canonical: '/business-law',
  },
  fgc: {
    title: 'Fractional General Counsel Ontario | Part-Time Legal Executive | Welzel Law',
    description:
      'Fractional General Counsel for growing Ontario businesses. Executive-level legal oversight at a fixed monthly fee — without the $200K+ salary. Welzel Law serves startups and SMBs across the GTA.',
    canonical: '/fractional-general-counsel',
  },
  realEstate: {
    title: 'Real Estate Lawyer Burlington Ontario | Residential & Commercial | Welzel Law',
    description:
      'Real estate closing lawyer in Burlington, Ontario. Residential purchases and sales, title insurance, land transfer tax, and commercial leasing. Serving GTA buyers, sellers, and investors.',
    canonical: '/real-estate-law',
  },
  insights: {
    title: 'Legal Insights | Ontario Business & Real Estate Law Articles | Welzel Law',
    description:
      'Expert legal articles on Ontario corporate law, real estate transactions, small business strategy, and fractional general counsel. Practical guidance for Burlington and GTA entrepreneurs.',
    canonical: '/insights',
  },
  contact: {
    title: 'Contact Welzel Law | Free Legal Consultation Burlington Ontario',
    description:
      'Book a free 20-minute discovery call with Welzel Law. Corporate and real estate legal services in Burlington, Ontario. Call (647) 907-5459 or send a message today.',
    canonical: '/contact',
  },
  privacy: {
    title: 'Privacy Policy | Welzel Law Burlington Ontario',
    description: 'Privacy Policy for Welzel Law, a boutique corporate and real estate law firm in Burlington, Ontario.',
    canonical: '/privacy-policy',
    noindex: true,
  },
  terms: {
    title: 'Terms of Service | Welzel Law Burlington Ontario',
    description: 'Terms of Service for Welzel Law, a boutique corporate and real estate law firm in Burlington, Ontario.',
    canonical: '/terms-of-service',
    noindex: true,
  },
}

// ─── Article metadata ─────────────────────────────────────────────────────────
export interface ArticleSEO {
  slug: string
  title: string
  description: string
  category: string
  publishedDate: string
}

export const ARTICLE_SEO: ArticleSEO[] = [
  {
    slug: 'what-is-a-fractional-general-counsel',
    title: 'What Is a Fractional General Counsel? | Welzel Law Ontario',
    description:
      'Learn what a Fractional General Counsel does and whether your Ontario business needs one. Expert guide from Welzel Law — boutique corporate law firm in Burlington.',
    category: 'Fractional GC',
    publishedDate: '2025-01-10',
  },
  {
    slug: 'do-i-need-a-general-counsel',
    title: 'Do I Need a General Counsel? 7 Signs Your Business Has Outgrown Ad-Hoc Legal | Welzel Law',
    description:
      'Not sure if your Ontario business needs a General Counsel? Seven clear signs your company is ready for in-house legal leadership — without the full-time hire.',
    category: 'Fractional GC',
    publishedDate: '2025-01-20',
  },
  {
    slug: 'contracts-every-canadian-smb-should-have',
    title: 'Contracts Every Canadian Small Business Should Have | Welzel Law Burlington',
    description:
      'Essential contracts for Canadian small businesses: NDAs, employment agreements, service contracts, and shareholder agreements. Protect your Ontario business with the right legal foundation.',
    category: 'Business Law',
    publishedDate: '2025-02-03',
  },
  {
    slug: 'corporate-governance-basics-canadian-businesses',
    title: 'Corporate Governance for Canadian Businesses: A Practical Guide | Welzel Law',
    description:
      'Corporate governance basics for Ontario companies. Shareholder agreements, director duties, minute books, and compliance essentials every Canadian business owner should know.',
    category: 'Business Law',
    publishedDate: '2025-02-14',
  },
  {
    slug: 'incorporate-or-sole-proprietorship-ontario',
    title: 'Incorporate vs. Sole Proprietorship in Ontario: Which Is Right for You? | Welzel Law',
    description:
      'Incorporate or stay a sole proprietor? Compare tax implications, liability protection, and when to make the switch for your Ontario business. Welzel Law explains.',
    category: 'Incorporation',
    publishedDate: '2025-02-28',
  },
  {
    slug: 'federal-vs-provincial-incorporation-ontario',
    title: 'Federal vs. Provincial Incorporation in Ontario: Key Differences | Welzel Law',
    description:
      'Should you incorporate federally (CBCA) or provincially (OBCA) in Ontario? Compare costs, name protection, flexibility, and the right choice for your business.',
    category: 'Incorporation',
    publishedDate: '2025-03-10',
  },
  {
    slug: 'convert-sole-proprietorship-to-corporation-ontario',
    title: 'How to Convert a Sole Proprietorship to a Corporation in Ontario | Welzel Law',
    description:
      'Step-by-step guide to converting your Ontario sole proprietorship to a corporation. Timing, process, legal requirements, and tax considerations explained.',
    category: 'Incorporation',
    publishedDate: '2025-03-24',
  },
  {
    slug: 'when-to-register-for-hst-ontario',
    title: 'When to Register for HST in Ontario: A Business Owner\'s Guide | Welzel Law',
    description:
      'When must your Ontario business register for HST? Learn the $30,000 threshold, voluntary registration benefits, and the consequences of registering late.',
    category: 'Incorporation',
    publishedDate: '2025-04-07',
  },
  {
    slug: 'how-incorporation-protects-personal-assets',
    title: 'How Incorporation Protects Your Personal Assets in Ontario | Welzel Law',
    description:
      'Understand how incorporating your business in Ontario creates a legal shield for personal assets. Key protections, real limitations, and what directors need to know.',
    category: 'Incorporation',
    publishedDate: '2025-04-18',
  },
  {
    slug: 'obligations-hiring-first-employee-ontario',
    title: 'Legal Obligations When Hiring Your First Employee in Ontario | Welzel Law',
    description:
      'Everything Ontario employers need before hiring: employment contracts, source deductions, WSIB registration, ESA compliance, and common first-hire legal mistakes.',
    category: 'Business Law',
    publishedDate: '2025-05-02',
  },
  {
    slug: 'closing-costs-ontario',
    title: 'Closing Costs in Ontario: What Home Buyers Really Pay | Welzel Law',
    description:
      'Complete breakdown of Ontario closing costs: land transfer tax, legal fees, title insurance, adjustments, and more. Know exactly what to budget before closing day.',
    category: 'Real Estate',
    publishedDate: '2025-05-15',
  },
  {
    slug: 'land-transfer-tax-ontario',
    title: 'Land Transfer Tax in Ontario: Rates, Rebates & How to Calculate It | Welzel Law',
    description:
      'Ontario land transfer tax rates, Toronto municipal tax, first-time buyer rebates, and a complete calculation guide for every price range. Welzel Law real estate.',
    category: 'Real Estate',
    publishedDate: '2025-06-01',
  },
  {
    slug: 'title-insurance-ontario',
    title: 'Title Insurance in Ontario: What It Covers and Why You Need It | Welzel Law',
    description:
      'What does title insurance cover in Ontario? Owner vs. lender policies, covered risks, cost, and why every Ontario home buyer should have it. Welzel Law explains.',
    category: 'Real Estate',
    publishedDate: '2025-06-16',
  },
  {
    slug: 'non-canadians-buying-property-ontario',
    title: 'Non-Canadians Buying Property in Ontario: Complete Legal Guide | Welzel Law',
    description:
      'Can non-Canadians buy property in Ontario? Navigate the Prohibition on the Purchase of Residential Property Act, foreign buyer rules, and your legal options in 2025.',
    category: 'Real Estate',
    publishedDate: '2025-07-01',
  },
  {
    slug: 'deposit-deal-falls-through-ontario',
    title: 'What Happens to Your Deposit If a Real Estate Deal Falls Through in Ontario | Welzel Law',
    description:
      'If your Ontario real estate deal collapses, what happens to your deposit? Learn the rules around deposit return, conditional offers, and buyer protection in Ontario.',
    category: 'Real Estate',
    publishedDate: '2025-07-15',
  },
]
