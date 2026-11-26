---
name: 01-foundation
description: "Theme, GlassCard, background blobs, fonts, palette"
disable-model-invocation: true
---
Follow .github/copilot-instructions.md.
Content is already in src/content (resume data). Do NOT change it or invent data.

Task 1 (foundation only, no sections yet):
1. Set up the next-themes provider and a ThemeToggle (animated sun/moon swap with Motion).
   Verify the shadcn dark variant works with the class strategy.
2. Create <GlassCard> (props: as, hoverable, className) per the rules.
3. Create the animated gradient blobs background, themed for both light and dark.
4. Pick fonts via next/font matching the screenshot's typography; expose as Tailwind font families.
5. Define the color palette (accent, muted text) as shadcn tokens for both themes, matching the screenshot.
Show the file list first, then implement.
