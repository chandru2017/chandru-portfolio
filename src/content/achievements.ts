export const metrics = [
  { label: 'Lighthouse score', from: 60, to: 94 },
  { label: 'Page load time reduced', value: 35, suffix: '%', approx: true },
  { label: 'Responsive pages created', value: 100, suffix: '+' },
  { label: 'Reusable UI components', value: 100, suffix: '+' },
  { label: 'Enterprise apps delivered', value: 5, suffix: '+' },
] as const;

export const certificates = [
  { title: 'Claude 101', issuer: 'Anthropic' },
  { title: 'Building with the Claude API', issuer: 'Anthropic' },
] as const;
