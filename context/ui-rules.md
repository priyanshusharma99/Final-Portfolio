# UI Rules

Build the portfolio to match the supplied screenshot direction exactly: black editorial developer portfolio, brutal grid, oversized typography, red accent, monospace supporting copy, and minimal motion-ready interactions.

The screenshots are the source of truth for UI. Do not reinterpret this as a soft SaaS portfolio, glassmorphism page, gradient landing page, or card-heavy dashboard.

---

## Reference Design

Use these screenshots as the visual target:

- `/Users/priyanshu/Downloads/Screenshot 2026-06-26 at 5.54.36 PM.png` — landing hero
- `/Users/priyanshu/Downloads/Screenshot 2026-06-26 at 5.54.44 PM.png` — hero plus stats
- `/Users/priyanshu/Downloads/Screenshot 2026-06-26 at 5.54.49 PM.png` and `5.55.10 PM.png` — about section and info grid
- `/Users/priyanshu/Downloads/Screenshot 2026-06-26 at 5.55.15 PM.png` and `5.55.19 PM.png` — toolkit/skills
- `/Users/priyanshu/Downloads/Screenshot 2026-06-26 at 5.55.24 PM.png` and `5.55.29 PM.png` — selected work
- `/Users/priyanshu/Downloads/Screenshot 2026-06-26 at 5.55.35 PM.png`, `5.55.49 PM.png`, `5.55.56 PM.png` — experience trajectory
- `/Users/priyanshu/Downloads/Screenshot 2026-06-26 at 5.56.01 PM.png` — testimonials
- `/Users/priyanshu/Downloads/Screenshot 2026-06-26 at 5.56.07 PM.png` — journal
- `/Users/priyanshu/Downloads/Screenshot 2026-06-26 at 5.56.12 PM.png` and `5.56.17 PM.png` — contact
- `/Users/priyanshu/Downloads/Screenshot 2026-06-26 at 5.56.38 PM.png` — footer

The browser chrome and macOS dock are not part of the website. Recreate only the black website UI inside the viewport.

---

## Visual Identity

- Background is pure black.
- Main text is white.
- Accent is hot red.
- Secondary text is low-contrast gray.
- Borders are very thin, dark charcoal lines.
- Layout is wide, austere, and grid-based.
- Use almost no border radius. Most UI is square-edged.
- Use no shadows, no glass, no gradients, no bokeh, no soft cards.
- Use high letter spacing on labels/nav/meta.
- Use giant display headings, often split between filled white words and red outlined italic words.
- Body/supporting copy uses a monospace style.

---

## Fonts

Use three font roles:

```typescript
import { Archivo_Black, IBM_Plex_Mono, Inter_Tight } from "next/font/google";

const display = Archivo_Black({ subsets: ["latin"], weight: "400", variable: "--font-display" });
const mono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-mono" });
const sans = Inter_Tight({ subsets: ["latin"], weight: ["700", "800", "900"], variable: "--font-sans" });
```

- Display headings and logo: `--font-display`.
- Body, labels, nav, meta, form placeholders: `--font-mono`.
- Buttons and fallback headings: `--font-sans`.
- Never use casual rounded fonts or default system UI as the primary visual style.

---

## Global Layout

- `body`: `bg-background text-text-primary overflow-x-hidden`.
- Page width is full viewport, not a centered 1180px site.
- Main horizontal padding: `62px` desktop.
- Section vertical padding: `96px 62px` desktop.
- Header height: `84px`.
- Content rows stretch nearly full width.
- Use thin horizontal section dividers.
- Use vertical grid lines inside stats, skills, work, about detail grids, and footer.
- On mobile, reduce horizontal padding to `20px`, stack columns, and keep the same black/red/white identity.

Desktop section wrapper:

```tsx
className="border-t border-border px-page-x py-section-y"
```

Mobile wrapper:

```tsx
className="px-5 py-16"
```

---

## Header / Navbar

Header matches the screenshots:

- Sticky or fixed top header is allowed; visual height must be `84px`.
- Black background with subtle bottom border.
- Left logo: small red square followed by uppercase name.
- Center nav: `WORK ABOUT SKILLS EXPERIENCE WORDS JOURNAL CONTACT`.
- Right CTA: red rectangular button `START A PROJECT →`.
- Nav labels are uppercase monospace with wide tracking.
- Header layout: logo left, nav centered, CTA right.
- No rounded pills.
- No underline active states.
- No mobile sidebar on desktop.

Logo:

```tsx
<span className="h-2.5 w-2.5 bg-accent" />
<span className="font-display text-xl uppercase text-text-primary">ALEX MORGAN</span>
```

Nav item classes:

```tsx
font-mono text-[14px] uppercase tracking-[0.42em] text-text-subtle hover:text-text-primary
```

CTA button classes:

```tsx
bg-accent text-black px-7 h-[42px] font-mono text-[13px] font-bold uppercase tracking-[0.42em]
```

Mobile header:

- Keep logo and red CTA if space allows.
- Collapse nav to a square menu button.
- Menu panel must keep black background, red accents, and square borders.

---

## Section Labels

Every major section starts with a red section label:

```text
/ 02 - ABOUT
/ 03 - TOOLKIT
/ 04 - SELECTED WORK
/ 05 - TRAJECTORY
/ 06 - KIND WORDS
/ 07 - JOURNAL
/ 08 - GET IN TOUCH
```

Style:

```tsx
font-mono text-[13px] font-semibold uppercase tracking-[0.45em] text-accent
```

Use section numbers exactly like the screenshots. Keep them part of the visual system.

---

## Heading System

### Filled Display Words

For white filled words like `BUILDING DIGITAL PRODUCTS`:

```tsx
font-display text-[clamp(4.5rem,11vw,13rem)] leading-[0.86] uppercase tracking-[-0.04em] text-text-primary
```

### Red Outline Italic Words

For outlined red words like `THAT`, `SHIPPED.`, `ONE CRAFT.`, `SOMETHING GOOD.`:

```tsx
font-display italic text-transparent [-webkit-text-stroke:2px_var(--color-accent)] text-[clamp(4rem,10vw,12rem)] leading-[0.86] uppercase tracking-[-0.04em]
```

Use `paint-order: stroke fill` if needed. Do not fake outline text with text-shadow.

### Section Headline Pattern

Use this exact rhythm:

```tsx
<p className="section-kicker">/ 04 - SELECTED WORK</p>
<h2>
  <span className="display-fill">WORK THAT</span>
  <span className="display-outline">SHIPPED.</span>
</h2>
```

---

## Body Text

Body text in screenshots is gray monospace:

```tsx
font-mono text-[18px] leading-[1.55] tracking-[-0.02em] text-text-muted
```

Small meta text:

```tsx
font-mono text-[12px] uppercase tracking-[0.42em] text-text-faint
```

Red meta text:

```tsx
font-mono text-[13px] font-semibold uppercase tracking-[0.45em] text-accent
```

---

## Homepage / Hero

The hero is not a standard split landing page. It should match screenshots:

- Tall black first section.
- Top metadata row: `PORTFOLIO / 2026`, `[01] - BASED IN ...`, `[02] - AVAILABLE ...`, version/date.
- Massive left-aligned headline:
  - `BUILDING`
  - `DIGITAL`
  - `PRODUCTS`
  - outlined red `THAT`
  - then below/next viewport: `ACTUALLY SHIP.`
- Right supporting paragraph and stacked CTA buttons appear in the second hero view.
- Bottom stats grid: four columns with big white numbers and gray spaced labels.
- Bottom-left scroll cue: `↓ SCROLL`.

Stats row:

```text
06 YEARS SHIPPING
47 PROJECTS LAUNCHED
11 OPEN-SOURCE REPOS
2.4M USERS IMPACTED
```

Stats use borders between columns, no cards.

---

## About Section

Layout:

- Left: section label and giant heading:
  - `ENGINEER`
  - `WITH THE EYE`
  - outlined `OF A DESIGNER.`
- Right: three gray monospace paragraphs.
- Below: two-column layout with large black-and-white portrait on left and 2x3 info grid on right.

Info grid labels in red:

```text
NOW
FOCUS
TEAM SIZE
STACK OF CHOICE
CURRENTLY READING
CURRENTLY BUILDING
```

Info values are large white display text.

Portrait:

- Grayscale.
- Darkened/low-key.
- Rectangular, no rounded corners.
- Full-height within grid cell.

---

## Toolkit / Skills Section

Top:

- Red section label `/ 03 - TOOLKIT`.
- Large heading `THE TOOLS I REACH FOR.`
- Right gray monospace paragraph.

Middle marquee:

- Huge outlined technology names across the viewport, partially cropped horizontally.
- Red slash separators.
- Example: `DOCKER / RUST / TYPESCRIPT`.
- Text is outline gray, slash is red filled.

Bottom skills grid:

- Four columns: `ENGINEERING`, `DESIGN`, `INFRA`, `PRACTICE`.
- Red category headings, faint count at top-right.
- Skill items are large white display text.
- Thin horizontal separators between skills.
- Thin vertical separators between columns.
- No tag pills.

---

## Selected Work Section

Top:

- Red section label `/ 04 - SELECTED WORK`.
- Giant heading `WORK THAT` + red outlined `SHIPPED.`
- Right gray explanatory copy.

Project layout:

- Asymmetric editorial grid.
- Large primary project tile on left spanning larger width/height.
- Two stacked smaller project tiles on right.
- More projects continue below.
- Project images are very dark with black overlay.
- Titles are large white display text.
- Meta is red uppercase monospace: `SAAS · PRODUCT ENGINEERING · 2025`.
- Descriptions are gray monospace.
- Tech tags are square bordered labels, not pills.
- Index labels like `[01]`, `[02]`, `[03]`.
- Arrow icon in tile corner.
- Hover may brighten image slightly and turn border/accent arrow red.

Project tile must not look like a rounded card.

---

## Experience / Trajectory Section

Top:

- Red section label `/ 05 - TRAJECTORY`.
- Giant heading:
  - `SIX YEARS.`
  - `FOUR TEAMS.`
  - red outlined `ONE CRAFT.`
- Right gray explanatory copy.

Timeline rows:

- Full-width horizontal rows with thin borders.
- Four-column desktop grid:
  - date range in red monospace
  - company name in white display text + location in spaced gray mono
  - role title in white or red display text
  - bullet points in gray mono with red arrow bullets
- Highlight current or important rows with slightly lighter charcoal background.
- No rounded cards.

---

## Testimonials / Kind Words

Top:

- Red section label `/ 06 - KIND WORDS`.
- Heading: `FROM THE PEOPLE I'VE` + outlined red `BUILT WITH.`
- Right supporting gray text.

Cards:

- Three testimonial boxes in a row.
- Transparent black surfaces with thin charcoal borders.
- Active/hovered card border becomes red.
- Red oversized quote mark.
- Quote text white, large.
- Name white monospace bold.
- Role/company gray uppercase mono with wide tracking.
- Bottom-right square arrow controls.

Cards are square-edged, not soft cards.

---

## Journal Section

Top:

- Red section label `/ 07 - JOURNAL`.
- Heading: `NOTES ON CRAFT,` + outlined `SHIPPING & TASTE.`
- Right gray one-line description.

Article rows:

- Full-width rows with thin top borders.
- Columns:
  - index `[01]`
  - category red uppercase mono
  - title large white display text
  - date/read time gray mono
  - arrow icon
- Hover/current row: title and arrow turn red; row background becomes very subtle charcoal.

---

## Contact Section

Top:

- Red section label `/ 08 - GET IN TOUCH`.
- Huge heading:
  - `LET'S BUILD`
  - red outlined `SOMETHING GOOD.`

Content:

- Two-column grid.
- Left info panel with border:
  - `EMAIL`
  - email address
  - divider
  - `AVAILABILITY`
  - availability text
  - divider
  - `SOCIAL`
  - Github, Linkedin, Twitter, Dribbble links with arrow
- Right contact form panel with border:
  - two-column name/email row
  - full-width subject
  - full-width message textarea
  - bottom divider
  - left reply-time text `USUAL REPLY IN < 24H`
  - right red button `SEND MESSAGE ↗`

Inputs:

- Black/transparent background.
- Thin charcoal border.
- Square corners.
- Mono placeholders.
- Red uppercase labels.

---

## Footer

Footer matches screenshot:

- Top border and large vertical spacing.
- Left: `CURRENTLY / 2026`, giant white name with red dot, huge gray outlined role text.
- Right: two columns:
  - `SITEMAP` with About, Work, Skills, Journal
  - `ELSEWHERE` with Github, Linkedin, Twitter, Dribbble
- Giant outlined footer wordmark: `ALEX × 2026`.
- Bottom row:
  - `© 2026 ALEX MORGAN. ALL RIGHTS RESERVED.`
  - `DESIGNED & ENGINEERED IN BROOKLYN, NY.`

Use placeholders for personal identity, but keep the exact layout and visual treatment.

---

## Buttons

Buttons are rectangular and typographic.

Primary red:

```tsx
bg-accent text-black border border-accent px-8 h-16 font-mono text-[13px] font-bold uppercase tracking-[0.42em]
```

White hero button:

```tsx
bg-white text-black border border-white px-8 h-14 font-mono text-[13px] font-bold uppercase tracking-[0.42em]
```

Outline dark button:

```tsx
bg-transparent text-white border border-border-strong px-8 h-14 font-mono text-[13px] font-bold uppercase tracking-[0.42em]
```

Use arrows `→` or `↗` as text characters or lucide icons. Keep them aligned right.

---

## Tags

Tech tags are square bordered labels:

```tsx
border border-border-strong px-3 py-2 font-mono text-[11px] uppercase tracking-[0.28em] text-text-muted
```

No rounded pill badges in the public portfolio UI.

---

## Forms

Input:

```tsx
bg-transparent border border-border h-[58px] px-5 font-mono text-[16px] text-text-primary placeholder:text-text-faint focus:border-accent focus:outline-none
```

Textarea:

```tsx
bg-transparent border border-border min-h-[190px] px-5 py-5 font-mono text-[16px] text-text-primary placeholder:text-text-faint focus:border-accent focus:outline-none
```

Labels:

```tsx
font-mono text-[13px] font-semibold uppercase tracking-[0.45em] text-accent
```

---

## Responsive Rules

At widths below `900px`:

- Hide center nav behind menu.
- Reduce header height to `68px`.
- Use `20px` side padding.
- Stack all two-column sections.
- Headings remain bold and huge but use smaller clamps.
- Stats become 2 columns.
- Skills grid becomes 1 or 2 columns.
- Work tiles become single column.
- Timeline rows stack date, company, role, bullets.
- Contact panels stack.
- Keep all borders, red labels, black background, and outlined words.

---

## Do Nots

- Do not use white/light page backgrounds.
- Do not use blue, purple, beige, or pastel palettes.
- Do not use rounded cards, pill badges, soft shadows, gradients, glassmorphism, blobs, or bokeh.
- Do not center the hero headline.
- Do not use ordinary paragraph fonts for the main UI labels.
- Do not create a generic "Home Projects About Contact" portfolio.
- Do not replace the red outlined typography with simple red filled text.
- Do not use screenshots with browser chrome as images inside the site.
- Do not show admin/dashboard UI on the public portfolio unless explicitly requested.
