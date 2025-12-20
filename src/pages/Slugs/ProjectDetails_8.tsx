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
  Globe2,
  BatteryCharging,
  MemoryStick,
  Battery,
  Package,
  TerminalSquare,
  PhoneCall,
  PhoneOutgoing,
  PlayCircle,
  ServerCog,
  KeyRound,
  LockIcon,
  CheckSquare,
  Power
} from "lucide-react";
import { useParams, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";

const projectDetails = {
  "remote-access-app": {
    id: "8",
    title: "Remote Access App",
    tagline: "Consent-first Android Remote Assistance Framework",
    description:
      "24/7 Foreground Service with Persistent Notification & Explicit User Approvals",
    fullDescription: `
      RemoteAccessApp is a professional-grade Android remote assistance framework designed with 
      transparency and user consent as its core principles. Built as a 24/7 foreground service 
      with persistent notifications, it ensures users are always aware of active remote sessions. 
      The framework requires explicit user approvals for all capabilities and operates with 
      complete visibility—no hidden behaviors or silent background access. Ideal for legitimate 
      remote support scenarios where device owners have explicitly consented to enabled capabilities.
    `,
    tags: [
      "Android",
      "Kotlin",
      "Foreground Service",
      "WebSocket",
      "Security",
      "Consent-first",
      "Remote Assistance",
      "24/7 Operation",
    ],
    images: [
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&h=800&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=800&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=800&fit=crop&auto=format",
    ],
    slug: "remote-access-app",
    category: "Android Framework",
    liveUrl: "https://github.com/JCodeX-Dev/Remote-Access-App",
    githubUrl: "https://github.com/JCodeX-Dev/Remote-Access-App",
    featured: true,
    role: "Lead Android Developer",
    duration: "3 months",
    teamSize: "Solo Developer",

    techStack: [
      { name: "Kotlin 1.9.0", icon: CodeIcon, color: "text-purple-500" },
      { name: "Android SDK 34", icon: Smartphone, color: "text-green-500" },
      { name: "Foreground Service", icon: Server, color: "text-blue-500" },
      { name: "WebSocket", icon: Globe2, color: "text-yellow-500" },
      { name: "Jetpack Security", icon: ShieldCheck, color: "text-red-500" },
      { name: "Coroutines", icon: Zap, color: "text-orange-500" },
      { name: "Room Database", icon: Database, color: "text-indigo-500" },
      { name: "Material Design 3", icon: Palette, color: "text-pink-500" },
    ],

    metrics: [
      {
        label: "Service Uptime",
        value: "99.9%",
        description: "Auto-restart + boot receiver",
        icon: BatteryCharging,
      },
      {
        label: "Memory Usage",
        value: "< 50MB",
        description: "Efficient managers + cleanup",
        icon: MemoryStick,
      },
      {
        label: "Battery Impact",
        value: "< 2%/day",
        description: "Foreground optimization",
        icon: Battery,
      },
      {
        label: "Response Time",
        value: "< 500ms",
        description: "Async operations + caching",
        icon: Zap,
      },
      {
        label: "Android Support",
        value: "9 → 15",
        description: "API 28-35 compatibility",
        icon: Smartphone,
      },
      {
        label: "Reconnection Delay",
        value: "< 30s",
        description: "Exponential backoff",
        icon: RefreshCw,
      },
    ],

    coreFeatures: [
      {
        title: "Consent-First Architecture",
        description:
          "Explicit user approvals for every capability with persistent notifications",
        icon: ShieldCheck,
        color: "bg-green-500/10 text-green-500",
        examples: [
          "One-time permission flow",
          "Runtime permission validation",
          "User kill-switch accessible",
        ],
      },
      {
        title: "24/7 Foreground Service",
        description:
          "Always runs with visible notification and real-time status indicators",
        icon: Server,
        color: "bg-blue-500/10 text-blue-500",
        examples: [
          "Boot auto-start",
          "Battery optimization exempt",
          "OEM-specific optimizations",
        ],
      },
      {
        title: "Secure Communication",
        description:
          "WSS-only with TLS 1.3, certificate pinning, and token-based auth",
        icon: Lock,
        color: "bg-purple-500/10 text-purple-500",
        examples: [
          "Encrypted preferences",
          "MITM protection",
          "Session-based tokens",
        ],
      },
      {
        title: "Modular Action Managers",
        description:
          "Independent managers for files, mic, camera, calls, and shell access",
        icon: Package,
        color: "bg-orange-500/10 text-orange-500",
        examples: [
          "Sandboxed shell commands",
          "Real-time streaming",
          "File transfer resume",
        ],
      },
    ],

    architecture: {
      description:
        "Modular Android architecture with foreground service foundation, permission gate system, and secure WebSocket communication",
      components: [
        {
          name: "RemoteService",
          description:
            "24/7 foreground service with notification and status management",
          technologies: [
            "Foreground Service",
            "Notification Channel",
            "Lifecycle",
          ],
          icon: Server,
        },
        {
          name: "Permission Gate",
          description:
            "Validates user consent and Android permissions for each action",
          technologies: [
            "Runtime Permissions",
            "Consent Storage",
            "Validation Logic",
          ],
          icon: Shield,
        },
        {
          name: "WebSocket Manager",
          description: "Manages secure WSS connections with reconnection logic",
          technologies: ["WebSocket", "TLS 1.3", "Certificate Pinning"],
          icon: Globe,
        },
        {
          name: "Action Managers",
          description: "Specialized managers for different remote capabilities",
          technologies: ["CameraX", "AudioRecord", "File API", "Telephony"],
          icon: Package,
        },
      ],
    },

    projectStructure: [
      {
        path: "app/src/main/java/com/remoteaccess/",
        icon: FolderOpen,
        items: [
          "App.kt",
          "SetupActivity.kt",
          "RemoteService.kt",
          "BootReceiver.kt",
        ],
        files: 12,
      },
      {
        path: "network/",
        icon: Network,
        items: ["WebSocketManager.kt", "MessageRouter.kt", "CommandParser.kt"],
        files: 5,
      },
      {
        path: "managers/",
        icon: Package,
        items: [
          "FileManager.kt",
          "MicManager.kt",
          "CameraManager.kt",
          "ShellManager.kt",
        ],
        files: 8,
      },
      {
        path: "security/",
        icon: Shield,
        items: ["CryptoStore.kt", "CertPinning.kt", "PermissionGate.kt"],
        files: 4,
      },
      {
        path: "res/xml/",
        icon: FileCode,
        items: ["network_security_config.xml", "permission_rules.xml"],
        files: 3,
      },
    ],

    permissionLevels: [
      {
        level: "Basic",
        icon: Shield,
        color: "text-green-500",
        description: "Device info & file management",
        features: [
          "Get device info",
          "List files",
          "File transfer",
          "Basic logs",
        ],
      },
      {
        level: "Enhanced",
        icon: Mic,
        color: "text-yellow-500",
        description: "Adds audio & camera access",
        features: [
          "Microphone streaming",
          "Camera preview",
          "Photo capture",
          "Call logs",
        ],
      },
      {
        level: "Full",
        icon: TerminalSquare,
        color: "text-red-500",
        description: "Complete remote assistance",
        features: [
          "Shell access",
          "Call dialing",
          "All files access",
          "Boot auto-start",
        ],
      },
    ],

    usageExamples: {
      setup: [
        {
          step: "1. Launch App",
          action: "Transparent setup screen appears",
          icon: PlayCircle,
        },
        {
          step: "2. Grant Permissions",
          action: "Sequential Android permission dialogs",
          icon: ShieldCheck,
        },
        {
          step: "3. System Settings",
          action: "Guided access to battery & file settings",
          icon: Settings,
        },
        {
          step: "4. Service Starts",
          action: "Foreground service with persistent notification",
          icon: Server,
        },
      ],
      remote: [
        {
          step: "Server Command",
          action: "Secure WebSocket command sent",
          icon: Cloud,
        },
        {
          step: "Permission Gate",
          action: "Validates user consent & permissions",
          icon: Shield,
        },
        {
          step: "Execute Action",
          action: "Corresponding manager processes request",
          icon: Zap,
        },
        {
          step: "Send Response",
          action: "Result returned via WebSocket",
          icon: UploadCloud,
        },
      ],
    },

    deployment: [
      {
        platform: "Sideload APK",
        command: "./gradlew assembleDebug",
        complexity: "Easy",
        icon: Download,
        note: "Supports All Files Access permission",
      },
      {
        platform: "Play Store",
        command: "./gradlew bundleRelease",
        complexity: "Medium",
        icon: Play,
        note: "Replace with SAF folder picker",
      },
      {
        platform: "MDM/Enterprise",
        command: "Distribute via MDM console",
        complexity: "Advanced",
        icon: ServerCog,
        note: "Silent installation + pre-configuration",
      },
    ],

    securitySpecs: [
      {
        type: "Network Security",
        details: "TLS 1.3 + Certificate Pinning",
        level: "High",
        icon: ShieldCheck,
      },
      {
        type: "Data Storage",
        details: "Encrypted SharedPreferences",
        level: "High",
        icon: Database,
      },
      {
        type: "Authentication",
        details: "Token-based per session",
        level: "High",
        icon: KeyRound,
      },
      {
        type: "Shell Access",
        details: "Sandboxed + Allow-listed",
        level: "Medium",
        icon: TerminalSquare,
      },
    ],

    supportedActions: [
      { action: "Device info / ping / logs", status: "Active", icon: Cpu },
      { action: "File management", status: "Active", icon: Folder },
      { action: "Microphone streaming", status: "Active", icon: Mic },
      { action: "Camera preview / capture", status: "Active", icon: Camera },
      { action: "Call logs (read)", status: "Active", icon: PhoneCall },
      {
        action: "Dial outgoing calls",
        status: "Active",
        icon: PhoneOutgoing,
      },
      { action: "Remote shell", status: "Active", icon: TerminalSquare },
      { action: "Boot auto-start", status: "Active", icon: Power },
    ],
  },
};

const ProjectDetail_8 = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [activeImage, setActiveImage] = useState(0);
  const [activeTab, setActiveTab] = useState("setup");
  const project = projectDetails["remote-access-app"];

  const handleNavigation = (path: string) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate(path);
  };

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto">
            <Smartphone className="w-8 h-8 text-muted-foreground" />
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

      <div className="fixed inset-0 z-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
      
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
                
                <h1 className="font-clash font-black text-4xl sm:text-6xl lg:text-7xl leading-[0.9] tracking-tight mb-6 break-words">
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
                   <div className="p-2 bg-blue-500/20 rounded-lg">
                     <ShieldCheck className="w-6 h-6 text-blue-500" />
                   </div>
                   <div>
                     <div className="text-xs text-muted-foreground font-grotesk uppercase">Status</div>
                     <div className="font-bold font-clash">Protected</div>
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
                     <a href="#security" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Security</a>
                     <a href="#capabilities" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Capabilities</a>
                     <a href="#workflow" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Workflow</a>
                     <a href="#tech" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Technology Stack</a>
                      <a href="#structure" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Structure</a>
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
               
               {/* About */}
               <div id="about" className="space-y-6">
                 <span className="font-grotesk text-xs tracking-[0.3em] text-primary uppercase">Context</span>
                 <h2 className="font-clash font-bold text-3xl sm:text-4xl">System Overview</h2>
                 <p className="font-satoshi text-lg leading-relaxed text-muted-foreground">
                   {project.fullDescription}
                 </p>
                 <div className="grid sm:grid-cols-2 gap-4 pt-4">
                   {project.coreFeatures.slice(0,2).map((feature, i) => (
                     <div key={i} className="p-4 rounded-xl bg-muted/30 border border-border/50">
                       <h4 className="font-bold mb-2 flex items-center gap-2">
                         <feature.icon className="w-4 h-4 text-primary" /> {feature.title}
                       </h4>
                       <p className="text-sm text-muted-foreground">{feature.description}</p>
                     </div>
                   ))}
                 </div>
               </div>

                {/* Security Levels */}
                <div id="security" className="space-y-8">
                   <h2 className="font-clash font-bold text-3xl sm:text-4xl">Security Protocols</h2>
                   
                   {/* Security Specs Grid */}
                   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                      {project.securitySpecs.map((spec, i) => (
                        <div key={i} className="p-4 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-colors">
                           <div className="bg-primary/5 p-2 rounded-lg w-fit mb-3">
                              <spec.icon className="w-5 h-5 text-primary" />
                           </div>
                           <h4 className="font-bold text-sm mb-1">{spec.type}</h4>
                           <div className="text-xs text-muted-foreground mb-2">{spec.details}</div>
                           <Badge variant="outline" className="text-[10px] bg-green-500/10 text-green-500 border-green-500/20">{spec.level}</Badge>
                        </div>
                      ))}
                   </div>

                   <h3 className="font-clash font-bold text-xl mb-4">Permission Levels</h3>
                   <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                      {project.permissionLevels.map((mode, i) => (
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

                {/* Supported Actions */}
                <div id="capabilities" className="space-y-8">
                   <h2 className="font-clash font-bold text-3xl sm:text-4xl">System Capabilities</h2>
                   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                      {project.supportedActions.map((action, i) => (
                         <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-muted/20 border border-border/50">
                            <action.icon className="w-5 h-5 text-muted-foreground" />
                            <div className="flex-1">
                               <div className="text-sm font-medium">{action.action}</div>
                               <div className="text-[10px] text-green-500 font-mono tracking-wide uppercase">{action.status}</div>
                            </div>
                         </div>
                      ))}
                   </div>
                </div>

                {/* Workflow / Usage */}
                <div id="workflow" className="space-y-8">
                  <h2 className="font-clash font-bold text-3xl sm:text-4xl">Operations Workflow</h2>
                  <Tabs defaultValue="setup" className="w-full">
                    <TabsList className="bg-muted/50 p-1 rounded-full mb-6 relative z-10 w-full sm:w-fit grid grid-cols-2 sm:flex">
                      <TabsTrigger value="setup" className="rounded-full px-6">App Setup</TabsTrigger>
                      <TabsTrigger value="remote" className="rounded-full px-6">Remote Flow</TabsTrigger>
                    </TabsList>
                    <TabsContent value="setup">
                      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {project.usageExamples.setup.map((item, i) => (
                           <div key={i} className="flex flex-col gap-4 p-4 rounded-xl bg-card border border-border/50 h-full relative">
                              <div className="absolute top-4 right-4 text-[40px] font-black opacity-5 text-primary">{i + 1}</div>
                              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary z-10">
                                 <item.icon className="w-5 h-5" />
                              </div>
                              <div className="z-10">
                                 <div className="font-bold text-sm mb-1">{item.step}</div>
                                 <div className="text-xs text-muted-foreground">{item.action}</div>
                              </div>
                           </div>
                        ))}
                      </div>
                    </TabsContent>
                    <TabsContent value="remote">
                      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                         {project.usageExamples.remote.map((item, i) => (
                           <div key={i} className="flex flex-col gap-4 p-4 rounded-xl bg-card border border-border/50 h-full relative">
                             <div className="absolute top-4 right-4 text-[40px] font-black opacity-5 text-primary">{i + 1}</div>
                              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary z-10">
                                 <item.icon className="w-5 h-5" />
                              </div>
                              <div className="z-10">
                                 <div className="font-bold text-sm mb-1">{item.step}</div>
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
                                  {item.files} files • {item.items.slice(0, 1).join("")}...
                               </div>
                            </div>
                         </div>
                      ))}
                   </div>
                </div>

                {/* Deployment Section */}
                <div id="deployment" className="space-y-8">
                  <h2 className="font-clash font-bold text-3xl sm:text-4xl">Deployment Options</h2>
                   <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                      {project.deployment.map((deploy, i) => (
                        <div key={i} className="flex flex-col gap-4 p-5 rounded-xl bg-muted/20 border border-border/50">
                           <div className="flex items-center justify-between">
                              <div className="p-2 bg-background rounded-lg border border-border">
                                <deploy.icon className="w-6 h-6 text-primary" />
                              </div>
                              <Badge variant="outline" className="text-[10px] h-5">{deploy.complexity}</Badge>
                           </div>
                           
                           <div>
                              <h4 className="font-bold font-clash mb-1">{deploy.platform}</h4>
                              <div className="text-xs text-muted-foreground mb-3">{deploy.note}</div>
                              <code className="text-[10px] bg-muted px-2 py-1 rounded text-primary block break-all">{deploy.command}</code>
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

export default ProjectDetail_8;
