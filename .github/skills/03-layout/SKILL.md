---
name: 03-layout
description: "Navbar, footer, mobile nav, Redux UI state"
disable-model-invocation: true
---
Follow .github/copilot-instructions.md.
Build src/components/layout/ and src/store/:
- Navbar: glass, sticky, blur increases on scroll, active-section highlight (IntersectionObserver),
  ThemeToggle, 'Schedule Interview' primary button, mobile menu using shadcn Sheet with staggered links.
- Floating 'Schedule Interview' button on mobile (glass, Magnetic).
- Footer with social links from src/content/profile.
- Skip-to-content link, Container and Section wrappers.
- Redux Toolkit: store, typed hooks, ui slice (mobileNavOpen, schedulerOpen, activeSection),
  Providers client component.
