export interface SkillGroup {
  title: string;
  items: readonly string[];
}

export const skillGroups: readonly SkillGroup[] = [
  {
    title: 'Frontend',
    items: ['React.js', 'Next.js', 'TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Tailwind CSS', 'Material UI', 'Bootstrap', 'Styled Components', 'shadcn/ui', 'Framer Motion'],
  },
  {
    title: 'Data Fetching & API',
    items: ['TanStack Query', 'REST API', 'GraphQL', 'Apollo Client'],
  },
  {
    title: 'State Management & Testing',
    items: ['Redux Toolkit', 'Zustand', 'Vitest', 'React Testing Library'],
  },
  {
    title: 'Architecture & Development',
    items: ['Frontend Architecture', 'Component-Driven Development', 'Design Systems', 'Reusable Component Libraries', 'SSR', 'SSG', 'REST API Integration'],
  },
  {
    title: 'Performance & SEO',
    items: ['Core Web Vitals', 'Google Lighthouse', 'Code Splitting', 'Lazy Loading', 'Bundle Optimization', 'Technical SEO', 'Schema Markup'],
  },
  {
    title: 'Accessibility',
    items: ['WCAG 2.1', 'ARIA', 'Semantic HTML', 'Keyboard Accessibility'],
  },
  {
    title: 'Tools & Platforms',
    items: ['Git', 'GitHub', 'GitLab', 'Figma', 'Zeplin', 'Strapi CMS', 'Google Tag Manager', 'Microsoft Clarity', 'Hotjar'],
  },
  {
    title: 'Backend & AI',
    items: ['PHP', 'Laravel', 'MySQL', 'Cursor AI', 'Claude API', 'GPT-4', 'Gemini'],
  },
] as const;
