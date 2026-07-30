# AVS Infra — Design System (living reference)

Read this before building any new section/page. Keeps every page consistent.

## Brand tokens (globals.css)
- `navy` #12294f, `navy-deep` #0a1b36 — primary dark
- `coral` #e0402f — CTAs, energy accent (from logo)
- `gold` #f0a731 — highlight/hover accent (from logo)
- `sage` #4a6b52 / `sage-light` #b8cbb2 — wellness/breathable-living accent, used sparingly
- `cream` #faf6ef (base bg), `paper` #f3ede1 (secondary section bg)
- `ink` #14181d, `ink-soft` #4a5158 (body text)

## Type
- Display: Fraunces (`font-display`) — headlines, always with restraint (one italic word for warmth)
- Body: Manrope (`font-body`)

## Signature motif
"Breathing glow" — soft pulsing blurred circle (sage/gold), used in Hero, Vision, CTA. This is the ONE recurring visual signature — don't introduce competing signatures per section.

## Section rhythm (avoid dead space — key lesson from v1 review)
- Every section needs BOTH sides of a split layout doing work. Never leave a bare empty column — pair text with a stat/visual/graphic, not blank space.
- Alternate bg tones for rhythm: cream → navy → cream → paper → navy-deep → cream → sage → navy-deep (footer)
- Section vertical padding: py-24 sm:py-32 (standard), don't let a section feel taller than its content warrants — content should fill, not float in a big empty box.

## Components pattern
- Eyebrow: `text-xs font-semibold uppercase tracking-[0.2em]` in sage or gold depending on bg
- Cards: rounded-xl/2xl, hover state flips bg to navy + text to cream (used in Leadership, Values)
- CTAs: pill buttons, coral default → gold on hover

## Common pitfalls (from audit)
1. Don't let a two-column section have one empty/light column — always fill with a visual.
2. Decorative illustrations (skyline, blobs) must align cleanly to section edges, not float awkwardly mid-section.
3. Keep motion consistent: fade+rise on scroll (`y:24→0, opacity`), stagger by ~0.1s per item.
4. Internal links always use `next/link`, not `<a>` (ESLint enforced).
