# Navbar — Build Skill (read before touching Navbar.tsx)

## Non-negotiables (from real bugs hit in v1-v3)
1. **No `clip-path` animations for mobile drawers.** Buggy/inconsistent across mobile Safari & Chrome — causes "see-through" backgrounds mid-animation. Use plain `opacity` (+ optional small `y`/`scale`) fades only.
2. **Z-index discipline** — three layers, always in this order:
   - Header bar (logo + desktop nav + CTA): `z-40`
   - Mobile drawer panel: `z-50`
   - Toggle button (hamburger/X) AND logo: `z-[70]` — must render on their own stacking layer ABOVE the drawer, or the close button becomes unclickable once the drawer covers it. This is the #1 recurring bug — always double check this after any navbar edit.
3. **Drawer must be a solid, fully opaque background** (`bg-navy-deep`, no transparency, no backdrop-blur) — a translucent drawer lets hero text bleed through and looks broken.
4. **Logo = image only, no wordmark text**, height-constrained (`h-9 sm:h-10 w-auto`) with real intrinsic width/height passed to `next/image` matching the source file's aspect ratio (check actual px via PIL/`file` before hardcoding).
5. **Hamburger = 2 lines animating to X**, pure CSS transform (translate + rotate), not icon-swap components — smoother and avoids icon-library flash/layout shift.
6. **Body scroll lock** while drawer open (`document.body.style.overflow`).
7. Test at 375px width mentally (iPhone SE class) — smallest realistic breakpoint.

## Pattern
```
<header fixed z-40>
  logo (z-70) —— desktop links (lg:flex) —— desktop CTA (lg:flex)
  toggle button (z-70, lg:hidden) — 2-span hamburger, rotates to X
</header>

<AnimatePresence>
  drawer (fixed inset-0 z-50 bg-navy-deep, opacity fade only)
    — centered nav links, staggered fade-up
    — CTA + contact info at bottom
</AnimatePresence>
```

## Logo handling (critical — recurring bug source)
1. **Always verify transparency programmatically before using a logo asset** — many client-supplied logos are exported with a near-white "matte" baked into RGB with an almost-opaque alpha (e.g. 229/255), which LOOKS transparent in a preview tool but shows a visible white box on a dark navbar. Check with PIL: `im.convert('RGBA'); im.getpixel((0,0))` — if corner alpha isn't 0, fix it (threshold near-white pixels to alpha 0, keep true logo colors at alpha 255).
2. **Never overwrite an image file at the same path/filename** if it's rendered through `next/image` — the Next.js image optimizer caches by URL, so a content change under the same filename can keep serving the stale cached (broken) version. Always bump the filename (`logo.png` → `logo-v2.png`) when replacing a broken asset, and update every reference.
3. Confirm actual pixel dimensions of the source file before setting `width`/`height` on `next/image` (mismatched aspect ratio stretches the logo).

## Interactive-state contrast rule
Any icon/element whose color depends on "am I on a light or dark background" must be driven by the ACTUAL current background of its container, not a proxy variable. Bug hit: hamburger icon used the same `dark` flag for both scrolled-header (light bg) and open-drawer (dark bg) states — those are opposite backgrounds, so one state always had near-invisible contrast. Fix: derive icon color from `scrolled && !open` (light bg only when scrolled AND drawer closed); the drawer background is always dark, so icon is always cream while open.

## Mobile touch feedback
Touch devices don't have `:hover` — always pair `hover:` utilities with `active:` (and ideally identical values) on any tappable row/button so there's visible feedback on tap, not just desktop mouse-over.

- [ ] Close button clickable in every state (test by opening then tapping X)
- [ ] Drawer fully opaque — zero background bleed-through at any animation frame
- [ ] Logo visible & correctly proportioned on mobile (not stretched/squished)
- [ ] No layout shift when toggling
- [ ] Desktop nav untouched/unaffected by mobile drawer code
