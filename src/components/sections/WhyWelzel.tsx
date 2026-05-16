import { motion } from 'framer-motion'

const ease = [0.16, 1, 0.3, 1] as const

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease } },
}

export default function WhyWelzel() {
  return (
    <section style={{
      backgroundColor: 'var(--color-bg)',
      paddingTop: 'var(--space-6)',
      paddingBottom: 'var(--space-6)',
      position: 'relative',
      overflow: 'hidden',
    }}>

      {/* Image */}
      <motion.div
        className="skyscrapers-wrap why-welzel-img"
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.75, ease }}
        style={{
          position: 'relative',
          margin: '0 11%',
          height: '660px',
          clipPath: 'polygon(0 0, 100% 0, 100% 88%, 72% 100%, 28% 91%, 0 97%)',
          overflow: 'hidden',
          boxShadow: 'var(--shadow-md)',
        }}
      >
        <img
          src="/images/home/skyscrapers.webp"
          alt="Glass skyscrapers"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center 65%',
            display: 'block',
          }}
        />
      </motion.div>

      {/* Content card — pulled 175px up into the image */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
        className="why-welzel-card"
        style={{
          width: '55%',
          margin: '-175px 0 0 11%',
          position: 'relative',
          zIndex: 1,
          backgroundColor: '#FFFFFF',
          clipPath: 'polygon(0 56px, 100% 0, 100% 100%, 0 100%)',
          boxShadow: 'var(--shadow-lg)',
          padding: 'clamp(3rem, 5vw, 4rem) clamp(1.5rem, 3vw, 2.5rem) clamp(1.5rem, 3vw, 2.5rem)',
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--space-4)',
        }}
      >
        {/* Gold eyebrow */}
        <motion.p variants={fadeUp} style={{
          fontFamily: 'var(--font-body)',
          fontWeight: 500,
          fontSize: 'var(--font-size-xs)',
          letterSpacing: 'var(--letter-spacing-caps)',
          textTransform: 'uppercase',
          color: 'var(--color-accent-text)',
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--space-3)',
        }}>
          <span style={{
            display: 'inline-block',
            width: '24px',
            height: '1px',
            backgroundColor: 'var(--color-accent)',
          }} />
          Why Welzel Law
        </motion.p>

        {/* Heading */}
        <motion.h2 variants={fadeUp} style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 700,
          fontSize: 'var(--font-size-3xl)',
          lineHeight: 1.1,
          letterSpacing: 'var(--letter-spacing-tight)',
          color: 'var(--color-primary)',
          margin: 0,
        }}>
          Partner-Level Counsel.
        </motion.h2>

        {/* Body */}
        <motion.p variants={fadeUp} style={{
          fontFamily: 'var(--font-body)',
          fontSize: 'var(--font-size-md)',
          lineHeight: 'var(--line-height-relaxed)',
          color: 'var(--color-text-muted)',
          margin: 0,
        }}>
          Welzel Law delivers partner-level, business-minded counsel with an
          in-house perspective, providing everything from day-to-day operational
          support to complex transactions and compliance, at a fraction of the
          cost of a traditional law firm or a full-time hire.
        </motion.p>

        <motion.p variants={fadeUp} style={{
          fontFamily: 'var(--font-body)',
          fontSize: 'var(--font-size-md)',
          lineHeight: 'var(--line-height-relaxed)',
          color: 'var(--color-text-muted)',
          margin: 0,
        }}>
          As your outsourced general counsel, we go beyond legal advice to offer
          a proactive, business-aligned partnership that helps you close deals,
          manage risk, and grow with confidence.
        </motion.p>

        {/* Gold link */}
        <motion.a
          variants={fadeUp}
          href="#schedule"
          whileHover={{ x: 4 }}
          transition={{ duration: 0.2, ease }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 'var(--space-2)',
            fontFamily: 'var(--font-body)',
            fontWeight: 600,
            fontSize: 'var(--font-size-base)',
            letterSpacing: 'var(--letter-spacing-wide)',
            color: 'var(--color-accent-text)',
            alignSelf: 'flex-start',
          }}
        >
          Request a Consult →
        </motion.a>
      </motion.div>

    </section>
  )
}
