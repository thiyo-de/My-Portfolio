import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ExternalLink,
  Github,
  ArrowLeft,
  Server,
  Database,
  Code as CodeIcon,
  Brain,
  ShieldCheck,
  Zap,
  MessageCircle,
  Music,
  Terminal,
  Cloud,
  Download,
  CheckCircle,
  BarChart3,
  Cpu,
  Monitor,
  Settings,
  Layers,
  Sparkles,
  ArrowUpRight,
  ZoomIn,
  Copy,
  Check,
  Maximize2,
  FolderOpen,
  Key,
  Target
} from "lucide-react";
import ImageViewer from "@/components/ImageViewer";
import { useParams, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";

const projectDetails = {
  "montfort-school-ai-chatbot-system": {
    id: "9",
    title: "Montfort AI Admin Dashboard",
    tagline: "Centralized Control Center for School AI Interactions",
    description: "A powerful, no-code admin interface for managing the Montfort AI Chatbot's knowledge base, analyzing student queries, and monitoring system health.",
    fullDescription: `
      The Montfort AI Admin Dashboard is the brain behind the school's intelligent assistant. It empowers staff to completely control the AI's behavior without writing a single line of code.
      
      Designed for ease of use, it allows administrators to create and edit intents, manage the vector database, and visualize real-time usage metrics. This system bridges the gap between complex RAG (Retrieval-Augmented Generation) technology and everyday school administration, ensuring the chatbot always provides accurate, up-to-date information.
    `,
    tags: ["Admin Panel", "Dashboard", "CMS", "Supabase", "React", "Analytics"],
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop", // Dashboard/Analytics
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop", // Data/Charts
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1200&h=800&fit=crop"  // Control/Database
    ],
    slug: "montfort-school-ai-chatbot-system",
    category: "Admin System / SaaS",
    liveUrl: "https://montfort-chatbot-admin-panel.netlify.app/",
    githubUrl: "https://github.com/thiyo-de/Chatbot-with-admin-panel-AI-Intergration-",
    featured: true,
    role: "Lead Architect & Developer",
    duration: "Ongoing",
    teamSize: "Core Team",

    techStack: [
      { name: "Admin Panel", icon: Settings, color: "text-blue-500" },
      { name: "Supabase", icon: Database, color: "text-green-400" },
      { name: "React", icon: CodeIcon, color: "text-blue-400" },
      { name: "Charts.js", icon: BarChart3, color: "text-orange-500" },
      { name: "Node.js", icon: Server, color: "text-green-500" },
      { name: "Vector DB", icon: Database, color: "text-purple-500" },
      { name: "Auth0", icon: Key, color: "text-red-500" },
      { name: "WebSockets", icon: Zap, color: "text-pink-500" }
    ],

    metrics: [
      { label: "Control", value: "No-Code", description: "Intent Management", icon: Settings },
      { label: "Safety", value: "Audit Logs", description: "Track All Changes", icon: ShieldCheck },
      { label: "Efficiency", value: "Bulk Actions", description: "JSON Import/Export", icon: Layers },
      { label: "Data", value: "Real-Time", description: "Live Analytics", icon: BarChart3 },
      { label: "Security", value: "RBAC", description: "Role-Based Access", icon: Key },
      { label: "Uptime", value: "99.9%", description: "System Reliability", icon: Server }
    ],

    coreFeatures: [
      {
        title: "Intent Management CMS",
        description: "A rich-text editor interface for creating, updating, and training the AI's question-answer pairs instantly.",
        icon: Settings,
        color: "bg-blue-500/10 text-blue-500",
        examples: ["Visual Editor", "Version History", "Draft Mode"]
      },
      {
        title: "Live Knowledge Base",
        description: "Direct control over the Supabase vector store, allowing staff to 'teach' the AI new information in seconds.",
        icon: Database,
        color: "bg-green-500/10 text-green-500",
        examples: ["Vector Sync", "Embedding Status", "Semantic Search"]
      },
      {
        title: "Analytics & Monitoring",
        description: "Comprehensive dashboards showing query volume, popular topics, and failed responses for improvement.",
        icon: BarChart3,
        color: "bg-orange-500/10 text-orange-500",
        examples: ["Query Heatmaps", "Response Times", "User Feedback"]
      },
      {
        title: "Data Quality Engine",
        description: "Automated validation tools (like the 9-Question Rule) to ensure high-quality training data.",
        icon: ShieldCheck,
        color: "bg-yellow-500/10 text-yellow-500",
        examples: ["Duplicate Detection", "Syntax Validation", "Consistency Checks"]
      }
    ],

    architecture: {
      description: "A robust 3-tier architecture separating interface, application logic, and data/AI processing.",
      components: [
        {
          name: "Frontend Widget",
          description: "Vanilla JS/CSS/HTML5 client",
          technologies: ["JS", "CSS3", "HTML5"],
          icon: Monitor
        },
        {
          name: "Admin Panel",
          description: "Comprehensive CMS for intent management",
          technologies: ["Dashboard", "Editor", "Import"],
          icon: Settings
        },
        {
          name: "Backend API",
          description: "Node.js Express Server",
          technologies: ["REST API", "RAG Pipeline", "Auth"],
          icon: Server
        },
        {
          name: "Database",
          description: "Supabase (PostgreSQL + pgvector)",
          technologies: ["Intents", "Vectors", "Logs"],
          icon: Database
        }
      ]
    },

    projectStructure: [
      {
        path: "frontend/",
        icon: Monitor,
        items: ["widget.js", "widget.css", "config.js", "sounds/"],
        files: 4
      },
      {
        path: "backend/",
        icon: Server,
        items: ["server.js", "routes/", "services/", ".env"],
        files: 5
      },
      {
        path: "admin/",
        icon: Settings,
        items: ["index.html", "js/", "css/", "assets/"],
        files: 4
      },
      {
        path: "supabase/",
        icon: Database,
        items: ["migrations/", "schema.sql", "seed.sql"],
        files: 3
      }
    ],

    apiExamples: [
      {
        endpoint: "POST /api/chat",
        description: "Process user queries via RAG pipeline",
        method: "POST",
        request: `{
  "message": "What are the hostel timings?",
  "session_id": "user-session-123"
}`,
        response: `{
  "answer": "The hostel gates close at 6:00 PM...",
  "sources": ["hostel-rules-doc"],
  "confidence": 0.92
}`
      },
      {
        endpoint: "POST /api/publish",
        description: "Generate embeddings for drafted intents",
        method: "POST",
        request: `{
  "intent_id": "uuid-v4",
  "action": "publish"
}`,
        response: `{
  "status": "success",
  "vectors_created": 9,
  "timestamp": "2024-12-19T10:00:00Z"
}`
      }
    ],

    deployment: [
      { platform: "Supabase", command: "Database Hosting", complexity: "Setup", icon: Database },
      { platform: "Node.js", command: "npm start", complexity: "Easy", icon: Server },
      { platform: "Netlify", command: "Frontend Hosting", complexity: "Easy", icon: Cloud },
      { platform: "Docker", command: "Optional", complexity: "Medium", icon: Download }
    ]
  }
};

const ProjectDetail_MontfortAdmin = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [activeImage, setActiveImage] = useState(0);
  const [activeTab, setActiveTab] = useState("overview");

  // Lightbox State
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  // Default to the specific project if slug matches or generic fallback
  const project = projectDetails["montfort-school-ai-chatbot-system"];

  const openLightbox = (imageSrc: string) => {
    setSelectedImage(imageSrc);
    setLightboxOpen(true);
  };

  const handleNavigation = (path: string) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate(path);
  };

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto">
            <CodeIcon className="w-8 h-8 text-muted-foreground" />
          </div>
          <h1 className="font-clash font-bold text-2xl">Project not found</h1>
          <Button onClick={() => handleNavigation("/work-Page")}>
            <ArrowLeft className="mr-2 w-4 h-4" /> Back to Work
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen text-foreground overflow-x-hidden">
      {/* Background Elements */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,0.08)_25%,rgba(68,68,68,0.08)_50%,transparent_50%,transparent_75%,rgba(68,68,68,0.08)_75%)] bg-[length:7px_7px] opacity-100" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(12,14,18,0.9)_85%,rgba(12,14,18,1)_100%)] pointer-events-none" />
      </div>

      <div className="fixed inset-0 z-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

      {/* Hero Section */}
      <section className="relative z-10 min-h-[85vh] flex flex-col justify-center pt-20 md:pt-32 pb-12 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Button
              variant="ghost"
              className="gap-2 text-muted-foreground hover:text-foreground mb-8 pl-0 hover:bg-transparent"
              onClick={() => handleNavigation("/work-Page")}
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Portfolio
            </Button>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Hero Text */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge variant="outline" className="font-grotesk text-sm py-1 px-3 border-primary/20 bg-primary/5 text-primary">
                    {project.category}
                  </Badge>
                  {project.featured && (
                    <Badge variant="default" className="font-grotesk text-sm py-1 px-3 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 border-0">
                      <Sparkles className="w-3 h-3 mr-1" /> Featured Project
                    </Badge>
                  )}
                </div>

                <h1 className="font-clash font-black text-5xl sm:text-6xl lg:text-7xl leading-[0.9] tracking-tight mb-6">
                  {project.title}
                </h1>

                <p className="font-satoshi text-xl sm:text-2xl text-muted-foreground leading-relaxed max-w-xl">
                  {project.tagline}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button size="lg" className="w-full sm:w-auto rounded-full h-14 px-8 text-base bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    Live Demo
                    <ArrowUpRight className="ml-2 w-5 h-5" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-full h-14 px-8 text-base border-border bg-background/50 backdrop-blur-sm" asChild>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 w-5 h-5" />
                    Source Code
                  </a>
                </Button>
              </motion.div>

              {/* Quick Stats Grid */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-8 border-t border-border/40"
              >
                <div>
                  <div className="font-grotesk text-xs text-muted-foreground uppercase tracking-wider mb-1">Role</div>
                  <div className="font-satoshi font-medium">{project.role}</div>
                </div>
                <div>
                  <div className="font-grotesk text-xs text-muted-foreground uppercase tracking-wider mb-1">Timeline</div>
                  <div className="font-satoshi font-medium">{project.duration}</div>
                </div>
                <div>
                  <div className="font-grotesk text-xs text-muted-foreground uppercase tracking-wider mb-1">Team</div>
                  <div className="font-satoshi font-medium">{project.teamSize}</div>
                </div>
              </motion.div>
            </div>

            {/* Hero Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 50 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-purple-500/30 blur-[100px] rounded-full opacity-50" />
              <div className="relative rounded-2xl overflow-hidden border border-border/50 shadow-2xl bg-card/10 backdrop-blur-xl group aspect-video">
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                />
                {/* Glass overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="flex gap-2">
                    {project.techStack.slice(0, 3).map((tech, i) => (
                      <div key={i} className="bg-background/80 backdrop-blur text-xs px-2 py-1 rounded border border-border/50 flex items-center gap-1">
                        <tech.icon className="w-3 h-3" /> {tech.name}
                      </div>
                    ))}
                    <span className="bg-background/80 backdrop-blur text-xs px-2 py-1 rounded border border-border/50">+{project.techStack.length - 3} more</span>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute -bottom-6 -right-6 bg-card border border-border p-4 rounded-xl shadow-xl hidden sm:block"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-green-500/20 rounded-lg">
                    <ShieldCheck className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground font-grotesk uppercase">Security</div>
                    <div className="font-bold font-clash">Production Ready</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="border-y border-border/40 bg-card/30 backdrop-blur-sm relative z-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 divide-x divide-border/40">
            {project.metrics.map((metric, i) => (
              <div key={i} className="px-4 py-6 sm:py-8 text-center group hover:bg-primary/5 transition-colors">
                <metric.icon className="w-5 h-5 mx-auto mb-3 text-muted-foreground group-hover:text-primary transition-colors" />
                <div className="font-clash font-bold text-lg sm:text-xl truncate mb-1">{metric.value}</div>
                <div className="font-satoshi text-xs text-muted-foreground">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="relative z-10 py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12">

            {/* Sticky Sidebar */}
            <div className="hidden lg:block lg:col-span-3">
              <div className="sticky top-24 space-y-8">
                <div>
                  <h3 className="font-clash font-bold text-lg mb-4">Project Overview</h3>
                  <nav className="space-y-3">
                    <a href="#about" className="block text-sm text-muted-foreground hover:text-primary transition-colors">About the System</a>
                    <a href="#features" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Core Features</a>
                    <a href="#tech" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Tech Stack</a>
                    <a href="#gallery" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Gallery</a>
                    <a href="#api" className="block text-sm text-muted-foreground hover:text-primary transition-colors">API Docs</a>
                  </nav>
                </div>

                <div className="p-6 rounded-2xl bg-secondary/30 border border-border">
                  <h4 className="font-clash font-bold text-sm mb-3 flex items-center gap-2">
                    <Download className="w-4 h-4" /> Download Package
                  </h4>
                  <p className="text-xs text-muted-foreground mb-4">Get the full project source code and assets.</p>
                  <Button size="sm" variant="outline" className="w-full" asChild>
                    <a href={`${project.githubUrl}/archive/refs/heads/main.zip`} download className="font-clash">Download ZIP</a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="lg:col-span-9 space-y-20 lg:space-y-32">

              {/* Mobile Download Package (Visible on < lg screens) */}
              <div className="lg:hidden p-6 rounded-2xl bg-secondary/30 border border-border mb-8">
                <h4 className="font-clash font-bold text-sm mb-3 flex items-center gap-2">
                  <Download className="w-4 h-4" /> Download Package
                </h4>
                <p className="text-xs text-muted-foreground mb-4">Get the full project source code and assets.</p>
                <Button size="sm" variant="outline" className="w-full" asChild>
                  <a href={`${project.githubUrl}/archive/refs/heads/main.zip`} download className="font-clash">Download ZIP</a>
                </Button>
              </div>

              {/* About */}
              <div id="about" className="space-y-6">
                <span className="font-grotesk text-xs tracking-[0.3em] text-primary uppercase">Overview</span>
                <h2 className="font-clash font-bold text-3xl sm:text-4xl">The Ecosystem</h2>
                <p className="font-satoshi text-lg leading-relaxed text-muted-foreground whitespace-pre-line">
                  {project.fullDescription}
                </p>
              </div>

              {/* Bento Grid Features */}
              <div id="features" className="space-y-8">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                  <div>
                    <span className="font-grotesk text-xs tracking-[0.3em] text-primary uppercase">Capabilities</span>
                    <h2 className="font-clash font-bold text-3xl sm:text-4xl mt-2">Core Features</h2>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {project.coreFeatures.map((feature, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ y: -5 }}
                      className="p-6 rounded-3xl bg-card border border-border/50 hover:border-primary/50 transition-colors shadow-sm"
                    >
                      <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center mb-6", feature.color)}>
                        <feature.icon className="w-6 h-6" />
                      </div>
                      <h3 className="font-clash font-bold text-xl mb-3">{feature.title}</h3>
                      <p className="text-muted-foreground font-satoshi leading-relaxed mb-6">
                        {feature.description}
                      </p>

                      <div className="space-y-2">
                        {feature.examples.map((ex, j) => (
                          <div key={j} className="flex items-center gap-2 text-xs font-mono bg-background/50 p-2 rounded border border-border/30">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                            {ex}
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div id="tech" className="space-y-8">
                <span className="font-grotesk text-xs tracking-[0.3em] text-primary uppercase">Technology</span>
                <h2 className="font-clash font-bold text-3xl sm:text-4xl">System Architecture</h2>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {project.techStack.map((tech, i) => (
                    <Card key={i} className="border-border/50 bg-card/30 hover:bg-card/80 transition-all hover:scale-105 duration-300">
                      <CardContent className="flex flex-col items-center justify-center p-6 text-center h-full gap-4">
                        <tech.icon className={cn("w-10 h-10", tech.color)} />
                        <span className="font-satoshi font-medium">{tech.name}</span>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Architecture Diagram */}
                <div className="mt-12 p-8 rounded-3xl bg-secondary/20 border border-border relative overflow-hidden">
                  <div className="relative z-10 grid gap-8 md:grid-cols-2">
                    {project.architecture.components.map((comp, i) => (
                      <div key={i} className="flex gap-4">
                        <div className="p-3 bg-background rounded-xl h-fit border border-border">
                          <comp.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-bold font-clash mb-1">{comp.name}</h4>
                          <p className="text-sm text-muted-foreground mb-2">{comp.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {comp.technologies.map((t, k) => (
                              <span key={k} className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-primary/10 text-primary">{t}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Gallery Slider */}
              <div id="gallery" className="space-y-8">
                <div className="flex items-center justify-between">
                  <h2 className="font-clash font-bold text-3xl sm:text-4xl">Interface Gallery</h2>
                  <div className="flex gap-2">
                    <Button size="icon" variant="outline" onClick={() => setActiveImage((prev) => (prev - 1 + project.images.length) % project.images.length)}>
                      <ArrowLeft className="w-4 h-4" />
                    </Button>
                    <Button size="icon" variant="outline" onClick={() => setActiveImage((prev) => (prev + 1) % project.images.length)}>
                      <ArrowLeft className="w-4 h-4 rotate-180" />
                    </Button>
                  </div>
                </div>

                <div className="relative aspect-video rounded-3xl overflow-hidden border border-border shadow-2xl cursor-zoom-in group" onClick={() => openLightbox(project.images[activeImage])}>
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={activeImage}
                      src={project.images[activeImage]}
                      initial={{ opacity: 0, scale: 1.05 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      className="absolute inset-0 w-full h-full object-cover"
                      alt="Project screenshot"
                    />
                  </AnimatePresence>

                  <div className="absolute inset-0 z-20 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100 pointer-events-none">
                    <div className="bg-background/80 backdrop-blur-md px-4 py-2 rounded-full border border-border/50 flex items-center gap-2 font-satoshi font-medium">
                      <ZoomIn className="w-4 h-4" /> View Fullscreen
                    </div>
                  </div>

                  <div className="absolute bottom-6 left-6 right-6 flex justify-center gap-2">
                    {project.images.map((_, i) => (
                      <div
                        key={i}
                        onClick={(e) => { e.stopPropagation(); setActiveImage(i); }}
                        className={cn(
                          "w-2 h-2 rounded-full cursor-pointer transition-all",
                          i === activeImage ? "bg-white w-8" : "bg-white/50 hover:bg-white"
                        )}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* API Section */}
              <div id="api" className="space-y-8">
                <h2 className="font-clash font-bold text-3xl sm:text-4xl">API Documentation</h2>

                <div className="bg-[#0c0e12] rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
                  <div className="flex items-center px-4 py-3 border-b border-white/10 bg-white/5">
                    <div className="flex gap-2 mr-4">
                      <div className="w-3 h-3 rounded-full bg-red-500/80" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                      <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    </div>
                    <div className="text-xs font-mono text-muted-foreground flex items-center gap-2">
                      <Terminal className="w-3 h-3" />
                      api/v1/chat-completions
                    </div>
                  </div>

                  <div className="p-0">
                    <Tabs defaultValue="request" className="w-full">
                      <div className="border-b border-white/5 px-4">
                        <TabsList className="bg-transparent h-12 p-0 space-x-6">
                          <TabsTrigger value="request" className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:shadow-none rounded-none px-0 text-sm">Request</TabsTrigger>
                          <TabsTrigger value="response" className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:shadow-none rounded-none px-0 text-sm">Response</TabsTrigger>
                        </TabsList>
                      </div>

                      <TabsContent value="request" className="p-6 font-mono text-sm text-green-400">
                        <pre className="whitespace-pre-wrap">{project.apiExamples[0].request}</pre>
                      </TabsContent>
                      <TabsContent value="response" className="p-6 font-mono text-sm text-blue-400">
                        <pre className="whitespace-pre-wrap">{project.apiExamples[0].response}</pre>
                      </TabsContent>
                    </Tabs>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Next Project CTA */}
      <section className="relative z-10 py-20 border-t border-border/40 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h3 className="font-clash font-bold text-3xl mb-6">Explore More Work</h3>
          <div className="flex justify-center gap-4">
            <Button size="lg" onClick={() => handleNavigation("/work-Page")}>
              Browse Portfolio
            </Button>
            <Button size="lg" variant="outline" onClick={() => handleNavigation("/contact-Page")}>
              Get in Touch
            </Button>
          </div>
        </div>
      </section>

      <ImageViewer
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        imageSrc={selectedImage}
        alt="Project Gallery Image"
      />
    </div>
  );
};

export default ProjectDetail_MontfortAdmin;
