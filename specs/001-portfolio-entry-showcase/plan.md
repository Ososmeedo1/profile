# Implementation Plan: Portfolio Website Entry & Project Showcase

**Branch**: `[001-portfolio-entry-showcase]` | **Date**: 2026-01-25 | **Spec**: specs/001-portfolio-entry-showcase/spec.md
**Input**: Feature specification from `specs/001-portfolio-entry-showcase/spec.md`

## Summary

Build a responsive portfolio page with an entry loading screen, smooth GSAP animations, a Tailwind-only layout, light/dark mode toggle, and a projects showcase with category filtering. Use Lucide icons only, avoid CDNs/extra deps, and keep code simple and clear.

## Technical Context

**Language/Version**: React 18 (assumed Vite/SPA) + JavaScript/TypeScript; TailwindCSS
**Primary Dependencies**: tailwindcss, gsap (including ScrollTrigger), lucide-react
**Storage**: N/A (static data + in-memory state; theme persisted via localStorage)
**Testing**: Manual functional + lightweight component tests if present
**Target Platform**: Modern browsers (desktop/tablet/mobile)
**Project Type**: Single-page web app
**Performance Goals**: Loader exit ≤3s typical broadband; theme toggle <300ms; filter response <1s; zero layout shift from animations
**Constraints**: No CDNs; minimal deps; Tailwind-only styling; GSAP-only animations; Lucide-only icons; code simplicity and clarity; preserve existing UI patterns
**Scale/Scope**: Small portfolio (dozens of projects max)

## Constitution Check

- UI Preservation: Respect existing layout/spacing/typography patterns; no redesign.
- Tailwind-Only Styling: Use Tailwind utilities (incl. dark: variants); no inline styles or custom CSS.
- GSAP-Only Animations: Use GSAP/ScrollTrigger; respect prefers-reduced-motion.
- Lucide-Only Icons: Icons from lucide-react only.
- Minimal Dependencies / No CDNs: Do not add packages beyond GSAP/Tailwind/Lucide already present; no remote assets.
- Code Simplicity & Clarity: Small, focused components; purposeful comments only.
- Responsive Design: Maintain responsiveness across sm/md/lg/xl/2xl; no overflow.
- High Performance & SEO-First: Semantic structure; avoid layout thrash; headings/alt text; smooth non-blocking animations.

Status: All gates acknowledged; no violations expected.

## Project Structure

### Documentation (this feature)

```
specs/001-portfolio-entry-showcase/
├── spec.md
├── plan.md              # this file
├── research.md          # Phase 0 output (pending)
├── data-model.md        # Phase 1 output (pending)
├── quickstart.md        # Phase 1 output (pending)
├── contracts/           # Phase 1 output (pending)
└── tasks.md             # Phase 2 output (not created by /speckit.plan)
```

### Source Code (assumed single project)

```
src/
├── components/          # Reuse existing patterns; add new functional components
# Implementation Plan: Portfolio Enhancements – Icons, Fonts, Language UI, SEO & Skills

**Branch**: `[001-portfolio-enhancements]` | **Date**: 2026-01-26 | **Spec**: specs/001-portfolio-entry-showcase/spec.md
**Input**: Plan prompt “Portfolio Enhancements Plan – Icons, Fonts, Language UI, SEO & Skills”

## Summary

Implement UI polish across icons, typography, language toggle, SEO titles, and About-page skills while preserving the existing layout, Tailwind utility styling, lucide-only icons, GSAP animations, and RTL/LTR behavior. Self-host Arabic fonts, swap platform-specific icons with generic lucide choices, add per-route page titles with Helmet, and expand skills data without disrupting responsiveness.

## Technical Context

**Language/Version**: React 18 + Vite + JavaScript; TailwindCSS
**Primary Dependencies**: react-router-dom, tailwindcss, lucide-react, gsap; planned addition: react-helmet-async
**Storage**: N/A (static JSON-like data for projects/socials/skills; localStorage for theme and language)
**Testing**: Manual functional smoke tests; no automated test suite present
**Target Platform**: Modern browsers (desktop/tablet/mobile)
**Project Type**: Single-page application portfolio
**Performance Goals**: No regressions to current load; font loading stays non-blocking (WOFF2 first); icon swaps do not increase bundle; Helmet titles update without route lag
**Constraints**: Tailwind-only styling; GSAP-only animations; lucide-only icons; SPA routing via react-router-dom; no CDNs/external assets; local font hosting; minimal deps (justify Helmet)
**Scale/Scope**: Single personal portfolio site (handful of pages/components)

## Constitution Check (Pre-Design)

- UI Preservation (NON-NEGOTIABLE): Keep existing layouts/spacing/typography patterns intact; no redesign.
- Tailwind-Only Styling: Continue using Tailwind utility classes; avoid custom CSS beyond font-face definitions.
- SPA + react-router-dom (NON-NEGOTIABLE): Maintain client routing; no full reloads.
- Bilingual + RTL/LTR (NON-NEGOTIABLE): Preserve LanguageContext toggle, `dir`/`lang` attributes, and localized strings.
- GSAP-Only Animations: Leave existing GSAP usage untouched; no new animation libs.
- Lucide-Only Icons: All icon swaps (code link, language toggle) must use lucide-react.
- Minimal Dependencies / Local Assets (NON-NEGOTIABLE): New dependency only for Helmet; fonts self-hosted (WOFF2/WOFF); no CDNs.
- Performance/SEO/Responsive: No layout shifts; maintain contrast; semantic headings and links; mobile-first spacing.
Status: Gates pass with attention on dependency addition (Helmet) and font hosting to keep bundle lean.

## Project Structure

### Documentation (this feature)

```text
specs/001-portfolio-entry-showcase/
├── plan.md              # this file
├── spec.md
├── checklists/
├── research.md          # Phase 0 output
├── data-model.md        # Phase 1 output
├── quickstart.md        # Phase 1 output
└── contracts/           # Phase 1 output
```

### Source Code (repository root)

```text
src/
├── App.jsx
├── main.jsx
├── index.css
├── data/               # projects, certificates, socials, identity
├── context/LanguageContext.jsx
├── hooks/useTheme.js
├── Components/         # Nav, ThemeToggle, ProjectCard, etc.
├── pages/              # Home, About, Projects, Contact
└── lib/gsap.js

public/
└── fonts/              # main.ttf (existing); add PlaypenSansArabic, Zain (WOFF2/WOFF)
```

**Structure Decision**: SPA with shared data under `src/data`, shared providers/hooks under `src/context` and `src/hooks`, and page-level routes in `src/pages`; static assets (fonts) in `public/fonts` for local hosting.

## Complexity Tracking

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|---------------------------------------|
| Add react-helmet-async (Minimal Dependencies) | Required to set per-route titles for SEO within SPA | Manual `document.title` updates risk drift, race conditions, and duplicated logic across pages |

## Phase 0 – Research Tasks (Resolved in research.md)

- Choose a generic lucide icon for project code links (replace GitHub mark).
- Pick a lucide icon that visually communicates bilingual (Arabic/English) for the language toggle.
- Determine local hosting approach and formats for Playpen Sans Arabic and Zain fonts without CDNs.
- Select Helmet package variant (react-helmet vs react-helmet-async) suitable for React 18 SPA.

## Phase 1 – Design & Contracts Plan

- Icons
  - Swap project card code link to lucide `Code2` (or equivalent) while leaving demo link icon unchanged.
  - Replace language toggle icon with lucide `Languages`, ensuring visibility in light/dark and consistent sizing across desktop/mobile.
- Typography
  - Download Playpen Sans Arabic and Zain (WOFF2 + WOFF) into `public/fonts`; register via `@font-face` in `src/index.css`.
  - Extend Tailwind font families for English vs Arabic; apply via a language-aware wrapper class so all pages/components inherit correctly.
- Social CTA Cleanup
  - Remove `ctaEn`/`ctaAr` from `src/data/socials.js`; verify renderers use `name`/`display` only and keep link behavior intact.
- Page Titles & SEO
  - Install and wrap app with `HelmetProvider`; add per-page `<Helmet>` titles that respect language toggle.
  - Provide a shared helper/hook to derive localized titles to avoid duplication and keep SPA behavior intact.
- Skills Expansion (About page)
  - Introduce structured skills data (group label + skill entries) supporting EN/AR labels; render as text/badges with responsive wrapping.
  - Keep section lightweight (no icons), RTL-friendly, and consistent with existing spacing.
- Component/Data Responsibility
  - Fonts/typography: `index.css` + Tailwind config; language toggle UI: `Components/Nav` + `LanguageContext`; page titles: pages + shared Helmet helper; project link icons: `Components/ProjectCard`; skills data: new `src/data/skills.js` consumed by `pages/About`.
- Contracts
  - Document that no external APIs are introduced; interactions remain client-side. Provide a stub OpenAPI file noting absence of network endpoints for this feature.

## Phase 2 – Build & QA Plan (to execute after design sign-off)

- Implement icon swaps and social data cleanup; verify navigation, filters, and link targets remain unchanged.
- Add fonts to `public/fonts`, register in CSS, and apply language-specific font families; smoke test Arabic/English rendering and responsiveness.
- Integrate Helmet provider and localized titles per route; confirm titles update on route/language change without reload.
- Add skills data + UI to About; test RTL/LTR, mobile wrapping, and minimal styling.
- Regression pass: theme toggle, language toggle, GSAP animations, responsiveness (sm–2xl), and performance (no blocking font loads).

## Constitution Check (Post-Design)

All gates remain satisfied with planned changes: UI/layout preserved; Tailwind utilities remain primary styling; SPA routing unchanged; bilingual support enhanced via fonts/icon only; GSAP untouched; lucide-only icons enforced; new dependency limited to react-helmet-async; assets fully local; responsiveness/SEO kept in scope.
