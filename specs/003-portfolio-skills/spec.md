# Feature Specification: Portfolio Content Structure – Skills Section

**Feature Branch**: `003-portfolio-skills`
**Created**: 2026-01-25
**Status**: Draft
**Input**: User description: "Portfolio Content Structure – Skills Section"

## User Scenarios & Testing *(mandatory)*

### User Story 1 - View Technical Skills (Priority: P1)

A visitor (recruiter or peer) wants to quickly understand the developer's technical proficiency and stack alignment. They should see a clear, organized list of technologies.

**Why this priority**: Core qualification signal for a portfolio.

**Independent Test**: Scroll to key "Skills" section. Verify all defined skills are visible and categorized. Switch language to Arabic and verify text direction/translation.

**Acceptance Scenarios**:

1. **Given** the user is on the homepage, **When** they navigate to the Skills section, **Then** they see skills grouped logically (e.g., Frontend, Backend, Tools).
2. **Given** the Language is English (LTR), **When** the user views the skills, **Then** the layout aligns left and text is in English.
3. **Given** the Language is Arabic (RTL), **When** the user views the skills, **Then** the layout aligns right, text is in Arabic (where appropriate), and technical terms are displayed clearly (either transliterated or kept in English if standard).

### Edge Cases

- **Long Skill Names**: Ensure skills with longer names (e.g., "ORM, Validation & Testing") wrap correctly on mobile without breaking the container.
- **Missing Translation**: If a category title lacks an Arabic translation in the data source, fallback gracefully to English.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: System MUST display a dedicated "Skills" section.
- **FR-002**: Skills MUST be grouped into the following categories:
    - Frontend & Core Web (HTML, CSS, JavaScript, React, Next.js, TypeScript)
    - Styling (Tailwind CSS, Bootstrap, Sass)
    - Backend (Node.js, Express, MongoDB, MySQL)
    - ORM, Validation & Testing (Sequelize, Yup, Joi, Jest)
    - Tools & Version Control (Git)
- **FR-003**: Skills MUST be represented as simple text labels, badges, or list items.
- **FR-004**: System MUST NOT use progress bars, percentage charts, or star ratings.
- **FR-005**: Text direction MUST switch between LTR (English) and RTL (Arabic) based on the global language state.
- **FR-006**: Skill category titles MUST be translated into Egyptian Arabic when in Arabic mode.

### Technical Constraints

- **TC-001**: React functional components only.
- **TC-002**: Styling via Tailwind CSS utility classes only.
- **TC-003**: Icons (if used) MUST be from `lucide-react`.
- **TC-004**: No external UI libraries (Flowbite, Material UI, etc.).
- **TC-005**: No external dependencies or CDNs for images/icons.
- **TC-006**: Technical skill names (e.g., "React", "Node.js") MAY remain in English within Arabic view if that is the industry standard preference, but headers MUST be Arabic.

### Key Entities

- **SkillCategory**: { id, title: { en: string, ar: string }, items: string[] }

## Assumptions

- Technical names (React, Git, etc.) are commonly recognized in English even in Arabic contexts; transliteration is optional/secondary.
- The global language state is managed by the previously implemented Language Context/Hook.

## Success Criteria

- Skills section is visible and responsive.
- All 20+ listed skills are present.
- Layout adapts to RTL when Arabic is selected.
- No "progress bar" or "skill level" logic is present.
- Code is compliant with Constitution (Tailwind/React/No-bloat).
