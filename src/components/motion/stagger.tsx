'use client';

import { Children, isValidElement, useRef, type ReactNode } from 'react';
import { motion, useInView } from 'motion/react';
import { cn } from '@/lib/utils';
import {
    useIsHydrated,
    useReducedMotionPreference,
} from '@/hooks/use-reduced-motion-preference';

/** Props for a group whose children reveal in sequence. */
export interface StaggerProps {
    /** Items to reveal. Each item is placed in its own animated wrapper. */
    children: ReactNode;
    /** Delay between each child, in seconds; defaults to `0.08`. */
    staggerDelay?: number;
    /** Delay before the first child, in seconds. */
    delay?: number;
    /** Vertical entry distance in pixels; defaults to `16`. */
    distance?: number;
    /** Animation duration in seconds; defaults to `0.4`. */
    duration?: number;
    /** Reveal only the first time the group enters view. */
    once?: boolean;
    /** Classes for the group wrapper. */
    className?: string;
    /** Classes for each item wrapper. */
    itemClassName?: string;
}

/**
 * Reveals each child in order as the group enters the viewport.
 */
export function Stagger({
    children,
    staggerDelay = 0.08,
    delay = 0,
    distance = 16,
    duration = 0.4,
    once = true,
    className,
    itemClassName,
}: StaggerProps) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once, amount: 0.1 });
    const reduceMotion = useReducedMotionPreference();
    const motionEnabled = useIsHydrated() && !reduceMotion;

    return (
        <div ref={ref} className={cn(className)}>
            {Children.map(children, (child, index) => {
                const hidden = { opacity: 0, y: distance };
                const visible = { opacity: 1, y: 0 };
                const childKey = isValidElement(child) ? child.key ?? index : index;

                return (
                    <motion.div
                        key={`${motionEnabled ? 'animated' : 'static'}-${childKey}`}
                        initial={motionEnabled ? hidden : false}
                        animate={motionEnabled && !isInView ? hidden : visible}
                        transition={{
                            duration: motionEnabled ? duration : 0,
                            delay: motionEnabled ? delay + index * staggerDelay : 0,
                        }}
                        className={cn(itemClassName)}
                    >
                        {child}
                    </motion.div>
                );
            })}
        </div>
    );
}
