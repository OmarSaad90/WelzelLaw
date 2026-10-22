'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

// Animated internal link: framer-motion props + Next.js client-side navigation.
// Use for internal hrefs only; external links stay as motion.a.
const MotionLink = motion.create(Link)

export default MotionLink
