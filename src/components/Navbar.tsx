import { useState, useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'
import MagneticButton from './MagneticButton'
import WelzelLogo from './WelzelLogo'

const ease = [0.16, 1, 0.3, 1] as const

const PRACTICE_AREAS = [
  { label: 'Business Law', href: '/business-law' },
  { label: 'Fractional General Counsel', href: '/fractional-general-counsel' },
  { label: 'Real Estate Law', href: '/real-estate-law' },
]

export default function Navbar() {
  const { pathname } = useLocation()
  const isHome = pathname === '/'
  const [scrolled, setScrolled] = useState(false)
  const [isMobile, setIsMobile] = useState(() => window.innerWidth <= 960)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [practiceOpen, setPracticeOpen] = useState(false)
  const [mobilePracticeOpen, setMobilePracticeOpen] = useState(false)
  const practiceCloseTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  function openPractice() {
    if (practiceCloseTimer.current) clearTimeout(practiceCloseTimer.current)
    setPracticeOpen(true)
  }
  function closePractice() {
    practiceCloseTimer.current = setTimeout(() => setPracticeOpen(false), 400)
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onResize = () => {
      const mobile = window.innerWidth <= 960
      setIsMobile(mobile)
      if (!mobile) setMobileOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <nav style={{
      position: 'fixed',
      top: 0, left: 0, right: 0,
      zIndex: 200,
      backgroundColor: scrolled ? 'oklch(0.99 0.004 80 / 0.93)' : 'transparent',
      backdropFilter: scrolled ? 'blur(16px) saturate(1.8)' : 'none',
      WebkitBackdropFilter: scrolled ? 'blur(16px) saturate(1.8)' : 'none',
      boxShadow: scrolled ? 'var(--shadow-sm)' : 'none',
      transition: 'background-color 0.35s, box-shadow 0.35s, backdrop-filter 0.35s',
    }}>
      {/* Main bar */}
      <div style={{
        maxWidth: 'var(--content-max-width)',
        margin: '0 auto',
        padding: '0 var(--section-padding-x)',
        height: 'var(--nav-height)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 'var(--space-8)',
      }}>

        {/* Logo */}
        <a href="/" style={{ flexShrink: 0, display: 'flex', alignItems: 'center', lineHeight: 1 }}>
          <WelzelLogo variant={!scrolled && isHome && !isMobile ? 'dark' : 'light'} height={34} />
        </a>

        {/* Desktop nav */}
        <div className="desktop-nav" style={{
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--space-6)',
        }}>
          <a href="/about"
            className="nav-link"
            style={{ ...navLinkStyle() }}>
            About
          </a>

          {/* Practice Areas dropdown */}
          <div
            style={{ position: 'relative' }}
            onMouseEnter={openPractice}
            onMouseLeave={closePractice}
          >
            <button style={{
              ...navLinkStyle(),
              display: 'flex', alignItems: 'center', gap: '4px',
              background: 'none', border: 'none', padding: 'var(--space-2) 0',
            }}>
              Practice Areas
              <motion.span
                animate={{ rotate: practiceOpen ? 180 : 0 }}
                transition={{ duration: 0.2, ease }}
                style={{ display: 'flex', alignItems: 'center' }}
              >
                <ChevronDown size={13} />
              </motion.span>
            </button>

            <AnimatePresence>
              {practiceOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -6, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -6, scale: 0.97 }}
                  transition={{ duration: 0.18, ease }}
                  style={{
                    position: 'absolute',
                    top: 'calc(100% + 10px)',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    backgroundColor: 'var(--color-neutral-25)',
                    boxShadow: 'var(--shadow-lg)',
                    borderRadius: 'var(--radius-md)',
                    padding: 'var(--space-2)',
                    minWidth: '230px',
                    zIndex: 10,
                  }}
                >
                  {PRACTICE_AREAS.map((item) => (
                    <a key={item.href} href={item.href}
                      className="dropdown-item"
                      style={{
                        display: 'block',
                        fontFamily: 'var(--font-body)',
                        fontWeight: 400,
                        fontSize: 'var(--font-size-sm)',
                        color: 'var(--color-neutral-700)',
                        padding: 'var(--space-3) var(--space-5)',
                        borderRadius: 'var(--radius-sm)',
                        transition: 'background 0.15s, color 0.15s',
                      }}>
                      {item.label}
                    </a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <a href="/insights" className="nav-link" style={navLinkStyle()}>Insights</a>
          <a href="/insights#subscribe" className="nav-link" style={navLinkStyle()}>Subscribe</a>
          <a href="/contact" className="nav-link" style={navLinkStyle()}>Contact</a>

          <MagneticButton>
            <motion.a
              href="#schedule"
              whileHover={{ boxShadow: 'var(--shadow-gold)' }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.15, ease }}
              style={{
                backgroundColor: 'var(--color-accent)',
                color: 'var(--color-neutral-950)',
                fontFamily: 'var(--font-body)',
                fontWeight: 600,
                fontSize: 'var(--font-size-sm)',
                letterSpacing: 'var(--letter-spacing-wide)',
                padding: 'var(--space-3) var(--space-6)',
                borderRadius: 'var(--radius-xs)',
                whiteSpace: 'nowrap',
                flexShrink: 0,
              }}>
              Request a Consult
            </motion.a>
          </MagneticButton>
        </div>

        {/* Hamburger */}
        <motion.button
          className="hamburger"
          onClick={() => setMobileOpen(!mobileOpen)}
          whileTap={{ scale: 0.92 }}
          style={{
            background: 'none', border: 'none',
            color: 'var(--color-primary)',
            padding: 'var(--space-2)',
            display: 'none',
          }}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={mobileOpen ? 'x' : 'menu'}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2, ease }}
              style={{ display: 'flex' }}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.span>
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease }}
            style={{ overflow: 'hidden', backgroundColor: 'var(--color-neutral-25)' }}
          >
            <div style={{
              padding: 'var(--space-4) var(--section-padding-x) var(--space-8)',
              display: 'flex', flexDirection: 'column', gap: 0,
              borderTop: '1px solid var(--color-border)',
            }}>
              <a href="/about" onClick={() => setMobileOpen(false)}
                style={{ ...mobileLinkStyle, borderBottom: '1px solid var(--color-border)' }}>
                About
              </a>

              {/* Mobile Practice Areas — 2nd after About */}
              <div style={{ borderBottom: '1px solid var(--color-border)' }}>
                <button
                  onClick={() => setMobilePracticeOpen(!mobilePracticeOpen)}
                  style={{
                    ...mobileLinkStyle,
                    width: '100%', background: 'none', border: 'none',
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  }}>
                  Practice Areas
                  <motion.span
                    animate={{ rotate: mobilePracticeOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    style={{ display: 'flex' }}
                  >
                    <ChevronDown size={16} />
                  </motion.span>
                </button>
                <AnimatePresence>
                  {mobilePracticeOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease }}
                      style={{ overflow: 'hidden' }}
                    >
                      {PRACTICE_AREAS.map((item) => (
                        <a key={item.href} href={item.href}
                          onClick={() => setMobileOpen(false)}
                          style={{
                            display: 'block',
                            fontFamily: 'var(--font-body)',
                            fontSize: 'var(--font-size-base)',
                            color: 'var(--color-primary)',
                            padding: 'var(--space-3) var(--space-6)',
                          }}>
                          {item.label}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {['Insights', 'Subscribe', 'Contact'].map((label) => (
                <a key={label}
                  href={label === 'Subscribe' ? '/insights#subscribe' : `/${label.toLowerCase()}`}
                  onClick={() => setMobileOpen(false)}
                  style={{ ...mobileLinkStyle, borderBottom: '1px solid var(--color-border)' }}>
                  {label}
                </a>
              ))}

              <a href="tel:+16479075459" style={{
                ...mobileLinkStyle,
                color: 'var(--color-primary-text)',
                fontWeight: 500,
              }}>
                (647) 907-5459
              </a>

              <motion.a
                href="#schedule"
                onClick={() => setMobileOpen(false)}
                whileTap={{ scale: 0.97 }}
                style={{
                  display: 'block', textAlign: 'center',
                  backgroundColor: 'var(--color-accent)',
                  color: 'var(--color-neutral-950)',
                  fontFamily: 'var(--font-body)', fontWeight: 600,
                  fontSize: 'var(--font-size-base)',
                  padding: 'var(--space-4) var(--space-6)',
                  borderRadius: 'var(--radius-xs)',
                  marginTop: 'var(--space-4)',
                }}>
                Request a Consult
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

function navLinkStyle(): React.CSSProperties {
  return {
    fontFamily: 'var(--font-body)',
    fontWeight: 500,
    fontSize: 'var(--font-size-md)',
    color: 'var(--color-primary)',  // ← always teal, regardless of scroll
    whiteSpace: 'nowrap',
    transition: 'color 0.2s',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
  }
}

const mobileLinkStyle: React.CSSProperties = {
  fontFamily: 'var(--font-body)',
  fontWeight: 500,
  fontSize: 'var(--font-size-md)',
  color: 'var(--color-neutral-800)',
  padding: 'var(--space-5) 0',
  display: 'block',
}
