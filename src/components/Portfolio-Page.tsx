import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ExternalLink,
  Github,
  ArrowRight,
  Filter,
  Star,
  Eye,
  Calendar,
  Users,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const projects = [
  {
    id: "9",
    title: "Montfort AI Admin Dashboard",
    description: "A powerful, no-code admin interface for managing the Montfort AI Chatbot's knowledge base.",
    shortDescription: "Centralized Control Center for School AI Interactions",
    tags: [
      "Admin Panel",
      "Dashboard",
      "CMS",
      "Supabase",
      "React",
      "Analytics"
    ],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop",
    slug: "montfort-school-ai-chatbot-system",
    category: "Admin System / SaaS",
    liveUrl: "https://montfort-chatbot-admin-panel.netlify.app/",
    githubUrl: "#",
    featured: true,
    role: "Lead Architect & Developer",
    stats: [
      { value: "No-Code", label: "Control" },
      { value: "Real-Time", label: "Analytics" },
      { value: "RBAC", label: "Security" },
      { value: "Production", label: "Status" },
      { value: "Supabase", label: "Database" },
      { value: "9-Q Rule", label: "Validation" },
    ],
  },
  {
    id: "1",
    title: "Montfort ICSE AI Chatbot",
    description: "Advanced Gemini-Powered AI with 3D Navigation",
    shortDescription: "Zero-Hallucination School Assistant",
    tags: [
      "AI/ML",
      "Gemini API",
      "RAG",
      "Node.js",
      "3D Vista",
      "Semantic Search",
      "Vector Embeddings",
      "Express.js",
    ],
    image:
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1200&h=800&fit=crop",
    slug: "montfort-icse-ai-chatbot",
    category: "AI/ML / Full Stack",
    liveUrl: "https://montfort-chatbot.netlify.app/",
    githubUrl: "https://github.com/thiyo-de/Chatbot",
    featured: true,
    role: "Lead AI Architect & Full-Stack Developer",
    stats: [
      { value: "0%", label: "Hallucination Rate" },
      { value: "< 800ms", label: "Response Time" },
      { value: "97.2%", label: "Accuracy" },
      { value: "99.98%", label: "Uptime" },
      { value: "10K+", label: "Queries Processed" },
      { value: "94%", label: "User Satisfaction" },
    ],
  },
  {
    id: "2",
    title: "DS Founder Birthday Wishes Platform",
    description:
      "Interactive platform for collecting and displaying birthday wishes in multiple media formats",
    shortDescription: "A Digital Tribute to Visionary Leadership",
    tags: [
      "React",
      "TypeScript",
      "Supabase",
      "Cloudinary",
      "Tailwind CSS",
      "Framer Motion",
      "Netlify",
      "Full Stack",
    ],
    image:
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=1200&h=800&fit=crop&auto=format",
    slug: "ds-founder-birthday-wishes",
    category: "Full Stack / Community Platform",
    liveUrl: "https://ds-founder-birth-day-wish.netlify.app/",
    githubUrl: "https://github.com/thiyo-de/DS_Founder_BD-Wish",
    featured: true,
    role: "Full Stack Developer & System Architect",
    stats: [
      { value: "99.9%", label: "Uptime" },
      { value: "< 2s", label: "Media Processing" },
      { value: "500+", label: "Wishes Collected" },
      { value: "98%", label: "User Satisfaction" },
      { value: "< 100ms", label: "Response Time" },
      { value: "100%", label: "Cross-Platform" },
    ],
  },
  {
    id: "3",
    title: "Vowel Quest – Space Shooter Edition",
    description:
      "Educational space shooter game that combines gaming with vowel recognition learning",
    shortDescription: "Destroy alien words by shooting the correct vowels!",
    tags: [
      "HTML5 Canvas",
      "CSS3",
      "JavaScript",
      "Educational Game",
      "Responsive Design",
      "60fps",
      "Mobile-Optimized",
    ],
    image:
      "https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=1200&h=800&fit=crop&auto=format",
    slug: "vowel-quest",
    category: "Educational Game / Web App",
    liveUrl: "https://vowel-shooting.netlify.app/",
    githubUrl: "#",
    featured: true,
    role: "Full Stack Developer & Game Designer",
    stats: [
      { value: "200KB", label: "Game Size" },
      { value: "60fps", label: "Performance" },
      { value: "10", label: "Departments" },
      { value: "5", label: "Vowels" },
      { value: "2", label: "Spacecraft" },
      { value: "4", label: "Power-ups" },
    ],
  },
  {
    id: "4",
    title: "Ruthram360°",
    description: "Transforming Spaces into Immersive Digital Experiences",
    shortDescription: "Virtual Tours & Street View Experts",
    tags: [
      "React 18",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "360° Virtual Tours",
      "Google Street View",
      "Digital Preservation",
    ],
    image:
      "https://github.com/thiyo-de/Ruthram-360/raw/main/Web%20UI/1.png",
    slug: "ruthram360",
    category: "Virtual Tours / Digital Media",
    liveUrl: "https://ruthram360.netlify.app/",
    githubUrl: "https://github.com/thiyo-de/Ruthram-360",
    featured: true,
    role: "Lead Developer & Designer",
    stats: [
      { value: "Lightning", label: "Performance" },
      { value: "Immersive", label: "Experience" },
      { value: "WCAG", label: "Accessibility" },
      { value: "Precision", label: "Mapping" },
      { value: "Digital", label: "Preservation" },
      { value: "100%", label: "Responsive" },
    ],
  },
  {
    id: "5",
    title: "VR Tour Gallery Uploader",
    description:
      "Enhances existing VR tours by allowing users to upload their own images and have them integrated into a shared virtual gallery experience.",
    shortDescription:
      "Interactive user photo upload feature for immersive VR experiences",
    tags: [
      "VR Integration",
      "User-Generated Content",
      "Photo Upload System",
      "Flask Backend",
      "Interactive Gallery",
      "Real-Time Updates",
      "Community Features",
      "Cross-Platform",
    ],
    image:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=1200&h-800&fit=crop&auto=format",
    slug: "vr-tour-gallery",
    category: "VR / Web App",
    liveUrl: "https://vrgallery.netlify.app/",
    githubUrl: "https://github.com/thiyo-de/VR-Tour_Gallery",
    featured: true,
    role: "Full Stack Developer & UX Designer",
    stats: [
      { value: "3 Weeks", label: "Development Time" },
      { value: "<2s", label: "Upload Processing" },
      { value: "Optimized", label: "Image Quality" },
      { value: "5+", label: "Supported Formats" },
      { value: "100+", label: "Concurrent Users" },
    ],
  },
  {
    id: "6",
    title: "Gamified Menu",
    description:
      "A dynamic, gamified navigation menu with sound effects and keyboard accessibility",
    shortDescription: "Engage users with sound-enhanced, accessible navigation",
    tags: [
      "Gamification",
      "UI/UX Design",
      "Sound Design",
      "Accessibility",
      "Keyboard Navigation",
      "CSS Animations",
      "React",
      "Interactive",
    ],
    image:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1200&h=800&fit=crop&auto=format",
    slug: "gamify-menu",
    category: "UI Component / Web Application",
    liveUrl: "https://gammifymenu.netlify.app/",
    githubUrl: "https://github.com/thiyo-de/Gamify_Menu",
    featured: true,
    role: "Frontend Developer & UI Designer",
    stats: [
      { value: "+40%", label: "User Engagement" },
      { value: "<100ms", label: "Load Time" },
      { value: "100%", label: "Accessibility" },
      { value: "5", label: "Sound Assets" },
      { value: "Full", label: "Mobile Support" },
      { value: "All", label: "Browser Support" },
    ],
  },
  {
    id: "7",
    title: "QR Code Generator",
    description: "Generate, save, and manage QR codes with ease",
    shortDescription: "A Simple & Modern QR Code Generator Web Application",
    tags: [
      "JavaScript",
      "HTML5",
      "CSS3",
      "QR Codes",
      "Local Storage",
      "Responsive Design",
      "Modern UI",
      "Web App",
    ],
    image:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=1200&h=800&fit=crop&auto=format",
    slug: "qr-code-generator",
    category: "Web Application",
    liveUrl: "https://thiyo-de.github.io/QR-Code-Generator/",
    githubUrl: "https://github.com/thiyo-de/QR-Code-Generator",
    featured: true,
    role: "Full Stack Developer",
    stats: [
      { value: "< 0.5s", label: "Generation Speed" },
      { value: "Unlimited", label: "Storage Capacity" },
      { value: "100%", label: "Accuracy" },
      { value: "High", label: "Image Quality" },
      { value: "All", label: "Device Support" },
      { value: "98%", label: "User Satisfaction" },
    ],
  },
  {
    id: "8",
    title: "RemoteAccessApp",
    description:
      "24/7 Foreground Service with Persistent Notification & Explicit User Approvals",
    shortDescription: "Consent-first Android Remote Assistance Framework",
    tags: [
      "Android",
      "Kotlin",
      "Foreground Service",
      "WebSocket",
      "Security",
      "Consent-first",
      "Remote Assistance",
      "24/7 Operation",
    ],
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&h=800&fit=crop&auto=format",
    slug: "remote-access-app",
    category: "Android Framework",
    liveUrl: "https://github.com/JCodeX-Dev/Remote-Access-App",
    githubUrl: "https://github.com/JCodeX-Dev/Remote-Access-App",
    featured: true,
    role: "Lead Android Developer",
    stats: [
      { value: "99.9%", label: "Service Uptime" },
      { value: "< 50MB", label: "Memory Usage" },
      { value: "< 2%/day", label: "Battery Impact" },
      { value: "< 500ms", label: "Response Time" },
      { value: "9 → 15", label: "Android Support" },
      { value: "< 30s", label: "Reconnection Delay" },
    ],
  },
];

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [visibleProjects, setVisibleProjects] = useState(6);
  const navigate = useNavigate();

  const categories = [
    "All",
    "Full Stack",
    "Frontend",
    "Mobile",
    "AI/ML",
    "Web App",
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => 
          project.category.toLowerCase().includes(activeFilter.toLowerCase()) ||
          (activeFilter === "Mobile" && project.category.toLowerCase().includes("android")) ||
          (activeFilter === "Frontend" && (project.category.toLowerCase().includes("web") || project.category.toLowerCase().includes("ui")))
        );

  const displayedProjects = filteredProjects.slice(0, visibleProjects);

  const loadMore = () => {
    setVisibleProjects((prev) => prev + 3);
  };

  // Scroll handler for case study links
  const handleCaseStudyClick = (slug: string) => {
    // Scroll to top first
    window.scrollTo(0, 0);

    // Then navigate after a small delay to ensure scroll completes
    setTimeout(() => {
      navigate(`/portfolio/${slug}`);
    }, 100);
  };

  return (
    <section
      id="portfolio"
      className="py-20 md:py-30 lg:py-36 bg-background relative overflow-hidden"
    >
      {/* Enhanced Background with Center Radial Fade */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Texture Layer */}
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,0.08)_25%,rgba(68,68,68,0.08)_50%,transparent_50%,transparent_75%,rgba(68,68,68,0.08)_75%)] bg-[length:7px_7px] opacity-100" />

        {/* Radial Fade Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(12,14,18,0.9)_85%,rgba(12,14,18,1)_100%)] pointer-events-none" />
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-16 w-64 h-64 bg-accent/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2],
            y: [0, -15, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="font-grotesk text-xs tracking-[0.3em] text-muted-foreground uppercase">
            Featured Work
          </span>
          <h2 className="font-clash font-extrabold text-4xl sm:text-5xl md:text-6xl mt-4 mb-6">
            Portfolio
            <span className="block bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Showcase
            </span>
          </h2>
          <p className="font-satoshi text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Crafting exceptional digital experiences that blend innovative
            design with technical excellence to drive measurable business
            results
          </p>
        </motion.div>

        {/* Enhanced Filters */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex items-center gap-3 w-full justify-center mb-4">
            <Filter className="w-5 h-5 text-muted-foreground" />
            <span className="font-grotesk text-sm font-medium text-muted-foreground tracking-wide">
              Filter by Category
            </span>
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-5 py-2.5 rounded-xl font-grotesk text-sm font-medium transition-all duration-300 border backdrop-blur-sm ${
                  activeFilter === category
                    ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/25 scale-105"
                    : "bg-card/60 border-border/60 hover:border-primary/40 hover:bg-primary/5 text-foreground/80"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {displayedProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                onCaseStudyClick={handleCaseStudyClick}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Load More */}
        {visibleProjects < filteredProjects.length && (
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Button
              onClick={loadMore}
              size="lg"
              variant="outline"
              className="rounded-xl px-8 py-6 border-2 hover:border-primary/50 hover:bg-primary/5 group"
            >
              <span className="font-grotesk font-medium">
                Load More Projects
              </span>
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

// Enhanced Project Card Component
const ProjectCard = ({
  project,
  index,
  onCaseStudyClick,
}: {
  project: (typeof projects)[0];
  index: number;
  onCaseStudyClick: (slug: string) => void;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        type: "spring",
        stiffness: 100,
      }}
      whileHover={{
        y: -8,
        transition: { duration: 0.3 },
      }}
      className="group relative"
    >
      {/* Card Container */}
      <div className="relative bg-card/40 backdrop-blur-sm border border-border/50 rounded-2xl lg:rounded-3xl overflow-hidden hover:border-primary/30 transition-all duration-500 h-full flex flex-col">
        {/* Image Section */}
        <div className="relative overflow-hidden aspect-[4/3]">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/30 to-transparent" />

          {/* Top Badges */}
          <div className="absolute top-4 left-4 flex flex-col gap-2">
            <div className="flex gap-2">
              {project.featured && (
                <Badge className="bg-primary/20 text-primary border-primary/30 px-3 py-1.5 font-grotesk font-medium backdrop-blur-sm">
                  <Star className="w-3 h-3 mr-1" />
                  Featured
                </Badge>
              )}
              <Badge
                variant="secondary"
                className="px-3 py-1.5 font-grotesk font-medium backdrop-blur-sm"
              >
                {project.category}
              </Badge>
            </div>
          </div>

          {/* Hover Actions */}
          <motion.div
            className="absolute inset-0 bg-primary/95 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300"
            whileHover={{ opacity: 1 }}
          >
            <motion.a
              href={project.liveUrl}
              className="p-4 bg-background/20 backdrop-blur-sm rounded-xl hover:bg-background/30 transition-all duration-300 border border-white/20"
              whileHover={{ scale: 1.15, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Eye className="w-5 h-5 text-white" />
            </motion.a>
            <motion.a
              href={project.githubUrl}
              className="p-4 bg-background/20 backdrop-blur-sm rounded-xl hover:bg-background/30 transition-all duration-300 border border-white/20"
              whileHover={{ scale: 1.15, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github className="w-5 h-5 text-white" />
            </motion.a>
          </motion.div>
        </div>

        {/* Content Section */}
        <div className="p-6 lg:p-7 flex-1 flex flex-col">
          {/* Header */}
          <div className="mb-4">
            <h3 className="font-clash font-bold text-xl lg:text-2xl mb-3 group-hover:text-primary transition-colors duration-300 leading-tight">
              {project.title}
            </h3>
            <p className="font-satoshi text-muted-foreground text-sm lg:text-base leading-relaxed">
              {project.shortDescription}
            </p>
          </div>

          {/* Role */}
          <div className="mb-4">
            <p className="font-satoshi text-sm font-medium text-primary">
              {project.role}
            </p>
          </div>

          {/* Stats Preview */}
          <div className="grid grid-cols-3 gap-2 mb-4">
            {project.stats.slice(0, 2).map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 + idx * 0.1 }}
                className="text-center p-2 bg-primary/5 rounded-lg border border-primary/10"
              >
                <div className="font-grotesk font-bold text-lg text-primary">
                  {stat.value}
                </div>
                <div className="font-satoshi text-xs text-muted-foreground leading-tight">
                  {stat.label}
                </div>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 + 0.2 }}
              className="text-center p-2 bg-accent/5 rounded-lg border border-accent/10"
            >
              <div className="font-clash font-bold text-lg text-accent">
                {project.stats[2].value}
              </div>
              <div className="font-satoshi text-xs text-muted-foreground leading-tight">
                {project.stats[2].label}
              </div>
            </motion.div>
          </div>

          {/* Tags */}
          <div className="flex items-center justify-start flex-wrap gap-1.5 mb-6 flex-1">
            {project.tags.slice(0, 4).map((tag, tagIndex) => (
              <motion.div
                key={tagIndex}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: tagIndex * 0.1 }}
              >
                <Badge
                  variant="outline"
                  className="font-grotesk text-xs px-2.5 py-1 bg-background/50 border-2 border-border/50 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
                >
                  {tag}
                </Badge>
              </motion.div>
            ))}
            {project.tags.length > 4 && (
              <Badge
                variant="secondary"
                className="font-grotesk text-xs px-2 py-1"
              >
                +{project.tags.length - 4}
              </Badge>
            )}
          </div>

          {/* CTA Button */}
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button
              onClick={() => onCaseStudyClick(project.slug)}
              className="w-full gap-2 group/btn rounded-xl py-6 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary border-0 shadow-lg shadow-primary/25"
            >
              <span className="font-grotesk font-medium">View Case Study</span>
              <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
            </Button>
          </motion.div>
        </div>

        {/* Glow Effect */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
      </div>
    </motion.div>
  );
};

export default Portfolio;
