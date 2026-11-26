'use client';

import { Fragment, type ReactNode } from 'react';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';
import {
    useIsHydrated,
    useReducedMotionPreference,
} from '@/hooks/use-reduced-motion-preference';

/** Text segmentation strategy for a masked reveal. */
export type TextRevealMode = 'word' | 'line';

/** Semantic elements supported by the text reveal. */
export type TextRevealElement = 'p' | 'h1' | 'h2' | 'h3' | 'div';

/** Props for an accessible masked text reveal. */
export interface TextRevealProps {
    /** Text content; use newlines to set explicit lines in `line` mode. */
    text: string;
    /** Reveal by word or by explicit newline-delimited line. */
    mode?: TextRevealMode;
    /** Element used to preserve the intended document semantics. */
    as?: TextRevealElement;
    /** Seconds between each word or line. */
    staggerDelay?: number;
    /** Animation duration in seconds. */
    duration?: number;
    /** Delay before the reveal begins, in seconds. */
    delay?: number;
    /** Classes applied to the semantic text element. */
    className?: string;
}

/**
 * Reveals words or explicit lines through a clipped vertical mask.
 */
export function TextReveal({
    text,
    mode = 'word',
    as = 'p',
    staggerDelay = 0.045,
    duration = 0.45,
    delay = 0,
    className,
}: TextRevealProps) {
    const reduceMotion = useReducedMotionPreference();
    const motionEnabled = useIsHydrated() && !reduceMotion;
    const Tag = as;
    const normalizedText = text.replace(/\s+/g, ' ').trim();
    const enter = (index: number, children: ReactNode) => (
        <span
            key={index}
            aria-hidden="true"
            className="block overflow-hidden"
        >
            <motion.span
                initial={motionEnabled ? { opacity: 0, y: '110%' } : false}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: motionEnabled ? duration : 0,
                    delay: motionEnabled ? delay + index * staggerDelay : 0,
                }}
                className="block"
            >
                {children}
            </motion.span>
        </span>
    );

    return (
        <Tag
            key={motionEnabled ? 'animated' : 'static'}
            className={cn(className)}
            aria-label={normalizedText}
        >
            {mode === 'line'
                ? text.split('\n').map((line, index) => enter(index, line))
                : text
                      .trim()
                      .split(/\s+/)
                      .map((word, index, words) => (
                          <Fragment key={index}>
                              <span
                                  aria-hidden="true"
                                  className="inline-block overflow-hidden align-bottom"
                              >
                                  <motion.span
                                      initial={motionEnabled ? { opacity: 0, y: '110%' } : false}
                                      animate={{ opacity: 1, y: 0 }}
                                      transition={{
                                          duration: motionEnabled ? duration : 0,
                                          delay: motionEnabled ? delay + index * staggerDelay : 0,
                                      }}
                                      className="inline-block"
                                  >
                                      {word}
                                  </motion.span>
                              </span>
                              {index < words.length - 1 ? ' ' : null}
                          </Fragment>
                      ))}
        </Tag>
    );
}
