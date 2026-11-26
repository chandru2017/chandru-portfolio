'use client';

import Lenis from 'lenis';
import { useEffect, type ReactNode } from 'react';
import { useReducedMotionPreference } from '@/hooks/use-reduced-motion-preference';

/** Props for the optional Lenis smooth-scroll provider. */
export interface SmoothScrollProviderProps {
    /** Application subtree to render without adding a DOM wrapper. */
    children: ReactNode;
}

/**
 * Enables Lenis smooth scrolling unless the user prefers reduced motion.
 */
export function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
    const reduceMotion = useReducedMotionPreference();

    useEffect(() => {
        if (
            reduceMotion ||
            window.matchMedia('(prefers-reduced-motion: reduce)').matches
        ) {
            return;
        }

        const lenis = new Lenis({ autoRaf: true });

        return () => lenis.destroy();
    }, [reduceMotion]);

    return <>{children}</>;
}
