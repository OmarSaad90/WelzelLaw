import { useState, type ChangeEvent, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import SEO from '../components/SEO'
import { PAGE_SEO } from '../data/seo'
import { ServiceJsonLd, BreadcrumbJsonLd } from '../components/JsonLd'
import Footer from '../components/Footer'
import InnerPageHero from '../components/InnerPageHero'

import heroImg        from '../assets/images/real-estate/home.jpg'
import residentialImg from '../assets/images/real-estate/residential.jpg'
import commercialImg  from '../assets/images/real-estate/commercial.jpg'

import insClosing from '../assets/images/insights/WhatAreClosingCosts.png'
import insDeposit from '../assets/images/insights/WhatHappens.jpg'
import insNonCan  from '../assets/images/insights/CanNonCanadians.png'

const ease = [0.16, 1, 0.3, 1] as const

const svcStagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.12 } },
}
const svcItem = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
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
    title: 'Residential Real Estate',
    body: 'Whether you are buying your first home or closing on your tenth investment property, the details matter. We protect your interests at every step of the transaction.',
    bullets: [
      'Purchase and sale of homes and condominiums',
      'Title searches and title insurance',
      'Mortgage financing and refinancing',
      'Transfer of title between family members',
      'Preparation and review of closing documents',
      'New construction and pre-construction purchases',
    ],
    img: residentialImg,
    alt: 'Residential Real Estate',
    fromLeft: true,
  },
  {
    title: 'Commercial Leasing',
    body: 'Commercial leases are complex documents with long-term consequences. We negotiate and structure agreements that give your business the flexibility and protection it needs.',
    bullets: [
      'Drafting and negotiating commercial leases',
      'Lease renewals and amendments',
      'Sublease and assignment agreements',
      'Net, gross, and percentage lease structuring',
      'Retail and office lease review',
    ],
    img: commercialImg,
    alt: 'Commercial Leasing',
    fromLeft: false,
  },
]

const ARTICLES = [
  {
    title: 'What Are Closing Costs in Ontario and Who Pays Them?',
    img: insClosing,
    excerpt: 'A clear breakdown of what buyers and sellers are each responsible for at the closing table in Ontario.',
    slug: 'closing-costs-ontario',
  },
  {
    title: 'What Happens to My Deposit if the Deal Falls Through?',
    img: insDeposit,
    excerpt: 'Deposits in Ontario real estate are not automatically refundable. Here is what you need to know before signing.',
    slug: 'deposit-deal-falls-through-ontario',
  },
  {
    title: 'Can Non-Canadians Buy Property in Ontario?',
    img: insNonCan,
    excerpt: 'The rules around foreign buyers in Ontario are complex and evolving. Here is the current landscape.',
    slug: 'non-canadians-buying-property-ontario',
  },
]

export default function RealEstateLaw() {
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
      <SEO {...PAGE_SEO.realEstate} />
      <ServiceJsonLd name="Real Estate Law" description="Real estate closing lawyer in Burlington, Ontario. Residential purchases and sales, title insurance, land transfer tax, and commercial leasing for GTA buyers and investors." url="/real-estate-law" />
      <BreadcrumbJsonLd crumbs={[{ name: 'Home', href: '/' }, { name: 'Real Estate Law', href: '/real-estate-law' }]} />
      <Navbar />
      <main className="rl-page-main">

        {/* ── HERO ──────────────────────────────────────────── */}
        <InnerPageHero
          image={heroImg}
          imageAlt="Real Estate Law"
          eyebrow="Welzel Law"
          title="Real Estate Law"
          subtitle="Every transaction is personal. Every detail is our responsibility."
          variant="overlay"
          
        />

        {/* ── INTRO ─────────────────────────────────────────── */}
        <section className="rl-intro">
          <div className="about-container">
            <div className="rl-intro-grid">

              <motion.div
                className="rl-intro-heading-col"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={svcStagger}
              >
                <motion.p className="about-eyebrow" variants={svcItem}>Why It Matters</motion.p>
                <motion.h2 className="rl-intro-heading" variants={svcItem}>
                  Ready to start a new life in your dream home?
                </motion.h2>
              </motion.div>

              <motion.div
                className="rl-intro-body-col"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.14, ease }}
              >
                <p className="rl-intro-body">
                  We know what it feels like to sit on both sides of a residential transaction. We understand that purchasing or selling a home is far more than a financial transaction. It is deeply personal.
                </p>
                <p className="rl-intro-body">
                  We have experienced first-hand how easily a deal can unravel when proper due diligence is overlooked, whether it is a title defect, an undisclosed issue, or a clause buried in an agreement that creates problems long after closing. That experience fuels our commitment to every buyer and seller we represent.
                </p>
                <p className="rl-intro-body">
                  We review every detail, ask every question, and make sure nothing stands between you and a transaction you can feel confident about.
                </p>
                <a href="https://calendly.com/fernanda-welzel" target="_blank" rel="noopener noreferrer" className="about-svc-cta rl-intro-cta">
                  Request a Consult
                </a>
              </motion.div>

            </div>
          </div>
        </section>

        {/* ── SERVICES ──────────────────────────────────────── */}
        <section className="rl-services">
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
              <RlServiceRow key={svc.title} svc={svc} />
            ))}

          </div>
        </section>

        {/* ── INSIGHTS ──────────────────────────────────────── */}
        <section className="rl-insights">
          <div className="about-container">

            <motion.div
              className="rl-insights-header"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={svcStagger}
            >
              <motion.p className="about-eyebrow" variants={svcItem}>Insights</motion.p>
              <motion.h2 className="rl-insights-heading" variants={svcItem}>Latest Insights: Real Estate Law</motion.h2>
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

function RlServiceRow({ svc }: { svc: ServiceItem }) {
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
        <motion.a href="https://calendly.com/fernanda-welzel" target="_blank" rel="noopener noreferrer" className="about-svc-cta" variants={svcItem}>Request a Consult</motion.a>
      </motion.div>
    </div>
  )
}
