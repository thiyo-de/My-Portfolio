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
  Volume2,
  Gamepad2,
  Target as TargetIcon,
  Smartphone as SmartphoneIcon,
  MousePointer,
  Zap as ZapIcon,
  Headphones,
  Sparkles as SparklesIcon,
  Palette,
  Shield as ShieldIcon,
  TrendingUp,
  MousePointerClick,
  Touchpad,
  Smartphone as PhoneIcon,
  GitCommit,
  Crosshair,
  VolumeX,
  Settings,
  ArrowRight,
  Gamepad,
  Swords,
  Award,
  Trophy,
  Bolt,
  Crosshair as CrosshairIcon,
  SkipForward,
  SkipBack,
  FastForward,
  Rewind,
  Volume1,
  Music2,
  Headphones as HeadphonesIcon,
  Move,
  RotateCw,
  RotateCcw,
  Navigation,
  Compass,
  Wind,
  Feather,
  Sword,
  ShieldOff,
  ShieldAlert,
  ArrowUpRight,
  ArrowDownRight,
  ArrowLeftRight,
  ArrowUpDown,
  Target as TargetIcon2,
  Hexagon,
  Pentagon,
  Octagon,
  Circle,
  Square,
  Triangle,
  Star,
  Heart as HeartIcon,
  Shield as ShieldIcon2,
  Zap as ZapIcon2,
  Cloud as CloudIcon,
  Download as DownloadIcon,
  Upload as UploadIcon,
  RefreshCw,
  RefreshCcw,
  Rotate3d,
  Box,
  Package,
  Archive,
  Folder,
  FolderTree,
  File,
  FileText,
  FileCode as FileCodeIcon,
  FileJson,
  FileImage,
  FileAudio,
  FileVideo,
  FileArchive,
  FileSpreadsheet,
  FileSearch,
  FilePlus,
  FileMinus,
  FileX,
  FileCheck,
  FileWarning,
  FileQuestion,
  FileInput,
  FileOutput,
  FolderPlus,
  FolderMinus,
  FolderX,
  FolderCheck,
  FolderSearch,
  FolderGit,
  FolderGit2,
  FolderOpen as FolderOpenIcon,
  FolderTree as FolderTreeIcon
} from "lucide-react";
import { useParams, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";

const projectDetails = {
  "gamify-menu": {
    id: "2",
    title: "Gamify Menu",
    tagline: "Cinematic Gamified Website Navigation System",
    description: "Interactive bow-and-arrow navigation with floating menu icons",
    fullDescription: `
      A revolutionary website navigation system that transforms traditional menus into an immersive gaming experience. 
      Users interact using a bow-and-arrow mechanism to shoot floating menu icons, complete with dynamic sound effects, 
      visual feedback, and responsive design. This project redefines user engagement through gamification principles 
      and cinematic animations.
    `,
    tags: ["Gamification", "Interactive UI", "Canvas API", "JavaScript", "CSS Animations", "Sound Design", "Responsive Design", "Mobile First"],
    images: [
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1200&h=800&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1200&h=800&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&h=800&fit=crop&auto=format"
    ],
    slug: "gamify-menu",
    category: "UI/UX Design",
    liveUrl: "https://superb-gecko-26b001.netlify.app/",
    githubUrl: "https://github.com/yourusername/gamify-menu",
    featured: true,
    role: "Lead UI/UX Designer & Frontend Developer",
    duration: "2 months",
    teamSize: "Solo Developer",
    
    techStack: [
      { name: "HTML5 Canvas", icon: Code, color: "text-orange-500" },
      { name: "Vanilla JavaScript", icon: CodeIcon, color: "text-yellow-500" },
      { name: "CSS Animations", icon: Palette, color: "text-blue-500" },
      { name: "Web Audio API", icon: Volume2, color: "text-green-500" },
      { name: "SVG Graphics", icon: ImageIcon, color: "text-purple-500" },
      { name: "Responsive Design", icon: SmartphoneIcon, color: "text-pink-500" },
      { name: "Game Physics", icon: Gamepad2, color: "text-red-500" },
      { name: "Touch Events", icon: Touchpad, color: "text-cyan-500" }
    ],

    metrics: [
      { label: "Interaction Rate", value: "85% ↑", description: "Higher than traditional menus", icon: TrendingUp },
      { label: "Load Time", value: "< 1.2s", description: "Optimized performance", icon: Zap },
      { label: "Accuracy", value: "92.5%", description: "Target hit accuracy", icon: Target },
      { label: "FPS", value: "60", description: "Smooth animations", icon: BarChart3 },
      { label: "Devices", value: "3", description: "Mobile, Tablet, Desktop", icon: Smartphone },
      { label: "User Enjoyment", value: "96%", description: "Positive feedback rate", icon: Sparkles }
    ],

    coreFeatures: [
      {
        title: "Bow & Arrow Mechanics",
        description: "Realistic arrow physics with drag, velocity, and collision detection",
        icon: TargetIcon,
        color: "bg-primary/10 text-primary",
        examples: [
          "Hold & release for power control",
          "Trajectory prediction line",
          "Collision detection with icons"
        ]
      },
      {
        title: "Dynamic Sound System",
        description: "Context-aware sound effects with volume control and mute options",
        icon: Volume2,
        color: "bg-blue-500/10 text-blue-500",
        examples: [
          "Shooting, hitting, missing sounds",
          "Background ambiance",
          "Difficulty change feedback"
        ]
      },
      {
        title: "Intelligent Difficulty Modes",
        description: "Adaptive challenge levels with visual indicators and effects",
        icon: Brain,
        color: "bg-yellow-500/10 text-yellow-500",
        examples: [
          { level: "Beginner", icon: Shield, description: "Slow moving targets" },
          { level: "Intermediate", icon: Crosshair, description: "Moderate speed" },
          { level: "Expert", icon: Swords, description: "Fast, erratic movement" }
        ]
      },
      {
        title: "Visual Feedback System",
        description: "Particle effects, animations, and transitions for every interaction",
        icon: SparklesIcon,
        color: "bg-purple-500/10 text-purple-500",
        examples: [
          "Explosion particles on hit",
          "Difficulty change effects",
          "Glow effects on hover"
        ]
      }
    ],

    architecture: {
      description: "Event-driven architecture with game loop, physics engine, and responsive layer system",
      components: [
        {
          name: "Game Engine Core",
          description: "Manages game loop, physics calculations, and collision detection",
          technologies: ["RequestAnimationFrame", "Vector Math", "Bounds Checking"],
          icon: Cpu
        },
        {
          name: "Input Handler",
          description: "Unified input system for mouse, touch, and keyboard events",
          technologies: ["Pointer Events", "Touch Gestures", "Event Delegation"],
          icon: MousePointer
        },
        {
          name: "Audio Controller",
          description: "Manages Web Audio API for dynamic sound playback",
          technologies: ["AudioContext", "Spatial Audio", "Volume Mixing"],
          icon: Volume2
        },
        {
          name: "Responsive Renderer",
          description: "Adapts visuals and interactions for all screen sizes",
          technologies: ["CSS Grid", "Viewport Units", "Touch Optimization"],
          icon: Smartphone
        }
      ]
    },

    projectStructure: [
      { 
        path: "assets/", 
        icon: FolderOpenIcon, 
        items: ["arrow.svg", "compass.svg", "icon1.svg", "bg-music.mp3"],
        files: 12
      },
      { 
        path: "core/", 
        icon: FileCodeIcon, 
        items: ["gameEngine.js", "physics.js", "collision.js", "audioManager.js"],
        files: 8
      },
      { 
        path: "ui/", 
        icon: Palette, 
        items: ["menuManager.js", "difficultyController.js", "particleSystem.js"],
        files: 6
      },
      { 
        path: "styles/", 
        icon: Code, 
        items: ["animations.css", "responsive.css", "themes.css"],
        files: 5
      },
      { 
        path: "config/", 
        icon: Key, 
        items: ["settings.js", "constants.js", "controls.js"],
        files: 4
      }
    ],

    apiExamples: [
      {
        endpoint: "Game.init(config)",
        description: "Initialize game with custom settings",
        method: "JS",
        request: `{
  difficulty: 'intermediate',
  soundVolume: 0.8,
  menuIcons: 5,
  particleEffects: true
}`,
        response: `Game instance initialized successfully`
      },
      {
        endpoint: "Game.fireArrow(power, angle)",
        description: "Trigger arrow shooting with physics",
        method: "JS",
        request: `{
  power: 0.75,
  angle: 45,
  target: 'menu-icon-3'
}`,
        response: `{
  hit: true,
  score: 100,
  particles: 25,
  sound: 'hit.mp3'
}`
      }
    ],

    difficultyModes: [
      {
        level: "Beginner",
        icon: Shield,
        color: "text-green-500",
        description: "Slow moving targets for new users",
        speed: "1x",
        features: ["Large hit boxes", "Auto-aim assist", "Slow motion"]
      },
      {
        level: "Intermediate",
        icon: Crosshair,
        color: "text-yellow-500",
        description: "Balanced challenge for regular users",
        speed: "2x",
        features: ["Standard hit boxes", "No assist", "Normal speed"]
      },
      {
        level: "Expert",
        icon: Swords,
        color: "text-red-500",
        description: "High-speed challenge for experienced users",
        speed: "3x",
        features: ["Small hit boxes", "Moving targets", "Speed modifiers"]
      }
    ],

    usageExamples: {
      desktop: [
        { input: "Right click & hold", action: "Draw arrow back", icon: MousePointer },
        { input: "Release mouse", action: "Fire arrow", icon: ZapIcon },
        { input: "Click target button", action: "Open target menu", icon: TargetIcon }
      ],
      mobile: [
        { input: "Tap & hold screen", action: "Aim arrow", icon: Touchpad },
        { input: "Release finger", action: "Shoot arrow", icon: Upload },
        { input: "Tap brain button", action: "Change difficulty", icon: Brain }
      ]
    },

    deployment: [
      { platform: "Netlify", command: "netlify deploy --prod", complexity: "Easy", icon: Cloud },
      { platform: "Vercel", command: "vercel --prod", complexity: "Easy", icon: CloudIcon },
      { platform: "GitHub Pages", command: "gh-pages -d dist", complexity: "Easy", icon: DownloadIcon },
      { platform: "Static Hosting", command: "Upload dist folder", complexity: "Easy", icon: CloudUpload }
    ],

    compatibility: [
      { browser: "Chrome", version: "90+", status: "Full", icon: Globe },
      { browser: "Firefox", version: "88+", status: "Full", icon: Globe },
      { browser: "Safari", version: "14+", status: "Full", icon: Globe },
      { browser: "Edge", version: "91+", status: "Full", icon: Globe }
    ],

    mediaSpecs: [
      { type: "Audio Files", formats: "MP3, WAV", maxSize: "2MB", features: "Spatial audio", icon: Volume2 },
      { type: "SVG Graphics", formats: "SVG", maxSize: "50KB", features: "Vector scaling", icon: ImageIcon },
      { type: "Animations", formats: "CSS, JS", fps: "60", features: "Hardware accelerated", icon: Zap },
      { type: "Touch Input", maxPoints: "5", features: "Multi-touch support", icon: Touchpad }
    ]
  }
};

const ProjectDetails_6 = () => {
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
            <FileCode className="w-8 h-8 text-primary" />
          </div>
          <h1 className="font-clash font-bold text-2xl md:text-3xl mb-4">Project not found</h1>
          <p className="font-satoshi text-muted-foreground mb-8">
            The project you're looking for doesn't exist or has been moved.
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
      {/* Enhanced Background with Radial Pattern */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        {/* Game-like Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,black,transparent)]" />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        
        {/* Animated Particles Background */}
        <div className="absolute inset-0 opacity-5">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-primary rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${1 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
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
        {/* Hero Section */}
        <section className="relative pt-14 md:pt-24 lg:pt-36 overflow-hidden">
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
                        Live Demo
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
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" />
                        Source Code
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
                          Interactive UI Demo
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

                {/* Difficulty Modes Preview */}
                <div className="mt-8 rounded-xl border bg-card/50 p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <Brain className="w-5 h-5 text-primary" />
                    <h4 className="font-clash font-semibold">Difficulty Modes</h4>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {project.difficultyModes.map((mode, index) => {
                      const Icon = mode.icon;
                      return (
                        <div key={index} className="text-center p-2 rounded-lg border">
                          <Icon className={`w-4 h-4 mx-auto mb-1 ${mode.color}`} />
                          <p className="font-satoshi text-xs font-medium">{mode.level}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Main Content Section */}
        <section className="relative py-12 md:py-20 bg-background">
          {/* Background Pattern */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,0.08)_25%,rgba(68,68,68,0.08)_50%,transparent_50%,transparent_75%,rgba(68,68,68,0.08)_75%)] bg-[length:7px_7px] opacity-100" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(12,14,18,0.9)_85%,rgba(12,14,18,1)_100%)]" />
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
                      Game Performance Metrics
                    </h2>
                    <p className="font-satoshi text-muted-foreground">
                      Optimized for smooth gameplay across all devices
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

                {/* Difficulty Modes */}
                <motion.section
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  className="space-y-6"
                >
                  <div>
                    <h2 className="font-clash font-bold text-2xl md:text-3xl mb-2">
                      Intelligent Difficulty Modes
                    </h2>
                    <p className="font-satoshi text-muted-foreground">
                      Adaptive challenge levels for all user skill levels
                    </p>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4">
                    {project.difficultyModes.map((mode, index) => {
                      const Icon = mode.icon;
                      return (
                        <Card key={index} className="hover:shadow-lg transition-all duration-300">
                          <CardContent className="p-6">
                            <div className="flex flex-col items-center text-center space-y-4">
                              <div className={`p-3 rounded-full ${mode.color.replace('text-', 'bg-')}/10`}>
                                <Icon className={`w-6 h-6 ${mode.color}`} />
                              </div>
                              <div>
                                <h3 className="font-clash font-bold text-lg mb-1">
                                  {mode.level}
                                </h3>
                                <p className="font-satoshi text-sm text-muted-foreground mb-3">
                                  {mode.description}
                                </p>
                                <Badge variant="outline" className="mb-4">
                                  Speed: {mode.speed}
                                </Badge>
                              </div>
                              <div className="w-full space-y-2">
                                {mode.features.map((feature, idx) => (
                                  <div
                                    key={idx}
                                    className="flex items-center gap-2 text-sm"
                                  >
                                    <CheckCircle className="w-3 h-3 text-green-500" />
                                    <span className="font-satoshi">{feature}</span>
                                  </div>
                                ))}
                              </div>
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
                      Core Gameplay Features
                    </h2>
                    <p className="font-satoshi text-muted-foreground">
                      Immersive features that make navigation an exciting experience
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
                                      {typeof example === 'string' ? example : example.description}
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
                      Optimized media assets for performance and quality
                    </p>
                  </div>

                  <Card>
                    <CardContent className="p-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        {project.mediaSpecs.map((spec, index) => {
                          const Icon = spec.icon;
                          return (
                            <div key={index} className="space-y-3">
                              <div className="flex items-center gap-3">
                                <Icon className="w-5 h-5 text-blue-500" />
                                <h3 className="font-clash font-bold">{spec.type}</h3>
                              </div>
                              <div className="space-y-2 font-satoshi text-sm">
                                <div className="flex justify-between">
                                  <span className="text-muted-foreground">Formats:</span>
                                  <span className="font-medium">{spec.formats || "Multi-point"}</span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-muted-foreground">Max Size:</span>
                                  <span className="font-medium">{spec.maxSize || spec.maxPoints}</span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-muted-foreground">FPS/Features:</span>
                                  <span className="font-medium">{spec.fps || spec.features}</span>
                                </div>
                              </div>
                            </div>
                          );
                        })}
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
                      System Architecture
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
                          <Gamepad2 className="w-8 h-8 text-primary" />
                        </div>
                        <h3 className="font-clash font-bold text-xl">
                          Interactive Game Loop
                        </h3>
                        <p className="font-satoshi text-muted-foreground">
                          User Input → Physics Calculation → Collision Detection → Visual Feedback → Audio Response
                        </p>
                        <div className="flex flex-wrap justify-center items-center gap-4 text-sm font-satoshi text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <span className="px-3 py-1 rounded-full bg-primary/10 text-primary">
                              Input
                            </span>
                            <ChevronRight className="w-4 h-4" />
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-500">
                              Physics
                            </span>
                            <ChevronRight className="w-4 h-4" />
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-500">
                              Collision
                            </span>
                            <ChevronRight className="w-4 h-4" />
                          </div>
                          <div className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-500">
                            Feedback
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.section>

                {/* Tabs Section */}
                <motion.section
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  className="space-y-6"
                >
                  <Tabs defaultValue="controls" className="w-full">
                    <TabsList className="grid grid-cols-3 mb-6">
                      <TabsTrigger value="controls">Controls</TabsTrigger>
                      <TabsTrigger value="api">API</TabsTrigger>
                      <TabsTrigger value="deployment">Deployment</TabsTrigger>
                    </TabsList>

                    <TabsContent value="controls" className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <h3 className="font-clash font-bold text-lg flex items-center gap-2">
                            <MousePointer className="w-5 h-5" />
                            Desktop Controls
                          </h3>
                          {project.usageExamples.desktop.map((example, index) => {
                            const Icon = example.icon;
                            return (
                              <Card key={index}>
                                <CardContent className="p-4">
                                  <div className="space-y-3">
                                    <div className="flex items-center gap-2">
                                      <Icon className="w-4 h-4 text-muted-foreground" />
                                      <p className="font-satoshi text-sm text-muted-foreground">
                                        Input
                                      </p>
                                    </div>
                                    <p className="font-satoshi font-medium">
                                      {example.input}
                                    </p>
                                    <Separator />
                                    <div>
                                      <p className="font-satoshi text-sm text-muted-foreground">
                                        Action
                                      </p>
                                      <p className="font-satoshi">{example.action}</p>
                                    </div>
                                  </div>
                                </CardContent>
                              </Card>
                            );
                          })}
                        </div>
                        <div className="space-y-4">
                          <h3 className="font-clash font-bold text-lg flex items-center gap-2">
                            <PhoneIcon className="w-5 h-5" />
                            Mobile Controls
                          </h3>
                          {project.usageExamples.mobile.map((example, index) => {
                            const Icon = example.icon;
                            return (
                              <Card key={index}>
                                <CardContent className="p-4">
                                  <div className="space-y-3">
                                    <div className="flex items-center gap-2">
                                      <Icon className="w-4 h-4 text-muted-foreground" />
                                      <p className="font-satoshi text-sm text-muted-foreground">
                                        Input
                                      </p>
                                    </div>
                                    <p className="font-satoshi font-medium">
                                      {example.input}
                                    </p>
                                    <Separator />
                                    <div>
                                      <p className="font-satoshi text-sm text-muted-foreground">
                                        Action
                                      </p>
                                      <p className="font-satoshi">{example.action}</p>
                                    </div>
                                  </div>
                                </CardContent>
                              </Card>
                            );
                          })}
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="api" className="space-y-6">
                      <div className="space-y-4">
                        {project.apiExamples.map((api, index) => (
                          <Card key={index}>
                            <CardContent className="p-6">
                              <div className="flex items-center justify-between mb-4">
                                <div>
                                  <Badge className="bg-green-500/10 text-green-500 mb-2">
                                    {api.method}
                                  </Badge>
                                  <h3 className="font-clash font-bold">{api.endpoint}</h3>
                                  <p className="font-satoshi text-sm text-muted-foreground">
                                    {api.description}
                                  </p>
                                </div>
                                <Button
                                  size="sm"
                                  variant="ghost"
                                  onClick={() => copyToClipboard(api.request, api.endpoint)}
                                  className="gap-2"
                                >
                                  {copied === api.endpoint ? (
                                    <Check className="w-4 h-4" />
                                  ) : (
                                    <Copy className="w-4 h-4" />
                                  )}
                                  Copy
                                </Button>
                              </div>
                              <div className="mb-4">
                                <h4 className="font-clash font-semibold text-sm mb-2">
                                  Configuration
                                </h4>
                                <pre className="bg-muted p-4 rounded-lg text-xs overflow-x-auto font-mono">
                                  {api.request}
                                </pre>
                              </div>
                              <div>
                                <h4 className="font-clash font-semibold text-sm mb-2">
                                  Response
                                </h4>
                                <pre className="bg-muted p-4 rounded-lg text-xs overflow-x-auto font-mono">
                                  {api.response}
                                </pre>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
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
                                      variant="default"
                                      className="mt-1"
                                    >
                                      {option.complexity}
                                    </Badge>
                                  </div>
                                </div>
                                <div className="space-y-2">
                                  <p className="font-satoshi text-sm text-muted-foreground">
                                    Deployment Command
                                  </p>
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

                {/* Browser Compatibility */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: 0.1 }}
                  className="space-y-6"
                >
                  <h3 className="font-clash font-bold text-xl flex items-center gap-2">
                    <Globe className="w-5 h-5 text-blue-500" />
                    Browser Compatibility
                  </h3>
                  <div className="space-y-3">
                    {project.compatibility.map((browser, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-3 rounded-lg border bg-card/50"
                      >
                        <div className="flex items-center gap-3">
                          <Globe className="w-4 h-4 text-muted-foreground" />
                          <div>
                            <span className="font-satoshi font-medium">{browser.browser}</span>
                            <p className="font-satoshi text-xs text-muted-foreground">
                              v{browser.version}+
                            </p>
                          </div>
                        </div>
                        <Badge variant={browser.status === "Full" ? "default" : "secondary"}>
                          {browser.status}
                        </Badge>
                      </div>
                    ))}
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
                          { label: "Sound Effects", value: "12+" },
                          { label: "Animations", value: "25+" },
                          { label: "File Size", value: "1.8 MB" },
                          { label: "Lines of Code", value: "2,500+" }
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
                        Live Demo
                      </a>
                    </Button>
                    <Button
                      variant="secondary"
                      size="sm"
                      className="gap-2"
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-3 h-3" />
                        Source Code
                      </a>
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
                    Ready to Gamify Your Navigation?
                  </h2>
                  <p className="font-satoshi text-muted-foreground">
                    Transform ordinary website menus into engaging interactive experiences that users will love.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button
                        size="lg"
                        className="gap-2 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary"
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

export default ProjectDetails_6;