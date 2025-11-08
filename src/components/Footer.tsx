import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin, Mail, Github } from "lucide-react";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { useEffect } from "react";

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about-Page" },
    { name: "Services", path: "/services-Page" },
    { name: "Work", path: "/work-Page" },
    { name: "Skills", path: "/skills-Page" },
    { name: "Contact", path: "/contact-Page" },
  ];

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/thiyo-de",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/thiyoplus-f/",
      label: "LinkedIn",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/thiyo.de?igsh=MWN2OHI3d2ZjbTAzNQ==",
      label: "Instagram",
    },
    {
      icon: Mail,
      href: "mailto:Thiyo80203@gmail.com",
      label: "Email",
    },
  ];

  const handleLinkClick = (path) => {
    navigate(path);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
  };

  const isActiveLink = (path) => {
    return location.pathname === path;
  };

  return (
    <footer
      role="contentinfo"
      className="bg-background pt-16 pb-8 relative overflow-hidden border-t border-border/50"
    >
      {/* Updated Background with Green Color Scheme */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        {/* Texture Layer */}
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,0.08)_25%,rgba(68,68,68,0.08)_50%,transparent_50%,transparent_75%,rgba(68,68,68,0.08)_75%)] bg-[length:7px_7px] opacity-100" />
        
        {/* Green Radial Fade Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(12,14,18,0.9)_85%,rgba(12,14,18,1)_100%)] pointer-events-none" />
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,black,transparent)]" />

      {/* Green Animated Background Orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ willChange: "transform, opacity" }}
      />

      <motion.div
        className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/15 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
        style={{ willChange: "transform, opacity" }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Main Footer Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12"
        >
          {/* Brand Section */}
          <motion.section
            className="lg:col-span-1"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="size-12 rounded-xl bg-gradient-to-br from-primary to-primary/70 border border-primary/30 backdrop-blur-sm flex items-center justify-center">
                <span className="font-clash font-bold text-white text-sm">TF</span>
              </div>
              <div>
                <h3 className="font-clash text-xl font-semibold text-foreground">
                  Thiyoplus F
                </h3>
                <p className="font-satoshi text-sm text-muted-foreground mt-1">
                  UI/UX Designer & Developer
                </p>
              </div>
            </div>
            <p className="font-satoshi text-muted-foreground text-sm leading-relaxed">
              Creating beautiful, functional digital experiences that make a difference.
            </p>
          </motion.section>

          {/* Navigation Links */}
          <motion.section
            className="lg:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-clash text-lg font-semibold mb-6 text-foreground">
              Navigation
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    onClick={() => handleLinkClick(link.path)}
                    aria-current={isActiveLink(link.path) ? "page" : undefined}
                    className={`group flex items-center gap-3 transition-all duration-300 font-grotesk text-sm ${
                      isActiveLink(link.path)
                        ? "text-primary font-semibold"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <div
                      className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                        isActiveLink(link.path)
                          ? "bg-primary scale-125"
                          : "bg-muted-foreground group-hover:bg-primary group-hover:scale-125"
                      }`}
                      aria-hidden="true"
                    />
                    <span className="leading-tight">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.section>

          {/* Contact Info */}
          <motion.section
            className="lg:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="font-clash text-lg font-semibold mb-6 text-foreground">
              Get in Touch
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail
                  size={18}
                  className="text-primary mt-0.5 shrink-0"
                  aria-hidden="true"
                />
                <div>
                  <a
                    href="mailto:Thiyo80203@gmail.com"
                    className="text-muted-foreground hover:text-foreground transition-colors duration-300 font-satoshi text-sm leading-relaxed"
                  >
                    Thiyo80203@gmail.com
                  </a>
                  <p className="font-satoshi text-xs text-muted-foreground mt-1">
                    Always happy to connect
                  </p>
                </div>
              </div>
              <div className="bg-muted/30 rounded-xl p-4 border border-border/50">
                <p className="font-satoshi text-sm text-foreground">
                  <span className="text-primary font-semibold">Based in</span> Tiruchirappalli, Tamil Nadu
                </p>
                <p className="font-satoshi text-xs text-muted-foreground mt-1">
                  Available for remote work worldwide
                </p>
              </div>
            </div>
          </motion.section>

          {/* Social Links */}
          <motion.section
            className="lg:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="font-clash text-lg font-semibold mb-6 text-foreground">
              Let's Connect
            </h3>
            <div className="space-y-4">
              <p className="font-satoshi text-sm text-muted-foreground">
                Follow my journey and see what I'm building next.
              </p>
              <ul className="flex gap-3 flex-wrap">
                {socialLinks.map((social, index) => (
                  <motion.li
                    key={social.label}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <a
                      href={social.href}
                      aria-label={social.label}
                      className="flex items-center justify-center size-12 rounded-xl bg-muted/50 border border-border hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 group relative"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <social.icon
                        size={20}
                        className="text-muted-foreground group-hover:text-primary transition-colors duration-300"
                        aria-hidden="true"
                      />
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.section>
        </motion.div>

        {/* Availability Banner - Updated with green gradient */}
        <motion.div
          className="mb-8 p-4 bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-2xl text-center backdrop-blur-sm relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          role="status"
          aria-live="polite"
        >
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" aria-hidden="true"></div>
              <span className="font-satoshi font-semibold text-sm text-foreground">
                Available for new opportunities
              </span>
            </div>
            <span className="text-muted-foreground text-sm">•</span>
            <p className="font-satoshi text-sm text-muted-foreground">
              Let's create something amazing together!
            </p>
          </div>
        </motion.div>

        {/* Bottom Row */}
        <motion.div
          className="pt-6 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="text-center md:text-left">
            <p className="font-satoshi text-sm text-muted-foreground">
              © {currentYear} Thiyoplus F. All rights reserved.
            </p>
            <p className="font-grotesk text-xs text-muted-foreground mt-1">
              Crafted with passion in Tamil Nadu
            </p>
          </div>

          <div className="flex items-center gap-6 text-sm">
            <Link
              to="/privacy-policy"
              onClick={() => handleLinkClick("/privacy-policy")}
              className="text-muted-foreground hover:text-foreground transition-colors duration-300 font-satoshi text-sm"
            >
              Privacy
            </Link>
            <Link
              to="/terms-of-service"
              onClick={() => handleLinkClick("/terms-of-service")}
              className="text-muted-foreground hover:text-foreground transition-colors duration-300 font-satoshi text-sm"
            >
              Terms
            </Link>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-muted-foreground hover:text-foreground transition-colors duration-300 font-satoshi text-sm"
              aria-label="Back to top"
            >
              Back to top
            </button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;