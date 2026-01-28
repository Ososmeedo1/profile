# Research

## Generic code icon for project source links
Decision: Use the lucide-react `Code2` icon for code links while leaving the demo icon unchanged.
Rationale: `Code2` clearly conveys source code without referencing a platform, keeps stroke weight consistent with other lucide icons, and remains legible at small sizes used in cards.
Alternatives considered: `Github` (rejected for platform tie-in), `Code` (less readable in small sizes), `ExternalLink` (conflicts with demo link semantics).

## Bilingual language toggle icon
Decision: Use the lucide-react `Languages` icon for the language toggle across desktop and mobile controls.
Rationale: The glyph presents dual-script characters, reads as “language switch” in common iconography, and maintains clarity in both light/dark themes with current sizing.
Alternatives considered: `Globe2` (generic navigation, not bilingual), `Asterisk` (ambiguous), `TextCursorInput` (suggests editing, not language switching).

## Local hosting of Arabic fonts
Decision: Download Playpen Sans Arabic (weights 400, 700) and Zain (weight 400) as WOFF2 with WOFF fallbacks into `public/fonts`, then register via `@font-face` and map to Tailwind font families for Arabic-only usage.
Rationale: WOFF2 provides best compression and loading performance; WOFF fallback covers older browsers. Limiting to essential weights keeps payload small, and scoping to Arabic avoids layout shifts for English.
Alternatives considered: Serving only TTF (larger, slower), using CDNs/Google Fonts (forbidden by constitution), or loading all weights (unnecessary bundle bloat).

## Helmet package choice for page titles
Decision: Use `react-helmet-async` to manage per-route titles.
Rationale: It is maintained for React 18/concurrent rendering, works in SPA contexts without blocking navigation, and avoids stale head updates compared to legacy `react-helmet`.
Alternatives considered: `react-helmet` (legacy and not concurrent-safe), manual `document.title` updates (duplication and prone to race conditions), custom head manager (adds complexity beyond minimal dependency policy).
