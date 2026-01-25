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
├── data/                # Static data (projects, certificates)
├── hooks/               # Theme hook if present (or implement locally)
├── pages/ or App.tsx    # Main composition
└── assets/              # Local images/placeholders (no CDNs)
```

**Structure Decision**: Single-page web app; add components under src/components and static data under src/data to match existing conventions.

## Complexity Tracking

No constitution violations; minimal-change approach.

## Component Breakdown

- `LoadingScreen`: Full-screen minimal loader; GSAP intro/outro; waits for critical readiness.
- `Navbar`: Links to sections (About, Projects, Certificates, Contact); theme toggle (Lucide icons); responsive layout.
- `ProjectsSection`: Renders filters and grid of `ProjectCard` items; manages filtered list.
- `ProjectCard`: Shows name, category, demo/code links, image/placeholder; GSAP scroll animation; light/dark styles.
- `AboutSection`: Short profile text; semantic section.
- `CertificatesSection`: Grid/list of certificate placeholders/links; responsive.
- `ContactSection`: Name, email, social links; semantic forms/links.
- `Footer`: Name, contact info; consistent spacing; light/dark ready.
- `ThemeToggle`: (If split) encapsulates theme button using Lucide Sun/Moon; consumes theme state.
- `Layout`/`Main`: Composes sections, applies theme class, hosts loader.

## State & Data Management

- Projects data: static array (name, category, demoLink, codeLink, imageSrc?, description?). Store in `src/data/projects.ts`. Categories: "All", "Frontend", "Backend".
- Filtering: `useState` for activeCategory; derived filtered list via `useMemo` or inline filter; default "All".
- Theme: `useState`/`useEffect` with localStorage key (e.g., `theme`); initialize from system prefers-color-scheme; apply root `classList` (`dark`). Expose via context or top-level hook; keep minimal.
- Loading readiness: trigger loader exit after main content/images/data ready; optionally `useEffect` with `Promise.all` of image preloads; ensure timeout fallback to avoid hang.

## Styling Approach

- Tailwind utilities only; reuse existing spacing/typography patterns.
- Responsive: use `sm/md/lg/xl/2xl` for grids (Projects/Certs), nav layout, padding.
- Dark mode: Tailwind `dark:` variants on backgrounds, text, borders; ensure contrast for links/buttons.
- Cards: consistent shadow/border radius per existing patterns; placeholders for missing images.

## Animations (GSAP-only)

- Loading Screen: GSAP timeline for fade/scale; exit triggers when ready flag set; ensure `display` removal after animation.
- Navbar/Sections: On load, subtle fade/slide for header; use `prefers-reduced-motion` check to skip.
- Project Cards: GSAP + ScrollTrigger for staggered fade/translate; guard for reduced motion; no layout shift (use transform/opacity only).
- Smooth Scroll: Use native `scrollBehavior: 'smooth'` or GSAP ScrollToPlugin (already in gsap package) without new deps.
- Performance: Avoid animating layout properties; kill ScrollTriggers on unmount.

## SEO & Accessibility

- Semantics: `<header>` for navbar, `<main>` for sections, `<section>` with `aria-label` for About/Projects/Certificates/Contact, `<footer>` for footer, `<article>` for project cards.
- Headings: Maintain hierarchy (h1 for hero/brand, h2 for sections, h3 for card titles).
- Images: `alt` text or placeholder label; avoid empty alt unless decorative.
- Nav: `aria-label` on nav; focus styles maintained; links use `rel="noreferrer"` when opening new tabs.
- Reduced motion: honor `prefers-reduced-motion` and provide non-animated visibility.

## Technical Constraints

- React functional components only; keep functions small.
- Tailwind CSS for styling; no custom CSS files; no inline styles unless unavoidable.
- GSAP for all animations (core + ScrollTrigger/ScrollTo from gsap package only).
- Lucide React for all icons (theme toggle, nav if needed).
- No extra dependencies or CDNs; use local assets/placeholders.
- Code must remain simple, organized, intentionally commented for non-obvious logic.

## Step-by-Step Implementation Plan

1) **Baseline & Theme State**
   - Add theme hook/context with localStorage + system preference fallback; apply `document.documentElement.classList` for `dark`.
   - Prepare reduced-motion flag helper for animations.

2) **Loading Screen**
   - Implement `LoadingScreen` with minimal Tailwind styling; GSAP intro/outro timeline; exit when `contentReady` flag true with timeout safeguard.
   - Integrate in App/Layout; gate main content visibility until loader exit sequence starts.

3) **Layout & Navbar**
   - Build `Navbar` with links (About, Projects, Certificates, Contact) and `ThemeToggle` (Lucide Sun/Moon); sticky/top spacing per existing patterns.
   - Wire smooth scroll (native or GSAP ScrollTo); ensure focus/keyboard support.

4) **Sections**
   - About: concise text block; responsive spacing.
   - Projects: static data source; category pill buttons (All/Frontend/Backend); filtered render; empty state.
   - ProjectCard: name, category badge, demo/code links (new tab), image/placeholder; Tailwind for light/dark; GSAP ScrollTrigger for reveal.
   - Certificates: placeholder grid/list with responsive wrapping; optional links/images.
   - Contact: name/email/social links; semantic markup; responsive columns/stack.

5) **Footer**
   - Minimal footer with name/contact; light/dark variants; consistent padding.

6) **Animations Integration**
   - Register ScrollTrigger/ScrollTo once; create reusable hook/helper for card reveals and section fade-ins; no layout-shifting transforms.
   - Honor reduced motion by skipping timelines and setting end states instantly.

7) **Responsive & SEO Pass**
   - Verify layouts at sm/md/lg/xl/2xl; ensure no horizontal scroll; check tab order.
   - Confirm headings hierarchy, aria labels, alt text, and link semantics.

8) **Performance & Clean-up**
   - Ensure animations are killed on unmount; avoid unnecessary re-renders (memoize static data).
   - Verify bundle has no new deps; ensure no CDN usage; images local/placeholders.

## Success Criteria

- Modular components (loader, navbar, sections, cards, footer) are reusable and clear.
- Project filtering works correctly for All/Frontend/Backend with empty state handled.
- GSAP animations are smooth, subtle, non-blocking, and respect reduced motion; no layout shift.
- Light/dark mode applies across all sections and persists user choice.
- Performance, responsiveness, and SEO remain uncompromised; semantic markup with proper headings and alt text.
