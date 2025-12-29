import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import {
  ExternalLink,
  Github,
  ArrowLeft,
  Calendar,
  Users,
  Target,
  Brain,
  Shield,
  Zap,
  MessageCircle,
  Cpu,
  Database,
  Code,
  Globe,
  Terminal,
  Server,
  FileCode,
  GitBranch,
  ChevronRight,
  Sparkles,
  Clock,
  CheckCircle,
  BarChart3,
  CpuIcon,
  DatabaseIcon,
  CodeIcon,
  Layers,
  FolderOpen,
  Key,
  Lock,
  Cloud,
  Download,
  Play,
  Pause,
  Maximize2,
  Copy,
  Check,
  Share2,
  Heart,
  Camera,
  Mic,
  Video,
  Upload,
  CheckCircle2,
  Eye,
  Users as UsersIcon,
  CloudUpload,
  ShieldCheck,
  Smartphone,
  Monitor,
  Wifi,
  Mail,
  MessageSquare,
  Image as ImageIcon,
  Music,
  Gamepad2,
  Rocket,
  Target as TargetIcon,
  BookOpen,
  GraduationCap,
  Keyboard,
  Globe as GlobeIcon,
  Smartphone as SmartphoneIcon,
  GamepadIcon,
  School,
  Lightbulb,
  Layers as LayersIcon,
  Code2,
  Palette,
  Cloud as CloudIcon,
  ArrowUpRight,
  ZoomIn,
} from "lucide-react";
import ImageViewer from "@/components/ImageViewer";
import { useParams, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";

const projectDetails = {
  "vowel-quest": {
    id: "2",
    title: "Vowel Quest – Space Shooter Edition",
    tagline: "Destroy alien words by shooting the correct vowels!",
    description: "Educational space shooter game that combines gaming with vowel recognition learning",
    fullDescription: `
      Vowel Quest is an innovative educational space shooter game designed to make learning vowels 
      exciting and engaging. Players navigate a spacecraft through space, destroying alien words by 
      shooting the missing vowels. The game progressively unlocks university departments, blending 
      language learning with academic exploration in an action-packed gaming experience.
    `,
    tags: ["HTML5 Canvas", "CSS3", "JavaScript", "Educational Game", "Responsive Design", "60fps", "Mobile-Optimized"],
    images: [
      "https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=1200&h=800&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=1200&h=800&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1534423861386-85a16f5d13fd?w=1200&h=800&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1200&h=800&fit=crop&auto=format"
    ],
    slug: "vowel-quest",
    category: "Educational Game / Web App",
    liveUrl: "https://vowel-shooting.netlify.app/",
    githubUrl: "https://github.com/thiyo-de/Vowel-Typing-Game.git",
    featured: true,
    role: "Full Stack Developer & Game Designer",
    duration: "4 weeks",
    teamSize: "Solo Developer",

    techStack: [
      { name: "HTML5 Canvas", icon: Code, color: "text-cyan-500" },
      { name: "CSS3", icon: Palette, color: "text-blue-500" },
      { name: "Vanilla JavaScript", icon: Code2, color: "text-yellow-500" },
      { name: "Responsive Design", icon: SmartphoneIcon, color: "text-purple-500" },
      { name: "60fps Game Engine", icon: Zap, color: "text-green-500" },
      { name: "Netlify Hosting", icon: CloudIcon, color: "text-orange-500" },
      { name: "Mobile Optimized", icon: Smartphone, color: "text-pink-500" },
      { name: "No Dependencies", icon: LayersIcon, color: "text-red-500" }
    ],

    metrics: [
      { label: "Game Size", value: "200KB", description: "Ultra lightweight", icon: Download },
      { label: "Performance", value: "60fps", description: "Smooth gameplay", icon: Zap },
      { label: "Departments", value: "10", description: "Unlockable", icon: GraduationCap },
      { label: "Vowels", value: "5", description: "A, E, I, O, U", icon: Keyboard },
      { label: "Spacecraft", value: "2", description: "Unique abilities", icon: Rocket },
      { label: "Power-ups", value: "4", description: "Game mechanics", icon: TargetIcon }
    ],

    coreFeatures: [
      {
        title: "Vowel-Based Shooting",
        description: "Shoot vowels to destroy alien words, improving vowel recognition skills",
        icon: TargetIcon,
        color: "bg-blue-500/10 text-blue-500",
        examples: [
          "Press A, E, I, O, U to shoot",
          "Destroy words by hitting missing vowels",
          "Real-time vowel recognition feedback",
          "Progressive difficulty scaling"
        ]
      },
      {
        title: "Educational Department Unlocking",
        description: "Unlock 10 university departments through gameplay progression",
        icon: GraduationCap,
        color: "bg-pink-500/10 text-pink-500",
        examples: [
          "Admissions Department",
          "Engineering Faculty",
          "Education Department",
          "Agriculture School"
        ]
      },
      {
        title: "Responsive Gameplay",
        description: "Fully responsive design supporting both desktop and mobile devices",
        icon: Smartphone,
        color: "bg-yellow-500/10 text-yellow-500",
        examples: [
          "Desktop: Arrow keys + keyboard",
          "Mobile: Touch controls",
          "Adaptive canvas scaling",
          "Touch-friendly UI elements"
        ]
      },
      {
        title: "Power-up System",
        description: "Collect power-ups to enhance gameplay with special abilities",
        icon: Zap,
        color: "bg-green-500/10 text-green-500",
        examples: [
          "Multi-shot power-up",
          "Shield protection",
          "Score multiplier",
          "Time freeze ability"
        ]
      }
    ],

    architecture: {
      description: "Lightweight vanilla JavaScript game engine with HTML5 Canvas rendering",
      components: [
        {
          name: "Game Engine Core",
          description: "Custom-built game loop with 60fps optimization and collision detection",
          technologies: ["JavaScript Game Loop", "RequestAnimationFrame", "Collision Detection", "State Management"],
          icon: Cpu
        },
        {
          name: "Canvas Rendering",
          description: "HTML5 Canvas based rendering with optimized drawing operations",
          technologies: ["HTML5 Canvas API", "Sprite Animation", "Particle Effects", "Optimized Rendering"],
          icon: Gamepad2
        },
        {
          name: "UI Layer",
          description: "Responsive CSS3 interface with game controls and department tracking",
          technologies: ["CSS3 Animations", "Flexbox/Grid", "Mobile Touch Events", "Responsive Design"],
          icon: Monitor
        },
        {
          name: "Deployment Layer",
          description: "Static hosting on Netlify with global CDN and automatic HTTPS",
          technologies: ["Netlify Hosting", "Global CDN", "SSL Certificates", "Continuous Deployment"],
          icon: Cloud
        }
      ]
    },

    projectStructure: [
      {
        path: "index.html",
        icon: FileCode,
        items: ["Main game page", "Canvas setup", "Meta tags"],
        files: 1
      },
      {
        path: "styles.css",
        icon: Palette,
        items: ["Game UI styling", "Responsive design", "Animations"],
        files: 1
      },
      {
        path: "script.js",
        icon: Code,
        items: ["Game engine", "Game objects", "Event handlers", "Game logic"],
        files: 1
      },
      {
        path: "assets/",
        icon: ImageIcon,
        items: ["Spacecraft sprites", "Alien word graphics", "Background images"],
        files: 20
      }
    ],

    gameplayExamples: {
      mechanics: [
        { input: "Press 'A' key", action: "Shoot vowel 'A' projectile", target: "Alien words", icon: TargetIcon },
        { input: "Arrow keys", action: "Move spacecraft", target: "Game navigation", icon: Gamepad2 },
        { input: "Destroy alien word", action: "Unlock department progress", target: "Educational goal", icon: GraduationCap }
      ],
      educational: [
        { input: "Word 'C_T'", challenge: "Missing vowel?", solution: "A", department: "Admissions" },
        { input: "Word 'ENGIN__RING'", challenge: "Missing vowel?", solution: "E", department: "Engineering" },
        { input: "Word '__UCATION'", challenge: "Missing vowel?", solution: "E", department: "Education" }
      ]
    },

    deployment: [
      { platform: "Netlify", command: "Drag & drop deployment", complexity: "Easy", icon: Cloud },
      { platform: "GitHub Pages", command: "git push origin main", complexity: "Easy", icon: GitBranch },
      { platform: "Vercel", command: "vercel --prod", complexity: "Easy", icon: CloudIcon },
      { platform: "Manual Hosting", command: "Upload static files", complexity: "Basic", icon: Upload }
    ],

    educationalFeatures: [
      { feature: "Vowel recognition practice", icon: BookOpen },
      { feature: "University department learning", icon: School },
      { feature: "Quick decision making skills", icon: Brain },
      { feature: "Keyboard familiarity", icon: Keyboard },
      { feature: "STEM interest development", icon: Lightbulb },
      { feature: "Progressive learning curve", icon: GraduationCap }
    ],

    departmentSpecs: [
      { department: "Admissions", word: "C_T", vowel: "A", unlock: "First level" },
      { department: "Engineering", word: "ENGIN__RING", vowel: "E", unlock: "Level 2" },
      { department: "Education", word: "__UCATION", vowel: "E", unlock: "Level 3" },
      { department: "Agriculture", word: "AGRIC__LTURE", vowel: "U", unlock: "Level 4" },
      { department: "Entrepreneurship", word: "ENTR__PRENEURSHIP", vowel: "E", unlock: "Boss level" }
    ],

    gameControls: {
      desktop: [
        { key: "Arrow Keys", action: "Move spacecraft" },
        { key: "A, E, I, O, U", action: "Shoot corresponding vowel" },
        { key: "Space", action: "Rapid fire mode" },
        { key: "P", action: "Pause game" }
      ],
      mobile: [
        { key: "Touch arrows ← →", action: "Move spacecraft" },
        { key: "Vowel buttons", action: "Shoot vowels" },
        { key: "Department progress", action: "View unlocks" },
        { key: "Swipe gestures", action: "Special moves" }
      ]
    },

    safetyFeatures: [
      { feature: "Educational content moderation", icon: Shield },
      { feature: "Age-appropriate vocabulary", icon: Lock },
      { feature: "Privacy-first design", icon: ShieldCheck },
      { feature: "Keyboard input sanitization", icon: Zap },
      { feature: "Cross-browser compatibility", icon: Globe },
      { feature: "Secure hosting configuration", icon: Key }
    ],

    mediaSpecs: [
      { type: "Spacecraft Sprites", formats: "PNG, SVG", maxSize: "1MB", features: "Animated" },
      { type: "Alien Word Graphics", formats: "PNG, WebP", maxSize: "500KB", features: "Pixel art style" },
      { type: "Background Images", formats: "JPEG, WebP", maxSize: "2MB", features: "Parallax scrolling" },
      { type: "Sound Effects", formats: "MP3, OGG", maxSize: "300KB", duration: "3s max" }
    ]
  }
};

const ProjectDetail_3 = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [activeImage, setActiveImage] = useState(0);
  const [copied, setCopied] = useState<string | null>(null);
  // Lightbox State
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const project = projectDetails[slug as keyof typeof projectDetails];

  const openLightbox = (imageSrc: string) => {
    setSelectedImage(imageSrc);
    setLightboxOpen(true);
  };

  const handleNavigation = (path: string) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate(path);
  };

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto">
            <FileCode className="w-8 h-8 text-muted-foreground" />
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
        {/* Texture Layer */}
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,0.08)_25%,rgba(68,68,68,0.08)_50%,transparent_50%,transparent_75%,rgba(68,68,68,0.08)_75%)] bg-[length:7px_7px] opacity-100" />

        {/* Radial Fade Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(12,14,18,0.9)_85%,rgba(12,14,18,1)_100%)] pointer-events-none" />
      </div>

      <div className="fixed inset-0 z-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 h-1 bg-primary z-50 origin-left"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.5 }}
        style={{ scaleX: 0.5 }} // Should be connected to actual scroll progress
      />

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
                <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-full h-14 px-8 text-base border-border bg-background/50 backdrop-blur-sm" disabled>
                  {/* Assuming no GitHub URL provided in data, based on '#' */}
                  <Github className="mr-2 w-5 h-5" />
                  Code Private
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

              {/* Floating elements */}
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
                    <div className="text-xs text-muted-foreground font-grotesk uppercase">Physics</div>
                    <div className="font-bold font-clash">60 FPS Engine</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Metrics Section (Full width strip) */}
      <section className="border-y border-border/40 bg-card/30 backdrop-blur-sm relative z-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 divide-x divide-border/40">
            {project.metrics.map((metric, i) => (
              <div key={i} className="px-4 py-6 sm:py-8 text-center group hover:bg-primary/5 transition-colors">
                <metric.icon className="w-5 h-5 mx-auto mb-3 text-muted-foreground group-hover:text-primary transition-colors" />
                <div className="font-clash font-bold text-2xl sm:text-3xl mb-1">{metric.value}</div>
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

            {/* Sticky Sidebar (Table of Contents / Navigation) */}
            <div className="hidden lg:block lg:col-span-3">
              <div className="sticky top-24 space-y-8">
                <div>
                  <h3 className="font-clash font-bold text-lg mb-4">Project Overview</h3>
                  <nav className="space-y-3">
                    <a href="#about" className="block text-sm text-muted-foreground hover:text-primary transition-colors">About the Project</a>
                    <a href="#features" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Core Features</a>
                    <a href="#tech" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Technology Stack</a>
                    <a href="#gallery" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Live Gallery</a>
                    <a href="#gameplay" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Gameplay Mechanics</a>
                  </nav>
                </div>

                <div className="p-6 rounded-2xl bg-secondary/30 border border-border">
                  <h4 className="font-bold text-sm mb-3 flex items-center gap-2">
                    <Download className="w-4 h-4" /> Download Package
                  </h4>
                  <p className="text-xs text-muted-foreground mb-4">Get the full project source code and assets.</p>
                  <Button size="sm" variant="outline" className="w-full" asChild>
                    <a href={`${project.githubUrl}/archive/refs/heads/main.zip`} download>Download ZIP</a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="lg:col-span-9 space-y-20 lg:space-y-32">

              {/* Mobile Download Package (Visible on < lg screens) */}
              <div className="lg:hidden p-6 rounded-2xl bg-secondary/30 border border-border mb-8">
                <h4 className="font-bold text-sm mb-3 flex items-center gap-2">
                  <Download className="w-4 h-4" /> Download Package
                </h4>
                <p className="text-xs text-muted-foreground mb-4">Get the full project source code and assets.</p>
                <Button size="sm" variant="outline" className="w-full" asChild>
                  <a href={`${project.githubUrl}/archive/refs/heads/main.zip`} download>Download ZIP</a>
                </Button>
              </div>

              {/* About / description */}
              <div id="about" className="space-y-6">
                <span className="font-grotesk text-xs tracking-[0.3em] text-primary uppercase">Context</span>
                <h2 className="font-clash font-bold text-3xl sm:text-4xl">The Challenge</h2>
                <p className="font-satoshi text-lg leading-relaxed text-muted-foreground">
                  {project.fullDescription}
                </p>
                <div className="grid sm:grid-cols-2 gap-4 pt-4">
                  {project.coreFeatures.slice(0, 2).map((feature, i) => (
                    <div key={i} className="p-4 rounded-xl bg-muted/30 border border-border/50">
                      <h4 className="font-bold mb-2 flex items-center gap-2">
                        <feature.icon className="w-4 h-4 text-primary" /> {feature.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bento Grid Features */}
              <div id="features" className="space-y-8">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                  <div>
                    <span className="font-grotesk text-xs tracking-[0.3em] text-primary uppercase">Gameplay</span>
                    <h2 className="font-clash font-bold text-3xl sm:text-4xl mt-2">Core Mechanics</h2>
                  </div>
                  <p className="max-w-md text-muted-foreground text-sm sm:text-right">
                    Educational gaming elements blended with arcade-style shooting action.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {project.coreFeatures.map((feature, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ y: -5 }}
                      className={cn(
                        "p-6 rounded-3xl bg-card border border-border/50 hover:border-primary/50 transition-colors shadow-sm",
                        i === 0 || i === 3 ? "md:col-span-2" : "md:col-span-1"
                      )}
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

              {/* Tech Stack Marquee / Grid */}
              <div id="tech" className="space-y-8">
                <span className="font-grotesk text-xs tracking-[0.3em] text-primary uppercase">Engine</span>
                <h2 className="font-clash font-bold text-3xl sm:text-4xl">Technical Architecture</h2>

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
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] opacity-30" />
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
                  <h2 className="font-clash font-bold text-3xl sm:text-4xl">Game Screenshots</h2>
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
                  <div className="absolute inset-0 z-20 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100 pointer-events-none">
                    <div className="bg-background/80 backdrop-blur-md px-4 py-2 rounded-full border border-border/50 flex items-center gap-2 font-satoshi font-medium">
                      <ZoomIn className="w-4 h-4" /> View Fullscreen
                    </div>
                  </div>
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
                  <div className="absolute bottom-6 left-6 right-6 flex justify-center gap-2">
                    {project.images.map((_, i) => (
                      <div
                        key={i}
                        onClick={() => setActiveImage(i)}
                        className={cn(
                          "w-2 h-2 rounded-full cursor-pointer transition-all",
                          i === activeImage ? "bg-white w-8" : "bg-white/50 hover:bg-white"
                        )}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Gameplay Section */}
              <div id="gameplay" className="space-y-8">
                <h2 className="font-clash font-bold text-3xl sm:text-4xl">How to Play</h2>
                <div className="bg-[#0c0e12] rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
                  <div className="p-6">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="font-bold text-xl mb-4">Controls</h3>
                        <ul className="space-y-4">
                          {project.gameControls.desktop.map((control, i) => (
                            <li key={i} className="flex justify-between items-center p-3 rounded-lg bg-white/5 border border-white/10">
                              <span className="font-mono text-xs text-primary">{control.key}</span>
                              <span className="text-sm text-muted-foreground">{control.action}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-bold text-xl mb-4">Educational Challenges</h3>
                        <div className="space-y-4">
                          {project.gameplayExamples.educational.map((edu, i) => (
                            <div key={i} className="p-3 rounded-lg bg-white/5 border border-white/10">
                              <div className="flex justify-between mb-2">
                                <span className="font-mono text-xs text-yellow-500">{edu.input}</span>
                                <Badge variant="outline" className="text-[10px]">{edu.department}</Badge>
                              </div>
                              <p className="text-sm text-muted-foreground">{edu.challenge} Solution: <span className="text-green-500 font-bold">{edu.solution}</span></p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
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
          <h3 className="font-clash font-bold text-3xl mb-6">Ready to see more?</h3>
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
      <ImageViewer
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        imageSrc={selectedImage}
        alt="Project Gallery Image"
      />
    </div>
  );
};

export default ProjectDetail_3;