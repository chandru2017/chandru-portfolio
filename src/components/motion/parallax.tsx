'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import { useRef, type ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { useReducedMotionPreference } from '@/hooks/use-reduced-motion-preference';

/** Axis along which a parallax element moves. */
export type ParallaxAxis = 'x' | 'y';

/** Props for a scroll-linked parallax element. */
export interface ParallaxProps {
    /** Content to move with the scroll position. */
    children: ReactNode;
    /** Movement axis; defaults to `y`. */
    axis?: ParallaxAxis;
    /** Maximum translation in pixels; defaults to `24`. */
    distance?: number;
    /** Classes for the motion wrapper. */
    className?: string;
}

/**
 * Applies a subtle transform as the element travels through the viewport.
 */
export function Parallax({
    children,
    axis = 'y',
    distance = 24,
    className,
}: ParallaxProps) {
    const ref = useRef<HTMLDivElement>(null);
    const reduceMotion = useReducedMotionPreference();
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end start'],
    });
    const x = useTransform(
        scrollYProgress,
        [0, 1],
        [reduceMotion ? 0 : -distance, reduceMotion ? 0 : distance],
    );
    const y = useTransform(
        scrollYProgress,
        [0, 1],
        [reduceMotion ? 0 : -distance, reduceMotion ? 0 : distance],
    );

    return (
        <motion.div
            ref={ref}
            style={{ x: axis === 'x' ? x : undefined, y: axis === 'y' ? y : undefined }}
            className={cn(className)}
        >
            {children}
        </motion.div>
    );
}
