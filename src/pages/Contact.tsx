import { useState, type ChangeEvent, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Mail, Phone } from 'lucide-react'
import Navbar from '../components/Navbar'
import SEO from '../components/SEO'
import { PAGE_SEO } from '../data/seo'
import { BreadcrumbJsonLd } from '../components/JsonLd'
import Footer from '../components/Footer'

const ease = [0.16, 1, 0.3, 1] as const

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.65, delay, ease },
  }),
}

export default function Contact() {
  const [form, setForm] = useState({
    fullName: '', email: '', phone: '', practice: '', message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <SEO {...PAGE_SEO.contact} />
      <BreadcrumbJsonLd crumbs={[{ name: 'Home', href: '/' }, { name: 'Contact', href: '/contact' }]} />
      <Navbar />
      <main className="contact-page-main">

        <section className="contact-split">

          {/* ── LEFT — Brand info panel ─────────────────────── */}
          <div className="contact-left">
            <div className="contact-left-inner">

              <motion.div
                className="contact-rule"
                initial={{ width: 0 }}
                animate={{ width: '40px' }}
                transition={{ duration: 0.55, delay: 0.1, ease }}
              />

              <motion.p
                className="contact-eyebrow"
                custom={0.2}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
              >
                Get in Touch
              </motion.p>

              <motion.h1
                className="contact-heading"
                custom={0.32}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
              >
                Contact Us
              </motion.h1>

              <motion.div
                className="contact-details"
                initial="hidden"
                animate="visible"
                variants={{ visible: { transition: { staggerChildren: 0.1, delayChildren: 0.5 } } }}
              >
                <motion.a
                  href="https://www.google.com/maps/search/5063+North+Service+Rd+Suite+100+Burlington+ON"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-detail-row contact-detail-row-link"
                  variants={fadeUp}
                  custom={0}
                >
                  <MapPin size={15} className="contact-detail-icon" aria-hidden="true" />
                  <p className="contact-detail-text">5063 North Service Rd., Suite 100, Burlington, ON L7L 5H6</p>
                </motion.a>

                <motion.a
                  href="mailto:info@welzellaw.ca"
                  className="contact-detail-row contact-detail-row-link"
                  variants={fadeUp}
                  custom={0}
                >
                  <Mail size={15} className="contact-detail-icon" aria-hidden="true" />
                  <span className="contact-detail-link">info@welzellaw.ca</span>
                </motion.a>

                <motion.a
                  href="tel:+16479075459"
                  className="contact-detail-row contact-detail-row-link"
                  variants={fadeUp}
                  custom={0}
                >
                  <Phone size={15} className="contact-detail-icon" aria-hidden="true" />
                  <span className="contact-detail-link">(647) 907-5459</span>
                </motion.a>
              </motion.div>

              <motion.div
                className="contact-map"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 1.1, ease }}
              >
                <iframe
                  title="Welzel Law office location"
                  src="https://maps.google.com/maps?q=5063+North+Service+Rd+Burlington+ON+Canada&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </motion.div>

            </div>
          </div>

          {/* ── RIGHT — Form panel ──────────────────────────── */}
          <div className="contact-right">
            <motion.div
              className="contact-form-wrap"
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.18, ease }}
            >
              {submitted ? (
                <motion.div
                  className="contact-success"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease }}
                >
                  <div className="contact-success-rule" />
                  <h2 className="contact-success-heading">Message Received</h2>
                  <p className="contact-success-body">
                    We will be in touch within one business day.
                  </p>
                </motion.div>
              ) : (
                <>
                  <form className="contact-form" onSubmit={handleSubmit} noValidate>

                    <div className="contact-form-row">
                      <div className="contact-field">
                        <label className="contact-label" htmlFor="fullName">Full Name</label>
                        <input
                          id="fullName" type="text" name="fullName"
                          value={form.fullName} onChange={handleChange} required
                          className="contact-input" placeholder="Your full name"
                        />
                      </div>
                      <div className="contact-field">
                        <label className="contact-label" htmlFor="practice">Practice Area</label>
                        <div className="contact-select-wrap">
                          <select
                            id="practice" name="practice"
                            value={form.practice} onChange={handleChange} required
                            className="contact-select"
                          >
                            <option value="" disabled>Select a practice area</option>
                            <option value="business-law">Business Law</option>
                            <option value="real-estate-law">Real Estate Law</option>
                            <option value="fractional-gc">Fractional General Counsel</option>
                            <option value="other">Other</option>
                          </select>
                          <span className="contact-select-chevron" aria-hidden="true">↓</span>
                        </div>
                      </div>
                    </div>

                    <div className="contact-form-row">
                      <div className="contact-field">
                        <label className="contact-label" htmlFor="email">Email Address</label>
                        <input
                          id="email" type="email" name="email"
                          value={form.email} onChange={handleChange} required
                          className="contact-input" placeholder="you@company.com"
                        />
                      </div>
                      <div className="contact-field">
                        <label className="contact-label" htmlFor="phone">
                          Phone <span className="contact-label-optional">(optional)</span>
                        </label>
                        <input
                          id="phone" type="tel" name="phone"
                          value={form.phone} onChange={handleChange}
                          className="contact-input" placeholder="(416) 555-0100"
                        />
                      </div>
                    </div>

                    <div className="contact-field">
                      <label className="contact-label" htmlFor="message">Message</label>
                      <textarea
                        id="message" name="message"
                        value={form.message} onChange={handleChange} required
                        className="contact-input contact-textarea"
                        placeholder="Tell us what you're working through..."
                        rows={5}
                      />
                    </div>

                    <motion.button
                      type="submit"
                      className="contact-submit"
                      whileHover={{ boxShadow: 'var(--shadow-gold)', y: -1 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ duration: 0.15, ease }}
                    >
                      SEND YOUR MESSAGE
                    </motion.button>

                    <p className="contact-disclaimer">
                      Sending this message does not create a lawyer-client relationship. Please do not include sensitive or confidential information.
                    </p>

                  </form>
                </>
              )}
            </motion.div>
          </div>

        </section>
      </main>
      <Footer />
    </>
  )
}
