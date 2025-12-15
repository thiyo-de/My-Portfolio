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
  Music
} from "lucide-react";
import { useParams, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";

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
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=1200&h=800&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1200&h=800&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=800&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1545235617-9465d2a55698?w=1200&h=800&fit=crop&auto=format"
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

const ProjectDetail_2 = () => {
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
      <div className="relative  z-10">
        {/* Hero Section - Starts immediately under navbar */}
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
                        Live Site
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
                      <a href={project.adminUrl} target="_blank" rel="noopener noreferrer">
                        <Shield className="w-4 h-4" />
                        Admin Panel
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
                          <Heart className="w-3 h-3 mr-1.5" />
                          Interactive Wishes Platform
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

                {/* System Model Image */}
                <div className="mt-8 rounded-xl border bg-card/50 p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <Layers className="w-5 h-5 text-primary" />
                    <h4 className="font-clash font-semibold">System Architecture Model</h4>
                  </div>
                  <div className="relative rounded-lg overflow-hidden border">
                    <img 
                      src="https://github.com/thiyo-de/DS_Founder_BD-Wish/blob/main/Model.png?raw=true"
                      alt="System Architecture"
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                      <Badge className="bg-white/90 text-black border-0">
                        <Code className="w-3 h-3 mr-1.5" />
                        System Flow Diagram
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
                      Platform Performance
                    </h2>
                    <p className="font-satoshi text-muted-foreground">
                      High-performance metrics ensuring smooth user experience and reliability
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
                      Platform Capabilities
                    </h2>
                    <p className="font-satoshi text-muted-foreground">
                      Comprehensive features for creating memorable digital tribute experiences
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
                      Supported formats and specifications for wish submissions
                    </p>
                  </div>

                  <Card>
                    <CardContent className="p-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        {project.mediaSpecs.map((spec, index) => (
                          <div key={index} className="space-y-3">
                            <div className="flex items-center gap-3">
                              {spec.type === "Images" && <ImageIcon className="w-5 h-5 text-blue-500" />}
                              {spec.type === "Audio" && <Music className="w-5 h-5 text-purple-500" />}
                              {spec.type === "Video" && <Video className="w-5 h-5 text-red-500" />}
                              {spec.type === "Text" && <MessageSquare className="w-5 h-5 text-green-500" />}
                              <h3 className="font-clash font-bold">{spec.type}</h3>
                            </div>
                            <div className="space-y-2 font-satoshi text-sm">
                              <div className="flex justify-between">
                                <span className="text-muted-foreground">Formats:</span>
                                <span className="font-medium">{spec.formats || "Plain text"}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-muted-foreground">Max Size:</span>
                                <span className="font-medium">{spec.maxSize || spec.maxLength}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-muted-foreground">Key Features:</span>
                                <span className="font-medium">{spec.features}</span>
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
                          <Terminal className="w-8 h-8 text-primary" />
                        </div>
                        <h3 className="font-clash font-bold text-xl">
                          Request Flow Architecture
                        </h3>
                        <p className="font-satoshi text-muted-foreground">
                          User Submission → Media Processing → Database Storage → Admin Review → Public Display
                        </p>
                        <div className="flex flex-wrap justify-center items-center gap-4 text-sm font-satoshi text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-500">
                              User
                            </span>
                            <ChevronRight className="w-4 h-4" />
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-500">
                              Cloudinary
                            </span>
                            <ChevronRight className="w-4 h-4" />
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-500">
                              Supabase
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

                {/* Tabs Section for API, Usage, etc. */}
                <motion.section
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  className="space-y-6"
                >
                  <Tabs defaultValue="api" className="w-full">
                    <TabsList className="grid grid-cols-3 mb-6">
                      <TabsTrigger value="api">API</TabsTrigger>
                      <TabsTrigger value="usage">Usage</TabsTrigger>
                      <TabsTrigger value="deployment">Deployment</TabsTrigger>
                    </TabsList>

                    <TabsContent value="api" className="space-y-6">
                      <div className="space-y-4">
                        {project.apiExamples.map((api, index) => (
                          <Card key={index}>
                            <CardContent className="p-6">
                              <div className="flex items-center justify-between mb-4">
                                <div>
                                  <Badge
                                    className={cn(
                                      "mb-2",
                                      api.method === "POST"
                                        ? "bg-green-500/10 text-green-500"
                                        : "bg-blue-500/10 text-blue-500"
                                    )}
                                  >
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
                                  onClick={() => copyToClipboard(api.response, api.endpoint)}
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
                              {api.request && (
                                <div className="mb-4">
                                  <h4 className="font-clash font-semibold text-sm mb-2">
                                    Request Body
                                  </h4>
                                  <pre className="bg-muted p-4 rounded-lg text-xs overflow-x-auto font-mono">
                                    {api.request}
                                  </pre>
                                </div>
                              )}
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

                    <TabsContent value="usage" className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <h3 className="font-clash font-bold text-lg flex items-center gap-2">
                            <Upload className="w-5 h-5" />
                            User Submission Flow
                          </h3>
                          {project.usageExamples.submission.map((example, index) => (
                            <Card key={index}>
                              <CardContent className="p-4">
                                <div className="space-y-3">
                                  <div>
                                    <p className="font-satoshi text-sm text-muted-foreground">
                                      User Action
                                    </p>
                                    <p className="font-satoshi font-medium">
                                      {example.input}
                                    </p>
                                  </div>
                                  <Separator />
                                  <div>
                                    <p className="font-satoshi text-sm text-muted-foreground">
                                      System Response
                                    </p>
                                    <p className="font-satoshi">{example.response}</p>
                                  </div>
                                  <Badge variant="secondary" className="mt-2">
                                    {example.type}
                                  </Badge>
                                </div>
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                        <div className="space-y-4">
                          <h3 className="font-clash font-bold text-lg flex items-center gap-2">
                            <Shield className="w-5 h-5" />
                            Admin Operations
                          </h3>
                          {project.usageExamples.admin.map((example, index) => {
                            const Icon = example.icon;
                            return (
                              <Card key={index}>
                                <CardContent className="p-4">
                                  <div className="space-y-3">
                                    <div className="flex items-center justify-between">
                                      <div className="flex items-center gap-2">
                                        <Icon className="w-4 h-4 text-muted-foreground" />
                                        <p className="font-satoshi text-sm text-muted-foreground">
                                          Admin Task
                                        </p>
                                      </div>
                                      <ArrowLeft className="w-4 h-4 rotate-180 text-primary" />
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
                                    <Badge variant="outline">
                                      Target: {example.target}
                                    </Badge>
                                  </div>
                                </CardContent>
                              </Card>
                            );
                          })}
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
                          { label: "Frontend Components", value: "25+" },
                          { label: "API Endpoints", value: "12+" },
                          { label: "Media Types", value: "4" },
                          { label: "Deployment Targets", value: "2" }
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
                        Live Site
                      </a>
                    </Button>
                    <Button
                      variant="secondary"
                      size="sm"
                      className="gap-2"
                      asChild
                    >
                      <a href={project.adminUrl} target="_blank" rel="noopener noreferrer">
                        <Shield className="w-3 h-3" />
                        Admin Panel
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
                    <Heart className="w-8 h-8 text-primary" />
                  </div>
                  <h2 className="font-clash font-bold text-2xl md:text-3xl">
                    Ready to Create a Digital Tribute Platform?
                  </h2>
                  <p className="font-satoshi text-muted-foreground">
                    Let's build meaningful digital experiences that bring communities together and celebrate special moments.
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

export default ProjectDetail_2;