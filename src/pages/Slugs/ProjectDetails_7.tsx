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
  Keyboard,
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
  FolderTree as FolderTreeIcon,
  QrCode,
  SmartphoneNfc,
  SmartphoneCharging,
  Save,
  Trash2,
  HardDrive,
  Smartphone as Smartphone2,
  Laptop,
  Tablet,
  Printer,
  Scan,
  Camera as CameraIcon,
  ImagePlus,
  FileImage as FileImageIcon,
  Share,
  Link2,
  Copy as CopyIcon,
  CheckSquare,
  WifiOff,
  DownloadCloud,
  UploadCloud,
  Database as DatabaseIcon2,
  HardDrive as HardDriveIcon,
  Server as ServerIcon,
  Cloud as Cloud2,
  Globe as Globe2,
  Network,
  Wifi as WifiIcon,
  Bluetooth,
  Radio,
  Satellite,
  Waves,
  Signal,
  SignalHigh,
  SignalLow,
  SignalZero,
  SmartphoneCharging as SmartphoneChargingIcon,
  Battery,
  BatteryCharging,
  BatteryFull,
  BatteryLow,
  BatteryMedium,
  Power,
  PowerOff,
  Plug,
  ZapOff,
  Cpu as Cpu2,
  MemoryStick,
  Microchip,
  CircuitBoard,
  Cpu as Cpu3,
  ServerCog,
  DatabaseZap,
  Cctv,
  Fingerprint,
  KeyRound,
  Lock as LockIcon,
  Unlock,
  Shield as ShieldIcon3,
  ShieldCheck as ShieldCheckIcon,
  ShieldAlert as ShieldAlertIcon,
  ShieldOff as ShieldOffIcon,
  ShieldQuestion,
  ShieldX,
  QrCode as QrCodeIcon,
} from "lucide-react";
import { useParams, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";

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
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=1200&h=800&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200&h=800&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&h=800&fit=crop&auto=format",
    ],
    slug: "qr-code-generator",
    category: "Web Application",
    liveUrl: "https://thiyo-de.github.io/QR-Code-Generator/",
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
        icon: SmartphoneIcon,
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
        icon: FolderOpenIcon,
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
        icon: FileCodeIcon,
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
        icon: FileText,
        items: ["README.md", "LICENSE"],
        files: 2,
      },
    ],

    apiExamples: [
      {
        endpoint: "generateQRCode(text)",
        description: "Generate QR code from input text",
        method: "JavaScript",
        request: `{
  text: "https://github.com/thiyo-de",
  size: "300x300",
  format: "png"
}`,
        response: `{
  success: true,
  qrCode: "data:image/png;base64,...",
  timestamp: "2024-01-15T10:30:00Z"
}`,
      },
      {
        endpoint: "saveToStorage(qrData)",
        description: "Save QR code data to local storage",
        method: "JavaScript",
        request: `{
  id: "qr_123456",
  text: "Hello World",
  timestamp: "2024-01-15T10:30:00Z",
  image: "data:image/png;base64,..."
}`,
        response: `{
  saved: true,
  count: 15,
  storageUsed: "45KB"
}`,
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

    compatibility: [
      { browser: "Chrome", version: "60+", status: "Full", icon: Globe },
      { browser: "Firefox", version: "55+", status: "Full", icon: Globe },
      { browser: "Safari", version: "11+", status: "Full", icon: Globe },
      { browser: "Edge", version: "79+", status: "Full", icon: Globe },
    ],

    mediaSpecs: [
      {
        type: "QR Code Images",
        formats: "PNG",
        maxSize: "50KB",
        features: "Scalable vector",
        icon: ImageIcon,
      },
      {
        type: "Storage Format",
        formats: "JSON",
        maxSize: "5MB",
        features: "Local persistence",
        icon: Database,
      },
      {
        type: "UI Animations",
        formats: "CSS",
        fps: "60",
        features: "Smooth transitions",
        icon: Zap,
      },
      {
        type: "Responsive Breakpoints",
        count: "3",
        features: "Mobile-first design",
        icon: Smartphone,
      },
    ],
  },
};

const ProjectDetails_7 = () => {
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
          <h1 className="font-clash font-bold text-2xl md:text-3xl mb-4">
            Project not found
          </h1>
          <p className="font-satoshi text-muted-foreground mb-8">
            The project you're looking for doesn't exist or has been moved.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <Button
              size="lg"
              className="gap-2"
              onClick={() => handleNavigation("/work-Page")}
            >
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
        {/* QR Code-like Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,black,transparent)]" />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />

        {/* Animated QR Particles */}
        <div className="absolute inset-0 opacity-5">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-primary rounded-sm animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${1 + Math.random() * 2}s`,
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
                      <p className="font-satoshi text-sm text-muted-foreground">
                        Duration
                      </p>
                      <p className="font-clash font-semibold">
                        {project.duration}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-card/50 border">
                    <div className="p-2 rounded-lg bg-blue-500/10">
                      <Users className="w-4 h-4 text-blue-500" />
                    </div>
                    <div>
                      <p className="font-satoshi text-sm text-muted-foreground">
                        Team
                      </p>
                      <p className="font-clash font-semibold">
                        {project.teamSize}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-card/50 border">
                    <div className="p-2 rounded-lg bg-green-500/10">
                      <Target className="w-4 h-4 text-green-500" />
                    </div>
                    <div>
                      <p className="font-satoshi text-sm text-muted-foreground">
                        Role
                      </p>
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
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
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
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
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
                          <QrCode className="w-3 h-3 mr-1.5" />
                          QR Code Generator Demo
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

                {/* Feature Preview */}
                <div className="mt-8 rounded-xl border bg-card/50 p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <Zap className="w-5 h-5 text-primary" />
                    <h4 className="font-clash font-semibold">Key Features</h4>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="text-center p-2 rounded-lg border">
                      <Save className="w-4 h-4 mx-auto mb-1 text-blue-500" />
                      <p className="font-satoshi text-xs font-medium">
                        Save Codes
                      </p>
                    </div>
                    <div className="text-center p-2 rounded-lg border">
                      <Download className="w-4 h-4 mx-auto mb-1 text-green-500" />
                      <p className="font-satoshi text-xs font-medium">
                        Download
                      </p>
                    </div>
                    <div className="text-center p-2 rounded-lg border">
                      <Smartphone className="w-4 h-4 mx-auto mb-1 text-purple-500" />
                      <p className="font-satoshi text-xs font-medium">
                        Responsive
                      </p>
                    </div>
                    <div className="text-center p-2 rounded-lg border">
                      <Database className="w-4 h-4 mx-auto mb-1 text-orange-500" />
                      <p className="font-satoshi text-xs font-medium">
                        Local Storage
                      </p>
                    </div>
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
                      Performance Metrics
                    </h2>
                    <p className="font-satoshi text-muted-foreground">
                      Optimized for speed and reliability across all devices
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
                              <h3 className="font-clash font-semibold">
                                {metric.label}
                              </h3>
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

                {/* Feature Modes */}
                <motion.section
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  className="space-y-6"
                >
                  <div>
                    <h2 className="font-clash font-bold text-2xl md:text-3xl mb-2">
                      Feature Levels
                    </h2>
                    <p className="font-satoshi text-muted-foreground">
                      Different feature sets for various user needs
                    </p>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4">
                    {project.difficultyModes.map((mode, index) => {
                      const Icon = mode.icon;
                      return (
                        <Card
                          key={index}
                          className="hover:shadow-lg transition-all duration-300"
                        >
                          <CardContent className="p-6">
                            <div className="flex flex-col items-center text-center space-y-4">
                              <div
                                className={`p-3 rounded-full ${mode.color.replace(
                                  "text-",
                                  "bg-"
                                )}/10`}
                              >
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
                                    <span className="font-satoshi">
                                      {feature}
                                    </span>
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
                      Core Features
                    </h2>
                    <p className="font-satoshi text-muted-foreground">
                      Everything you need for efficient QR code management
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
                              <div
                                className={`p-3 rounded-xl ${feature.color}`}
                              >
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
                      Technical Specifications
                    </h2>
                    <p className="font-satoshi text-muted-foreground">
                      Technical details and supported formats
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
                                <h3 className="font-clash font-bold">
                                  {spec.type}
                                </h3>
                              </div>
                              <div className="space-y-2 font-satoshi text-sm">
                                <div className="flex justify-between">
                                  <span className="text-muted-foreground">
                                    Formats:
                                  </span>
                                  <span className="font-medium">
                                    {spec.formats || spec.count}
                                  </span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-muted-foreground">
                                    Max Size:
                                  </span>
                                  <span className="font-medium">
                                    {spec.maxSize || "Unlimited"}
                                  </span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-muted-foreground">
                                    Features:
                                  </span>
                                  <span className="font-medium">
                                    {spec.features}
                                  </span>
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
                          <QrCode className="w-8 h-8 text-primary" />
                        </div>
                        <h3 className="font-clash font-bold text-xl">
                          QR Code Generation Flow
                        </h3>
                        <p className="font-satoshi text-muted-foreground">
                          User Input → QR Generation → Storage Management →
                          Image Download
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
                              Generate
                            </span>
                            <ChevronRight className="w-4 h-4" />
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-500">
                              Store
                            </span>
                            <ChevronRight className="w-4 h-4" />
                          </div>
                          <div className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-500">
                            Download
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
                          {project.usageExamples.desktop.map(
                            (example, index) => {
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
                                        <p className="font-satoshi">
                                          {example.action}
                                        </p>
                                      </div>
                                    </div>
                                  </CardContent>
                                </Card>
                              );
                            }
                          )}
                        </div>
                        <div className="space-y-4">
                          <h3 className="font-clash font-bold text-lg flex items-center gap-2">
                            <PhoneIcon className="w-5 h-5" />
                            Mobile Controls
                          </h3>
                          {project.usageExamples.mobile.map(
                            (example, index) => {
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
                                        <p className="font-satoshi">
                                          {example.action}
                                        </p>
                                      </div>
                                    </div>
                                  </CardContent>
                                </Card>
                              );
                            }
                          )}
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
                                  <h3 className="font-clash font-bold">
                                    {api.endpoint}
                                  </h3>
                                  <p className="font-satoshi text-sm text-muted-foreground">
                                    {api.description}
                                  </p>
                                </div>
                                <Button
                                  size="sm"
                                  variant="ghost"
                                  onClick={() =>
                                    copyToClipboard(api.request, api.endpoint)
                                  }
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
                                    <Badge variant="default" className="mt-1">
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
                                      onClick={() =>
                                        copyToClipboard(
                                          option.command,
                                          option.platform
                                        )
                                      }
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
                  <h3 className="font-clash font-bold text-xl">
                    Project Structure
                  </h3>
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
                            <span className="font-satoshi font-medium">
                              {browser.browser}
                            </span>
                            <p className="font-satoshi text-xs text-muted-foreground">
                              v{browser.version}+
                            </p>
                          </div>
                        </div>
                        <Badge
                          variant={
                            browser.status === "Full" ? "default" : "secondary"
                          }
                        >
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
                          {
                            label: "Project Duration",
                            value: project.duration,
                          },
                          { label: "Team Size", value: project.teamSize },
                          { label: "File Count", value: "14" },
                          { label: "Code Lines", value: "800+" },
                          { label: "Storage Used", value: "5MB Max" },
                          { label: "GitHub Stars", value: "10+" },
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
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
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
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
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
                    <QrCode className="w-8 h-8 text-primary" />
                  </div>
                  <h2 className="font-clash font-bold text-2xl md:text-3xl">
                    Need QR Codes for Your Project?
                  </h2>
                  <p className="font-satoshi text-muted-foreground">
                    Generate, manage, and download QR codes seamlessly with this
                    modern web application.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        size="lg"
                        className="gap-2 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary"
                        onClick={handleContactClick}
                      >
                        <ExternalLink className="w-4 h-4" />
                        Start a Project
                      </Button>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
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

export default ProjectDetails_7;
