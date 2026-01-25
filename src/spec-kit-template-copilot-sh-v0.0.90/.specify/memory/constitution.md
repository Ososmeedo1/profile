<!--
================================================================================
SYNC IMPACT REPORT
================================================================================
Version change: 1.6.0 → 1.7.0
Bump rationale: MINOR - Added Bilingual support (Arabic/English), updated routing rules, and added RTL/LTR handling.

Modified principles:
  - XII. SPA Architecture & Routing (Refined wording)
  - XIII. Language & Localization (Bilingual) (Renamed & Updated to support Arabic/English)

Added sections:
  - None (Principles updated)

Removed sections:
  - None

Updated sections:
  - Technical & Architectural Constraints (Updates for bilingual support, RTL/LTR, and routing/i18n library constraints)

Templates requiring updates:
  ✅ .specify/templates/plan-template.md - No updates needed
  ✅ .specify/templates/spec-template.md - No updates needed
  ✅ .specify/templates/tasks-template.md - No updates needed
  N/A .specify/templates/commands/ - Directory does not exist

Follow-up TODOs: Implement language toggle, create dictionary/translation logic, and apply RTL styles.
================================================================================
-->

# Portfolio Website Constitution

## Core Principles

### I. UI Preservation (NON-NEGOTIABLE)

The existing user interface, visual identity, layout, spacing, typography, and interaction patterns MUST be preserved.
No changes to design, layout structure, or visual hierarchy are allowed unless explicitly requested.
When in doubt, replicate existing UI patterns rather than introducing new ones.

### II. Codebase-First Development

All work MUST begin by analyzing the existing codebase.
New features or changes MUST follow established component structure, naming conventions, folder organization, and implementation patterns.
Refactoring working code is prohibited unless explicitly requested.

### III. Tailwind-Only Styling

Tailwind CSS is the ONLY permitted styling system.
Existing Tailwind utility classes MUST be reused wherever possible.
Do not introduce inline styles, custom CSS files, or changes to Tailwind configuration unless explicitly instructed.

### IV. Responsive Design (NON-NEGOTIABLE)

The application MUST be fully responsive across all screen sizes, including mobile, tablet, laptop, and large desktop displays.
Tailwind's responsive utilities (`sm`, `md`, `lg`, `xl`, `2xl`) MUST be used consistently with existing responsive patterns.
Existing responsive behavior MUST NOT be broken, and new components MUST adapt gracefully without overflow, clipping, or layout shifts.

### V. High Performance (NON-NEGOTIABLE)

The portfolio MUST prioritize high performance across all devices and network conditions.
Avoid unnecessary re-renders, heavy dependencies, and unused code.
Animations MUST be lightweight and MUST NOT block rendering or user interaction.
Performance optimizations MUST NOT alter the visual appearance or behavior of the UI.

### VI. SEO-First Implementation

All changes MUST consider search engine optimization as a first-class requirement.
Use semantic HTML elements wherever possible.
Ensure proper heading hierarchy, metadata usage, and accessible markup.
Animations MUST NOT interfere with content visibility, indexing, or crawlability.

### VII. GSAP-Only Animations

GSAP is the ONLY permitted animation library.
Animations MUST be subtle, intentional, and consistent with the existing UI.
Do not introduce animations that change layout, spacing, or visual hierarchy.
Prefer opacity, transform, and motion-based animations that do not cause layout reflow.
Animations MUST respect user preferences (e.g., reduced motion) where applicable.

### VIII. Minimal & Intentional Changes

Only changes required to satisfy the current task SHOULD be made.
Speculative improvements, redesigns, or "modernization" efforts are prohibited.
The portfolio MUST remain simple, content-focused, and intentional.

### IX. Lucide-Only Icons

Lucide React is the ONLY permitted icon library.
All icons MUST be sourced from the `lucide-react` package.
Do not introduce Font Awesome, Heroicons, Material Icons, or any other icon libraries.
Icon usage MUST be consistent with existing icon patterns in the codebase.

### X. Minimal Dependencies (NON-NEGOTIABLE)

Only packages required for the current functionality MUST be installed.
Unused packages MUST be removed from the project.
No external links, CDNs, or remotely-hosted assets are permitted.
All required resources (fonts, scripts, styles) MUST be installed locally within the project.
Dependency additions MUST be justified and approved before installation.

### XI. Code Simplicity & Clarity (NON-NEGOTIABLE)

Code MUST remain simple, organized, and easy to navigate.
Prefer small, focused components and functions over complex abstractions.
Comments MUST be intentional and explain purpose or rationale—not restate obvious code.
Folder and file structure MUST stay consistent with existing patterns to preserve maintainability.

### XII. SPA Architecture & Routing (NON-NEGOTIABLE)

The portfolio MUST be implemented as a Single Page Application (SPA).
Client-side navigation MUST use `react-router-dom` only.
No full page reloads are allowed during navigation.
All navigation (navbar links, internal links) MUST use React Router.
Routing MUST preserve performance, SEO, and UI integrity.

### XIII. Language & Localization (Bilingual) (NON-NEGOTIABLE)

The site MUST support two languages only: Arabic (Egyptian dialect / slang) and English.
A language toggle button MUST be provided to switch between Arabic and English.
The language toggle MUST work instantly without page reloads, preserve SPA behavior, and not affect layout stability or performance.
Arabic content SHOULD use Egyptian Arabic tone where appropriate.
Arabic language MUST render using RTL direction; English language MUST render using LTR direction.
Direction switching MUST be handled cleanly using semantic HTML (`dir` attribute) and Tailwind CSS utilities.
Language choice must not break layout, responsiveness, or animations.
Language consistency MUST be maintained across: Navbar, Section titles, Buttons and CTAs, Project descriptions, Footer and contact content.

## Technical & Architectural Constraints

- React functional components are required.
- **SPA client-side routing via `react-router-dom` is mandatory.**
- Tailwind CSS utility-first styling is mandatory.
- **Bilingual support (Arabic/English) with RTL/LTR handling is mandatory.**
- **Language switching MUST be handled internally (no external services, CDNs, or APIs).**
- **Other routing or i18n libraries are prohibited unless explicitly approved.**
- GSAP is the only allowed animation library.
- Lucide React is the only allowed icon library.
- No additional UI, animation, icon, or styling libraries may be introduced **(except react-router-dom)**.
- Only required packages may be installed; unused packages MUST be removed.
- No external links, CDNs, or remotely-hosted resources are permitted.
- Code MUST remain simple, organized, and intentionally commented for clarity.
- Performance, responsiveness, and SEO MUST remain uncompromised.

## Development Workflow

1. Review existing components, UI patterns, and animation behavior before generating code.
2. Align all changes with the Core Principles.
3. Implement the smallest possible change that satisfies the requirement.
4. Verify responsiveness across common breakpoints.
5. Validate performance, animation smoothness, and SEO impact.
6. Avoid unnecessary abstractions or complexity.

## Governance

This constitution supersedes all other conventions, preferences, and informal practices.
All generated code, plans, and recommendations MUST comply with these principles.
If a request conflicts with this constitution, clarification MUST be requested before proceeding.

**Version**: 1.7.0 | **Ratified**: 2026-01-24 | **Last Amended**: 2026-01-25
