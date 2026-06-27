# Project Overview

## About the Project

DevFolio AI is a personal developer portfolio website built with Next.js. It helps a developer present their work clearly, reduce manual copywriting, and keep the portfolio easy to update. The public site must match the supplied dark editorial screenshots: black background, giant white and red outlined typography, thin grid borders, red section labels, and monospace supporting copy.

The goal is not a generic landing page. The first screen should immediately feel like the screenshot reference: a high-impact one-page portfolio for a developer who ships real products.

---

## The Problem It Solves

Developers often delay portfolio work because writing project case studies, keeping skills updated, and polishing content takes time. DevFolio AI reduces that work by generating strong first drafts for bio copy, project descriptions, resume summaries, achievement bullets, and SEO metadata while still keeping the developer in control.

---

## Pages

```
/                    → Single-page public portfolio with anchor sections
/work/[slug]         → Optional individual project case study
/journal/[slug]      → Optional article page
/admin               → Private dashboard for editing portfolio content
/admin/content       → AI-assisted content generation and editing
/admin/projects      → Project management
/admin/settings      → Profile, links, SEO, theme settings
/login               → Optional admin login
```

Default to the single-page public portfolio. Add separate work or journal detail pages only when the content needs them.

---

## Navigation

Top navbar exactly follows the screenshots.

```
WORK    ABOUT    SKILLS    EXPERIENCE    WORDS    JOURNAL    CONTACT
```

Left logo is a red square plus uppercase name. Right CTA is a red rectangular `START A PROJECT →` button. All nav items are uppercase monospace with wide letter spacing.

---

## Core User Flow

### Public Visitor Flow

- Visitor lands on homepage.
- Hero shows metadata, massive display headline, supporting copy, CTA buttons, and stats.
- Visitor scrolls through About, Toolkit, Selected Work, Trajectory, Kind Words, Journal, and Contact.
- Visitor can open a project case study or external project link from Selected Work.
- Visitor can contact the developer from the final Get In Touch section.

### Developer Setup Flow

- Developer fills profile details in `/admin/settings` or edits local content files.
- Developer adds raw project notes, repository URL, live demo URL, screenshots, and metrics.
- AI generates polished project case study copy.
- Developer reviews, edits, and publishes.
- Dashboard shows missing content, SEO completeness, project count, and recent updates.

### AI Content Generation Flow

- Developer provides rough inputs:
  - personal bio notes
  - resume text
  - project name, stack, problem, solution, impact
  - GitHub repository or live URL
- GPT-4o generates:
  - homepage headline and subheadline options
  - professional bio
  - project summary
  - case study sections
  - achievement bullets
  - SEO title and meta description
- AI output is never published automatically. User must review and save.

---

## Public Homepage Sections

- Header with red square logo, centered nav, red CTA
- `/ 01` Hero: metadata row, massive `BUILDING DIGITAL PRODUCTS THAT ACTUALLY SHIP.` headline, right copy/buttons, stats grid
- `/ 02 - ABOUT`: giant heading, bio paragraphs, grayscale portrait, bordered info grid
- `/ 03 - TOOLKIT`: tools heading, outlined tech marquee, four-column skills grid
- `/ 04 - SELECTED WORK`: asymmetric dark project grid
- `/ 05 - TRAJECTORY`: experience timeline rows
- `/ 06 - KIND WORDS`: testimonial cards
- `/ 07 - JOURNAL`: article rows
- `/ 08 - GET IN TOUCH`: contact info panel and form
- Footer with giant name, outlined role/wordmark, sitemap, elsewhere links

---

## Project Case Study Page

Each project should include:

- Project title and one-line summary
- Hero image or screenshot
- Role, timeline, status, category
- Tech stack tags
- Problem
- Solution
- Key features
- Technical decisions
- Results or impact
- Challenges and learnings
- Links: live demo, GitHub repo, video, article
- Related projects

---

## Admin Dashboard

Private admin area is optional, but useful for AI-assisted workflows.

- Content completeness cards
- Featured project manager
- Recent edits
- Missing placeholder checklist
- Quick actions:
  - Generate bio
  - Add project
  - Generate project case study
  - Update SEO
  - Export content

---

## Data Architecture

### Profile Data

Developer identity, bio, contact links, skills, experience, education, and SEO settings. Store in `portfolio_profile` table for a dynamic app or in `content/profile.ts` for a static app.

### Project Data

Project cards and case studies. Store in `projects` table for a dynamic app or MDX files under `content/projects/` for a static app.

### AI Draft Data

AI generations are drafts. Store them separately from published content so the user can accept, edit, or discard.

---

## Features In Scope

- Next.js App Router portfolio site
- Screenshot-matched single-page homepage
- Anchor navigation for Work, About, Skills, Experience, Words, Journal, Contact
- Optional project case study pages
- Optional journal article pages
- Contact section with form validation
- SEO metadata and Open Graph images
- AI content generation for bio, project descriptions, case studies, and SEO
- Admin dashboard for editing content
- Placeholder checklist so the developer knows what to replace
- Analytics for public page views and contact clicks
- Accessible UI with keyboard-friendly interactions

---

## Features Out of Scope

- Job board or job search features
- Resume tailoring for applications
- Company research agent
- Auto-applying to jobs
- Payment or subscription system
- Team accounts
- Complex CMS workflows
- Social network features
- Real-time chat
- E-commerce
- Light theme toggle
- Soft SaaS dashboard design on the public site
- Rounded card-heavy portfolio UI

---

## Analytics Events

```typescript
portfolio_viewed; // { path, visitorType }
project_opened; // { projectSlug, projectTitle }
contact_clicked; // { channel }
contact_form_submitted; // { sourcePath }
ai_content_generated; // { contentType }
content_published; // { contentType, itemId }
```

---

## Target User

A developer who:

- Wants a professional portfolio quickly
- Wants AI help with writing and structuring content
- Has projects, GitHub repos, internships, freelance work, or learning projects to present
- Wants the site to help with internships, jobs, freelance leads, or personal branding
- Prefers a modern, maintainable Next.js codebase

---

## Success Criteria

- Visitor immediately sees the exact dark editorial visual style from the screenshots.
- Hero typography, red outline text, grid borders, and monospace labels match the references.
- Selected work is reachable from the first hero CTAs and nav.
- Every project has a clear problem, solution, stack, and outcome.
- Contact links work and are easy to find.
- AI-generated content can be reviewed before publishing.
- All placeholders are easy to locate and replace.
- Site is responsive, accessible, fast, and SEO-friendly.
- The codebase is clean enough for the developer to maintain after AI generation.
