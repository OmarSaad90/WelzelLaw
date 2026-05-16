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

const TESTIMONIALS = [
  {
    quote: 'Working with Welzel Law was one of the best decisions I made for my business. They handled our incorporation and shareholder agreement with precision, and explained every step clearly. I felt like I had a true partner invested in my outcome, not just a service provider.',
    name: 'Sarah M.',
    role: 'Founder, Toronto Tech Startup',
  },
  {
    quote: 'The real estate closing process can be stressful, but Welzel Law made it completely seamless. They caught issues in the title search that could have cost us thousands. Professional, responsive, and genuinely invested in protecting us from offer to closing.',
    name: 'David K.',
    role: 'Real Estate Investor, Greater Toronto Area',
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
              fontWeight: 500,
              fontSize: 'var(--font-size-xs)',
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

        {/* Two-column editorial layout with vertical gold divider */}
        <div style={{ position: 'relative' }}>

          {/* Vertical gold divider — 60% height, centered vertically */}
          <div className="testimonials-divider" style={{
            position: 'absolute',
            left: '50%',
            top: '20%',
            height: '60%',
            width: '2px',
            backgroundColor: 'var(--color-accent)',
            transform: 'translateX(-50%)',
            pointerEvents: 'none',
          }} />

          <div className="testimonials-grid" style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 'clamp(3rem, 6vw, 6rem)',
            alignItems: 'start',
          }}>
            {TESTIMONIALS.map((t) => (
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
                  "
                </motion.span>

                {/* Quote */}
                <motion.p variants={fadeUp} style={{
                  fontFamily: 'var(--font-display)',
                  fontStyle: 'italic',
                  fontWeight: 400,
                  fontSize: 'var(--font-size-base)',
                  lineHeight: 'var(--line-height-normal)',
                  color: 'var(--color-neutral-800)',
                  margin: 0,
                }}>
                  {t.quote}
                </motion.p>

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
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
