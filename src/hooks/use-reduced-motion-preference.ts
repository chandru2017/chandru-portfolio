'use client';

import { useSyncExternalStore } from 'react';

const reducedMotionQuery = '(prefers-reduced-motion: reduce)';

function subscribeToHydration() {
    return () => undefined;
}

function getHydrationSnapshot() {
    return true;
}

function getServerHydrationSnapshot() {
    return false;
}

function subscribe(onChange: () => void) {
    const mediaQuery = window.matchMedia(reducedMotionQuery);
    mediaQuery.addEventListener('change', onChange);

    return () => mediaQuery.removeEventListener('change', onChange);
}

function getSnapshot() {
    return window.matchMedia(reducedMotionQuery).matches;
}

function getServerSnapshot() {
    return false;
}

/**
 * Reads the reduced-motion preference with a deterministic server snapshot.
 */
export function useReducedMotionPreference() {
    return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

/**
 * Returns true after the initial server-rendered snapshot has hydrated.
 */
export function useIsHydrated() {
    return useSyncExternalStore(
        subscribeToHydration,
        getHydrationSnapshot,
        getServerHydrationSnapshot,
    );
}
