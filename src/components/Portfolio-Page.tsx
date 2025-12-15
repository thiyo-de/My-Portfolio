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
    id: "1",
    title: "Montfort ICSE AI Chatbot",
    description:
      "Advanced Gemini-Powered, Zero-Hallucination School Information Assistant with 3D Navigation",
    shortDescription:
      "Revolutionizing school communication with intelligent AI assistance",
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
    category: "AI / Full Stack",
    liveUrl: "https://montfort-chatbot.netlify.app/",
    githubUrl: "https://github.com/thiyo-de/Chatbot",
    featured: true,
    role: "Lead AI Architect & Full-Stack Developer",
    stats: [
      { value: "0%", label: "Hallucination Rate" },
      { value: "< 800ms", label: "Response Time" },
      { value: "97.2%", label: "FAQ Accuracy" },
      { value: "99.98%", label: "Uptime" },
      { value: "10K+", label: "Queries Processed" },
      { value: "94%", label: "User Satisfaction" },
    ],
  },
  {
    id: "2",
    title: "Creative Portfolio Platform",
    description:
      "An interactive portfolio builder with dynamic content management and smooth animations",
    shortDescription: "Empowering creatives to showcase their work beautifully",
    tags: ["Next.js", "Framer Motion", "TypeScript", "Sanity CMS", "Tailwind"],
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&h=800&fit=crop",
    slug: "ds-founder-birthday-wishes",
    category: "Frontend",
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    role: "Frontend Specialist & UX Designer",
    impact: [
      "Enhanced user engagement by 65% with interactive animations",
      "Decreased page load time by 50% through performance optimization",
      "Increased user retention by 40% with intuitive content management",
    ],
    stats: [
      { value: "65%", label: "Engagement Increase" },
      { value: "50%", label: "Load Time Reduction" },
      { value: "40%", label: "User Retention" },
    ],
  },
  {
    id: "3",
    title: "TaskFlow Management System",
    description:
      "Collaborative project management tool with real-time updates, team collaboration, and analytics",
    shortDescription:
      "Streamlining team productivity with intelligent task management",
    tags: ["React", "Firebase", "Tailwind", "Chart.js", "TypeScript"],
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=800&fit=crop",
    slug: "vowel-quest",
    category: "Full Stack",
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    role: "Full Stack Developer & UX Architect",
    impact: [
      "Boosted team productivity by 45% with streamlined workflows",
      "Reduced project delivery time by 30% through efficient task tracking",
      "Improved team collaboration with real-time synchronization",
    ],
    stats: [
      { value: "45%", label: "Productivity Boost" },
      { value: "30%", label: "Delivery Time Reduction" },
      { value: "60%", label: "Collaboration Improvement" },
    ],
  },
  {
    id: "4",
    title: "FinTech Mobile Banking",
    description:
      "Secure mobile banking application with modern UI/UX, transaction tracking, and biometric auth",
    shortDescription: "Redefining digital banking security and user experience",
    tags: ["React Native", "Redux", "Node.js", "PostgreSQL", "TypeScript"],
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&h=800&fit=crop",
    slug: "ruthram360",
    category: "Mobile",
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    role: "Mobile UI/UX Specialist",
    impact: [
      "Enhanced app store rating from 3.8 to 4.7 stars with improved UX",
      "Increased daily active users by 55% with intuitive navigation",
      "Reduced support tickets by 60% through clear user interfaces",
    ],
    stats: [
      { value: "4.7", label: "App Store Rating" },
      { value: "55%", label: "User Growth" },
      { value: "60%", label: "Support Reduction" },
    ],
  },
  {
    id: "5",
    title: "Social Analytics Dashboard",
    description:
      "Comprehensive analytics dashboard for social media management with real-time metrics",
    shortDescription:
      "Transforming data into actionable insights with beautiful visualizations",
    tags: ["Vue.js", "Chart.js", "Express", "D3.js", "TypeScript"],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop",
    slug: "vr-tour-gallery",
    category: "Dashboard",
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    role: "Data Visualization Expert & UI Developer",
    impact: [
      "Improved data comprehension by 70% with intuitive visualizations",
      "Reduced decision-making time by 50% through clear metrics display",
      "Increased client satisfaction by 65% with actionable insights",
    ],
    stats: [
      { value: "70%", label: "Comprehension Improvement" },
      { value: "50%", label: "Decision Time Reduction" },
      { value: "65%", label: "Client Satisfaction" },
    ],
  },
  {
    id: "6",
    title: "Health & Fitness Tracker",
    description:
      "AI-powered fitness companion with workout tracking, nutrition planning, and progress analytics",
    shortDescription: "Personalizing fitness journeys with AI-driven insights",
    tags: ["React", "GraphQL", "MongoDB", "AI Integration", "TypeScript"],
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1200&h=800&fit=crop",
    slug: "gamify-menu",
    category: "AI/ML",
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    role: "AI UX Specialist & Full Stack Developer",
    impact: [
      "Increased user retention by 75% with personalized recommendations",
      "Improved workout consistency by 60% through motivational design",
      "Enhanced user satisfaction by 80% with intuitive progress tracking",
    ],
    stats: [
      { value: "75%", label: "User Retention" },
      { value: "60%", label: "Workout Consistency" },
      { value: "80%", label: "User Satisfaction" },
    ],
  },
  {
    id: "7",
    title: "Health & Fitness Tracker",
    description:
      "AI-powered fitness companion with workout tracking, nutrition planning, and progress analytics",
    shortDescription: "Personalizing fitness journeys with AI-driven insights",
    tags: ["React", "GraphQL", "MongoDB", "AI Integration", "TypeScript"],
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1200&h=800&fit=crop",
    slug: "qr-code-generator",
    category: "AI/ML",
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    role: "AI UX Specialist & Full Stack Developer",
    impact: [
      "Increased user retention by 75% with personalized recommendations",
      "Improved workout consistency by 60% through motivational design",
      "Enhanced user satisfaction by 80% with intuitive progress tracking",
    ],
    stats: [
      { value: "75%", label: "User Retention" },
      { value: "60%", label: "Workout Consistency" },
      { value: "80%", label: "User Satisfaction" },
    ],
  },
  {
    id: "8",
    title: "Health & Fitness Tracker",
    description:
      "AI-powered fitness companion with workout tracking, nutrition planning, and progress analytics",
    shortDescription: "Personalizing fitness journeys with AI-driven insights",
    tags: ["React", "GraphQL", "MongoDB", "AI Integration", "TypeScript"],
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1200&h=800&fit=crop",
    slug: "remote-access-app",
    category: "AI/ML",
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    role: "AI UX Specialist & Full Stack Developer",
    impact: [
      "Increased user retention by 75% with personalized recommendations",
      "Improved workout consistency by 60% through motivational design",
      "Enhanced user satisfaction by 80% with intuitive progress tracking",
    ],
    stats: [
      { value: "75%", label: "User Retention" },
      { value: "60%", label: "Workout Consistency" },
      { value: "80%", label: "User Satisfaction" },
    ],
  }
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
    "Dashboard",
    "AI/ML",
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

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
