# Data Model

## SocialLink
- Fields: `id` (string), `nameEn`, `nameAr`, `url`, `icon` (lucide component reference), `color` (Tailwind text class), `display` (short label shown in UI).
- Validation: `url` must be absolute (mailto/tel/http/https allowed); `icon` must come from `lucide-react`; `color` limited to existing palette classes; `display` kept under ~30 chars to avoid wrapping.
- Notes: `ctaEn`/`ctaAr` fields are removed; components should render using `name*` and `display` only.

## SkillGroup
- Fields: `id` (string), `labelEn`, `labelAr`, `skills` (array of `Skill`).
- Skill: `id` (string), `labelEn`, `labelAr`.
- Validation: Labels are plain text (no icons/links); skills per group kept reasonably small (≤10) to maintain wrapping on mobile; localization required for every entry.
- Groups (planned): Frontend & Core, Styling, Backend & Databases, Validation/ORM/Testing, Tools.

## PageMeta
- Fields: `route` (string path), `titleEn`, `titleAr`.
- Usage: Consumed by Helmet helper per route to set `<title>`; must stay in sync with `react-router-dom` routes.
- Validation: Titles kept concise (<60 chars), localized, and unique per route.

## FontAsset (configuration)
- Fields: `family` (e.g., Playpen Sans Arabic, Zain), `weights` (e.g., 400, 700), `files` (local `woff2` primary, `woff` fallback), `scope` (`ar` only).
- Constraints: Fonts must be stored under `public/fonts` and referenced via `@font-face`; Arabic fonts applied conditionally when `language === 'ar'` to avoid layout shift for English.

## Existing Entities (unchanged)
- Project: `id`, `titleEn`, `titleAr`, `descriptionEn`, `descriptionAr`, `category`, `image`, `demoUrl`, `codeUrl` (no data shape change; only icon used to render code link is updated).
- Identity/Certificates: Unchanged shapes; continue to honor language toggle.
