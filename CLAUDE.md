# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start dev server (Next.js)
- `npm run build` — production build
- `npm run lint` — ESLint
- No test framework is configured

## Architecture

Next.js 15 App Router personal site for Tehseen Dahya, deployed to Vercel at tehseendahya.com. TypeScript and Tailwind CSS v4, with no component library.

**Content:** typed TS files in `src/content/`:
- `site.ts`: person, links, nav, off-the-clock, places (with lon/lat and stories, drawn on /about)
- `map.ts`: nodes, edges and `columns` (layout order) for the homepage map. An edge must be a real relationship; questions don't need links. The question nodes also feed the "Things I'm trying to figure out" section
- `work.ts`: experience (with start/end months), the project archive with honest `kind`s, and `lessons` (things that broke)
- `writing.ts`: every published post, with theme and `featured`

Case studies are hand-written pages, deliberately not one template.

**Pages:**
- `/`: hero with a photo, the interactive map (`components/map/HeadMap.tsx`), selected work, open questions, writing picks, off the clock
- `/work`: case studies, a filterable timeline and list of everything (`components/work/WorkIndex.tsx`), and the lessons table
- case studies: `/work/clinic-agents`, `/work/palantir` (featured), `/work/rabbithole` (still live, linked from the archive only)
- `/writing`: filterable, with a by-month strip (`components/writing/WritingIndex.tsx`)
- `/about`: prose plus a world map of places. Land is drawn at build time with d3-geo and world-atlas (`components/about/PlacesMap.tsx`); only the pins ship JS
- Old `/projects/*` URLs redirect in `next.config.ts`.

**Design system** (`src/app/globals.css`):
- Engineering-notebook look: `.paper` grid, `.sheet` reading surface, `.prose-notebook` for long-form serif text, `.lettering` condensed headings, `.pen` handwritten notes (Kalam), `.print` taped photos.
- Fonts: Archivo (wdth axis), Source Serif 4, Kalam, all via next/font.
- Gotcha: Tailwind `@theme inline` tokens are NOT runtime CSS vars, so plain CSS must reference the next/font vars (`--font-archivo`, `--font-source-serif`, `--font-kalam`) directly.

**Interactive pieces:** `src/components/work/MessageTrace.tsx` (clinic system walkthrough) and `ContextPath.tsx` (Rabbithole context rule). Both are drawn from the real code; keep them that way.

**Accuracy rule:** every claim must be sourced. See `docs/redesign-audit.md` before changing project copy.

**Local dev gotcha:** the repo lives in iCloud-synced ~/Desktop. If `next dev` hangs silently, run `rm -rf node_modules .next && npm ci`.
