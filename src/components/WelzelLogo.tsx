interface WelzelLogoProps {
  variant?: 'light' | 'dark'
  height?: number
  style?: React.CSSProperties
  className?: string
}

export default function WelzelLogo({
  variant = 'light',
  height = 38,
  style,
  className,
}: WelzelLogoProps) {
  const isDark = variant === 'dark'

  const wordmark  = isDark ? '#E0F2F5' : '#116B75'   // teal-200 on dark, teal-700 on light
  const sublabel  = isDark ? '#82C8D4' : '#3D3830'   // teal-300 on dark, neutral-800 on light

  return (
    <svg
      viewBox="0 0 200 40"
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Welzel Law"
      role="img"
      style={{ display: 'block', ...style }}
      className={className}
    >
      {/* Teal block */}
      <rect x="0" y="0" width="44" height="40" rx="2" fill="#116B75" />

      {/* W lettermark — thin geometric strokes, white on teal */}
      <polyline
        points="6,8 14,32 22,19 30,32 38,8"
        fill="none"
        stroke="white"
        strokeWidth="3.2"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />

      {/* WELZEL LAW */}
      <text
        x="56"
        y="22"
        fontFamily="'DM Sans', system-ui, sans-serif"
        fontSize="18"
        fontWeight="600"
        letterSpacing="1.1"
        fill={wordmark}
      >
        WELZEL LAW
      </text>

      {/* TORONTO */}
      <text
        x="57"
        y="35"
        fontFamily="'DM Sans', system-ui, sans-serif"
        fontSize="11"
        fontWeight="400"
        letterSpacing="1.8"
        fill={sublabel}
      >
        TORONTO
      </text>
    </svg>
  )
}
