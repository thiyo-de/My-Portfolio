import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import {
  ExternalLink,
  Globe,
  ArrowLeft,
  Calendar,
  Users,
  Target,
  Camera,
  Map,
  Building,
  Home,
  School,
  Hospital,
  Hotel,
  Zap,
  Shield,
  Cloud,
  Code,
  Smartphone,
  Monitor,
  Wifi,
  CheckCircle,
  BarChart3,
  Database,
  Layers,
  FolderOpen,
  Key,
  Lock,
  Download,
  Play,
  Pause,
  Maximize2,
  Copy,
  Check,
  Share2,
  Heart,
  Mic,
  Video,
  Upload,
  CheckCircle2,
  Eye,
  Users as UsersIcon,
  CloudUpload,
  ShieldCheck,
  Mail,
  MessageSquare,
  Image as ImageIcon,
  Music,
  Rocket,
  GraduationCap,
  Globe as GlobeIcon,
  Smartphone as SmartphoneIcon,
  School as SchoolIcon,
  Lightbulb,
  Layers as LayersIcon,
  Code2,
  Palette,
  ServerIcon,
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
  Cpu,
  GitBranch,
  ChevronRight,
  Sparkles,
  Clock,
  Brain,
  FileCode,
  Gamepad2,
  GamepadIcon,
  Target as TargetIcon,
  BookOpen,
  Keyboard,
  Gamepad2 as Gamepad2Icon,
  Terminal,
  Github,
  UploadCloud,
  FolderTree,
  FileJson,
  Folder,
  Code as CodeIcon,
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
  Database as DatabaseIcon,
  FolderUp,
  FolderSync,
  // Add these alternative icons since Flask, Python, VirtualReality don't exist in lucide-react
  Beaker, // Alternative for Flask
  Terminal as TerminalIcon, // Alternative for Python
  Glasses, // Alternative for VirtualReality
  Palette as PaletteIcon,
  RefreshCw // Add RefreshCw icon
} from "lucide-react";
import { useParams, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";

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
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=1200&h-800&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=1200&h=800&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=1200&h=800&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=800&fit=crop&auto=format",
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
      { name: "Flask", icon: Beaker, color: "text-gray-800" }, // Changed from Flask to Beaker
      { name: "Python", icon: TerminalIcon, color: "text-blue-500" }, // Changed from Python to TerminalIcon
      { name: "HTML/CSS", icon: Code, color: "text-orange-500" },
      { name: "JavaScript", icon: Code2, color: "text-yellow-500" },
      { name: "Netlify", icon: Cloud, color: "text-green-500" },
      { name: "Render", icon: ServerIcon, color: "text-purple-500" }, // Changed from Server to ServerIcon
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
        icon: Glasses, // Changed from VirtualReality to Glasses
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
        icon: ServerIcon, // Changed from Server to ServerIcon
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
        icon: Images, // Changed from GalleryVertical to Images
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
          icon: ServerIcon, // Changed from Server to ServerIcon
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
          icon: Glasses, // Changed from VirtualReality to Glasses
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
          icon: School,
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
          icon: RefreshCw, // Fixed: Added RefreshCw import
        },
      ],
    },

    deployment: [
      {
        platform: "Render.com",
        command: "pip install -r requirements.txt && python app.py",
        complexity: "Easy",
        icon: ServerIcon, // Changed from Server to ServerIcon
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
      { feature: "Responsive Gallery", icon: Images }, // Changed from GalleryVertical to Images
      { feature: "User Authentication", icon: Key },
      { feature: "Moderation Tools", icon: Shield },
    ],

    industrySpecs: [
      {
        industry: "Cultural Institutions",
        features: "Visitor galleries, Educational content",
        pricing: "Per institution",
        icon: Building,
      },
      {
        industry: "Tourism Businesses",
        features: "Tour photo sharing, Marketing galleries",
        pricing: "Monthly subscription",
        icon: Map,
      },
      {
        industry: "Educational",
        features: "Class projects, Campus tours",
        pricing: "Academic discount",
        icon: GraduationCap,
      },
      {
        industry: "Corporate Events",
        features: "Event galleries, Team building",
        pricing: "Per event",
        icon: Users,
      },
    ],

    platformControls: {
      admin: [
        { control: "Content Moderation", action: "Approve/reject uploads" },
        { control: "User Management", action: "Manage user permissions" },
        { control: "Gallery Organization", action: "Arrange photo displays" },
        { control: "Analytics Dashboard", action: "View usage statistics" },
      ],
      user: [
        { control: "Photo Upload", action: "Drag & drop or browse" },
        { control: "Gallery Browsing", action: "Scroll through images" },
        { control: "VR Navigation", action: "View photos in VR space" },
        { control: "Share Features", action: "Share galleries externally" },
      ],
    },

    safetyFeatures: [
      { feature: "File Type Validation", icon: ShieldCheck },
      { feature: "Size Limits", icon: File },
      { feature: "Virus Scanning", icon: Shield },
      { feature: "User Rate Limiting", icon: Wifi }, // Changed from Cctv to Wifi
      { feature: "Secure Storage", icon: Lock },
      { feature: "Data Encryption", icon: Key },
    ],

    mediaSpecs: [
      {
        type: "Uploaded Photos",
        formats: "JPG, PNG, WebP, GIF",
        maxSize: "10MB",
        features: "Auto-resizing, Compression",
      },
      {
        type: "Processed Images",
        formats: "JPG, WebP",
        maxSize: "2MB",
        features: "Optimized for web & VR",
      },
      {
        type: "Thumbnails",
        formats: "JPG, WebP",
        maxSize: "200KB",
        features: "Multiple sizes generated",
      },
      {
        type: "Metadata",
        formats: "JSON",
        maxSize: "50KB",
        features: "User info, Timestamps, Location",
      },
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
              { name: "Gallery.html", type: "file", icon: Images }, // Changed from GalleryVertical to Images
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

const ProjectDetail_5 = () => {
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

  const handleNavigation = (path: string) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate(path);
  };

  const handleContactClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate("/contact");
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

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % project.images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [project.images.length]);

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
            className={`flex items-center gap-2 py-1 px-2 hover:bg-muted/50 rounded cursor-pointer ${
              depth > 0 ? `ml-${depth * 4}` : ""
            }`}
            onClick={() => item.type === "directory" && toggleFolder(item.name)}
          >
            {item.type === "directory" ? (
              <>
                <ChevronRight
                  className={`w-3 h-3 transition-transform ${
                    isExpanded ? "rotate-90" : ""
                  }`}
                />
                <Folder className="w-4 h-4 text-blue-500" />
                <span className="text-blue-500">{item.name}</span>
              </>
            ) : (
              <>
                <div className="w-6" /> {/* Spacer for alignment */}
                {item.icon ? (
                  <item.icon className="w-4 h-4 text-green-500" />
                ) : (
                  <File className="w-4 h-4 text-gray-500" />
                )}
                <span className="text-foreground">{item.name}</span>
              </>
            )}
          </div>
          {item.type === "directory" && item.children && isExpanded && (
            <div className="ml-4">
              {renderFolderStructure(item.children, depth + 1)}
            </div>
          )}
        </div>
      );
    });
  };

  return (
    <div className="min-h-screen">
      {/* Enhanced Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,0.08)_25%,rgba(68,68,68,0.08)_50%,transparent_50%,transparent_75%,rgba(68,68,68,0.08)_75%)] bg-[length:7px_7px] opacity-100" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(12,14,18,0.9)_85%,rgba(12,14,18,1)_100%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      </div>

      {/* Floating Back Button */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed top-4 left-4 z-50 md:hidden"
      >
        <Button
          size="icon"
          variant="secondary"
          className="rounded-full backdrop-blur-sm bg-background/80 border"
          onClick={() => handleNavigation("/work")}
        >
          <ArrowLeft className="w-4 h-4" />
        </Button>
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative pt-14 md:pt-24 lg:pt-36 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-cyan-500/5" />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 lg:py-16 relative">
            {/* Back Button */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="hidden md:block mb-8"
            >
              <Button
                variant="ghost"
                className="gap-2 group"
                onClick={() => handleNavigation("/work")}
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
                        <Globe className="w-4 h-4" />
                        Visit Live Site
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
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="sm:flex-1"
                  >
                    <Button
                      variant="secondary"
                      size="lg"
                      className="w-full gap-2"
                      onClick={() => {
                        alert(
                          "Try uploading your own photos on the live site!"
                        );
                      }}
                    >
                      <UploadCloud className="w-4 h-4" />
                      Try Upload Demo
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
                          <Glasses className="w-3 h-3 mr-1.5 text-primary" /> {/* Changed from VirtualReality to Glasses */}
                          VR Gallery Platform
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

                {/* Upload Flow Diagram */}
                <div className="mt-8 rounded-xl border bg-card/50 p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <UploadCloud className="w-5 h-5 text-primary" />
                    <h4 className="font-clash font-semibold">
                      Upload Flow Process
                    </h4>
                  </div>
                  <div className="relative rounded-lg overflow-hidden border">
                    <div className="p-4 bg-gradient-to-r from-primary/5 to-cyan-500/5">
                      <div className="flex flex-wrap items-center justify-center gap-2 text-sm">
                        <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-primary/10">
                          <UserPlus className="w-4 h-4" />
                          <span>User Upload</span>
                        </div>
                        <ChevronRight className="w-4 h-4 text-muted-foreground" />
                        <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-blue-500/10">
                          <ServerIcon className="w-4 h-4" /> {/* Changed from Server to ServerIcon */}
                          <span>Flask Processing</span>
                        </div>
                        <ChevronRight className="w-4 h-4 text-muted-foreground" />
                        <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-green-500/10">
                          <Images className="w-4 h-4" /> {/* Changed from GalleryVertical to Images */}
                          <span>Gallery Update</span>
                        </div>
                        <ChevronRight className="w-4 h-4 text-muted-foreground" />
                        <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-purple-500/10">
                          <Glasses className="w-4 h-4" /> {/* Changed from VirtualReality to Glasses */}
                          <span>VR Integration</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="relative py-12 md:py-20 bg-background">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,0.08)_25%,rgba(68,68,68,0.08)_50%,transparent_50%,transparent_75%,rgba(68,68,68,0.08)_75%)] bg-[length:7px_7px] opacity-100" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(12,14,18,0.9)_85%,rgba(12,14,18,1)_100%)] pointer-events-none" />
          </div>

          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
              {/* Left Column */}
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
                      System Performance
                    </h2>
                    <p className="font-satoshi text-muted-foreground">
                      Optimized for fast uploads and seamless gallery experiences
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
                      Complete solution for user-generated content in VR environments
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
                                      className="flex items-center gap-2 p-2 rounded-lg bg-muted font-satoshi text-sm"
                                    >
                                      <CheckCircle2 className="w-3 h-3 text-green-500" />
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

                {/* Folder Structure */}
                <motion.section
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  className="space-y-6"
                >
                  <div>
                    <h2 className="font-clash font-bold text-2xl md:text-3xl mb-2">
                      Project Structure
                    </h2>
                    <p className="font-satoshi text-muted-foreground">
                      Organized codebase following clean architecture principles
                    </p>
                  </div>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                          <FolderTree className="w-5 h-5 text-primary" />
                          <h3 className="font-clash font-semibold">
                            Directory Tree
                          </h3>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => setExpandedFolders(
                            expandedFolders.length > 0 ? [] : ["VR-Tour_Gallery/", "Backend/", "Frontend/"]
                          )}
                        >
                          {expandedFolders.length > 0 ? "Collapse All" : "Expand All"}
                        </Button>
                      </div>
                      <div className="border rounded-lg p-4 bg-muted/30">
                        {renderFolderStructure(project.folderStructure as FolderItem[])}
                      </div>
                      <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center gap-2">
                          <Folder className="w-4 h-4 text-blue-500" />
                          <span className="text-muted-foreground">Directory</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <File className="w-4 h-4 text-green-500" />
                          <span className="text-muted-foreground">File</span>
                        </div>
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
                        <div className="inline-flex items-center justify-center p-3 rounded-full bg-gradient-to-r from-primary/20 to-cyan-500/20">
                          <Network className="w-8 h-8 text-primary" />
                        </div>
                        <h3 className="font-clash font-bold text-xl">
                          Upload Pipeline
                        </h3>
                        <p className="font-satoshi text-muted-foreground">
                          User Upload → Flask Processing → Storage → Gallery Update → VR Integration
                        </p>
                        <div className="flex flex-wrap justify-center items-center gap-4 text-sm font-satoshi text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-500">
                              Upload
                            </span>
                            <ChevronRight className="w-4 h-4" />
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-500">
                              Process
                            </span>
                            <ChevronRight className="w-4 h-4" />
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-500">
                              Store
                            </span>
                            <ChevronRight className="w-4 h-4" />
                          </div>
                          <div className="px-3 py-1 rounded-full bg-primary/10 text-primary">
                            Display
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
                  <Tabs defaultValue="services" className="w-full">
                    <TabsList className="grid grid-cols-3 mb-6">
                      <TabsTrigger value="services">Use Cases</TabsTrigger>
                      <TabsTrigger value="controls">Controls</TabsTrigger>
                      <TabsTrigger value="deployment">Deployment</TabsTrigger>
                    </TabsList>

                    <TabsContent value="services" className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <h3 className="font-clash font-bold text-lg flex items-center gap-2">
                            <Building className="w-5 h-5 text-primary" />
                            Industry Applications
                          </h3>
                          {project.serviceExamples.verticals.map(
                            (service, index) => {
                              const Icon = service.icon;
                              return (
                                <Card key={index}>
                                  <CardContent className="p-4">
                                    <div className="space-y-3">
                                      <div className="flex items-center gap-3">
                                        <div className="p-2 rounded-lg bg-primary/10">
                                          <Icon className="w-4 h-4 text-primary" />
                                        </div>
                                        <div>
                                          <h4 className="font-clash font-bold">
                                            {service.industry}
                                          </h4>
                                          <p className="font-satoshi text-sm text-muted-foreground">
                                            {service.application}
                                          </p>
                                        </div>
                                      </div>
                                      <Separator />
                                      <div>
                                        <p className="font-satoshi text-sm text-muted-foreground">
                                          Business Benefit
                                        </p>
                                        <p className="font-satoshi font-medium">
                                          {service.benefit}
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
                            <Settings className="w-5 h-5 text-primary" />
                            Technical Solutions
                          </h3>
                          {project.serviceExamples.technical.map(
                            (solution, index) => (
                              <Card key={index}>
                                <CardContent className="p-4">
                                  <div className="space-y-3">
                                    <div>
                                      <p className="font-satoshi text-sm text-muted-foreground">
                                        Technical Feature
                                      </p>
                                      <p className="font-satoshi font-medium">
                                        {solution.feature}
                                      </p>
                                    </div>
                                    <div>
                                      <p className="font-satoshi text-sm text-muted-foreground">
                                        Challenge
                                      </p>
                                      <p className="font-satoshi">
                                        {solution.challenge}
                                      </p>
                                    </div>
                                    <div className="grid grid-cols-2 gap-2">
                                      <div>
                                        <p className="font-satoshi text-sm text-muted-foreground">
                                          Solution
                                        </p>
                                        <Badge className="bg-green-500/10 text-green-500">
                                          {solution.solution}
                                        </Badge>
                                      </div>
                                      <div className="flex items-center gap-2">
                                        {solution.icon && (
                                          <solution.icon className="w-4 h-4 text-primary" />
                                        )}
                                      </div>
                                    </div>
                                  </div>
                                </CardContent>
                              </Card>
                            )
                          )}
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="controls" className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <h3 className="font-clash font-bold text-lg flex items-center gap-2">
                            <Settings className="w-5 h-5 text-primary" />
                            Admin Controls
                          </h3>
                          <Card>
                            <CardContent className="p-6">
                              <div className="space-y-3">
                                {project.platformControls.admin.map(
                                  (control, index) => (
                                    <div
                                      key={index}
                                      className="flex items-center justify-between p-3 rounded-lg bg-muted/50"
                                    >
                                      <div className="flex items-center gap-3">
                                        <div className="p-2 rounded bg-primary/10">
                                          <Settings className="w-3 h-3 text-primary" />
                                        </div>
                                        <span className="font-satoshi text-sm">
                                          {control.control}
                                        </span>
                                      </div>
                                      <span className="font-satoshi text-xs text-muted-foreground">
                                        {control.action}
                                      </span>
                                    </div>
                                  )
                                )}
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                        <div className="space-y-4">
                          <h3 className="font-clash font-bold text-lg flex items-center gap-2">
                            <Users className="w-5 h-5 text-primary" />
                            User Experience
                          </h3>
                          <Card>
                            <CardContent className="p-6">
                              <div className="space-y-3">
                                {project.platformControls.user.map(
                                  (control, index) => (
                                    <div
                                      key={index}
                                      className="flex items-center justify-between p-3 rounded-lg bg-muted/50"
                                    >
                                      <span className="font-satoshi text-sm">
                                        {control.control}
                                      </span>
                                      <span className="font-satoshi text-xs text-muted-foreground">
                                        {control.action}
                                      </span>
                                    </div>
                                  )
                                )}
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
                                          : option.complexity === "Medium"
                                          ? "secondary"
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
                {/* Media Specifications */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  className="space-y-6"
                >
                  <h3 className="font-clash font-bold text-xl">
                    Media Specifications
                  </h3>
                  <Card>
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        {project.mediaSpecs.map((spec, index) => (
                          <div key={index} className="space-y-3">
                            <div className="flex items-center gap-3">
                              {spec.type === "Uploaded Photos" && (
                                <UploadCloud className="w-5 h-5 text-blue-500" />
                              )}
                              {spec.type === "Processed Images" && (
                                <ImageIcon className="w-5 h-5 text-purple-500" />
                              )}
                              {spec.type === "Thumbnails" && (
                                <EyeIcon className="w-5 h-5 text-green-500" />
                              )}
                              {spec.type === "Metadata" && (
                                <FileJson className="w-5 h-5 text-pink-500" />
                              )}
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
                                  {spec.formats}
                                </span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-muted-foreground">
                                  Max Size:
                                </span>
                                <span className="font-medium">
                                  {spec.maxSize}
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
                        ))}
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
                    Security Features
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
                          <span className="font-satoshi text-sm">
                            {item.feature}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>

                {/* Industry Specifications */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: 0.2 }}
                  className="space-y-6"
                >
                  <h3 className="font-clash font-bold text-xl">
                    Industry Focus
                  </h3>
                  <Card>
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        {project.industrySpecs.map((industry, index) => {
                          const Icon = industry.icon;
                          return (
                            <div
                              key={index}
                              className="flex items-center justify-between py-2 border-b last:border-0"
                            >
                              <div className="flex items-center gap-3">
                                <Icon className="w-4 h-4 text-primary" />
                                <div>
                                  <span className="font-clash font-semibold text-sm">
                                    {industry.industry}
                                  </span>
                                  <p className="font-satoshi text-xs text-muted-foreground">
                                    {industry.features}
                                  </p>
                                </div>
                              </div>
                              <Badge variant="outline" className="text-xs">
                                {industry.pricing}
                              </Badge>
                            </div>
                          );
                        })}
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
                    Start VR Gallery Project
                  </Button>
                  <Button
                    variant="ghost"
                    className="w-full gap-2"
                    onClick={() => handleNavigation("/work")}
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
                        Live Site
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
            <Card className="bg-gradient-to-r from-primary/5 via-transparent to-cyan-500/5 border-primary/20">
              <CardContent className="p-8 md:p-12 text-center">
                <div className="max-w-2xl mx-auto space-y-6">
                  <div className="inline-flex items-center justify-center p-3 rounded-full bg-gradient-to-r from-primary/20 to-cyan-500/20">
                    <Glasses className="w-8 h-8 text-primary" /> {/* Changed from VirtualReality to Glasses */}
                  </div>
                  <h2 className="font-clash font-bold text-2xl md:text-3xl">
                    Ready to Enhance Your VR Experience?
                  </h2>
                  <p className="font-satoshi text-muted-foreground">
                    Transform your VR tours into interactive, community-driven experiences. 
                    Let users contribute their memories and create dynamic virtual galleries 
                    that evolve with every visit.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        size="lg"
                        className="gap-2"
                        onClick={handleContactClick}
                      >
                        <ExternalLink className="w-4 h-4" />
                        Start Your VR Gallery Project
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
                        onClick={() => handleNavigation("/work")}
                      >
                        View More Projects
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

export default ProjectDetail_5;