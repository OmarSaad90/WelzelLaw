import { useState, type ChangeEvent, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import SEO from '../components/SEO'
import { PAGE_SEO } from '../data/seo'
import { BreadcrumbJsonLd } from '../components/JsonLd'
import Footer from '../components/Footer'
import InnerPageHero from '../components/InnerPageHero'

import missionImg    from '../assets/images/about/hero-mission.png'
import founderImg    from '../assets/images/about/founder.png'
import service1Img   from '../assets/images/about/service-business.webp'
import service2Img   from '../assets/images/about/service-contracts.png'
import service3Img   from '../assets/images/about/service-counsel.png'
import service4Img   from '../assets/images/about/service-realestate.png'
import insightsImg   from '../assets/images/about/insights-intro.png'
import article1Img   from '../assets/images/about/article-fgc.png'
import article2Img   from '../assets/images/about/article-incorporate.png'
import article3Img   from '../assets/images/about/article-land-transfer.png'

const ease = [0.16, 1, 0.3, 1] as const

const svcStagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.12 } },
}

const svcItem = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
}

const missionStagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14 } },
}

const insightsStagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}

const insightsSlide = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.75, ease } },
}

const TAGLINES = [
  'Straight-Talk Legal Counsel.',
  'Big-Business Experience.',
  'Boutique Personal Service.',
]

interface Bullet { label: string; text: string }
interface Service {
  title: string
  body: string
  bullets: Bullet[]
  img: string
  alt: string
  fromLeft: boolean
}

const SERVICES: Service[] = [
  {
    title: 'Strategic Business Counsel & Formation',
    body: 'Building a successful business requires more than just an idea; it requires a solid legal foundation. We provide the strategic oversight needed to navigate the complexities of the Ontario business landscape.',
    bullets: [
      { label: 'Business Structure & Planning', text: 'Selecting the ideal corporate structure for your goals.' },
      { label: 'Incorporation & Filings', text: 'Handling all paperwork and government corporate filings.' },
      { label: 'Governance & Compliance', text: 'Maintaining your minute books and navigating regulatory requirements.' },
    ],
    img: service1Img,
    alt: 'Strategic Business Counsel',
    fromLeft: true,
  },
  {
    title: 'Airtight Contract Creation & Negotiation',
    body: 'Contracts are the lifeblood of your operations. We draft and negotiate agreements that protect your interests and ensure your business relationships are clear and enforceable.',
    bullets: [
      { label: 'Commercial Agreements', text: 'Drafting customized contracts for vendors, partners, and clients.' },
      { label: 'Employment & Independent Contractors', text: 'Protecting your team and your brand with robust agreements and NDAs.' },
      { label: 'Risk Management', text: 'Identifying strategic clauses that anticipate contingencies and prevent disputes.' },
    ],
    img: service2Img,
    alt: 'Contract Creation and Negotiation',
    fromLeft: false,
  },
  {
    title: 'Fractional General Counsel Service',
    body: 'Get the expertise of a former Fortune-level General Counsel on your terms. This service is designed for growing businesses that need executive-level legal strategy without the overhead of a full-time hire.',
    bullets: [
      { label: 'Executive-Level Strategy', text: 'On-call legal support for day-to-day decisions and long-term growth.' },
      { label: 'Transparent Retainers', text: 'Predictive monthly pricing that eliminates billing anxiety.' },
      { label: 'Proactive Problem Solving', text: 'Identifying legal risks before they become crises.' },
    ],
    img: service3Img,
    alt: 'Fractional General Counsel',
    fromLeft: true,
  },
  {
    title: 'Residential Real Estate Services',
    body: 'Buying or selling a home is deeply personal and often the most significant financial decision you will ever make. We act as your legal advocate from the initial offer to the final closing.',
    bullets: [
      { label: 'Purchase & Sale Representation', text: 'Protecting buyers and sellers in transactions across Ontario.' },
      { label: 'Due Diligence', text: 'Conducting thorough title searches and resolving defects before they derail your deal.' },
      { label: 'Closing Excellence', text: 'Ensuring a seamless transaction so you can move forward with confidence.' },
    ],
    img: service4Img,
    alt: 'Residential Real Estate',
    fromLeft: false,
  },
]

const ARTICLES = [
  {
    title: 'What is a Fractional General Counsel?',
    img: article1Img,
    excerpt: 'Growing businesses get executive-level legal strategy without the cost of a full-time hire.',
  },
  {
    title: 'Should I Incorporate or Register as a Sole Proprietorship in Ontario?',
    img: article2Img,
    excerpt: 'The right structure depends on your risk tolerance, tax goals, and plans for growth.',
  },
  {
    title: 'How Much Is Land Transfer Tax in Ontario?',
    img: article3Img,
    excerpt: 'Buyers in Ontario pay land transfer tax at closing. First-time buyers may qualify for a rebate.',
  },
]

export default function About() {
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
      <SEO {...PAGE_SEO.about} />
      <BreadcrumbJsonLd crumbs={[{ name: 'Home', href: '/' }, { name: 'About', href: '/about' }]} />
      <Navbar />
      <main className="about-page-main">

        {/* Hero — mission image, no founder photo duplication */}
        <InnerPageHero
          image={missionImg}
          eyebrow="Welzel Law"
          title="About Welzel Law"
          subtitle="Boutique counsel. Executive experience. Real results."
        />

        {/* ── MISSION — typographic, no image repeat ──────────── */}
        <section className="about-mission">
          <div className="about-container">
            <motion.div
              className="about-mission-inner"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={missionStagger}
            >
              <motion.p className="about-eyebrow" style={{ justifyContent: 'center' }} variants={svcItem}>Our Mission</motion.p>
              <motion.p className="about-mission-quote" variants={svcItem}>
                Provide exceptional legal services, accessible to everyone and driven by real values: family, growth, and a passion for people.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* ── FOUNDER ─────────────────────────────────────────── */}
        <section className="about-founder">
          <div className="about-container">

            {/* Eyebrow sits above the grid */}
            <motion.p
              className="about-eyebrow about-founder-eyebrow"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease }}
            >
              Meet the Founder
            </motion.p>

            {/* Grid: photo aligns exactly with name → last bio line */}
            <div className="about-founder-inner">

              <motion.div
                className="about-founder-photo-wrap"
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.9, ease }}
              >
                <img src={founderImg} alt="Fernanda Welzel" className="about-founder-photo" />
              </motion.div>

              <div className="about-founder-text">
                <motion.h2
                  className="about-founder-name"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.65, delay: 0.06, ease }}
                >
                  Fernanda Welzel
                </motion.h2>

                <motion.div
                  className="about-founder-taglines"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={{
                    hidden: {},
                    visible: { transition: { staggerChildren: 0.11 } },
                  }}
                >
                  {TAGLINES.map((phrase) => (
                    <motion.p
                      key={phrase}
                      className="about-founder-tagline"
                      variants={{
                        hidden: { opacity: 0, y: 14 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
                      }}
                    >
                      {phrase}
                    </motion.p>
                  ))}
                </motion.div>

                <motion.div
                  className="about-founder-bio"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.7, delay: 0.2, ease }}
                >
                  <p>Fernanda Welzel is the founder of Welzel Law. She holds an MBA and a Master of Law (LLM) from the University of Toronto, and a Juris Doctor (J.D.) from Brazil, where she began her career in civil litigation, criminal, and family law.</p>
                  <p>With over 25 years of experience working alongside large corporations, Fernanda has sat at the table where business decisions are made. As General Counsel of a major Canadian corporation with operations across North America and sales to over 50 countries, her career spans operations, commercial execution, business development, regulatory compliance, and sales.</p>
                  <p>She has experienced first-hand the real pressures, risks, and challenges that business owners face every day. She did not just study business from a legal textbook. She lived it. That experience is what she brings to every client. Whether you are incorporating, navigating a complex contract, or need a trusted legal partner, she understands your world and knows how to protect it.</p>
                  <p>Outside of work, she is a proud mother of two, a lifelong athlete, and an avid traveller with a genuine curiosity for people and cultures: qualities that make her not just a sharp legal mind, but a counsel who truly listens.</p>
                </motion.div>

                <motion.a
                  href="/contact"
                  className="about-founder-cta"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: 0.25, ease }}
                >
                  Request a Consultation
                </motion.a>
              </div>
            </div>

          </div>
        </section>

        {/* ── HOW WE HELP ─────────────────────────────────────── */}
        <section className="about-services">
          <div className="about-container">
            <motion.div
              className="about-services-header"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, ease }}
            >
              <p className="about-eyebrow">Expertise</p>
              <h2 className="about-services-heading">How We Can Help You</h2>
            </motion.div>

            {SERVICES.map((svc) => (
              <ServiceRow key={svc.title} svc={svc} />
            ))}
          </div>
        </section>

        {/* ── INSIGHTS ────────────────────────────────────────── */}
        <section className="about-insights">
          <div className="about-container">

            {/* Image left, quote right */}
            <div className="about-insights-intro">
              <motion.div
                className="about-insights-img-wrap"
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.85, ease }}
              >
                <img src={insightsImg} alt="" className="about-insights-img" />
              </motion.div>

              <motion.div
                className="about-insights-text"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                variants={insightsStagger}
              >
                <motion.p className="about-eyebrow" variants={insightsSlide}>Insights</motion.p>
                <motion.blockquote className="about-insights-quote" variants={insightsSlide}>
                  We believe good legal advice starts with good information.
                </motion.blockquote>
              </motion.div>
            </div>

            {/* 3 equal article cards — image on top, text drags up below */}
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
                <p className="about-subscribe-body">Practical updates on Ontario business and real estate law, delivered when they matter.</p>
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

function ServiceRow({ svc }: { svc: Service }) {
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
              <span>
                <strong style={{ fontWeight: 600, color: 'var(--color-neutral-800)' }}>{b.label}:</strong>
                {' '}{b.text}
              </span>
            </li>
          ))}
        </motion.ul>
        <motion.a href="/contact" className="about-svc-cta" variants={svcItem}>Request a Consultation</motion.a>
      </motion.div>
    </div>
  )
}
