# Architecture

## Stack

| Layer                  | Tool                     | Purpose                                      |
| ---------------------- | ------------------------ | -------------------------------------------- |
| Framework              | Next.js 16 App Router    | Full stack framework                         |
| Styling                | Tailwind CSS + shadcn/ui | UI components and styling                    |
| Language               | TypeScript strict        | Throughout                                   |
| AI model               | OpenAI GPT-4o            | Portfolio copy, case studies, SEO drafts     |
| Content                | TypeScript/MDX or DB     | Portfolio profile, projects, blog content    |
| Auth                   | Optional                 | Protect admin area only                      |
| Storage                | Optional                 | Project images, avatar, resume PDF           |
| Analytics              | PostHog                  | Public engagement and admin content events   |
| Email                  | Resend or provider API   | Contact form delivery                        |
| Icons                  | lucide-react             | UI icons                                     |

Use the simplest architecture that fits the requested portfolio. Default to a static single-page anchor portfolio matching the screenshots; add detail pages or admin only when explicitly needed.

---

## Folder Structure

```
/
├── AGENTS.md
├── context/
│   ├── project-overview.md
│   ├── architecture.md
│   ├── ui-tokens.md
│   ├── ui-rules.md
│   ├── ui-registry.md
│   ├── code-standards.md
│   ├── library-docs.md
│   ├── build-plan.md
│   └── progress-tracker.md
├── app/
│   ├── layout.tsx                         → Root layout, theme, analytics provider
│   ├── page.tsx                           → Single-page portfolio with anchor sections
│   ├── work/
│   │   └── [slug]/
│   │       └── page.tsx                   → Optional project case study
│   ├── journal/
│   │   └── [slug]/
│   │       └── page.tsx                   → Optional article
│   ├── login/
│   │   └── page.tsx                       → Optional admin login
│   ├── admin/
│   │   ├── page.tsx                       → Admin dashboard
│   │   ├── content/
│   │   │   └── page.tsx                   → AI content assistant
│   │   ├── projects/
│   │   │   └── page.tsx                   → Project manager
│   │   └── settings/
│   │       └── page.tsx                   → Profile and SEO settings
│   └── api/
│       ├── ai/
│       │   ├── generate-bio/route.ts      → AI bio drafts
│       │   ├── generate-project/route.ts  → AI project drafts
│       │   └── generate-seo/route.ts      → AI metadata drafts
│       └── contact/route.ts               → Contact form submission
├── content/
│   ├── profile.ts                         → Static profile data
│   ├── projects.ts                        → Static project cards/case studies
│   ├── testimonials.ts                    → Optional recommendations
│   └── blog/                              → Optional MDX posts
├── actions/
│   ├── content.ts                         → Admin content saves
│   ├── projects.ts                        → Admin project saves
│   └── contact.ts                         → Contact mutations if using Server Actions
├── ai/
│   ├── bio.ts                             → Bio generation logic
│   ├── project.ts                         → Project case study generation logic
│   ├── seo.ts                             → SEO generation logic
│   └── types.ts                           → AI-specific types
├── components/
│   ├── ui/                                → shadcn/ui components only
│   ├── layout/
│   │   ├── SiteHeader.tsx
│   │   ├── Footer.tsx
│   │   └── MobileNav.tsx
│   ├── shared/
│   │   ├── SectionKicker.tsx
│   │   └── DisplayHeading.tsx
│   ├── home/
│   │   ├── Hero.tsx
│   │   ├── StatsGrid.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ToolkitSection.tsx
│   │   ├── SelectedWork.tsx
│   │   ├── TrajectorySection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   ├── JournalSection.tsx
│   │   └── ContactSection.tsx
│   ├── projects/
│   │   ├── ProjectTile.tsx
│   │   └── CaseStudy.tsx
│   ├── contact/
│   │   └── ContactForm.tsx
│   └── admin/
│       ├── CompletenessCards.tsx
│       ├── PlaceholderChecklist.tsx
│       ├── ContentEditor.tsx
│       ├── ProjectEditor.tsx
│       └── AiDraftPreview.tsx
├── lib/
│   ├── analytics-client.ts
│   ├── analytics-server.ts
│   ├── auth-client.ts                    → Optional
│   ├── auth-server.ts                    → Optional
│   ├── content.ts                        → Static content helpers
│   ├── email.ts                          → Contact email provider
│   ├── openai.ts                         → OpenAI client
│   ├── placeholders.ts                   → Placeholder detection
│   ├── seo.ts                            → Metadata helpers
│   └── utils.ts
└── types/
    └── index.ts
```

---

## System Boundaries

| Folder        | Owns                                                       |
| ------------- | ---------------------------------------------------------- |
| `app/`        | Pages and API routes only                                  |
| `components/` | UI only. No direct DB calls                                |
| `content/`    | Static portfolio content                                   |
| `ai/`         | AI generation logic. Nothing here imports React            |
| `actions/`    | Server Actions for admin saves or contact mutations        |
| `lib/`        | Third-party clients, utilities, metadata, content helpers   |
| `types/`      | Shared TypeScript types                                    |

---

## Data Flow

### Static Public Pages

```
content/*.ts or MDX
        ↓
lib/content.ts
        ↓
Server Component page
        ↓
Single-page screenshot-matched portfolio UI
```

### Admin Saves

```
Admin editor
        ↓
Server Action in actions/
        ↓
DB write or content update workflow
        ↓
revalidatePath()
```

### AI Draft Generation

```
User provides rough notes
        ↓
API route in app/api/ai/*
        ↓
ai/*.ts calls GPT-4o
        ↓
Structured draft returned
        ↓
User accepts, edits, or discards
```

### Contact Form

```
Visitor submits contact form
        ↓
app/api/contact or actions/contact.ts
        ↓
Validate with Zod
        ↓
Send email / store lead
        ↓
Return friendly success message
```

---

## Static Content Types

### `Profile`

| Field             | Type     | Notes                                      |
| ----------------- | -------- | ------------------------------------------ |
| name              | string   | Developer name                             |
| role              | string   | Main title                                 |
| location          | string   | City/country or remote                     |
| availability      | string   | Open to work/freelance/collaboration       |
| headline          | string   | Hero headline                              |
| shortBio          | string   | 1-2 sentence homepage bio                  |
| longBio           | string   | About page bio                             |
| email             | string   | Contact email                              |
| avatarUrl         | string   | Local or remote image path                 |
| resumeUrl         | string   | Optional PDF path                          |
| socials           | object[] | GitHub, LinkedIn, X, email, etc.           |
| skills            | object[] | Grouped skill categories                   |
| experience        | object[] | Work/internship/freelance timeline         |
| education         | object[] | Education and certifications               |
| seo               | object   | Site title, description, keywords          |

### `Project`

| Field             | Type     | Notes                                      |
| ----------------- | -------- | ------------------------------------------ |
| slug              | string   | URL-safe unique slug                       |
| title             | string   | Project name                               |
| tagline           | string   | One-line summary                           |
| summary           | string   | Card/overview paragraph                    |
| category          | string   | Web app, AI, mobile, open source, etc.     |
| featured          | boolean  | Show on homepage                           |
| status            | string   | Live, prototype, archived, in progress     |
| year              | string   | Year or date range                         |
| role              | string   | Developer's role                           |
| stack             | string[] | Tech stack tags                            |
| imageUrl          | string   | Screenshot/cover image                     |
| liveUrl           | string   | Optional demo link                         |
| repoUrl           | string   | Optional GitHub link                       |
| problem           | string   | Case study section                         |
| solution          | string   | Case study section                         |
| features          | string[] | Key product features                       |
| technicalDetails  | string[] | Architecture/implementation decisions      |
| impact            | string[] | Results, metrics, or learnings             |
| lessons           | string[] | What the developer learned                 |

### `AiDraft`

| Field       | Type        | Notes                                  |
| ----------- | ----------- | -------------------------------------- |
| id          | string      | Draft identifier                       |
| contentType | string      | bio / project / seo                    |
| sourceInput | json        | User notes used to generate draft      |
| output      | json        | Generated structured content           |
| status      | string      | draft / accepted / discarded           |
| createdAt   | timestamptz |                                        |

---

## Optional Database Tables

Use these only when building the dynamic/admin version.

### `portfolio_profile`

Same fields as `Profile`, scoped to `user_id`.

### `projects`

Same fields as `Project`, scoped to `user_id`.

### `ai_drafts`

Same fields as `AiDraft`, scoped to `user_id`.

### `contact_messages`

| Column     | Type        | Notes                    |
| ---------- | ----------- | ------------------------ |
| id         | uuid        |                          |
| name       | text        | Sender name              |
| email      | text        | Sender email             |
| subject    | text        | Optional                 |
| message    | text        | Contact message          |
| sourcePath | text        | Page where form appeared |
| created_at | timestamptz |                          |

---

## AI Generation Patterns

### Bio Draft Shape

```json
{
  "headlineOptions": ["string"],
  "subheadline": "string",
  "shortBio": "string",
  "longBio": "string",
  "skillsSummary": "string"
}
```

### Project Draft Shape

```json
{
  "tagline": "string",
  "summary": "string",
  "problem": "string",
  "solution": "string",
  "features": ["string"],
  "technicalDetails": ["string"],
  "impact": ["string"],
  "lessons": ["string"]
}
```

### SEO Draft Shape

```json
{
  "title": "string",
  "description": "string",
  "keywords": ["string"],
  "ogTitle": "string",
  "ogDescription": "string"
}
```

---

## Invariants

- Public portfolio pages must work even if AI features are disabled.
- Public UI must follow `ui-rules.md` screenshot styling before any admin or AI polish.
- AI output is always a draft until the developer accepts it.
- Never publish placeholder text that still contains square-bracket placeholders.
- Every project tile must include title, meta, stack tags, and at least one link or status.
- Every important image uses alt text.
- Components do not fetch directly from the database.
- API routes contain no UI logic.
- AI functions never import from `components/` or `actions/`.
- All server-side writes are scoped to the current admin user if auth is enabled.
- No hardcoded color values in components; use tokens from `ui-tokens.md`.
- Contact form errors are friendly and never expose raw provider errors.
- Keep static mode simple: do not add auth, DB, or storage unless required.
- Do not add a public light theme; the requested design is dark-only.
