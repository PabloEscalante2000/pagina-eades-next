# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server at localhost:3000
npm run build    # Build for static export (outputs to /out)
npm run start    # Start production server (after build)
npm run lint     # Run ESLint
```

## Architecture

This is a **Next.js 16 + React 19** website for EADES, a psychology center in Lima, Peru. It uses TypeScript, Tailwind CSS v4, and is configured for **static export** (`output: "export"` in `next.config.ts`), meaning it generates a static `/out` directory for hosting.

**Key constraints from static export:**
- No server-side rendering at request time — all data must be available at build time or fetched client-side
- `trailingSlash: true` — routes map to `/pagina/index.html`
- Images use `unoptimized: true`

### Route Structure (`/app`)

| Route | Purpose |
|---|---|
| `/inicio` | Main landing page (home) |
| `/quienes-somos` | About page |
| `/servicios` | Services |
| `/evaluaciones` | Psychological evaluations |
| `/blog` | Blog listing |
| `/blog/[slug]` | Individual blog posts (static pages per article) |
| `/test` | Psychological self-tests hub |
| `/test/ansiedad`, `/test/depresion`, `/test/tlp` | Individual tests |
| `/politica-privacidad` | Privacy policy |

The root `/` immediately redirects to `/inicio`.

### Data Layer

All content is stored as static JS/JSON files in `/public/data/`:
- `BlogData.js`, `BlogContentData.js` — blog post metadata and content
- `psicologos.json` — psychologist profiles
- `servicios.json`, `serviciosPsicoterapeuticos.json` — service listings
- `diferencias.json` — differentiators for the home page
- `testAnsiedad.json`, `testDepresion.json`, `testTLP.json`, `testTETP.json` — test questions
- `RespuestaTest.json`, `descriptionTest.json` — test answer scoring/descriptions

### Components

Components are in `/components/`. Several use a **Loader pattern** for dynamic imports to avoid SSR issues:
- `NewNavBarLoader.tsx` → dynamically imports `NewNavBar`
- `BlogContentLoader.tsx` → dynamically imports `BlogContent`

**Firebase integration** (`/config/firebase.js`) handles:
- Firestore: blog comment storage (collection `"comentarios"`)
- Auth: Google sign-in for posting comments (`CommentSection.jsx`)

### Styling

Tailwind CSS v4 with custom design tokens defined in `globals.css` under `@theme`:
- `azul` (#41588e) — primary blue
- `celeste` (#b0c4df) — light blue
- `marroncito` (#f0edea) — beige/cream background

Fonts: Poppins (headings) and Open Sans (body), loaded via `next/font` in `app/fonts.ts`. Classes: `font-poppins`, `font-open-sans`, `font-breathing`.

### Analytics & Marketing

The layout includes: Google Tag Manager, Google Analytics, Meta Pixel — all injected in `app/layout.tsx` via dedicated components.

## Mixed file types

The codebase mixes `.tsx`/`.ts` and `.jsx`/`.js` — both are valid. New components can use either, but prefer `.tsx` for type safety.
