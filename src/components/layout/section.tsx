import type { ComponentProps, ReactNode } from 'react';
import { cn } from '@/lib/utils';

export interface SectionProps extends Omit<ComponentProps<'section'>, 'id'> {
    id: string;
    children: ReactNode;
}

export function Section({ id, children, className, ...props }: SectionProps) {
    return (
        <section
            id={id}
            data-section={id}
            className={cn('scroll-mt-28', className)}
            {...props}
        >
            {children}
        </section>
    );
}
