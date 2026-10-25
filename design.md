# Adil Khan — Portfolio Design & Build Specification

Current specification for the implemented single-page portfolio. This document supersedes the earlier dark/bronze direction and should be read alongside `changes.md`.

## 1. Purpose

Create a professional, credible personal portfolio for **Adil Khan**: a BBA graduate pursuing an MBA and a national-level grappling silver medallist from Vapi, Gujarat. The site supports professional conversations, networking, and future opportunities.

### Art direction

**Light editorial:** Swiss-inspired grid discipline, generous whitespace, clear hierarchy, and restrained athletic storytelling. The interface should feel calm and deliberate rather than like a SaaS template or an AI-generated landing page.

### Non-negotiables

- **One page only.** All navigation uses same-page anchors.
- **Mobile-first.** The layout must remain intentional at 320px and scale cleanly to 1600px.
- **Verified content only.** Do not invent institutions, dates, competition details, rankings, contact details, experience, or achievements.
- **No fabricated imagery.** No stock photos, AI portraits, placeholder image boxes, or fake “Profile photo” frames.
- **Light theme throughout.** No dark theme, black full-page background, or dark section bands.
- **Restrained lime accent.** Lime marks small states and highlights; it must not dominate the page.
- **No decorative clutter.** No gradient blobs, glassmorphism, neon glow, heavy shadows, floating objects, or arbitrary abstract graphics.
- **Content survives without JavaScript.** Navigation and content are rendered as standard HTML; JavaScript enhances the sticky header only.

---

## 2. Design Tokens

Tokens are defined in [src/app/globals.css](src/app/globals.css).

### 2.1 Colour

| Token | Value | Use |
|---|---|---|
| `--ivory` | `#F7F8F2` | Page background, hero, education, interests, footer |
| `--paper` | `#FFFFFF` | Alternating section surfaces and cards |
| `--ink` | `#0A0A0A` | Primary text, borders, focus ring |
| `--slate` | `#5F6368` | Secondary text, labels, metadata |
| `--lime` | `#B8FF00` | Small accents, active states, CTA fill |
| `--line` | `#DFE2D8` | Default dividers |
| `--line-strong` | `#C9CDC1` | Stronger dividers, control borders |

```css
:root {
  color-scheme: light;
  --ivory: #f7f8f2;
  --paper: #ffffff;
  --ink: #0a0a0a;
  --slate: #5f6368;
  --lime: #b8ff00;
  --line: #dfe2d8;
  --line-strong: #c9cdc1;
}
```

Do not introduce additional colours without a documented accessibility or content reason.

### 2.2 Section rhythm

| Order | Section | ID | Background | Border treatment |
|---|---|---|---|---|
| 1 | Hero | `#hero` | Ivory | None |
| 2 | Achievements | `#achievements` | White | Top and bottom hairline |
| 3 | Education | `#education` | Ivory | None |
| 4 | Profile | `#profile` | White | Top and bottom hairline |
| 5 | Interests | `#interests` | Ivory | None |
| 6 | Contact | `#contact` | White | Top and bottom hairline |
| 7 | Footer | — | Ivory | Top hairline |

The alternating ivory/white rhythm provides separation without dark bands or heavy cards.

### 2.3 Typography

Loaded via `next/font/google` in [src/app/layout.js](src/app/layout.js):

| Role | Font | Weights |
|---|---|---|
| Headings, wordmark, key figures | **Manrope** | 500, 600, 700 |
| Body, UI, navigation, labels | **Inter** | 400, 500, 600 |

CSS variables: `--font-heading`, `--font-body`.

| Role | Token / Size | Notes |
|---|---|---|
| Hero title | `clamp(2.7rem, 6.8vw, 6.5rem)` | Manrope 600, line-height `1.04`, tight tracking |
| Section heading | `clamp(2rem, 4vw, 3.5rem)` | Manrope 600, line-height `1.12` |
| Subheading | `clamp(1.25rem, 2vw, 1.5rem)` | Manrope 600 |
| Body | `1rem`–`1.125rem` | Inter, line-height `1.7` |
| Supporting text | `0.9375rem` | Inter, secondary colour |
| Eyebrow / metadata | `0.75rem` | Uppercase, tracked, Inter 600 |

- Body copy never drops below `16px` on mobile.
- Eyebrows include a small lime dot, but the label remains readable without it.
- The hero headline is supplied as two block-level phrases. Phrases may reflow internally on narrow columns, producing a stacked editorial headline.
- The second headline phrase carries a lime underline rather than a lime text fill.
- Use `text-wrap: balance` on headings and `text-wrap: pretty` on paragraphs.

### 2.4 Spacing, layout, and shape

| Token | Value |
|---|---|
| Content container | `1180px` |
| Horizontal gutter | `clamp(1.25rem, 4vw, 3rem)` |
| Section padding | `clamp(4rem, 9vw, 7.5rem)` |
| Header height | `68px` mobile, `76px` from 768px |
| Radii | `4px`, `8px`, `14px` |
| Fast transition | `160ms` |
| Base transition | `220ms` |
| Easing | `cubic-bezier(0.16, 1, 0.3, 1)` |

- Spacing uses a 4/8px-based scale (`--space-1` through `--space-10`).
- Prefer borders and whitespace over shadows. No card drop shadows.
- Sticky header uses a near-opaque ivory background with a subtle backdrop blur for scroll legibility. It is not a decorative glass surface.
- `scroll-padding-top` is `header height + 20px` on the root scroll container so anchored headings clear the sticky header. Do not add a matching `scroll-margin-top` to sections; the two offsets would stack and leave an excessive gap.
- Avoid hiding layout defects with `overflow-x: hidden`; the page must have no real horizontal overflow.

### 2.5 Breakpoints

| Breakpoint | Behaviour |
|---|---|
| Base / 320px | Single column, compact header, mobile menu |
| 480px (`30rem`) | Stacked fact rows, full-width hero buttons |
| 768px (`48rem`) | Desktop nav appears; hero, achievements, education, profile, interests, and contact become multi-column |
| 1024px (`64rem`) | Education timeline uses a two-column row layout |
| 1280–1600px | Wider gutters and larger fluid hero type; content remains capped at 1180px |

---

## 3. Components and Page Structure

Composition: [src/app/page.js](src/app/page.js).

Page order: Hero → Achievements → Education → Profile → Interests → Contact.

All content sections are semantic `<section>` elements with stable IDs and `aria-labelledby`. The page has exactly one `<h1>`.

### 3.1 Header / Navigation

File: [src/components/layout/Header.js](src/components/layout/Header.js).

- Client component with sticky positioning.
- Wordmark: black `AK` mark with lime dot + **Adil Khan**.
- Desktop links: **Achievements**, **Education**, **Profile**, **Contact**.
- Mobile (<768px): **Menu** button toggles a compact dropdown panel with the same links.
- Active section uses `aria-current="location"`, a dark label, and a lime underline on desktop or lime dot in the mobile menu.
- Scroll spy updates on scroll and resize; it marks Contact active near the page bottom.
- Mobile menu closes on link selection, `Escape`, outside pointer interaction, or resizing to desktop. On Escape, focus returns to the menu button.
- Skip link is the first focusable element and targets `#main-content`.
- Wordmark targets `#top`.

### 3.2 Hero

File: [src/components/sections/HeroSection.js](src/components/sections/HeroSection.js).

- Ivory background; no photographic hero image is available, so the section uses a factual **At a glance** panel instead.
- Eyebrow: `MBA CANDIDATE · NATIONAL-LEVEL ATHLETE`.
- `h1`: **Business in mind. Discipline in action.**
- Short first-person introduction connecting business education, grappling, and his base in Vapi, Gujarat.
- Primary CTA: **Explore my journey** → `#achievements`; lime fill with dark text and arrow.
- Secondary CTA: **Contact me** → `#contact`; outlined.
- “At a glance” card lists: current study, education background, sport, and location.
- Closing note states openness to conversations about business and sport.
- At 480px and below, actions stack full-width and fact rows stack vertically.

### 3.3 Achievements

File: [src/components/sections/AchievementsSection.js](src/components/sections/AchievementsSection.js).

- White surface.
- The result is the visual anchor: large stacked **Silver / medal** typography.
- Context chip: **National-level grappling** with a lime dot.
- Copy explains the achievement without adding unverified event names, dates, divisions, venues, or links.
- Supporting line: **Result: Silver medal · Sport: Grappling**.
- No photo gallery or proof link is shown until authentic assets and a working source exist.

### 3.4 Education

File: [src/components/sections/EducationSection.js](src/components/sections/EducationSection.js).

- Ivory background.
- Section heading: **A business education, in progress.**
- Simple timeline/list with two entries:
  - **MBA** — Master of Business Administration — **In progress**.
  - **BBA** — Bachelor of Business Administration — **Completed**.
- The current MBA status receives a lime dot; completed status uses a neutral dot.
- Institution names and dates are omitted because they are not verified in the repository.
- At 1024px, each row places degree/status in the left column and qualification details in the right.

### 3.5 Profile and transferable strengths

File: [src/components/sections/ProfileSection.js](src/components/sections/ProfileSection.js).

- White surface.
- Heading: **Built by preparation.**
- Short first-person lead and body connecting Vapi, study, sport, preparation, and execution.
- Pull quote with a lime left border.
- Three numbered insights:
  1. Preparation over noise
  2. Composure in the moment
  3. Progress through repetition
- Avoid claiming professional seniority, management experience, or measurable business outcomes that Adil cannot substantiate.

### 3.6 Interests

File: [src/components/sections/InterestsSection.js](src/components/sections/InterestsSection.js).

- Ivory background and intentionally quieter than Achievements.
- Heading: **Life outside competition.**
- Three-column editorial list from 768px:
  - Cricket
  - Strength training
  - Continuous learning
- No skill bars, percentages, tag clouds, or stock imagery.

### 3.7 Contact

File: [src/components/sections/ContactSection.js](src/components/sections/ContactSection.js).

- White surface.
- Heading: **Let's connect.**
- Invitation to discuss business, sport, and future opportunities.
- Direct phone CTA: **+91 91049 27782** → `tel:+919104927782`.
- Contact card includes location and what Adil is open to.
- A compact **Quick answers** block below the contact grid answers four factual questions: where Adil is based, what he is studying, his main sporting achievement, and how to contact him.
- Quick answers use a semantic `<dl>` so questions and answers remain readable and machine-extractable.
- Phone is the only verified contact channel. Do not add email, social links, or a resume until valid destinations are supplied.
- No contact form.

### 3.8 Footer

File: [src/components/layout/Footer.js](src/components/layout/Footer.js).

- Ivory background, quiet typography, top hairline.
- **© Adil Khan · Based in Vapi, Gujarat**
- Site credit link to Samir Shaikh, opening externally with `rel="noopener noreferrer"`.
- The copyright intentionally omits a dynamic year so the page remains statically prerenderable.

---

## 4. Interaction and Motion

- Use native anchor links and browser scrolling.
- Smooth scrolling is enabled on `html`, with `scroll-padding-top` clearing the sticky header.
- Link, button, status, and nav transitions are `160–220ms`.
- Primary CTA arrow moves slightly on hover; contact arrow moves up-right.
- Pressed states on the CTAs, phone CTA, and menu toggle use a `1px` downward transform; the wordmark mark scales subtly on fine-pointer hover and press.
- Motion is limited to transform, color, background-color, and border-color transitions.
- Mobile menu has a short `180ms` entrance animation.
- Header scroll spy is the only ongoing scroll interaction; it uses `requestAnimationFrame` and passive listeners.
- No animation library is used.
- No scroll-triggered section reveals; content is visible immediately.
- No scroll-jacking, parallax, autoplay carousels, counters, typing effects, or content hidden until animation.
- `prefers-reduced-motion: reduce` disables smooth scrolling and reduces animations/transitions to near-zero duration.
- Focus-visible uses a `2px` ink outline with `3px` offset on all interactive elements.
- Touch targets should be at least `44px` where practical, especially navigation, buttons, and the phone CTA.

---

## 5. Content Integrity

### 5.1 Verified public content

- Name: **Adil Khan**
- Location: **Vapi, Gujarat, India**
- Education: **BBA completed; MBA in progress**
- Sport: **Grappling**, national level
- Achievement: **Silver medal**
- Interests: **Cricket, strength training, continuous learning**
- Contact: **+91 91049 27782**

### 5.2 Removed or intentionally omitted

The previous implementation contained unverified or placeholder content, including:

- Sample college and graduate-school names
- `example.com` proof URLs
- Sample email addresses
- Generic LinkedIn/Instagram links
- A resume path without a confirmed file
- Specific competition name, date, division, organizer, and unverified proof links
- Additional medals or rankings without support

Do not restore these without verified source material from the owner.

### 5.3 Rules

- If information is missing, omit it cleanly; do not show TODOs or placeholders publicly.
- Do not call an achievement “verified” unless a real, working source exists.
- Keep the name consistently **Adil Khan**.
- Preserve first-person voice where currently used.
- Keep sentences concise and specific. Avoid superlatives, buzzwords, and invented metrics.
- Include photos only when authentic files and alt text are supplied.

---

## 6. Technical Requirements

### 6.1 Stack

- **Next.js 16.4.3** with App Router and static prerendering.
- **React 19.3.0**.
- **Tailwind CSS v4** is imported, but primary styling remains custom CSS in `globals.css`.
- No animation, icon, date, or state-management libraries are required.
- Available scripts: `dev`, `build`, `start`. There is no lint, type-check, or test script in the repository.

### 6.2 Fonts

- Manrope and Inter via `next/font/google`, self-hosted at build time with `display: swap`.
- Limit weights to those listed in §2.3.

### 6.3 Images and media

- The current page is text-first and contains no public photographs.
- Do not add image components, placeholder boxes, or decorative panels until authentic media is supplied.
- When photos are added:
  - Use `next/image` with explicit dimensions or aspect ratio.
  - Provide useful alt text describing the scene and person.
  - Eager-load only the hero/LCP image; lazy-load everything below the fold.
  - Store compressed WebP/AVIF sources under `public/`.
  - Never use stock imagery or AI-generated portraits presented as Adil.

### 6.4 SEO, AEO, GEO, and AIO

**Search engine optimization (SEO)**

- Canonical site: `https://adilkhan-ebon.vercel.app`.
- Title: `Adil Khan | MBA Candidate & National-Level Athlete in Vapi`.
- Short title: `Adil Khan | MBA & Grappling in Vapi`.
- Meta description references MBA study, BBA completion, national-level grappling silver medal, Vapi/Gujarat, and the profile/contact paths.
- Locale: `en_IN`; document language: `en-IN`.
- Keywords target the verified entity and local intent: Adil Khan Vapi, MBA candidate Vapi, BBA graduate Vapi, grappling athlete Vapi, national-level grappling Gujarat.
- Canonical URL, sitemap, robots, manifest, and geographic meta tags are present.
- Open Graph type: `profile`; Twitter card: `summary_large_image`.
- Dynamic OG and Twitter images are generated at 1200×630 using the light palette and show Vapi/Gujarat.
- Favicons use the light `AK` identity (`icon.svg`, `favicon.svg`, `favicon.ico`).
- Theme colour: `#F7F8F2`.

**Answer engine optimization (AEO)**

- The Contact section contains a visible **Quick answers** block covering location, study, sporting achievement, and contact method.
- The same questions and answers are represented as `FAQPage` JSON-LD, matching visible content.
- Hero facts, Profile copy, and Contact copy all state the Vapi/Gujarat location explicitly.
- Answers are short, factual, and free of unverified event names or contact channels.

**Generative engine optimization (GEO)**

- `llms.txt` provides a concise entity summary, key facts, answer-ready questions, local context, canonical links, the E.164 phone format, and citation guidance.
- `llms-full.txt` expands the verified profile, education, achievement, strengths, interests, local context, structured data, and citation rules.
- Both files instruct generative systems not to infer institutions, dates, competition details, social profiles, or professional experience.
- `robots.txt` explicitly allows major search and AI crawlers, including Googlebot, Bingbot, GPTBot, OAI-SearchBot, PerplexityBot, ClaudeBot, Google-Extended, Applebot-Extended, and CCBot.

**AI optimization (AIO)**

- JSON-LD graph includes `WebSite`, `Place`, `Person`, `ProfilePage`, `ContactPoint`, and `FAQPage`.
- `Person` includes the verified telephone, home location, address, areas of knowledge, and the national-level grappling silver medal.
- `Place` includes the Vapi postal address and geographic coordinates.
- `Person.telephone` and `ContactPoint.telephone` use the verified E.164 number; `ContactPoint` serves Vapi, Gujarat, and India.
- No invented organization, alumni, social profile, award issuer, or service-area claim is included.
- The public page and all machine-readable files use the same verified facts and canonical URL.

### 6.5 Accessibility

- Semantic landmarks: `header`, `nav`, `main`, `section`, `footer`.
- One `h1`; logical heading order.
- Real links for navigation and real button for the menu.
- Visible focus on all interactive elements.
- Accessible names on icon-bearing controls; decorative marks use `aria-hidden`.
- Mobile menu state announced through `aria-expanded` / `aria-controls`.
- Active navigation state is conveyed by underline/dot plus `aria-current`, not colour alone.
- Skip link, keyboard operation, and 200% zoom support.
- Reduced-motion support.
- No horizontal scrolling at target widths.

### 6.6 Performance

- Static page; minimal client JavaScript limited primarily to the header.
- No animation or icon bundles.
- Fonts use `display: swap` and a small weight set.
- Avoid layout shift by reserving image dimensions when media is added.
- Keep the page free of unused assets, dead components, and unnecessary dependencies.

---

## 7. Content Needed Before Further Launch Work

- [ ] BBA institution and years
- [ ] MBA institution, start year, expected completion, specialization
- [ ] Competition details: category/weight class, gi/no-gi, organizer, location, date, official results link
- [ ] Verified email, LinkedIn, Instagram, or other professional links
- [ ] Current resume file and sensible filename
- [ ] Authentic competition, medal, or portrait photos with photographer credit and alt text
- [ ] Confirmation of the public phone number
- [ ] Confirmation of voice and any preferred wording changes

Any item not supplied remains omitted from the public page.

---

## 8. QA and Acceptance Checklist

- [ ] Renders correctly at 320, 360, 375, 430, 768, 1024, 1280, 1440, and 1600px.
- [ ] No horizontal overflow at any target width.
- [ ] Only one page; every nav link resolves to a real section and clears the sticky header.
- [ ] Header active state and mobile menu work by mouse, touch, and keyboard.
- [ ] Mobile menu closes on selection, Escape, outside click, and desktop resize.
- [ ] One `h1`; no skipped or misleading heading levels.
- [ ] Skip link, focus-visible states, and 200% zoom behave correctly.
- [ ] Hero CTAs, phone link, and footer credit work.
- [ ] All public text is accurate and free of placeholders or unverified claims.
- [ ] Vapi/Gujarat location is consistent across visible copy, metadata, schema, and LLM files.
- [ ] Visible Quick answers match the FAQPage JSON-LD exactly.
- [ ] `llms.txt` and `llms-full.txt` contain no inferred institutions, dates, socials, or services.
- [ ] No dark bands, gradient blobs, glassmorphism, heavy shadows, or lime overload.
- [ ] Reduced-motion mode disables smooth scrolling and meaningful animation.
- [ ] No console errors, broken assets, or missing metadata.
- [ ] Production build succeeds.
- [ ] Unused components, assets, and dependencies remain removed.

---

## 9. Design Principle

The portfolio should read as a real editorial profile: light, precise, human, and disciplined. Typography and whitespace carry the design; lime appears only as a small signal of action or progress. Adil’s verified story — business education, national-level grappling, and steady preparation — carries the credibility, with no invented detail or decorative substitute for missing content.
