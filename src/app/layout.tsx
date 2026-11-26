import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { PageBackground } from '@/components/layout/page-background';
import { Footer } from '@/components/layout/footer';
import { MobileScheduleButton } from '@/components/layout/mobile-schedule-button';
import { Navbar } from '@/components/layout/navbar';
import { SkipToContent } from '@/components/layout/skip-to-content';
import { SmoothScrollProvider } from '@/components/motion/smooth-scroll-provider';
import { Providers } from '@/store/providers';

const geistSans = Geist({
    variable: '--font-sans',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'Chandrasekaran A | Senior Frontend Engineer',
    description:
        'Portfolio of Chandrasekaran A, Senior Frontend Engineer and Frontend Lead.',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
    return (
        <html
            lang="en"
            suppressHydrationWarning
            className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
        >
            <body className="flex min-h-full flex-col">
                <Providers>
                    <ThemeProvider>
                        <SmoothScrollProvider>
                            <PageBackground />
                            <SkipToContent />
                            <Navbar />
                            <div className="flex-1 pb-20 md:pb-0">{children}</div>
                            <Footer />
                            <MobileScheduleButton />
                        </SmoothScrollProvider>
                    </ThemeProvider>
                </Providers>
            </body>
        </html>
    );
}
