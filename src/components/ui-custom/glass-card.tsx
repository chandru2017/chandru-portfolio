'use client';

import { motion } from 'motion/react';
import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { useReducedMotionPreference } from '@/hooks/use-reduced-motion-preference';

type GlassCardElement = 'div' | 'section' | 'article' | 'nav';

export interface GlassCardProps {
    as?: GlassCardElement;
    hoverable?: boolean;
    blurOnScroll?: boolean;
    scrolled?: boolean;
    className?: string;
    children?: ReactNode;
}

/**
 * Reusable glass surface with a consistent theme-aware fallback.
 */
export function GlassCard({
    as = 'div',
    hoverable = false,
    blurOnScroll = false,
    scrolled = false,
    className,
    children,
}: GlassCardProps) {
    const reduceMotion = useReducedMotionPreference();
    const componentMap = {
        div: motion.div,
        section: motion.section,
        article: motion.article,
        nav: motion.nav,
    };
    const Component = componentMap[as];

    return (
        <Component
            whileHover={
                hoverable && !reduceMotion
                    ? { y: -3 }
                    : undefined
            }
            transition={{ duration: 0.18, ease: 'easeOut' }}
            data-scrolled={scrolled}
            className={cn(
                'rounded-xl border border-black/5 bg-white/60 shadow-lg shadow-black/5 backdrop-blur-xl',
                'supports-[backdrop-filter]:bg-white/55',
                'dark:border-white/10 dark:bg-white/5 dark:shadow-black/30',
                'supports-[backdrop-filter]:dark:bg-white/5',
                blurOnScroll && 'data-[scrolled=true]:backdrop-blur-2xl',
                className,
            )}
        >
            {children}
        </Component>
    );
}
