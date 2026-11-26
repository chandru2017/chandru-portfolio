'use client';

import {
    motion,
    useMotionValue,
    useSpring,
} from 'motion/react';
import { useRef, type PointerEvent, type ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { useReducedMotionPreference } from '@/hooks/use-reduced-motion-preference';

/** Props for an element that follows nearby mouse movement. */
export interface MagneticProps {
    /** Content inside the magnetic target. */
    children: ReactNode;
    /** Movement ratio relative to the pointer position; defaults to `0.18`. */
    strength?: number;
    /** Maximum translation on either axis in pixels; defaults to `12`. */
    maxDistance?: number;
    /** Classes for the target. */
    className?: string;
}

/**
 * Adds a restrained pointer-following transform; touch and reduced motion stay static.
 */
export function Magnetic({
    children,
    strength = 0.18,
    maxDistance = 12,
    className,
}: MagneticProps) {
    const ref = useRef<HTMLDivElement>(null);
    const reduceMotion = useReducedMotionPreference();
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const springX = useSpring(x, { stiffness: 180, damping: 18 });
    const springY = useSpring(y, { stiffness: 180, damping: 18 });

    const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
        if (reduceMotion || event.pointerType !== 'mouse') return;

        const bounds = ref.current?.getBoundingClientRect();
        if (!bounds) return;

        x.set(
            Math.max(
                -maxDistance,
                Math.min(maxDistance, (event.clientX - bounds.left - bounds.width / 2) * strength),
            ),
        );
        y.set(
            Math.max(
                -maxDistance,
                Math.min(maxDistance, (event.clientY - bounds.top - bounds.height / 2) * strength),
            ),
        );
    };

    const resetPosition = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            style={{ x: springX, y: springY }}
            onPointerMove={handlePointerMove}
            onPointerLeave={resetPosition}
            className={cn(className)}
        >
            {children}
        </motion.div>
    );
}
