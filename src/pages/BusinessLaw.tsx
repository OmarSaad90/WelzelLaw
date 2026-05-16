import { useState, type ChangeEvent, type FormEvent } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from '../components/Navbar'
import SEO from '../components/SEO'
import { PAGE_SEO } from '../data/seo'
import { ServiceJsonLd, BreadcrumbJsonLd } from '../components/JsonLd'
import Footer from '../components/Footer'
import InnerPageHero from '../components/InnerPageHero'

import heroImg       from '../assets/images/business-law/hero.jpg'
import formationImg  from '../assets/images/business-law/formation.jpg'
import agreementsImg from '../assets/images/business-law/agreements.jpg'
import mergersImg    from '../assets/images/business-law/mergers.jpg'
import hrImg         from '../assets/images/business-law/hrlaw.jpeg'
import icon1         from '../assets/images/business-law/icon1.png'
import icon2         from '../assets/images/business-law/icon2.png'
import icon3         from '../assets/images/business-law/icon3.png'
import icon4         from '../assets/images/business-law/icon4.png'
import icon5         from '../assets/images/business-law/icon5.png'
import icon6         from '../assets/images/business-law/icon6.png'

const ease = [0.16, 1, 0.3, 1] as const

const svcStagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.12 } },
}
const svcItem = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
}
const structureStagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

interface ServiceItem {
  title: string
  body: string
  bullets: string[]
  img: string
  alt: string
  fromLeft: boolean
}

const SERVICES: ServiceItem[] = [
  {
    title: 'Business Formation & Structure',
    body: 'Your corporate structure shapes everything that follows — your liability exposure, your tax position, your ability to bring in partners, and your path to growth. We help you choose and build the right foundation from the start.',
    bullets: [
      'Incorporation (federal and provincial)',
      'Shareholder and partnership agreements',
      'Joint venture agreements',
      'Corporate reorganizations and restructuring',
    ],
    img: formationImg,
    alt: 'Business Formation and Structure',
    fromLeft: true,
  },
  {
    title: 'Contracts & Commercial Agreements',
    body: 'Every commercial relationship you enter carries risk. We draft and negotiate contracts that protect your interests, set clear expectations, and hold up when tested.',
    bullets: [
      'Drafting and negotiating commercial contracts',
      'Supply, distribution, and service agreements',
      'Non-disclosure, non-compete, and licensing agreements',
      'Review of government contracts and procurement',
    ],
    img: agreementsImg,
    alt: 'Contracts and Commercial Agreements',
    fromLeft: false,
  },
  {
    title: 'Mergers & Acquisitions',
    body: 'Buying or selling a business is one of the highest-stakes decisions you will make. We guide you through every stage, from initial term sheet to final closing, with the discipline these transactions demand.',
    bullets: [
      'Business purchases and sales',
      'Asset vs. share purchase transactions',
      'Due diligence',
      'Letters of intent and term sheets',
      'Post-closing integration',
    ],
    img: mergersImg,
    alt: 'Mergers and Acquisitions',
    fromLeft: true,
  },
  {
    title: 'Employment & HR Law',
    body: 'Your people are your most valuable asset and your greatest area of legal exposure. We help you build the right policies, agreements, and processes to protect both your employees and your business.',
    bullets: [
      'Employment contracts',
      'Termination and severance',
      'Workplace policies and handbooks',
      'Independent contractor agreements',
    ],
    img: hrImg,
    alt: 'Employment and HR Law',
    fromLeft: false,
  },
]

interface StructureItem {
  title: string
  icon: string
  body: string
}

const STRUCTURES: StructureItem[] = [
  {
    title: 'Corporation',
    icon: icon1,
    body: 'A body corporate formed by one or more people to carry on business for profit. The corporation is treated as a separate legal entity — shareholders have limited liability and cannot be held responsible for the debts and obligations of the corporation, with very few exceptions. This protects your personal assets and offers significant tax advantages. You can incorporate provincially or federally. A federal corporation must also register in each jurisdiction it operates in.',
  },
  {
    title: 'Sole Proprietorship',
    icon: icon2,
    body: 'The simplest way to organize a business. Advantages include ease of setup, complete owner control, and no separate tax records (business income falls under personal income). The key disadvantage is unlimited personal liability. The law makes no distinction between business assets and personal assets — if the business cannot meet its obligations, the owner must do so from personal funds.',
  },
  {
    title: 'General Partnership',
    icon: icon3,
    body: 'A business enterprise operated by two or more people for profit. Partners share profits, obligations, property ownership, and decision-making. Advantages include a larger pool of investment, shared financial and legal risks, and complementary skills. Key disadvantages include unlimited personal liability for all partners and potential loss of control when decisions are made without consensus.',
  },
  {
    title: 'Limited Liability Partnership',
    icon: icon4,
    body: 'Available to certain professions (legal, accounting, and others), an LLP protects partners from liability arising from the negligence, omissions, or wrongful acts of other partners. Partners are not liable for debts arising from another partner\'s actions. An LLP can only be formed for professions governed by an Act that specifically permits this structure.',
  },
  {
    title: 'Limited Partnership',
    icon: icon5,
    body: 'A partnership with at least one general partner managing day-to-day operations and at least one limited partner who contributes capital only. Limited partners are protected from personal liability beyond their investment. They have the right to inspect books, receive full accounting, and share in profits — typically before general partners receive their share.',
  },
  {
    title: 'Other Business Associations',
    icon: icon6,
    body: 'Other structures serve specific purposes: Joint Ventures (limited-purpose partnerships between individuals or corporations for a defined project or time period); Franchises (operating under an established brand and proven business model); Business Trusts (property held and administered by a trustee for the benefit of unit holders); Not-for-Profit Organizations (social or charitable purpose with limited liability for members); and Co-ownership arrangements (joint property ownership without a shared business purpose).',
  },
]

const ARTICLES = [
  {
    title: 'What Contracts Every Canadian SMB Should Have in Place',
    img: agreementsImg,
    excerpt: 'The agreements your business needs before they become the ones you wish you had.',
  },
  {
    title: 'When Do I Need to Register for HST in Ontario?',
    img: mergersImg,
    excerpt: 'Ontario HST rules, thresholds, and what registration means for your cash flow.',
  },
  {
    title: 'How Does Incorporation Protect My Personal Assets?',
    img: formationImg,
    excerpt: 'The liability shield a corporation provides, and the limits you should know about.',
  },
]

export default function BusinessLaw() {
  const [form, setForm] = useState({ name: '', email: '', phone: '' })
  const [submitted, setSubmitted] = useState(false)
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  function toggleItem(i: number) {
    setOpenIndex(prev => (prev === i ? null : i))
  }

  return (
    <>
      <SEO {...PAGE_SEO.businessLaw} />
      <ServiceJsonLd name="Business Law" description="Shareholder agreements, commercial contracts, incorporations, employment agreements, and commercial leases for Ontario entrepreneurs." url="/business-law" />
      <BreadcrumbJsonLd crumbs={[{ name: 'Home', href: '/' }, { name: 'Business Law', href: '/business-law' }]} />
      <Navbar />
      <main className="bl-page-main">

        {/* ── HERO ────────────────────────────────────────────── */}
        <InnerPageHero
          image={heroImg}
          imageAlt="Business Law"
          eyebrow="Welzel Law"
          title="Business Law"
          subtitle="Counsel that moves as fast as your business does."
        />

        {/* ── INTRO / PHILOSOPHY ──────────────────────────────── */}
        <section className="bl-intro">
          <div className="about-container">
            <div className="bl-intro-grid">

              <motion.div
                className="bl-intro-heading-col"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={svcStagger}
              >
                <motion.p className="about-eyebrow" variants={svcItem}>Why It Matters</motion.p>
                <motion.h2 className="bl-intro-heading" variants={svcItem}>
                  Good decisions require clarity, not gut feeling.
                </motion.h2>
              </motion.div>

              <motion.div
                className="bl-intro-body-col"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.14, ease }}
              >
                <p className="bl-intro-body">
                  Too many business owners make critical decisions under pressure and with incomplete information. We have seen what happens when legal and commercial thinking are not aligned — missed opportunities, costly disputes, and agreements that create problems down the road.
                </p>
                <p className="bl-intro-body">
                  Good legal counsel is not just about avoiding risk. It is about giving you the confidence to act decisively — to negotiate from strength, structure deals that hold up, and build a business protected for the long term.
                </p>
                <p className="bl-intro-body">
                  In business, clarity is not a luxury. It is your competitive advantage.
                </p>
                <a href="/contact" className="about-svc-cta bl-intro-cta">
                  Request a Consult
                </a>
              </motion.div>

            </div>
          </div>
        </section>

        {/* ── SERVICES WE OFFER ───────────────────────────────── */}
        <section className="bl-services">
          <div className="about-container">

            <motion.div
              className="about-services-header"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={svcStagger}
            >
              <motion.p className="about-eyebrow" variants={svcItem}>Services</motion.p>
              <motion.h2 className="about-services-heading" variants={svcItem}>Services We Offer</motion.h2>
            </motion.div>

            {SERVICES.map((svc) => (
              <BlServiceRow key={svc.title} svc={svc} />
            ))}

          </div>
        </section>

        {/* ── BUSINESS STRUCTURE ACCORDION ────────────────────── */}
        <section className="bl-structure">
          <div className="about-container">

            <motion.div
              className="bl-structure-header"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={structureStagger}
            >
              <motion.p className="bl-structure-eyebrow" variants={svcItem}>Know Your Options</motion.p>
              <motion.h2 className="bl-structure-heading" variants={svcItem}>
                Undecided about the business structure?
              </motion.h2>
              <motion.p className="bl-structure-subhead" variants={svcItem}>
                Businesses come in many forms, each with unique benefits and drawbacks. Take the time to explore your options before committing.
              </motion.p>
            </motion.div>

            <div className="bl-accordion-grid">
              {STRUCTURES.map((item, i) => (
                <motion.div
                  key={item.title}
                  className={`bl-accordion-card${openIndex === i ? ' bl-accordion-card-open' : ''}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.05 }}
                  transition={{ duration: 0.5, delay: i * 0.07, ease }}
                >
                  <button
                    className="bl-accordion-btn"
                    onClick={() => toggleItem(i)}
                    aria-expanded={openIndex === i}
                  >
                    <div className="bl-accordion-btn-left">
                      <img src={item.icon} alt="" className="bl-accordion-icon" aria-hidden="true" />
                      <span className="bl-accordion-title">{item.title}</span>
                    </div>
                    <motion.span
                      className="bl-accordion-chevron"
                      animate={{ rotate: openIndex === i ? 45 : 0 }}
                      transition={{ duration: 0.28, ease }}
                      aria-hidden="true"
                    >
                      +
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {openIndex === i && (
                      <motion.div
                        key="body"
                        className="bl-accordion-body"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.38, ease }}
                      >
                        <p className="bl-accordion-text">{item.body}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>

          </div>
        </section>

        {/* ── INSIGHTS ────────────────────────────────────────── */}
        <section className="bl-insights">
          <div className="about-container">

            <motion.div
              className="bl-insights-header"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={svcStagger}
            >
              <motion.p className="about-eyebrow" variants={svcItem}>Insights</motion.p>
              <motion.h2 className="bl-insights-heading" variants={svcItem}>Latest Insights — Business Law</motion.h2>
            </motion.div>

            <div className="about-articles">
              {ARTICLES.map((article, i) => (
                <motion.a
                  key={i}
                  href="/insights"
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

        {/* ── SUBSCRIBE ───────────────────────────────────────── */}
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
                    <input
                      type="text" name="name" placeholder="Full Name"
                      value={form.name} onChange={handleChange} required
                      className="about-subscribe-input"
                    />
                    <input
                      type="email" name="email" placeholder="Email Address"
                      value={form.email} onChange={handleChange} required
                      className="about-subscribe-input"
                    />
                    <input
                      type="tel" name="phone" placeholder="Phone Number (optional)"
                      value={form.phone} onChange={handleChange}
                      className="about-subscribe-input"
                    />
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

function BlServiceRow({ svc }: { svc: ServiceItem }) {
  const imgVariant = {
    hidden: { opacity: 0, x: svc.fromLeft ? -40 : 40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease } },
  }

  return (
    <div className={`about-svc-row${svc.fromLeft ? '' : ' about-svc-row-reverse'}`}>
      <motion.div
        className="about-svc-img-wrap"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={imgVariant}
      >
        <img src={svc.img} alt={svc.alt} className="about-svc-img" />
      </motion.div>

      <motion.div
        className="about-svc-text"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
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
        <motion.a href="/contact" className="about-svc-cta" variants={svcItem}>Request a Consult</motion.a>
      </motion.div>
    </div>
  )
}
