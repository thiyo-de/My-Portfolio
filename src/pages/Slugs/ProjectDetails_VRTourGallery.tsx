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
  ZoomIn,
} from "lucide-react";
import ImageViewer from "@/components/ImageViewer";
import { useParams, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import Img1 from "@/assets/ProjectDetails_VRTourGallery/1.png";
import Thumbnail from "@/assets/ProjectDetails_VRTourGallery/Thumnail.png";

const projectDetails = {
  "vr-tour-gallery": {
    id: "4",
    title: "VR Tour Gallery Uploader — Share Your Moments in Virtual Reality",
    tagline: "Interactive user photo upload feature for immersive VR experiences",
    description:
      "Enhances existing VR tours by allowing users to upload their own images and have them integrated into a shared virtual gallery experience.",
    fullDescription: `
      The VR Tour Gallery Uploader is an innovative feature that transforms passive VR tour experiences into interactive, community-driven platforms. 
      It allows users visiting real-world locations to upload their own photos, which are then seamlessly integrated into a shared virtual gallery 
      within the VR environment. This creates a dynamic, evolving collection of memories and perspectives that future visitors can explore.
      
      Unlike traditional VR tours that offer static experiences, this system enables user-generated content integration, making each virtual visit 
      unique and personal. It's perfect for museums, tourist attractions, educational institutions, and real estate properties where visitors want 
      to share their experiences and contribute to a collective memory of the space.
      
      The system is built with a Flask backend for robust file handling and a modern, responsive frontend that provides an intuitive upload 
      interface and gallery preview functionality.
    `,
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
    images: [
      Thumbnail,
      Img1
    ],
    slug: "vr-tour-gallery",
    category: "VR Platform Enhancement / Web Application",
    liveUrl: "https://vrgallery.netlify.app/",
    githubUrl: "https://github.com/thiyo-de/VR-Tour_Gallery",
    featured: true,
    role: "Full Stack Developer & UX Designer",
    duration: "3 Weeks",
    teamSize: "2 Members",

    techStack: [
      { name: "Flask", icon: Beaker, color: "text-gray-800" },
      { name: "Python", icon: TerminalIcon, color: "text-blue-500" },
      { name: "HTML/CSS", icon: Code, color: "text-orange-500" },
      { name: "JavaScript", icon: Code2, color: "text-yellow-500" },
      { name: "Netlify", icon: Cloud, color: "text-green-500" },
      { name: "Render", icon: Server, color: "text-purple-500" },
      { name: "Responsive Design", icon: Smartphone, color: "text-pink-500" },
      { name: "File Processing", icon: UploadCloud, color: "text-cyan-500" },
    ],

    metrics: [
      {
        label: "Development Time",
        value: "3 Weeks",
        description: "Complete feature implementation",
        icon: Clock,
      },
      {
        label: "Upload Processing",
        value: "<2s",
        description: "Image upload & processing",
        icon: Zap,
      },
      {
        label: "Image Quality",
        value: "Optimized",
        description: "Auto-resizing & compression",
        icon: Camera,
      },
      {
        label: "Supported Formats",
        value: "5+",
        description: "JPG, PNG, WebP, etc.",
        icon: ImageIcon,
      },
      {
        label: "Concurrent Users",
        value: "100+",
        description: "Simultaneous uploads",
        icon: UsersIcon,
      },
      {
        label: "Storage Efficiency",
        value: "90%",
        description: "Compression rate",
        icon: DatabaseIcon,
      },
    ],

    coreFeatures: [
      {
        title: "User Photo Upload System",
        description:
          "Secure and intuitive interface for users to upload photos from any device",
        icon: UploadCloud,
        color: "bg-blue-500/10 text-blue-500",
        examples: [
          "Drag-and-drop interface",
          "Multiple file selection",
          "Real-time progress indicator",
          "File validation & preview",
        ],
      },
      {
        title: "VR Gallery Integration",
        description:
          "Seamless integration of uploaded photos into existing VR tour environments",
        icon: Glasses,
        color: "bg-purple-500/10 text-purple-500",
        examples: [
          "Real-time gallery updates",
          "3D photo placement",
          "Spatial organization",
          "VR navigation compatibility",
        ],
      },
      {
        title: "Backend Processing",
        description: "Robust server-side handling for image processing and storage",
        icon: Server,
        color: "bg-green-500/10 text-green-500",
        examples: [
          "Image compression & optimization",
          "Format conversion",
          "Metadata extraction",
          "Storage management",
        ],
      },
      {
        title: "Gallery Management",
        description: "Tools for organizing and moderating user-generated content",
        icon: Images,
        color: "bg-pink-500/10 text-pink-500",
        examples: [
          "Content moderation panel",
          "Bulk operations",
          "User management",
          "Analytics dashboard",
        ],
      },
    ],

    architecture: {
      description:
        "Modern web application with Flask backend handling file uploads and frontend providing interactive gallery experience",
      components: [
        {
          name: "Backend Server",
          description:
            "Flask-based API server handling file uploads, processing, and storage management",
          technologies: [
            "Flask",
            "Python 3",
            "Pillow",
            "Werkzeug",
            "Render Deployment",
          ],
          icon: Server,
        },
        {
          name: "Frontend Interface",
          description:
            "Responsive web interface for uploading and viewing photos in gallery format",
          technologies: [
            "HTML5",
            "CSS3",
            "JavaScript",
            "Responsive Design",
            "Netlify Hosting",
          ],
          icon: Monitor,
        },
        {
          name: "File Processing",
          description:
            "Server-side image processing pipeline for optimization and storage",
          technologies: [
            "Image Resizing",
            "Format Conversion",
            "Compression",
            "Thumbnail Generation",
          ],
          icon: ImageIcon,
        },
        {
          name: "VR Integration Layer",
          description:
            "Bridge between web gallery and VR tour environment for seamless photo display",
          technologies: [
            "WebGL Compatibility",
            "API Endpoints",
            "Real-time Sync",
            "Cross-platform Support",
          ],
          icon: Glasses,
        },
      ],
    },

    projectStructure: [
      {
        path: "Backend/",
        icon: FolderTree,
        items: ["Flask app", "Upload handlers", "Database config", "Deployment"],
        files: 4,
      },
      {
        path: "Frontend/",
        icon: FileCode,
        items: ["Upload UI", "Gallery view", "Responsive design", "User flows"],
        files: 6,
      },
      {
        path: "Uploaded_Images/",
        icon: FolderUp,
        items: ["User photos", "Thumbnails", "Processed files", "Metadata"],
        files: "Dynamic",
      },
      {
        path: "Configuration/",
        icon: Settings,
        items: ["Environment vars", "API keys", "Settings files", "Deployment"],
        files: 5,
      },
    ],

    serviceExamples: {
      verticals: [
        {
          industry: "Tourism & Museums",
          application: "Visitor photo sharing in exhibits",
          benefit: "Enhanced engagement & repeat visits",
          icon: MapPin,
        },
        {
          industry: "Education",
          application: "Student project galleries",
          benefit: "Interactive learning experiences",
          icon: SchoolIcon,
        },
        {
          industry: "Real Estate",
          application: "Potential buyer photo uploads",
          benefit: "Community building & trust",
          icon: Home,
        },
        {
          industry: "Events",
          application: "Event participant galleries",
          benefit: "Post-event engagement",
          icon: Calendar,
        },
      ],
      technical: [
        {
          feature: "File Validation",
          challenge: "Prevent malicious uploads",
          solution: "Multi-layer security checks",
          icon: Shield,
        },
        {
          feature: "Image Optimization",
          challenge: "Balance quality & performance",
          solution: "Adaptive compression",
          icon: ImageIcon,
        },
        {
          feature: "Real-time Updates",
          challenge: "Sync across VR and web",
          solution: "WebSocket integration",
          icon: RefreshCw,
        },
      ],
    },

    deployment: [
      {
        platform: "Render.com",
        command: "pip install -r requirements.txt && python app.py",
        complexity: "Easy",
        icon: Server,
      },
      {
        platform: "Netlify",
        command: "Auto-deploy from GitHub",
        complexity: "Easy",
        icon: Cloud,
      },
      {
        platform: "Heroku",
        command: "git push heroku main",
        complexity: "Medium",
        icon: CloudUpload,
      },
      {
        platform: "AWS",
        command: "Manual EC2 setup with S3",
        complexity: "Advanced",
        icon: CloudIcon,
      },
    ],

    serviceFeatures: [
      { feature: "Drag & Drop Upload", icon: UploadCloud },
      { feature: "Real-time Preview", icon: EyeIcon },
      { feature: "Multi-format Support", icon: FileJson },
      { feature: "Responsive Gallery", icon: Images },
      { feature: "User Authentication", icon: Key },
      { feature: "Moderation Tools", icon: Shield },
    ],

    folderStructure: [
      {
        name: "VR-Tour_Gallery/",
        type: "directory",
        children: [
          {
            name: "Backend/",
            type: "directory",
            children: [
              { name: "app.py", type: "file", icon: FileCode },
              { name: "database.py", type: "file", icon: Database },
              { name: "requirements.txt", type: "file", icon: FileJson },
              { name: "render.yaml", type: "file", icon: Settings },
            ],
          },
          {
            name: "Frontend/",
            type: "directory",
            children: [
              { name: "index.html", type: "file", icon: Code },
              { name: "Gallery.html", type: "file", icon: Images },
              { name: "style.css", type: "file", icon: Palette },
              { name: "script.js", type: "file", icon: Code2 },
            ],
          },
          {
            name: "static/",
            type: "directory",
            children: [
              { name: "uploads/", type: "directory", icon: FolderUp },
              { name: "thumbnails/", type: "directory", icon: ImageIcon },
              { name: "previews/", type: "directory", icon: EyeIcon },
            ],
          },
          {
            name: "templates/",
            type: "directory",
            children: [
              { name: "layout.html", type: "file", icon: FileCode },
              { name: "upload.html", type: "file", icon: UploadCloud },
              { name: "gallery.html", type: "file", icon: Images },
            ],
          },
        ],
      },
    ],
  },
};

const ProjectDetail_VRTourGallery = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [activeImage, setActiveImage] = useState(0);
  const [copied, setCopied] = useState<string | null>(null);
  const [expandedFolders, setExpandedFolders] = useState<string[]>([
    "VR-Tour_Gallery/",
    "Backend/",
    "Frontend/",
  ]);
  const project = projectDetails["vr-tour-gallery"];

  // Lightbox State
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

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

  const toggleFolder = (folderName: string) => {
    setExpandedFolders((prev) =>
      prev.includes(folderName)
        ? prev.filter((f) => f !== folderName)
        : [...prev, folderName]
    );
  };

  // Define a type for folder structure items to fix the TypeScript error
  interface FolderItem {
    name: string;
    type: 'directory' | 'file';
    children?: FolderItem[];
    icon?: React.ComponentType<{ className?: string }>;
  }

  const renderFolderStructure = (items: FolderItem[], depth = 0) => {
    return items.map((item, index) => {
      const isExpanded = expandedFolders.includes(item.name);

      return (
        <div key={index} className="font-mono text-sm">
          <div
            className={cn(
              "flex items-center gap-2 py-1.5 px-2 hover:bg-white/5 rounded-lg cursor-pointer transition-colors duration-200",
              depth > 0 && "ml-4"
            )}
            style={{ marginLeft: `${depth * 1.5}rem` }}
            onClick={() => item.type === "directory" && toggleFolder(item.name)}
          >
            {item.type === "directory" ? (
              <>
                <ChevronRight
                  className={`w-3 h-3 text-muted-foreground transition-transform duration-200 ${isExpanded ? "rotate-90" : ""
                    }`}
                />
                <Folder className="w-4 h-4 text-blue-400" />
                <span className="text-blue-200 font-medium truncate">{item.name}</span>
              </>
            ) : (
              <>
                <div className="w-3" /> {/* Alignment spacer matching chevron width */}
                {item.icon ? (
                  <item.icon className="w-4 h-4 text-green-400" />
                ) : (
                  <File className="w-4 h-4 text-muted-foreground" />
                )}
                <span className="text-muted-foreground truncate">{item.name}</span>
              </>
            )}
          </div>
          {item.type === "directory" && item.children && (
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  {renderFolderStructure(item.children as FolderItem[], depth + 1)}
                </motion.div>
              )}
            </AnimatePresence>
          )}
        </div>
      );
    });
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
                  <div className="p-2 bg-green-500/20 rounded-lg">
                    <ShieldCheck className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground font-grotesk uppercase">Security</div>
                    <div className="font-bold font-clash">Auth Protected</div>
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
                    <a href="#structure" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Project Structure</a>
                    <a href="#gallery" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Live Gallery</a>
                    <a href="#deployment" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Deployment</a>
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
                    <span className="font-grotesk text-xs tracking-[0.3em] text-primary uppercase">Innovation</span>
                    <h2 className="font-clash font-bold text-3xl sm:text-4xl mt-2">Core Capabilities</h2>
                  </div>
                  <p className="max-w-md text-muted-foreground text-sm sm:text-right">
                    Seamlessly bridging the gap between physical spaces and digital experiences.
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

              {/* Folder Structure Section */}
              <div id="structure" className="space-y-8">
                <h2 className="font-clash font-bold text-3xl sm:text-4xl">Project Structure</h2>
                <div className="rounded-3xl border border-border bg-card/50 overflow-hidden shadow-sm">
                  <div className="border-b border-border bg-muted/30 px-6 py-4 flex items-center justify-between">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500/80" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                      <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    </div>
                    <span className="text-xs font-mono text-muted-foreground">file-explorer</span>
                  </div>
                  <div className="p-6">
                    {renderFolderStructure(project.folderStructure as FolderItem[])}
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
      <ImageViewer
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        imageSrc={selectedImage}
        alt="Project Gallery Image"
      />
    </div>
  );
};

export default ProjectDetail_VRTourGallery;