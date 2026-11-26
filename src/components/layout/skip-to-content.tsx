export function SkipToContent() {
    return (
        <a
            href="#main-content"
            className="fixed top-3 left-3 z-[100] -translate-y-20 rounded-lg bg-primary px-4 py-3 font-medium text-primary-foreground shadow-lg transition-transform focus:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
        >
            Skip to content
        </a>
    );
}
