# AVS Infra — Website

Official website for **AVS Infra** — built for cleaner air, greener communities and modern living.

## Tech Stack
- [Next.js 16](https://nextjs.org) (App Router) + TypeScript
- Tailwind CSS v4
- Framer Motion (animations)
- Lucide Icons

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure
```
src/
  app/               Pages (App Router) — page.tsx, layout.tsx, not-found.tsx
  components/home/   Home page sections (Navbar, Hero, About, etc.)
public/
  images/            Static assets (logo, etc.)
docs/
  design-system.md          Brand tokens, type, motion & layout patterns
  home-improvements.md      Audit log of design decisions/fixes
  skills/navbar.md          Navbar-specific build rules & lessons learned
```

## Design System
Before building or editing any section, check `docs/design-system.md` — it documents brand colors, typography, spacing rhythm and common pitfalls to keep every page consistent.

## Build
```bash
npm run build
npm start
```

## Pages
- `/` — Home ✅
- `/about`, `/residential`, `/commercial`, `/contact` — planned next

---
Built with Claude.
