import { motion } from 'framer-motion'

const ease = [0.16, 1, 0.3, 1] as const

interface InnerPageHeroProps {
  image?: string
  imageAlt?: string
  eyebrow?: string
  title: string
  subtitle?: string
  variant?: 'overlay'
  warmFade?: boolean
  midFade?: boolean
}

export default function InnerPageHero({ image, imageAlt = '', eyebrow, title, subtitle, variant, warmFade, midFade }: InnerPageHeroProps) {

  const textColor = image ? 'var(--color-text-inverse)' : 'var(--color-primary)'
  const subtitleColor = image ? 'var(--color-teal-100)' : 'var(--color-text-muted)'

  const content = (
    <>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: '36px' }}
        transition={{ duration: 0.55, delay: 0.2, ease }}
        style={{
          height: '2px',
          backgroundColor: 'var(--color-accent)',
          marginBottom: 'var(--space-4)',
        }}
      />

      {eyebrow && (
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.28, ease }}
          style={{
            fontFamily: 'var(--font-body)',
            fontWeight: 700,
            fontSize: 'var(--font-size-sm)',
            letterSpacing: 'var(--letter-spacing-caps)',
            textTransform: 'uppercase',
            color: 'var(--color-accent)',
            margin: '0 0 var(--space-4)',
          }}
        >
          {eyebrow}
        </motion.p>
      )}

      <motion.h1
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, delay: 0.34, ease }}
        style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 700,
          fontSize: 'clamp(2.75rem, 5.5vw, 5rem)',
          lineHeight: 1.05,
          letterSpacing: '-0.025em',
          color: textColor,
          margin: 0,
          maxWidth: '12ch',
        }}
      >
        {title}
      </motion.h1>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.44, ease }}
          style={{
            fontFamily: 'var(--font-body)',
            fontWeight: 400,
            fontSize: 'var(--font-size-md)',
            lineHeight: 1.6,
            color: subtitleColor,
            margin: 'var(--space-5) 0 0',
            maxWidth: '38ch',
          }}
        >
          {subtitle}
        </motion.p>
      )}
    </>
  )

  /* ── No image: clean typographic layout on white ────────── */
  if (!image) {
    return (
      <section style={{
        backgroundColor: 'var(--color-bg)',
        paddingTop: 'calc(var(--nav-height) + clamp(3.5rem, 5vw, 5rem))',
        paddingBottom: 'clamp(2.5rem, 4vw, 4rem)',
      }}>
        <div style={{
          maxWidth: 'var(--content-max-width)',
          margin: '0 auto',
          padding: '0 var(--section-padding-x)',
        }}>
          {content}
        </div>
      </section>
    )
  }

  /* ── Overlay variant: full teal bg, image dissolves in from right ─ */
  if (image && variant === 'overlay') {
    const overlayContent = (
      <>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '36px' }}
          transition={{ duration: 0.55, delay: 0.2, ease }}
          style={{ height: '2px', backgroundColor: 'var(--color-accent)', marginBottom: 'var(--space-4)' }}
        />
        {eyebrow && (
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.28, ease }}
            style={{
              fontFamily: 'var(--font-body)', fontWeight: 700,
              fontSize: 'var(--font-size-sm)', letterSpacing: 'var(--letter-spacing-caps)',
              textTransform: 'uppercase', color: 'var(--color-accent)',
              margin: '0 0 var(--space-4)',
            }}
          >{eyebrow}</motion.p>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.34, ease }}
          style={{
            fontFamily: 'var(--font-display)', fontWeight: 700,
            fontSize: 'clamp(2.75rem, 5.5vw, 5rem)', lineHeight: 1.05,
            letterSpacing: '-0.025em', color: 'var(--color-neutral-25)',
            margin: 0, maxWidth: '12ch',
          }}
        >{title}</motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.44, ease }}
            style={{
              fontFamily: 'var(--font-body)', fontWeight: 400,
              fontSize: 'var(--font-size-md)', lineHeight: 1.6,
              color: 'var(--color-teal-100)', margin: 'var(--space-5) 0 0', maxWidth: '38ch',
              whiteSpace: 'pre-line',
            }}
          >{subtitle}</motion.p>
        )}
      </>
    )

    return (
      <section className="inner-hero-overlay">
        <motion.div
          className="inner-hero-overlay-text"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease }}
        >
          {overlayContent}
        </motion.div>

        <motion.div
          className="inner-hero-overlay-img-wrap"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.95, ease }}
        >
          <img src={image} alt={imageAlt} className="inner-hero-overlay-img" />
          <div className={`inner-hero-overlay-fade${warmFade ? ' inner-hero-overlay-fade--warm' : midFade ? ' inner-hero-overlay-fade--mid' : ''}`} />
        </motion.div>
      </section>
    )
  }

  /* ── With image: teal brand block left + contained image right ─ */
  return (
    <section style={{
      backgroundColor: 'var(--color-bg)',
      paddingTop: 'calc(var(--nav-height) + 1.25rem)',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'stretch',
      minHeight: 'clamp(300px, 42vh, 460px)',
    }}>

      {/* Teal brand block — solid primary, angled right edge */}
      <motion.div
        className="inner-hero-teal-block"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.1, ease }}
      >
        {content}
      </motion.div>

      {/* Image column — contained, not full-bleed */}
      <motion.div
        className="inner-hero-image-col"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.95, ease }}
      >
        <img src={image} alt={imageAlt} className="inner-hero-img" />
        <div className="inner-hero-img-overlay" />
      </motion.div>

    </section>
  )
}
