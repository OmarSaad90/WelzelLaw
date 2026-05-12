# Welzel Law — Design System Reference

## Color Strategy: Committed
The primary teal carries 40–50% of the surface identity. Gold accents are used surgically — CTAs, hover states, and isolated highlights only. The base is warm white, never sterile.

---

## Color Palette

### Primitive Scale

#### Teal (Primary Brand)
All values in OKLCH. Hue anchor: 192° (slightly blue-leaning teal).

| Token                   | OKLCH                    | Approx Hex  | Usage                        |
|-------------------------|--------------------------|-------------|------------------------------|
| `--color-teal-950`      | `oklch(0.25 0.085 192)`  | `#062D30`   | Deepest text-on-light        |
| `--color-teal-900`      | `oklch(0.32 0.095 192)`  | `#0A4247`   | Footer background            |
| `--color-teal-800`      | `oklch(0.39 0.105 192)`  | `#0C5760`   | Dark section backgrounds     |
| `--color-teal-700`      | `oklch(0.46 0.115 192)`  | `#116B75`   | **Primary brand teal**       |
| `--color-teal-600`      | `oklch(0.53 0.115 192)`  | `#178090`   | Hover on primary elements    |
| `--color-teal-500`      | `oklch(0.61 0.110 192)`  | `#2196A7`   | Mid-range accent             |
| `--color-teal-400`      | `oklch(0.70 0.090 192)`  | `#4AAEBE`   | Light accent, icon fills     |
| `--color-teal-300`      | `oklch(0.79 0.065 192)`  | `#82C8D4`   | Decorative elements          |
| `--color-teal-200`      | `oklch(0.88 0.040 192)`  | `#BCE0E6`   | Subtle tints                 |
| `--color-teal-100`      | `oklch(0.94 0.022 192)`  | `#E0F2F5`   | Washed section backgrounds   |
| `--color-teal-50`       | `oklch(0.97 0.012 192)`  | `#F0F9FA`   | Near-invisible tint          |

#### Gold (Accent / CTA)
Hue anchor: 65° (warm amber-gold).

| Token                   | OKLCH                    | Approx Hex  | Usage                        |
|-------------------------|--------------------------|-------------|------------------------------|
| `--color-gold-900`      | `oklch(0.32 0.090 65)`   | `#3A2400`   | Deep amber text              |
| `--color-gold-800`      | `oklch(0.42 0.115 65)`   | `#6B3E00`   | Rich amber                   |
| `--color-gold-700`      | `oklch(0.52 0.140 65)`   | `#9A5C00`   | Deep gold                    |
| `--color-gold-600`      | `oklch(0.62 0.150 65)`   | `#C47B00`   | Hover on CTA                 |
| `--color-gold-500`      | `oklch(0.72 0.145 65)`   | `#E8960A`   | **Primary accent / CTA**     |
| `--color-gold-400`      | `oklch(0.80 0.120 65)`   | `#F0B444`   | Warm highlight               |
| `--color-gold-300`      | `oklch(0.87 0.085 65)`   | `#F5CC7A`   | Pale gold tint               |
| `--color-gold-200`      | `oklch(0.92 0.055 65)`   | `#F8DFA8`   | Champagne                    |
| `--color-gold-100`      | `oklch(0.96 0.030 65)`   | `#FCF1D6`   | Warm cream background        |
| `--color-gold-50`       | `oklch(0.98 0.015 65)`   | `#FEF8EC`   | Off-white warm               |

#### Neutral (Warm-tinted, hue bias 80°)
Never pure black or white. Every neutral has a subtle warm bias.

| Token                   | OKLCH                    | Approx Hex  | Usage                        |
|-------------------------|--------------------------|-------------|------------------------------|
| `--color-neutral-950`   | `oklch(0.18 0.008 80)`   | `#1C1915`   | **Primary text / ink**       |
| `--color-neutral-900`   | `oklch(0.25 0.008 80)`   | `#29251E`   | Headings on light            |
| `--color-neutral-800`   | `oklch(0.35 0.009 80)`   | `#3D3830`   | Secondary headings           |
| `--color-neutral-700`   | `oklch(0.45 0.010 80)`   | `#554F46`   | Subheadings                  |
| `--color-neutral-600`   | `oklch(0.55 0.010 80)`   | `#6E675D`   | Muted body text              |
| `--color-neutral-500`   | `oklch(0.63 0.009 80)`   | `#847D72`   | Captions, labels             |
| `--color-neutral-400`   | `oklch(0.72 0.008 80)`   | `#9E9890`   | Placeholder text             |
| `--color-neutral-300`   | `oklch(0.81 0.007 80)`   | `#BAB5AE`   | Disabled text                |
| `--color-neutral-200`   | `oklch(0.89 0.006 80)`   | `#D6D2CC`   | Subtle borders               |
| `--color-neutral-100`   | `oklch(0.94 0.006 80)`   | `#ECEAE6`   | Section dividers (sparingly) |
| `--color-neutral-50`    | `oklch(0.97 0.005 80)`   | `#F5F4F1`   | Warm off-white surface       |
| `--color-neutral-25`    | `oklch(0.99 0.004 80)`   | `#FDFCFB`   | **Base background**          |

---

### Semantic Tokens

```
Background:
  --color-bg               → --color-neutral-25     (warm white base)
  --color-bg-subtle        → --color-neutral-50      (alt section bg)
  --color-bg-teal          → --color-teal-100        (teal-washed section)
  --color-bg-dark          → --color-teal-900        (dark footer/hero overlay)

Surface:
  --color-surface          → --color-neutral-25      (card/panel surface)
  --color-surface-raised   → #FFFFFF                 (elevated modals only)

Border:
  --color-border           → --color-neutral-200
  --color-border-strong    → --color-neutral-300

Text:
  --color-text             → --color-neutral-950
  --color-text-muted       → --color-neutral-600
  --color-text-subtle      → --color-neutral-500
  --color-text-inverse     → --color-neutral-25      (on dark backgrounds)
  --color-text-on-teal     → --color-neutral-25

Brand:
  --color-primary          → --color-teal-700
  --color-primary-hover    → --color-teal-800
  --color-primary-deep     → --color-teal-900
  --color-primary-light    → --color-teal-100
  --color-primary-text     → --color-teal-700        (teal-colored text)

Accent:
  --color-accent           → --color-gold-500
  --color-accent-hover     → --color-gold-600
  --color-accent-deep      → --color-gold-700
  --color-accent-light     → --color-gold-100
  --color-accent-text      → --color-gold-700        (gold-colored text on light)
```

---

## Typography

### Font Families
- **Display / Headings:** Playfair Display — loaded from Google Fonts. Weights: 400, 500, 700, 900. Used for all H1–H3, hero text, pull quotes.
- **Body / UI:** DM Sans — loaded from Google Fonts. Weights: 300, 400, 500, 600. Used for body copy, nav, buttons, labels, captions. More refined personality than Inter while staying legible.
- **Mono:** JetBrains Mono — only if code snippets appear. Fallback: monospace system font.

### Type Scale (Fluid — using clamp)
All values scale smoothly between 390px and 1440px viewport widths.

| Token              | Value                                          | Typical Use               |
|--------------------|------------------------------------------------|---------------------------|
| `--font-size-xs`   | `clamp(0.72rem, 0.70rem + 0.11vw, 0.80rem)`   | Legal footnotes, captions |
| `--font-size-sm`   | `clamp(0.85rem, 0.82rem + 0.14vw, 0.94rem)`   | Labels, nav links         |
| `--font-size-base` | `clamp(1rem, 0.97rem + 0.16vw, 1.063rem)`     | Body copy                 |
| `--font-size-md`   | `clamp(1.125rem, 1.06rem + 0.28vw, 1.25rem)`  | Lead paragraphs           |
| `--font-size-lg`   | `clamp(1.25rem, 1.12rem + 0.55vw, 1.563rem)`  | H4, section intros        |
| `--font-size-xl`   | `clamp(1.5rem, 1.28rem + 0.97vw, 2rem)`       | H3                        |
| `--font-size-2xl`  | `clamp(1.875rem, 1.5rem + 1.67vw, 2.625rem)`  | H2                        |
| `--font-size-3xl`  | `clamp(2.25rem, 1.65rem + 2.67vw, 3.5rem)`    | H1 on content pages       |
| `--font-size-4xl`  | `clamp(3rem, 2.0rem + 4.44vw, 5rem)`          | Section hero headings     |
| `--font-size-5xl`  | `clamp(3.75rem, 2.2rem + 6.89vw, 6.75rem)`    | Primary hero text         |
| `--font-size-hero` | `clamp(4rem, 1.5rem + 11.11vw, 9rem)`         | Full-bleed hero overlay   |

### Font Weights
```
--font-weight-light:    300   (body on large screens)
--font-weight-regular:  400   (body default)
--font-weight-medium:   500   (UI labels, nav)
--font-weight-semibold: 600   (subheadings, buttons)
--font-weight-bold:     700   (headings)
--font-weight-black:    900   (hero text, display)
```

### Line Heights
```
--line-height-none:     1
--line-height-tight:    1.1   (large display headings)
--line-height-snug:     1.25  (H2, H3)
--line-height-normal:   1.5   (body copy default)
--line-height-relaxed:  1.65  (long-form body)
--line-height-loose:    1.8   (captions, legal fine print)
```

### Letter Spacing
```
--letter-spacing-tighter: -0.04em  (hero display, very large text)
--letter-spacing-tight:   -0.02em  (headings H2–H3)
--letter-spacing-normal:   0       (body copy)
--letter-spacing-wide:     0.04em  (UI labels)
--letter-spacing-wider:    0.08em  (small caps labels)
--letter-spacing-caps:     0.14em  (eyebrow text, section labels)
```

---

## Spacing

Base unit: 4px (0.25rem). Scale designed for generous editorial rhythm.

| Token           | Value          | px  |
|-----------------|----------------|-----|
| `--space-px`    | `1px`          | 1   |
| `--space-0-5`   | `0.125rem`     | 2   |
| `--space-1`     | `0.25rem`      | 4   |
| `--space-1-5`   | `0.375rem`     | 6   |
| `--space-2`     | `0.5rem`       | 8   |
| `--space-3`     | `0.75rem`      | 12  |
| `--space-4`     | `1rem`         | 16  |
| `--space-5`     | `1.25rem`      | 20  |
| `--space-6`     | `1.5rem`       | 24  |
| `--space-8`     | `2rem`         | 32  |
| `--space-10`    | `2.5rem`       | 40  |
| `--space-12`    | `3rem`         | 48  |
| `--space-14`    | `3.5rem`       | 56  |
| `--space-16`    | `4rem`         | 64  |
| `--space-20`    | `5rem`         | 80  |
| `--space-24`    | `6rem`         | 96  |
| `--space-28`    | `7rem`         | 112 |
| `--space-32`    | `8rem`         | 128 |
| `--space-36`    | `9rem`         | 144 |
| `--space-40`    | `10rem`        | 160 |
| `--space-48`    | `12rem`        | 192 |
| `--space-56`    | `14rem`        | 224 |
| `--space-64`    | `16rem`        | 256 |
| `--space-80`    | `20rem`        | 320 |
| `--space-96`    | `24rem`        | 384 |

### Layout Tokens
```
--section-padding-y:    clamp(5rem, 10vw, 9rem)
--section-padding-x:    clamp(1.5rem, 6vw, 5rem)
--content-max-width:    1280px
--content-narrow:       860px
--reading-width:        68ch
--narrow-width:         46ch
--gutter:               clamp(1rem, 4vw, 3rem)
```

---

## Border Radius

```
--radius-xs:   2px
--radius-sm:   4px
--radius-md:   8px
--radius-lg:   14px
--radius-xl:   22px
--radius-2xl:  36px
--radius-3xl:  56px
--radius-pill: 9999px
```

Law firm principle: keep radii small or zero on formal elements. Use larger radii only on image crops, avatar frames, and organic decorative shapes.

---

## Elevation / Shadows

Shadows use the teal hue base to feel cohesive, not generic grey.

```
--shadow-xs:   0 1px 3px oklch(0.25 0.085 192 / 0.07);
--shadow-sm:   0 2px 8px oklch(0.25 0.085 192 / 0.09);
--shadow-md:   0 4px 20px oklch(0.25 0.085 192 / 0.11),
               0 1px 4px oklch(0.25 0.085 192 / 0.07);
--shadow-lg:   0 8px 36px oklch(0.25 0.085 192 / 0.13),
               0 2px 8px oklch(0.25 0.085 192 / 0.07);
--shadow-xl:   0 16px 60px oklch(0.25 0.085 192 / 0.16),
               0 4px 16px oklch(0.25 0.085 192 / 0.09);
--shadow-hero: 0 32px 96px oklch(0.25 0.085 192 / 0.22);
--shadow-gold: 0 4px 24px oklch(0.72 0.145 65 / 0.28);  (gold glow for CTA buttons)
```

---

## Motion / Transitions

No bounce. No elastic. Expo-out for all reveals. Spring only for hover micro-interactions.

```
--ease-out:       cubic-bezier(0.16, 1, 0.3, 1)     (expo out — primary)
--ease-in:        cubic-bezier(0.7, 0, 0.84, 0)
--ease-in-out:    cubic-bezier(0.83, 0, 0.17, 1)
--ease-spring:    cubic-bezier(0.34, 1.4, 0.64, 1)  (hover lift only)

--duration-instant: 50ms
--duration-fast:    150ms
--duration-base:    250ms
--duration-slow:    400ms
--duration-slower:  650ms
--duration-hero:    950ms

--transition-fast:  150ms cubic-bezier(0.16, 1, 0.3, 1)
--transition-base:  250ms cubic-bezier(0.16, 1, 0.3, 1)
--transition-slow:  400ms cubic-bezier(0.16, 1, 0.3, 1)
```

Framer Motion variants (define in code, not CSS):
- Page entry: fade + translateY(24px) → 0, staggered 0.08s per child
- Section reveal: viewport-triggered, translateY(32px) → 0, duration 0.65s
- Hero text: staggered word/line reveal, duration 0.95s
- CTA button hover: scale(1.02) + shadow-gold, spring ease

---

## Z-Index Scale

```
--z-base:     0
--z-raised:   10
--z-float:    50
--z-sticky:   100
--z-nav:      200
--z-overlay:  300
--z-modal:    400
--z-toast:    500
```

---

## Layout Principles

1. **No section dividers.** Sections bleed into each other via background transitions, overlapping elements, and breathing space — never hr tags or border lines.
2. **Asymmetry is intentional.** Column grids should break deliberately. Headings can hang outside the content column. Images can bleed to the viewport edge.
3. **Variable section depth.** Not every section needs the same padding. Some sections breathe wide (hero, quotes), some are compact (stat rows, nav).
4. **The Toronto skyline lives in the footer.** Dark teal overlay (--color-bg-dark) at ~75% opacity on a Toronto skyline photo. Two-column: firm info left, booking form right.
5. **No modal as first thought.** Consultation booking uses an inline form in the footer section, not a modal popup.

---

## Absolute Bans (per impeccable design laws)
- Side-stripe accent borders on cards or callouts
- Gradient text (`background-clip: text`)
- Glassmorphism used decoratively
- Hero-metric layout (big number, small label, gradient accent)
- Identical card grids — vary size, weight, or layout
- Navy blue + gold as primary palette (different from the committed teal + gold amber here)
- Stock imagery of gavels, scales of justice, courtrooms
- Em dashes — use commas, colons, or parentheses instead
