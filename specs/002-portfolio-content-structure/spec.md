# Feature Specification: Portfolio Content Structure – Projects, Certificates & Social Links

**Feature Branch**: `002-portfolio-content-structure`  
**Created**: 2026-01-25  
**Status**: Draft  
**Input**: User description: "Portfolio Content Structure – Projects, Certificates & Social Links"

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Browse & Filter Projects (Priority: P1)

A visitor wants to browse the developer's work to gauge their skills. They should see a curated list of projects and be able to filter them by category (Frontend, Backend) to find relevant examples.

**Why this priority**: Projects are the core value proposition of a portfolio.

**Independent Test**: Load the projects section. Verify 8 projects are visible. Click "Frontend" filter -> only frontend projects show. Click "Backend" -> only backend projects show. Click "All" -> all show.

**Acceptance Scenarios**:

1. **Given** the user is on the Projects section, **When** the page loads, **Then** they see 8 total projects (5 Frontend, 3 Backend) and the "All" filter is active.
2. **Given** the user is viewing all projects, **When** they click the "Frontend" filter pill, **Then** only the 5 Frontend projects are displayed without a page reload.
3. **Given** the user is viewing a project card, **When** they click the "Demo" or "Code" link, **Then** the respective URL opens in a new tab.

---

### User Story 2 - View Certificates (Priority: P2)

A visitor wants to verify the developer's credentials. They should see a list of certifications with direct links to verify them.

**Why this priority**: Builds trust and credibility.

**Independent Test**: Scroll to Certificates section. Verify 5 certificates are listed. Click a certificate link -> external verification page opens in a new tab.

**Acceptance Scenarios**:

1. **Given** the user is on the Certificates section, **When** they view the list, **Then** they see exactly 5 certificate entries with titles.
2. **Given** the user clicks a certificate title/link, **When** the action completes, **Then** the external certificate URL opens in a new browser tab.

---

### User Story 3 - Connect via Social Links (Priority: P3)

A visitor wants to contact the developer or view their code profiles. They should find easily accessible icons for social platforms.

**Why this priority**: Facilitates contact and deepens engagement.

**Independent Test**: Locate social icons (Navbar/Footer/Contact). Click GitHub icon -> opens GitHub profile.

**Acceptance Scenarios**:

1. **Given** the user is navigating the site, **When** they look at the Footer or Contact section, **Then** they see icons for YouTube, GitHub, LinkedIn, and WhatsApp.
2. **Given** the user clicks a social icon, **When** interaction occurs, **Then** the corresponding profile opens in a new tab.

### Edge Cases

- **Empty Categories**: If a filter category has no projects (e.g., Backend), the system should display a friendly "No projects found" message or the button should be disabled (though requirements say we MUST have 3 backend projects, so this is theoretical safety).
- **Long Titles**: If a project or certificate title is very long, it should truncate or wrap gracefully without breaking layout.
- **Broken Links**: If an external link is invalid, it is a content issue, but the UI should remains stable (standard 404 from browser).

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: System MUST display exactly 8 project entries (5 Frontend, 3 Backend).
- **FR-002**: System MUST provide category filtering options: "All", "Frontend", "Backend".
- **FR-003**: Each project entry MUST include: Title, Category, Image Placeholder, Demo Link, and Code (Repo) Link.
- **FR-004**: System MUST display exactly 5 certificate entries.
- **FR-005**: Each certificate entry MUST include a Title and a direct External URL.
- **FR-006**: System MUST display social links for: YouTube, GitHub, LinkedIn, and WhatsApp.
- **FR-007**: Social links MUST use the approved icon system.
- **FR-008**: External links (Projects, Certificates, Socials) MUST open in a new tab (`target="_blank"`).
- **FR-009**: Client-side filtering MUST be used for projects to ensure instant feedback.

### Technical Constraints

- **TC-001**: React functional components only.
- **TC-002**: Styling via Tailwind CSS utility classes only.
- **TC-003**: Animations (if any) via GSAP only.
- **TC-004**: No third-party UI libraries (e.g., Flowbite) allowed.
- **TC-005**: Data must be structured in a simple, maintainable format (e.g., array of objects).
- **TC-006**: No external CDNs for assets; use local placeholders or imports.
- **TC-007**: Icons must be sourced from `lucide-react`.

### Key Entities

- **Project**: { id, title, category (Enum: Frontend, Backend), imageSrc, demoUrl, codeUrl }
- **Certificate**: { id, title, verificationUrl }
- **SocialLink**: { id, platformName, url, iconComponent }

## Assumptions

- Project images will be strictly local static assets or placeholders for this iteration.
- "WhatsApp" link will use the standard `wa.me` URL format.
- Content for titles and links will be provided as placeholder text if not supplied, but the structure will be final.

## Success Criteria

- Projects Section renders 8 items correctly categorized.
- Filtering switches views instantly without layout shift.
- Certificates Section renders 5 items with working links.
- Social icons are visible and clickable.
- Compliance with all Constitutional constraints (Icons, Styling, Deps).
- Responsive design is maintained on mobile.
