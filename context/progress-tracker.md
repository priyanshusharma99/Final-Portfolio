# Progress Tracker

Update this file after every completed feature. Any AI agent reading this should immediately know what is done, what is in progress, and what is next.

---

## Current Status

**Phase:** Phase 4 — Content System
**Last completed:** 11 Footer
**Next:** 12 Content Model

---

## Progress

### Phase 1 — Screenshot-Matched Foundation

- [x] 01 Project Setup
- [x] 02 Site Header
- [x] 03 Hero + Stats
- [x] 04 About Section

### Phase 2 — Core Portfolio Sections

- [x] 05 Toolkit / Skills
- [x] 06 Selected Work
- [x] 07 Trajectory / Experience
- [x] 08 Kind Words / Testimonials

### Phase 3 — Writing, Contact, Footer

- [x] 09 Journal
- [x] 10 Contact
- [x] 11 Footer

### Phase 4 — Content System

- [ ] 12 Content Model
- [ ] 13 Placeholder Checklist
- [ ] 14 SEO and Metadata

### Phase 5 — Optional AI/Admin/Deploy

- [ ] 15 AI Content Assistant
- [ ] 16 Responsive QA
- [ ] 17 Deployment

---

## Decisions Made During Build

- **Typography & Spacing Scale Refinement (June 2026):** Scaled down oversized headers, section titles, and paragraphs (from `text-[18px]` body copy to `text-[13px]/[14px]` monospace) to improve negative space and density matching the original screenshots.
- **Header Height & Buttons (June 2026):** Reduced navigation bar height variable to `72px` and set navigation and call-to-actions to use clean, compact `font-sans` styled buttons with refined tracking (`tracking-[0.2em]`).
- **About Info Grid Refinement (June 2026):** Removed all unnecessary borders inside and around the 2x3 grid and portrait image. Changed values to use `font-sans` (Inter Tight) instead of `font-display` (Archivo Black) and removed the grid stretching height, aligning elements closely to match the original editorial look.
- **Direct Project Link Redirection (June 2026):** Linked ProjectTile components directly to their respective `liveUrl` rather than dynamic `/work/[slug]` routes to prevent 404 errors in static single-page portfolio mode. Formatted domain-only input URLs (e.g. `tryvoke.in`) to prepend `https://` automatically.
- **Hydration Warning Suppression (June 2026):** Added `suppressHydrationWarning` to the root `<html>` tag in `app/layout.tsx` to prevent hydration mismatches caused by client-side browser extensions (e.g., dark mode enhancers like "Noir" or translation tools) injecting elements or stylesheets before hydration.
- **Unique Mapping Keys in Timeline (June 2026):** Updated the experience timeline list renderer key in `TrajectorySection.tsx` to use a combination of `company` and `index` (`key={\`\${item.company}-\${index}\`}`) rather than just `company` to resolve duplication and layout rendering bugs caused by non-unique keys when multiple items share the same value (e.g., "None").
- **Favicon Customization (June 2026):** Replaced the default Next.js `favicon.ico` with a custom `icon.jpg` using Next.js App Router's automated metadata icon generation.
- **Unique Mapping Keys in Testimonials (June 2026):** Updated the testimonials grid mapping key in `TestimonialsSection.tsx` to combine author and index to avoid React duplication warnings caused by duplicate authors ("None").
- **Image Tag Hydration Warning Suppression (June 2026):** Added `suppressHydrationWarning` to the `Image` components in `AboutSection.tsx` and `ProjectTile.tsx` to handle browser dark mode plugins (e.g. Noir) modifying image style attributes dynamically.
- **Vercel Semver Compatibility (June 2026):** Updated shorthand single-digit devDependencies versions (e.g., `^4`, `^9`) to fully-qualified semantic versions (e.g., `^4.0.0`, `^9.0.0`) in `package.json` to resolve `Invalid Version` dependency installation failures during Vercel builds.

---

## Notes

- Checked type safety (`npx tsc --noEmit`) and verified linting rules (`npm run lint`).
- Confirmed desktop and mobile menu panel adjustments are completely matched to the reference designs.
- Integrated **Lenis smooth scroll** (`lenis/react`) into RootLayout to enable ultra-premium inertial/momentum scrolling. Added typescript ambient definitions in `types/lenis.d.ts` for clean workspace compilation.
