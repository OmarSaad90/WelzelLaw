import { useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

interface Props {
  children: React.ReactNode
  strength?: number
}

const springCfg = { stiffness: 300, damping: 28, mass: 0.6 }

export default function MagneticButton({ children, strength = 0.32 }: Props) {
  const ref = useRef<HTMLDivElement>(null)

  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const scale = useMotionValue(1)

  const springX = useSpring(x, springCfg)
  const springY = useSpring(y, springCfg)
  const springScale = useSpring(scale, { stiffness: 380, damping: 26 })

  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    x.set((e.clientX - (rect.left + rect.width / 2)) * strength)
    y.set((e.clientY - (rect.top + rect.height / 2)) * strength)
  }

  function onMouseEnter() {
    scale.set(1.04)
  }

  function onMouseLeave() {
    x.set(0)
    y.set(0)
    scale.set(1)
  }

  return (
    <motion.div
      ref={ref}
      style={{ x: springX, y: springY, scale: springScale, display: 'inline-flex' }}
      onMouseMove={onMouseMove}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </motion.div>
  )
}
