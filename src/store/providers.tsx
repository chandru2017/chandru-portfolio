'use client';

import { useState, type ReactNode } from 'react';
import { Provider } from 'react-redux';
import { makeStore, type AppStore } from './store';

export interface ProvidersProps {
    children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
    const [store] = useState<AppStore>(makeStore);

    return <Provider store={store}>{children}</Provider>;
}
