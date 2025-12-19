import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ImageViewerProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  alt: string;
}

const ImageViewer = ({ isOpen, onClose, imageSrc, alt }: ImageViewerProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background/90 backdrop-blur-md p-4 sm:p-8"
          onClick={onClose}
        >
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 text-muted-foreground hover:text-foreground z -[110]"
            onClick={onClose}
          >
            <X className="w-8 h-8" />
          </Button>

          <motion.img
            src={imageSrc}
            alt={alt}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="max-w-full max-h-full rounded-lg shadow-2xl object-contain cursor-zoom-out"
            onClick={(e) => e.stopPropagation()} // Prevent clicking image from closing
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ImageViewer;
