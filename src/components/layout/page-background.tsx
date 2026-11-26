'use client';

import { motion } from 'motion/react';
import { useReducedMotionPreference } from '@/hooks/use-reduced-motion-preference';

/**
 * Low-contrast animated backdrop used across light and dark themes.
 */
export function PageBackground() {
    const reduceMotion = useReducedMotionPreference();

    return (
        <div aria-hidden="true" className="fixed inset-0 -z-10 overflow-hidden">
            <motion.div
                animate={
                    reduceMotion
                        ? undefined
                        : { x: [0, 28, -12, 0], y: [0, -18, 12, 0] }
                }
                transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-52 left-[8%] size-[36rem] rounded-full bg-violet-500/12 blur-3xl dark:bg-violet-500/10"
            />
            <motion.div
                animate={
                    reduceMotion
                        ? undefined
                        : { x: [0, -22, 16, 0], y: [0, 20, -10, 0] }
                }
                transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute right-[-12rem] bottom-[-10rem] size-[32rem] rounded-full bg-indigo-400/10 blur-3xl dark:bg-indigo-400/8"
            />
        </div>
    );
}
