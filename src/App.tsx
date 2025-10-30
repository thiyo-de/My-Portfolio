import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Index from "./pages/Index";
import AboutPage from "./pages/About";
import About_Page from "./pages/About-Page";
import ServicesPage from "./pages/Services";
import Services_Page from "./pages/Services-Page";
import WorkPage from "./pages/Work";
import Work_Page from "./pages/Work-Page";
import ProjectDetail from "./pages/ProjectDetails";
import SkillsPage from "./pages/Skills";
import Skills_Page from "./pages/Skills-Page";
import ContactPage from "./pages/Contact";
import Contact_Page from "./pages/Contact-Page";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/about-Page" element={<About_Page />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services-Page" element={<Services_Page />} />
        <Route path="/work" element={<WorkPage />} />
         <Route path="/work-Page" element={<Work_Page />} />
         <Route path="/portfolio/:slug" element={<ProjectDetail />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/skills-Page" element={<Skills_Page />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/contact-Page" element={<Contact_Page />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
