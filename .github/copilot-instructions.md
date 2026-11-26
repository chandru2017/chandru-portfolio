# Project: animated developer portfolio

Goal: a recruiter who opens it should want to schedule an interview.
Owner: Chandrasekaran A, Senior Frontend Engineer (content lives in `src/content`).

## Stack
Next.js App Router, React, TypeScript (strict), Tailwind CSS, shadcn/ui, Motion
(package `motion`, import from `motion/react`), Lenis, Redux Toolkit (UI state only),
next-themes. Package manager: **pnpm only**.

## Design source
- Follow the Dribbble "Developer Profile Template" screenshot (if attached) for layout,
  typography, spacing, hierarchy. Do not copy assets.
- Two themes: dark and light via next-themes (`attribute="class"`, `defaultTheme="system"`).
  Every component must look good in both.

## Styling rules (strict)
- Tailwind utility classes ONLY. No custom CSS files, no `<style>`, no CSS modules,
  no inline style objects (except values Motion needs).
- `globals.css` may contain only: tailwind import, shadcn theme tokens, dark custom-variant.
- Animations use Motion, never CSS keyframes.
- Use `cn()` and `cva` for variants.

## Glassmorphism (cards, navbar, dialogs, sheets)
- ONE reusable `<GlassCard>` in `src/components/ui-custom/glass-card.tsx` holds all glass
  classes. Reuse it everywhere; never repeat glass classes elsewhere.
- Dark: `bg-white/5 border border-white/10 backdrop-blur-xl shadow-lg shadow-black/30`
- Light: `bg-white/60 border border-black/5 backdrop-blur-xl shadow-lg shadow-black/5`
- Use `dark:` variants. Hover: slight lift (Motion whileHover), brighter border, soft glow.
- Fallback background for no backdrop-filter support (`supports-[backdrop-filter]:`).
- Page background has soft gradient blobs (absolute, blur-3xl, low opacity, -z-10), animated slowly.

## Animation rules
- Animate only `transform` and `opacity`. Respect `prefers-reduced-motion` (`useReducedMotion`).
- Reusable primitives in `src/components/motion/`: Reveal, Stagger, Parallax, Magnetic,
  Marquee, TextReveal. Sections use these, not ad-hoc animation code.

## Architecture
```
src/app, src/features/<feature>/{components,hooks,types.ts,index.ts},
src/components/{ui,layout,motion,ui-custom}, src/content, src/store, src/lib, src/hooks, src/config
```
`@/` imports, barrel exports, no cross-feature imports, one component per file,
Server Components by default, `"use client"` only when needed, no `any`.
Never hardcode content in components; read from `src/content`. Do not invent facts.
Redux is for UI state only (theme, modals, nav), never for static content.

## Quality
Semantic HTML, WCAG 2.2 AA (contrast 4.5:1 in BOTH themes), focus-visible rings, skip link,
aria labels. Core Web Vitals: LCP < 2.5s, CLS < 0.1, INP < 200ms.
After every task run `pnpm lint` and `pnpm typecheck` and fix errors.
Use conventional commit messages.
