# Adil Khan Portfolio — Gemini Working Rules

## Project
This repository is a single-page portfolio for Adil Khan. The implementation must match the product requirements in [design.md](./design.md) and the project state in [src/app/page.js](./src/app/page.js), [src/app/layout.js](./src/app/layout.js), and [package.json](./package.json).

This is not a multi-page marketing site, CMS, or app with auth. It is a static, one-page portfolio built in Next.js.

## Source of truth
Use [design.md](./design.md) as the primary specification.

If a requirement conflicts with a default starter template, follow [design.md](./design.md) first.

## Core requirements
- Build a single-page portfolio only; no extra routes or subpages.
- Use semantic HTML and accessible landmark structure.
- Keep the design light, minimal, and professional: white background, navy text, muted blue accents, no dark themes, gradients, glass effects, or glow.
- Keep all content verified only; do not invent institutions, dates, awards, metrics, roles, or contact details.
- If a field is not confirmed, omit it. Do not add placeholders like “TBD”.
- Use anchors for navigation and keep the menu functional for keyboard and mobile users.
- Make the page responsive from 320px up and ensure no horizontal overflow.
- Maintain a clean, authentic portfolio feel rather than a generic AI-made landing page.

## Styling rules
The site must follow the exact palette and spacing rules in [design.md](./design.md):

- Background: `#FFFFFF`
- Text: `#263B53`
- Accent: `#4778A8`
- Accent text: `#3B6794`
- Surface: `#F3F6F9`
- Border: `#DCE3EA`
- Radius: `4px`
- Container width: `1080px`
- Section padding: `64px` mobile, `96px` desktop

Use only the specified spacing tokens and avoid ad hoc values.

## Typography
- Use Inter as the primary font.
- Prefer self-hosted, subsetted font files; do not load fonts from Google Fonts or external hosts if avoidable.
- Keep body text readable and sized at 16–17px with a max reading width around 65ch.
- Use heading scaling that matches the design spec.

## Section order
The page must follow this sequence:
1. Header / Navigation
2. Hero
3. About
4. Education
5. Achievements
6. Interests / Strengths
7. Contact
8. Footer

All sections should be `section` elements with `id` and `aria-labelledby`.

## Content constraints
- Hero headline should use only verified facts.
- The navigation links should be same-page anchors: About, Education, Achievements, Interests, Contact.
- The Contact section should be omitted entirely if no professional email, social link, or resume is available.
- Education entries should only show institution, dates, and specialization if confirmed.
- Achievement content should only mention confirmed medals, categories, locations, organizers, or links.
- Do not claim rankings, titles, or achievements not provided.
- Use first-person or third-person voice consistently; pick one and keep it throughout.

## Images
- Real photos only; no AI-generated or stock images presented as Adil.
- Always use `next/image` with explicit width and height.
- Reserve aspect-ratio space to avoid layout shift.
- Use descriptive alt text that describes the scene and person, not “image of”.
- Hero image should load eagerly; other images should load lazily.
- If a photo is missing, omit the figure instead of showing a broken image.

## Accessibility and performance
- Add a skip-to-content link as the first focusable element.
- Ensure keyboard navigation works for all interactive elements, including the mobile menu.
- Use visible `:focus-visible` states.
- Respect reduced-motion preferences.
- Keep pages performant and avoid unnecessary JS or dependencies.
- Ensure the layout is usable at 200% zoom without horizontal scrolling.

## Technical constraints
- Prefer a static, server-rendered Next.js page rather than client-heavy patterns.
- Keep the site lightweight and fully static when possible.
- Avoid UI libraries, animation libraries, icon packs, analytics scripts, or tracking unless explicitly approved.
- No inline event handlers; prefer semantic HTML and minimal JS.
- Keep metadata accurate and verified.

## Implementation checklist
Before finishing work, confirm:
- There is only one page.
- The sticky header anchor scrolling does not hide content under it.
- Mobile menu works with keyboard and touch.
- Contact section is present only when actual data exists.
- All content is verified and no false claims remain.
- The design matches the white/navy/light palette and minimal style.
- The implementation passes build checks and remains responsive at small sizes.

## Deliverable standard
When building or editing this portfolio, keep the work faithful to the design brief in [design.md](./design.md): minimal, polished, mobile-first, and authentic.
