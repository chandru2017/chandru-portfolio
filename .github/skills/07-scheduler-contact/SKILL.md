---
name: 07-scheduler-contact
description: Interview scheduler dialog and contact form
disable-model-invocation: true
---
Follow .github/copilot-instructions.md.
Build features/scheduler and features/contact.
Scheduler: shadcn Dialog (glass) driven by Redux schedulerOpen, lazy-loaded Cal.com/Calendly embed using
NEXT_PUBLIC_SCHEDULER_URL (validate env with zod), fallback email/phone/LinkedIn buttons, focus trap, aria labels.
Contact: react-hook-form + zod, server action, inline errors, loading and success animation, honeypot field.
Add a final CTA banner 'Let's schedule an interview' before the footer.
