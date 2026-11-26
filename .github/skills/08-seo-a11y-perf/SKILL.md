---
name: 08-seo-a11y-perf
description: "SEO, accessibility and performance audit"
disable-model-invocation: true
---
Follow .github/copilot-instructions.md.
Audit and fix:
SEO: metadata API, title template, OG/Twitter, canonical, sitemap.ts, robots.ts, dynamic opengraph-image,
JSON-LD Person schema (name, jobTitle, url, sameAs, address Coimbatore).
A11y: keyboard flow, focus-visible, contrast in BOTH themes (glass over blobs), aria, reduced motion,
dialog/sheet accessibility.
Performance: dynamic import below-the-fold and heavy animation, next/image sizes, no layout shift,
@next/bundle-analyzer, tree-shake icons. Check backdrop-blur cost on mobile and reduce if needed.
Report what you changed.
