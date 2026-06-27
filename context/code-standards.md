# Code Standards

Implementation rules and conventions for the entire portfolio project. The AI agent must follow these in every session.

---

## Engineering Mindset

- Read `context/project-overview.md`, `context/architecture.md`, and `context/ui-rules.md` before implementation.
- Build one feature fully before starting the next.
- Prefer a static content-first portfolio unless the user explicitly asks for an admin CMS.
- Keep the public site fast, accessible, easy to maintain, and visually faithful to the supplied screenshots.
- AI-generated text is a draft. The developer must be able to review and edit before publishing.
- Scope is sacred. Do not add job platform, marketplace, SaaS dashboard, or unrelated features.

---

## TypeScript

- Strict mode enabled in `tsconfig.json`.
- Never use `any`; use `unknown` and narrow.
- Function parameters and return types must be explicit.
- Use `type` for object shapes and unions.
- Use `interface` only for extendable component props.
- Use `const` by default.
- All async functions must handle errors.

---

## Next.js 16 Conventions

- App Router only.
- React 19.
- Server Components by default.
- Add `"use client"` only for state, effects, browser APIs, event listeners, or client-only libraries.
- Data loading happens in Server Components or server helpers.
- Route handlers live in `app/api/`.
- Server Actions live in `actions/`.
- Always verify current Next.js APIs before implementing framework-specific behavior.

---

## File and Folder Naming

- Folders: kebab-case, e.g. `project-card`, `case-study`.
- Component files: PascalCase, e.g. `ProjectCard.tsx`.
- Utility files: camelCase, e.g. `placeholderDetection.ts`.
- API route files: always `route.ts`.
- One component per file.
- No barrel exports outside `components/ui/` unless the codebase already uses them.

---

## Component Structure

```typescript
"use client"; // only if needed

// 1. External imports
import { ArrowUpRight } from "lucide-react";

// 2. Internal imports
import { Button } from "@/components/ui/button";

// 3. Type definitions
type Props = {
  title: string;
  href: string;
};

// 4. Component
export function ComponentName({ title, href }: Props) {
  return null;
}
```

- Always use named exports for components.
- Define props type directly above the component unless shared.
- Style with Tailwind classes generated from project tokens.
- No inline styles except CSS variables when unavoidable.

---

## Public Portfolio Rules

- First viewport must match the screenshot hero: black background, metadata row, huge display heading, red outlined text, right copy/buttons, and stats grid.
- Public nav labels must be `WORK`, `ABOUT`, `SKILLS`, `EXPERIENCE`, `WORDS`, `JOURNAL`, `CONTACT`.
- Section labels must use the red `/ 02 - ABOUT` pattern.
- Selected work must be reachable from the hero CTA and nav.
- Project tiles must use dark image overlays, red meta text, square tech tags, and corner arrows.
- Case study pages must include problem, solution, stack, and impact/learning.
- Contact links must be obvious and keyboard accessible.
- Use `next/image` for important images.
- Every non-decorative image needs useful alt text.
- Do not write in-app instructional text like "this section shows..." unless it is real portfolio copy.
- Do not add a public light theme, rounded SaaS cards, pill tags, gradients, or soft shadows.

---

## AI Route Handlers

```typescript
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    // validate body
    // call ai function
    return NextResponse.json({ success: true, data: result });
  } catch (error) {
    console.error("[api/ai/generate-project]", error);
    return NextResponse.json(
      { success: false, error: "Could not generate content. Please try again." },
      { status: 500 },
    );
  }
}
```

- Every route handler has try/catch.
- Validate every request body with Zod.
- Return `{ success: boolean, data?: T, error?: string }`.
- Never return raw OpenAI output without validation.
- Never expose raw provider errors to users.

---

## Server Actions

```typescript
"use server";

import { revalidatePath } from "next/cache";

export async function saveProject(formData: ProjectFormData) {
  try {
    // validate
    // save
    revalidatePath("/projects");
    return { success: true };
  } catch (error) {
    console.error("[actions/projects]", error);
    return { success: false, error: "Failed to save project" };
  }
}
```

- Every Server Action has try/catch.
- Every Server Action returns `{ success: boolean, error?: string }`.
- Revalidate affected public pages after content mutations.

---

## AI Code

- AI functions live in `ai/`.
- AI functions return structured data, not prose blobs.
- Always ask GPT-4o for valid JSON and validate the parsed result.
- Keep temperature low for SEO and structured content.
- Use a slightly higher temperature for bio or narrative copy.
- Never overwrite published content directly with AI output.

---

## Analytics Events

Use these exact event names. Update this file before adding new events.

| Event                    | When                                 | Key Properties                 |
| ------------------------ | ------------------------------------ | ------------------------------ |
| `portfolio_viewed`       | Public page viewed                   | path, visitorType              |
| `project_opened`         | Project card/detail opened           | projectSlug, projectTitle      |
| `contact_clicked`        | Email/social/contact CTA clicked     | channel                        |
| `contact_form_submitted` | Contact form submitted successfully  | sourcePath                     |
| `ai_content_generated`   | AI draft generated                   | contentType                    |
| `content_published`      | Admin accepts/publishes content      | contentType, itemId            |

---

## Placeholder Standard

Use square-bracket placeholders in initial content so they are easy to search:

```text
[YOUR_NAME]
[YOUR_ROLE]
[YOUR_EMAIL]
[YOUR_GITHUB_URL]
```

Rules:

- Every placeholder must appear in `placeholder-guide.md`.
- Do not invent one-off placeholder formats.
- Before final deployment, run a search for `[` placeholder strings.
- The public site should display a friendly empty state instead of raw placeholders when possible.

---

## Environment Variables

Only include variables for features actually used.

| Variable                    | Used In                       |
| --------------------------- | ----------------------------- |
| `OPENAI_API_KEY`            | AI content generation         |
| `NEXT_PUBLIC_POSTHOG_KEY`   | Browser analytics             |
| `NEXT_PUBLIC_POSTHOG_HOST`  | Browser analytics             |
| `RESEND_API_KEY`            | Contact form email, optional  |
| `CONTACT_TO_EMAIL`          | Contact form destination      |
| `NEXT_PUBLIC_SITE_URL`      | SEO, sitemap, canonical URLs  |
| `AUTH_SECRET`               | Optional admin auth           |

Never add `NEXT_PUBLIC_` to secret keys.

---

## Import Aliases

Always use the `@/` alias for project imports.

```typescript
import { ProjectCard } from "@/components/projects/ProjectCard";
import { profile } from "@/content/profile";
import { cn } from "@/lib/utils";
```

Avoid deep relative imports like `../../../components/...`.

---

## Comments

- Code should be self-explanatory.
- Comments explain why, not what.
- Never leave TODO comments in finished work.

---

## Dependencies

Approved dependencies:

- `next`
- `react`
- `react-dom`
- `tailwindcss`
- `shadcn/ui` components
- `lucide-react`
- `zod`
- `openai`
- `posthog-js`
- `posthog-node`
- `resend` or equivalent email provider, optional
- `next-mdx-remote` or MDX tooling, optional

Do not install new packages unless the feature clearly needs them and this list is updated.
