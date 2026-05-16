import { motion } from 'framer-motion'
import MagneticButton from '../MagneticButton'
import heroVideo from '../../assets/videos/home/test2.mp4'
import heroPlants from '../../assets/images/hero/plants.jpg'

const ease = [0.16, 1, 0.3, 1] as const

const heroEntrance = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.25 } },
}

const heroItem = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease } },
}

const plantsStagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}

const plantsItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease } },
}


export default function Hero() {
  return (
    <>
      {/* ── 1: Full-screen video — cinematic ─────────────── */}
      <section className="hero-section" style={{
        position: 'relative',
        height: '100svh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        backgroundColor: 'oklch(0.96 0.012 192)',
      }}>
        <video
          autoPlay
          muted
          loop
          playsInline
          className="hero-video"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            zIndex: 0,
          }}
        >
          <source src={heroVideo} type="video/mp4" />
        </video>



        {/* Center-left brand block — full-width positioner mirrors navbar container */}
        <div style={{
          position: 'absolute',
          top: '50%',
          transform: 'translateY(-50%)',
          left: 0, right: 0,
          zIndex: 2,
        }}>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={heroEntrance}
          style={{
            maxWidth: 'var(--content-max-width)',
            margin: '0 auto',
            padding: '0 var(--section-padding-x)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: 'var(--space-4)',
          }}
        >
          {/* Eyebrow */}
          <motion.p
            variants={heroItem}
            style={{
              fontFamily: 'var(--font-body)',
              fontWeight: 'var(--font-weight-medium)',
              fontSize: 'var(--font-size-sm)',
              letterSpacing: 'var(--letter-spacing-caps)',
              textTransform: 'uppercase',
              color: 'var(--color-accent)',
              margin: 0,
            }}
          >
            Ontario Corporate &amp; Real Estate Law
          </motion.p>

          {/* Firm name */}
          <motion.p
            variants={heroItem}
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: 'clamp(3rem, 5.5vw, 5rem)',
              lineHeight: 'var(--line-height-tight)',
              letterSpacing: 'var(--letter-spacing-tight)',
              color: 'var(--color-neutral-25)',
              margin: 0,
            }}
          >
            Welzel Law
          </motion.p>

          {/* Gold rule — scaleX reveal left to right */}
          <motion.div
            variants={{
              hidden: { scaleX: 0 },
              visible: { scaleX: 1, transition: { duration: 0.55, ease } },
            }}
            style={{
              width: '80px',
              height: '1.5px',
              backgroundColor: 'var(--color-accent)',
              transformOrigin: 'left center',
            }}
          />
        </motion.div>
        </div>


        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.65, delay: 1.4, ease }}
          style={{
            position: 'absolute',
            bottom: 'var(--space-10)',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '6px',
              opacity: 0.55,
            }}
          >
            <div style={{
              width: '1px',
              height: '36px',
              backgroundColor: 'var(--color-primary)',
            }} />
            <div style={{
              width: '7px',
              height: '7px',
              borderRight: '1.5px solid var(--color-primary)',
              borderBottom: '1.5px solid var(--color-primary)',
              transform: 'rotate(45deg)',
            }} />
          </motion.div>
        </motion.div>

        {/* Overlay — nav clear at top, brand teal over text, dissolves to white at edge */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, transparent 12%, oklch(0.20 0.09 192 / 0.70) 52%, oklch(0.20 0.09 192 / 0.65) 86%, oklch(0.40 0.07 192 / 0.48) 91%, oklch(0.65 0.04 192 / 0.28) 95%, oklch(0.88 0.015 192 / 0.10) 98%, oklch(0.99 0.004 80) 100%)',
          zIndex: 1,
          pointerEvents: 'none',
        }} />
      </section>

      {/* ── 2: Plants — editorial split (image left, text right) ── */}
      <section className="plants-split">

        {/* Left: image bleeds to viewport edge */}
        <motion.div
          className="plants-split-image"
          initial={{ opacity: 0, scale: 1.04 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.85, ease }}
        >
          <img
            src={heroPlants}
            alt=""
            aria-hidden="true"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
              display: 'block',
            }}
          />
        </motion.div>

        {/* Right: text */}
        <motion.div
          className="plants-split-text"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={plantsStagger}
        >
          <motion.p
            variants={plantsItem}
            style={{
              fontFamily: 'var(--font-body)',
              fontWeight: 'var(--font-weight-medium)',
              fontSize: 'var(--font-size-sm)',
              letterSpacing: 'var(--letter-spacing-caps)',
              textTransform: 'uppercase',
              color: 'var(--color-accent-text)',
              margin: 0,
              marginBottom: 'var(--space-5)',
            }}
          >
            Full-Spectrum Legal Support
          </motion.p>

          <motion.p
            variants={plantsItem}
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 900,
              fontSize: 'clamp(2.25rem, 3.8vw, 3.75rem)',
              lineHeight: 1.0,
              letterSpacing: 'var(--letter-spacing-tighter)',
              color: 'var(--color-primary)',
              margin: 0,
              marginBottom: 'var(--space-8)',
            }}
          >
            {['Build It.', 'Protect It.', 'Grow It.'].map((line) => (
              <span key={line} style={{ display: 'block' }}>{line}</span>
            ))}
          </motion.p>

          <motion.div
            variants={{
              hidden: { scaleX: 0 },
              visible: { scaleX: 1, transition: { duration: 0.45, ease } },
            }}
            style={{
              width: '40px',
              height: '1.5px',
              backgroundColor: 'var(--color-primary)',
              marginBottom: 'var(--space-8)',
              transformOrigin: 'left center',
            }}
          />

          <motion.p
            variants={plantsItem}
            style={{
              fontFamily: 'var(--font-body)',
              fontWeight: 400,
              fontSize: 'var(--font-size-md)',
              lineHeight: 'var(--line-height-relaxed)',
              color: 'var(--color-text-muted)',
              margin: 0,
              marginBottom: 'var(--space-10)',
              maxWidth: '46ch',
            }}
          >
            Whether you are launching, scaling, or navigating a major financial
            decision, you deserve a legal advocate who is genuinely invested in
            your outcome. We provide full-spectrum legal support in Ontario, so
            you can focus on what you do best.
          </motion.p>

          <motion.div variants={plantsItem} className="plants-cta-wrap">
            <MagneticButton>
              <motion.a
                href="#schedule"
                whileHover={{ boxShadow: 'var(--shadow-gold)' }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.15, ease }}
                style={{
                  display: 'inline-block',
                  backgroundColor: 'var(--color-accent)',
                  color: 'var(--color-neutral-950)',
                  fontFamily: 'var(--font-body)',
                  fontWeight: 600,
                  fontSize: 'var(--font-size-base)',
                  letterSpacing: 'var(--letter-spacing-wide)',
                  padding: 'var(--space-5) var(--space-12)',
                  borderRadius: 'var(--radius-xs)',
                  textDecoration: 'none',
                }}
              >
                Request a Consult
              </motion.a>
            </MagneticButton>
          </motion.div>
        </motion.div>

      </section>
    </>
  )
}
