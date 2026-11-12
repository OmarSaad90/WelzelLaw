'use client'

import { motion } from 'framer-motion'

const ease = [0.16, 1, 0.3, 1] as const

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease } },
}

// Real testimonials supplied by the client (go-live doc). Each quote is a list
// of paragraphs so longer endorsements keep their original paragraph breaks.
const TESTIMONIALS = [
  {
    quote: [
      "Fernanda has a no nonsense approachable style, always focused on business objectives and how she can help to accelerate the business. Fernanda's ability to distill complex legal and regulatory issues into clear, actionable business risks and solutions has made her an invaluable advisor to the leadership team.",
    ],
    name: 'Walt Stothers',
    role: 'Retired CFO',
  },
  {
    quote: [
      'I had the pleasure of working closely with Fernanda Welzel at CHS Ltd., where I served as Chief Commercial Officer. Fernanda was exceptional at reviewing and negotiating commercial contracts, whether with national and international corporations or with Group Purchasing Organizations serving the Canadian and US governments. She was a trusted business partner who understood the commercial objectives behind every deal and helped us reach agreements that enhanced the business.',
      'Fernanda also successfully completed many M&A transactions, with seamless integration after closing. Beyond dealmaking, she provided great support on corporate governance, legal strategy, and risk management, and became a valued advisor to the leadership team. I would highly recommend Fernanda to any organization looking for a strategic and commercially minded legal partner.',
    ],
    name: 'Mat Dinneen',
    role: 'General Manager, ICU Medical',
  },
]

export default function Testimonials() {
  return (
    <section style={{
      backgroundColor: 'var(--color-bg)',
      paddingTop: 'var(--space-12)',
      paddingBottom: 'var(--space-12)',
    }}>
      <div style={{
        maxWidth: 'var(--content-max-width)',
        margin: '0 auto',
        padding: '0 var(--section-padding-x)',
      }}>

        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={stagger}
          style={{ textAlign: 'center', marginBottom: 'var(--space-12)' }}
        >
          <motion.div variants={fadeUp} style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 'var(--space-4)',
            marginBottom: 'var(--space-6)',
          }}>
            <span style={{ display: 'block', width: '60px', height: '1px', backgroundColor: 'var(--color-accent)' }} />
            <span style={{
              fontFamily: 'var(--font-body)',
              fontWeight: 700,
              fontSize: 'var(--font-size-sm)',
              letterSpacing: 'var(--letter-spacing-caps)',
              textTransform: 'uppercase',
              color: 'var(--color-accent-text)',
            }}>
              Client Stories
            </span>
            <span style={{ display: 'block', width: '60px', height: '1px', backgroundColor: 'var(--color-accent)' }} />
          </motion.div>

          <motion.h2 variants={fadeUp} style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            fontSize: 'var(--font-size-3xl)',
            lineHeight: 1.15,
            letterSpacing: 'var(--letter-spacing-tight)',
            color: 'var(--color-primary)',
          }}>
            What Our Clients Say
          </motion.h2>
        </motion.div>

        {/* Two-column editorial layout with vertical gold divider.
            Columns are 1:2 because the second quote is ~3x longer; equal columns
            made it twice as tall as the first. The divider is a grid item so it
            always sits on the column boundary. */}
        <div>
          <div className="testimonials-grid" style={{
            display: 'grid',
            gridTemplateColumns: '1fr auto 2fr',
            gap: 'clamp(3rem, 6vw, 6rem)',
            alignItems: 'center',
          }}>
            {TESTIMONIALS.map((t, i) => [
              i > 0 && (
                <div key={`divider-${t.name}`} className="testimonials-divider" style={{
                  alignSelf: 'stretch',
                  margin: '15% 0',
                  width: '2px',
                  backgroundColor: 'var(--color-accent)',
                }} />
              ),
              <motion.div
                key={t.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={stagger}
                style={{
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 'var(--space-6)',
                }}
              >
                {/* Oversized quotation mark */}
                <motion.span variants={fadeUp} style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '80px',
                  lineHeight: 0.7,
                  color: 'var(--color-accent)',
                  userSelect: 'none',
                  display: 'block',
                }}>
                  &quot;
                </motion.span>

                {/* Quote */}
                <motion.div variants={fadeUp} style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 'var(--space-4)',
                }}>
                  {t.quote.map((paragraph) => (
                    <p key={paragraph.slice(0, 32)} style={{
                      fontFamily: 'var(--font-display)',
                      fontStyle: 'italic',
                      fontWeight: 400,
                      fontSize: 'var(--font-size-md)',
                      lineHeight: 'var(--line-height-normal)',
                      color: 'var(--color-neutral-800)',
                      margin: 0,
                    }}>
                      {paragraph}
                    </p>
                  ))}
                </motion.div>

                {/* Name */}
                <motion.p variants={fadeUp} style={{
                  fontFamily: 'var(--font-body)',
                  fontWeight: 600,
                  fontSize: 'var(--font-size-base)',
                  color: 'var(--color-primary)',
                  margin: 0,
                  letterSpacing: 'var(--letter-spacing-wide)',
                }}>
                  {t.name}
                </motion.p>

                {/* Role */}
                <motion.p variants={fadeUp} style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 'var(--font-size-sm)',
                  color: 'var(--color-text-subtle)',
                  margin: 0,
                }}>
                  {t.role}
                </motion.p>
              </motion.div>,
            ])}
          </div>
        </div>

      </div>
    </section>
  )
}
