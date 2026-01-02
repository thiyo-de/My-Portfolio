import { motion } from "framer-motion";
import {
  ArrowRight,
  Mail,
  Phone,
  Github,
  Linkedin,
  Instagram,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import thiyo from "../assets/Profile-Thiyo.png";
// import thiyo from "../assets/img.jpg";

const Hero = () => {
  const navigate = useNavigate();

  const handleWorkClick = () => {
    // Scroll to top and navigate to work page
    window.scrollTo({ top: 0, behavior: "auto" });
    navigate("/work-Page");
  };

  return (
    <section className="relative min-h-screen pt-14 md:pt-18 lg:pt-24 flex items-center justify-center bg-background text-foreground overflow-hidden px-4 sm:px-6 lg:px-8">

      {/* Enhanced Background Textures */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        {/* Texture Layer */}
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,0.08)_25%,rgba(68,68,68,0.08)_50%,transparent_50%,transparent_75%,rgba(68,68,68,0.08)_75%)] bg-[length:7px_7px] opacity-100" />

        {/* Radial Fade Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(12,14,18,0.9)_85%,rgba(12,14,18,1)_100%)] pointer-events-none" />
      </div>

      {/* Grid Texture Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

      {/* Background Glow */}
      <motion.div
        className="absolute inset-0 flex justify-center items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] xl:w-[600px] xl:h-[600px] bg-primary/20 blur-[120px] sm:blur-[140px] lg:blur-[180px] rounded-full" />
      </motion.div>

      {/* Main Content Container */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 w-full max-w-7xl mx-auto flex flex-col justify-between min-h-[85vh] py-4 sm:py-6 lg:py-8 pt-24"
      >
        {/* Mobile & Tablet Layout */}
        <div className="lg:hidden flex flex-col items-center justify-center text-center min-h-[85vh] w-full">
          {/* Top Section - Welcome Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-card/60 backdrop-blur-sm border border-border mb-4 sm:mb-6"
          >
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full animate-pulse" />
            <p className="text-xs sm:text-sm text-muted-foreground font-satoshi">
              Hey
              <motion.span
                animate={{
                  rotate: [0, -10, 12, -8, 6, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatDelay: 1.5,
                  ease: "easeInOut",
                }}
                className="inline-block origin-bottom"
              >
                👋
              </motion.span>
              , I'm a Designer & Developer
            </p>
          </motion.div>

          {/* Name - Centered Top */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="font-clash font-black leading-tight text-4xl sm:text-5xl md:text-6xl tracking-tight bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent mb-6 sm:mb-8"
          >
            THIYOPLUS F
          </motion.h1>

          {/* Image Container with Bottom Fade */}
          <motion.div
            className="relative w-full flex justify-center mb-6 sm:mb-8"
            initial={{ opacity: 0, y: 100, scale: 0.3 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              delay: 0.6,
              duration: 1.2,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <motion.div
              className="relative"
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.8 },
              }}
            >
              <img
                src={thiyo}
                alt="Thiyoplus F - Full Stack Developer"
                className="h-auto max-h-[45vh] sm:max-h-[50vh] md:max-h-[55vh] w-auto object-contain"
                style={{
                  mixBlendMode: "normal",
                  filter: "none",
                  maskImage:
                    "linear-gradient(to bottom, black 60%, transparent 100%)",
                  WebkitMaskImage:
                    "linear-gradient(to bottom, black 60%, transparent 100%)",
                }}
              />
            </motion.div>
          </motion.div>

          {/* Description - Below Image */}
          <motion.p
            className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 font-grotesk max-w-[90%] sm:max-w-[80%] mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            I build fast, scalable, and user-friendly web applications using
            modern JavaScript technologies — React on the frontend and Node.js
            on the backend. I’m passionate about learning new technologies and
            exploring how AI can enhance development and user experiences.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            className="mb-6 sm:mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <Button
              onClick={handleWorkClick}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 sm:px-10 py-5 sm:py-6 rounded-full font-grotesk font-normal group text-base sm:text-lg"
              size="lg"
            >
              View My Work
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex justify-center gap-4 sm:gap-6 mb-6 sm:mb-8 flex-wrap"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            {[
              {
                platform: "GitHub",
                icon: Github,
                href: "https://github.com/thiyo-de",
              },
              {
                platform: "LinkedIn",
                icon: Linkedin,
                href: "https://www.linkedin.com/in/thiyoplus-f/",
              },
              {
                platform: "Instagram",
                icon: Instagram,
                href: "https://www.instagram.com/thiyo.de?igsh=MWN2OHI3d2ZjbTAzNQ%3D%3D",
              },
            ].map(({ platform, icon: Icon, href }) => (
              <motion.a
                key={platform}
                href={href}
                className="flex items-center gap-2 sm:gap-3 text-muted-foreground hover:text-primary transition-colors text-sm sm:text-base font-satoshi font-medium py-2"
                whileHover={{ y: -2 }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>{platform}</span>
              </motion.a>
            ))}
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="flex flex-col gap-3 sm:gap-4 items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
          >
            <motion.a
              href="mailto:Thiyo80203@gmail.com"
              className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group font-satoshi text-sm sm:text-base"
              whileHover={{ x: 5 }}
            >
              <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
              <span className="truncate">Thiyo80203@gmail.com</span>
            </motion.a>
            <motion.a
              href="tel:+919361339871"
              className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group font-satoshi text-sm sm:text-base"
              whileHover={{ x: 5 }}
            >
              <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
              <span>+91 9361339871</span>
            </motion.a>
          </motion.div>
        </div>

        {/* Desktop & Laptop Layout */}
        <div className="hidden lg:flex flex-col justify-between min-h-[85vh] w-full">
          {/* Top Section */}
          <div className="text-center lg:text-left relative z-20 mb-6 sm:mb-8 lg:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-card/60 backdrop-blur-sm border border-border mb-3 sm:mb-4"
            >
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full animate-pulse" />
              <p className="text-xs sm:text-sm text-muted-foreground font-satoshi">
                Hey
                <motion.span
                  animate={{
                    rotate: [0, -10, 12, -8, 6, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatDelay: 1.5,
                    ease: "easeInOut",
                  }}
                  className="inline-block origin-bottom"
                >
                  👋
                </motion.span>
                , I'm a Designer & Developer
              </p>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="font-clash font-black leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl tracking-tight bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent px-2"
            >
              THIYOPLUS F
            </motion.h1>
          </div>

          {/* Image Container with CSS Mask Fade */}
          <motion.div
            className="absolute inset-0 z-5 flex items-end justify-center overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <motion.div
              className="relative"
              initial={{
                y: "100%",
                opacity: 0,
                scale: 0.5,
              }}
              animate={{
                y: 0,
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 1.5,
                ease: [0.25, 0.46, 0.45, 0.94],
                delay: 0.7,
              }}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.8 },
              }}
            >
              <img
                src={thiyo}
                alt="Thiyoplus F - Full Stack Developer"
                className="h-auto max-h-[60vh] sm:max-h-[70vh] lg:max-h-[75vh] xl:max-h-[80vh] w-auto object-contain object-bottom"
                style={{
                  mixBlendMode: "normal",
                  filter: "none",
                  maskImage:
                    "linear-gradient(to bottom, black 50%, transparent 100%)",
                  WebkitMaskImage:
                    "linear-gradient(to bottom, black 50%, transparent 100%)",
                }}
              />
            </motion.div>
          </motion.div>

          {/* Bottom Section */}
          <motion.div
            className="flex flex-col lg:flex-row justify-between items-center lg:items-end gap-4 sm:gap-6 lg:gap-8 relative z-20 mb-10 mt-4 sm:mt-8 lg:mt-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 sm:gap-4 lg:gap-2 order-2 lg:order-1 w-full lg:w-auto items-center lg:items-start">
              <motion.a
                href="mailto:Thiyo80203@gmail.com"
                className="flex items-center gap-2 sm:gap-3 text-muted-foreground hover:text-foreground transition-colors group font-satoshi text-sm sm:text-base"
                whileHover={{ x: 5 }}
              >
                <Mail className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                <span className="truncate">Thiyo80203@gmail.com</span>
              </motion.a>
              <motion.a
                href="tel:+919361339871"
                className="flex items-center gap-2 sm:gap-3 text-muted-foreground hover:text-foreground transition-colors group font-satoshi text-sm sm:text-base"
                whileHover={{ x: 5 }}
              >
                <Phone className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                <span>+91 9361339871</span>
              </motion.a>
            </div>

            {/* About + Socials */}
            <div className="flex-1 w-full lg:max-w-sm order-1 lg:order-2">
              <motion.p
                className="text-muted-foreground text-sm sm:text-base lg:text-lg leading-relaxed mb-4 sm:mb-6 text-center lg:text-right font-grotesk px-2 sm:px-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                I build fast, scalable, and user-friendly web applications using
                modern JavaScript technologies — React on the frontend and
                Node.js on the backend. I’m passionate about learning new
                technologies and exploring how AI can enhance development and
                user experiences.
              </motion.p>

              {/* CTA Button */}
              <motion.div
                className="flex justify-center lg:justify-end mb-4 sm:mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
              >
                <Button
                  onClick={handleWorkClick}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 sm:px-8 py-4 sm:py-6 rounded-full font-grotesk font-normal group text-sm sm:text-base"
                  size="lg"
                >
                  View My Work
                  <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>

              {/* Social Links */}
              <motion.div
                className="flex justify-center lg:justify-end gap-4 sm:gap-6 flex-wrap"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4 }}
              >
                {[
                  {
                    platform: "GitHub",
                    icon: Github,
                    href: "https://github.com/thiyo-de",
                  },
                  {
                    platform: "LinkedIn",
                    icon: Linkedin,
                    href: "https://www.linkedin.com/in/thiyoplus-f/",
                  },
                  {
                    platform: "Instagram",
                    icon: Instagram,
                    href: "https://www.instagram.com/thiyo.de?igsh=MWN2OHI3d2ZjbTAzNQ%3D%3D",
                  },
                ].map(({ platform, icon: Icon, href }) => (
                  <motion.a
                    key={platform}
                    href={href}
                    className="flex items-center gap-1.5 sm:gap-2 text-muted-foreground hover:text-primary transition-colors text-xs sm:text-sm font-satoshi font-medium py-1 sm:py-2"
                    whileHover={{ y: -2 }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span>{platform}</span>
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator - Only show within Hero section */}
      <motion.div
        className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20 hidden lg:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-border rounded-full flex justify-center">
          <motion.div
            className="w-1 h-2 sm:h-3 bg-primary rounded-full mt-1 sm:mt-2"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
