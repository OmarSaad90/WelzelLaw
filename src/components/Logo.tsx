import { FIRM } from '../data/firm'

interface LogoProps {
  /**
   * 'gold'      = all-gold lockup in the client's exact artwork gold, for dark backgrounds.
   * 'gold-deep' = same lockup in a deeper gold that stays legible on light backgrounds.
   * 'light' = teal wordmark for white backgrounds; 'dark' = white wordmark over dark imagery.
   * 'light' and 'dark' keep the artwork's bright gold on the stairs mark.
   */
  variant?: 'gold' | 'gold-deep' | 'light' | 'dark'
  /** Rendered height in px. Icon and wordmark scale together from this. */
  height?: number
  style?: React.CSSProperties
  className?: string
}

// Stairs mark traced from the client's key-step-logo-gold-only.png (1028×676):
// the artwork is purely axis-aligned, so these 19 rects reproduce it pixel-exact.
const STAIRS_RECTS: ReadonlyArray<readonly [number, number, number, number]> = [
  [564, 0, 464, 40], [664, 100, 268, 40], [564, 40, 40, 172], [284, 212, 320, 40],
  [664, 140, 40, 172], [384, 312, 320, 40], [764, 200, 40, 212], [284, 252, 40, 172],
  [480, 412, 324, 40], [0, 424, 324, 40], [384, 352, 40, 172], [892, 140, 40, 398],
  [480, 452, 40, 86], [100, 524, 324, 40], [480, 538, 452, 40], [988, 40, 40, 596],
  [100, 564, 40, 72], [0, 464, 40, 212], [100, 636, 928, 40],
]

function StairsMark({ height, fill }: { height: number; fill: string }) {
  return (
    <svg viewBox="0 0 1028 676" height={height} aria-hidden="true" style={{ display: 'block', flexShrink: 0 }}>
      {STAIRS_RECTS.map(([x, y, w, h]) => (
        <rect key={`${x}-${y}`} x={x} y={y} width={w} height={h} style={{ fill }} />
      ))}
    </svg>
  )
}

/**
 * Key Step Legal lockup: gold stairs mark + "Key Step / LEGAL" wordmark.
 * The wordmark is live text in the site fonts (Spectral + Manrope) at the
 * client's request, rather than the Bitter/Raleway in the supplied artwork.
 */
export default function Logo({ variant = 'light', height = 38, style, className }: LogoProps) {
  const COLORS = {
    gold:        { mark: 'var(--color-logo-gold)',      wordmark: 'var(--color-logo-gold)' },
    'gold-deep': { mark: 'var(--color-logo-gold-deep)', wordmark: 'var(--color-logo-gold-deep)' },
    light: { mark: 'var(--color-logo-gold)',      wordmark: 'var(--color-primary)' },
    dark:  { mark: 'var(--color-logo-gold)',      wordmark: 'var(--color-neutral-25)' },
  } as const
  const { mark: markColor, wordmark: wordmarkColor } = COLORS[variant]

  return (
    <span
      role="img"
      aria-label={FIRM.name}
      className={className}
      style={{ display: 'inline-flex', alignItems: 'center', gap: height * 0.32, height, ...style }}
    >
      <StairsMark height={height * 0.86} fill={markColor} />
      <span
        aria-hidden="true"
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: wordmarkColor }}
      >
        <span style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 500,
          fontSize: height * 0.62,
          lineHeight: 1,
          letterSpacing: '0.01em',
          whiteSpace: 'nowrap',
        }}>
          Key Step
        </span>
        <span style={{
          fontFamily: 'var(--font-body)',
          fontWeight: 400,
          fontSize: height * 0.27,
          lineHeight: 1,
          letterSpacing: '0.42em',
          marginTop: height * 0.08,
          // letter-spacing trails the last glyph; pull it back so LEGAL centres under Key Step
          marginRight: '-0.42em',
        }}>
          LEGAL
        </span>
      </span>
    </span>
  )
}
