export interface Project {
  slug: string;
  title: string;
  type: 'Internal' | 'Client';
  role: string;
  url: string;
  description: string; // TODO: resume has no description. Ask owner to confirm/write one.
  tech: readonly string[];
  image?: string; // TODO: add screenshot under /public/projects/
  featured: boolean;
}

export const projects: readonly Project[] = [
  {
    slug: 'tartlabs-website',
    title: 'Official Tart Labs Corporate Website',
    type: 'Internal',
    role: 'Senior Frontend Engineer',
    url: 'https://www.tartlabs.com',
    description: 'TODO: add 1-2 line description (SSR/SSG corporate website powered by Strapi CMS).',
    tech: ['Next.js', 'React.js', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', 'Strapi CMS', 'SSR', 'SSG'],
    featured: true,
  },
  {
    slug: 'archer-review',
    title: 'Archer Review',
    type: 'Client',
    role: 'Frontend Team Lead',
    url: 'https://www.archerreview.com',
    description: 'TODO: add 1-2 line description.',
    tech: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Material UI', 'Monorepo', 'REST APIs'],
    featured: true,
  },
] as const;
