'use client'

import { useLenis } from '../hooks/useLenis'

// Mounts Lenis once for the whole app. Lives in the root layout, so it
// survives client-side navigation instead of re-initialising per page.
export default function SmoothScroll() {
  useLenis()
  return null
}
