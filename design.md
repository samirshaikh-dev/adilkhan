# Adil Khan — Personal Portfolio: Design & Build Specification

## 1. Project Goal

Build a professional single-page portfolio for **Adil Khan**, positioned as a business-minded MBA student and national-level grappling athlete. The site supports his professional digital presence for management-related opportunities, networking, and showcasing verified achievements.

### Art direction

**Athletic editorial:** business credibility meets mat discipline. The page alternates **dark**, **light**, and **tint** horizontal bands—not a flat all-white template. Personality comes from verified copy, real photos when available, and restrained typography (serif display + sans body). Avoid generic SaaS or AI-landing-page clichés (fake stats, skill bars, stock portraits, neon glow).

### Non-negotiables

- **Strictly one page.** No extra pages, routes, or gallery/contact sub-pages. All navigation scrolls to sections on the same page.
- **Mobile-first and fully responsive.** Design at 360px first, then adapt to tablet and desktop.
- **Verified content only.** Never invent contact details, institutions, dates, experience, skills, leadership roles, metrics, or achievements.
- **Authentic photos only.** Real sports and award-ceremony photos of Adil. No AI-generated or stock images presented as him.
- **No fake image placeholders.** If a photo is not provided, omit the figure entirely or use the approved non-photographic hero panel (see §4.2). Never label boxes “Portrait”, “Profile photo”, or similar.

---

## 2. Design Tokens

All styling uses CSS custom properties defined in [src/app/globals.css](src/app/globals.css). Avoid one-off colors outside these tokens except documented decorative gradients on the hero panel.

### 2.1 Colour palette

| Token | Value | Use |
|---|---|---|
| `--hero-bg` | `#0B1220` | Hero, interests band, footer |
| `--hero-bg-soft` | `#141D2E` | Hero panel depth, mobile nav on dark header |
| `--hero-text` | `#F7F5F2` | Headings and primary text on dark bands |
| `--hero-muted` | `#A8B4C4` | Body text on dark bands |
| `--bg` | `#F7F5F2` | Primary light background |
| `--text` | `#263B53` | Headings and body on light bands |
| `--text-muted` | `#4A6078` | Secondary text, meta lines |
| `--accent` | `#4778A8` | Links and cool highlights on light backgrounds |
| `--accent-text` | `#3B6794` | Eyebrows and links on tint surfaces |
| `--accent-warm` | `#C9A227` | Bronze: eyebrows on dark, medal accent, focus ring |
| `--accent-warm-soft` | `rgba(201, 162, 39, 0.15)` | Badges, subtle highlights |
| `--surface` | `#EEF1F5` | Education tint band |
| `--border` | `#DCE3EA` | Cards and dividers on light bands |
| `--border-dark` | `rgba(247, 245, 242, 0.12)` | Borders on dark bands |

```css
:root {
  color-scheme: light;
  --hero-bg: #0b1220;
  --hero-bg-soft: #141d2e;
  --hero-text: #f7f5f2;
  --hero-muted: #a8b4c4;
  --bg: #f7f5f2;
  --text: #263b53;
  --text-muted: #4a6078;
  --accent: #4778a8;
  --accent-text: #3b6794;
  --accent-warm: #c9a227;
  --radius: 6px;
  --radius-lg: 12px;
  --container: 1080px;
  --reading: 65ch;
  --header-height: 72px;
}
```

Set `color-scheme: light` so browsers do not force a system dark theme over the designed bands.

### 2.2 Section bands (page rhythm)

Apply band classes in order down the page:

| Order | Section | Class | Background |
|---|---|---|---|
| 1 | Hero | `.band-dark` | `--hero-bg` |
| 2 | About | `.band-light` | `--bg` |
| 3 | Education | `.band-tint` | `--surface` |
| 4 | Achievements | `.band-light` | `--bg` |
| 5 | Interests | `.band-dark` | `--hero-bg` |
| 6 | Contact | `.band-light` | `--bg` |
| 7 | Footer | (footer styles) | `--hero-bg` |

**Contrast rules**

- On **light/tint** bands: body `--text`, eyebrows `--accent-text` (or `--accent` on `--bg`).
- On **dark** bands: headings `--hero-text`, body `--hero-muted`, eyebrows `--accent-warm`.
- **Focus-visible:** `2px solid var(--accent-warm)` with offset (see globals).
- Decorative borders (`--border`) are not sole indicators for interactive controls; buttons use fill or explicit borders.
- Meta `theme-color`: `#0B1220` (hero/footer tone).

**Allowed gradients**

- Hero **DecorativePanel** only: subtle mesh/tatami-style CSS gradients—not photographic, not a stand-in for Adil’s face.
- **MedalBadge:** subtle bronze tint gradient on the chip background only.

No drop shadows on cards, no glassmorphism, no neon.

### 2.3 Typography

Loaded via `next/font` in [src/app/layout.js](src/app/layout.js) (bundled at build time, `display: swap`):

| Role | Font | Weights |
|---|---|---|
| Display (`h1`, `h2`, wordmark) | **Fraunces** | 600 |
| Body, UI, nav | **DM Sans** | 400, 500, 600 |

CSS variables: `--font-display`, `--font-body`.

| Role | Size | Notes |
|---|---|---|
| Body | 16px, line-height 1.6 | Max line length `--reading` (65ch) |
| H1 | `clamp(2.25rem, 7vw, 3.5rem)` | Fraunces, once per page |
| H2 | `clamp(1.75rem, 4.5vw, 2.35rem)` | Fraunces |
| H3 | 1.125–1.2rem | DM Sans, weight 600 |
| Eyebrow | 13px | Uppercase, increased tracking; warm on dark, `--accent-text` on light/tint |
| Caption | 14px | `--text-muted` on light bands |

Body text never goes below 16px on mobile.

### 2.4 Spacing

- Scale (px): **4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96**.
- Section vertical padding: **64px** mobile, **96px** desktop (≥768px).
- Container: max-width **1080px**; horizontal inset **40px** mobile, **64px** total from 768px up.
- `scroll-padding-top`: **`--header-height`** (72px).

### 2.5 Breakpoints

- Base: **360px** (must also work at **320px**).
- **768px:** hero two-column; about optional second column if photo exists; achievement meta two columns; contact split; interest grid 2 columns.
- **1024px:** interest grid 4 columns; achievement gallery 3 columns when gallery has items.

---

## 3. Components and States

Implementation lives under [src/components/](src/components/). Shared UI in [src/components/ui/](src/components/ui/).

### 3.1 Buttons (`ButtonLink`)

Variants (min height **44px**):

| Variant | Use |
|---|---|
| `primary-warm` | Hero primary CTA on dark band (bronze fill) |
| `ghost-light` | Hero secondary on dark band (outline) |
| `primary-navy` | Optional CTAs on light bands |
| `outline` | Proof links, secondary actions on light bands |

Hover: short color/background transition (≤150ms). Framer Motion may apply ≤1px vertical nudge; disable under reduced motion (see §3.7).

### 3.2 Links

- **Contact:** pill-style `.contact-pill` (no underline); border + hover background.
- **Body copy links:** use accent colors per band; underline where appropriate in prose.
- External social links: `rel="noopener noreferrer"`.

### 3.3 Cards and surfaces

- **Timeline cards** (education): white on tint band, `--border`, `--radius-lg`, no hover lift.
- **Feature card** (achievements): grouped text + meta; **MedalBadge** for result.
- **Interest tiles:** bordered cells on dark band; hover = border color only.

### 3.4 Images and empty states

Content-driven via [src/data/site.js](src/data/site.js) `media` and [src/lib/media.js](src/lib/media.js) `hasMedia()`.

```js
media: {
  hero: null,                    // { src, alt, width, height }
  about: null,
  achievementFeatured: null,
  gallery: [],                   // [{ src, alt, caption?, width, height }]
}
```

- If `media.hero` is set: `next/image`, 4:5 crop, `priority` + `fetchPriority="high"` (LCP).
- If `media.hero` is null: show **DecorativePanel** (CSS only, `aria-hidden`).
- If `about`, `achievementFeatured`, or `gallery` entries are missing: **omit** those figures; do not show placeholder rectangles with text labels.

When present: rounded corners (`--radius` / `--radius-lg`), explicit width/height, lazy load below the fold.

### 3.5 Icons

- No icon pack. Social links remain text (“LinkedIn”, “Instagram”).
- **MedalBadge** uses a small CSS dot—not an icon font.
- Menu control is text **“Menu”** with `aria-expanded` / `aria-controls`.

### 3.6 Shared UI

| Component | Purpose |
|---|---|
| `SectionIntro` | Eyebrow + `h2` + optional description |
| `ButtonLink` | Styled anchor buttons |
| `DecorativePanel` | Hero non-photo visual |
| `MedalBadge` | Achievement result chip |

### 3.7 Motion

- **Framer Motion:** section reveal on scroll (`whileInView`), light stagger on grids; hero animates on load.
- Transitions on color/header state ≤200ms.
- Smooth scroll enabled on `html`.
- `@media (prefers-reduced-motion: reduce)`: no smooth scroll, no transitions/animations.

---

## 4. Page Structure (single page, in order)

Composition: [src/app/page.js](src/app/page.js). All sections are `<section>` with stable `id` values and `aria-labelledby`. Nav uses same-page anchors from `site.nav`.

### 4.1 Header / Navigation (`#top`)

File: [src/components/layout/Header.js](src/components/layout/Header.js).

- Fixed header, height **`--header-height`**.
- **Over hero** (`#hero` intersecting): transparent background, light text, bronze active underline.
- **Past hero:** solid off-white bar, subtle blur, `--border` bottom, dark nav text.
- Wordmark: **Adil Khan** (Fraunces). Links: About, Education, Achievements, Interests, Contact.
- **Mobile (<768px):** “Menu” toggles stacked nav; panel matches current header mode (dark or light).
- Active section: underline + `aria-current="true"` (scroll-spy).
- Skip link: first focusable element → `#main-content`.

### 4.2 Hero (`#hero`)

File: [src/components/sections/HeroSection.js](src/components/sections/HeroSection.js).

- Dark band; min-height ~viewport (see `.hero-section`).
- One **`h1`:** Adil Khan.
- Eyebrow, verified tagline, supporting `heroText` from data.
- **Two CTAs:** “View achievements” → `#achievements`, “Contact” → `#contact`. Add “Resume” only if a file URL exists in data.
- Layout: copy left; right column = real portrait **or** DecorativePanel.
- No invented stats or slogan headlines.

### 4.3 About (`#about`)

File: [src/components/sections/AboutSection.js](src/components/sections/AboutSection.js).

- Light band; `SectionIntro` + 2–3 paragraphs from `site.about`.
- Second paragraph (grappling): **pull-quote** styling (bronze left border).
- Second column with photo **only** when `media.about` is set.
- Voice: first or third person—consistent across the page.

### 4.4 Education (`#education`)

File: [src/components/sections/EducationSection.js](src/components/sections/EducationSection.js).

- Tint band; vertical **timeline** with nodes and connecting line.
- BBA and MBA entries; show institution, dates, details **only when confirmed**.
- Period containing “Present” → **Current** badge on that entry.
- Omit individual lines that are not verified, not whole entries unless the degree itself is unconfirmed.

### 4.5 Achievements (`#achievements`)

File: [src/components/sections/AchievementsSection.js](src/components/sections/AchievementsSection.js).

- Lead item: verified championship title and result (e.g. silver medal).
- **MedalBadge** for result line; meta list in one or two columns.
- Optional proof link as outline button when URL is verified.
- Featured photo above card when `media.achievementFeatured` is set.
- Gallery grid **only** when `media.gallery` has items with captions when provided.
- Do not claim extra medals or ranks without source data.

### 4.6 Interests (`#interests`)

File: [src/components/sections/InterestsSection.js](src/components/sections/InterestsSection.js).

- Dark band; responsive grid of interest tiles from `site.interests`.
- No skill bars, percentages, or tag clouds.

### 4.7 Contact (`#contact`)

File: [src/components/sections/ContactSection.js](src/components/sections/ContactSection.js).

- Light band; split layout: intro left, **contact pills** right (email `mailto:`, social URLs).
- No contact form unless a backend is added later.
- If email and all socials are absent: **remove section** and drop Contact from `site.nav`.

### 4.8 Footer

File: [src/components/layout/Footer.js](src/components/layout/Footer.js).

- Dark band; centered **© {year} Adil Khan** only.

---

## 5. Technical Requirements

### 5.1 Stack

- **Next.js** (App Router), static prerender of `/`.
- **React** client components for header, sections (scroll/motion).
- **Tailwind CSS v4** imported in globals; primary styling via custom properties and component classes in [src/app/globals.css](src/app/globals.css).
- **Framer Motion** for scroll reveals and subtle interaction feedback.
- **No** analytics or third-party scripts unless explicitly approved.

### 5.2 Fonts

- **DM Sans** and **Fraunces** via `next/font/google` in [src/app/layout.js](src/app/layout.js) (self-hosted output at build; no runtime request to Google CDN from the browser).

### 5.3 Images

- Use **`next/image`** with paths under `public/` referenced from `site.media`.
- Prefer modern formats in assets (WebP/AVIF sources); always pass `width` and `height`.
- Hero: eager + high fetch priority when configured.
- Below fold: `loading="lazy"`, `decoding="async"`.
- Target ≤150KB per optimized photo where possible; max source width ~1600px.
- **Alt text:** describe scene and person; never start with “image of”.

### 5.4 Accessibility

- Skip link, landmarks (`header`, `nav`, `main`, `section`, `footer`).
- One `h1`; logical heading order.
- `<html lang="en">`.
- `:focus-visible` on all interactive elements.
- Keyboard-operable mobile menu.
- Usable at 200% zoom without horizontal scroll.
- `prefers-reduced-motion` honored globally.

### 5.5 Performance targets (mobile, throttled)

- LCP < 2.5s, CLS < 0.1, INP < 200ms when real hero image is used.
- Lighthouse ≥ 90 across Performance, Accessibility, Best Practices, SEO (framework baseline may exceed legacy “50KB JS” static target; avoid unnecessary client JS).

### 5.6 Head and metadata

- Title and description: verified facts only ([src/app/layout.js](src/app/layout.js)).
- Open Graph tags; OG image should be a **real photo** at 1200×630 when available.
- `theme-color`: `#0B1220`.
- Optional `Person` JSON-LD when contact fields are verified.

### 5.7 Security and hygiene

- No secrets in client code.
- External links: `rel="noopener noreferrer"`.
- Prefer React event handlers over inline HTML handlers.

---

## 6. Content Inputs Needed (supply before launch)

- [ ] BBA institution and years
- [ ] MBA institution, start year, expected completion, specialization
- [ ] Achievement details: category/weight class, gi or no-gi, organizer, location, date, results link
- [ ] Interests/strengths list (cricket plus anything else confirmed)
- [ ] Professional email, social URLs, resume file
- [ ] Real photos + photographer credits; wire paths in `site.media`
- [ ] Voice choice: first or third person
- [ ] Confirmed hero headline wording

**Rule:** any item not provided is omitted from the live page. No placeholder text, no “TBD”, no invented filler. Sample values in `site.js` must be replaced before public launch.

---

## 7. Copy Rules

- Plain, specific, credible. No superlatives (“elite”, “world-class”), no buzzwords, no fake metrics.
- Sentences under 25 words where possible. Consistent voice throughout.
- Section titles are descriptive (“Professional profile”, “Academic background”), not marketing slogans.

---

## 8. QA and Acceptance Checklist

- [ ] Renders correctly at 320, 375, 768, 1024, and 1440px.
- [ ] No horizontal overflow at 320px.
- [ ] Only one page; every nav link scrolls to a section and lands below the fixed header.
- [ ] Band order and tokens match §2.1–2.2; no unapproved shadows, glass, or neon.
- [ ] Header switches correctly between hero and solid modes.
- [ ] Complete keyboard walkthrough, including mobile menu.
- [ ] axe / Lighthouse accessibility checks clean.
- [ ] Optional fields tested present and absent (education lines, proof URL, contact fields, each `media` slot).
- [ ] With all `media` null/empty: no fake photo boxes; DecorativePanel only in hero.
- [ ] With photos configured: correct lazy/eager loading and alt text.
- [ ] Reduced-motion and 200% zoom verified.
- [ ] No unverified claims on the page.

---

## 9. Final Design Principle

The portfolio should read as a **real, editorial professional profile**: disciplined typography, alternating dark and light bands, and verified story (MBA + grappling). Warm bronze accents signal achievement without spectacle. Authentic photos carry the visual weight when provided; until then, the layout stays honest—abstract hero texture, text-first achievements, no stock stand-ins.
