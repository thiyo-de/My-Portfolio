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
  Github
} from "lucide-react";
import { useParams, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";

const projectDetails = {
  ruthram360: {
    id: "1",
    title: "Ruthram360° — Virtual Tours & Google Street View Experts",
    tagline: "Transforming Spaces into Immersive Digital Experiences",
    description:
      "Cutting-edge digital media platform specializing in 360° Virtual Tours, Google Street View Blue-Line Mapping, and Digital Preservation services.",
    fullDescription: `
      Ruthram360° is a premier digital media platform that transforms physical spaces into 
      immersive digital experiences. We specialize in creating interactive 360° virtual tours, 
      Google Street View blue-line mapping, and digital preservation solutions for educational 
      institutions, industries, real estate, and heritage sites. Our platform delivers 
      stunning HDR-quality visuals and seamless navigation, allowing global audiences to 
      explore campuses, hospitals, hotels, and monuments from anywhere in the world.
      
      With our expertise in spatial imaging and digital storytelling, we help businesses 
      showcase their spaces in the most engaging way possible, enhancing visitor engagement, 
      improving accessibility, and preserving cultural heritage for future generations.
    `,
    tags: [
      "360° Virtual Tours",
      "Google Street View",
      "HDR Photography",
      "Drone Imaging",
      "Digital Preservation",
      "Interactive Walkthroughs",
      "WebGL",
      "React",
    ],
    images: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=800&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200&h=800&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&h=800&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1507149833265-60c372daea22?w=1200&h=800&fit=crop&auto=format",
    ],
    slug: "ruthram360",
    category: "Digital Media Platform / Web Application",
    liveUrl: "https://ruthram360.netlify.app/",
    githubUrl: "#",
    featured: true,
    role: "Lead Developer & Digital Media Specialist",
    duration: "6 Weeks",
    teamSize: "3 Members",

    techStack: [
      { name: "React 18", icon: Code, color: "text-cyan-500" },
      { name: "TypeScript", icon: Code2, color: "text-blue-500" },
      { name: "Vite", icon: Zap, color: "text-yellow-500" },
      { name: "Tailwind CSS", icon: Palette, color: "text-teal-500" },
      { name: "shadcn/ui", icon: Layers, color: "text-purple-500" },
      { name: "Netlify", icon: Cloud, color: "text-green-500" },
      { name: "Framer Motion", icon: Video, color: "text-pink-500" },
      { name: "Google Maps API", icon: Map, color: "text-red-500" },
    ],

    metrics: [
      {
        label: "Project Delivery",
        value: "6 Weeks",
        description: "Complete development cycle",
        icon: Clock,
      },
      {
        label: "Page Load Speed",
        value: "<1.5s",
        description: "Optimized performance",
        icon: Zap,
      },
      {
        label: "Image Quality",
        value: "HDR 4K",
        description: "High dynamic range",
        icon: Camera,
      },
      {
        label: "Virtual Tours",
        value: "50+",
        description: "Completed projects",
        icon: EyeIcon,
      },
      {
        label: "Client Satisfaction",
        value: "98%",
        description: "Positive feedback",
        icon: UsersIcon,
      },
      {
        label: "Global Coverage",
        value: "100+",
        description: "Locations mapped",
        icon: Globe,
      },
    ],

    coreFeatures: [
      {
        title: "Interactive 360° Virtual Tours",
        description:
          "Fully immersive panoramic experiences with seamless navigation",
        icon: EyeIcon,
        color: "bg-blue-500/10 text-blue-500",
        examples: [
          "Drag-to-rotate navigation",
          "Zoom in/out functionality",
          "Hotspot markers for navigation",
          "Mobile & desktop optimized",
        ],
      },
      {
        title: "Google Street View Integration",
        description:
          "Professional blue-line mapping and Street View publishing",
        icon: Map,
        color: "bg-purple-500/10 text-purple-500",
        examples: [
          "Blue-line route mapping",
          "Street View publishing",
          "Location pinning",
          "Route optimization",
        ],
      },
      {
        title: "Drone Aerial Photography",
        description: "Bird's-eye view perspectives for comprehensive coverage",
        icon: Satellite,
        color: "bg-green-500/10 text-green-500",
        examples: [
          "High-altitude panoramic shots",
          "Property boundary mapping",
          "Topographic visualization",
          "3D elevation modeling",
        ],
      },
      {
        title: "Digital Preservation",
        description: "Heritage and institutional archiving solutions",
        icon: Shield,
        color: "bg-pink-500/10 text-pink-500",
        examples: [
          "Cultural heritage documentation",
          "Historical site preservation",
          "Educational institution archives",
          "Industry facility records",
        ],
      },
    ],

    architecture: {
      description:
        "Modern web application with real-time image processing and interactive tour capabilities",
      components: [
        {
          name: "Frontend Application",
          description:
            "React-based SPA with interactive tour viewer and admin dashboard",
          technologies: [
            "React 18",
            "TypeScript",
            "Vite",
            "Framer Motion",
            "shadcn/ui",
          ],
          icon: Monitor,
        },
        {
          name: "Image Processing",
          description:
            "High-performance image stitching and HDR processing pipeline",
          technologies: [
            "WebGL",
            "Canvas API",
            "Image Processing",
            "HDR Optimization",
          ],
          icon: Camera,
        },
        {
          name: "Mapping & Navigation",
          description:
            "Google Maps integration with custom routing and location services",
          technologies: [
            "Google Maps API",
            "Geolocation",
            "Route Optimization",
            "Street View",
          ],
          icon: Map,
        },
        {
          name: "Deployment & Hosting",
          description: "Global CDN deployment with optimized asset delivery",
          technologies: ["Netlify", "CDN", "SSL", "Continuous Deployment"],
          icon: Cloud,
        },
      ],
    },

    projectStructure: [
      {
        path: "src/pages/",
        icon: FileCode,
        items: ["Home page", "Services", "Portfolio", "About", "Contact"],
        files: 5,
      },
      {
        path: "src/components/",
        icon: Layers,
        items: ["UI Components", "Tour Viewer", "Navigation", "Forms"],
        files: 15,
      },
      {
        path: "src/assets/",
        icon: ImageIcon,
        items: ["Virtual tour images", "Client logos", "Background visuals"],
        files: 100,
      },
      {
        path: "public/",
        icon: FolderOpen,
        items: ["Static assets", "Favicons", "SEO files"],
        files: 10,
      },
    ],

    serviceExamples: {
      verticals: [
        {
          industry: "Education",
          application: "Campus Virtual Tours",
          benefit: "Global student recruitment",
          icon: School,
        },
        {
          industry: "Real Estate",
          application: "Property Showcases",
          benefit: "Increased buyer engagement",
          icon: Home,
        },
        {
          industry: "Healthcare",
          application: "Hospital Facility Tours",
          benefit: "Patient confidence building",
          icon: Hospital,
        },
        {
          industry: "Hospitality",
          application: "Hotel Room Previews",
          benefit: "Higher booking rates",
          icon: Hotel,
        },
      ],
      technical: [
        {
          feature: "360° Image Stitching",
          challenge: "Seamless panorama creation",
          solution: "Advanced algorithms",
          icon: Scan,
        },
        {
          feature: "Interactive Hotspots",
          challenge: "User navigation",
          solution: "Intuitive UI/UX",
          icon: MapPin,
        },
        {
          feature: "Mobile Optimization",
          challenge: "Cross-device compatibility",
          solution: "Responsive design",
          icon: Smartphone,
        },
      ],
    },

    deployment: [
      {
        platform: "Netlify",
        command: "npm run build && netlify deploy",
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
        platform: "AWS S3",
        command: "aws s3 sync build/ s3://bucket",
        complexity: "Medium",
        icon: CloudUpload,
      },
      {
        platform: "Custom Server",
        command: "Manual file upload",
        complexity: "Basic",
        icon: Upload,
      },
    ],

    serviceFeatures: [
      { feature: "HDR 360° Photography", icon: Camera },
      { feature: "Interactive Navigation", icon: Compass },
      { feature: "Mobile-First Design", icon: Smartphone },
      { feature: "SEO Optimization", icon: BarChart3 },
      { feature: "Analytics Integration", icon: Brain },
      { feature: "Multi-language Support", icon: Globe },
    ],

    industrySpecs: [
      {
        industry: "Educational Institutions",
        features: "Campus tours, Lab showcases",
        pricing: "Custom",
        icon: School,
      },
      {
        industry: "Real Estate",
        features: "Property tours, Neighborhood views",
        pricing: "Per property",
        icon: Home,
      },
      {
        industry: "Healthcare",
        features: "Facility tours, Department mapping",
        pricing: "Enterprise",
        icon: Hospital,
      },
      {
        industry: "Heritage Sites",
        features: "Preservation, Historical documentation",
        pricing: "Project-based",
        icon: Building,
      },
    ],

    platformControls: {
      admin: [
        { control: "Tour Management", action: "Create/edit virtual tours" },
        { control: "Image Upload", action: "Upload 360° images" },
        { control: "Hotspot Placement", action: "Add interactive markers" },
        { control: "Analytics Dashboard", action: "View engagement metrics" },
      ],
      user: [
        { control: "Navigation Controls", action: "Drag/rotate/zoom" },
        { control: "Hotspot Click", action: "Move between scenes" },
        { control: "Fullscreen Mode", action: "Immersive viewing" },
        { control: "Share Function", action: "Share tour links" },
      ],
    },

    safetyFeatures: [
      { feature: "Data Encryption", icon: Lock },
      { feature: "Secure Image Hosting", icon: Shield },
      { feature: "GDPR Compliance", icon: ShieldCheck },
      { feature: "Access Control", icon: Key },
      { feature: "Backup Systems", icon: Database },
      { feature: "DDoS Protection", icon: Zap },
    ],

    mediaSpecs: [
      {
        type: "360° Panoramas",
        formats: "JPEG, WebP, Equirectangular",
        maxSize: "10MB",
        features: "HDR, 8K Resolution",
      },
      {
        type: "Drone Footage",
        formats: "MP4, MOV, ProRes",
        maxSize: "1GB",
        features: "4K, Stabilized",
      },
      {
        type: "Interactive Assets",
        formats: "JSON, XML",
        maxSize: "5MB",
        features: "Hotspot data, Navigation paths",
      },
      {
        type: "Audio Guides",
        formats: "MP3, WAV",
        maxSize: "50MB",
        duration: "Unlimited",
      },
    ],
  },
};

const ProjectDetail_4 = () => {
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
    navigate("/contact");
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
            <Globe className="w-8 h-8 text-primary" />
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
              onClick={() => handleNavigation("/work")}
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
          onClick={() => handleNavigation("/work")}
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
                      onClick={() => {
                        navigator.clipboard.writeText(project.githubUrl);
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
                      <a
                        href="#demo"
                        onClick={(e) => {
                          e.preventDefault();
                          alert(
                            "Virtual tour demo available on the live site!"
                          );
                        }}
                      >
                        <EyeIcon className="w-4 h-4" />
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
                          <Globe className="w-3 h-3 mr-1.5 text-primary" />
                          Virtual Tour Platform
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

                {/* Platform Model Image */}
                <div className="mt-8 rounded-xl border bg-card/50 p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <Layers className="w-5 h-5 text-primary" />
                    <h4 className="font-clash font-semibold">
                      Platform Architecture
                    </h4>
                  </div>
                  <div className="relative rounded-lg overflow-hidden border">
                    <img
                      src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop&auto=format"
                      alt="Platform Architecture"
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
                      High-performance metrics ensuring smooth virtual tour
                      experiences and reliability
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
                      Core Capabilities
                    </h2>
                    <p className="font-satoshi text-muted-foreground">
                      Comprehensive features for creating immersive digital
                      experiences
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
                      Media Specifications
                    </h2>
                    <p className="font-satoshi text-muted-foreground">
                      Supported formats and specifications for virtual tour
                      assets
                    </p>
                  </div>

                  <Card>
                    <CardContent className="p-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        {project.mediaSpecs.map((spec, index) => (
                          <div key={index} className="space-y-3">
                            <div className="flex items-center gap-3">
                              {spec.type === "360° Panoramas" && (
                                <Camera className="w-5 h-5 text-blue-500" />
                              )}
                              {spec.type === "Drone Footage" && (
                                <Satellite className="w-5 h-5 text-purple-500" />
                              )}
                              {spec.type === "Interactive Assets" && (
                                <Layers className="w-5 h-5 text-green-500" />
                              )}
                              {spec.type === "Audio Guides" && (
                                <Headphones className="w-5 h-5 text-pink-500" />
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
                                  Key Features:
                                </span>
                                <span className="font-medium">
                                  {spec.features || spec.duration}
                                </span>
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
                      Platform Architecture
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
                          Virtual Tour Pipeline
                        </h3>
                        <p className="font-satoshi text-muted-foreground">
                          Image Capture → Processing → Stitching → Interactive
                          Layer → Deployment
                        </p>
                        <div className="flex flex-wrap justify-center items-center gap-4 text-sm font-satoshi text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-500">
                              Capture
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
                              Stitch
                            </span>
                            <ChevronRight className="w-4 h-4" />
                          </div>
                          <div className="px-3 py-1 rounded-full bg-primary/10 text-primary">
                            Interactive
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.section>

                {/* Tabs Section for Services, Controls, etc. */}
                <motion.section
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  className="space-y-6"
                >
                  <Tabs defaultValue="services" className="w-full">
                    <TabsList className="grid grid-cols-3 mb-6">
                      <TabsTrigger value="services">Services</TabsTrigger>
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
                    Start Virtual Tour Project
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
                      onClick={() => {
                        navigator.clipboard.writeText(project.githubUrl);
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
                    <Globe className="w-8 h-8 text-primary" />
                  </div>
                  <h2 className="font-clash font-bold text-2xl md:text-3xl">
                    Ready to Transform Your Space Digitally?
                  </h2>
                  <p className="font-satoshi text-muted-foreground">
                    Let's create immersive virtual experiences that showcase
                    your space to the world. From educational campuses to
                    heritage sites, we bring spaces to life digitally.
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
                        onClick={() => handleNavigation("/work")}
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

export default ProjectDetail_4;