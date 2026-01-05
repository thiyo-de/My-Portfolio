import { Dialog, DialogContent, DialogTrigger, DialogClose, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Download, X, ZoomIn, ZoomOut, Loader2 } from "lucide-react";
import { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

// Configure PDF worker using CDN for better stability
pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

interface ResumePreviewProps {
    isOpen: boolean;
    onOpenChange: (open: boolean) => void;
    resumeUrl: string;
    fileName?: string;
}

const ResumePreview = ({
    isOpen,
    onOpenChange,
    resumeUrl,
    fileName = "Thiyoplus_F_Resume.pdf"
}: ResumePreviewProps) => {
    const [numPages, setNumPages] = useState<number>(0);
    const [pageNumber, setPageNumber] = useState<number>(1);
    const [scale, setScale] = useState<number>(1.0);
    const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Responsive scale adjustment
    useEffect(() => {
        if (windowWidth < 640) {
            setScale(0.6);
        } else if (windowWidth < 1024) {
            setScale(0.85);
        } else {
            setScale(1.1);
        }
    }, [windowWidth]);

    function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
        setNumPages(numPages);
        setPageNumber(1);
    }

    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = resumeUrl;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const changePage = (offset: number) => {
        setPageNumber((prevPageNumber) => prevPageNumber + offset);
    };

    const previousPage = () => changePage(-1);
    const nextPage = () => changePage(1);

    const zoomIn = () => setScale(scale + 0.1);
    const zoomOut = () => setScale(Math.max(0.5, scale - 0.1));

    return (
        <Dialog open={isOpen} onOpenChange={onOpenChange}>
            <DialogContent className="w-[95vw] max-w-6xl h-[90vh] p-0 overflow-hidden flex flex-col bg-zinc-950 border-zinc-800 rounded-xl sm:rounded-2xl [&>button]:hidden">
                <div className="sr-only">
                    <DialogTitle>Resume Preview</DialogTitle>
                    <DialogDescription>Preview of the resume details</DialogDescription>
                </div>

                {/* Header Toolbar */}
                <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
                    <div className="flex items-center gap-4">
                        <h2 className="font-clash text-lg hidden sm:block">
                            <span className="text-green-500">Resume</span> <span className="text-white">Preview</span>
                        </h2>
                        <div className="flex items-center gap-1 bg-zinc-800/50 rounded-md p-1 border border-zinc-700/50">
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={zoomOut}
                                disabled={scale <= 0.5}
                                className="h-7 w-7 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-700/50"
                            >
                                <ZoomOut className="h-4 w-4" />
                            </Button>
                            <span className="text-xs w-10 text-center text-zinc-400 font-mono">{Math.round(scale * 100)}%</span>
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={zoomIn}
                                disabled={scale >= 2.0}
                                className="h-7 w-7 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-700/50"
                            >
                                <ZoomIn className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <Button
                            onClick={handleDownload}
                            size="sm"
                            className="gap-2 bg-green-600 hover:bg-green-500 text-white border-none font-medium text-xs sm:text-sm px-4"
                        >
                            <Download className="h-4 w-4" />
                            <span className="hidden sm:inline">Download PDF</span>
                        </Button>
                        <div className="h-6 w-px bg-zinc-800 mx-1" />
                        <DialogClose asChild>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8 rounded-full bg-zinc-800/50 hover:bg-zinc-700 text-zinc-400 hover:text-white transition-colors"
                                aria-label="Close Preview"
                            >
                                <X className="h-4 w-4" />
                            </Button>
                        </DialogClose>
                    </div>
                </div>

                {/* PDF Viewer Content */}
                <div className="flex-1 overflow-auto bg-zinc-950/50 flex flex-col items-center p-4 sm:p-8 custom-scrollbar relative">
                    <Document
                        file={resumeUrl}
                        onLoadSuccess={onDocumentLoadSuccess}
                        onLoadError={(error) => console.error("PDF Load Error:", error)}
                        loading={
                            <div className="flex flex-col items-center justify-center py-20 gap-3">
                                <Loader2 className="h-8 w-8 animate-spin text-green-500" />
                                <p className="text-zinc-500 text-sm">Loading resume...</p>
                            </div>
                        }
                        error={
                            <div className="flex flex-col items-center justify-center py-20 gap-4 p-4 text-center">
                                <div className="bg-red-500/10 p-4 rounded-full">
                                    <Download className="h-8 w-8 text-red-500" />
                                </div>
                                <div className="space-y-2">
                                    <p className="text-zinc-200 font-medium">Unable to load preview</p>
                                    <p className="text-zinc-500 text-sm max-w-xs mx-auto">
                                        Please download the PDF directly to view it.
                                    </p>
                                </div>
                                <Button onClick={handleDownload} variant="outline" className="mt-2 border-zinc-700 text-zinc-300 hover:text-zinc-100 hover:bg-zinc-800">
                                    Download File
                                </Button>
                            </div>
                        }
                        className="shadow-2xl shadow-black/50 my-auto"
                    >
                        <Page
                            pageNumber={pageNumber}
                            scale={scale}
                            renderTextLayer={true}
                            renderAnnotationLayer={true}
                            className="bg-white shadow-xl rounded-sm overflow-hidden border border-zinc-200/10"
                            loading=""
                        />
                    </Document>
                </div>

                {/* Footer Navigation */}
                {numPages > 1 && (
                    <div className="flex items-center justify-center gap-4 p-3 border-t border-zinc-800 bg-zinc-900/50 backdrop-blur-sm shadow-up">
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={previousPage}
                            disabled={pageNumber <= 1}
                            className="border-zinc-700 bg-transparent text-zinc-300 hover:text-zinc-100 hover:bg-zinc-800"
                        >
                            <ChevronLeft className="h-4 w-4 mr-1" />
                            Previous
                        </Button>
                        <p className="text-xs sm:text-sm text-zinc-400 font-mono">
                            {pageNumber} / {numPages}
                        </p>
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={nextPage}
                            disabled={pageNumber >= numPages}
                            className="border-zinc-700 bg-transparent text-zinc-300 hover:text-zinc-100 hover:bg-zinc-800"
                        >
                            Next
                            <ChevronRight className="h-4 w-4 ml-1" />
                        </Button>
                    </div>
                )}
            </DialogContent>
        </Dialog>
    );
};

export default ResumePreview;
