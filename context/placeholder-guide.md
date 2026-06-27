# Placeholder Guide

Use this file to replace the starter portfolio placeholders. Search for each placeholder in the codebase and replace it with your real information.

---

## Profile Placeholders

| Placeholder | Replace With | Usually Found In |
| ----------- | ------------ | ---------------- |
| `[YOUR_NAME]` | Your full name | `content/profile.ts`, metadata, navbar |
| `[YOUR_INITIALS]` | 1-3 letter logo text | `components/layout/Navbar.tsx` or profile content |
| `[YOUR_ROLE]` | Your main title, e.g. Full Stack Developer | `content/profile.ts` |
| `[YOUR_LOCATION]` | City/country or Remote | `content/profile.ts`, About |
| `[YOUR_EMAIL]` | Public contact email | `content/profile.ts`, contact form config |
| `[YOUR_AVAILABILITY]` | Open to internships, freelance, full-time, etc. | Hero/About |
| `[YOUR_HERO_HEADLINE]` | Main homepage headline | `content/profile.ts` |
| `[YOUR_HERO_SUBHEADLINE]` | 1-2 sentence hero supporting copy | `content/profile.ts` |
| `[YOUR_SHORT_BIO]` | Short bio for homepage | `content/profile.ts` |
| `[YOUR_LONG_BIO]` | Longer About page bio | `content/profile.ts` |
| `[YOUR_RESUME_URL]` | Link/path to resume PDF | `content/profile.ts` |

---

## Social Link Placeholders

| Placeholder | Replace With |
| ----------- | ------------ |
| `[YOUR_GITHUB_URL]` | Your GitHub profile URL |
| `[YOUR_LINKEDIN_URL]` | Your LinkedIn profile URL |
| `[YOUR_TWITTER_URL]` | Your X/Twitter URL, optional |
| `[YOUR_PORTFOLIO_URL]` | Final live portfolio URL |
| `[YOUR_CALENDLY_URL]` | Scheduling link, optional |

Remove optional links you do not use.

---

## Project Placeholders

Duplicate the project template for each project.

| Placeholder | Replace With |
| ----------- | ------------ |
| `[PROJECT_1_TITLE]` | Project name |
| `[PROJECT_1_SLUG]` | URL slug, e.g. `ai-notes-app` |
| `[PROJECT_1_TAGLINE]` | One-line project pitch |
| `[PROJECT_1_SUMMARY]` | Short card description |
| `[PROJECT_1_CATEGORY]` | Web App, AI Tool, Mobile, Open Source, etc. |
| `[PROJECT_1_STATUS]` | Live, Prototype, Archived, In Progress |
| `[PROJECT_1_YEAR]` | Year or date range |
| `[PROJECT_1_ROLE]` | Your role in the project |
| `[PROJECT_1_STACK]` | Tech stack list |
| `[PROJECT_1_IMAGE]` | Screenshot path |
| `[PROJECT_1_LIVE_URL]` | Live demo URL |
| `[PROJECT_1_REPO_URL]` | GitHub repo URL |
| `[PROJECT_1_PROBLEM]` | Problem the project solves |
| `[PROJECT_1_SOLUTION]` | How you solved it |
| `[PROJECT_1_FEATURES]` | Key features |
| `[PROJECT_1_TECHNICAL_DETAILS]` | Architecture/implementation notes |
| `[PROJECT_1_IMPACT]` | Results, metrics, or learning outcomes |
| `[PROJECT_1_LESSONS]` | What you learned |

For more projects, use the same pattern with `PROJECT_2`, `PROJECT_3`, etc.

---

## Experience and Education Placeholders

| Placeholder | Replace With |
| ----------- | ------------ |
| `[EXPERIENCE_1_COMPANY]` | Company/client/organization |
| `[EXPERIENCE_1_ROLE]` | Role/title |
| `[EXPERIENCE_1_DATES]` | Date range |
| `[EXPERIENCE_1_DESCRIPTION]` | What you did and achieved |
| `[EDUCATION_1_SCHOOL]` | School/university |
| `[EDUCATION_1_DEGREE]` | Degree/program |
| `[EDUCATION_1_DATES]` | Date range or graduation year |

---

## SEO Placeholders

| Placeholder | Replace With |
| ----------- | ------------ |
| `[YOUR_SEO_TITLE]` | Site title under 60 characters |
| `[YOUR_SEO_DESCRIPTION]` | Site description around 140-160 characters |
| `[YOUR_SEO_KEYWORDS]` | Real skills/domains, comma separated |
| `[YOUR_SITE_URL]` | Production URL |
| `[YOUR_OG_IMAGE]` | Open Graph image path |

---

## Media Placeholders

| Placeholder | Replace With |
| ----------- | ------------ |
| `[YOUR_AVATAR_IMAGE]` | `/avatar.jpg` or remote image |
| `[PROJECT_1_SCREENSHOT]` | `/projects/project-1.png` |
| `[TESTIMONIAL_1_AVATAR]` | Optional recommender image |

Store local assets in `public/`.

---

## Final Check

Before launch, run:

```bash
rg "\\[[A-Z0-9_]+\\]" .
```

Replace every remaining public placeholder or remove the optional section that uses it.
