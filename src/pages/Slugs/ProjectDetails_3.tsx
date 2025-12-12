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
  ServerIcon,
  Cloud as CloudIcon
} from "lucide-react";
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
    githubUrl: "#",
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
  const project = projectDetails[slug as keyof typeof projectDetails];

  const handleNavigation = (path: string) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate(path);
  };

  const handleContactClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate("/contact-Page");
  };

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % project.images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [project.images.length]);

  if (!project) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-background to-muted/30 pt-20 flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
            <Gamepad2 className="w-8 h-8 text-primary" />
          </div>
          <h1 className="font-clash font-bold text-2xl md:text-3xl mb-4">Project not found</h1>
          <p className="font-satoshi text-muted-foreground mb-8">
            The game you're looking for doesn't exist or has been moved.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <Button size="lg" className="gap-2" onClick={() => handleNavigation("/work-Page")}>
              <ArrowLeft className="w-4 h-4" />
              Back to Portfolio
            </Button>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Enhanced Background with Center Radial Fade */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        {/* Texture Layer */}
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,0.08)_25%,rgba(68,68,68,0.08)_50%,transparent_50%,transparent_75%,rgba(68,68,68,0.08)_75%)] bg-[length:7px_7px] opacity-100" />

        {/* Radial Fade Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(12,14,18,0.9)_85%,rgba(12,14,18,1)_100%)] pointer-events-none" />

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      </div>

      {/* Floating Back Button - Mobile Only */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed top-4 left-4 z-50 md:hidden"
      >
        <Button
          size="icon"
          variant="secondary"
          className="rounded-full backdrop-blur-sm bg-background/80 border"
          onClick={() => handleNavigation("/work-Page")}
        >
          <ArrowLeft className="w-4 h-4" />
        </Button>
      </motion.div>

      {/* Main Content Container */}
      <div className="relative z-10">
        {/* Hero Section - Starts immediately under navbar */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-blue-500/5" />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 lg:py-16 relative">
            {/* Back Button - Desktop */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="hidden md:block mb-8"
            >
              <Button
                variant="ghost"
                className="gap-2 group"
                onClick={() => handleNavigation("/work-Page")}
              >
                <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                Back to Portfolio
              </Button>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
              {/* Content */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6 lg:space-y-8"
              >
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="secondary" className="font-satoshi">
                      {project.category}
                    </Badge>
                    {project.featured && (
                      <Badge className="bg-gradient-to-r from-primary to-primary/80 text-white border-0">
                        <Sparkles className="w-3 h-3 mr-1" />
                        Featured
                      </Badge>
                    )}
                    <Badge variant="outline" className="font-satoshi">
                      {project.duration}
                    </Badge>
                  </div>

                  <div>
                    <h1 className="font-clash font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight">
                      {project.title}
                    </h1>
                    <p className="font-satoshi text-lg md:text-xl text-muted-foreground mt-3">
                      {project.tagline}
                    </p>
                  </div>

                  <p className="font-satoshi text-base md:text-lg leading-relaxed">
                    {project.fullDescription}
                  </p>
                </div>

                {/* Tech Stack Tags */}
                <div>
                  <h3 className="font-clash font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-3">
                    Tech Stack
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, index) => {
                      const Icon = tech.icon;
                      return (
                        <Badge
                          key={index}
                          variant="outline"
                          className="gap-2 px-3 py-2 backdrop-blur-sm bg-white/5 border-border/50"
                        >
                          <Icon className={`w-3.5 h-3.5 ${tech.color}`} />
                          <span className="font-satoshi">{tech.name}</span>
                        </Badge>
                      );
                    })}
                  </div>
                </div>

                {/* Project Meta */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-card/50 border">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Calendar className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-satoshi text-sm text-muted-foreground">Duration</p>
                      <p className="font-clash font-semibold">{project.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-card/50 border">
                    <div className="p-2 rounded-lg bg-blue-500/10">
                      <Users className="w-4 h-4 text-blue-500" />
                    </div>
                    <div>
                      <p className="font-satoshi text-sm text-muted-foreground">Team</p>
                      <p className="font-clash font-semibold">{project.teamSize}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-card/50 border">
                    <div className="p-2 rounded-lg bg-green-500/10">
                      <Target className="w-4 h-4 text-green-500" />
                    </div>
                    <div>
                      <p className="font-satoshi text-sm text-muted-foreground">Role</p>
                      <p className="font-clash font-semibold">{project.role}</p>
                    </div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1"
                  >
                    <Button
                      size="lg"
                      className="w-full gap-2 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary"
                      asChild
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <Play className="w-4 h-4" />
                        Play Game
                        <ExternalLink className="w-3 h-3 ml-1" />
                      </a>
                    </Button>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1"
                  >
                    <Button
                      variant="outline"
                      size="lg"
                      className="w-full gap-2"
                      onClick={() => {
                        navigator.clipboard.writeText("https://github.com/yourusername/vowel-quest");
                        alert("GitHub link copied to clipboard!");
                      }}
                    >
                      <Github className="w-4 h-4" />
                      Source Code
                    </Button>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="sm:flex-1"
                  >
                    <Button
                      variant="secondary"
                      size="lg"
                      className="w-full gap-2"
                      asChild
                    >
                      <a href="#game-demo" onClick={(e) => {
                        e.preventDefault();
                        alert("Game demo available on the live site!");
                      }}>
                        <Gamepad2 className="w-4 h-4" />
                        Try Demo
                      </a>
                    </Button>
                  </motion.div>
                </div>
              </motion.div>

              {/* Hero Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, rotateX: 10 }}
                animate={{ opacity: 1, scale: 1, rotateX: 0 }}
                transition={{ delay: 0.2 }}
                className="relative"
              >
                <div className="relative rounded-2xl lg:rounded-3xl overflow-hidden border border-border/50 shadow-2xl shadow-primary/10">
                  <div className="aspect-[4/3] relative">
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={activeImage}
                        src={project.images[activeImage]}
                        alt={project.title}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </AnimatePresence>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center justify-between">
                        <Badge className="bg-background/90 backdrop-blur-sm border-0 px-3 py-1.5">
                          <Gamepad2 className="w-3 h-3 mr-1.5" />
                          Educational Space Shooter
                        </Badge>
                        <div className="flex gap-1">
                          {project.images.map((_, idx) => (
                            <button
                              key={idx}
                              onClick={() => setActiveImage(idx)}
                              className={cn(
                                "w-2 h-2 rounded-full transition-all",
                                idx === activeImage
                                  ? "bg-primary w-6"
                                  : "bg-white/50 hover:bg-white"
                              )}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Image Thumbnails */}
                <div className="flex gap-3 mt-4 overflow-x-auto pb-2">
                  {project.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImage(idx)}
                      className={cn(
                        "relative flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all",
                        idx === activeImage
                          ? "border-primary ring-2 ring-primary/20"
                          : "border-transparent hover:border-border"
                      )}
                    >
                      <img
                        src={img}
                        alt={`Preview ${idx + 1}`}
                        className="w-20 h-14 object-cover"
                      />
                    </button>
                  ))}
                </div>

                {/* Game Model Image */}
                <div className="mt-8 rounded-xl border bg-card/50 p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <Layers className="w-5 h-5 text-primary" />
                    <h4 className="font-clash font-semibold">Game Architecture Model</h4>
                  </div>
                  <div className="relative rounded-lg overflow-hidden border">
                    <img 
                      src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&h=400&fit=crop&auto=format"
                      alt="Game Architecture"
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                      <Badge className="bg-white/90 text-black border-0">
                        <Code className="w-3 h-3 mr-1.5" />
                        Game Flow Diagram
                      </Badge>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Main Content with Enhanced Background */}
        <section className="relative py-12 md:py-20 bg-background">
          {/* Enhanced Background */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Texture Layer */}
            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,0.08)_25%,rgba(68,68,68,0.08)_50%,transparent_50%,transparent_75%,rgba(68,68,68,0.08)_75%)] bg-[length:7px_7px] opacity-100" />

            {/* Radial Fade Overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(12,14,18,0.9)_85%,rgba(12,14,18,1)_100%)] pointer-events-none" />
          </div>

          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

          {/* Content Container */}
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
              {/* Left Column - Main Content */}
              <div className="lg:col-span-2 space-y-12 lg:space-y-16">
                {/* Performance Metrics */}
                <motion.section
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  className="space-y-6"
                >
                  <div>
                    <h2 className="font-clash font-bold text-2xl md:text-3xl mb-2">
                      Game Performance
                    </h2>
                    <p className="font-satoshi text-muted-foreground">
                      High-performance metrics ensuring smooth gameplay and educational effectiveness
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {project.metrics.map((metric, index) => {
                      const Icon = metric.icon;
                      return (
                        <Card
                          key={index}
                          className="group hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
                        >
                          <CardContent className="p-5">
                            <div className="flex items-start justify-between mb-4">
                              <div className="p-2 rounded-lg bg-primary/10 group-hover:scale-110 transition-transform">
                                <Icon className="w-5 h-5 text-primary" />
                              </div>
                              <ChevronRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                            <div className="space-y-1">
                              <div className="font-clash font-bold text-2xl md:text-3xl">
                                {metric.value}
                              </div>
                              <h3 className="font-clash font-semibold">{metric.label}</h3>
                              <p className="font-satoshi text-sm text-muted-foreground">
                                {metric.description}
                              </p>
                            </div>
                          </CardContent>
                        </Card>
                      );
                    })}
                  </div>
                </motion.section>

                {/* Core Features */}
                <motion.section
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  className="space-y-6"
                >
                  <div>
                    <h2 className="font-clash font-bold text-2xl md:text-3xl mb-2">
                      Game Capabilities
                    </h2>
                    <p className="font-satoshi text-muted-foreground">
                      Comprehensive features for creating engaging educational gaming experiences
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    {project.coreFeatures.map((feature, index) => {
                      const Icon = feature.icon;
                      return (
                        <Card
                          key={index}
                          className="group hover:shadow-lg transition-all duration-300"
                        >
                          <CardContent className="p-6">
                            <div className="flex items-start gap-4">
                              <div className={`p-3 rounded-xl ${feature.color}`}>
                                <Icon className="w-6 h-6" />
                              </div>
                              <div className="flex-1">
                                <h3 className="font-clash font-bold text-lg mb-2">
                                  {feature.title}
                                </h3>
                                <p className="font-satoshi text-muted-foreground mb-4">
                                  {feature.description}
                                </p>
                                <div className="space-y-2">
                                  {feature.examples.map((example, idx) => (
                                    <div
                                      key={idx}
                                      className="p-2 rounded-lg bg-muted font-satoshi text-sm"
                                    >
                                      {example}
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      );
                    })}
                  </div>
                </motion.section>

                {/* Media Specifications */}
                <motion.section
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  className="space-y-6"
                >
                  <div>
                    <h2 className="font-clash font-bold text-2xl md:text-3xl mb-2">
                      Media Specifications
                    </h2>
                    <p className="font-satoshi text-muted-foreground">
                      Supported formats and specifications for game assets
                    </p>
                  </div>

                  <Card>
                    <CardContent className="p-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        {project.mediaSpecs.map((spec, index) => (
                          <div key={index} className="space-y-3">
                            <div className="flex items-center gap-3">
                              {spec.type === "Spacecraft Sprites" && <ImageIcon className="w-5 h-5 text-blue-500" />}
                              {spec.type === "Alien Word Graphics" && <ImageIcon className="w-5 h-5 text-purple-500" />}
                              {spec.type === "Background Images" && <ImageIcon className="w-5 h-5 text-red-500" />}
                              {spec.type === "Sound Effects" && <Music className="w-5 h-5 text-green-500" />}
                              <h3 className="font-clash font-bold">{spec.type}</h3>
                            </div>
                            <div className="space-y-2 font-satoshi text-sm">
                              <div className="flex justify-between">
                                <span className="text-muted-foreground">Formats:</span>
                                <span className="font-medium">{spec.formats}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-muted-foreground">Max Size:</span>
                                <span className="font-medium">{spec.maxSize}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-muted-foreground">Key Features:</span>
                                <span className="font-medium">{spec.features || spec.duration}</span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.section>

                {/* System Architecture */}
                <motion.section
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  className="space-y-6"
                >
                  <div>
                    <h2 className="font-clash font-bold text-2xl md:text-3xl mb-2">
                      Game Architecture
                    </h2>
                    <p className="font-satoshi text-muted-foreground">
                      {project.architecture.description}
                    </p>
                  </div>

                  <div className="space-y-4">
                    {project.architecture.components.map((component, index) => {
                      const Icon = component.icon;
                      return (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 }}
                          className="flex flex-col sm:flex-row items-start gap-4 p-4 rounded-xl border bg-card/50 hover:bg-card transition-colors"
                        >
                          <div className="flex-shrink-0 p-3 rounded-lg bg-primary/10">
                            <Icon className="w-5 h-5 text-primary" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-clash font-bold text-lg mb-2">
                              {component.name}
                            </h3>
                            <p className="font-satoshi text-muted-foreground mb-3">
                              {component.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {component.technologies.map((tech, idx) => (
                                <Badge
                                  key={idx}
                                  variant="secondary"
                                  className="font-satoshi"
                                >
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>

                  {/* Architecture Visualization */}
                  <Card className="mt-8">
                    <CardContent className="p-6">
                      <div className="text-center space-y-4">
                        <div className="inline-flex items-center justify-center p-3 rounded-full bg-gradient-to-r from-primary/20 to-blue-500/20">
                          <Terminal className="w-8 h-8 text-primary" />
                        </div>
                        <h3 className="font-clash font-bold text-xl">
                          Game Flow Architecture
                        </h3>
                        <p className="font-satoshi text-muted-foreground">
                          Input → Game Logic → Physics → Rendering → User Feedback
                        </p>
                        <div className="flex flex-wrap justify-center items-center gap-4 text-sm font-satoshi text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-500">
                              Input
                            </span>
                            <ChevronRight className="w-4 h-4" />
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-500">
                              Game Logic
                            </span>
                            <ChevronRight className="w-4 h-4" />
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-500">
                              Rendering
                            </span>
                            <ChevronRight className="w-4 h-4" />
                          </div>
                          <div className="px-3 py-1 rounded-full bg-primary/10 text-primary">
                            Feedback
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.section>

                {/* Tabs Section for Gameplay, Controls, etc. */}
                <motion.section
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  className="space-y-6"
                >
                  <Tabs defaultValue="gameplay" className="w-full">
                    <TabsList className="grid grid-cols-3 mb-6">
                      <TabsTrigger value="gameplay">Gameplay</TabsTrigger>
                      <TabsTrigger value="controls">Controls</TabsTrigger>
                      <TabsTrigger value="deployment">Deployment</TabsTrigger>
                    </TabsList>

                    <TabsContent value="gameplay" className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <h3 className="font-clash font-bold text-lg flex items-center gap-2">
                            <Gamepad2 className="w-5 h-5" />
                            Game Mechanics
                          </h3>
                          {project.gameplayExamples.mechanics.map((example, index) => {
                            const Icon = example.icon;
                            return (
                              <Card key={index}>
                                <CardContent className="p-4">
                                  <div className="space-y-3">
                                    <div>
                                      <p className="font-satoshi text-sm text-muted-foreground">
                                        Player Action
                                      </p>
                                      <p className="font-satoshi font-medium">
                                        {example.input}
                                      </p>
                                    </div>
                                    <Separator />
                                    <div>
                                      <p className="font-satoshi text-sm text-muted-foreground">
                                        Game Response
                                      </p>
                                      <p className="font-satoshi">{example.action}</p>
                                    </div>
                                    <Badge variant="secondary" className="mt-2">
                                      {example.target}
                                    </Badge>
                                  </div>
                                </CardContent>
                              </Card>
                            );
                          })}
                        </div>
                        <div className="space-y-4">
                          <h3 className="font-clash font-bold text-lg flex items-center gap-2">
                            <GraduationCap className="w-5 h-5" />
                            Educational Examples
                          </h3>
                          {project.gameplayExamples.educational.map((example, index) => (
                            <Card key={index}>
                              <CardContent className="p-4">
                                <div className="space-y-3">
                                  <div>
                                    <p className="font-satoshi text-sm text-muted-foreground">
                                      Challenge Word
                                    </p>
                                    <p className="font-satoshi font-medium">
                                      {example.input}
                                    </p>
                                  </div>
                                  <div>
                                    <p className="font-satoshi text-sm text-muted-foreground">
                                      Learning Objective
                                    </p>
                                    <p className="font-satoshi">{example.challenge}</p>
                                  </div>
                                  <div className="grid grid-cols-2 gap-2">
                                    <div>
                                      <p className="font-satoshi text-sm text-muted-foreground">
                                        Solution
                                      </p>
                                      <Badge className="bg-green-500/10 text-green-500">
                                        {example.solution}
                                      </Badge>
                                    </div>
                                    <div>
                                      <p className="font-satoshi text-sm text-muted-foreground">
                                        Unlocks
                                      </p>
                                      <Badge variant="outline">
                                        {example.department}
                                      </Badge>
                                    </div>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="controls" className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <h3 className="font-clash font-bold text-lg flex items-center gap-2">
                            <Monitor className="w-5 h-5" />
                            Desktop Controls
                          </h3>
                          <Card>
                            <CardContent className="p-6">
                              <div className="space-y-3">
                                {project.gameControls.desktop.map((control, index) => (
                                  <div key={index} className="flex items-center justify-between p-2 rounded-lg bg-muted/50">
                                    <code className="font-mono text-sm bg-background px-2 py-1 rounded">
                                      {control.key}
                                    </code>
                                    <span className="font-satoshi text-sm">{control.action}</span>
                                  </div>
                                ))}
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                        <div className="space-y-4">
                          <h3 className="font-clash font-bold text-lg flex items-center gap-2">
                            <Smartphone className="w-5 h-5" />
                            Mobile Controls
                          </h3>
                          <Card>
                            <CardContent className="p-6">
                              <div className="space-y-3">
                                {project.gameControls.mobile.map((control, index) => (
                                  <div key={index} className="flex items-center justify-between p-2 rounded-lg bg-muted/50">
                                    <span className="font-satoshi text-sm">{control.key}</span>
                                    <span className="font-satoshi text-sm">{control.action}</span>
                                  </div>
                                ))}
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="deployment" className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        {project.deployment.map((option, index) => {
                          const Icon = option.icon;
                          return (
                            <Card key={index}>
                              <CardContent className="p-6">
                                <div className="flex items-center gap-3 mb-4">
                                  <div className="p-2 rounded-lg bg-blue-500/10">
                                    <Icon className="w-5 h-5 text-blue-500" />
                                  </div>
                                  <div>
                                    <h3 className="font-clash font-bold">
                                      {option.platform}
                                    </h3>
                                    <Badge
                                      variant={
                                        option.complexity === "Easy"
                                          ? "default"
                                          : "outline"
                                      }
                                      className="mt-1"
                                    >
                                      {option.complexity}
                                    </Badge>
                                  </div>
                                </div>
                                <div className="space-y-2">
                                  <p className="font-satoshi text-sm text-muted-foreground">
                                    {option.platform === "Netlify" 
                                      ? "Deployment Method"
                                      : "Deployment Command"
                                    }
                                  </p>
                                  {option.platform === "Netlify" ? (
                                    <p className="font-satoshi p-3 rounded-lg bg-muted">
                                      Drag & drop deployment via Netlify dashboard
                                    </p>
                                  ) : (
                                    <div className="relative">
                                      <pre className="bg-muted p-3 rounded-lg text-xs overflow-x-auto font-mono">
                                        {option.command}
                                      </pre>
                                      <Button
                                        size="sm"
                                        variant="ghost"
                                        className="absolute right-2 top-2 h-6 w-6 p-0"
                                        onClick={() => copyToClipboard(option.command, option.platform)}
                                      >
                                        {copied === option.platform ? (
                                          <Check className="w-3 h-3" />
                                        ) : (
                                          <Copy className="w-3 h-3" />
                                        )}
                                      </Button>
                                    </div>
                                  )}
                                </div>
                              </CardContent>
                            </Card>
                          );
                        })}
                      </div>
                    </TabsContent>
                  </Tabs>
                </motion.section>
              </div>

              {/* Right Column - Sidebar */}
              <div className="space-y-8">
                {/* Project Structure */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  className="space-y-6"
                >
                  <h3 className="font-clash font-bold text-xl">Project Structure</h3>
                  <Card>
                    <CardContent className="p-4">
                      <div className="space-y-2">
                        {project.projectStructure.map((folder, index) => {
                          const Icon = folder.icon;
                          return (
                            <div
                              key={index}
                              className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer"
                            >
                              <div className="flex items-center gap-3">
                                <Icon className="w-4 h-4 text-muted-foreground" />
                                <div>
                                  <h4 className="font-clash font-semibold text-sm">
                                    {folder.path}
                                  </h4>
                                  <p className="font-satoshi text-xs text-muted-foreground">
                                    {folder.files} files
                                  </p>
                                </div>
                              </div>
                              <ChevronRight className="w-4 h-4 text-muted-foreground" />
                            </div>
                          );
                        })}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Safety & Compliance */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: 0.1 }}
                  className="space-y-6"
                >
                  <h3 className="font-clash font-bold text-xl flex items-center gap-2">
                    <Shield className="w-5 h-5 text-primary" />
                    Safety & Compliance
                  </h3>
                  <div className="space-y-3">
                    {project.safetyFeatures.map((item, index) => {
                      const Icon = item.icon;
                      return (
                        <div
                          key={index}
                          className="flex items-center gap-3 p-3 rounded-lg border bg-card/50"
                        >
                          <Icon className="w-4 h-4 text-primary" />
                          <span className="font-satoshi text-sm">{item.feature}</span>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>

                {/* Quick Stats */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: 0.2 }}
                  className="space-y-6"
                >
                  <h3 className="font-clash font-bold text-xl">Quick Stats</h3>
                  <Card>
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        {[
                          { label: "Project Duration", value: project.duration },
                          { label: "Team Size", value: project.teamSize },
                          { label: "Game Components", value: "50+" },
                          { label: "Code Lines", value: "1,000+" },
                          { label: "Departments", value: "10" },
                          { label: "Power-ups", value: "4" }
                        ].map((stat, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-between py-2 border-b last:border-0"
                          >
                            <span className="font-satoshi text-sm text-muted-foreground">
                              {stat.label}
                            </span>
                            <span className="font-clash font-semibold">
                              {stat.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Quick Links */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: 0.3 }}
                  className="space-y-4"
                >
                  <Button
                    variant="outline"
                    className="w-full gap-2"
                    onClick={handleContactClick}
                  >
                    <ExternalLink className="w-4 h-4" />
                    Start Similar Project
                  </Button>
                  <Button
                    variant="ghost"
                    className="w-full gap-2"
                    onClick={() => handleNavigation("/work-Page")}
                  >
                    <ArrowLeft className="w-4 h-4" />
                    View All Projects
                  </Button>
                  <div className="grid grid-cols-2 gap-2">
                    <Button
                      variant="secondary"
                      size="sm"
                      className="gap-2"
                      asChild
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <Globe className="w-3 h-3" />
                        Live Game
                      </a>
                    </Button>
                    <Button
                      variant="secondary"
                      size="sm"
                      className="gap-2"
                      onClick={() => {
                        navigator.clipboard.writeText("https://github.com/yourusername/vowel-quest");
                        alert("GitHub link copied to clipboard!");
                      }}
                    >
                      <Github className="w-3 h-3" />
                      Source Code
                    </Button>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="py-12 md:py-20 relative"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="bg-gradient-to-r from-primary/5 via-transparent to-blue-500/5 border-primary/20">
              <CardContent className="p-8 md:p-12 text-center">
                <div className="max-w-2xl mx-auto space-y-6">
                  <div className="inline-flex items-center justify-center p-3 rounded-full bg-gradient-to-r from-primary/20 to-blue-500/20">
                    <Gamepad2 className="w-8 h-8 text-primary" />
                  </div>
                  <h2 className="font-clash font-bold text-2xl md:text-3xl">
                    Ready to Create an Educational Game?
                  </h2>
                  <p className="font-satoshi text-muted-foreground">
                    Let's build engaging educational experiences that combine learning with fun, using modern web technologies and game design principles.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button
                        size="lg"
                        className="gap-2"
                        onClick={handleContactClick}
                      >
                        <ExternalLink className="w-4 h-4" />
                        Start a Project
                      </Button>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button
                        variant="outline"
                        size="lg"
                        className="gap-2"
                        onClick={() => handleNavigation("/work-Page")}
                      >
                        View More Work
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default ProjectDetail_3;