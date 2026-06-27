# Build Plan

## Core Principle

Build the public portfolio UI from the supplied screenshots first, using realistic placeholder data. The visual target is a single-page dark editorial portfolio with red accents, giant typography, thin grid borders, and anchor navigation. Verify the full page visually before adding admin logic or AI workflows.

No invisible backend phases before the public UI exists.

---

## Phase 1 — Screenshot-Matched Foundation

### 01 Project Setup

**UI:**

- Global black background
- Screenshot-matched fonts:
  - Archivo Black for display
  - IBM Plex Mono for labels/body/meta
  - Inter Tight for button/fallback sans
- Tailwind v4 tokens from `ui-tokens.md`
- Base utilities for filled and outlined display typography

**Logic:**

- Next.js App Router
- Static content-first architecture
- SEO defaults in root metadata

---

### 02 Site Header

Build the exact header system from screenshots.

**UI:**

- Black 84px header with bottom border
- Left logo: red square + uppercase name
- Center nav: WORK, ABOUT, SKILLS, EXPERIENCE, WORDS, JOURNAL, CONTACT
- Right red rectangular CTA: START A PROJECT →
- Wide-tracked monospace nav labels
- Mobile menu that preserves the black/red visual system

**Logic:**

- Nav links scroll to homepage anchors
- CTA scrolls to contact section

---

### 03 Hero + Stats

Build the screenshot hero.

**UI:**

- Metadata row: `PORTFOLIO / 2026`, location, availability, version/date
- Massive display headline:
  - `BUILDING`
  - `DIGITAL`
  - `PRODUCTS`
  - red outlined `THAT`
  - continued `ACTUALLY SHIP.`
- Right gray monospace intro copy
- Two stacked CTA buttons: VIEW SELECTED WORK and GET IN TOUCH
- Four-column stats grid with vertical borders:
  - Years shipping
  - Projects launched
  - Open-source repos
  - Users impacted
- Scroll cue

**Logic:**

- CTA links scroll to work/contact anchors
- Stats read from content file

---

### 04 About Section

**UI:**

- Section kicker `/ 02 - ABOUT`
- Giant heading: `ENGINEER WITH THE EYE` + red outlined `OF A DESIGNER.`
- Right bio paragraphs in muted monospace
- Grayscale portrait panel
- 2x3 bordered info grid:
  - NOW
  - FOCUS
  - TEAM SIZE
  - STACK OF CHOICE
  - CURRENTLY READING
  - CURRENTLY BUILDING

**Logic:**

- Content loaded from profile data
- Image uses `next/image` with alt text

---

## Phase 2 — Core Portfolio Sections

### 05 Toolkit / Skills

**UI:**

- Section kicker `/ 03 - TOOLKIT`
- Heading: `THE TOOLS I REACH FOR.`
- Right supporting copy
- Huge outlined horizontal tech marquee with red slash separators
- Four-column skills grid:
  - ENGINEERING
  - DESIGN
  - INFRA
  - PRACTICE
- Large white skill names with thin separators

**Logic:**

- Skills grouped from content model

---

### 06 Selected Work

**UI:**

- Section kicker `/ 04 - SELECTED WORK`
- Heading: `WORK THAT` + red outlined `SHIPPED.`
- Right muted explanatory copy
- Asymmetric project grid:
  - Large primary project tile on left
  - Two stacked smaller tiles on right
  - Additional projects below
- Dark image overlays, red meta, large white titles, gray descriptions
- Square bordered tech tags
- Corner arrows and project index labels

**Logic:**

- Load featured projects
- Project tile links open project detail route or external demo

---

### 07 Trajectory / Experience

**UI:**

- Section kicker `/ 05 - TRAJECTORY`
- Heading: `SIX YEARS. FOUR TEAMS.` + red outlined `ONE CRAFT.`
- Right muted summary
- Full-width timeline rows:
  - red date range
  - company + location
  - role title
  - bullet points with red arrow bullets
- Current/highlighted row uses subtle charcoal background

**Logic:**

- Experience items loaded from content model

---

### 08 Kind Words / Testimonials

**UI:**

- Section kicker `/ 06 - KIND WORDS`
- Heading: `FROM THE PEOPLE I'VE` + red outlined `BUILT WITH.`
- Right supporting copy
- Three square bordered testimonial cards
- Red quote mark
- Active/hovered card border in red
- Bottom-right square arrow controls

**Logic:**

- Static testimonials from content file
- Controls cycle visible testimonials if more than three exist

---

## Phase 3 — Writing, Contact, Footer

### 09 Journal

**UI:**

- Section kicker `/ 07 - JOURNAL`
- Heading: `NOTES ON CRAFT,` + red outlined `SHIPPING & TASTE.`
- Article rows with:
  - index
  - category
  - large title
  - date/read time
  - arrow
- Hover row turns title/arrow red

**Logic:**

- Optional blog content loaded from static data or MDX
- Hide section only if user explicitly disables writing

---

### 10 Contact

**UI:**

- Section kicker `/ 08 - GET IN TOUCH`
- Heading: `LET'S BUILD` + red outlined `SOMETHING GOOD.`
- Two-column layout:
  - Left bordered contact info panel
  - Right bordered contact form panel
- Transparent square inputs with red labels
- Red submit button `SEND MESSAGE ↗`
- Reply-time text

**Logic:**

- Validate name, email, subject, message
- Submit through contact API or mailto fallback
- Track contact event if analytics enabled

---

### 11 Footer

**UI:**

- Large black footer with top border
- Left: `CURRENTLY / 2026`, huge name with red dot, gray outlined role
- Right: sitemap and elsewhere link columns
- Huge gray outlined `NAME × 2026` wordmark
- Bottom copyright and location line

**Logic:**

- Footer links route to anchors/social links

---

## Phase 4 — Content System

### 12 Content Model

Define all portfolio content shapes.

**Data:**

- Profile
- Hero metadata
- Stats
- Social links
- Skills grouped by category
- Experience rows
- Projects
- Testimonials
- Journal posts
- Contact details

**Logic:**

- TypeScript types in `types/index.ts`
- Placeholder data in `content/`
- Validation schemas with Zod where helpful

---

### 13 Placeholder Checklist

**UI:**

- Admin-only or developer-only checklist using the same dark grid style if surfaced

**Logic:**

- Detect placeholder strings like `[YOUR_NAME]`
- Show exact file/field to replace

---

### 14 SEO and Metadata

**Logic:**

- Per-section/page metadata
- Open Graph and Twitter card metadata
- Sitemap
- Robots file
- Person JSON-LD

---

## Phase 5 — Optional AI/Admin

### 15 AI Content Assistant

Only build after the screenshot-matched public UI is complete.

**UI:**

- Admin screens should reuse the same black/red/mono design language
- No default SaaS dashboard look

**Logic:**

- Generate bio, project copy, and SEO drafts
- AI output remains draft until accepted

---

### 16 Responsive QA

**Checks:**

- Mobile: 360px, 390px, 430px
- Tablet: 768px
- Desktop: 1280px, 1440px, 1920px
- Giant headings do not overlap incoherently
- Header does not wrap
- Work grid collapses cleanly
- Contact form remains usable
- Outlined text remains readable

---

### 17 Deployment

**Logic:**

- Production build passes
- Verify all anchors, forms, metadata, images, and responsive states
- Deploy to Vercel or preferred host

---

## Feature Count

| Phase                               | Features |
| ----------------------------------- | -------- |
| Phase 1 — Screenshot Foundation     | 4        |
| Phase 2 — Core Portfolio Sections   | 4        |
| Phase 3 — Writing, Contact, Footer  | 3        |
| Phase 4 — Content System            | 3        |
| Phase 5 — Optional AI/Admin/Deploy  | 3        |
| **Total**                           | **17**   |
