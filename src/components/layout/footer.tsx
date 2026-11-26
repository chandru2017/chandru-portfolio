import { BriefcaseBusiness, Code2, Mail } from 'lucide-react';
import { Container } from '@/components/layout/container';
import { navigationLinks, profile } from '@/content';

const socialLinks = [
    { label: 'GitHub', href: profile.social.github, Icon: Code2 },
    { label: 'LinkedIn', href: profile.social.linkedin, Icon: BriefcaseBusiness },
] as const;

export function Footer() {
    return (
        <footer className="border-t border-border/70 bg-background/50 pb-24 pt-10 md:pb-10">
            <Container>
                <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
                    <div className="max-w-sm">
                        <a
                            href="#main-content"
                            className="font-semibold tracking-tight text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                        >
                            {profile.name}
                        </a>
                        <p className="mt-2 text-sm leading-6 text-muted-foreground">
                            {profile.role} · {profile.location}
                        </p>
                    </div>

                    <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-5 gap-y-3">
                        {navigationLinks.map((link) => (
                            <a
                                key={link.id}
                                href={link.href}
                                className="text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>
                </div>

                <div className="mt-8 flex flex-col gap-4 border-t border-border/70 pt-6 sm:flex-row sm:items-center sm:justify-between">
                    <a
                        href={`mailto:${profile.email}`}
                        className="inline-flex w-fit items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                    >
                        <Mail aria-hidden="true" className="size-4" />
                        {profile.email}
                    </a>
                    <div className="flex items-center gap-2">
                        {socialLinks.map(({ label, href, Icon }) => (
                            <a
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noreferrer"
                                aria-label={label}
                                className="grid size-10 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                            >
                                <Icon aria-hidden="true" className="size-4" />
                            </a>
                        ))}
                    </div>
                </div>
            </Container>
        </footer>
    );
}
