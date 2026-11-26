---
name: 02-motion-primitives
description: Motion primitives and Lenis smooth scroll
disable-model-invocation: true
---
Follow .github/copilot-instructions.md.
Build src/components/motion/: Reveal (fade+translate on view, direction prop, once),
Stagger, TextReveal (word/line mask reveal), Parallax (useScroll + useTransform),
Magnetic (disabled on touch and reduced-motion), Marquee (infinite, pause on hover, accessible).
Add a Lenis smooth-scroll provider (disabled for reduced motion).
Typed, JSDoc'd, transform/opacity only.
Create a temporary /playground route to preview all of them, then remove it before commit.
