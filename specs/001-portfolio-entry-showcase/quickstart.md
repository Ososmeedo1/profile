# Quickstart

1) Install dependencies (adds Helmet helper)
- From repo root: `npm install` (or `pnpm i` if used), then `npm install react-helmet-async` to add the head manager.

2) Add local Arabic fonts
- Download Playpen Sans Arabic (weights 400, 700) and Zain (weight 400) as `.woff2` with `.woff` fallbacks.
- Place files under `public/fonts/` (e.g., `PlaypenSansArabic-Regular.woff2`, `PlaypenSansArabic-Bold.woff2`, `Zain-Regular.woff2`).
- Register via `@font-face` in `src/index.css` and map to Tailwind font families for Arabic usage.

3) Run the app
- Start dev server: `npm run dev`.
- Open the local URL shown in the terminal and test Arabic/English toggles, dark/light themes, and navigation.

4) What to edit for this plan
- Icons: `src/Components/ProjectCard/ProjectCard.jsx` (code icon), `src/Components/Nav/Nav.jsx` (language icon), `src/Components/ThemeToggle/ThemeToggle.jsx` (no change expected), `src/data/socials.js` (remove CTA fields).
- Fonts: `src/index.css` + `tailwind.config.js` for font families; language scoping in `src/App.jsx` or a shared wrapper.
- SEO titles: wrap root with `HelmetProvider` and add `<Helmet>` blocks in `src/pages/Home.jsx`, `About.jsx`, `Projects.jsx`, `Contact.jsx`.
- Skills: new `src/data/skills.js` and `src/pages/About.jsx` rendering.

5) Validate
- Confirm page titles change per route and language without reload.
- Verify fonts load locally (network panel shows font files served from `/fonts/*`).
- Check social links still open correctly after CTA removal.
- Smoke test mobile layouts and RTL/LTR alignment for nav, skills, and cards.
