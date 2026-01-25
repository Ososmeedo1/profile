---

description: "Tasks for Portfolio Content Structure – Projects, Certificates & Social Links"
---

# Tasks: Portfolio Content Structure – Projects, Certificates & Social Links

**Input**: Design documents from `/specs/002-portfolio-content-structure/`
**Prerequisites**: plan.md (required), spec.md (required)

## Phase 1: Setup (Shared Infrastructure)

- [x] T001 Ensure `react-router-dom` dependency is declared and installed in package.json
- [x] T002 Wrap the app with `BrowserRouter` in src/main.jsx and export the routed App container

---

## Phase 2: Foundational (Blocking Prerequisites)

- [x] T003 Create LanguageProvider/context with default Arabic, localStorage persistence, and `dir` sync on html element in src/context/LanguageContext.jsx
- [x] T004 Integrate LanguageProvider and set root layout to read `dir`/language in src/App.jsx
- [x] T005 Update Navbar to use React Router `<Link>` navigation (no reload) and include language toggle hook in src/Components/Nav/Nav.jsx
- [x] T006 Scaffold page shells with bilingual headings/ids for Home, About, Projects, Contact in src/pages/{Home,About,Projects,Contact}.jsx

---

## Phase 3: User Story 1 - Browse & Filter Projects (Priority: P1) 🎯 MVP

**Goal**: Users can view 8 projects and filter by category without reloads.
**Independent Test**: Load Projects page, verify 8 items (5 Frontend, 3 Backend); apply Frontend/Backend filters; Demo/Code open in new tabs.

- [x] T007 [US1] Define projects data (8 entries: 5 Frontend, 3 Backend) with title/category/image placeholder/demo/code in src/data/projects.js
- [x] T008 [US1] Implement ProjectsPage with filter pills (All/Frontend/Backend) and empty-state guard in src/pages/Projects.jsx
- [x] T009 [US1] Build reusable ProjectCard list using Lucide icons where needed; ensure demo/code links open `target="_blank"` in src/pages/Projects.jsx or shared component
- [x] T010 [US1] Add Projects summary block on Home (3–4 highlights) with “View all” CTA routing to /projects in src/pages/Home.jsx

---

## Phase 4: User Story 2 - View Certificates (Priority: P2)

**Goal**: Users can see 5 certificates with direct verification links.
**Independent Test**: Certificates list shows 5 entries; clicking opens external link in new tab.

- [x] T011 [US2] Create certificates data (5 entries with title + verificationUrl) in src/data/certificates.js
- [x] T012 [US2] Implement Certificates section for About page (full list, external links new tab) in src/pages/About.jsx (or shared component)
- [x] T013 [US2] Add Certificates summary block on Home with “More” CTA to /about#certificates (router + hash scroll) in src/pages/Home.jsx

---

## Phase 5: User Story 3 - Connect via Social Links (Priority: P3)

**Goal**: Users can access social/contact links (YouTube, GitHub, LinkedIn, WhatsApp).
**Independent Test**: Social icons visible in Contact/Footer; clicking opens respective profile in new tab.

- [x] T014 [US3] Define social links config (YouTube, GitHub, LinkedIn, WhatsApp, Email) with Lucide icon mapping in src/data/socials.js
- [x] T015 [US3] Build Contact page with external link buttons/icons (new tab, accessible labels) in src/pages/Contact.jsx
- [x] T016 [US3] Add social links summary/CTA on Home that routes to /contact in src/pages/Home.jsx

---

## Final Phase: Polish & Cross-Cutting

- [ ] T017 [P] Add bilingual copy resources for nav labels, section titles, and CTAs; wire language toggle to text lookups in src/data/copy.js and consuming pages/components
- [ ] T018 [P] Ensure RTL/LTR responsive layout wrappers on pages (Home/About/Projects/Contact) respect current language dir in src/pages/* and src/App.jsx
- [ ] T019 [P] Audit all navigation (Navbar + Home CTAs) to confirm React Router links (no full reloads) and correct routes/anchors
- [ ] T020 [P] Quick pass for accessibility/responsiveness (aria labels on links/buttons, alt text placeholders) across summary and full pages

---

## Phase 6: Identity Enhancements – Owner Name & CV Link

- [x] T021 [P] Define owner identity data (nameAr, nameEn, cvUrl, cvLabelAr, cvLabelEn) in src/data/identity.js
- [x] T022 Update Navbar branding to render owner name from identity data with AR/EN toggle in src/Components/Nav/Nav.jsx
- [x] T023 Insert owner name into About personal info block alongside university/major/country/dob in src/pages/About.jsx
- [x] T024 Add CV link/button on About page using cvUrl + bilingual label; local file or internal view, no external CDNs/viewers in src/pages/About.jsx
- [x] T025 Display owner name near contact methods to assert ownership in src/pages/Contact.jsx
- [x] T026 Validate language toggle updates identity and CV labels across Navbar/About/Contact in src/App.jsx or shared language hooks

---

## Dependencies & Execution Order

- Complete Phase 1 before Phase 2.
- Phase 2 blocks all user stories.
- US1 → US2 → US3 in priority order; each independently testable.
- Polish starts after user stories; tasks marked [P] can run in parallel when touching separate files.
