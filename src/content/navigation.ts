export interface NavigationLink {
    id: string;
    label: string;
    href: string;
}

export const navigationLinks: readonly NavigationLink[] = [
    { id: 'home', label: 'Home', href: '#main-content' },
    { id: 'about', label: 'About', href: '#about' },
    { id: 'skills', label: 'Skills', href: '#skills' },
    { id: 'experience', label: 'Experience', href: '#experience' },
    { id: 'projects', label: 'Projects', href: '#projects' },
    { id: 'contact', label: 'Contact', href: '#contact' },
] as const;
