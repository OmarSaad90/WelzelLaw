import { motion } from 'framer-motion'
import MagneticButton from '../MagneticButton'
import heroVideo from '../../assets/HeroVideo.mp4'
import heroPlants from '../../assets/images/hero-plants.jpg'

const ease = [0.16, 1, 0.3, 1] as const


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
        backgroundColor: 'var(--color-neutral-950)',
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

        {/* Dark teal overlay — 50% */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'oklch(0.32 0.095 192 / 0.50)',
          zIndex: 1,
        }} />

        {/* Center-left brand block — full-width positioner mirrors navbar container */}
        <div style={{
          position: 'absolute',
          top: '50%',
          transform: 'translateY(-50%)',
          left: 0, right: 0,
          zIndex: 2,
        }}>
        <div style={{
          maxWidth: 'var(--content-max-width)',
          margin: '0 auto',
          padding: '0 var(--section-padding-x)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: 'var(--space-4)',
        }}>
          {/* Eyebrow — gold, small caps */}
          <p style={{
            fontFamily: 'var(--font-body)',
            fontWeight: 'var(--font-weight-medium)',
            fontSize: 'var(--font-size-sm)',
            letterSpacing: 'var(--letter-spacing-caps)',
            textTransform: 'uppercase',
            color: 'var(--color-accent)',
            margin: 0,
          }}>
            Ontario Corporate &amp; Real Estate Law
          </p>

          {/* Firm name — Playfair, white, elegant */}
          <p style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            fontSize: 'clamp(3rem, 5.5vw, 5rem)',
            lineHeight: 'var(--line-height-tight)',
            letterSpacing: 'var(--letter-spacing-tight)',
            color: 'var(--color-neutral-25)',
            margin: 0,
          }}>
            Welzel Law
          </p>

          {/* Thin gold rule */}
          <div style={{
            width: '80px',
            height: '1.5px',
            backgroundColor: 'var(--color-accent)',
          }} />
        </div>
        </div>

        {/* Bottom fade — dissolves into plants section below */}
        <div style={{
          position: 'absolute',
          bottom: 0, left: 0, right: 0,
          height: '15%',
          background: 'linear-gradient(to bottom, transparent, var(--color-bg))',
          zIndex: 2,
          pointerEvents: 'none',
        }} />

        {/* Scroll indicator */}
        <div style={{
          position: 'absolute',
          bottom: 'var(--space-10)',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
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
              backgroundColor: 'var(--color-neutral-25)',
            }} />
            <div style={{
              width: '7px',
              height: '7px',
              borderRight: '1.5px solid var(--color-neutral-25)',
              borderBottom: '1.5px solid var(--color-neutral-25)',
              transform: 'rotate(45deg)',
            }} />
          </motion.div>
        </div>
      </section>

      {/* ── 2: Plants — fully self-contained ─────────────── */}
      <section style={{ backgroundColor: 'var(--color-bg)' }}>
        <div style={{
          position: 'relative',
          marginLeft: '15%',
          marginRight: '15%',
          height: 'clamp(640px, 70vw, 860px)',
          overflow: 'hidden',
          clipPath: 'url(#plantsWaveClip)',
        }}>
          <svg width="0" height="0" aria-hidden="true" style={{ position: 'absolute' }}>
            <defs>
              <clipPath id="plantsWaveClip" clipPathUnits="objectBoundingBox">
                <path d="
                  M 0.02,0.06
                  L 0.12,0.02 L 0.26,0.05 L 0.40,0.00 L 0.55,0.04 L 0.68,0.01 L 0.80,0.05 L 0.92,0.02 L 0.98,0.05
                  L 1.00,0.25 L 0.99,0.45 L 1.00,0.65 L 0.99,0.82 L 1.00,0.96
                  L 0.85,1.00 L 0.68,0.97 L 0.52,1.00 L 0.35,0.97 L 0.18,1.00 L 0.03,0.97
                  L 0.00,0.75 L 0.01,0.55 L 0.00,0.35 L 0.01,0.18 L 0.00,0.06
                  Z
                " />
              </clipPath>
            </defs>
          </svg>

          <img
            src={heroPlants}
            alt=""
            aria-hidden="true"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center bottom',
            }}
          />

          {/* Flat teal overlay at 35% */}
          <div style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: 'oklch(0.22 0.07 192 / 0.35)',
          }} />

          {/* Bottom-left gradient — darkens soil area so text pops */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top right, rgba(0,0,0,0.55) 0%, transparent 60%)',
            pointerEvents: 'none',
          }} />

          {/* TOP LEFT: Heading */}
          <div style={{
            position: 'absolute',
            top: 'clamp(2.5rem, 5vw, 4rem)',
            left: 'clamp(2.5rem, 5vw, 4rem)',
          }}>
            <p style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 900,
              fontSize: 'clamp(3rem, 7vw, 7rem)',
              lineHeight: 1.0,
              letterSpacing: 'var(--letter-spacing-tighter)',
              color: 'var(--color-neutral-25)',
              margin: 0,
              padding: 0,
            }}>
              {['Build It.', 'Protect It.', 'Grow It.'].map((line) => (
                <span key={line} style={{ display: 'block' }}>{line}</span>
              ))}
            </p>
          </div>

          {/* BOTTOM LEFT: Paragraph + CTA */}
          <div style={{
            position: 'absolute',
            bottom: 'clamp(2.5rem, 5vw, 4rem)',
            left: 'clamp(2.5rem, 5vw, 4rem)',
            maxWidth: '500px',
          }}>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontWeight: 300,
              fontSize: 'clamp(1.19rem, 1.08rem + 0.41vw, 1.38rem)',
              lineHeight: 'var(--line-height-relaxed)',
              color: 'var(--color-neutral-25)',
              margin: 0,
              marginBottom: 'var(--space-8)',
            }}>
              Whether you are launching, scaling, or navigating a major financial
              decision, you deserve a legal advocate who is genuinely invested in
              your outcome. We provide full-spectrum legal support in Ontario, so
              you can focus on what you do best.
            </p>

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
          </div>
        </div>
      </section>
    </>
  )
}
