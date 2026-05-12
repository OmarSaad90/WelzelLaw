/**
 * Welzel Law — Design Tokens (TypeScript)
 * Mirrors tokens.css for use in Framer Motion variants,
 * dynamic styles, and Tailwind config extension.
 */

// ---------------------------------------------------------------------------
// COLORS — Primitive scale
// ---------------------------------------------------------------------------

export const teal = {
  950: "oklch(0.25 0.085 192)",
  900: "oklch(0.32 0.095 192)",
  800: "oklch(0.39 0.105 192)",
  700: "oklch(0.46 0.115 192)",
  600: "oklch(0.53 0.115 192)",
  500: "oklch(0.61 0.110 192)",
  400: "oklch(0.70 0.090 192)",
  300: "oklch(0.79 0.065 192)",
  200: "oklch(0.88 0.040 192)",
  100: "oklch(0.94 0.022 192)",
  50:  "oklch(0.97 0.012 192)",
} as const;

export const gold = {
  900: "oklch(0.32 0.090 65)",
  800: "oklch(0.42 0.115 65)",
  700: "oklch(0.52 0.140 65)",
  600: "oklch(0.62 0.150 65)",
  500: "oklch(0.72 0.145 65)",
  400: "oklch(0.80 0.120 65)",
  300: "oklch(0.87 0.085 65)",
  200: "oklch(0.92 0.055 65)",
  100: "oklch(0.96 0.030 65)",
  50:  "oklch(0.98 0.015 65)",
} as const;

export const neutral = {
  950: "oklch(0.18 0.008 80)",
  900: "oklch(0.25 0.008 80)",
  800: "oklch(0.35 0.009 80)",
  700: "oklch(0.45 0.010 80)",
  600: "oklch(0.55 0.010 80)",
  500: "oklch(0.63 0.009 80)",
  400: "oklch(0.72 0.008 80)",
  300: "oklch(0.81 0.007 80)",
  200: "oklch(0.89 0.006 80)",
  100: "oklch(0.94 0.006 80)",
  50:  "oklch(0.97 0.005 80)",
  25:  "oklch(0.99 0.004 80)",
} as const;

export const colors = { teal, gold, neutral } as const;

// ---------------------------------------------------------------------------
// COLORS — Semantic aliases
// ---------------------------------------------------------------------------

export const semantic = {
  bg:           neutral[25],
  bgSubtle:     neutral[50],
  bgTeal:       teal[100],
  bgDark:       teal[900],
  bgDeeper:     teal[950],

  surface:      neutral[25],
  surfaceWarm:  gold[50],

  border:       neutral[200],
  borderStrong: neutral[300],
  borderTeal:   teal[200],

  text:         neutral[950],
  textMuted:    neutral[600],
  textSubtle:   neutral[500],
  textInverse:  neutral[25],
  textOnDark:   neutral[25],

  primary:      teal[700],
  primaryHover: teal[800],
  primaryDeep:  teal[900],
  primaryLight: teal[100],
  primaryText:  teal[700],

  accent:       gold[500],
  accentHover:  gold[600],
  accentDeep:   gold[700],
  accentLight:  gold[100],
  accentText:   gold[700],
} as const;

// ---------------------------------------------------------------------------
// TYPOGRAPHY
// ---------------------------------------------------------------------------

export const fonts = {
  display: "'Playfair Display', 'Georgia', serif",
  body:    "'DM Sans', 'system-ui', sans-serif",
  mono:    "'JetBrains Mono', 'Courier New', monospace",
} as const;

export const fontSizes = {
  xs:   "clamp(0.72rem, 0.70rem + 0.11vw, 0.80rem)",
  sm:   "clamp(0.85rem, 0.82rem + 0.14vw, 0.94rem)",
  base: "clamp(1rem, 0.97rem + 0.16vw, 1.063rem)",
  md:   "clamp(1.125rem, 1.06rem + 0.28vw, 1.25rem)",
  lg:   "clamp(1.25rem, 1.12rem + 0.55vw, 1.563rem)",
  xl:   "clamp(1.5rem, 1.28rem + 0.97vw, 2rem)",
  "2xl": "clamp(1.875rem, 1.5rem + 1.67vw, 2.625rem)",
  "3xl": "clamp(2.25rem, 1.65rem + 2.67vw, 3.5rem)",
  "4xl": "clamp(3rem, 2.0rem + 4.44vw, 5rem)",
  "5xl": "clamp(3.75rem, 2.2rem + 6.89vw, 6.75rem)",
  hero:  "clamp(4rem, 1.5rem + 11.11vw, 9rem)",
} as const;

export const fontWeights = {
  light:    300,
  regular:  400,
  medium:   500,
  semibold: 600,
  bold:     700,
  black:    900,
} as const;

export const lineHeights = {
  none:    1,
  tight:   1.1,
  snug:    1.25,
  normal:  1.5,
  relaxed: 1.65,
  loose:   1.8,
} as const;

export const letterSpacing = {
  tighter: "-0.04em",
  tight:   "-0.02em",
  normal:  "0",
  wide:    "0.04em",
  wider:   "0.08em",
  caps:    "0.14em",
} as const;

// ---------------------------------------------------------------------------
// SPACING
// ---------------------------------------------------------------------------

export const space = {
  px:  "1px",
  0.5: "0.125rem",
  1:   "0.25rem",
  1.5: "0.375rem",
  2:   "0.5rem",
  3:   "0.75rem",
  4:   "1rem",
  5:   "1.25rem",
  6:   "1.5rem",
  8:   "2rem",
  10:  "2.5rem",
  12:  "3rem",
  14:  "3.5rem",
  16:  "4rem",
  20:  "5rem",
  24:  "6rem",
  28:  "7rem",
  32:  "8rem",
  36:  "9rem",
  40:  "10rem",
  48:  "12rem",
  56:  "14rem",
  64:  "16rem",
  80:  "20rem",
  96:  "24rem",
} as const;

export const layout = {
  sectionPaddingY:  "clamp(5rem, 10vw, 9rem)",
  sectionPaddingX:  "clamp(1.5rem, 6vw, 5rem)",
  contentMaxWidth:  "1280px",
  contentNarrow:    "860px",
  readingWidth:     "68ch",
  narrowWidth:      "46ch",
  gutter:           "clamp(1rem, 4vw, 3rem)",
  navHeight:        "clamp(4rem, 6vw, 5.5rem)",
} as const;

// ---------------------------------------------------------------------------
// BORDER RADIUS
// ---------------------------------------------------------------------------

export const radius = {
  xs:   "2px",
  sm:   "4px",
  md:   "8px",
  lg:   "14px",
  xl:   "22px",
  "2xl": "36px",
  "3xl": "56px",
  pill: "9999px",
} as const;

// ---------------------------------------------------------------------------
// SHADOWS
// ---------------------------------------------------------------------------

export const shadows = {
  xs:   "0 1px 3px oklch(0.25 0.085 192 / 0.07)",
  sm:   "0 2px 8px oklch(0.25 0.085 192 / 0.09)",
  md:   "0 4px 20px oklch(0.25 0.085 192 / 0.11), 0 1px 4px oklch(0.25 0.085 192 / 0.07)",
  lg:   "0 8px 36px oklch(0.25 0.085 192 / 0.13), 0 2px 8px oklch(0.25 0.085 192 / 0.07)",
  xl:   "0 16px 60px oklch(0.25 0.085 192 / 0.16), 0 4px 16px oklch(0.25 0.085 192 / 0.09)",
  hero: "0 32px 96px oklch(0.25 0.085 192 / 0.22)",
  gold: "0 4px 24px oklch(0.72 0.145 65 / 0.30)",
} as const;

// ---------------------------------------------------------------------------
// MOTION — for direct use in Framer Motion
// ---------------------------------------------------------------------------

export const easings = {
  out:    [0.16, 1, 0.3, 1]   as [number, number, number, number],
  in:     [0.7, 0, 0.84, 0]   as [number, number, number, number],
  inOut:  [0.83, 0, 0.17, 1]  as [number, number, number, number],
  spring: [0.34, 1.4, 0.64, 1] as [number, number, number, number],
} as const;

export const durations = {
  instant: 0.05,
  fast:    0.15,
  base:    0.25,
  slow:    0.40,
  slower:  0.65,
  hero:    0.95,
} as const;

/** Ready-made Framer Motion transition objects */
export const transitions = {
  fast:  { duration: durations.fast,   ease: easings.out },
  base:  { duration: durations.base,   ease: easings.out },
  slow:  { duration: durations.slow,   ease: easings.out },
  hero:  { duration: durations.hero,   ease: easings.out },
  spring: { duration: durations.slow,  ease: easings.spring },
} as const;

/** Reusable Framer Motion variants */
export const motionVariants = {
  fadeUp: {
    hidden:  { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: transitions.slow },
  },
  fadeIn: {
    hidden:  { opacity: 0 },
    visible: { opacity: 1, transition: transitions.base },
  },
  stagger: {
    hidden:  {},
    visible: { transition: { staggerChildren: 0.08 } },
  },
  heroText: {
    hidden:  { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: transitions.hero },
  },
  scaleIn: {
    hidden:  { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: transitions.slow },
  },
} as const;

// ---------------------------------------------------------------------------
// Z-INDEX
// ---------------------------------------------------------------------------

export const zIndex = {
  base:    0,
  raised:  10,
  float:   50,
  sticky:  100,
  nav:     200,
  overlay: 300,
  modal:   400,
  toast:   500,
} as const;
