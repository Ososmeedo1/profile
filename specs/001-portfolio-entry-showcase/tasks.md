---

description: "Tasks for Portfolio Enhancements – Icons, Fonts, Language UI, SEO & Skills"
---

# Tasks: Portfolio Enhancements – Icons, Fonts, Language UI, SEO & Skills

**Input**: Design documents from /specs/001-portfolio-entry-showcase/
**Prerequisites**: plan.md (required), spec.md (required), research.md, data-model.md, contracts/

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: User story label (US1, US2, US3)
- Include exact file paths in descriptions

---

## Phase 1: Setup (Shared Infrastructure)

- [X] T001 Add react-helmet-async dependency to package.json and install (root package.json, package-lock.json)
- [X] T002 [P] Place Playpen Sans Arabic (400,700) and Zain (400) font files as WOFF2+WOFF under public/fonts/

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core groundwork for typography, head management, and language-aware rendering

- [X] T003 Register @font-face entries for Playpen Sans Arabic and Zain in src/index.css with WOFF2 primary and WOFF fallback sources
- [X] T004 Update tailwind.config.js to add font families for main and arabic stacks
- [X] T005 Apply language-based font family selection on the app shell in src/App.jsx to switch Arabic vs English fonts
- [X] T006 Wrap the app with HelmetProvider in src/main.jsx and add localized page meta map in src/data/pageMeta.js
- [X] T007 [P] Add a small helper to set page titles from pageMeta (create src/lib/head.js) for reuse across pages

**Checkpoint**: Foundation ready — user story phases can proceed

---

## Phase 3: User Story 1 - Seamless Entry & Navigation (Priority: P1) 🎯 MVP

**Goal**: Preserve fast entry and clean navigation while updating language UI and keeping socials intact

**Independent Test**: Load Home on mobile/desktop; verify language toggle uses the new icon, page titles localize with language, nav links still work, and social links open correctly.

### Implementation

- [X] T008 [US1] Replace language toggle icon with lucide Languages and ensure light/dark contrast in src/Components/Nav/Nav.jsx
- [X] T009 [P] [US1] Add localized Helmet title for Home route using head helper in src/pages/Home.jsx
- [X] T010 [P] [US1] Add localized Helmet title for About route using head helper in src/pages/About.jsx
- [X] T011 [US1] Remove ctaEn/ctaAr fields from social data and adjust any references in src/data/socials.js (render with name/display only)

**Checkpoint**: Entry/nav experience updated with bilingual icon and localized titles

---

## Phase 4: User Story 2 - Browse & Filter Projects (Priority: P2)

**Goal**: Keep project exploration smooth while using platform-agnostic code icons and SEO titles

**Independent Test**: Open Projects, switch filters, ensure cards render; code links show a generic code icon, open in new tab, and the page title matches the selected language.

### Implementation

- [X] T012 [US2] Swap project code link icon to lucide Code2 with accessible label in src/Components/ProjectCard/ProjectCard.jsx
- [X] T013 [P] [US2] Add localized Helmet title for Projects route using head helper in src/pages/Projects.jsx
- [X] T014 [US2] Ensure project link styling remains consistent after icon swap in src/Components/ProjectCard/ProjectCard.jsx (hover, dark mode, spacing)

**Checkpoint**: Projects grid shows generic code icons and localized title while filters continue to work

---

## Phase 5: User Story 3 - Light/Dark Mode Toggle (Priority: P3)

**Goal**: Expand About skills and ensure new UI respects theme and language direction

**Independent Test**: Toggle light/dark after loading About; verify skills badges wrap responsively, use correct language text, and contrast stays readable; page title updates with language.

### Implementation

- [X] T015 [US3] Create skills data groups with EN/AR labels in src/data/skills.js (Frontend/Core, Styling, Backend/Databases, Validation/ORM/Testing, Tools)
- [X] T016 [US3] Render skills section from skills data with responsive badges and RTL/dark support in src/pages/About.jsx
- [X] T017 [P] [US3] Add localized Helmet title for Contact route using head helper in src/pages/Contact.jsx
- [X] T018 [US3] Align new skills and language toggle styles with theme state to maintain contrast in src/pages/About.jsx and src/Components/Nav/Nav.jsx

**Checkpoint**: Theme toggle continues to work with new skills content and localized titles

---

## Phase N: Polish & Cross-Cutting Concerns

- [ ] T019 [P] Run quickstart validation steps (npm install, npm run dev smoke) and confirm fonts load from public/fonts
- [ ] T020 Audit RTL/LTR and dark/light behavior for nav, projects, and skills updates across src/Components and src/pages

---

## Dependencies & Execution Order

### Phase Dependencies
- Setup (Phase 1): none
- Foundational (Phase 2): depends on Setup; blocks all user stories
- US1 → US2 → US3: proceed in priority order after Foundational; stories remain independently testable
- Polish: after desired stories complete

### User Story Dependencies
- US1 (P1): starts after Foundational; no other story dependency
- US2 (P2): starts after Foundational; independent of US1 but should reuse shared head/fonts
- US3 (P3): starts after Foundational; ensure theme compatibility with new assets from earlier phases

### Parallel Opportunities
- Setup: T002 can run parallel to T001
- Foundational: T003–T005 sequential; T007 can run parallel after T006 path decisions; T006 blocks page-level Helmet tasks
- US1: T009 and T010 parallel after T006/T007; T008 before T018 styling alignment; T011 independent
- US2: T012 and T013 can run in parallel; T014 follows T012
- US3: T015 precedes T016; T017 parallel; T018 after T008/T016 for theme alignment
- Polish: T019 parallel; T020 after story phases

### Parallel Execution Examples
- US1: Run T009 (Home title) and T010 (About title) in parallel while T008 updates the nav icon.
- US2: Run T012 (icon swap) and T013 (Projects title) in parallel; finish with T014 styling check.
- US3: Create skills data (T015) then render skills (T016); in parallel, add Contact title (T017).

## Implementation Strategy

- MVP first: Complete Setup → Foundational → US1, validate navigation, titles, and social links, then proceed to US2 and US3.
- Incremental delivery: Ship after each user story checkpoint; each remains independently testable with localized titles and theme compatibility.
