export const PageLoader = () => (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-background z-50">
        <div className="relative flex items-center justify-center">
            {/* Outer spinning ring */}
            <div className="h-12 w-12 animate-spin rounded-full border-2 border-primary/20 border-t-primary shadow-lg shadow-primary/10"></div>

            {/* Inner pulsing dot */}
            <div className="absolute h-2.5 w-2.5 rounded-full bg-primary animate-pulse"></div>
        </div>

        {/* Loading text with shimmer effect */}
        <div className="mt-4">
            <p className="text-xs font-grotesk font-medium tracking-[0.2em] text-muted-foreground animate-pulse uppercase">
                Loading
            </p>
        </div>
    </div>
);
