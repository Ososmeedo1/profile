---

description: "Tasks for Portfolio Website Entry & Project Showcase"
---

# Tasks: Portfolio Website Entry & Project Showcase

**Input**: Design documents from `specs/001-portfolio-entry-showcase/`
**Prerequisites**: plan.md (required), spec.md (required), research.md (optional), data-model.md (optional), contracts/ (optional)

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: User story label (US1, US2, US3)
- Include exact file paths in descriptions

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Ensure environment, dependencies, and baseline configuration respect the constitution.

- [x] T001 Verify dependencies (tailwindcss, gsap, lucide-react) present; remove unused packages in package.json
- [x] T002 Confirm Tailwind dark mode config uses `class` strategy in tailwind.config.js
- [x] T003 Ensure root entry (src/main.tsx or src/main.jsx) applies Tailwind base styles and can host theme class on `document.documentElement`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core state, data, and utilities required before any user story work.

- [x] T004 Create theme hook/context with localStorage + system fallback in src/hooks/useTheme.ts
- [x] T005 Add reduced-motion helper (prefers-reduced-motion) in src/hooks/usePrefersReducedMotion.ts
- [x] T006 Create projects data source with category tags and local placeholders in src/data/projects.ts
- [x] T007 Scaffold semantic layout shell with section anchors (About, Projects, Certificates, Contact) in src/App.tsx
- [x] T008 Register GSAP core + ScrollTrigger/ScrollTo helper in src/lib/gsap.ts

---

## Phase 3: User Story 1 - Seamless Entry & Navigation (Priority: P1) 🎯 MVP

**Goal**: Users see a minimal loading screen, then navigate via navbar to all sections with smooth scroll.
**Independent Test**: Load site (mobile/desktop); loader exits when content ready; navbar links smooth-scroll to each section without layout shift.

- [x] T009 [US1] Implement LoadingScreen component with GSAP intro/outro in src/components/LoadingScreen.tsx
- [x] T010 [US1] Gate main render with loader ready flag and remove loader after animation in src/App.tsx
- [x] T011 [P] [US1] Build Navbar with section links (About, Projects, Certificates, Contact) in src/components/Navbar.tsx
- [x] T012 [P] [US1] Add smooth scroll behavior using GSAP ScrollTo (or native) in src/components/Navbar.tsx
- [x] T013 [P] [US1] Add basic About/Certificates/Contact section content blocks with semantic tags in src/components/AboutSection.tsx, src/components/CertificatesSection.tsx, src/components/ContactSection.tsx

---

## Phase 4: User Story 2 - Browse & Filter Projects (Priority: P2)

**Goal**: Users filter projects by category and open demo/code links from cards.
**Independent Test**: Select each category (All/Frontend/Backend) and verify only matching projects render; demo/code links open correctly.

- [x] T014 [P] [US2] Create ProjectCard with name, category badge, demo/code links, image/placeholder in src/components/ProjectCard.tsx
- [x] T015 [P] [US2] Implement ProjectsSection with filter pills (All/Frontend/Backend) and derived filtered list in src/components/ProjectsSection.tsx
- [x] T016 [P] [US2] Add GSAP ScrollTrigger stagger reveal for project cards with reduced-motion guard in src/components/ProjectsSection.tsx
- [x] T017 [P] [US2] Handle empty-category state with layout-preserving placeholder in src/components/ProjectsSection.tsx
- [x] T018 [US2] Wire ProjectsSection into main layout with data import; ensure demo/code links open in new tabs in src/App.tsx

---

## Phase 5: User Story 3 - Light/Dark Mode Toggle (Priority: P3)

**Goal**: Users toggle light/dark themes; choice persists and applies across all sections.
**Independent Test**: Toggle theme and verify all sections/cards/footer swap palettes without layout shift; reload preserves selection.

- [x] T019 [P] [US3] Implement ThemeToggle using Lucide Sun/Moon and theme hook in src/components/ThemeToggle.tsx
- [x] T020 [US3] Apply light/dark Tailwind variants across Navbar, LoadingScreen, ProjectsSection, About/Certificates/Contact, Footer in their component files
- [x] T021 [P] [US3] Persist and hydrate theme before paint (localStorage + system fallback) in src/hooks/useTheme.ts
- [x] T022 [US3] Ensure images/placeholders and badges remain legible in dark mode in src/data/projects.ts and ProjectCard styling

---

## Final Phase: Polish & Cross-Cutting

- [x] T023 Verify semantic structure (header/main/section/article/footer), heading hierarchy, and aria-labels; add alt text for images in component files
- [x] T024 Validate reduced-motion path: skip GSAP timelines and set end states when prefers-reduced-motion is true across components
- [x] T025 Audit dependencies and assets: no CDNs/external links; remove unused packages in package.json; ensure Lucide-only icons
- [x] T026 Responsive/UX pass at sm/md/lg/xl/2xl: no horizontal scroll; spacing and scroll targets remain accurate in src/App.tsx and components

---

## Dependencies

- Complete Phase 2 before any User Story work.
- Story order: US1 (navigation/loading) → US2 (projects filtering) → US3 (theme toggle).
- Within US phases, [P] items can run in parallel when touching different files.

## Parallel Execution Examples

- US1: T011 Navbar and T013 section blocks can proceed in parallel after T007.
- US2: T014 ProjectCard and T015 filter logic can proceed in parallel; T016 animations can parallel once card structure is ready.
- US3: T019 ThemeToggle and T021 theme persistence can proceed in parallel; T020 styling sweep follows component availability.

## Implementation Strategy

- Build MVP with US1 (loader + navigation) first to ensure page access and smooth scrolling.
- Add project data and filtering (US2) next; integrate animations only after layout is stable.
- Layer theme toggle and dark styles (US3); hydrate theme before paint to avoid flashes.
- Finish with polish: accessibility/SEO checks, reduced-motion verification, dependency audit, and responsive passes.

