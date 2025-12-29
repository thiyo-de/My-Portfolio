import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface ProtectedImageProps extends React.CanvasHTMLAttributes<HTMLCanvasElement> {
    src: string;
    alt?: string;
}

const ProtectedImage = ({ src, alt, className, ...props }: ProtectedImageProps) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const img = new Image();
        img.src = src;
        img.crossOrigin = "anonymous"; // Handle CORS if needed

        img.onload = () => {
            // Set canvas dimensions to match image or parent
            canvas.width = img.naturalWidth;
            canvas.height = img.naturalHeight;

            // Draw image
            ctx.drawImage(img, 0, 0);
            setIsLoaded(true);
        };
    }, [src]);

    return (
        <canvas
            ref={canvasRef}
            className={cn(
                "pointer-events-none select-none", // CSS protection
                !isLoaded && "opacity-0",
                className
            )}
            title={alt} // Layout accessibility
            role="img"
            aria-label={alt}
            {...props}
        />
    );
};

export default ProtectedImage;
