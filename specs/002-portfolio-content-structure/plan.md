# Implementation Plan: Portfolio Website Page Structure & Navigation (SPA)

**Feature Branch**: `002-portfolio-content-structure`
**Status**: Draft
**Aligned Constitution**: v1.7.0 (SPA via react-router-dom, bilingual AR/EN with RTL/LTR, Tailwind-only, Lucide-only, GSAP-only)

## Objectives
- Establish SPA routing with `react-router-dom` (no full reloads).
- Provide a summary-focused Home page linking to full pages (About, Skills, Projects, Certificates, Contact).
- Default language = Arabic (Egyptian dialect) on first load; allow toggle to English and persist across navigation.
- Keep layout responsive, performant, and SEO-friendly; preserve existing UI patterns.

## Constraints (from Constitution)
- React functional components only; Tailwind utility styling only.
- Routing: `react-router-dom` ONLY; no other routing/i18n libs; no external services/CDNs.
- Animations (optional): GSAP only, respect reduced motion, avoid layout shifts.
- Icons: Lucide React only.
- RTL/LTR must switch cleanly with language toggle; Arabic default.

## Page & Route Structure (SPA)
- Routes (all client-side):
  - `/` → Home (summary/overview)
  - `/about` → About (includes Skills + Certificates + YouTube link area)
  - `/projects` → Projects (full list + filtering All/Frontend/Backend)
  - `/contact` → Contact (WhatsApp, LinkedIn, GitHub, Email)
- Navigation entry points:
  - Navbar links to `/`, `/about`, `/projects`, `/contact` (React Router `<Link>` or `useNavigate`, no anchors triggering reload).
  - "More"/"View more" buttons inside Home summary sections navigate to their respective routes.
- No full page reloads; navigation must preserve UI state and language selection.

## Home (Summary) Page Plan
- Purpose: high-level snapshots + CTA to full pages.
- Sections (summaries):
  - About summary: short intro, university/major snippet, country/dob snippet + "More" → `/about`.
  - Skills summary: show top categories/handful of skills (both languages) + "More" → `/about#skills` or `/about` (section anchor via hash/scroll inside About page).
  - Projects summary: show 3-4 highlighted projects (mix Frontend/Backend) + "View all" → `/projects`.
  - Certificates summary: list 2 items + "More" → `/about#certificates` or `/about` with scroll.
  - Contact summary: brief CTA + buttons for WhatsApp/LinkedIn/GitHub/Email → `/contact`.
- Data reuse: summaries derived from the same data sources used by full pages (slice or map), avoid duplication.

## About Page Plan
- Content placeholders: short bio, university name, major/field, date of birth, country.
- Includes embedded sections:
  - Skills (full list grouped as per Skills spec). If using anchors, expose `id="skills"` for deep links.
  - Certificates (full list of 5) with external links; `id="certificates"` for deep links.
  - YouTube channel link placement (external, opens new tab).
- Language/RTL: headers translated; body text supports AR/EN; `dir`/Tailwind classes adapt.

## Projects Page Plan
- Renders all 8 projects (5 Frontend, 3 Backend) from shared data.
- Filtering: client-side, options All/Frontend/Backend; no API calls.
- Links: Demo/Code open in new tabs; Lucide icons if used.
- Access: Navbar link + Home summary CTA; no reloads.

## Contact Page Plan
- Links/fields: WhatsApp (wa.me), LinkedIn, GitHub, Email (mailto).
- Icons: Lucide only; open external profiles in new tabs.
- Accessible labels; consistent styling with existing UI.

## Language & Direction Plan
- Default language: Arabic on first load.
- State init: check stored preference (localStorage); else default Arabic; set `dir` (rtl for AR, ltr for EN) at root/container.
- Toggle: global Language Toggle component (shared) updates language state; no page reload; state persists across routes.
- Text resources: bilingual strings for nav labels, section titles, buttons, and summaries; technical terms may remain English if standard.

## Component Responsibilities
- **App Router**: define routes; wrap with Language/Theme providers; set `dir` on root based on language state.
- **Navbar**: React Router links; language toggle; theme toggle; respects RTL/LTR.
- **HomeSummary**: composes summary blocks (About, Skills, Projects, Certificates, Contact) using shared data slices; CTA buttons navigate via router.
- **AboutPage**: full bio + Skills + Certificates + YouTube link; exposes anchors for in-page scroll.
- **ProjectsPage**: full grid + filter pills; reuses shared ProjectCard.
- **ContactPage**: social/contact links with Lucide icons.
- **Shared Data**: projects data, certificates list, skills categories; reused by both summary and full pages to avoid duplication.

## Data Strategy (summaries vs full)
- Centralize data in `src/data/` modules (projects, certificates, skills, contact links).
- Summary sections consume slices (e.g., first N items) or flagged highlights from the same data.
- Avoid duplicate literals by exporting structured objects used across pages.

## Risks / Mitigations
- **RTL/LTR drift**: Ensure `dir` updates on language change; test both directions on all pages.
- **Navigation reloads**: Use `<Link>`/`useNavigate`; audit anchors to avoid full reloads.
- **Duplication**: Enforce data reuse from shared modules; no hard-coded summary copies.
- **Performance**: Keep animations minimal; guard GSAP with reduced-motion.

## Success Criteria
- SPA navigation via `react-router-dom` with no reloads; navbar and "More" links route correctly.
- Home shows concise summaries linking to full pages.
- Default language Arabic; toggle to English persists across routes; RTL/LTR respected sitewide.
- About/Projects/Contact pages have defined content responsibilities and use shared data.
- Plan remains Constitution-compliant (React/Tailwind/Lucide/GSAP-only; no extra deps).

# Identity Enhancements – Owner Name & CV Link

## Objectives
- Place owner full name consistently (Navbar brand, About info block, Contact section) with AR/EN support and RTL/LTR awareness.
- Add a CV link on About page (download or view) with bilingual label, no external CDNs/viewers, and no layout/perf impact.

## Placement Plan
- **Navbar**: Use owner name as brand text (no logo swap); localize label if needed; ensure visibility on all routes.
- **About Page**: In personal info block, show owner name alongside university, major, country, DOB. Add a clearly labeled CV link/button (AR/EN) that opens local file or internal view route; keep spacing consistent.
- **Contact Page**: Repeat owner name near contact methods to reinforce ownership; bilingual label; responsive alignment.

## Navigation & Accessibility
- Use React Router `<Link>` for internal routes; if CV is a file, use local asset with `download` or `target="_blank"` (no external hosts).
- Ensure CV link and any name link/button are keyboard-focusable with bilingual `aria-label`.
- Keep layouts responsive; avoid interfering with Navbar interactions or animations.

## Component Responsibilities
- **Data**: Centralize owner identity and CV metadata in `src/data/identity.js` (nameAr, nameEn, cvUrl, cvLabelAr, cvLabelEn).
- **Navbar**: Consume identity data for brand text; no duplication.
- **About Page**: Consume identity + CV metadata; render CV link with bilingual label; respect language/dir state.
- **Contact Page**: Display owner name from shared identity data near contact methods.

## Language & Direction
- Default Arabic; toggle to English via existing language provider. Apply `dir` at root; ensure name/CV elements use Tailwind utilities that align under RTL/LTR.
- Text strings for name label and CV label sourced from bilingual copy (identity data).

## Constraints
- React functional components; Tailwind-only; Lucide icons if any; GSAP optional subtle animations; no new dependencies; no external CDNs or document viewers.

## Success Criteria (Identity/CV)
- Owner name visible and consistent in Navbar, About, Contact under both AR/EN and RTL/LTR.
- CV link present on About, bilingual-labeled, uses local file or internal view without third-party viewers.
- No added dependencies; Constitution compliance maintained.
