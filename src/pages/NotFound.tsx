import { Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Home, ArrowLeft, Search, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

// Type definitions for gtag
declare global {
  interface Window {
    gtag: (
      command: string,
      action: string,
      params?: {
        event_category?: string;
        event_label?: string;
        [key: string]: unknown;
      }
    ) => void;
  }
}

interface SuggestedRoute {
  path: string;
  label: string;
  description: string;
}

// Enhanced Animation variants with proper TypeScript types
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

// Fixed floating variants with proper easing
const floatingVariants = {
  animate: {
    y: [0, -20, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

// Fixed pulse variants with proper easing
const pulseVariants = {
  animate: {
    scale: [1, 1.05, 1],
    opacity: [0.7, 0.9, 0.7],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

// Fixed text glow variants with proper easing
const textGlowVariants = {
  initial: { 
    backgroundPosition: "0% 50%",
    opacity: 0.8 
  },
  animate: {
    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
    opacity: 1,
    transition: {
      backgroundPosition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut" as const,
      },
      opacity: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut" as const,
      },
    },
  },
};

const NotFound = () => {
  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      window.location.pathname
    );

    // Track 404 errors for analytics
    if (typeof window.gtag !== "undefined") {
      window.gtag("event", "404_error", {
        event_category: "Error",
        event_label: window.location.pathname,
      });
    }

    // Scroll to top when 404 page loads
    window.scrollTo(0, 0);
  }, []);

  // Scroll handler for links
  const handleLinkClick = () => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  };

  // Suggested popular routes based on common paths
  const suggestedRoutes: SuggestedRoute[] = [
    { path: "/", label: "Home", description: "Return to homepage" },
    { path: "/about-Page", label: "About", description: "Learn about us" },
    {
      path: "/services-Page",
      label: "Services",
      description: "View our services",
    },
    { path: "/work-Page", label: "Work", description: "See our portfolio" },
    {
      path: "/skills-Page",
      label: "Skills",
      description: "Explore our expertise",
    },
    {
      path: "/contact-Page",
      label: "Contact",
      description: "Get in touch with us",
    },
  ];

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-background via-background/95 to-primary/5 relative overflow-hidden px-4 pb-10">

{/* Enhanced Background with Center Radial Fade */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Texture Layer */}
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,0.08)_25%,rgba(68,68,68,0.08)_50%,transparent_50%,transparent_75%,rgba(68,68,68,0.08)_75%)] bg-[length:7px_7px] opacity-100" />

        {/* Radial Fade Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(12,14,18,0.9)_85%,rgba(12,14,18,1)_100%)] pointer-events-none" />
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating shapes with enhanced animations */}
        <motion.div
          className="absolute top-20 left-10 w-48 h-48 bg-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />

        {/* Additional floating elements - using direct animate props instead of variants */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl"
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/3 w-24 h-24 bg-purple-500/5 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.7, 0.9, 0.7],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Grid pattern with animation */}
        <motion.div
          className="absolute inset-0 bg-[linear-gradient(rgba(120,119,198,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(120,119,198,0.02)_1px,transparent_1px)] bg-[size:70px_70px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black,transparent)]"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div className="container mx-auto relative z-10 pt-20">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="max-w-4xl mx-auto text-center space-y-8"
        >
          {/* Enhanced Header Design */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8,
              ease: "easeOut"
            }}
          >
            <motion.span 
              className="font-grotesk text-xs tracking-[0.3em] text-muted-foreground uppercase block"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Page Not Found
            </motion.span>
            <motion.h2 
              className="font-clash font-extrabold text-4xl sm:text-5xl md:text-7xl mt-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Lost in the
              <br />
              <motion.span 
                className="bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent bg-[length:200%_auto]"
                initial="initial"
                animate="animate"
                variants={textGlowVariants}
              >
                Digital Void
              </motion.span>
            </motion.h2>
          </motion.div>

          {/* Enhanced Animated 404 Number */}
          <motion.div
            className="relative inline-block"
            initial={{ scale: 0.5, opacity: 0, rotate: -10 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 15,
              delay: 0.2,
            }}
            whileHover={{ scale: 1.05 }}
          >
            <motion.h1 
              className="font-grotesk font-black text-7xl sm:text-8xl lg:text-9xl bg-gradient-to-br from-foreground via-muted-foreground to-foreground bg-clip-text text-transparent leading-none"
              animate={{
                textShadow: [
                  "0 0 20px rgba(255,255,255,0.1)",
                  "0 0 30px rgba(255,255,255,0.2)",
                  "0 0 20px rgba(255,255,255,0.1)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              404
            </motion.h1>

            {/* Enhanced Floating Icon */}
            <motion.div
              className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4"
              animate={{
                y: [0, -15, 0],
                rotate: [0, 10, -5, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{
                rotate: 360,
                transition: { duration: 0.6 },
              }}
            >
              <motion.div 
                className="p-2 sm:p-3 bg-destructive rounded-2xl shadow-lg border border-destructive/50"
                whileHover={{ scale: 1.1 }}
              >
                <AlertCircle className="w-6 h-6 sm:w-8 sm:h-8 text-destructive-foreground" />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Enhanced Current Path Display */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 bg-muted/80 rounded-full border border-border backdrop-blur-sm"
              whileHover={{ 
                scale: 1.02,
                backgroundColor: "rgba(255,255,255,0.1)",
              }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              >
                <Search className="w-4 h-4 text-muted-foreground" />
              </motion.div>
              <motion.code 
                className="font-mono text-sm text-foreground bg-secondary/50 px-3 py-1 rounded-md"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
              >
                {window.location.pathname}
              </motion.code>
              <motion.span 
                className="text-xs text-muted-foreground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.7 }}
              >
                not found
              </motion.span>
            </motion.div>
          </motion.div>

          {/* Enhanced Action Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <motion.div 
              whileHover={{ scale: 1.05, y: -2 }} 
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
            >
              <Button
                asChild
                size="lg"
                className="rounded-2xl px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg font-grotesk font-medium bg-primary hover:bg-primary/90 shadow-lg shadow-primary/25 group transition-all duration-300 relative overflow-hidden"
              >
                <Link to="/" onClick={handleLinkClick}>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                  <Home className="mr-2 sm:mr-3 w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform duration-300 relative z-10" />
                  <span className="relative z-10">Return Home</span>
                </Link>
              </Button>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.05, y: -2 }} 
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9 }}
            >
              <Button
                variant="outline"
                size="lg"
                className="rounded-2xl px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg font-grotesk font-medium border-2 border-border hover:border-primary/50 transition-all duration-300 relative overflow-hidden"
                onClick={() => {
                  window.history.back();
                  setTimeout(() => {
                    window.scrollTo(0, 0);
                  }, 100);
                }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
                <ArrowLeft className="mr-2 sm:mr-3 w-4 h-4 sm:w-5 sm:h-5 relative z-10" />
                <span className="relative z-10">Go Back</span>
              </Button>
            </motion.div>
          </motion.div>

          {/* Enhanced Suggested Routes */}
          <motion.div
            className="bg-card/70 backdrop-blur-sm rounded-3xl border border-border/50 shadow-strong p-6 sm:p-8 mt-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <motion.h3 
              className="font-clash font-semibold text-xl sm:text-2xl mb-6 text-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
            >
              Popular Destinations
            </motion.h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              {suggestedRoutes.map((route, index) => (
                <motion.div
                  key={route.path}
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ 
                    delay: 1.2 + index * 0.1,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ 
                    y: -8, 
                    scale: 1.03,
                    transition: { type: "spring", stiffness: 400 }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Card className="bg-card/80 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-300 group cursor-pointer h-full hover:shadow-medium overflow-hidden">
                    <CardContent className="p-4 sm:p-5 text-center relative">
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100"
                        transition={{ duration: 0.3 }}
                      />
                      <Link
                        to={route.path}
                        onClick={handleLinkClick}
                        className="block space-y-2 group-hover:text-foreground transition-colors duration-300 relative z-10"
                      >
                        <motion.div 
                          className="font-grotesk font-medium text-foreground group-hover:text-primary transition-colors duration-300 text-sm sm:text-base"
                          whileHover={{ x: 5 }}
                        >
                          {route.label}
                        </motion.div>
                        <motion.div 
                          className="font-satoshi text-xs sm:text-sm text-muted-foreground group-hover:text-muted-foreground/80 leading-tight"
                          whileHover={{ x: 2 }}
                        >
                          {route.description}
                        </motion.div>
                      </Link>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Enhanced Help Text */}
          <motion.div 
            className="pt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <motion.p 
              className="font-grotesk text-sm text-muted-foreground"
              whileHover={{ scale: 1.02 }}
            >
              Still lost?{" "}
              <motion.a
                href="mailto:support@example.com"
                className="hover:text-primary underline underline-offset-2 transition-colors duration-300"
                whileHover={{ 
                  scale: 1.05,
                  textShadow: "0 0 8px rgba(255,255,255,0.3)"
                }}
              >
                Contact our support team
              </motion.a>{" "}
              for assistance.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;