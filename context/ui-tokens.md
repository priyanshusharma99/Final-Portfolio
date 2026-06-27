# UI Tokens

Tokens for the exact dark editorial portfolio shown in the reference screenshots. Use these values throughout the public portfolio UI.

---

## How to Use

This project uses Tailwind CSS v4. Define tokens in `app/globals.css` with `@theme`.

```tsx
// Correct
className="bg-background text-text-primary border-border"

// Correct for outlined display text
className="text-transparent [-webkit-text-stroke:2px_var(--color-accent)]"

// Never
className="bg-white text-gray-700 rounded-2xl shadow-xl"
```

---

## globals.css Token Definition

```css
@import "tailwindcss";

@theme {
  /* Fonts */
  --font-display: "Archivo Black", sans-serif;
  --font-sans: "Inter Tight", sans-serif;
  --font-mono: "IBM Plex Mono", monospace;

  /* Backgrounds */
  --color-background: #030303;
  --color-surface: #070707;
  --color-surface-raised: #0b0b0b;
  --color-surface-muted: #111111;

  /* Borders */
  --color-border: #1c1c1c;
  --color-border-strong: #303030;
  --color-border-faint: #111111;

  /* Text */
  --color-text-primary: #f7f7f2;
  --color-text-secondary: #c9c9c3;
  --color-text-muted: #747474;
  --color-text-faint: #4f4f4f;
  --color-text-inverse: #030303;

  /* Accent */
  --color-accent: #ff3b30;
  --color-accent-dark: #d92820;
  --color-accent-muted: rgba(255, 59, 48, 0.12);
  --color-accent-foreground: #030303;

  /* Status */
  --color-success: #f7f7f2;
  --color-warning: #ff3b30;
  --color-error: #ff3b30;

  /* Radius */
  --radius-none: 0px;
  --radius-sm: 0px;
  --radius-md: 0px;
  --radius-lg: 0px;
  --radius-xl: 0px;

  /* Layout */
  --spacing-page-x: 62px;
  --spacing-section-y: 96px;
  --spacing-header-h: 84px;
}
```

Add these base utilities in `globals.css` if needed:

```css
html {
  scroll-behavior: smooth;
  background: var(--color-background);
}

body {
  background: var(--color-background);
  color: var(--color-text-primary);
  overflow-x: hidden;
}

::selection {
  background: var(--color-accent);
  color: var(--color-text-inverse);
}

.display-fill {
  font-family: var(--font-display);
  color: var(--color-text-primary);
  text-transform: uppercase;
  letter-spacing: -0.04em;
  line-height: 0.86;
}

.display-outline {
  font-family: var(--font-display);
  color: transparent;
  -webkit-text-stroke: 2px var(--color-accent);
  text-transform: uppercase;
  font-style: italic;
  letter-spacing: -0.04em;
  line-height: 0.86;
}
```

---

## Color Usage

| Element | Token |
| ------- | ----- |
| Page background | `bg-background` |
| Header/background panels | `bg-background` or `bg-surface` |
| Highlighted timeline/project row | `bg-surface-raised` |
| Thin dividers | `border-border` |
| Strong dividers/active card | `border-border-strong` |
| Primary text/headings | `text-text-primary` |
| Body copy | `text-text-muted` |
| Faint oversized outline text | `text-text-faint` as stroke color |
| Section labels/meta | `text-accent` |
| Red buttons | `bg-accent text-text-inverse` |

---

## Typography Scale

| Role | Font | Size | Weight | Line Height | Tracking | Color |
| ---- | ---- | ---- | ------ | ----------- | -------- | ----- |
| Mega heading | Display | `clamp(4.5rem, 11vw, 13rem)` | 400 | 0.86 | -0.04em | white |
| Mega outline | Display | `clamp(4rem, 10vw, 12rem)` | 400 italic | 0.86 | -0.04em | red stroke |
| Section heading | Display | `clamp(3.5rem, 7vw, 8rem)` | 400 | 0.88 | -0.04em | white |
| Project title | Display | `clamp(2.25rem, 4vw, 5rem)` | 400 | 0.95 | -0.04em | white |
| Skill item | Display | `32px` | 400 | 1.1 | -0.04em | white |
| Nav label | Mono | `14px` | 400 | 1 | 0.42em | gray |
| Section kicker | Mono | `13px` | 600 | 1 | 0.45em | red |
| Meta label | Mono | `12px` | 500 | 1.2 | 0.42em | red/gray |
| Body copy | Mono | `18px` | 400 | 1.55 | -0.02em | muted gray |
| Form text | Mono | `16px` | 400 | 1.4 | 0 | white/gray |
| Button text | Mono | `13px` | 700 | 1 | 0.42em | black/white |

Mobile adjustments:

- Mega heading: `clamp(3.2rem, 17vw, 6.5rem)`.
- Body copy: `15px`.
- Nav hidden behind menu.

---

## Spacing

| Token | Value | Usage |
| ----- | ----- | ----- |
| `px-page-x` | 62px | Desktop page padding |
| `py-section-y` | 96px | Desktop section padding |
| `h-header-h` | 84px | Desktop header height |
| `gap-4` | 16px | Inline controls |
| `gap-8` | 32px | Grid gaps |
| `gap-12` | 48px | Section internal gaps |
| `gap-20` | 80px | Large editorial spacing |

Mobile:

- Page x padding: `20px`.
- Section y padding: `64px`.

---

## Component Tokens

### Header

```tsx
h-[84px] border-b border-border bg-background px-page-x
```

### Section

```tsx
border-t border-border px-page-x py-section-y
```

### Kicker

```tsx
font-mono text-[13px] font-semibold uppercase tracking-[0.45em] text-accent
```

### Display Fill

```tsx
font-display text-[clamp(4.5rem,11vw,13rem)] leading-[0.86] tracking-[-0.04em] uppercase text-text-primary
```

### Display Outline Red

```tsx
font-display italic text-transparent [-webkit-text-stroke:2px_var(--color-accent)] text-[clamp(4rem,10vw,12rem)] leading-[0.86] tracking-[-0.04em] uppercase
```

### Display Outline Gray

```tsx
font-display text-transparent [-webkit-text-stroke:1.5px_var(--color-text-faint)] text-[clamp(5rem,12vw,14rem)] leading-none tracking-[-0.05em] uppercase
```

### Body Copy

```tsx
font-mono text-[18px] leading-[1.55] tracking-[-0.02em] text-text-muted
```

### Red CTA

```tsx
bg-accent text-text-inverse border border-accent px-8 h-16 font-mono text-[13px] font-bold uppercase tracking-[0.42em]
```

### White CTA

```tsx
bg-text-primary text-text-inverse border border-text-primary px-8 h-14 font-mono text-[13px] font-bold uppercase tracking-[0.42em]
```

### Outline CTA

```tsx
bg-transparent text-text-primary border border-border-strong px-8 h-14 font-mono text-[13px] font-bold uppercase tracking-[0.42em]
```

### Tech Tag

```tsx
border border-border-strong px-3 py-2 font-mono text-[11px] uppercase tracking-[0.28em] text-text-muted
```

### Input

```tsx
bg-transparent border border-border h-[58px] px-5 font-mono text-[16px] text-text-primary placeholder:text-text-faint focus:border-accent focus:outline-none
```

### Textarea

```tsx
bg-transparent border border-border min-h-[190px] px-5 py-5 font-mono text-[16px] text-text-primary placeholder:text-text-faint focus:border-accent focus:outline-none
```

---

## Exact Accent Values

Use red for:

- Logo square
- Section numbers/kickers
- CTA button background
- Outlined headline stroke
- Selected/hovered testimonial border
- Journal active row title/arrow
- Experience highlighted role title
- Bullet arrows

Do not introduce a second accent color.
