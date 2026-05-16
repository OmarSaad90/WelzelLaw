import { motion } from 'framer-motion'

const ease = [0.16, 1, 0.3, 1] as const

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease } },
}

/* ── Card data ────────────────────────────────────────────── */

const SERVICES = [
  {
    iconSrc: '/images/icons/business-law.png',
    title: 'Business Law',
    body: 'Strong businesses don\'t just happen, they\'re built on solid legal ground. We help Ontario founders and entrepreneurs establish that foundation, stay ahead of problems, and move forward with confidence at every stage.',
    href: '/business-law',
    featured: false,
  },
  {
    iconSrc: '/images/icons/fgc.png',
    title: 'Fractional General Counsel',
    body: 'As your Fractional General Counsel, we become a true executive partner embedded in your company: attending meetings, negotiating contracts, managing risk, and keeping your business protected at every turn. You get counsel invested in your success, without the $200K to $350K yearly salary. A monthly fixed fee, no billing anxiety. Just peace of mind.',
    href: '/fractional-general-counsel',
    featured: true,
  },
  {
    iconSrc: '/images/icons/real-estate.png',
    title: 'Real Estate Law',
    body: 'Buying or selling a home? Real estate transactions are high-stakes. The legal details, title search, insurance, offer conditions, matter enormously. As trusted real estate lawyers, we protect Ontario buyers and sellers from offer to closing, so you can move forward with confidence and no surprises.',
    href: '/real-estate-law',
    featured: false,
  },
]

/* ── Component ────────────────────────────────────────────── */

export default function Services() {
  return (
    <section style={{
      backgroundColor: 'var(--color-bg)',
      paddingTop: 'var(--space-8)',
      paddingBottom: 'var(--space-12)',
    }}>
      <div style={{
        maxWidth: 'var(--content-max-width)',
        margin: '0 auto',
        padding: '0 var(--section-padding-x)',
      }}>

        {/* Section header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
          style={{ marginBottom: 'var(--space-16)', maxWidth: '680px' }}
        >
          <motion.p variants={fadeUp} style={{
            fontFamily: 'var(--font-body)',
            fontWeight: 700,
            fontSize: 'var(--font-size-xs)',
            letterSpacing: 'var(--letter-spacing-caps)',
            textTransform: 'uppercase',
            color: 'var(--color-accent-text)',
            marginBottom: 'var(--space-4)',
            display: 'flex', alignItems: 'center', gap: 'var(--space-3)',
          }}>
            <span style={{
              display: 'inline-block', width: '28px', height: '1px',
              backgroundColor: 'var(--color-accent)',
            }} />
            Our Services
          </motion.p>

          <motion.h2 variants={fadeUp} style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            fontSize: 'var(--font-size-3xl)',
            lineHeight: 1.15,
            letterSpacing: '-0.02em',
            color: 'var(--color-primary)',
            marginBottom: 'var(--space-6)',
          }}>
            How We Can Help
          </motion.h2>

          <motion.p variants={fadeUp} style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-md)',
            lineHeight: 'var(--line-height-relaxed)',
            color: 'var(--color-text-muted)',
            maxWidth: '60ch',
          }}>
            Whether you are incorporating your first company, closing on your dream
            home, or looking for executive-level counsel, we are here to make the
            law work for you, clearly, affordably, and personally.
          </motion.p>
        </motion.div>

        {/* Cards grid — asymmetric: BL | FGC (dominant) | RE (offset down) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={stagger}
          className="services-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '30fr 35fr 30fr',
            gap: 'var(--space-6)',
            alignItems: 'stretch',
            paddingTop: 'clamp(2rem, 4vw, 3.5rem)',
            paddingBottom: 'clamp(2rem, 4vw, 3.5rem)',
          }}
        >
          {SERVICES.map((service, i) => (
            <ServiceCard
              key={service.href}
              {...service}
              cardStyle={
                i === 1
                  ? {
                      marginTop: 'calc(-1 * clamp(2rem, 4vw, 3.5rem))',
                      marginBottom: 'calc(-1 * clamp(2rem, 4vw, 3.5rem))',
                      position: 'relative',
                      zIndex: 1,
                    }
                  : i === 2
                  ? { marginTop: 'clamp(1.5rem, 3vw, 2.5rem)' }
                  : {}
              }
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

/* ── Card ─────────────────────────────────────────────────── */

function ServiceCard({
  iconSrc, title, body, href, featured, cardStyle,
}: {
  iconSrc: string
  title: string
  body: string
  href: string
  featured: boolean
  cardStyle?: React.CSSProperties
}) {
  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: -4, boxShadow: 'var(--shadow-xl)' }}
      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      className={`service-card${featured ? ' service-card--featured' : ''}`}
      style={{
        backgroundColor: '#FFFFFF',
        borderRadius: 'var(--radius-md)',
        border: featured ? '1px solid var(--color-teal-300)' : '1px solid var(--color-neutral-200)',
        padding: featured ? 'clamp(2rem, 4vw, 3.5rem) var(--space-10)' : 'var(--space-8)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        boxShadow: featured ? 'var(--shadow-md)' : 'var(--shadow-sm)',
        cursor: 'default',
        height: '100%',
        boxSizing: 'border-box',
        ...cardStyle,
      }}
    >
      {/* Top group: icon + title + body */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
        <img
          src={iconSrc}
          alt=""
          aria-hidden="true"
          style={{
            width: featured ? '64px' : '56px',
            height: featured ? '64px' : '56px',
            objectFit: 'contain',
            flexShrink: 0,
            mixBlendMode: 'multiply',
            filter: 'hue-rotate(-28deg) saturate(1.3)',
          }}
        />

        <h3 style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 700,
          fontSize: 'var(--font-size-xl)',
          lineHeight: 1.2,
          letterSpacing: '-0.01em',
          color: 'var(--color-neutral-900)',
        }}>
          {title}
        </h3>

        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: 'var(--font-size-base)',
          lineHeight: 'var(--line-height-relaxed)',
          color: 'var(--color-text-muted)',
        }}>
          {body}
        </p>
      </div>

      {/* CTA link — always pinned to bottom */}
      <a
        href={href}
        style={{
          display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)',
          fontFamily: 'var(--font-body)',
          fontWeight: 600,
          fontSize: 'var(--font-size-sm)',
          color: featured ? 'var(--color-accent-text)' : 'var(--color-primary-text)',
          letterSpacing: 'var(--letter-spacing-wide)',
          marginTop: 'var(--space-6)',
        }}
      >
        Learn More
        <span className="learn-more-arrow" style={{ fontSize: '1.1em' }}>→</span>
      </a>
    </motion.article>
  )
}
