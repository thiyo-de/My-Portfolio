import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Suspense, useEffect } from "react";

import MainLayout from "@/layouts/MainLayout";

// Lazy load pages
const Index = React.lazy(() => import("@/pages/Index"));
const About_Page = React.lazy(() => import("@/pages/About-Page"));
const Services_Page = React.lazy(() => import("@/pages/Services-Page"));
const Work_Page = React.lazy(() => import("@/pages/Work-Page"));
const Skills_Page = React.lazy(() => import("@/pages/Skills-Page"));
const Contact_Page = React.lazy(() => import("@/pages/Contact-Page"));
const ProjectDetail = React.lazy(() => import("@/pages/Slugs/ProjectDetails"));
const NotFound = React.lazy(() => import("@/pages/NotFound"));
const ThankYou = React.lazy(() => import("@/pages/ThankYou"));

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    // Disable right-click
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    // Disable keyboard shortcuts (F12, Ctrl+U, Ctrl+S, Ctrl+P, Ctrl+C, etc.)
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.key === "F12" ||
        (e.ctrlKey && e.shiftKey && e.key === "I") ||
        (e.ctrlKey && e.shiftKey && e.key === "J") ||
        (e.ctrlKey && e.key === "U") ||
        (e.ctrlKey && e.key === "S") ||
        (e.ctrlKey && e.key === "H") ||
        (e.ctrlKey && e.key === "A") ||
        (e.ctrlKey && e.key === "P") ||
        (e.ctrlKey && e.key === "C") // Copy
      ) {
        e.preventDefault();
      }
    };

    // Disable drag start events globally (extra layer)
    const handleDragStart = (e: DragEvent) => {
      e.preventDefault();
    };

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("dragstart", handleDragStart);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("dragstart", handleDragStart);
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* All routes using shared layout */}
            <Route element={<MainLayout />}>
              <Route path="/" element={<Index />} />
              <Route path="/about-Page" element={<About_Page />} />
              <Route path="/services-Page" element={<Services_Page />} />
              <Route path="/work-Page" element={<Work_Page />} />
              <Route path="/skills-Page" element={<Skills_Page />} />
              <Route path="/contact-Page" element={<Contact_Page />} />
              <Route path="/portfolio/:slug" element={<ProjectDetail />} />
            </Route>

            {/* Catch-all for undefined routes */}
            <Route path="/thank-you" element={<ThankYou />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
