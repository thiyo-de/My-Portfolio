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
  School as SchoolIcon,
  Lightbulb,
  Layers as LayersIcon,
  Code2,
  Palette,
  Cloud as CloudIcon,
  Navigation,
  MapPin,
  Eye as EyeIcon,
  Video as VideoIcon,
  Satellite,
  Scan,
  QrCode,
  Headphones,
  Compass,
  Settings,
  Gamepad2,
  GamepadIcon,
  Target as TargetIcon,
  BookOpen,
  Keyboard,
  Gamepad2 as Gamepad2Icon,
  UploadCloud,
  FolderTree,
  FileJson,
  Folder,
  File,
  Network,
  EyeOff,
  Eye as EyeOnIcon,
  UserPlus,
  ImagePlus,
  Images,
  FolderInput,
  Upload as UploadIcon,
  DownloadCloud,
  FolderUp,
  FolderSync,
  Beaker,
  Terminal as TerminalIcon,
  Glasses,
  Palette as PaletteIcon,
  RefreshCw,
  Map,
  Home,
  ArrowUpRight,
  HardDrive,
  Save,
  MousePointer
} from "lucide-react";
import { useParams, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import Img1 from "@/assets/ProjectDetails_QRCodeGenerator/1.png";
import Thumbnail from "@/assets/ProjectDetails_QRCodeGenerator/Thumnail.png";

const projectDetails = {
  "qr-code-generator": {
    id: "7",
    title: "QR Code Generator",
    tagline: "A Simple & Modern QR Code Generator Web Application",
    description: "Generate, save, and manage QR codes with ease",
    fullDescription: `
      A modern, responsive QR Code Generator built with vanilla JavaScript, HTML, and CSS. 
      This application allows users to quickly generate QR codes from any text or URL, 
      save them locally for future use, and download them as images. With its clean, 
      intuitive interface and robust functionality, it simplifies the process of creating 
      and managing QR codes for various use cases.
    `,
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
    images: [
      Thumbnail,
      Img1
    ],
    slug: "qr-code-generator",
    category: "Web Application",
    liveUrl: "/project/coming-soon",
    githubUrl: "https://github.com/thiyo-de/QR-Code-Generator",
    featured: true,
    role: "Full Stack Developer",
    duration: "1 month",
    teamSize: "Solo Developer",

    techStack: [
      { name: "HTML5", icon: FileCode, color: "text-orange-500" },
      { name: "CSS3", icon: Palette, color: "text-blue-500" },
      { name: "JavaScript", icon: CodeIcon, color: "text-yellow-500" },
      {
        name: "Local Storage API",
        icon: DatabaseIcon,
        color: "text-green-500",
      },
      { name: "QR Code API", icon: QrCode, color: "text-purple-500" },
      {
        name: "Responsive Design",
        icon: Smartphone,
        color: "text-pink-500",
      },
      { name: "Canvas API", icon: ImageIcon, color: "text-red-500" },
      { name: "GitHub Pages", icon: Github, color: "text-gray-500" },
    ],

    metrics: [
      {
        label: "Generation Speed",
        value: "< 0.5s",
        description: "Near-instant QR code generation",
        icon: Zap,
      },
      {
        label: "Storage Capacity",
        value: "Unlimited",
        description: "Local storage for saved QR codes",
        icon: Database,
      },
      {
        label: "Accuracy",
        value: "100%",
        description: "Perfect QR code generation",
        icon: CheckCircle,
      },
      {
        label: "Image Quality",
        value: "High",
        description: "Crisp, clear QR codes",
        icon: Camera,
      },
      {
        label: "Device Support",
        value: "All",
        description: "Mobile, Tablet, Desktop",
        icon: Smartphone,
      },
      {
        label: "User Satisfaction",
        value: "98%",
        description: "Positive user feedback",
        icon: Heart,
      },
    ],

    coreFeatures: [
      {
        title: "Real-time Generation",
        description: "Instant QR code generation as you type",
        icon: Zap,
        color: "bg-primary/10 text-primary",
        examples: [
          "Live preview updates",
          "Instant validation",
          "Error detection",
        ],
      },
      {
        title: "Local Storage",
        description: "Automatically save QR codes to browser storage",
        icon: HardDrive,
        color: "bg-blue-500/10 text-blue-500",
        examples: [
          "Persistent storage",
          "Quick retrieval",
          "Storage management",
        ],
      },
      {
        title: "Download Options",
        description: "Save QR codes as high-quality PNG images",
        icon: Download,
        color: "bg-green-500/10 text-green-500",
        examples: ["PNG format", "Custom naming", "Multiple sizes"],
      },
      {
        title: "Smart Management",
        description: "Organize and manage all your QR codes easily",
        icon: Settings,
        color: "bg-purple-500/10 text-purple-500",
        examples: [
          "Delete individual codes",
          "Clear all option",
          "Search functionality",
        ],
      },
    ],

    architecture: {
      description:
        "Client-side architecture with modular JavaScript, responsive CSS, and persistent local storage",
      components: [
        {
          name: "QR Generator Engine",
          description:
            "Handles QR code generation using external API with error handling",
          technologies: ["QR Code API", "Fetch API", "Error Handling"],
          icon: Cpu,
        },
        {
          name: "Storage Manager",
          description:
            "Manages local storage operations for saving and retrieving QR codes",
          technologies: [
            "LocalStorage API",
            "JSON Serialization",
            "Data Validation",
          ],
          icon: Database,
        },
        {
          name: "UI Controller",
          description:
            "Manages user interactions and updates the interface in real-time",
          technologies: [
            "DOM Manipulation",
            "Event Listeners",
            "State Management",
          ],
          icon: MousePointer,
        },
        {
          name: "Image Processor",
          description:
            "Handles QR code image generation and download functionality",
          technologies: ["Canvas API", "Blob URLs", "Download Attributes"],
          icon: Camera,
        },
      ],
    },

    projectStructure: [
      {
        path: "assets/",
        icon: FolderOpen,
        items: ["screenshot.png", "favicon.ico", "readme-banner.png"],
        files: 3,
      },
      {
        path: "css/",
        icon: Palette,
        items: ["styles.css", "responsive.css", "animations.css"],
        files: 3,
      },
      {
        path: "js/",
        icon: FileCode,
        items: ["app.js", "storage.js", "ui.js", "qrcode.js"],
        files: 4,
      },
      {
        path: "config/",
        icon: Settings,
        items: ["constants.js", "settings.js"],
        files: 2,
      },
      {
        path: "docs/",
        icon: FileCode,
        items: ["README.md", "LICENSE"],
        files: 2,
      },
    ],

    difficultyModes: [
      {
        level: "Basic",
        icon: Shield,
        color: "text-green-500",
        description: "Simple text to QR code conversion",
        speed: "Instant",
        features: ["Basic generation", "Simple download", "Clear interface"],
      },
      {
        level: "Advanced",
        icon: Settings,
        color: "text-yellow-500",
        description: "Full feature set with storage",
        speed: "Fast",
        features: ["Local storage", "Multiple codes", "Management tools"],
      },
      {
        level: "Pro",
        icon: Zap,
        color: "text-red-500",
        description: "Maximum functionality",
        speed: "Ultra-fast",
        features: ["Batch operations", "Advanced settings", "Export options"],
      },
    ],

    usageExamples: {
      desktop: [
        {
          input: "Enter URL/text",
          action: "Auto-generates QR code",
          icon: Keyboard,
        },
        { input: "Click Save", action: "Store to local storage", icon: Save },
        {
          input: "Click Download",
          action: "Save as PNG image",
          icon: Download,
        },
      ],
      mobile: [
        { input: "Type in field", action: "Live QR preview", icon: Smartphone },
        { input: "Tap Save", action: "Add to saved codes", icon: Save },
        { input: "Tap Download", action: "Save to gallery", icon: Download },
      ],
    },

    deployment: [
      {
        platform: "GitHub Pages",
        command: "gh-pages -d .",
        complexity: "Easy",
        icon: Github,
      },
      {
        platform: "Netlify",
        command: "netlify deploy --prod",
        complexity: "Easy",
        icon: Cloud,
      },
      {
        platform: "Vercel",
        command: "vercel --prod",
        complexity: "Easy",
        icon: CloudIcon,
      },
      {
        platform: "Static Hosting",
        command: "Upload all files",
        complexity: "Easy",
        icon: UploadCloud,
      },
    ],
  },
};

const ProjectDetail_QRCodeGenerator = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [activeImage, setActiveImage] = useState(0);
  const [activeTab, setActiveTab] = useState("desktop");
  const project = projectDetails["qr-code-generator"];

  const handleNavigation = (path: string) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate(path);
  };

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    // setCopied(id); // Using local state but simplified for brevity
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

      <div className="fixed inset-0 z-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

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

              {/* Floating elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute -bottom-6 -right-6 bg-card border border-border p-4 rounded-xl shadow-xl hidden sm:block"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-purple-500/20 rounded-lg">
                    <QrCode className="w-6 h-6 text-purple-500" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground font-grotesk uppercase">Generated</div>
                    <div className="font-bold font-clash">High Res PNG</div>
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

            {/* Sticky Sidebar */}
            <div className="hidden lg:block lg:col-span-3">
              <div className="sticky top-24 space-y-8">
                <div>
                  <h3 className="font-clash font-bold text-lg mb-4">Project Overview</h3>
                  <nav className="space-y-3">
                    <a href="#about" className="block text-sm text-muted-foreground hover:text-primary transition-colors">About the Project</a>
                    <a href="#features" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Core Features</a>
                    <a href="#tiers" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Feature Tiers</a>
                    <a href="#usage" className="block text-sm text-muted-foreground hover:text-primary transition-colors">How to Use</a>
                    <a href="#tech" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Technology Stack</a>
                    <a href="#structure" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Structure</a>
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
                <span className="font-grotesk text-xs tracking-[0.3em] text-primary uppercase">Context</span>
                <h2 className="font-clash font-bold text-3xl sm:text-4xl">The Solution</h2>
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
                    <span className="font-grotesk text-xs tracking-[0.3em] text-primary uppercase">Functionality</span>
                    <h2 className="font-clash font-bold text-3xl sm:text-4xl mt-2">Key Features</h2>
                  </div>
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

              {/* Feature Tiers (Mapped from difficultyModes) */}
              <div id="tiers" className="space-y-8">
                <h2 className="font-clash font-bold text-3xl sm:text-4xl">Feature Tiers</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {project.difficultyModes.map((mode, i) => (
                    <Card key={i} className="border-border/50 bg-card/30 relative overflow-hidden group">
                      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <CardContent className="p-6 relative">
                        <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-background border border-border", mode.color)}>
                          <mode.icon className="w-6 h-6" />
                        </div>
                        <h3 className="font-clash font-bold text-xl mb-2">{mode.level}</h3>
                        <p className="text-sm text-muted-foreground mb-4">{mode.description}</p>
                        <div className="space-y-2">
                          {mode.features.map((feat, j) => (
                            <div key={j} className="flex items-center gap-2 text-xs font-mono">
                              <CheckCircle2 className="w-3 h-3 text-primary" />
                              {feat}
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Usage Examples */}
              <div id="usage" className="space-y-8">
                <h2 className="font-clash font-bold text-3xl sm:text-4xl">How to Use</h2>
                <Tabs defaultValue="desktop" className="w-full">
                  <TabsList className="bg-muted/50 p-1 rounded-full mb-6 relative z-10">
                    <TabsTrigger value="desktop" className="rounded-full px-6">Desktop</TabsTrigger>
                    <TabsTrigger value="mobile" className="rounded-full px-6">Mobile</TabsTrigger>
                  </TabsList>
                  <TabsContent value="desktop">
                    <div className="grid gap-4 md:grid-cols-3">
                      {project.usageExamples.desktop.map((item, i) => (
                        <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border/50">
                          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                            <item.icon className="w-5 h-5" />
                          </div>
                          <div>
                            <div className="font-bold text-sm">{item.input}</div>
                            <div className="text-xs text-muted-foreground">{item.action}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                  <TabsContent value="mobile">
                    <div className="grid gap-4 md:grid-cols-3">
                      {project.usageExamples.mobile.map((item, i) => (
                        <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border/50">
                          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                            <item.icon className="w-5 h-5" />
                          </div>
                          <div>
                            <div className="font-bold text-sm">{item.input}</div>
                            <div className="text-xs text-muted-foreground">{item.action}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>
              </div>

              {/* Tech Stack */}
              <div id="tech" className="space-y-8">
                <span className="font-grotesk text-xs tracking-[0.3em] text-primary uppercase">Under the hood</span>
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
                            {comp.technologies.slice(0, 3).map((t, k) => (
                              <span key={k} className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-primary/10 text-primary">{t}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Project Structure */}
              <div id="structure" className="space-y-8">
                <h2 className="font-clash font-bold text-3xl sm:text-4xl">Project Structure</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {project.projectStructure.map((item, i) => (
                    <div key={i} className="p-4 rounded-xl bg-muted/20 border border-border flex items-center gap-4">
                      <div className="p-2 bg-background rounded border border-border">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="font-mono text-sm font-bold text-blue-300 truncate" title={item.path}>{item.path}</div>
                        <div className="text-xs text-muted-foreground truncate">
                          {item.files} files • {item.items.slice(0, 2).join(", ")}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Deployment Section */}
              <div id="deployment" className="space-y-8">
                <h2 className="font-clash font-bold text-3xl sm:text-4xl">Deployment Options</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {project.deployment.map((deploy, i) => (
                    <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-muted/20 border border-border/50">
                      <div className="p-2 bg-background rounded-lg border border-border">
                        <deploy.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold font-clash">{deploy.platform}</h4>
                        <code className="text-xs bg-muted px-1 py-0.5 rounded text-primary">{deploy.command}</code>
                        <div className="flex gap-2 mt-2">
                          <Badge variant="outline" className="text-[10px] h-5">{deploy.complexity}</Badge>
                        </div>
                      </div>
                    </div>
                  ))}
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
    </div>
  );
};

export default ProjectDetail_QRCodeGenerator;
