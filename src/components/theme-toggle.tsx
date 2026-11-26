'use client';

import { Moon, Sun } from 'lucide-react';
import { motion } from 'motion/react';
import { useTheme } from 'next-themes';
import { useSyncExternalStore } from 'react';
import { useReducedMotionPreference } from '@/hooks/use-reduced-motion-preference';

/**
 * Accessible animated theme control.
 */
export function ThemeToggle() {
    const { resolvedTheme, setTheme } = useTheme();
    const reduceMotion = useReducedMotionPreference();
    const mounted = useSyncExternalStore(
        () => () => undefined,
        () => true,
        () => false,
    );

    const isDark = resolvedTheme === 'dark';
    const nextTheme = isDark ? 'light' : 'dark';

    if (!mounted) {
        return <span aria-hidden="true" className="size-9 rounded-full border border-border" />;
    }

    return (
        <button
            type="button"
            onClick={() => setTheme(nextTheme)}
            aria-label={`Switch to ${nextTheme} theme`}
            className="relative grid size-9 place-items-center overflow-hidden rounded-full border border-border bg-card text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
        >
            <motion.span
                key={isDark ? 'moon' : 'sun'}
                initial={reduceMotion ? false : { opacity: 0, rotate: -45, scale: 0.75 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                transition={{ duration: 0.18 }}
                className="absolute"
            >
                {isDark ? <Moon className="size-4" /> : <Sun className="size-4" />}
            </motion.span>
        </button>
    );
}
