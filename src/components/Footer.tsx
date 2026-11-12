'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import MagneticButton from './MagneticButton'
import { MapPin, Clock, Mail, Phone, Linkedin, Instagram } from 'lucide-react'
import Logo from './Logo'
import skylineImg from '../assets/images/home/get-in-touch.jpg'
import { FIRM } from '../data/firm'
import { submitNetlifyForm, HONEYPOT_FIELD, type FormStatus } from '../lib/netlifyForms'

const ease = [0.16, 1, 0.3, 1] as const

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

export default function Footer() {
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', phone: '', email: '', message: '',
  })
  const [status, setStatus] = useState<FormStatus>('idle')

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const honeypot = e.currentTarget.elements.namedItem(HONEYPOT_FIELD) as HTMLInputElement
    setStatus('sending')
    try {
      await submitNetlifyForm('get-in-touch', {
        ...formData,
        [HONEYPOT_FIELD]: honeypot.value,
        subject: `New website enquiry from ${formData.firstName} ${formData.lastName} (Get in Touch)`,
      })
      setStatus('sent')
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

  return (
    <footer>

      {/* ── Main footer — Toronto skyline background ─────────── */}
      <div
        id="schedule"
        style={{
          position: 'relative',
          overflow: 'hidden',
          backgroundColor: 'var(--color-bg-dark)',
        }}
      >
        {/* Toronto skyline background image */}
        <Image
          src={skylineImg}
          alt=""
          aria-hidden="true"
          fill
          sizes="100vw"
          style={{
            objectFit: 'cover', objectPosition: '80% top',
            zIndex: 0,
          }}
        />

        {/* Deep teal overlay ~75% */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundColor: 'oklch(0.32 0.095 192 / 0.78)',
          zIndex: 1,
        }} />

        {/* Tagline banner */}
        <div style={{
          position: 'relative', zIndex: 2,
          borderBottom: '1px solid oklch(1 0 0 / 0.12)',
          paddingTop: 'var(--space-5)',
          paddingBottom: 'var(--space-4)',
          textAlign: 'center',
        }}>
          <div style={{
            maxWidth: 'var(--content-max-width)',
            margin: '0 auto',
            padding: '0 var(--section-padding-x)',
          }}>
            <p style={{
              fontFamily: 'var(--font-display)',
              fontStyle: 'italic',
              fontWeight: 400,
              fontSize: 'var(--font-size-xl)',
              lineHeight: 1.5,
              color: 'oklch(0.88 0.040 192)',
            }}>
              Experienced. Personal. Affordable.
            </p>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontWeight: 300,
              fontSize: 'var(--font-size-base)',
              color: 'oklch(1 0 0 / 0.65)',
              marginTop: 'var(--space-1)',
            }}>
              Executive-level legal counsel for your business and your biggest life
              decisions, without the big firm price tag.
            </p>
          </div>
        </div>

        {/* Two-column content */}
        <div style={{
          position: 'relative', zIndex: 2,
          maxWidth: 'var(--content-max-width)',
          margin: '0 auto',
          padding: 'var(--space-6) var(--section-padding-x)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 'clamp(3rem, 6vw, 6rem)',
          alignItems: 'start',
        }}>

          {/* LEFT — Firm info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
          >
            {/* Logo */}
            <motion.div variants={fadeUp} style={{ marginBottom: 'var(--space-4)' }}>
              <Logo variant="dark" height={36} />
            </motion.div>

            {/* Contact details */}
            <motion.div variants={stagger} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
              <motion.div variants={fadeUp} style={contactRowStyle}>
                <MapPin size={16} style={{ color: 'var(--color-accent)', flexShrink: 0 }} />
                <div>
                  <p style={contactTextStyle}>{FIRM.address.street}</p>
                  <p style={contactTextStyle}>{FIRM.address.city}, {FIRM.address.region} Canada {FIRM.address.postalCode}</p>
                </div>
              </motion.div>

              <motion.div variants={fadeUp} style={contactRowStyle}>
                <Clock size={16} style={{ color: 'var(--color-accent)', flexShrink: 0 }} />
                <p style={contactTextStyle}>Monday to Friday, 9am to 5pm</p>
              </motion.div>

              <motion.div variants={fadeUp} style={contactRowStyle}>
                <Mail size={16} style={{ color: 'var(--color-accent)', flexShrink: 0 }} />
                <a href={`mailto:${FIRM.email}`} style={{ ...contactTextStyle, borderBottom: '1px solid oklch(1 0 0 / 0.25)' }}>
                  {FIRM.email}
                </a>
              </motion.div>

              <motion.div variants={fadeUp} style={contactRowStyle}>
                <Phone size={16} style={{ color: 'var(--color-accent)', flexShrink: 0 }} />
                <a href={`tel:${FIRM.phoneE164}`} style={{ ...contactTextStyle, borderBottom: '1px solid oklch(1 0 0 / 0.25)' }}>
                  {FIRM.phoneDisplay}
                </a>
              </motion.div>
            </motion.div>

            {/* Social icons */}
            <motion.div
              variants={fadeUp}
              style={{
                display: 'flex', gap: 'var(--space-4)',
                marginTop: 'var(--space-4)',
              }}
            >
              {[
                { href: FIRM.social.linkedin, icon: <Linkedin size={18} />, label: 'LinkedIn' },
                { href: FIRM.social.instagram, icon: <Instagram size={18} />, label: 'Instagram' },
              ].map(({ href, icon, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.12, color: 'var(--color-accent)' }}
                  transition={{ duration: 0.15 }}
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    width: '38px', height: '38px',
                    border: '1px solid oklch(1 0 0 / 0.2)',
                    borderRadius: 'var(--radius-sm)',
                    color: 'oklch(1 0 0 / 0.65)',
                  }}
                >
                  {icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT — Consultation form */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.65, ease, delay: 0.15 }}
          >
            <h3 style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: 'var(--font-size-2xl)',
              lineHeight: 1.2,
              letterSpacing: '-0.02em',
              color: 'var(--color-neutral-25)',
              marginBottom: 'var(--space-3)',
            }}>
              Get in Touch
            </h3>

            {status === 'sent' ? (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease }}
                style={{
                  padding: 'var(--space-10)',
                  backgroundColor: 'oklch(1 0 0 / 0.06)',
                  borderRadius: 'var(--radius-md)',
                  textAlign: 'center',
                  border: '1px solid oklch(1 0 0 / 0.15)',
                }}
              >
                <p style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  fontSize: 'var(--font-size-xl)',
                  color: 'var(--color-accent)',
                  marginBottom: 'var(--space-3)',
                }}>
                  Message Received
                </p>
                <p style={{ ...contactTextStyle, color: 'oklch(0.88 0.040 192)' }}>
                  We will be in touch within one business day.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
                  <label className="form-honeypot" aria-hidden="true">
                    Leave this field empty
                    <input type="text" name={HONEYPOT_FIELD} tabIndex={-1} autoComplete="off" />
                  </label>
                  <div className="footer-form-name-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-2)' }}>
                    <input
                      type="text" name="firstName" value={formData.firstName}
                      onChange={handleChange} placeholder="First Name" required
                      className="footer-input"
                    />
                    <input
                      type="text" name="lastName" value={formData.lastName}
                      onChange={handleChange} placeholder="Last Name" required
                      className="footer-input"
                    />
                  </div>
                  <input
                    type="tel" name="phone" value={formData.phone}
                    onChange={handleChange} placeholder="Phone"
                    className="footer-input"
                  />
                  <input
                    type="email" name="email" value={formData.email}
                    onChange={handleChange} placeholder="Email" required
                    className="footer-input"
                  />
                  <textarea
                    name="message" value={formData.message}
                    onChange={handleChange} placeholder="Message" rows={2}
                    className="footer-input"
                    style={{ resize: 'vertical', minHeight: '56px' }}
                  />

                  <MagneticButton strength={0.22}>
                    <motion.button
                      type="submit"
                      disabled={status === 'sending'}
                      whileHover={{ boxShadow: 'var(--shadow-gold)' }}
                      whileTap={{ scale: 0.97 }}
                      transition={{ duration: 0.15, ease }}
                      style={{
                        width: '100%',
                        backgroundColor: 'var(--color-accent)',
                        color: 'var(--color-neutral-950)',
                        fontFamily: 'var(--font-body)',
                        fontWeight: 700,
                        fontSize: 'var(--font-size-base)',
                        letterSpacing: 'var(--letter-spacing-caps)',
                        textTransform: 'uppercase',
                        padding: 'var(--space-3)',
                        borderRadius: 'var(--radius-xs)',
                        border: 'none',
                        marginTop: 0,
                      }}
                    >
                      {status === 'sending' ? 'SENDING…' : 'SEND YOUR MESSAGE'}
                    </motion.button>
                  </MagneticButton>

                  {status === 'error' && (
                    <p className="footer-form-error" role="alert">
                      Your message could not be sent. Please email us at{' '}
                      <a href={`mailto:${FIRM.email}`}>{FIRM.email}</a> or call {FIRM.phoneDisplay}.
                    </p>
                  )}

                  <p style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 'var(--font-size-xs)',
                    lineHeight: 'var(--line-height-relaxed)',
                    color: 'oklch(1 0 0 / 0.60)',
                    textAlign: 'center',
                    padding: '0 var(--space-2)',
                  }}>
                    Please note that sending us a message through this platform does
                    not create a lawyer-client relationship between our firm and you.
                    Please do not include sensitive or confidential information.
                  </p>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      {/* ── Bottom bar ─────────────────────────────────────── */}
      <div style={{
        backgroundColor: 'var(--color-teal-950)',
        padding: 'var(--space-5) var(--section-padding-x)',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 'var(--space-4)',
      }}>
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: 'var(--font-size-xs)',
          color: 'oklch(1 0 0 / 0.60)',
        }}>
          2026© All rights reserved {FIRM.legalName}
        </p>

        <div style={{ display: 'flex', gap: 'var(--space-6)', alignItems: 'center' }}>
  {[
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms', href: '/terms-of-service' },
  ].map(({ label, href }) => (
    <Link
      key={href}
      href={href}
      style={{
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--font-size-xs)',
        fontWeight: 500,
        letterSpacing: 'var(--letter-spacing-wide)',
        color: 'oklch(1 0 0 / 0.82)',
        transition: 'color 0.2s var(--ease-out), text-decoration-color 0.2s var(--ease-out)',
      }}
      className="footer-legal-link"
    >
      {label}
    </Link>
  ))}
</div>
      </div>
    </footer>
  )
}

/* ── Style helpers ────────────────────────────────────────── */

const contactRowStyle: React.CSSProperties = {
  display: 'flex', alignItems: 'flex-start', gap: 'var(--space-3)',
}

const contactTextStyle: React.CSSProperties = {
  fontFamily: 'var(--font-body)',
  fontSize: 'var(--font-size-sm)',
  color: 'oklch(1 0 0 / 0.72)',
  lineHeight: 'var(--line-height-relaxed)',
}
