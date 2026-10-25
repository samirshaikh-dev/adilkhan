# `changes.md` --- Adil Khan Portfolio Redesign Plan

## Purpose

Redesign the existing Adil Khan portfolio into a polished, credible,
premium-feeling **single-page personal portfolio**. This is a full UI/UX
redesign covering layout, visual design, typography, content hierarchy,
responsive behavior, and interactions---not a superficial color refresh.

The portfolio should position Adil as: - A BBA graduate currently
pursuing an MBA. - A national-level grappling athlete and silver
medallist. - A person whose competitive-sport experience, discipline,
and interests complement his business education. - Someone approachable
for professional conversations and future opportunities.

The intended impression is **professional, human, disciplined,
memorable, and authentic**.

## Non-negotiable design direction

Use a combination of: 1. **Editorial / Swiss-inspired layout** ---
strong grid, deliberate alignment, generous whitespace, clear hierarchy.
2. **Apple-inspired clarity and craft** --- purposeful content,
restrained interface, intuitive interactions, attention to detail. Do
not copy Apple's website. 3. **Athletic personal storytelling** --- real
photographs, credible achievements, and specific personal details.

### Visual identity

Use this palette consistently: - Warm off-white background: `#F7F8F2` -
Deep black / primary text: `#0A0A0A` - Slate gray / secondary text:
`#5F6368` - Electric lime / restrained accent: `#B8FF00` - White:
`#FFFFFF` where a surface needs separation

Rules: - The overall site must remain light and white-based. - Do not
create a dark theme or black full-page background. - Use lime sparingly
for small highlights, active states, tiny markers, or a carefully chosen
CTA accent. Never make the whole site lime-heavy. - Do not introduce
additional colors unless there is a clear, documented accessibility or
content reason. - Do not use AI-template aesthetics: no decorative
gradient blobs, excessive gradients, glassmorphism, glowing borders,
excessive shadows, floating 3D objects, or arbitrary abstract shapes.

### Typography

Preferred system: - Headings: **Manrope** (or an already-installed
equivalent if introducing a new font would hurt performance). - Body/UI:
**Inter** (or a good existing system font if appropriate). - Limit the
site to two font families and a small, consistent set of weights. - Use
fluid typography with `clamp()` where useful. - Use short line lengths
for body text and intentional headline wrapping. - Do not make every
section heading huge. Create a hierarchy between hero title, section
titles, card/title text, body text, labels, and metadata. - Ensure body
text is readable on small screens and text contrast is accessible.

Suggested starting scale (adapt after inspecting the current
implementation): - Hero headline: `clamp(2.7rem, 6.8vw, 6.5rem)` -
Section headings: `clamp(2rem, 4vw, 3.5rem)` - Subheadings:
`1.25rem–1.5rem` - Body: `1rem–1.125rem` - Supporting text:
`0.875rem–0.95rem` - Eyebrow/metadata: `0.72rem–0.8rem`, uppercase only
when useful

Use comfortable line-height: roughly 1.05--1.15 for display headings and
1.5--1.75 for body text.

### Layout and shape language

-   One-page experience only.
-   Mobile-first and fully responsive.
-   Use a consistent spacing scale based on multiples of 4 or 8 px.
-   Suggested desktop content max-width: approximately `1120–1200px`.
-   Suggested mobile horizontal padding: `20–24px`; tablet/desktop
    padding should scale appropriately.
-   Use a desktop grid (12 columns or an equivalent consistent grid)
    where useful.
-   Favor open editorial sections and image/text compositions over a
    page full of identical cards.
-   Use subtle borders and dividers instead of heavy shadows.
-   Use modest corner radii consistently. Do not round every element
    excessively.
-   Maintain generous whitespace, but do not make the page unnecessarily
    long.

## Critical content integrity rules

Before changing the UI, inspect the repository and identify the current
content and assets.

-   **Never invent** institutions, degree dates, competition names,
    event years, divisions, rankings, awards, contact details, or
    professional experience.
-   Remove placeholder data such as `example.com`, sample email
    addresses, demo institution names, fake social links, or unverified
    achievements.
-   Replace placeholders only when the correct information already
    exists in the repository or is explicitly supplied by the project
    owner.
-   If a value is missing, either omit that field cleanly or leave a
    clearly documented TODO for the owner. Do not show TODO text on the
    public website.
-   Do not claim that an achievement is verified unless there is a real,
    working source.
-   Use authentic photos from the repository when available. Do not
    substitute generic stock imagery or AI-generated portraits for Adil.
-   Do not remove existing meaningful information without checking
    whether it is accurate and useful.
-   Keep Adil's name consistently displayed as **Adil Khan**.

## Working rules for the coding AI

1.  First inspect the entire project: framework, routes, components, CSS
    strategy, package scripts, assets, existing content, and deployment
    setup.
2.  Identify the current entry point and all files that affect the
    portfolio before editing.
3.  Reuse the current framework and dependencies unless a change is
    genuinely necessary. Do not rewrite the project in a different
    stack.
4.  Avoid adding a large UI library or animation dependency for effects
    that can be done with existing tools/CSS.
5.  Preserve working build/deployment configuration and existing
    functional integrations.
6.  Make changes phase by phase in the order below.
7.  After each phase, run the available lint, type-check, build, and
    test commands that are relevant to the repository. If a command is
    unavailable, report that honestly.
8.  Do not hide errors by disabling lint rules, TypeScript checks,
    tests, or accessibility checks.
9.  Do not leave dead code, duplicate components, unused styles, broken
    links, console errors, or unnecessary dependencies.
10. If repository content is ambiguous, prefer a safe, truthful omission
    over inventing details.
11. Keep the project runnable after each phase.
12. At the end, provide a concise change summary, list files changed,
    list checks run and their results, and list any content the owner
    must supply.

------------------------------------------------------------------------

# Phase 0 --- Repository audit and implementation plan

## Goal

Understand the existing codebase before making changes.

## Tasks

-   Inspect the repository structure and identify the framework, package
    manager, app entry point, page route, styling method, reusable
    components, and image/font assets.
-   Read `package.json` and identify available scripts for development,
    linting, type checking, testing, and production build.
-   Identify current page sections, navigation behavior, external links,
    downloadable files, forms, and any existing analytics or
    integrations.
-   Locate placeholder content, sample data, broken URLs, missing image
    assets, and duplicate styles.
-   Check whether Manrope or Inter is already available. Prefer existing
    assets or a performant font-loading method.
-   Establish the current baseline: run the production build and
    relevant checks before editing when possible.
-   Create a short implementation map that names the files likely to
    change and any risks.

## Deliverable

A short audit summary before coding. Then proceed with the redesign; do
not stop after producing the audit.

## Acceptance criteria

-   No unnecessary framework migration.
-   Existing useful behavior and deployment configuration are understood
    and preserved.
-   All obvious placeholders and content gaps are identified.

# Phase 1 --- Design tokens and global foundation

## Goal

Create one coherent design system before redesigning individual
sections.

## Tasks

-   Define shared color variables/tokens for the palette in this
    document.
-   Define typography tokens, type sizes, line heights, font weights,
    and letter spacing.
-   Define a consistent spacing scale, container widths, responsive
    gutters, border colors, radii, and transition durations.
-   Establish global styles for `body`, headings, paragraphs, links,
    buttons, images, focus states, and selection where appropriate.
-   Set sensible defaults for text rendering and prevent horizontal
    overflow without masking layout defects.
-   Ensure links, buttons, and form controls inherit the design system
    rather than each defining unrelated styles.
-   Use semantic HTML and preserve a clear heading hierarchy.
-   Add a reduced-motion strategy that disables or simplifies
    nonessential animation.
-   Avoid broad global selectors that unexpectedly break existing
    components.

## Acceptance criteria

-   The palette and spacing system are defined centrally and reused.
-   Typography is consistent across the page.
-   The site is light-themed throughout.
-   No gradient blobs, glassmorphism, heavy shadows, or arbitrary
    decorative effects are introduced.
-   Existing build still succeeds.

# Phase 2 --- Navigation and page structure

## Goal

Make the single-page experience easy to understand and navigate.

## Proposed information architecture

1.  Navigation
2.  Hero / introduction
3.  Achievement spotlight
4.  Education
5.  Personal story and transferable strengths
6.  Interests / life beyond competition
7.  Contact CTA and footer

Only include sections that can be populated with accurate content. Do
not add empty sections just to fill the template.

## Navigation tasks

-   Display a simple Adil Khan wordmark/name on the left.
-   Use a small number of anchor links on desktop, such as `Profile`,
    `Achievements`, `Education`, and `Contact`.
-   Use a compact, accessible mobile menu if all links do not fit
    comfortably.
-   Keep the header understated. A sticky header is acceptable if it
    does not consume too much viewport height or obscure anchor targets.
-   Provide visible hover, focus, and active states.
-   Smooth-scroll to sections where supported, but respect
    `prefers-reduced-motion`.
-   Apply appropriate `scroll-margin-top` so headings are not hidden
    behind a sticky header.
-   Ensure every navigation item points to a real section ID.
-   Do not use a giant navigation bar, excessive social icons, or
    unnecessary menu items.

## Acceptance criteria

-   Navigation works by mouse, touch, and keyboard.
-   Every link resolves to the intended section.
-   Mobile navigation is usable and does not trap focus or leave the
    page in an unusable state.
-   No section is hidden behind the header after anchor navigation.

# Phase 3 --- Hero redesign

## Goal

Create a confident, memorable first impression that communicates who
Adil is without overloading the screen.

## Suggested content direction

Eyebrow: `MBA CANDIDATE · NATIONAL-LEVEL ATHLETE`

Headline: `Business in mind. Discipline in action.`

Supporting copy should briefly connect business education and
competitive sport. Keep it personal, factual, and concise. The wording
is a suggested direction, not a claim that must be used verbatim.

Primary CTA: `Explore my journey` --- scrolls to the relevant section.

Secondary CTA: `Contact me` or `View resume` --- only include a real,
working destination. Do not show a resume CTA if no current resume file
exists.

## Layout

-   Desktop: editorial two-column composition with copy on one side and
    an authentic portrait or competition image on the other.
-   Mobile: stack content naturally; headline and key message should
    appear early, with image placement chosen to preserve a strong first
    impression.
-   Use one dominant headline, one concise paragraph, and no more than
    two main actions.
-   Give the hero enough whitespace to feel premium, but ensure
    important content appears within a reasonable first-screen scroll.
-   Use a real, high-quality image from the repository. Check crop and
    focal point at different breakpoints.
-   If there is no suitable photo, create a tasteful neutral image
    placeholder only if the project already has a suitable asset;
    otherwise omit the image rather than fabricate a portrait.
-   Add useful alt text for informative images; use empty alt text for
    purely decorative imagery.

## Avoid

-   Rotating headline carousels.
-   Autoplay video.
-   Animated counters.
-   Typing effects.
-   Excessive floating labels or badges.
-   Fake statistics or unsupported claims.

## Acceptance criteria

-   A new visitor can identify Adil and understand the combination of
    business education and sport quickly.
-   Hero content remains readable at 320 px width and on large screens.
-   CTAs work and have meaningful destinations.
-   The hero image does not stretch, distort, or crop important details.

# Phase 4 --- Achievement spotlight

## Goal

Give the strongest verified achievement appropriate prominence.

## Tasks

-   Make the national-level grappling silver medal the visual focus of
    this section, provided the claim is supported by existing accurate
    project content.
-   Use a large authentic competition or medal photo if available.
-   Present the competition name, year, category/division, and result
    only if those details are known and accurate.
-   Link to an official result or credible source only when a valid URL
    is available.
-   Use a clean editorial composition, not a dashboard of statistics.
-   Additional achievements may appear in a compact chronological list
    only if the facts are supplied and meaningful.
-   Ensure the section still looks complete if only one achievement can
    be verified.

## Acceptance criteria

-   No invented or placeholder event details.
-   Achievement text is readable on mobile.
-   Image and text align cleanly across breakpoints.
-   External verification links work and are clearly identified.

# Phase 5 --- Education section

## Goal

Communicate academic background without using generic resume cards.

## Tasks

-   Present BBA completion and current MBA study only with the
    institution names and dates that are already confirmed in the
    project or supplied by the owner.
-   Use a simple timeline or editorial list with a clear visual
    distinction between qualification, institution, and dates.
-   Include relevant coursework, projects, or academic interests only if
    actual information is available.
-   Do not invent academic awards, grades, specializations, or
    graduation dates.
-   If dates are unknown, omit them instead of showing guessed dates or
    placeholders.

## Acceptance criteria

-   Education is easy to scan.
-   The timeline/list works on narrow screens without horizontal
    scrolling.
-   Every institution and qualification is accurate.

# Phase 6 --- Personal story and transferable strengths

## Goal

Connect athletic experience to professional qualities without sounding
like generic motivational copy.

## Tasks

-   Add a concise first-person or third-person introduction, consistent
    with the existing site's voice.
-   If the site discusses discipline, resilience, preparation, focus,
    teamwork, or decision-making, connect each claim to a genuine
    example where possible.
-   Prefer two or three specific insights over a grid of generic value
    cards.
-   Use a simple editorial text/image layout or a short list with subtle
    dividers.
-   Avoid claims of management expertise or professional experience that
    Adil cannot substantiate.
-   Keep the copy grounded, natural, and specific to Adil.

## Acceptance criteria

-   Content feels personal rather than generated from a generic
    portfolio template.
-   No unsupported professional claims.
-   No large block of dense biography text.

# Phase 7 --- Interests and personality

## Goal

Show a human side without distracting from the professional purpose.

## Tasks

-   Include cricket and other real interests only where they add
    personality and context.
-   Use authentic images if available; do not rely on generic stock
    imagery.
-   Present interests as a compact image-led strip, short editorial
    section, or small list---not a large set of identical cards.
-   Keep this section visually quieter than the achievement spotlight.
-   Omit any interest for which no useful content or image exists rather
    than filling space.

## Acceptance criteria

-   The section adds personality without overwhelming the page.
-   Images have appropriate aspect ratios and do not slow down the page
    unnecessarily.
-   The portfolio remains professional.

# Phase 8 --- Contact section and footer

## Goal

Make it easy for visitors to take a genuine next step.

## Tasks

-   Create a clear closing heading, such as `Let's connect.`
-   Use the actual email, LinkedIn, phone, or other professional links
    from the project owner's verified information.
-   Never invent contact details or leave sample contact information
    visible.
-   Use correct link semantics: `mailto:` for email, `tel:` for
    telephone where appropriate, and real URLs for social profiles.
-   Open external links in a new tab only when useful; if using
    `target="_blank"`, add appropriate `rel` attributes.
-   Add a resume download only if a valid current file exists. Confirm
    that the link works and that the file name is sensible.
-   Keep the footer minimal: name, relevant links, and copyright if
    appropriate.
-   Avoid a fake contact form unless it is actually connected to a
    working submission path. If a form exists, preserve and test its
    real behavior.

## Acceptance criteria

-   Every contact action works.
-   No placeholder email, `example.com`, dead social link, or
    nonfunctional form remains.
-   Footer is visually quiet and responsive.

# Phase 9 --- Interaction and motion polish

## Goal

Make the site feel refined without allowing effects to compete with
content.

## Approved interaction patterns

-   Short transitions for links and buttons.
-   Small arrow movement on a CTA hover.
-   Underline or color change for navigation hover/active states.
-   Gentle section reveal only if it remains unobtrusive and does not
    hide content before JavaScript runs.
-   Optional image enlargement/lightbox only if there are multiple
    meaningful photos and the interaction is accessible.
-   Clear focus-visible styles for keyboard users.
-   Reduced-motion support.

## Implementation guidance

-   Prefer CSS transitions and the browser's native behavior.
-   Use Intersection Observer only if the framework/project architecture
    supports it cleanly and there is a clear need.
-   Avoid adding animation libraries for simple opacity or transform
    effects.
-   Keep most interaction durations around 150--250 ms; use slightly
    longer durations only when they improve comprehension.
-   Do not animate layout in a way that causes content jumps.
-   Ensure hover effects have sensible touch equivalents and do not make
    essential content hover-only.
-   Respect `prefers-reduced-motion: reduce`.
-   Ensure content remains visible if an animation fails or JavaScript
    is disabled.

## Explicitly prohibited

-   Custom cursor.
-   Scroll-jacking.
-   Parallax-heavy effects.
-   Autoplay carousels.
-   Bouncing elements.
-   Long intro animations that delay access to content.
-   Scroll effects that cause motion sickness.
-   Interaction that exists only for visual novelty.

## Acceptance criteria

-   Interactions are purposeful, brief, and accessible.
-   No content is inaccessible without hover.
-   Reduced-motion preferences are respected.
-   No console errors or layout shifts caused by animations.

# Phase 10 --- Responsive refinement

## Goal

Make the experience intentionally designed for mobile, tablet, laptop,
and large screens.

## Tasks

Test and refine at approximately: - 320--360 px: narrow mobile -
375--430 px: common mobile - 768 px: tablet portrait - 1024 px: tablet
landscape / small laptop - 1280--1440 px: desktop - 1600 px and above:
wide desktop

Check: - Header/navigation wrapping and menu behavior. - Hero title line
breaks and image order. - Body line length and font scaling. - Grid
collapse and section spacing. - Achievement images and timelines. - CTA
width and touch target size. - Footer wrapping. - No horizontal
scrolling. - No text overlapping images or buttons. - Sticky header
height and anchor scroll offsets. - Tap targets around 44 × 44 CSS px
where practical.

Do not simply shrink the desktop design. Recompose layouts at
breakpoints when necessary.

## Acceptance criteria

-   No horizontal overflow at target widths.
-   No overlapping content, clipped text, or tiny controls.
-   The page looks intentionally composed on mobile, not like a
    compressed desktop page.

# Phase 11 --- Accessibility, SEO, and performance

## Accessibility

-   Use semantic landmarks (`header`, `nav`, `main`, `section`,
    `footer`) and meaningful heading order.
-   Use real buttons for actions and anchors for navigation.
-   Ensure all controls are keyboard accessible and have visible focus.
-   Provide accessible names for icon-only controls.
-   Maintain adequate color contrast; do not rely on lime alone to
    convey state.
-   Add meaningful alt text to informative images.
-   Respect reduced-motion settings.
-   Ensure mobile menu state is announced appropriately and can be
    operated by keyboard.
-   Do not use color as the only way to distinguish active states.

## SEO and sharing

-   Review the page title and meta description.
-   Use a concise, factual title such as
    `Adil Khan | MBA Candidate & National-Level Athlete` if it
    accurately describes him.
-   Add appropriate Open Graph metadata if the current framework
    supports it.
-   Use descriptive section IDs and meaningful link text.
-   Add structured data only if it is accurate and appropriate; do not
    invent awards, credentials, or organization details.
-   Ensure the favicon and social preview image, if present, are real
    and consistent with the identity.

## Performance

-   Resize and compress large images.
-   Use responsive image sources or framework image optimization where
    supported.
-   Set width/height or aspect ratio to reduce layout shift.
-   Lazy-load below-the-fold images; do not lazy-load the main hero
    image if it delays the first impression.
-   Avoid unnecessary packages and large animation bundles.
-   Load fonts efficiently and avoid excessive font weights.
-   Remove unused CSS and assets only after confirming they are unused.

## Acceptance criteria

-   No critical accessibility issue is knowingly introduced.
-   Images load efficiently and do not create significant layout shift.
-   Page metadata is accurate.
-   The build has no new warnings or errors that have been ignored
    without explanation.

# Phase 12 --- Quality assurance and final verification

## Tasks

-   Run the repository's available lint command.
-   Run type checks if applicable.
-   Run tests if available.
-   Run the production build.
-   Start the local site and inspect the full page at mobile and desktop
    widths.
-   Test all navigation anchors, email/social links, resume download,
    and any form or image viewer.
-   Inspect browser console output for errors.
-   Check for missing assets, broken images, overflow, unexpected font
    changes, and inconsistent spacing.
-   Confirm all public-facing content is accurate and no placeholder
    content remains.
-   Check reduced-motion behavior and keyboard navigation.
-   Review changes for unused dependencies, dead code, duplicated CSS,
    and accidental modifications to deployment files.

## Final acceptance checklist

-   [ ] Single-page portfolio; no unnecessary extra routes/pages.
-   [ ] Light, warm-white visual identity.
-   [ ] Restrained lime accent, not overused.
-   [ ] Strong editorial grid and consistent spacing.
-   [ ] Clear typography hierarchy.
-   [ ] Real, accurate content and genuine imagery.
-   [ ] Hero clearly communicates Adil's identity.
-   [ ] Achievement is prominent and not embellished.
-   [ ] Education details are accurate.
-   [ ] Contact and resume actions work.
-   [ ] Mobile-first behavior is polished.
-   [ ] Keyboard and reduced-motion behavior are supported.
-   [ ] No AI-template gradients, glassmorphism, or decorative clutter.
-   [ ] No placeholder URLs, sample emails, fake statistics, or invented
    facts.
-   [ ] Lint/type-check/tests/build results are reported honestly.
-   [ ] No unnecessary dependency or framework migration.

## Final report required from the coding AI

At completion, report: 1. Summary of the redesign. 2. Files created,
changed, and removed. 3. Key layout, typography, interaction, and
responsive decisions. 4. Commands run and exact results for lint,
type-check, tests, and build. 5. Any known limitations or unresolved
issues. 6. Any real content/assets still needed from Adil or the owner.

Do not claim that tests passed unless they were actually run. Do not
claim a link, form, or download works unless it was tested.
