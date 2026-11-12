'use client'

import { useState, type ChangeEvent, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { subscribeToNewsletter } from '../lib/mailerlite'
import type { FormStatus } from '../lib/netlifyForms'
import { FIRM } from '../data/firm'

const ease = [0.16, 1, 0.3, 1] as const

const EMPTY_FORM = { name: '', email: '', phone: '' }

/**
 * Newsletter sign-up form used by every subscribe section on the site.
 *
 * Renders only the form column; each page keeps its own heading/copy beside it.
 * Sign-ups go to MailerLite with double opt-in, so success tells the visitor to
 * confirm by email rather than claiming they are already subscribed.
 */
export default function SubscribeForm() {
  const [form, setForm] = useState(EMPTY_FORM)
  const [status, setStatus] = useState<FormStatus>('idle')

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    try {
      await subscribeToNewsletter(form)
      setStatus('sent')
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

  return (
    <motion.form
      className="about-subscribe-form"
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.65, delay: 0.1, ease }}
    >
      {status === 'sent' ? (
        <p className="about-subscribe-success" role="status">
          Almost there. Check your inbox to confirm your subscription.
        </p>
      ) : (
        <>
          <input
            type="text" name="name" placeholder="Full Name" autoComplete="name"
            value={form.name} onChange={handleChange} required
            className="about-subscribe-input"
          />
          <input
            type="email" name="email" placeholder="Email Address" autoComplete="email"
            value={form.email} onChange={handleChange} required
            className="about-subscribe-input"
          />
          <input
            type="tel" name="phone" placeholder="Phone Number (optional)" autoComplete="tel"
            value={form.phone} onChange={handleChange}
            className="about-subscribe-input"
          />
          <button type="submit" className="about-subscribe-btn" disabled={status === 'sending'}>
            {status === 'sending' ? 'Subscribing…' : 'Subscribe'}
          </button>
          {status === 'error' && (
            <p className="about-subscribe-error" role="alert">
              We couldn&apos;t sign you up just now. Please try again, or email us at{' '}
              <a href={`mailto:${FIRM.email}`}>{FIRM.email}</a>.
            </p>
          )}
        </>
      )}
    </motion.form>
  )
}
