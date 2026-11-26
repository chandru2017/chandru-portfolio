export interface Experience {
  company: string;
  location: string;
  role: string;
  start: string;
  end: string; // 'Present' for current role
  description: string;
  responsibilities: readonly string[];
  achievements?: readonly string[];
  tech?: readonly string[];
}

export const experience: readonly Experience[] = [
  {
    company: 'Tartlabs',
    location: 'Coimbatore, Tamil Nadu',
    role: 'Senior Frontend Engineer and Frontend Lead',
    start: 'Sep 2017',
    end: 'Present',
    description:
      'AI-driven software development company specializing in enterprise web applications, SaaS platforms, AI solutions, healthcare products, and digital transformation services.',
    responsibilities: [
      'Designed and developed scalable enterprise web applications, SaaS products, and corporate websites using React.js, Next.js, TypeScript, HTML5, CSS3, and Tailwind CSS.',
      'Architected reusable component libraries and scalable frontend solutions to improve development efficiency and maintainability.',
      'Integrated REST APIs and third-party services into frontend applications.',
      'Implemented Server-Side Rendering (SSR) and Static Site Generation (SSG) using Next.js.',
      'Improved Core Web Vitals, Google Lighthouse scores, and application performance through code splitting, lazy loading, bundle optimization, and image optimization.',
      'Applied Technical SEO best practices, including Schema Markup and structured metadata, to improve search visibility.',
      'Ensured Web Accessibility (WCAG 2.1) compliance using semantic HTML, ARIA attributes, and keyboard navigation.',
      'Conducted code reviews, mentored junior developers, and promoted frontend best practices.',
      'Worked in Agile/Scrum environments using Git, GitHub, GitLab, Jira, and Figma.',
      'Integrated analytics and tracking tools including Google Tag Manager, Microsoft Clarity, Hotjar, and Leadfeeder.',
    ],
    achievements: [
      'Delivered 5+ enterprise applications, SaaS platforms, and corporate websites.',
      'Created 100+ responsive web pages.',
      'Built 100+ reusable UI components.',
      'Improved Google Lighthouse scores from 60 to 94.',
      'Reduced page load time by approximately 35%.',
      'Applied enterprise-level SEO and Accessibility across one application.',
    ],
    tech: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', 'Redux Toolkit', 'TanStack Query'],
  },
  {
    company: 'Nano Nino',
    location: 'Coimbatore, Tamil Nadu',
    role: 'Web Developer',
    start: 'Mar 2015',
    end: 'Aug 2017',
    description:
      'Web application development using HTML, CSS, Bootstrap, AngularJS, PHP, and MySQL to build responsive user interfaces and dynamic web applications.',
    responsibilities: [
      'Developed responsive web pages and user interfaces using HTML, CSS, Bootstrap, and AngularJS.',
      'Implemented dynamic application features using AngularJS, PHP, and MySQL, integrating frontend components with backend logic and database operations.',
      'Maintained website layouts for cross-browser compatibility and usability; helped debug, test, and resolve application issues.',
      'Collaborated with team members to deliver features aligned with project requirements.',
    ],
    tech: ['HTML', 'CSS', 'Bootstrap', 'AngularJS', 'PHP', 'MySQL'],
  },
] as const;
