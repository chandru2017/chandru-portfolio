'use client';

import { ArrowUpRight } from 'lucide-react';
import { GlassCard } from '@/components/ui-custom/glass-card';
import { Magnetic } from '@/components/motion';
import { scheduleInterviewHref } from '@/lib/contact';

export function MobileScheduleButton() {
    return (
        <GlassCard className="fixed inset-x-4 bottom-4 z-40 rounded-2xl p-1 sm:hidden">
            <Magnetic className="w-full">
                <a
                    href={scheduleInterviewHref}
                    className="inline-flex h-12 w-full items-center justify-between rounded-lg bg-primary px-5 text-base font-medium text-primary-foreground transition-colors hover:bg-primary/80 focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
                >
                    Schedule Interview
                    <ArrowUpRight aria-hidden="true" />
                </a>
            </Magnetic>
        </GlassCard>
    );
}
