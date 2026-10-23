# Smoothness and Animation Plan

## Goal
Improve the website feel by adding the right motion tool in the right place:
- smooth global page scrolling
- polished UI transitions
- optional advanced scroll-driven effects only when needed

## Recommended Tooling Strategy

This project is already using Next.js, React, Tailwind CSS, and Framer Motion. The best approach is to keep the stack simple and use the most suitable tool per use case.

### Default recommendation
- Use Lenis for whole-page scroll smoothness
- Use Motion (Framer Motion) for UI animations and page transitions
- Use GSAP only for complex storytelling or parallax-heavy sections
- Use component libraries like Magic UI / Aceternity UI / React Bits only for quick polished UI patterns

---

## Tool Map: Where to Use What

| Use case | Tool | Why this tool | Where to use it | How to apply it |
|---|---|---|---|---|
| Whole-page smooth scrolling | Lenis | Lightweight, native-scroll friendly, excellent for wheel/trackpad inertia | App shell / root layout | Mount a small client component in the root layout and enable it with an environment toggle |
| Section reveals and component transitions | Motion (Framer Motion) | Declarative, easy to use, ideal for hover, fade-in, stagger, and route transitions | Hero sections, cards, FAQ, modal dialogs, CTA blocks | Wrap elements with motion components and use `initial`, `animate`, `whileInView`, and `transition` props |
| Complex scroll-driven storytelling | GSAP | Very powerful for timelines, pinning, scroll triggers, and parallax | Landing pages with advanced storytelling sections | Add GSAP + ScrollTrigger only for special sections that need custom choreography |
| Quick polished UI patterns | Magic UI / Aceternity UI / React Bits | Fast way to add modern animated components without building from scratch | Hero backgrounds, buttons, cards, loaders, glows | Copy-paste reusable components and adapt them to the brand style |

---

## Recommended Implementation Plan

### Phase 1 — Global smooth scrolling
Use Lenis first.

Why:
- Best fit for overall page feel
- Minimal setup
- Works well with Next.js and React
- Does not fight with native scrolling

How:
1. Install `lenis`
2. Create a small client component for Lenis initialization
3. Mount it once from the root layout
4. Add an env-based toggle such as:
   - `NEXT_PUBLIC_ENABLE_SMOOTH_SCROLL=true`
   - `NEXT_PUBLIC_ENABLE_SMOOTH_SCROLL=false`

This is the best first step because it improves the experience without requiring major refactoring.

### Phase 2 — UI motion and micro-interactions
Use Motion for interactive polish.

Why:
- Great for fade-ins, hover states, staggered cards, and modal transitions
- Keeps UI feel modern without overload
- Already compatible with the current React/Next.js stack

How:
- Add subtle animations to:
  - hero section entrance
  - service cards on hover
  - portfolio cards reveal on scroll
  - FAQ accordion transitions
  - CTA buttons and form states

### Phase 3 — Advanced scroll experiences (only if needed)
Use GSAP only when a section needs more complex animation logic.

Why:
- Powerful but heavier than necessary for standard pages
- Better reserved for special experiences like:
  - animated timelines
  - pinned sections
  - parallax storytelling

### Phase 4 — Fancy landing page patterns
Use a UI component library only for fast visual polish.

Why:
- Useful for quick wins
- Good for hero effects, animated backgrounds, and premium-looking components

How:
- Use these sparingly so the site does not feel overly animated or inconsistent

---

## Proposed Priorities for This Project

1. Lenis for global scroll smoothness
2. Motion for section transitions and UI polish
3. GSAP only for premium storytelling sections if the design calls for it
4. UI libraries only for selective enhancement, not core functionality

---

## Suggested Default Setup for This Repo

- Keep default smooth scrolling enabled through the env variable
- Use Motion for all animated UI components
- Avoid GSAP unless a clear design requirement appears
- Keep animations subtle, accessible, and performance-friendly

---

## Acceptance Criteria

The implementation is successful when:
- page scrolling feels smooth and natural
- UI animations are subtle and intentional
- no layout shifts or jank appear during interactions
- the feature can be toggled through environment variables without code changes
