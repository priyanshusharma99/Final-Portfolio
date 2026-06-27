# Library Docs

Project-specific usage patterns for third party libraries in this portfolio project. Read the relevant section before implementing a feature that touches that library.

---

## Before Using Any Library

Before implementing a feature with a third party library:

1. Check `AGENTS.md` for installed skills or project-specific instructions.
2. Use any configured MCP server or official documentation when APIs may have changed.
3. Follow this file for project-specific rules.

Authority order:

```
MCP / official docs → AGENTS.md skills → this file → general knowledge
```

---

## Next.js

### Metadata

Use metadata for every public route.

```typescript
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Priyanshu | Full Stack Developer",
  description: "Portfolio of Priyanshu, a developer building web apps and AI tools.",
};
```

For dynamic project pages, derive metadata from the project record.

```typescript
export function generateMetadata({ params }: Props): Metadata {
  const project = getProjectBySlug(params.slug);

  return {
    title: `${project.title} | Project`,
    description: project.summary,
    openGraph: {
      title: project.title,
      description: project.summary,
      images: [project.imageUrl],
    },
  };
}
```

### Images

Use `next/image` for avatar, project screenshots, and blog cover images.

Rules:

- Always provide meaningful alt text.
- Use stable `width`/`height` or a stable aspect-ratio container.
- Do not use remote image domains until they are configured.

---

## Static Content

Prefer static content for the first version.

```typescript
// content/profile.ts
import type { Profile } from "@/types";

export const profile: Profile = {
  name: "[YOUR_NAME]",
  role: "[YOUR_ROLE]",
  headline: "[YOUR_HERO_HEADLINE]",
  shortBio: "[YOUR_SHORT_BIO]",
  email: "[YOUR_EMAIL]",
  socials: [],
  skills: [],
  experience: [],
  education: [],
  seo: {
    title: "[YOUR_NAME] | [YOUR_ROLE]",
    description: "[YOUR_SEO_DESCRIPTION]",
    keywords: [],
  },
};
```

```typescript
// content/projects.ts
import type { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "sample-project",
    title: "[PROJECT_1_TITLE]",
    tagline: "[PROJECT_1_TAGLINE]",
    summary: "[PROJECT_1_SUMMARY]",
    category: "Web App",
    featured: true,
    status: "Live",
    year: "2026",
    role: "[YOUR_PROJECT_ROLE]",
    stack: ["Next.js", "TypeScript"],
    imageUrl: "/projects/project-1.png",
    liveUrl: "[PROJECT_1_LIVE_URL]",
    repoUrl: "[PROJECT_1_REPO_URL]",
    problem: "[PROJECT_1_PROBLEM]",
    solution: "[PROJECT_1_SOLUTION]",
    features: [],
    technicalDetails: [],
    impact: [],
    lessons: [],
  },
];
```

Rules:

- Keep content data typed.
- Do not mix layout classes into content files.
- Use square-bracket placeholders only.

---

## OpenAI GPT-4o

Use OpenAI only for draft generation. Never automatically publish generated content.

### Client

```typescript
// lib/openai.ts
import OpenAI from "openai";

export const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});
```

### Structured JSON Response

```typescript
const response = await openai.chat.completions.create({
  model: "gpt-4o",
  response_format: { type: "json_object" },
  temperature: 0.5,
  messages: [
    {
      role: "system",
      content:
        "You write polished developer portfolio content. Return only valid JSON.",
    },
    {
      role: "user",
      content: prompt,
    },
  ],
});

const content = response.choices[0].message.content;
if (!content) throw new Error("Missing OpenAI response content");
const parsed = JSON.parse(content);
```

Temperature:

- `0.3` for SEO metadata.
- `0.5` for project case studies.
- `0.7` for bio/headline variants.

Rules:

- Validate parsed JSON with Zod.
- Keep prompts grounded in user-provided facts.
- Never invent metrics, employers, clients, degrees, awards, or project outcomes.
- If a metric is unknown, write a qualitative outcome or ask for the missing detail.

---

## AI Bio Generation

### Prompt Intent

Turn raw developer notes into concise portfolio copy.

### Output Shape

```typescript
type BioDraft = {
  headlineOptions: string[];
  subheadline: string;
  shortBio: string;
  longBio: string;
  skillsSummary: string;
};
```

### Rules

- Keep headline specific and credible.
- Avoid generic claims like "passionate developer" unless backed by detail.
- Mention the developer's strongest stack and domain.
- Produce multiple headline options for easy selection.

---

## AI Project Case Study Generation

### Prompt Intent

Turn project notes into a useful portfolio case study.

### Output Shape

```typescript
type ProjectDraft = {
  tagline: string;
  summary: string;
  problem: string;
  solution: string;
  features: string[];
  technicalDetails: string[];
  impact: string[];
  lessons: string[];
};
```

### Rules

- Separate product value from implementation detail.
- Do not invent live users, revenue, performance gains, or company names.
- If the project is a learning project, frame learning honestly and professionally.
- Include concrete technical decisions when the user provides stack details.

---

## AI SEO Generation

### Output Shape

```typescript
type SeoDraft = {
  title: string;
  description: string;
  keywords: string[];
  ogTitle: string;
  ogDescription: string;
};
```

Rules:

- Title under 60 characters when possible.
- Description around 140-160 characters.
- Keywords should match actual skills/projects.
- Avoid keyword stuffing.

---

## PostHog

### Browser Setup

```typescript
// lib/analytics-client.ts
import posthog from "posthog-js";

export function initAnalytics() {
  if (typeof window !== "undefined" && process.env.NEXT_PUBLIC_POSTHOG_KEY) {
    posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
      api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
      capture_pageview: false,
    });
  }
}
```

### Server Setup

```typescript
import { PostHog } from "posthog-node";

export function createAnalyticsServer() {
  return new PostHog(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
    host: process.env.NEXT_PUBLIC_POSTHOG_HOST!,
    flushAt: 1,
    flushInterval: 0,
  });
}
```

Rules:

- Event names must match `code-standards.md`.
- Always call `await posthog.shutdown()` in server-side functions.
- Analytics must not block the main user action.

---

## Contact Email

Use a provider such as Resend only if the contact form should send email.

```typescript
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

await resend.emails.send({
  from: "Portfolio <onboarding@resend.dev>",
  to: process.env.CONTACT_TO_EMAIL!,
  subject: `Portfolio contact: ${subject}`,
  text: message,
  replyTo: email,
});
```

Rules:

- Validate name, email, and message with Zod.
- Rate-limit or add spam protection before production if the form is public.
- Show a friendly success message.
- Never expose provider errors to visitors.

---

## shadcn/ui

Use shadcn/ui primitives for accessible controls:

- Button
- Input
- Textarea
- Dialog
- Dropdown Menu
- Tabs
- Badge
- Card only for compact repeated items and admin panels

Rules:

- Keep component styling aligned with `ui-tokens.md`.
- Do not use shadcn defaults that conflict with project tokens.
- Use lucide icons inside buttons when there is a clear matching icon.

---

## MDX

Use MDX only for blog posts or long case studies if static content becomes too large for TypeScript files.

Recommended structure:

```
content/blog/my-post.mdx
content/projects/my-project.mdx
```

Rules:

- Keep frontmatter typed and validated.
- Do not allow untrusted user-submitted MDX.
- Project cards should still read summary metadata without rendering full MDX.

---

## Placeholder Detection

Placeholders follow this pattern:

```text
[YOUR_NAME]
[PROJECT_1_TITLE]
```

Detection helper should scan:

- `content/profile.ts`
- `content/projects.ts`
- `content/testimonials.ts`
- `.mdx` files
- Admin DB records if using dynamic mode

Before deployment, there should be no unresolved placeholder strings in public content.
