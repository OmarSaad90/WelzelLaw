'use client'

import { useState, type ChangeEvent, type FormEvent } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import type { ArticleSection } from '../data/articles'
import type { ArticleMeta } from '../data/articleMeta'

const ease = [0.16, 1, 0.3, 1] as const

interface ArticlePageProps {
  meta: ArticleMeta
  sections: ArticleSection[]
}

// Lookup, 404 handling, metadata and JSON-LD live in app/insights/[slug]/page.tsx.
// This view only receives the one article it renders.
export default function ArticlePage({ meta, sections }: ArticlePageProps) {
  const [form, setForm] = useState({ name: '', email: '', phone: '' })
  const [submitted, setSubmitted] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }
  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <main>

        {/* ── BACK LINK ─────────────────────────────────────────── */}
        <div className="ap-back-wrap">
          <Link href="/insights" className="ap-back-link">
            <span className="ap-back-arrow">←</span> Back to Insights
          </Link>
        </div>

        {/* ── HERO IMAGE ────────────────────────────────────────── */}
        <motion.div
          className="ap-hero"
          initial={{ opacity: 0, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease }}
        >
          <Image src={meta.img} alt={meta.title} className="ap-hero-img" sizes="(max-width: 1280px) 100vw, 1280px" preload />
        </motion.div>

        {/* ── ARTICLE HEADER ────────────────────────────────────── */}
        <div className="ap-header-wrap">
          <motion.div
            className="ap-header"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
            }}
          >
            <motion.span
              className="ap-category"
              variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease } } }}
            >
              {meta.category}
            </motion.span>

            <motion.h1
              className="ap-title"
              variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease } } }}
            >
              {meta.title}
            </motion.h1>

            <motion.div
              className="ap-byline-row"
              variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease } } }}
            >
              <span className="ap-byline">By Fernanda Welzel</span>
              <span className="ap-byline-dot" />
              <span className="ap-byline">Published May 1, 2026</span>
            </motion.div>
          </motion.div>
        </div>

        {/* ── GOLD RULE ─────────────────────────────────────────── */}
        <motion.div
          className="ap-rule-wrap"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.7, delay: 0.5, ease }}
        >
          <div className="ap-rule" />
        </motion.div>

        {/* ── ARTICLE BODY ──────────────────────────────────────── */}
        <article className="ap-body-wrap">
          <div className="ap-body">
            {sections.map((section, i) => (
              <Section key={i} section={section} openFaq={openFaq} setOpenFaq={setOpenFaq} />
            ))}
          </div>
        </article>

        {/* ── FOOTER SECTION ────────────────────────────────────── */}
        <motion.section
          className="ap-footer-section"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease }}
        >
          <div className="ap-footer-inner">

            {/* CTA */}
            <p className="ap-cta-inline">
              Have questions about your specific situation?{' '}
              <a href="https://calendly.com/fernanda-welzel" target="_blank" rel="noopener noreferrer" className="ap-cta-link">
                Book a free 15-minute call with us
              </a>
            </p>

            {/* Disclaimer */}
            <div className="ap-disclaimer">
              <p className="ap-disclaimer-text">
                <strong>Disclaimer:</strong> This article is for informational purposes only and does not constitute legal advice. Organizations and individuals should consult a qualified legal professional licensed in Ontario for specific guidance tailored to their circumstances.
              </p>
            </div>

          </div>
        </motion.section>

        {/* ── SUBSCRIBE ─────────────────────────────────────────── */}
        <section className="ins-subscribe-section" id="subscribe">
          <div className="ins-container">
            <div className="ins-subscribe-inner">

              <motion.div
                className="ins-subscribe-copy"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
              >
                <motion.p
                  className="about-eyebrow"
                  variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease } } }}
                >
                  Stay Informed
                </motion.p>
                <motion.h2
                  className="ins-subscribe-tagline"
                  variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease } } }}
                >
                  Legal insights,<br />in your inbox.
                </motion.h2>
                <motion.p
                  className="ins-subscribe-body"
                  variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } } }}
                >
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
    </>
  )
}

/* ── Section renderer ──────────────────────────────────────────── */

function Section({
  section,
  openFaq,
  setOpenFaq,
}: {
  section: ArticleSection
  openFaq: number | null
  setOpenFaq: (i: number | null) => void
}) {
  switch (section.type) {
    case 'p':
      return (
        <motion.p
          className="ap-p"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.55, ease }}
        >
          {section.text}
        </motion.p>
      )

    case 'h2':
      return (
        <motion.h2
          className="ap-h2"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.55, ease }}
        >
          {section.text}
        </motion.h2>
      )

    case 'h3':
      return (
        <motion.h3
          className="ap-h3"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, ease }}
        >
          {section.text}
        </motion.h3>
      )

    case 'ul':
      return (
        <motion.ul
          className="ap-ul"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.08 }}
          transition={{ duration: 0.55, ease }}
        >
          {section.items.map((item, i) => (
            <li key={i} className="ap-li">{item}</li>
          ))}
        </motion.ul>
      )

    case 'ol':
      return (
        <motion.ol
          className="ap-ol"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.08 }}
          transition={{ duration: 0.55, ease }}
        >
          {section.items.map((item, i) => (
            <li key={i} className="ap-ol-li">{item}</li>
          ))}
        </motion.ol>
      )

    case 'numbered_section':
      return (
        <motion.div
          className="ap-numbered"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.08 }}
          transition={{ duration: 0.6, ease }}
        >
          <span className="ap-numbered-n">{section.n}</span>
          <div className="ap-numbered-content">
            <p className="ap-numbered-title">{section.title}</p>
            <p className="ap-numbered-body">{section.body}</p>
          </div>
        </motion.div>
      )

    case 'table':
      return (
        <motion.div
          className="ap-table-wrap"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.08 }}
          transition={{ duration: 0.6, ease }}
        >
          <table className="ap-table">
            <thead>
              <tr>
                {section.headers.map((h, i) => (
                  <th key={i} className="ap-th">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {section.rows.map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? 'ap-tr-even' : 'ap-tr-odd'}>
                  {row.map((cell, j) => (
                    <td key={j} className="ap-td">{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      )

    case 'faq':
      return (
        <motion.div
          className="ap-faq"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{ duration: 0.6, ease }}
        >
          <h2 className="ap-faq-heading">Frequently Asked Questions</h2>
          {section.items.map((item, i) => (
            <div key={i} className="ap-faq-item">
              <button
                className="ap-faq-q"
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                aria-expanded={openFaq === i}
              >
                <span>{item.q}</span>
                <span className="ap-faq-icon">{openFaq === i ? '×' : '+'}</span>
              </button>
              <AnimatePresence initial={false}>
                {openFaq === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    style={{ overflow: 'hidden' }}
                  >
                    <p className="ap-faq-a">{item.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>
      )

    default:
      return null
  }
}
