import { useState, type ChangeEvent, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import SEO from '../components/SEO'
import { PAGE_SEO } from '../data/seo'
import { BreadcrumbJsonLd } from '../components/JsonLd'
import Footer from '../components/Footer'
import InnerPageHero from '../components/InnerPageHero'

import heroImg        from '../assets/images/insights/InsightsHero.png'
import imgWhatIs      from '../assets/images/insights/WhatIs.png'
import imgDoINeed     from '../assets/images/insights/DoINeed.png'
import imgContracts   from '../assets/images/insights/WhatContracts.png'
import imgCorpGov     from '../assets/images/insights/CorporateGovernance.png'
import imgShouldI     from '../assets/images/insights/ShouldI.png'
import imgFedProv     from '../assets/images/insights/WhatIsTheDiff.png'
import imgConvert     from '../assets/images/insights/CanIConvert.png'
import imgHST         from '../assets/images/insights/WhenDoINeed.png'
import imgIncorProt   from '../assets/images/insights/HowDoesIncor.png'
import imgEmployee    from '../assets/images/insights/WhatAreMy.png'
import imgClosing     from '../assets/images/insights/WhatAreClosingCosts.png'
import imgLandTax     from '../assets/images/insights/HowMuchisLand.png'
import imgTitle       from '../assets/images/insights/DoINeedTitleInsurance.png'
import imgNonCan      from '../assets/images/insights/CanNonCanadians.png'
import imgDeposit     from '../assets/images/insights/WhatHappens.png'

const ease = [0.16, 1, 0.3, 1] as const

/* ── Shared animation variants ───────────────────────────── */

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease } },
}

const stagger = (delay = 0) => ({
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: delay } },
})

const featuredBodyItem = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
}

interface Article {
  title: string
  excerpt: string
  img: string
  slug: string
  category: string
}

const ARTICLES: Article[] = [
  {
    title: 'What is a Fractional General Counsel?',
    excerpt: 'An experienced lawyer embedded in your business part-time, delivering executive-level legal strategy at a fraction of the cost of a full-time hire.',
    img: imgWhatIs,
    slug: 'what-is-a-fractional-general-counsel',
    category: 'Fractional GC',
  },
  {
    title: 'Do I Need a General Counsel? 7 Signs Your SMB Has Outgrown Ad-Hoc Legal',
    excerpt: 'As your business grows, reactive legal support stops being enough. Here are seven clear signals it is time to bring on a General Counsel.',
    img: imgDoINeed,
    slug: 'do-i-need-a-general-counsel',
    category: 'Fractional GC',
  },
  {
    title: 'What Contracts Every Canadian SMB Should Have in Place',
    excerpt: 'From employment agreements to NDAs, these are the contracts that protect your business relationships and keep your operations audit-ready.',
    img: imgContracts,
    slug: 'contracts-every-canadian-smb-should-have',
    category: 'Business Law',
  },
  {
    title: 'Corporate Governance Basics for Growing Canadian Businesses',
    excerpt: 'Clear roles, board oversight, and documented policies are not just for public companies. Here is how to build governance into your growing business.',
    img: imgCorpGov,
    slug: 'corporate-governance-basics-canadian-businesses',
    category: 'Business Law',
  },
  {
    title: 'Should I Incorporate or Register as a Sole Proprietorship in Ontario?',
    excerpt: 'Your business structure affects your liability, taxes, and growth potential. Here is how to choose the right one for where you are today.',
    img: imgShouldI,
    slug: 'incorporate-or-sole-proprietorship-ontario',
    category: 'Incorporation',
  },
  {
    title: 'What is the Difference Between Federal and Provincial Incorporation in Ontario?',
    excerpt: 'Federal and provincial incorporation offer different name protections and compliance requirements. Here is which one fits your plans.',
    img: imgFedProv,
    slug: 'federal-vs-provincial-incorporation-ontario',
    category: 'Incorporation',
  },
  {
    title: 'Can I Convert My Sole Proprietorship to a Corporation Later?',
    excerpt: 'Yes. With the right planning, the transition is smooth and can unlock tax savings and limited liability protection for your personal assets.',
    img: imgConvert,
    slug: 'convert-sole-proprietorship-to-corporation-ontario',
    category: 'Incorporation',
  },
  {
    title: 'When Do I Need to Register for HST in Ontario?',
    excerpt: 'Once your revenues pass $30,000, HST registration is mandatory. Here is what to know before that threshold arrives.',
    img: imgHST,
    slug: 'when-to-register-for-hst-ontario',
    category: 'Incorporation',
  },
  {
    title: 'How Does Incorporation Protect My Personal Assets?',
    excerpt: 'Incorporation creates a legal shield between your personal wealth and your business obligations. Here is exactly how that protection works.',
    img: imgIncorProt,
    slug: 'how-incorporation-protects-personal-assets',
    category: 'Incorporation',
  },
  {
    title: 'What Are My Obligations When Hiring My First Employee in Ontario?',
    excerpt: 'From payroll registration to the Employment Standards Act, here is everything Ontario employers need to handle before day one.',
    img: imgEmployee,
    slug: 'obligations-hiring-first-employee-ontario',
    category: 'Business Law',
  },
  {
    title: 'What Are Closing Costs in Ontario and Who Pays Them?',
    excerpt: 'Closing costs go well beyond the purchase price. Here is a clear breakdown of who pays what in every Ontario real estate transaction.',
    img: imgClosing,
    slug: 'closing-costs-ontario',
    category: 'Real Estate',
  },
  {
    title: 'How Much Is Land Transfer Tax in Ontario?',
    excerpt: 'Land transfer tax is calculated on a sliding scale and is typically the largest single closing cost. Toronto buyers pay both provincial and municipal tax.',
    img: imgLandTax,
    slug: 'land-transfer-tax-ontario',
    category: 'Real Estate',
  },
  {
    title: 'Do I Need Title Insurance in Ontario?',
    excerpt: 'Not legally required, but almost always recommended. Here is what title insurance covers and why most lenders insist on it.',
    img: imgTitle,
    slug: 'title-insurance-ontario',
    category: 'Real Estate',
  },
  {
    title: 'Can Non-Canadians Buy Property in Ontario?',
    excerpt: 'Foreign buyers face significant restrictions, a 25% speculation tax, and stricter financing requirements. Here is what you need to know.',
    img: imgNonCan,
    slug: 'non-canadians-buying-property-ontario',
    category: 'Real Estate',
  },
  {
    title: 'What Happens to My Deposit if the Deal Falls Through?',
    excerpt: 'Whether you walk away or the seller defaults, the outcome depends on your conditions and the specific terms of your agreement.',
    img: imgDeposit,
    slug: 'deposit-deal-falls-through-ontario',
    category: 'Real Estate',
  },
]

export default function Insights() {
  const [form, setForm] = useState({ name: '', email: '', phone: '' })
  const [submitted, setSubmitted] = useState(false)

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  const featuredArticle = ARTICLES[0]
  const pairArticles    = ARTICLES.slice(1, 3)
  const gridArticles    = ARTICLES.slice(3)

  return (
    <>
      <SEO {...PAGE_SEO.insights} />
      <BreadcrumbJsonLd crumbs={[{ name: 'Home', href: '/' }, { name: 'Insights', href: '/insights' }]} />
      <Navbar />
      <main>

        {/* ── HERO ─────────────────────────────────────────────── */}
        <InnerPageHero
          image={heroImg}
          imageAlt="Welzel Law Insights"
          eyebrow="Welzel Law"
          title="Insights"
          subtitle="Because informed clients make better decisions."
        />

        {/* ── ARTICLES ─────────────────────────────────────────── */}
        <section className="ins-articles-section">
          <div className="ins-container">

            <motion.div
              className="ins-articles-header"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, ease }}
            >
              <p className="about-eyebrow">All Articles</p>
              <h2 className="ins-articles-heading">Legal Insight, Plainly Written</h2>
            </motion.div>

            {/* Featured article — horizontal editorial card */}
            <motion.a
              href={`/insights/${featuredArticle.slug}`}
              className="ins-featured"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{ duration: 0.8, ease }}
            >
              <motion.div
                className="ins-featured-img-wrap"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{ duration: 0.9, ease }}
              >
                <img src={featuredArticle.img} alt={featuredArticle.title} className="ins-featured-img" />
              </motion.div>
              <motion.div
                className="ins-featured-body"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.12 }}
                variants={stagger(0.15)}
              >
                <motion.span className="ins-category-tag" variants={featuredBodyItem}>{featuredArticle.category}</motion.span>
                <motion.div className="about-article-bar" style={{ marginTop: 'var(--space-2)' }} variants={featuredBodyItem} />
                <motion.h3 className="ins-featured-title" variants={featuredBodyItem}>{featuredArticle.title}</motion.h3>
                <motion.p className="ins-featured-excerpt" variants={featuredBodyItem}>{featuredArticle.excerpt}</motion.p>
                <motion.span className="about-article-link" variants={featuredBodyItem}>Read Article</motion.span>
              </motion.div>
            </motion.a>

            {/* Pair row — 2 wide cards */}
            <div className="ins-pair-row">
              {pairArticles.map((article, i) => (
                <ArticleCard key={article.slug} article={article} delay={i * 0.1} />
              ))}
            </div>

            {/* 3-col grid — remaining 12 articles */}
            <div className="ins-grid-triple">
              {gridArticles.map((article, i) => (
                <ArticleCard key={article.slug} article={article} delay={(i % 3) * 0.1} />
              ))}
            </div>

          </div>
        </section>

        {/* ── SUBSCRIBE (navbar "Subscribe" link anchors here) ──── */}
        <section className="ins-subscribe-section" id="subscribe">
          <div className="ins-container">
            <div className="ins-subscribe-inner">

              <motion.div
                className="ins-subscribe-copy"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={stagger()}
              >
                <motion.p className="about-eyebrow" variants={fadeUp}>Stay Informed</motion.p>
                <motion.h2 className="ins-subscribe-tagline" variants={fadeUp}>
                  Legal insights,<br />in your inbox.
                </motion.h2>
                <motion.p className="ins-subscribe-body" variants={fadeUp}>
                  Practical updates on Ontario business and real estate law, delivered when they matter.
                </motion.p>
              </motion.div>

              <motion.form
                className="about-subscribe-form"
                onSubmit={handleSubmit}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: 0.1, ease }}
              >
                {submitted ? (
                  <p className="about-subscribe-success">You are on the list. We will be in touch.</p>
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

function ArticleCard({ article, delay = 0 }: { article: Article; delay?: number }) {
  return (
    <motion.a
      href={`/insights/${article.slug}`}
      className="about-article"
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ duration: 0.6, delay, ease }}
    >
      <div className="about-article-img-wrap">
        <img src={article.img} alt={article.title} className="about-article-img" />
      </div>
      <div className="about-article-body">
        <span className="ins-card-category">{article.category}</span>
        <div className="about-article-bar" />
        <h3 className="about-article-title" style={{ color: 'var(--color-primary)' }}>{article.title}</h3>
        <p className="about-article-excerpt">{article.excerpt}</p>
        <span className="about-article-link">Read More</span>
      </div>
    </motion.a>
  )
}
