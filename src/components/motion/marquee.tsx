'use client';

import {
    motion,
    useAnimationFrame,
    useMotionValue,
} from 'motion/react';
import { useEffect, useRef, useState, type ReactNode } from 'react';
import { cn } from '@/lib/utils';
import {
    useIsHydrated,
    useReducedMotionPreference,
} from '@/hooks/use-reduced-motion-preference';

/** Direction in which the marquee travels. */
export type MarqueeDirection = 'left' | 'right';

/** Props for an accessible, pausable marquee. */
export interface MarqueeProps {
    /** Content repeated in the moving track. */
    children: ReactNode;
    /** Accessible name; when provided, the marquee is announced as a group. */
    label?: string;
    /** Travel direction; defaults to `left`. */
    direction?: MarqueeDirection;
    /** Seconds per full traversal; defaults to `24`. */
    duration?: number;
    /** Classes for the marquee viewport. */
    className?: string;
}

/**
 * Loops its content, pauses on hover or keyboard focus, and becomes scrollable
 * instead of animated when reduced motion is requested.
 */
export function Marquee({
    children,
    label,
    direction = 'left',
    duration = 24,
    className,
}: MarqueeProps) {
    const reduceMotion = useReducedMotionPreference();
    const motionEnabled = useIsHydrated() && !reduceMotion;
    const [isHovered, setIsHovered] = useState(false);
    const [isFocused, setIsFocused] = useState(false);
    const isPaused = isHovered || isFocused;
    const contentRef = useRef<HTMLDivElement>(null);
    const contentWidth = useRef(0);
    const progress = useRef(direction === 'right' ? 1 : 0);
    const x = useMotionValue(0);

    useEffect(() => {
        const content = contentRef.current;
        if (!content) return;

        progress.current = direction === 'right' ? 1 : 0;
        const measureContent = () => {
            contentWidth.current = content.offsetWidth;
            x.set(
                !motionEnabled
                    ? 0
                    : direction === 'left'
                      ? -progress.current * contentWidth.current
                      : (progress.current - 1) * contentWidth.current,
            );
        };

        measureContent();
        const resizeObserver = new ResizeObserver(measureContent);
        resizeObserver.observe(content);

        return () => resizeObserver.disconnect();
    }, [direction, motionEnabled, x]);

    useAnimationFrame((_, delta) => {
        if (!motionEnabled || isPaused || contentWidth.current === 0) return;

        progress.current = (progress.current + delta / (duration * 1000)) % 1;
        x.set(
            direction === 'left'
                ? -progress.current * contentWidth.current
                : (progress.current - 1) * contentWidth.current,
        );
    });

    return (
        <div
            role={label ? 'group' : undefined}
            aria-label={label}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onFocus={() => setIsFocused(true)}
            onBlur={(event) => {
                const nextTarget = event.relatedTarget;
                if (!(nextTarget instanceof Node) || !event.currentTarget.contains(nextTarget)) {
                    setIsFocused(false);
                }
            }}
            className={cn(
                motionEnabled ? 'overflow-hidden' : 'overflow-x-auto',
                className,
            )}
        >
            <motion.div
                style={{ x }}
                className="flex w-max"
            >
                <div
                    ref={contentRef}
                    className="flex shrink-0 items-center gap-8 pr-8"
                >
                    {children}
                </div>
                {motionEnabled && (
                    <div
                        aria-hidden="true"
                        inert
                        className="flex shrink-0 items-center gap-8 pr-8"
                    >
                        {children}
                    </div>
                )}
            </motion.div>
        </div>
    );
}
