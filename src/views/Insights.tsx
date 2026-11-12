'use client'

import Image from 'next/image'
import MotionLink from '../components/MotionLink'
import { useState, useEffect, type ChangeEvent, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import InnerPageHero from '../components/InnerPageHero'

import heroImg        from '../assets/images/insights/InsightsHero.png'
import { FIRM } from '../data/firm'
import { ARTICLES_META, type ArticleMeta } from '../data/articleMeta'

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

export default function Insights() {
  const [form, setForm] = useState({ name: '', email: '', phone: '' })
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    if (window.location.hash === '#subscribe') {
      setTimeout(() => {
        document.getElementById('subscribe')?.scrollIntoView({ behavior: 'smooth' })
      }, 200)
    }
  }, [])

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  const featuredArticle = ARTICLES_META[0]
  const pairArticles    = ARTICLES_META.slice(1, 3)
  const gridArticles    = ARTICLES_META.slice(3)

  return (
    <>
      <main>

        {/* ── HERO ─────────────────────────────────────────────── */}
        <InnerPageHero
          image={heroImg}
          imageAlt={`${FIRM.name} Insights`}
          eyebrow={FIRM.name}
          title="Insights"
          subtitle="Because informed clients make better decisions."
          variant="overlay"
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
            <MotionLink
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
                <Image src={featuredArticle.img} alt={featuredArticle.title} className="ins-featured-img" sizes="(max-width: 960px) 100vw, 55vw" />
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
            </MotionLink>

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
    </>
  )
}

function ArticleCard({ article, delay = 0 }: { article: ArticleMeta; delay?: number }) {
  return (
    <MotionLink
      href={`/insights/${article.slug}`}
      className="about-article"
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ duration: 0.6, delay, ease }}
    >
      <div className="about-article-img-wrap">
        <Image src={article.img} alt={article.title} className="about-article-img" sizes="(max-width: 768px) 100vw, 33vw" />
      </div>
      <div className="about-article-body">
        <span className="ins-card-category">{article.category}</span>
        <div className="about-article-bar" />
        <h3 className="about-article-title" style={{ color: 'var(--color-primary)' }}>{article.title}</h3>
        <p className="about-article-excerpt">{article.excerpt}</p>
        <span className="about-article-link">Read More</span>
      </div>
    </MotionLink>
  )
}
