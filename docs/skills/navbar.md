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

## Checklist before marking navbar "done"
- [ ] Close button clickable in every state (test by opening then tapping X)
- [ ] Drawer fully opaque — zero background bleed-through at any animation frame
- [ ] Logo visible & correctly proportioned on mobile (not stretched/squished)
- [ ] No layout shift when toggling
- [ ] Desktop nav untouched/unaffected by mobile drawer code
