export const profile = {
  name: 'Chandrasekaran A',
  role: 'Senior Frontend Engineer',
  headline: 'Senior Frontend Engineer & Frontend Lead',
  tagline: '11+ years of frontend development | 6+ years React & Next.js',
  availability: 'Immediate Joiner',
  location: 'Coimbatore, Tamil Nadu, India',
  email: 'chandramsc4@gmail.com',
  phone: '+91-9524775844',
  summary:
    'Senior Frontend Engineer with 11+ years of software development experience, including 6+ years of hands-on React.js experience. Skilled in React.js, Next.js, TypeScript, JavaScript (ES6+), Redux Toolkit, TanStack Query, GraphQL, Apollo Client, frontend architecture, reusable component libraries, SSR/SSG, and REST API integration. Experienced in frontend testing using Vitest and React Testing Library, Technical SEO, WCAG accessibility, and Core Web Vitals optimization. Proven ability to build scalable web applications and lead frontend delivery in Agile teams.',
  social: {
    linkedin: 'https://www.linkedin.com/in/chandrasekaran-a-144517141',
    // TODO: resume says "chandru2017 (chandru17.project)". Confirm the correct GitHub username.
    github: 'https://github.com/chandru2017',
  },
  resumeUrl: '/Chandrasekaran-frontend-eng.pdf', // TODO: copy the PDF into /public
  stats: [
    { label: 'Years of experience', value: 11, suffix: '+' },
    { label: 'Years in React & Next.js', value: 6, suffix: '+' },
    { label: 'Enterprise apps delivered', value: 5, suffix: '+' },
    { label: 'Reusable UI components', value: 100, suffix: '+' },
  ],
} as const;

export type Profile = typeof profile;
