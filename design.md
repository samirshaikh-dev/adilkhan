# Adil Khan — Personal Portfolio: Design & Build Specification

## 1. Project Goal

Build a professional single-page portfolio for **Adil Khan**, positioned as a business-minded MBA student and national-level grappling athlete. The site supports his professional digital presence for management-related opportunities, networking, and showcasing verified achievements.

### Non-negotiables
- **Strictly one page.** No extra pages, routes, or gallery/contact sub-pages. All navigation scrolls to sections on the same page.
- **Mobile-first and fully responsive.** Design at 360px first, then adapt to tablet and desktop.
- **White, light, minimal, professional.** No dark sections, gradients, glassmorphism, glow, or neon.
- **Verified content only.** Never invent contact details, institutions, dates, experience, skills, leadership roles, metrics, or achievements.
- **Authentic photos only.** Real sports and award-ceremony photos of Adil. No AI-generated or stock images presented as him.
- Must not look like a generic AI-generated landing page.

---

## 2. Design Tokens

All styling uses these tokens. No one-off colors, font sizes, or spacing values.

### 2.1 Colour (exact palette)

| Token | Value | Use |
|---|---|---|
| `--bg` | `#FFFFFF` | Primary background |
| `--text` | `#263B53` | Text, headings, navigation, primary buttons |
| `--accent` | `#4778A8` | Links, labels, focus ring, small highlights (on white only) |
| `--accent-text` | `#3B6794` | Derived darker shade of `--accent`, for links/labels on `--surface` (see 2.2) |
| `--surface` | `#F3F6F9` | Occasional section backgrounds, placeholder boxes |
| `--border` | `#DCE3EA` | Dividers, card borders |

```css
:root {
  color-scheme: light;
  --bg: #FFFFFF;
  --text: #263B53;
  --accent: #4778A8;
  --accent-text: #3B6794;
  --surface: #F3F6F9;
  --border: #DCE3EA;
  --radius: 4px;
  --container: 1080px;
  --reading: 65ch;
}
```

### 2.2 Colour usage and contrast rules
- Keep the whole site white and light. Set `color-scheme: light` so browsers never force a dark theme.
- Navy for strong text and important interface elements. Muted blue sparingly.
- Cool light gray only to separate occasional sections or content groups (at most two gray sections on the page, never adjacent).
- **Contrast (approximate):** navy on white ≈ 11:1 (pass). `#4778A8` on white ≈ 4.6:1 (passes AA for text). `#4778A8` on `#F3F6F9` ≈ 4.3:1 (**fails** AA for body-size text).
  - Rule: on white, use `--accent`. On `--surface`, use `--accent-text`, or keep text navy.
- **Borders:** `--border` (≈ 1.3:1 on white) is decorative only (dividers, card edges). Never rely on it to identify buttons or inputs. Interactive elements use a navy outline or navy fill.
- Meta `theme-color`: `#FFFFFF`.

### 2.3 Typography
- Font: **Inter** (variable, self-hosted, WOFF2, subset to Latin), weights 400 and 600 only.
- Fallback stack: `Inter, system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif`.

| Role | Size | Notes |
|---|---|---|
| Body | 16–17px, line-height 1.6 | Max line length 65ch |
| H1 | `clamp(2rem, 6vw, 3rem)` | Weight 600, line-height 1.15, once per page |
| H2 | `clamp(1.5rem, 4vw, 2rem)` | Weight 600, line-height 1.25 |
| H3 | 1.125rem | Weight 600 |
| Label | 13px | Uppercase, 0.06em tracking, `--accent` (or `--accent-text` on gray) |
| Small / caption | 14px | Navy at normal weight, never lighter than the palette allows |

Body text never goes below 16px on mobile.

### 2.4 Spacing
- Scale (px) only: **4, 8, 12, 16, 24, 32, 48, 64, 96**.
- Section vertical padding: 64px mobile, 96px desktop.
- Container: max-width 1080px, 20px side padding on mobile, 32px from 768px up.

### 2.5 Breakpoints
- Base: 360px and up (design target; must also work at 320px).
- 768px: two-column layouts allowed (Hero, About, Achievements only).
- 1024px: full desktop layout.
- Content width stays restrained; no full-bleed stretched text.

---

## 3. Components and States

### 3.1 Buttons
- Primary: navy fill, white text. Secondary: navy 1px outline, navy text, white fill.
- Minimum height **44px**, minimum tap target 44×44px, 16px horizontal padding.
- Hover: slightly lighter/darker navy fill or `--surface` fill on secondary. Transition ≤150ms.
- Focus-visible: `2px solid var(--accent)` outline, 2px offset.
- No shadows, no gradients.

### 3.2 Links
- Underlined by default in body copy. Color `--accent` on white, `--accent-text` on `--surface`.
- Hover: darken to navy. Focus-visible same ring as buttons.

### 3.3 Cards
- 1px `--border`, 4px radius, white (or `--surface`) background, 16–24px padding.
- No shadow, no hover lift. Use only where content is genuinely grouped.

### 3.4 Images
- Rectangular, 2–4px radius, no frames or effects.
- **Loading state:** reserve space with a `--surface` box at the correct aspect ratio (prevents layout shift).
- **Missing image:** omit the figure entirely. Never show a broken image or a stock substitute.
- Captions: 14px, below image, factual (event, year, place).

### 3.5 Icons
- None by default. Social links are text-only ("LinkedIn", "Instagram").
- Only add an icon where it carries meaning that text can't (for example, a menu toggle if text is not used).

### 3.6 Motion
- Minimal transitions (≤150ms) on color/background only. Smooth scroll is allowed.
- Under `prefers-reduced-motion: reduce`: disable smooth scroll and all transitions.

---

## 4. Page Structure (single page, in order)

All sections are `<section>` elements with `id` and `aria-labelledby`. Nav links are same-page anchors.

### 4.1 Header / Navigation (`#top`)
- Wordmark: "Adil Khan" (navy, weight 600). Links: About, Education, Achievements, Interests, Contact.
- Sticky, white background. A 1px `--border` bottom edge appears only once the page has scrolled.
- **Mobile (<768px):** wordmark + a text "Menu" button that opens a stacked list of links. Button uses `aria-expanded` and `aria-controls`. Selecting a link closes the menu.
- **Desktop:** inline links, right-aligned.
- Active section: navy underline plus `aria-current="true"` on the matching link.
- Set `scroll-padding-top` equal to header height so anchors never hide under it.
- With JavaScript disabled, links remain visible and wrap/stack.

### 4.2 Hero
- One `h1`: **Adil Khan**.
- One-line headline, using verified facts only. Suggested: *MBA student and national-level grappling medallist.* (Confirm wording before launch.)
- One supporting line: MBA status and athlete identity. Add institution only if confirmed.
- **Two CTAs only:** primary "View achievements", secondary "Contact". Add "Resume" only if a file is provided. (Do not duplicate the full nav here.)
- Portrait: real photo. Mobile: 4:5 crop below the text. Desktop (≥768px): two columns, text left, portrait right. The hero image is the page's LCP element.
- No slogans, no oversized taglines, no stats.

### 4.3 About (`#about`)
- 2–3 short paragraphs (max 65ch): education, professional growth, and what he brings from sport.
- Tone: plain, specific, no superlatives or buzzwords. Pick one voice (first or third person) and use it throughout the page.
- Optional two-column layout on desktop with a secondary real photo.

### 4.4 Education (`#education`)
- BBA (completed) and MBA (currently pursuing), shown as a simple vertical list or two bordered blocks.
- Show institution, dates, and specialization **only when confirmed**. If a field is missing, omit that line, not the entry.
- Use `--surface` background for this section if it helps separate it from About.

### 4.5 Achievements (`#achievements`)
- Lead item: **6th National Grappling Championship 2026 — Silver medal.**
- Fields to display when verified: category / weight class, gi or no-gi, organizer, location, date.
- Optional: link to official results as proof.
- Layout: one featured real photo with caption, then a 2–3 column grid (1 column on mobile) of further real photos with captions. Photos are the main content.
- Credit the photographer where applicable.
- Do not claim additional medals, rankings, or titles unless provided.

### 4.6 Interests / Strengths (`#interests`)
- **Cricket** plus other confirmed interests or demonstrated strengths only.
- Simple list or short text blocks. No skill bars, percentages, or tag clouds.
- No invented skills, leadership roles, or work experience.

### 4.7 Contact (`#contact`)
- Professional email (as a `mailto:` link) and social links, only if provided. Resume link if available.
- No contact form unless a backend/service is explicitly added later.
- **Empty states:** show only the items that exist. If none exist, remove the Contact section and its nav link (do not leave a placeholder).

### 4.8 Footer
- Minimal: "© {year} Adil Khan". Nothing else.

---

## 5. Technical Requirements

### 5.1 Stack
- Static site: semantic HTML, a single CSS file, and about 30 lines of vanilla JS (mobile menu toggle, active-link highlight).
- If a framework is preferred (Astro or Next.js), it must output a fully static page.
- No UI libraries, no animation libraries, no icon packs, no analytics or third-party scripts unless explicitly approved.

### 5.2 Fonts
- Self-hosted subsetted Inter variable WOFF2, `font-display: swap`, preload the primary weight.
- Do not load fonts from Google Fonts or other third-party hosts.

### 5.3 Images
- Serve AVIF/WebP with a JPEG fallback, with `srcset` and `sizes`.
- Always set `width` and `height` attributes to prevent layout shift.
- Hero image: `loading="eager"` and `fetchpriority="high"`. All below-the-fold images: `loading="lazy"` and `decoding="async"`.
- Max source width 1600px; target ≤150KB per image.
- **Alt text pattern:** describe the scene and the person. Example: "Adil Khan on the podium with his silver medal at the 6th National Grappling Championship 2026." Never start with "image of".

### 5.4 Accessibility
- Skip-to-content link as the first focusable element.
- Landmarks: `header`, `nav`, `main`, `section[aria-labelledby]`, `footer`.
- One `h1`; headings in order with no skipped levels.
- `<html lang="en">`.
- Visible `:focus-visible` styles on every interactive element.
- Fully operable by keyboard alone; logical focus order.
- Usable at 200% zoom with no horizontal scrolling.
- Respect `prefers-reduced-motion`.
- Do not rely on color alone to convey meaning.

### 5.5 Performance targets (mobile, throttled)
- LCP < 2.5s, CLS < 0.1, INP < 200ms.
- Lighthouse ≥ 95 in Performance, Accessibility, Best Practices, SEO.
- Initial HTML + CSS + JS under 50KB (images excluded).

### 5.6 Head and metadata
- Unique `<title>` and meta description (verified facts only).
- Canonical URL, Open Graph and Twitter card tags. OG image: a real photo, 1200×630.
- `theme-color` `#FFFFFF`; favicon: navy "AK" monogram on white.
- Optional `Person` JSON-LD with verified fields only.

### 5.7 Security and hygiene
- No secrets, keys, or tracking in client code.
- External links to social profiles: `rel="noopener noreferrer"`.
- No inline event handlers; keep a strict content security policy possible.

---

## 6. Content Inputs Needed (supply before build)

- [ ] BBA institution and years
- [ ] MBA institution, start year, expected completion, specialization
- [ ] Achievement details: category/weight class, gi or no-gi, organizer, location, date, results link
- [ ] Interests/strengths list (cricket plus anything else confirmed)
- [ ] Professional email, social URLs, resume file
- [ ] 6–10 real photos with permission (check consent for other people visible in ceremony photos), plus photographer credits
- [ ] Voice choice: first or third person
- [ ] Confirmed hero headline wording

**Rule:** any item not provided is omitted from the live page. No placeholder text, no "TBD", no invented filler.

---

## 7. Copy Rules
- Plain, specific, credible. No superlatives ("elite", "world-class"), no buzzwords, no fake metrics.
- Sentences under 25 words. Consistent voice throughout.
- Headings are short nouns ("About", "Education"), not slogans.

---

## 8. QA and Acceptance Checklist

- [ ] Renders correctly at 320, 375, 768, 1024, and 1440px.
- [ ] No horizontal overflow at 320px.
- [ ] Only one page exists; every nav link scrolls to a section on the same page and lands below the sticky header.
- [ ] Palette matches section 2.1 exactly; no gradients, shadows, dark sections, or glow.
- [ ] Muted blue text on gray uses `--accent-text` (or navy).
- [ ] Complete keyboard-only walkthrough, including the mobile menu.
- [ ] axe and Lighthouse accessibility checks clean.
- [ ] Every optional field tested both present and absent (education details, results link, email, socials, resume, photos).
- [ ] All images have meaningful alt text, explicit dimensions, and correct lazy/eager loading.
- [ ] Performance targets in 5.5 met on a throttled mobile profile.
- [ ] Reduced-motion and 200% zoom verified.
- [ ] No unverified claims anywhere on the page.

---

## 9. Final Design Principle

The portfolio should feel like a real, thoughtfully designed professional profile: **white, clean, minimal, responsive, mobile-first, and strictly one page.** The verified content and authentic achievement photos create the personality, not gradients, effects, or trendy AI-style decorations.
