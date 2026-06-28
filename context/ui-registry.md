# UI Registry

Living document. Update this after every component is built. Components must follow the screenshot-driven visual system in `ui-rules.md` and tokens in `ui-tokens.md`.

---

## How to Use

Before building any component:

1. Check if a similar component exists here.
2. Reuse the same black/red/white visual treatment and grid structure.
3. Add the new component entry after implementation.

Do not introduce rounded SaaS cards, soft shadows, alternate color palettes, or generic portfolio sections.

---

## Required Public Components

| Component | Suggested Path | Purpose | Required Visual Pattern |
| --------- | -------------- | ------- | ----------------------- |
| SiteHeader | `components/layout/SiteHeader.tsx` | Sticky/top nav | Black bar, red square logo, centered wide-tracked mono nav, red rectangular CTA |
| Footer | `components/layout/Footer.tsx` | Footer | Giant name, gray outlined role/wordmark, sitemap/elsewhere columns |
| SectionKicker | `components/shared/SectionKicker.tsx` | Section labels | Red mono `/ 04 - SELECTED WORK` style |
| DisplayHeading | `components/shared/DisplayHeading.tsx` | Large mixed headings | White filled display words plus red outlined italic words |
| Hero | `components/home/Hero.tsx` | Landing intro | Metadata row, massive left headline, right copy/buttons, stats grid |
| StatsGrid | `components/home/StatsGrid.tsx` | Hero metrics | Four bordered columns, huge white numbers, gray spaced labels |
| AboutSection | `components/home/AboutSection.tsx` | Bio | Left display heading, right mono paragraphs, grayscale portrait/info grid |
| InfoGrid | `components/home/InfoGrid.tsx` | About details | Bordered 2x3 grid with red labels and white values |
| ToolkitSection | `components/home/ToolkitSection.tsx` | Skills | Giant heading, outlined tech marquee, four-column skill grid |
| SkillColumn | `components/home/SkillColumn.tsx` | Skill category | Red category heading, count, large white items with separators |
| SelectedWork | `components/home/SelectedWork.tsx` | Work showcase | Asymmetric dark image grid, red meta, white titles, square tech tags |
| ProjectTile | `components/projects/ProjectTile.tsx` | Project card/tile | No radius, dark image overlay, corner arrow, square tags |
| TrajectorySection | `components/home/TrajectorySection.tsx` | Experience | Full-width bordered rows, red dates, company/role/bullets |
| TimelineRow | `components/home/TimelineRow.tsx` | Experience row | Four-column row, optional charcoal highlight |
| TestimonialsSection | `components/home/TestimonialsSection.tsx` | Kind words | Three square bordered quote cards, active red border |
| TestimonialCard | `components/home/TestimonialCard.tsx` | Quote card | Red quote mark, white quote, gray uppercase role |
| JournalSection | `components/home/JournalSection.tsx` | Writing preview | Bordered article rows, red category, large white title, date/read time |
| JournalRow | `components/home/JournalRow.tsx` | Article row | Index/category/title/date/arrow grid with hover red |
| ContactSection | `components/home/ContactSection.tsx` | Contact | Giant heading, left info panel, right bordered form |
| ContactForm | `components/contact/ContactForm.tsx` | Message form | Transparent square inputs, red labels, red send button |

---

## Planned Page Sections

The homepage should be one long editorial page in this order:

1. Hero / `/ 01`
2. About / `/ 02 - ABOUT`
3. Toolkit / `/ 03 - TOOLKIT`
4. Selected Work / `/ 04 - SELECTED WORK`
5. Trajectory / `/ 05 - TRAJECTORY`
6. Kind Words / `/ 06 - KIND WORDS`
7. Journal / `/ 07 - JOURNAL`
8. Get In Touch / `/ 08 - GET IN TOUCH`
9. Footer

Separate pages are optional. The screenshots show a single-page anchor-navigation portfolio, so default to a single long page with nav anchors.

---

## Built Components

- [SiteHeader](file:///Users/priyanshu/Downloads/Priyanshu's Space/Personal Portfolio/priyanshu-portfolio/components/layout/SiteHeader.tsx): Top navigation bar with red square logo, uppercase nav links with wide letter-spacing, a red rectangular "Start a Project" CTA, and a responsive mobile burger menu.
- [Hero](file:///Users/priyanshu/Downloads/Priyanshu's Space/Personal Portfolio/priyanshu-portfolio/components/home/Hero.tsx): Landing viewport consisting of a top metadata row, a massive display headline with filled white letters and an italicized red outlined "That", supporting copy, stacked CTA buttons, and a 4-column bordered stats grid.
- [AboutSection](file:///Users/priyanshu/Downloads/Priyanshu's Space/Personal Portfolio/priyanshu-portfolio/components/home/AboutSection.tsx): Biography segment containing a kicker, split white-fill and red-outline header, supporting paragraphs, a grayscale portrait, and a borderless 2x3 info grid detailing the current status, focus, tech stack, and activities of the developer using clean `font-sans` typography and tight spacing.
- [ToolkitSection](file:///Users/priyanshu/Downloads/Priyanshu's Space/Personal Portfolio/priyanshu-portfolio/components/home/ToolkitSection.tsx): Skills layout displaying a category count kicker, bold sans headings, a horizontal running marquee separating content, and a 4-column breakdown of developer tools categorized by Engineering, Design, Infra, and Practice.
- [ProjectTile](file:///Users/priyanshu/Downloads/Priyanshu's Space/Personal Portfolio/priyanshu-portfolio/components/projects/ProjectTile.tsx): Individual project presentation tile with square edges, index details, top right corner arrow, a dark overlay image wrapper, and clean tech stack tags. Links directly to the project's external `liveUrl` with target="_blank" when configured.
- [SelectedWork](file:///Users/priyanshu/Downloads/Priyanshu's Space/Personal Portfolio/priyanshu-portfolio/components/home/SelectedWork.tsx): Project showcase rendering the / 04 - SELECTED WORK segment header and layout. Employs an asymmetric column offset where Left Stack hosts [01] and [04] and Right Stack hosts [02] and [03] with custom top padding.
- [TrajectorySection](file:///Users/priyanshu/Downloads/Priyanshu's Space/Personal Portfolio/priyanshu-portfolio/components/home/TrajectorySection.tsx): Career timeline section for / 05 - TRAJECTORY, showing full-width split grid rows for date range, company/location, and roles/bullets. Supports charcoal active styling for the current role and hot red arrow points.
- [TestimonialsSection](file:///Users/priyanshu/Downloads/Priyanshu's Space/Personal Portfolio/priyanshu-portfolio/components/home/TestimonialsSection.tsx): Coworker reviews grid for / 06 - KIND WORDS, rendering square borders, custom double quotation marks, dynamic slide logic, and active states. Default active card has red borders.
- [JournalSection](file:///Users/priyanshu/Downloads/Priyanshu's Space/Personal Portfolio/priyanshu-portfolio/components/home/JournalSection.tsx): Writing index component for / 07 - JOURNAL, showing formatted rows of posts. Animates row items, title colors, and arrow paths from ArrowUpRight to ArrowRight on hover.
- [ContactForm](file:///Users/priyanshu/Downloads/Priyanshu's Space/Personal Portfolio/priyanshu-portfolio/components/contact/ContactForm.tsx): Form inputs (Name, Email, Subject, Message) featuring custom styles, simulation loaders, error/success screens, and a red submit action.
- [ContactSection](file:///Users/priyanshu/Downloads/Priyanshu's Space/Personal Portfolio/priyanshu-portfolio/components/home/ContactSection.tsx): Layout block for / 08 - GET IN TOUCH. Split design with a details block on the left and ContactForm on the right. Shows email, availability, and external social tags.
- [Footer](file:///Users/priyanshu/Downloads/Priyanshu's Space/Personal Portfolio/priyanshu-portfolio/components/layout/Footer.tsx): Brand footer block with subheadings, structured Sitemap and Elsewhere columns, a giant outline banner 'Alex ✕ 2026', and localized engineering/copyright tags.
- [LenisProvider](file:///Users/priyanshu/Downloads/Priyanshu's Space/Personal Portfolio/priyanshu-portfolio/components/LenisProvider.tsx): Client-side scroll provider wrapping the application root layout with Lenis to enable smooth inertial/momentum scrolling.
