import {
  Mail,
  Linkedin,
  Github,
  Twitter,
  ArrowRight,
  Download,
  ExternalLink,
  LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import profile_Pic from "../assets/Profile Pic.jfif";
import { useRef, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

// Types for better type safety
interface SocialLink {
  icon: LucideIcon;
  href: string;
  label: string;
}

interface Stat {
  number: string;
  label: string;
}

const About = () => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const navigate = useNavigate(); // Moved navigate hook to top level

  const socialLinks: SocialLink[] = [
    {
      icon: Github,
      href: "https://github.com/yourusername",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/yourusername",
      label: "LinkedIn",
    },
    {
      icon: Twitter,
      href: "https://twitter.com/yourusername",
      label: "Twitter",
    },
  ];

  const skills = [
    "UI/UX Design",
    "Frontend Development",
    "React/Next.js",
    "TypeScript",
    "Framer Motion",
    "Figma",
    "Responsive Design",
    "User Research",
  ];

  const stats: Stat[] = [
    { number: "3+", label: "Years Experience" },
    { number: "50+", label: "Projects Completed" },
    { number: "25+", label: "Happy Clients" },
  ];

  // Memoized handlers for better performance
  const handleDownloadResume = useCallback(() => {
    const resumeUrl = "/resume.pdf";
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Your_Name_Resume.pdf";
    link.setAttribute("data-testid", "resume-download-link");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);

  const scrollToContact = useCallback(() => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, []);

  const handleImageLoad = useCallback(() => {
    setIsImageLoaded(true);
  }, []);

  const handleStartProject = useCallback(() => {
    navigate("/contact-Page");
    // Scroll to top after navigation
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
  }, [navigate]);

  return (
    <section
      id="about"
      className="py-20 md:py-30 lg:py-36 bg-background relative overflow-hidden"
      aria-labelledby="about-heading"
    >
      {/* Enhanced Background */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,0.08)_25%,rgba(68,68,68,0.08)_50%,transparent_50%,transparent_75%,rgba(68,68,68,0.08)_75%)] bg-[length:7px_7px] opacity-100" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(12,14,18,0.9)_85%,rgba(12,14,18,1)_100%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <motion.header
            className="text-center mb-12 sm:mb-16 lg:mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <span className="font-grotesk text-xs tracking-[0.3em] text-muted-foreground uppercase">
              About Me
            </span>
            <h1
              id="about-heading"
              className="font-clash font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-4 sm:mt-6 mb-4 sm:mb-6 leading-tight"
            >
              Crafting Digital
              <br />
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Excellence
              </span>
            </h1>
            <p className="font-satoshi text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed px-4">
              Transforming ideas into exceptional digital solutions through
              design and development.
            </p>
          </motion.header>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left Column - Text Content */}
            <motion.div
              className="space-y-6 lg:space-y-8 order-2 lg:order-1"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <motion.p
                variants={staggerItem}
                className="font-satoshi text-base lg:text-lg text-muted-foreground leading-relaxed"
              >
                I'm a{" "}
                <span className="font-semibold text-foreground">
                  designer & developer
                </span>{" "}
                passionate about creating meaningful digital experiences that
                blend aesthetics with functionality. Currently seeking new
                opportunities to bring innovative ideas to life through clean
                code and thoughtful design.
              </motion.p>

              <motion.p
                variants={staggerItem}
                className="font-satoshi text-base lg:text-lg text-muted-foreground leading-relaxed"
              >
                My expertise spans{" "}
                <span className="font-semibold text-foreground">
                  UI/UX design, frontend development, and interactive
                  experiences
                </span>
                . I believe in the power of design thinking and user-centered
                approaches to create products that not only look beautiful but
                also solve real problems.
              </motion.p>

              <motion.p
                variants={staggerItem}
                className="font-satoshi text-base lg:text-lg text-muted-foreground leading-relaxed"
              >
                Based in Tiruchirappalli, Tamil Nadu, I'm ready to collaborate
                with teams and clients globally, transforming visions into
                beautifully crafted digital solutions.
              </motion.p>

              {/* Skills */}
              <motion.div
                className="flex flex-wrap gap-2 lg:gap-3 pt-4"
                variants={staggerItem}
              >
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 lg:px-4 py-2 bg-muted rounded-full text-xs lg:text-sm font-medium text-foreground border border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 cursor-default select-none"
                    aria-label={`Skill: ${skill}`}
                  >
                    {skill}
                  </span>
                ))}
              </motion.div>

              {/* Action Buttons - Compact */}
              <motion.div
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-6"
                variants={staggerItem}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1"
                >
                  <Button
                    size="lg"
                    className="font-grotesk text-sm sm:text-base lg:text-lg w-full px-4 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full transition-all duration-300"
                    onClick={scrollToContact}
                  >
                    <Mail className="mr-1 sm:mr-1 h-4 w-4 lg:h-5 lg:w-5" />
                    Get In Touch
                  </Button>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1"
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="font-grotesk text-sm sm:text-base lg:text-lg w-full px-4 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6 rounded-full border-2 border-border hover:border-primary hover:bg-primary/5 transition-all duration-300"
                    onClick={handleDownloadResume}
                  >
                    <Download className="mr-1 sm:mr-1 h-4 w-4 lg:h-5 lg:w-5" />
                    Download Resume
                  </Button>
                </motion.div>
              </motion.div>

              {/* Social Links */}
              <motion.div
                className="flex gap-3 lg:gap-4 pt-6"
                variants={staggerItem}
                aria-label="Social media links"
              >
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 lg:p-4 rounded-full border-2 border-border hover:border-primary hover:bg-primary/10 transition-all duration-300 group relative"
                    variants={staggerItem}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={`Visit my ${link.label} profile`}
                  >
                    <link.icon className="w-5 h-5 lg:w-6 lg:h-6 transition-transform duration-300 group-hover:scale-110" />
                    {/* Tooltip effect */}
                    <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-foreground text-background text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                      {link.label}
                    </span>
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Column - Profile Image & Stats */}
            <motion.div
              className="relative order-1 lg:order-2 mb-8 lg:mb-0"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <TiltCard
                stats={stats}
                onImageLoad={handleImageLoad}
                isImageLoaded={isImageLoaded}
              />
            </motion.div>
          </div>

          {/* Enhanced Availability Banner */}
          <motion.div
            className="mt-16 lg:mt-20 p-6 lg:p-8 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border border-primary/20 rounded-2xl text-center backdrop-blur-sm relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            role="status"
            aria-live="polite"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5" aria-hidden="true">
              <div className="absolute top-0 left-0 w-24 h-24 lg:w-32 lg:h-32 bg-primary rounded-full -translate-x-1/2 -translate-y-1/2" />
              <div className="absolute bottom-0 right-0 w-24 h-24 lg:w-32 lg:h-32 bg-primary rounded-full translate-x-1/2 translate-y-1/2" />
            </div>

            {/* Main Text */}
            <p className="font-satoshi text-base lg:text-lg text-foreground relative z-10">
              <span className="font-semibold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Currently available for new opportunities
              </span>{" "}
              — Let's discuss how we can work together to bring your ideas to
              life!
            </p>

            {/* Call-to-Action Button */}
            <motion.div
              className="mt-4 lg:mt-6 relative z-20"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
            >
              <Button
                size="lg"
                onClick={() => {
                  navigate("/contact-Page");
                  // Scroll to top after navigation
                  setTimeout(() => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }, 100);
                }}
                className="font-satoshi bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6 lg:px-8 py-5 lg:py-6 text-base lg:text-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer relative z-30"
                aria-label="View my work projects"
              >
                View My Work
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Enhanced TiltCard Component with proper TypeScript
interface TiltCardProps {
  stats: Stat[];
  onImageLoad: () => void;
  isImageLoaded: boolean;
}

const TiltCard = ({ stats, onImageLoad, isImageLoaded }: TiltCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 15;
    const rotateY = (centerX - x) / 15;

    card.style.transform = `
      perspective(1000px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale3d(1.02, 1.02, 1.02)
    `;
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (!cardRef.current) return;

    cardRef.current.style.transform = `
      perspective(1000px)
      rotateX(0deg)
      rotateY(0deg)
      scale3d(1, 1, 1)
    `;
  }, []);

  const handleClick = () => {
    navigate("/work-Page");
    // Scroll to top after navigation
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.8,
        delay: 0.3,
        type: "spring",
        stiffness: 80,
        damping: 15,
      }}
      whileHover={{
        y: -12,
        transition: { duration: 0.4, type: "spring", stiffness: 300 },
      }}
      className="group relative"
    >
      {/* Card Container with Tilt Effect */}
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative bg-card/60 backdrop-blur-xl border border-border/50 rounded-3xl overflow-hidden hover:border-primary/40 transition-all duration-300 h-full flex flex-col will-change-transform"
        style={{
          transformStyle: "preserve-3d",
        }}
        role="complementary"
        aria-label="Profile information and statistics"
      >
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Subtle Pattern Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Content */}
        <div
          className="relative p-6 lg:p-8 flex-1 flex flex-col z-10"
          style={{ transform: "translateZ(50px)" }}
        >
          {/* Profile Image Container with Gradient Border */}
          <div className="relative mb-8">

         <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-green-500 via-green-400 to-gray-400 p-[2px] backdrop-blur-sm">
              
              <div className="aspect-square w-full overflow-hidden rounded-2xl bg-muted/20">
                <motion.img
                  src={profile_Pic}
                  alt="Professional profile picture"
                  width={600}
                  height={600}
                  className={`w-full h-full object-cover transition-opacity duration-500 ${
                    isImageLoaded ? "opacity-100" : "opacity-0"
                  }`}
                  onLoad={onImageLoad}
                  loading="lazy"
                />
                {/* Loading skeleton */}
                {!isImageLoaded && (
                  <div className="absolute inset-0 bg-muted animate-pulse rounded-2xl" />
                )}
              </div>
            </div>

            {/* Enhanced Availability Badges */}
            <motion.div
              className="absolute -bottom-2 -left-2 sm:-bottom-3 sm:-left-3 bg-gradient-to-r from-primary to-primary text-primary-foreground px-4 py-2 sm:px-5 sm:py-3 rounded-xl font-satoshi font-bold text-xs sm:text-sm shadow-lg border border-primary/20 z-10"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
              whileHover={{ scale: 1.05, y: -2 }}
              role="status"
              aria-label="Open for work"
            >
              <div className="flex items-center gap-2">
                <div
                  className="w-2 h-2 bg-green-400 rounded-full animate-pulse"
                  aria-hidden="true"
                ></div>
                Open for Work
              </div>
            </motion.div>

            <motion.div
              className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 bg-background backdrop-blur-sm border border-primary/20 px-4 py-2 sm:px-5 sm:py-3 rounded-xl font-satoshi font-semibold text-xs sm:text-sm text-foreground shadow-lg z-10"
              initial={{ y: -20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1 }}
              whileHover={{ scale: 1.05, y: 2 }}
              role="status"
              aria-label="Available now"
            >
              <div className="flex items-center gap-2">
                <div
                  className="w-2 h-2 bg-green-400 rounded-full"
                  aria-hidden="true"
                ></div>
                Available Now
              </div>
            </motion.div>
          </div>

          {/* Enhanced Stats Grid */}
          <div
            className="grid grid-cols-3 gap-3 sm:gap-4 mt-4"
            aria-label="Professional statistics"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="bg-muted/50 border border-border rounded-xl lg:rounded-2xl p-3 sm:p-4 lg:p-5 text-center hover:bg-primary/5 hover:border-primary/30 transition-all duration-300 group backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                whileHover={{ y: -3, scale: 1.02 }}
                role="figure"
                aria-label={`${stat.number} ${stat.label}`}
              >
                <div className="font-clash font-bold text-xl sm:text-2xl lg:text-3xl text-foreground mb-1 sm:mb-2 group-hover:text-primary transition-colors duration-300">
                  {stat.number}
                </div>
                <div className="font-satoshi text-xs text-muted-foreground uppercase tracking-wider group-hover:text-foreground transition-colors duration-300 leading-tight">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-6 pt-6 border-t border-border/30 group-hover:border-primary/20 transition-colors duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-center justify-between">
              <span className="font-grotesk font-medium text-sm text-muted-foreground group-hover:text-primary transition-colors duration-200">
                View My Work
              </span>

              <motion.div
                className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-200 cursor-pointer"
                whileHover={{ scale: 1.1, rotate: 45 }}
                transition={{ duration: 0.2 }}
                role="button"
                aria-label="View portfolio work"
                tabIndex={0}
                onClick={handleClick}
              >
                <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-1 group-hover:scale-110 transition-transform duration-200" />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Enhanced Hover Effects */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />

        {/* Glow Effect */}
        <div className="absolute inset-0 rounded-3xl bg-primary/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-20" />
      </div>

      {/* Outer Glow */}
      <div
        className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/20 to-accent/20 blur-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-300 -z-30"
        aria-hidden="true"
      />
    </motion.div>
  );
};

export default About;
