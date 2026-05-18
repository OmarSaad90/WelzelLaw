import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const ease = [0.16, 1, 0.3, 1] as const

const pillarsStagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const pillarsItem = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
}

interface PillarLink { href: string; label: string }
interface Pillar { number: string; title: string; body: string; link: PillarLink | null }

const PILLARS: Pillar[] = [
  {
    number: '1',
    title: 'High-Quality Legal Advice That Fits All Budgets',
    body: 'Top-tier legal counsel should not be reserved for large corporations with deep pockets. At Welzel Law, we believe that every business owner and homeowner deserve access to experienced, sophisticated legal advice, regardless of the size of their budget. We deliver the same caliber of counsel that Fortune-level companies rely on, tailored to what you actually need and what you can afford.',
    link: null,
  },
  {
    number: '2',
    title: 'A Trusted Business Partner',
    body: 'We are not just your lawyer, we are your partner. With over 25 years of experience in corporate operations, business development, and commercial execution, we understand the real-world challenges you face. We proactively identify risks, offer practical solutions, and stand beside you at every stage of your business journey so you are never navigating the legal landscape alone.',
    link: null,
  },
  {
    number: '3',
    title: 'Flexible Legal Services',
    body: 'We know that legal costs can be unpredictable and stressful. That is why we offer flexible fee structures designed around your needs, whether that is a flat-fee package for a specific transaction, a monthly retainer through our Fractional General Counsel service, or a customized arrangement that gives you the coverage you need without the surprises. Transparent pricing. No hidden fees. No billing anxiety.',
    link: null,
  },
  {
    number: '4',
    title: 'A Personal Touch from a Boutique Firm',
    body: 'When you work with Welzel Law, you work directly with the lawyer who knows your business. You get the personal attention, responsiveness, and care that only a boutique firm can offer, backed by the depth of experience that most boutique firms simply cannot match. Every client matters here, and it shows in everything we do.',
    link: null,
  },
]

export default function FourPillars() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section style={{
      backgroundColor: 'var(--color-bg)',
      paddingTop: 'var(--space-12)',
      paddingBottom: 'var(--space-12)',
      overflow: 'hidden',
    }}>
      <div style={{
        maxWidth: 'var(--content-max-width)',
        margin: '0 auto',
        padding: '0 var(--section-padding-x)',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: 'clamp(3rem, 6vw, 6rem)',
        alignItems: 'center',
      }}>

        {/* Left — image */}
        <motion.div
          className="four-pillars-img-col"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.75, ease }}
          style={{
            position: 'relative',
            aspectRatio: '4/5',
            minHeight: '400px',
            borderRadius: 'var(--radius-lg)',
            overflow: 'hidden',
            backgroundColor: 'var(--color-teal-100)',
            flexShrink: 0,
          }}
        >
          {/* Placeholder: replace with team-hands image */}
          <img
            src="/images/home/team-hands.png"
            alt="Team collaboration"
            style={{
              width: '100%', height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
            }}
            onError={(e) => {
              ;(e.currentTarget as HTMLImageElement).style.display = 'none'
            }}
          />

          {/* Gradient placeholder when image missing */}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(160deg, oklch(0.94 0.022 192) 0%, oklch(0.46 0.115 192) 100%)',
            zIndex: -1,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <p style={{
              fontFamily: 'var(--font-display)',
              fontStyle: 'italic',
              fontSize: 'var(--font-size-xl)',
              color: 'var(--color-teal-200)',
              textAlign: 'center',
              padding: 'var(--space-8)',
              lineHeight: 1.4,
            }}>
              Team photo<br />coming soon
            </p>
          </div>

        </motion.div>

        {/* Right — accordion */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, ease, delay: 0.15 }}
        >
          {/* Section label */}
          <p style={{
            fontFamily: 'var(--font-body)',
            fontWeight: 700,
            fontSize: 'var(--font-size-sm)',
            letterSpacing: 'var(--letter-spacing-caps)',
            textTransform: 'uppercase',
            color: 'var(--color-accent-text)',
            marginBottom: 'var(--space-6)',
            display: 'flex', alignItems: 'center', gap: 'var(--space-3)',
          }}>
            <span style={{
              display: 'inline-block', width: '28px', height: '1px',
              backgroundColor: 'var(--color-accent)',
            }} />
            Our Approach
          </p>

          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            fontSize: 'var(--font-size-2xl)',
            lineHeight: 1.2,
            letterSpacing: '-0.02em',
            color: 'var(--color-primary)',
            marginBottom: 'var(--space-10)',
          }}>
            Four Pillars of Welzel Law
          </h2>

          {/* Accordion items */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={pillarsStagger}
            style={{ display: 'flex', flexDirection: 'column' }}
          >
            {PILLARS.map((pillar, index) => (
              <motion.div key={pillar.number} variants={pillarsItem}>
                <PillarItem
                  pillar={pillar}
                  isOpen={openIndex === index}
                  onToggle={() => setOpenIndex(openIndex === index ? null : index)}
                  isLast={index === PILLARS.length - 1}
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

/* ── Accordion item ──────────────────────────────────────── */

function PillarItem({
  pillar,
  isOpen,
  onToggle,
  isLast,
}: {
  pillar: typeof PILLARS[0]
  isOpen: boolean
  onToggle: () => void
  isLast: boolean
}) {
  return (
    <div style={{
      borderTop: '1px solid var(--color-border-strong)',
      borderBottom: isLast ? '1px solid var(--color-border-strong)' : 'none',
    }}>
      <button
        onClick={onToggle}
        className="pillar-btn"
        style={{
          width: '100%',
          display: 'flex', alignItems: 'flex-start', gap: 'var(--space-5)',
          padding: 'var(--space-6) 0',
          background: 'none', border: 'none', cursor: 'pointer',
          textAlign: 'left',
        }}
      >
        {/* Gold number */}
        <span style={{
          fontFamily: 'var(--font-display)',
          fontStyle: 'italic',
          fontWeight: 900,
          fontSize: 'var(--font-size-4xl)',
          color: 'var(--color-accent)',
          lineHeight: 0.9,
          minWidth: '52px',
          userSelect: 'none',
        }}>
          {pillar.number}
        </span>

        {/* Title */}
        <span
          className="pillar-title"
          style={{
            fontFamily: 'var(--font-body)',
            fontWeight: 500,
            fontSize: 'var(--font-size-md)',
            lineHeight: 1.35,
            color: isOpen ? 'var(--color-primary)' : 'var(--color-neutral-800)',
            flex: 1,
            transition: 'color 0.2s',
          }}>
          {pillar.title}
        </span>

        {/* Toggle icon */}
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            width: '28px', height: '28px', flexShrink: 0,
            color: 'var(--color-accent)',
            fontSize: '26px', fontWeight: 300, lineHeight: 1,
            marginTop: '2px',
            transition: 'color 0.2s',
          }}>
          +
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <div style={{ paddingLeft: 'calc(32px + var(--space-5))', paddingBottom: 'var(--space-6)' }}>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontWeight: 400,
                fontSize: 'var(--font-size-base)',
                lineHeight: 'var(--line-height-relaxed)',
                color: 'var(--color-text-muted)',
                marginBottom: pillar.link ? 'var(--space-4)' : 0,
              }}>
                {pillar.body}
              </p>

              {pillar.link && (
                <a
                  href={pillar.link.href}
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)',
                    fontFamily: 'var(--font-body)',
                    fontWeight: 600,
                    fontSize: 'var(--font-size-sm)',
                    color: 'var(--color-accent-text)',
                    letterSpacing: 'var(--letter-spacing-wide)',
                    borderBottom: '1px solid var(--color-gold-300)',
                    paddingBottom: '2px',
                    marginTop: 'var(--space-2)',
                  }}>
                  {pillar.link.label} →
                </a>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
