import { useState, type ChangeEvent, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import SEO from '../components/SEO'
import { PAGE_SEO } from '../data/seo'
import { ServiceJsonLd, BreadcrumbJsonLd } from '../components/JsonLd'
import Footer from '../components/Footer'
import InnerPageHero from '../components/InnerPageHero'

import heroImg       from '../assets/images/fgc/hero.jpg'
import whatWeDoImg   from '../assets/images/fgc/WhatWeDo.jpg'
import flexImg       from '../assets/images/fgc/Flexibility.jpg'
import corpGovImg    from '../assets/images/fgc/CorporateGovernance.jpg'
import contractImg   from '../assets/images/fgc/ContractManagement.jpg'
import riskImg       from '../assets/images/fgc/RiskManagement.jpg'
import empImg        from '../assets/images/fgc/Employment.jpg'
import mergersImg    from '../assets/images/fgc/Mergers.png'
import commercialImg from '../assets/images/fgc/Commercial.jpg'
import disputeImg    from '../assets/images/fgc/Dispute.jpg'
import externalImg   from '../assets/images/fgc/External.jpg'

import insWhatIs  from '../assets/images/insights/WhatIs.png'
import insDoINeed from '../assets/images/insights/DoINeed.png'
import insCorpGov from '../assets/images/insights/CorporateGovernance.jpg'

const ease = [0.16, 1, 0.3, 1] as const

const svcStagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.12 } },
}
const svcItem = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
}

/* ── Types ─────────────────────────────────────────────────── */

interface ServiceItem {
  title: string
  body: string
  bullets: string[]
  img: string
  alt: string
}

type LayoutBlock =
  | { kind: 'full'; svc: ServiceItem; fromLeft: boolean }
  | { kind: 'pair'; items: [ServiceItem, ServiceItem] }

/* ── Service data ───────────────────────────────────────────── */

const CORP_GOV: ServiceItem = {
  title: 'Corporate Governance',
  body: 'Proper governance is the foundation of a defensible, scalable business. We keep your house in order so you can focus on growth.',
  bullets: [
    'Maintaining corporate records and minute books',
    'Advising the board of directors and executive team',
    'Drafting corporate policies',
    'Managing annual filings and compliance obligations',
    'Structuring and documenting shareholder decisions',
  ],
  img: corpGovImg,
  alt: 'Corporate Governance',
}

const CONTRACT_MGMT: ServiceItem = {
  title: 'Contract Management',
  body: 'Every commercial relationship begins with a contract. We build and maintain the infrastructure that keeps your agreements working for you.',
  bullets: [
    'Drafting, reviewing, and negotiating commercial contracts',
    'Building and maintaining contract templates',
    'Managing contract lifecycle and renewals',
    'Identifying and mitigating contractual risk',
    'Vendor and supplier agreement oversight',
  ],
  img: contractImg,
  alt: 'Contract Management',
}

const RISK_MGMT: ServiceItem = {
  title: 'Risk Management & Legal Strategy',
  body: 'Legal risk does not announce itself. We identify it early, assess it clearly, and build the frameworks that keep you ahead of it.',
  bullets: [
    'Identifying and prioritizing legal risks across the business',
    'Developing risk mitigation frameworks',
    'Advising on legal implications of business decisions',
    'Supporting strategic planning from a legal perspective',
    'Crisis management and damage control',
  ],
  img: riskImg,
  alt: 'Risk Management and Legal Strategy',
}

const EMPLOYMENT: ServiceItem = {
  title: 'Employment & HR',
  body: 'Your people are your greatest asset and your largest area of legal exposure. We help you build a workforce protected by the right policies and agreements.',
  bullets: [
    'Drafting employment contracts and offer letters',
    'Advising on terminations and severance',
    'Creating workplace policies and employee handbooks',
    'Navigating human rights and accommodation issues',
    'Independent contractor vs. employee classification',
  ],
  img: empImg,
  alt: 'Employment and HR',
}

const MERGERS: ServiceItem = {
  title: 'Mergers, Acquisitions & Financing',
  body: 'Transactions are moments of maximum leverage and maximum risk. We keep the legal side disciplined so the deal closes the way it was meant to.',
  bullets: [
    'Supporting due diligence on transactions',
    'Reviewing and negotiating term sheets and LOIs',
    'Coordinating with external counsel on complex deals',
    'Managing legal aspects of business sales or acquisitions',
  ],
  img: mergersImg,
  alt: 'Mergers Acquisitions and Financing',
}

const COMMERCIAL_RE: ServiceItem = {
  title: 'Commercial Real Estate',
  body: 'Your physical footprint is a strategic asset. We make sure your leases and property decisions hold up under the pressures of growth.',
  bullets: [
    'Reviewing and negotiating commercial leases',
    'Advising on office and facility expansions',
    'Supporting property purchases tied to business operations',
  ],
  img: commercialImg,
  alt: 'Commercial Real Estate',
}

const DISPUTE: ServiceItem = {
  title: 'Dispute Prevention & Resolution',
  body: 'The best disputes are the ones that never happen. When they do arise, we manage them with the precision and calm that protects your business relationships.',
  bullets: [
    'Early identification of potential disputes',
    'Cease and desist letters and demand correspondence',
    'Managing external litigation counsel',
    'Negotiating settlements',
  ],
  img: disputeImg,
  alt: 'Dispute Prevention and Resolution',
}

const EXTERNAL: ServiceItem = {
  title: 'External Counsel Management',
  body: 'Specialized legal work requires specialized counsel. We select, brief, and manage external lawyers so you get the right expertise without losing control of cost or direction.',
  bullets: [
    'Selecting and briefing specialized legal counsel',
    'Managing legal spend and outside counsel budgets',
    'Coordinating across multiple legal matters simultaneously',
    'Acting as the internal point of contact for all legal affairs',
  ],
  img: externalImg,
  alt: 'External Counsel Management',
}

/* ── Layout — 1-2-1-2-2 magazine rhythm ────────────────────── */

const LAYOUT: LayoutBlock[] = [
  { kind: 'full',  fromLeft: true,  svc: CORP_GOV },
  { kind: 'pair',  items: [CONTRACT_MGMT, RISK_MGMT] },
  { kind: 'full',  fromLeft: false, svc: EMPLOYMENT },
  { kind: 'pair',  items: [MERGERS, COMMERCIAL_RE] },
  { kind: 'full',  fromLeft: true,  svc: DISPUTE },
  { kind: 'full',  fromLeft: false, svc: EXTERNAL },
]

/* ── Articles ───────────────────────────────────────────────── */

const ARTICLES = [
  {
    title: 'What is a Fractional General Counsel?',
    img: insWhatIs,
    excerpt: 'Growing businesses get executive-level legal strategy without the cost of a full-time hire.',
    slug: 'what-is-a-fractional-general-counsel',
  },
  {
    title: 'Do I Need a General Counsel? 7 Signs Your SMB Has Outgrown Ad-Hoc Legal',
    img: insDoINeed,
    excerpt: 'When legal is reactive instead of proactive, the warning signs are already there.',
    slug: 'do-i-need-a-general-counsel',
  },
  {
    title: 'Corporate Governance Basics for Growing Canadian Businesses',
    img: insCorpGov,
    excerpt: 'The records, filings, and decisions that protect your company as it scales.',
    slug: 'corporate-governance-basics-canadian-businesses',
  },
]

/* ── Page ───────────────────────────────────────────────────── */

export default function FractionalGeneralCounsel() {
  const [form, setForm] = useState({ name: '', email: '', phone: '' })
  const [submitted, setSubmitted] = useState(false)

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <SEO {...PAGE_SEO.fgc} />
      <ServiceJsonLd name="Fractional General Counsel" description="Executive-level legal oversight for growing Ontario businesses at a fixed monthly fee. Strategic legal support without the cost of a full-time General Counsel." url="/fractional-general-counsel" />
      <BreadcrumbJsonLd crumbs={[{ name: 'Home', href: '/' }, { name: 'Fractional General Counsel', href: '/fractional-general-counsel' }]} />
      <Navbar />
      <main className="fgc-page-main">

        {/* ── HERO ──────────────────────────────────────────── */}
        <InnerPageHero
          image={heroImg}
          imageAlt="Fractional General Counsel"
          eyebrow="Welzel Law"
          title="Fractional General Counsel"
          subtitle="The legal partner at your executive table, without the full-time salary."
          variant="overlay"
        />

        {/* ── INTRO ─────────────────────────────────────────── */}
        <section className="fgc-intro">
          <div className="about-container">
            <div className="fgc-intro-grid">

              <motion.div
                className="fgc-intro-left"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={svcStagger}
              >
                <motion.p className="about-eyebrow" variants={svcItem}>The Alternative</motion.p>
                <motion.h2 className="fgc-intro-heading" variants={svcItem}>
                  A senior legal partner. A fraction of the cost.
                </motion.h2>
              </motion.div>

              <motion.div
                className="fgc-intro-right"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.14, ease }}
              >
                <p className="fgc-intro-body">
                  Most growing businesses in Canada reach a point where legal issues are too frequent to ignore, but not quite frequent enough to justify a full-time General Counsel. The result? Legal decisions get delayed, contracts go unreviewed, and risk quietly accumulates.
                </p>
                <p className="fgc-intro-body">
                  A Fractional General Counsel changes that. You get a senior executive-level legal partner embedded in your business, without the $200K to $350K yearly salary, benefits, or overhead of a full-time hire.
                </p>
                <p className="fgc-intro-body">
                  We offer a monthly fixed fee service as a better alternative.
                </p>
                <a href="https://calendly.com/fernanda-welzel" target="_blank" rel="noopener noreferrer" className="about-svc-cta fgc-intro-cta">
                  Request a Consult
                </a>
              </motion.div>

            </div>
          </div>
        </section>

        {/* ── WHAT WE DO + FLEXIBILITY ──────────────────────── */}
        <section className="fgc-overview">
          <div className="about-container">

            <FgcOverviewBlock
              title="What We Actually Do"
              body="As your Fractional General Counsel, we do far more than review contracts. We attend leadership meetings, advise on strategic decisions, manage legal compliance, negotiate with counterparties, and help you build legal infrastructure that scales with your business. Think of us as the legal voice at your executive table: proactive, commercially minded, and fully invested in where your business is going, not just where it has been."
              img={whatWeDoImg}
              alt="What We Actually Do"
            />

            <FgcOverviewBlock
              title="The Flexibility"
              body="No two businesses are the same, and neither is the support they need. Whether you require a few hours of counsel each month, intensive support through a period of rapid growth, or everything in between, our Fractional General Counsel service is built around your business, not a rigid retainer structure. You get the right level of legal support at the right time, so you are never over-resourced or exposed."
              img={flexImg}
              alt="The Flexibility"
              cta
              imageRight
              imgPosition="left center"
            />

          </div>
        </section>

        {/* ── SERVICES ──────────────────────────────────────── */}
        <section className="fgc-services">
          <div className="about-container">

            <motion.div
              className="about-services-header"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={svcStagger}
            >
              <motion.p className="about-eyebrow" variants={svcItem}>What We Handle</motion.p>
              <motion.h2 className="about-services-heading" variants={svcItem}>Services We Offer</motion.h2>
            </motion.div>

            {LAYOUT.map((block) =>
              block.kind === 'full'
                ? <FgcFullRow key={block.svc.title} svc={block.svc} fromLeft={block.fromLeft} />
                : <FgcPairRow key={block.items[0].title} items={block.items} />
            )}

          </div>
        </section>

        {/* ── INSIGHTS ──────────────────────────────────────── */}
        <section className="fgc-insights">
          <div className="about-container">

            <motion.div
              className="fgc-insights-header"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={svcStagger}
            >
              <motion.p className="about-eyebrow" variants={svcItem}>Insights</motion.p>
              <motion.h2 className="fgc-insights-heading" variants={svcItem}>Latest Insights: Fractional General Counsel</motion.h2>
            </motion.div>

            <div className="about-articles">
              {ARTICLES.map((article, i) => (
                <motion.a
                  key={i}
                  href={`/insights/${article.slug}`}
                  className="about-article"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.55, delay: i * 0.12, ease }}
                >
                  <div className="about-article-img-wrap">
                    <img src={article.img} alt={article.title} className="about-article-img" />
                  </div>
                  <motion.div
                    className="about-article-body"
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.05 }}
                    transition={{ duration: 0.5, delay: i * 0.12 + 0.2, ease }}
                  >
                    <div className="about-article-bar" />
                    <h3 className="about-article-title">{article.title}</h3>
                    <p className="about-article-excerpt">{article.excerpt}</p>
                    <span className="about-article-link">Read More</span>
                  </motion.div>
                </motion.a>
              ))}
            </div>

            <motion.div
              className="about-collection-wrap"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, ease }}
            >
              <a href="/insights" className="about-collection-link">View Full Collection</a>
            </motion.div>

          </div>
        </section>

        {/* ── SUBSCRIBE ─────────────────────────────────────── */}
        <section className="about-subscribe">
          <div className="about-container">
            <div className="about-subscribe-inner">

              <motion.div
                className="about-subscribe-copy"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, ease }}
              >
                <p className="about-eyebrow">Stay Connected</p>
                <h2 className="about-subscribe-heading">Legal insights,<br />in your inbox.</h2>
                <p className="about-subscribe-body">
                  Practical updates on Ontario business and real estate law, delivered when they matter.
                </p>
              </motion.div>

              <motion.form
                className="about-subscribe-form"
                onSubmit={handleSubmit}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: 0.1, ease }}
              >
                {submitted ? (
                  <p className="about-subscribe-success">You're on the list. We'll be in touch.</p>
                ) : (
                  <>
                    <input type="text" name="name" placeholder="Full Name" value={form.name} onChange={handleChange} required className="about-subscribe-input" />
                    <input type="email" name="email" placeholder="Email Address" value={form.email} onChange={handleChange} required className="about-subscribe-input" />
                    <input type="tel" name="phone" placeholder="Phone Number (optional)" value={form.phone} onChange={handleChange} className="about-subscribe-input" />
                    <button type="submit" className="about-subscribe-btn">Subscribe</button>
                  </>
                )}
              </motion.form>

            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}

/* ── Overview block (image left, text right) ─────────────────── */

function FgcOverviewBlock({ title, body, img, alt, cta, imageRight, imgPosition = 'center' }: {
  title: string; body: string; img: string; alt: string; cta?: boolean; imageRight?: boolean; imgPosition?: string
}) {
  return (
    <div className={`fgc-overview-block${imageRight ? ' fgc-overview-block-reverse' : ''}`}>
      <motion.div
        className="fgc-overview-img-wrap"
        initial={{ opacity: 0, x: imageRight ? 32 : -32 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.9, ease }}
      >
        <img src={img} alt={alt} className="fgc-overview-img" style={{ objectPosition: imgPosition }} />
      </motion.div>

      <motion.div
        className="fgc-overview-text"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={svcStagger}
      >
        <motion.div variants={svcItem}>
          <div className="about-svc-bar" />
          <h2 className="fgc-overview-title">{title}</h2>
        </motion.div>
        <motion.p className="fgc-overview-body" variants={svcItem}>{body}</motion.p>
        {cta && (
          <motion.a href="https://calendly.com/fernanda-welzel" target="_blank" rel="noopener noreferrer" className="about-svc-cta" variants={svcItem}>Request a Consult</motion.a>
        )}
      </motion.div>
    </div>
  )
}

/* ── Full-width feature service row ──────────────────────────── */

function FgcFullRow({ svc, fromLeft }: { svc: ServiceItem; fromLeft: boolean }) {
  const imgVariant = {
    hidden: { opacity: 0, x: fromLeft ? -40 : 40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease } },
  }

  return (
    <div className={`fgc-svc-full-row${fromLeft ? '' : ' fgc-svc-full-row-reverse'}`}>
      <motion.div
        className="fgc-svc-full-img-wrap"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={imgVariant}
      >
        <img src={svc.img} alt={svc.alt} className="fgc-svc-full-img" />
      </motion.div>

      <motion.div
        className="about-svc-text"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={svcStagger}
      >
        <motion.div variants={svcItem}>
          <div className="about-svc-bar" />
          <h3 className="about-svc-title">{svc.title}</h3>
        </motion.div>
        <motion.p className="about-svc-body" variants={svcItem}>{svc.body}</motion.p>
        <motion.ul className="about-svc-bullets" variants={svcItem}>
          {svc.bullets.map((b, i) => (
            <li key={i}>
              <span className="about-svc-dot" />
              <span>{b}</span>
            </li>
          ))}
        </motion.ul>
        <motion.a href="https://calendly.com/fernanda-welzel" target="_blank" rel="noopener noreferrer" className="about-svc-cta" variants={svcItem}>Request a Consult</motion.a>
      </motion.div>
    </div>
  )
}

/* ── Side-by-side pair service row ──────────────────────────── */

function FgcPairRow({ items }: { items: [ServiceItem, ServiceItem] }) {
  return (
    <div className="fgc-svc-pair">
      {items.map((svc, i) => (
        <motion.div
          key={svc.title}
          className="fgc-svc-pair-item"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7, delay: i * 0.12, ease }}
        >
          <div className="fgc-svc-pair-img-wrap">
            <img src={svc.img} alt={svc.alt} className="fgc-svc-pair-img" />
          </div>
          <div className="fgc-svc-pair-text">
            <div>
              <div className="about-svc-bar" />
              <h3 className="fgc-svc-pair-title">{svc.title}</h3>
            </div>
            <p className="about-svc-body">{svc.body}</p>
            <ul className="about-svc-bullets">
              {svc.bullets.map((b, j) => (
                <li key={j}>
                  <span className="about-svc-dot" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <a href="https://calendly.com/fernanda-welzel" target="_blank" rel="noopener noreferrer" className="about-svc-cta">Request a Consult</a>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
