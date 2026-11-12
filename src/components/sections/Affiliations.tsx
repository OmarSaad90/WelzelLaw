'use client'

import { motion } from 'framer-motion'
import MotionImage from '../MotionImage'
import lsoLogo from '../../assets/images/logos/lso.png'
import chamberLogo from '../../assets/images/logos/chamber-kw.png'
import cbaLogo from '../../assets/images/logos/cba.png'

const ease = [0.16, 1, 0.3, 1] as const

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const AFFILIATIONS = [
  { name: 'Law Society of Ontario', src: lsoLogo },
  { name: 'Greater Kitchener Waterloo Chamber of Commerce', src: chamberLogo },
  { name: 'Canadian Bar Association', src: cbaLogo },
]

export default function Affiliations() {
  return (
    <section style={{
      backgroundColor: 'var(--color-bg)',
      paddingTop: 'clamp(6rem, 10vw, 10rem)',
      paddingBottom: 'var(--space-20)',
    }}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={stagger}
        className="affiliations-row"
        style={{
          maxWidth: 'var(--content-max-width)',
          margin: '0 auto',
          padding: '0 var(--section-padding-x)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 'var(--space-12)',
        }}
      >
        {/* Left: heading anchored to container edge */}
        <motion.h2 variants={fadeUp} style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 700,
          fontSize: 'clamp(2.0625rem, 1.575rem + 2.17vw, 3.0625rem)',
          lineHeight: 1.15,
          letterSpacing: 'var(--letter-spacing-tight)',
          color: 'var(--color-primary)',
          flexShrink: 0,
        }}>
          Our Affiliations
        </motion.h2>

        {/* Right: logos */}
        <div>
          <div className="affiliations-logos" style={{
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--space-8)',
            flexWrap: 'nowrap',
          }}>
            {AFFILIATIONS.map((aff) => (
              <MotionImage
                key={aff.name}
                sizes="200px"
                variants={fadeUp}
                src={aff.src}
                alt={aff.name}
                title={aff.name}
                className="affil-logo"
                style={{
                  height: '64px',
                  width: 'auto',
                  display: 'block',
                  opacity: 0.8,
                }}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
