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
  ArrowUpRight,
  ZoomIn,
} from "lucide-react";
import ImageViewer from "@/components/ImageViewer";
import { useParams, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import Img1 from "@/assets/ProjectDetails_DSFounderWishes/1.png";
import Img2 from "@/assets/ProjectDetails_DSFounderWishes/2.png";
import Img3 from "@/assets/ProjectDetails_DSFounderWishes/3.png";
import Img4 from "@/assets/ProjectDetails_DSFounderWishes/4.png";
import Thumbnail from "@/assets/ProjectDetails_DSFounderWishes/Thumnail.png";

const projectDetails = {
  "ds-founder-birthday-wishes": {
    id: "1",
    title: "DS Founder Birthday Wishes Platform",
    tagline: "A Digital Tribute to Visionary Leadership",
    description: "Interactive platform for collecting and displaying birthday wishes in multiple media formats",
    fullDescription: `
      A heartfelt digital tribute platform designed to celebrate visionary leadership by collecting wishes,
      messages, photos, audio, and video tributes from team members, partners, and the community. 
      This platform centralizes emotional tributes into an elegant, interactive digital hub perfect for 
      special occasions like birthdays, anniversaries, and memorials.
    `,
    tags: ["React", "TypeScript", "Supabase", "Cloudinary", "Tailwind CSS", "Framer Motion", "Netlify", "Full Stack"],
    images: [
      Thumbnail,
      Img1,
      Img2,
      Img3,
      Img4
    ],
    slug: "ds-founder-birthday-wishes",
    category: "Full Stack / Community Platform",
    liveUrl: "https://ds-founder-birth-day-wish.netlify.app/",
    adminUrl: "https://fantastic-narwhal-82b86b.netlify.app/",
    githubUrl: "https://github.com/thiyo-de/DS_Founder_BD-Wish",
    featured: true,
    role: "Full Stack Developer & System Architect",
    duration: "6 weeks",
    teamSize: "Solo Developer",

    techStack: [
      { name: "React 18", icon: Code, color: "text-cyan-500" },
      { name: "TypeScript", icon: FileCode, color: "text-blue-500" },
      { name: "Supabase", icon: DatabaseIcon, color: "text-emerald-500" },
      { name: "Cloudinary", icon: CloudUpload, color: "text-yellow-500" },
      { name: "Tailwind CSS", icon: Layers, color: "text-teal-500" },
      { name: "Framer Motion", icon: Zap, color: "text-purple-500" },
      { name: "Netlify", icon: Cloud, color: "text-orange-500" },
      { name: "Vite", icon: Terminal, color: "text-pink-500" }
    ],

    metrics: [
      { label: "Uptime", value: "99.9%", description: "Production reliability", icon: ShieldCheck },
      { label: "Media Processing", value: "< 2s", description: "Average upload time", icon: Zap },
      { label: "Wishes Collected", value: "500+", description: "Messages and media", icon: Heart },
      { label: "User Satisfaction", value: "98%", description: "Positive feedback rate", icon: Sparkles },
      { label: "Response Time", value: "< 100ms", description: "API response time", icon: Cpu },
      { label: "Cross-Platform", value: "100%", description: "Mobile & desktop ready", icon: Smartphone }
    ],

    coreFeatures: [
      {
        title: "Multi-Format Wishes",
        description: "Support for text, images, audio, and video tributes with intelligent file handling",
        icon: Upload,
        color: "bg-blue-500/10 text-blue-500",
        examples: [
          "Text: Up to 500 words heartfelt messages",
          "Images: JPEG, PNG, WebP up to 5MB",
          "Audio: Record/upload up to 30 seconds",
          "Video: Up to 60 seconds memories"
        ]
      },
      {
        title: "Interactive Wishes Wall",
        description: "Beautiful gallery view with smooth animations and filtering capabilities",
        icon: Heart,
        color: "bg-pink-500/10 text-pink-500",
        examples: [
          "Grid layout with masonry design",
          "Real-time updates with Supabase",
          "Smooth Framer Motion animations",
          "Category-based filtering"
        ]
      },
      {
        title: "Smart Onboarding",
        description: "Context-aware popup guides to encourage participation and engagement",
        icon: Sparkles,
        color: "bg-yellow-500/10 text-yellow-500",
        examples: [
          "First-visit popup with CTAs",
          "Step-by-step submission guide",
          "Media format recommendations",
          "Success confirmation flows"
        ]
      },
      {
        title: "Admin Dashboard",
        description: "Complete moderation and management system for content control",
        icon: Shield,
        color: "bg-green-500/10 text-green-500",
        examples: [
          "Approve/reject submissions",
          "Highlight special wishes",
          "User management tools",
          "Analytics dashboard"
        ]
      }
    ],

    architecture: {
      description: "Scalable serverless architecture with real-time capabilities and secure media handling",
      components: [
        {
          name: "Frontend Layer",
          description: "Responsive React app with TypeScript and modern UI patterns",
          technologies: ["React 18", "TypeScript", "Tailwind CSS", "Framer Motion"],
          icon: Monitor
        },
        {
          name: "Backend Services",
          description: "Supabase-powered backend with PostgreSQL database and real-time subscriptions",
          technologies: ["Supabase Auth", "PostgreSQL", "Row Level Security", "Edge Functions"],
          icon: Server
        },
        {
          name: "Media Pipeline",
          description: "Cloudinary integration for optimized media uploads and transformations",
          technologies: ["Cloudinary API", "Image Optimization", "Video Compression", "CDN Delivery"],
          icon: CloudUpload
        },
        {
          name: "Deployment Layer",
          description: "Automated CI/CD pipeline with Netlify for seamless deployments",
          technologies: ["Netlify", "GitHub Actions", "Environment Variables", "SSL Certificates"],
          icon: Cloud
        }
      ]
    },

    projectStructure: [
      {
        path: "src/components/",
        icon: FileCode,
        items: ["Popup.tsx", "WishCard.tsx", "UploadForm.tsx", "AdminPanel.tsx"],
        files: 12
      },
      {
        path: "src/pages/",
        icon: FolderOpen,
        items: ["Home.tsx", "Admin.tsx", "WishesWall.tsx"],
        files: 5
      },
      {
        path: "src/integrations/",
        icon: Database,
        items: ["supabase.ts", "cloudinary.ts", "api.ts"],
        files: 5
      },
      {
        path: "src/hooks/",
        icon: Code,
        items: ["useUpload.ts", "useWishes.ts", "useToast.ts"],
        files: 6
      },
      {
        path: "public/assets/",
        icon: ImageIcon,
        items: ["logos/", "icons/", "default-images/"],
        files: 20
      }
    ],

    apiExamples: [
      {
        endpoint: "POST /api/submit-wish",
        description: "Submit a new wish with optional media",
        method: "POST",
        request: `{
  "name": "John Doe",
  "message": "Happy Birthday! Thank you for your leadership...",
  "type": "text",
  "mediaUrl": "cloudinary.com/...",
  "mediaType": "image/jpeg"
}`,
        response: `{
  "success": true,
  "wishId": "wish_123456",
  "message": "Wish submitted successfully",
  "requiresApproval": true,
  "timestamp": "2024-01-15T10:30:00Z"
}`
      },
      {
        endpoint: "GET /api/wishes",
        description: "Fetch all approved wishes with pagination",
        method: "GET",
        response: `{
  "wishes": [
    {
      "id": "wish_123",
      "name": "Jane Smith",
      "message": "Heartfelt message...",
      "type": "video",
      "mediaUrl": "cloudinary.com/video.mp4",
      "createdAt": "2024-01-15T09:30:00Z",
      "isHighlighted": true
    }
  ],
  "total": 156,
  "page": 1,
  "hasMore": true
}`
      }
    ],

    usageExamples: {
      submission: [
        { input: "Text Wish", response: "500 characters heartfelt message", type: "text-submission" },
        { input: "Photo Upload", response: "5MB max, automatic optimization", type: "media-upload" },
        { input: "Audio Tribute", response: "30 seconds voice message", type: "audio-recording" }
      ],
      admin: [
        { input: "Content Moderation", action: "Approve/Reject wishes", target: "admin-panel", icon: ShieldCheck },
        { input: "Highlight Wishes", action: "Feature special messages", target: "highlight-toggle", icon: Sparkles },
        { input: "Analytics View", action: "View engagement metrics", target: "analytics", icon: BarChart3 }
      ]
    },

    deployment: [
      { platform: "Netlify", command: "netlify deploy --prod", complexity: "Easy", icon: Cloud },
      { platform: "Vercel", command: "vercel --prod", complexity: "Easy", icon: Cloud },
      { platform: "Docker", command: "docker build -t wishes-platform .", complexity: "Medium", icon: Download },
      { platform: "Manual", command: "npm run build && deploy", complexity: "Advanced", icon: Terminal }
    ],

    safetyFeatures: [
      { feature: "Content moderation before publishing", icon: Shield },
      { feature: "Secure file upload validation", icon: Lock },
      { feature: "GDPR compliant data handling", icon: ShieldCheck },
      { feature: "Rate limiting on submissions", icon: Zap },
      { feature: "CORS configured for specific domains", icon: Globe },
      { feature: "Secure environment variables", icon: Key }
    ],

    mediaSpecs: [
      { type: "Images", formats: "JPEG, PNG, WebP", maxSize: "5MB", features: "Auto-optimization" },
      { type: "Audio", formats: "MP3, WAV, OGG", maxSize: "10MB", duration: "30s max" },
      { type: "Video", formats: "MP4, WebM", maxSize: "50MB", duration: "60s max" },
      { type: "Text", maxLength: "500 words", features: "Rich formatting" }
    ]
  }
};

const ProjectDetail_DSFounderWishes = () => {
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
                    <div className="font-bold font-clash">Zero Hallucination</div>
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
                    <a href="#api" className="block text-sm text-muted-foreground hover:text-primary transition-colors">API Reference</a>
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

              </div>

              {/* Bento Grid Features */}
              <div id="features" className="space-y-8">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                  <div>
                    <span className="font-grotesk text-xs tracking-[0.3em] text-primary uppercase">Innovations</span>
                    <h2 className="font-clash font-bold text-3xl sm:text-4xl mt-2">Core Capabilities</h2>
                  </div>
                  <p className="max-w-md text-muted-foreground text-sm sm:text-right">
                    Powered by advanced machine learning models and real-time 3D rendering engines.
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

              {/* Gallery Slider */}


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

export default ProjectDetail_DSFounderWishes;