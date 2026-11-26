'use client';

import { ArrowUpRight, Code2, Menu } from 'lucide-react';
import { useEffect, useSyncExternalStore } from 'react';
import { Button } from '@/components/ui/button';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
} from '@/components/ui/sheet';
import { GlassCard } from '@/components/ui-custom/glass-card';
import { ThemeToggle } from '@/components/theme-toggle';
import { Stagger } from '@/components/motion';
import { navigationLinks, profile } from '@/content';
import { cn } from '@/lib/utils';
import { scheduleInterviewHref } from '@/lib/contact';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setActiveSection, setMobileNavOpen } from '@/store/ui-slice';

function subscribeToScroll(onChange: () => void) {
    window.addEventListener('scroll', onChange, { passive: true });
    return () => window.removeEventListener('scroll', onChange);
}

function getScrollSnapshot() {
    return window.scrollY > 16;
}

function getServerScrollSnapshot() {
    return false;
}

export function Navbar() {
    const dispatch = useAppDispatch();
    const activeSection = useAppSelector((state) => state.ui.activeSection);
    const mobileNavOpen = useAppSelector((state) => state.ui.mobileNavOpen);
    const scrolled = useSyncExternalStore(
        subscribeToScroll,
        getScrollSnapshot,
        getServerScrollSnapshot,
    );

    useEffect(() => {
        const sections = document.querySelectorAll('[data-section]');
        if (sections.length === 0) return;

        const observer = new IntersectionObserver(
            (entries) => {
                const visibleSections = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort(
                        (first, second) =>
                            first.boundingClientRect.top - second.boundingClientRect.top,
                    );
                const activeId = visibleSections[0]?.target.getAttribute('data-section');

                if (activeId) dispatch(setActiveSection(activeId));
            },
            { rootMargin: '-20% 0px -65% 0px', threshold: 0 },
        );

        sections.forEach((section) => observer.observe(section));
        return () => observer.disconnect();
    }, [dispatch]);

    const selectSection = (id: string) => {
        dispatch(setActiveSection(id));
        dispatch(setMobileNavOpen(false));
    };

    return (
        <header className="sticky top-3 z-50 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <GlassCard
                as="nav"
                aria-label="Main navigation"
                blurOnScroll
                scrolled={scrolled}
                className="flex h-16 items-center justify-between gap-4 px-4 sm:px-5"
            >
                <a
                    href="#main-content"
                    onClick={() => selectSection('home')}
                    className="inline-flex min-w-0 items-center gap-2 font-semibold tracking-tight text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                >
                    <Code2 aria-hidden="true" className="size-5 shrink-0 text-primary" />
                    <span className="truncate">{profile.name}</span>
                </a>

                <div className="hidden items-center gap-1 lg:flex">
                    {navigationLinks.map((link) => (
                        <a
                            key={link.id}
                            href={link.href}
                            onClick={() => selectSection(link.id)}
                            aria-current={activeSection === link.id ? 'location' : undefined}
                            className={cn(
                                'rounded-lg px-3 py-2 text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none',
                                activeSection === link.id
                                    ? 'bg-primary/10 text-primary'
                                    : 'text-muted-foreground hover:bg-muted hover:text-foreground',
                            )}
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                <div className="flex shrink-0 items-center gap-2">
                    <div className="hidden sm:block">
                        <a
                            href={scheduleInterviewHref}
                            className="inline-flex h-9 items-center justify-center gap-2 rounded-lg bg-primary px-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/80 focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
                        >
                            Schedule Interview
                            <ArrowUpRight aria-hidden="true" />
                        </a>
                    </div>
                    <ThemeToggle />
                    <Sheet
                        open={mobileNavOpen}
                        onOpenChange={(open) => dispatch(setMobileNavOpen(open))}
                    >
                        <Button
                            type="button"
                            variant="outline"
                            size="icon-lg"
                            aria-label={mobileNavOpen ? 'Close navigation menu' : 'Open navigation menu'}
                            aria-expanded={mobileNavOpen}
                            className="lg:hidden"
                            onClick={() => dispatch(setMobileNavOpen(!mobileNavOpen))}
                        >
                            <Menu aria-hidden="true" />
                        </Button>
                        <SheetContent
                            side="right"
                            className="w-[min(22rem,88vw)] border-0 bg-transparent p-0 shadow-none"
                        >
                            <GlassCard className="h-full rounded-none border-0 bg-background/90 p-6 pt-16 shadow-none supports-[backdrop-filter]:bg-background/70 dark:bg-background/90 dark:shadow-none">
                                <SheetHeader className="px-0">
                                    <SheetTitle className="text-xl">{profile.name}</SheetTitle>
                                    <SheetDescription>
                                        {profile.role}
                                    </SheetDescription>
                                </SheetHeader>
                                <Stagger className="flex flex-col gap-1" itemClassName="w-full">
                                    {navigationLinks.map((link) => (
                                        <a
                                            key={link.id}
                                            href={link.href}
                                            onClick={() => selectSection(link.id)}
                                            aria-current={activeSection === link.id ? 'location' : undefined}
                                            className={cn(
                                                'flex min-h-12 items-center rounded-lg px-4 font-medium transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none',
                                                activeSection === link.id
                                                    ? 'bg-primary/10 text-primary'
                                                    : 'text-foreground hover:bg-muted',
                                            )}
                                        >
                                            {link.label}
                                        </a>
                                    ))}
                                </Stagger>
                            </GlassCard>
                        </SheetContent>
                    </Sheet>
                </div>
            </GlassCard>
        </header>
    );
}
