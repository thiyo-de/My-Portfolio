import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("/");
  const location = useLocation();
  const navigate = useNavigate();

  // Throttled scroll handler for better performance
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Set active link based on current pathname
  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = (path = "/") => {
    setActiveLink(path);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "auto" });
    navigate(path);
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about-Page" },
    { name: "Services", path: "/services-Page" },
    { name: "Work", path: "/work-Page" },
    { name: "Skills", path: "/skills-Page" },
    { name: "Contact", path: "/contact-Page" },
  ];

  const isActiveLink = (path) => {
    return activeLink === path;
  };

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "backdrop-blur-xl bg-background/80 border-b border-border shadow-sm"
            : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-shrink-0"
            >
              <button
                onClick={() => handleNavClick("/")}
                className="font-clash font-bold text-xl md:text-2xl hover:text-primary transition-colors duration-200 whitespace-nowrap"
              >
                Thiyoplus F
              </button>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-4 mx-4 lg:mx-8">
              {navLinks.map((link) => (
                <motion.div
                  key={link.path}
                  className="relative flex-shrink-0"
                  whileHover={{ y: -1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <button
                    onClick={() => handleNavClick(link.path)}
                    className={`font-grotesk text-sm lg:text-base transition-colors duration-200 px-3 py-2 relative whitespace-nowrap ${
                      isActiveLink(link.path)
                        ? "text-foreground font-semibold"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {link.name}

                    {/* Smooth Active Line Indicator */}
                    {isActiveLink(link.path) && (
                      <motion.div
                        className="absolute -bottom-0.5 left-2 right-2 h-0.5 bg-primary rounded-full"
                        layoutId="activeLine"
                        transition={{
                          type: "spring",
                          stiffness: 500,
                          damping: 35,
                          duration: 0.3,
                        }}
                      />
                    )}
                  </button>

                  {/* Hover Line Effect */}
                  {!isActiveLink(link.path) && (
                    <motion.div
                      className="absolute -bottom-0.5 left-2 right-2 h-0.5 bg-primary/30 rounded-full scale-x-0"
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.2 }}
                      style={{ originX: 0 }}
                    />
                  )}
                </motion.div>
              ))}
            </div>

            {/* Desktop CTA Button */}
            <div className="hidden md:flex items-center flex-shrink-0 ml-2">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <button
                  onClick={() => handleNavClick("/contact-Page")}
                >
                  <Button
                    size="sm"
                    className={`font-grotesk transition-all duration-200 whitespace-nowrap ${
                      isActiveLink("/contact-Page")
                        ? "bg-primary/90 shadow-md ring-2 ring-primary/20"
                        : "bg-primary hover:bg-primary/90 shadow-sm"
                    }`}
                  >
                    Let's Talk
                  </Button>
                </button>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden p-2 rounded-lg bg-background/50 backdrop-blur-sm border border-border/50 flex-shrink-0"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileHover={{ scale: 1.05, backgroundColor: "rgba(0,0,0,0.1)" }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X size={20} className="text-foreground" />
              ) : (
                <Menu size={20} className="text-foreground" />
              )}
            </motion.button>
          </div>
        </nav>
      </motion.header>

      {/* Enhanced Mobile Menu Box */}
      <AnimatePresence mode="wait">
        {isMobileMenuOpen && (
          <motion.div
            className="fixed top-16 right-5 z-50 md:hidden"
            initial={{ opacity: 0, scale: 0.9, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -20 }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
              type: "spring",
              stiffness: 300,
              damping: 25,
            }}
          >
            {/* Menu Box */}
            <div className="bg-background border border-border rounded-2xl shadow-2xl p-4 min-w-[280px] max-w-[320px]">
              {/* Menu Header */}
              <div className="flex items-center justify-center mb-4 pb-3 border-b border-border/30">
                <h3 className="font-grotesk font-semibold text-foreground text-lg">
                  Navigation
                </h3>
              </div>

              {/* Navigation Links */}
              <nav className="space-y-1 mb-4">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: index * 0.05,
                      duration: 0.2,
                    }}
                  >
                    <motion.div
                      className="relative"
                      whileHover={{ x: 4 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <button
                        onClick={() => handleNavClick(link.path)}
                        className={`flex items-center w-full px-4 py-3 rounded-xl transition-all duration-200 group ${
                          isActiveLink(link.path)
                            ? "bg-primary/10 text-primary font-semibold border border-primary/20"
                            : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                        }`}
                      >
                        <span className="font-grotesk text-base transition-all duration-200 flex-1 text-left">
                          {link.name}
                        </span>

                        {/* Active Indicator Dot */}
                        {isActiveLink(link.path) && (
                          <motion.div
                            className="w-2 h-2 bg-primary rounded-full ml-2"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{
                              type: "spring",
                              stiffness: 500,
                              damping: 25,
                            }}
                          />
                        )}

                        {/* Hover Arrow */}
                        {!isActiveLink(link.path) && (
                          <motion.div
                            className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 ml-2"
                            initial={{ x: -4 }}
                            whileHover={{ x: 0 }}
                          >
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                            >
                              <path d="m9 18 6-6-6-6" />
                            </svg>
                          </motion.div>
                        )}
                      </button>
                    </motion.div>
                  </motion.div>
                ))}
              </nav>

              {/* CTA Section */}
              <motion.div
                className="pt-3 border-t border-border/30"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <button
                    onClick={() => handleNavClick("/contact-Page")}
                    className="block w-full"
                  >
                    <Button
                      size="lg"
                      className={`w-full font-grotesk text-base transition-all duration-200 ${
                        isActiveLink("/contact-Page")
                          ? "bg-primary/90 shadow-lg ring-2 ring-primary/30"
                          : "bg-primary hover:bg-primary/90 shadow-md"
                      }`}
                    >
                      Let's Talk
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="ml-2"
                      >
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                    </Button>
                  </button>
                </motion.div>

                {/* Contact Info */}
                <motion.div
                  className="mt-4 text-center text-sm text-muted-foreground"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <p className="font-grotesk">Available for new projects</p>
                </motion.div>
              </motion.div>
            </div>

            {/* Decorative Corner Accents */}
            <motion.div
              className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-primary/30 rounded-tl-lg"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            />
            <motion.div
              className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-primary/30 rounded-br-lg"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.25 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;