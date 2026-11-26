'use client';

import { motion, useInView } from 'motion/react';
import { useRef, type ReactNode } from 'react';
import { cn } from '@/lib/utils';
import {
    useIsHydrated,
    useReducedMotionPreference,
} from '@/hooks/use-reduced-motion-preference';

/** Directions from which a revealed element can enter. */
export type RevealDirection = 'up' | 'down' | 'left' | 'right';

/** Props for an element revealed once it enters the viewport. */
export interface RevealProps {
    /** Content to reveal. */
    children: ReactNode;
    /** Entry direction; defaults to `up`. */
    direction?: RevealDirection;
    /** Travel distance in pixels; defaults to `20`. */
    distance?: number;
    /** Animation duration in seconds; defaults to `0.5`. */
    duration?: number;
    /** Delay before the reveal in seconds. */
    delay?: number;
    /** Whether to reveal only the first time the element enters view. */
    once?: boolean;
    /** Additional classes for the wrapper. */
    className?: string;
}

const directionOffset: Record<RevealDirection, 'x' | 'y'> = {
    up: 'y',
    down: 'y',
    left: 'x',
    right: 'x',
};

/**
 * Fades and translates content into place when it enters the viewport.
 */
export function Reveal({
    children,
    direction = 'up',
    distance = 20,
    duration = 0.5,
    delay = 0,
    once = true,
    className,
}: RevealProps) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once, amount: 0.15 });
    const reduceMotion = useReducedMotionPreference();
    const motionEnabled = useIsHydrated() && !reduceMotion;
    const axis = directionOffset[direction];
    const signedDistance =
        direction === 'up' || direction === 'left' ? distance : -distance;
    const hidden = {
        opacity: 0,
        [axis]: signedDistance,
    };

    return (
        <motion.div
            key={motionEnabled ? 'animated' : 'static'}
            ref={ref}
            initial={motionEnabled ? hidden : false}
            animate={motionEnabled && !isInView ? hidden : { opacity: 1, x: 0, y: 0 }}
            transition={{ duration: motionEnabled ? duration : 0, delay }}
            className={cn(className)}
        >
            {children}
        </motion.div>
    );
}
