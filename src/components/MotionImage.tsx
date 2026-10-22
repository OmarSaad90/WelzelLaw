'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

// next/image with framer-motion props, for images that animate themselves
// (not just their wrapper). Keeps the DOM identical to the old motion.img.
const MotionImage = motion.create(Image)

export default MotionImage
