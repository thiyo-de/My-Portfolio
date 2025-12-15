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
  Shield,
  Zap,
  MessageCircle,
  Cpu,
  Database,
  Palette,
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
  Smartphone as SmartphoneIcon,
  MousePointer,
  Zap as ZapIcon,
  Shield as ShieldIcon,
  TrendingUp,
  Settings,
  ArrowRight,
  Award,
  Bolt,
  Headphones as HeadphonesIcon,
  RotateCw,
  ShieldOff,
  ShieldAlert,
  ArrowUpRight,
  Circle,
  Square,
  Star,
  Cloud as CloudIcon,
  Download as DownloadIcon,
  Upload as UploadIcon,
  RefreshCw,
  Folder,
  Package,
  File,
  FileText,
  FileCode as FileCodeIcon,
  FileJson,
  FileImage,
  QrCode,
  Save,
  Trash2,
  HardDrive,
  Laptop,
  Tablet,
  Printer,
  Scan,
  Camera as CameraIcon,
  Share,
  Link2,
  Copy as CopyIcon,
  WifiOff,
  DownloadCloud,
  UploadCloud,
  Database as DatabaseIcon2,
  Server as ServerIcon,
  Globe as Globe2,
  Network,
  Wifi as WifiIcon,
  Bluetooth,
  Battery,
  BatteryCharging,
  BatteryFull,
  Power,
  Microchip,
  CircuitBoard,
  ServerCog,
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
  Smartphone as Smartphone2,
  Tablet as TabletIcon,
  Laptop as LaptopIcon,
  Server as ServerIcon2,
  CloudLightning,
  Cctv,
  Phone,
  PhoneCall,
  PhoneForwarded,
  PhoneIncoming,
  PhoneOutgoing,
  PhoneMissed,
  Video as VideoIcon,
  Mic as MicIcon,
  MicOff,
  CameraOff,
  FileSearch,
  FilePlus,
  FileMinus,
  FileCheck,
  FileWarning,
  FolderPlus,
  FolderMinus,
  FolderCheck,
  FolderGit,
  SmartphoneCharging,
  Radio,
  Satellite,
  Signal,
  SignalHigh,
  SignalLow,
  Plug,
  Cpu as Cpu2,
  MemoryStick,
  DatabaseZap,
  QrCode as QrCodeIcon,
  GitPullRequest,
  GitCommit,
  GitBranch as GitBranchIcon,
  TerminalSquare,
  Command,
  Workflow,
  Network as NetworkIcon,
  ShieldPlus,
  ShieldMinus,
  EyeOff,
  Bell,
  BellOff,
  AlertCircle,
  CheckSquare,
  XCircle,
  PlayCircle,
  StopCircle,
  PauseCircle,
  SkipForward,
  SkipBack,
  FastForward,
  Rewind,
  Volume1,
  Move,
  Navigation,
  Compass,
  Wind,
  Feather,
  Hexagon,
  Pentagon,
  Octagon,
  Triangle,
  Heart as HeartIcon,
  Zap as ZapIcon2,
  Box,
  Archive,
  FolderTree,
  Keyboard,
  FileAudio,
  FileVideo,
  FileArchive,
  FileSpreadsheet,
  FileQuestion,
  FileInput,
  FileOutput,
  FolderOpen as FolderOpenIcon,
  FolderTree as FolderTreeIcon,
  SmartphoneNfc,
  SmartphoneCharging as SmartphoneChargingIcon,
  Scan as ScanIcon,
  ImagePlus,
  FileImage as FileImageIcon,
  Link as LinkIcon,
} from "lucide-react";
import { useParams, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";

const projectDetails = {
  "remote-access-app": {
    id: "8",
    title: "RemoteAccessApp",
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
      { name: "Android SDK 34", icon: SmartphoneIcon, color: "text-green-500" },
      { name: "Foreground Service", icon: ServerIcon, color: "text-blue-500" },
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
        icon: FolderOpenIcon,
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
        icon: NetworkIcon,
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
        icon: FileCodeIcon,
        items: ["network_security_config.xml", "permission_rules.xml"],
        files: 3,
      },
    ],

    apiExamples: [
      {
        endpoint: "get_device_info",
        description: "Retrieve detailed device information",
        method: "WebSocket",
        request: `{
  "command": "get_device_info",
  "request_id": "uuid-1234",
  "timestamp": "2024-01-15T10:30:00Z",
  "auth_token": "encrypted-token"
}`,
        response: `{
  "device": "Pixel 7",
  "android_version": "14",
  "battery_level": "85%",
  "storage_free": "64.2GB",
  "connection_status": "stable"
}`,
      },
      {
        endpoint: "file_upload",
        description: "Upload file to device storage",
        method: "WebSocket",
        request: `{
  "command": "file_upload",
  "request_id": "uuid-5678",
  "path": "/sdcard/Documents/report.pdf",
  "data": "Base64EncodedData...",
  "auth_token": "encrypted-token"
}`,
        response: `{
  "success": true,
  "file_size": "2.4MB",
  "saved_path": "/sdcard/Documents/report.pdf",
  "timestamp": "2024-01-15T10:32:00Z"
}`,
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
        command: "./gradlew assembleDebug && adb install app-debug.apk",
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
        icon: ServerIcon2,
        note: "Silent installation + pre-configuration",
      },
    ],

    compatibility: [
      {
        device: "Pixel",
        version: "Android 9+",
        status: "Full",
        icon: Smartphone,
      },
      {
        device: "Samsung",
        version: "One UI 4+",
        status: "Full",
        icon: Smartphone2,
      },
      {
        device: "Xiaomi",
        version: "MIUI 12+",
        status: "Optimized",
        icon: Smartphone,
      },
      {
        device: "Oppo/Vivo",
        version: "ColorOS 11+",
        status: "Optimized",
        icon: Smartphone,
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

    // New data from README
    supportedActions: [
      { action: "Device info / ping / logs", status: "✅ Active", icon: Cpu },
      { action: "File management", status: "✅ Active", icon: Folder },
      { action: "Microphone streaming", status: "✅ Active", icon: Mic },
      { action: "Camera preview / capture", status: "✅ Active", icon: Camera },
      { action: "Call logs (read)", status: "✅ Active", icon: PhoneCall },
      {
        action: "Dial outgoing calls",
        status: "✅ Active",
        icon: PhoneOutgoing,
      },
      { action: "Remote shell", status: "✅ Active", icon: TerminalSquare },
      { action: "Boot auto-start", status: "✅ Active", icon: Power },
      {
        action: "Battery optimization exemption",
        status: "✅ Active",
        icon: BatteryCharging,
      },
    ],

    distributionPaths: [
      {
        path: "Sideload APK",
        recommendation: "✅ Recommended",
        note: "Easiest path, supports All Files Access",
      },
      {
        path: "Play Store",
        recommendation: "⚠️ Limited",
        note: "Replace All Files Access with SAF folder pick",
      },
      {
        path: "MDM / Enterprise",
        recommendation: "✅ Yes",
        note: "Best for managed fleets",
      },
    ],

    testingChecklist: {
      compatibility: [
        "Android 9 → 15 (API 28-35)",
        "Pixel (Stock Android)",
        "Samsung (One UI customizations)",
        "Xiaomi (MIUI aggressive battery)",
        "Oppo/Vivo (ColorOS/Funtouch OS)",
        "OnePlus (OxygenOS)",
      ],
      reliability: [
        "Reboot auto-start verification",
        "Long-running mic/camera sessions (24h+)",
        "Permission revoke & recovery flow",
        "Network drop & automatic reconnect",
        "Large file transfer with resume",
        "Battery optimization exemption persistence",
      ],
      edgeCases: [
        "Low memory scenarios",
        "Airplane mode transitions",
        "Multiple permission revocations",
        "Service killed by system",
        "Storage full conditions",
      ],
    },
  },
};

const ProjectDetails_8 = () => {
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
            <Smartphone className="w-8 h-8 text-primary" />
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
      {/* Enhanced Background with Security Pattern */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        {/* Security Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,black,transparent)]" />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />

        {/* Animated Security Particles */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-primary rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
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
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-blue-500/10" />

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
                    <Badge
                      variant="default"
                      className="bg-red-500/10 text-red-500 border-0"
                    >
                      <Shield className="w-3 h-3 mr-1" />
                      Security-Focused
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

                  {/* Important Notice Card */}
                  <Card className="border-red-500/20 bg-red-500/5">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <ShieldAlert className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                        <div className="space-y-2">
                          <h3 className="font-clash font-semibold text-sm uppercase tracking-wider text-red-500">
                            Important Notice
                          </h3>
                          <p className="font-satoshi text-sm">
                            RemoteAccessApp is designed <strong>only</strong>{" "}
                            for scenarios where the device owner has explicitly
                            consented to all enabled capabilities and can see
                            and control the service at all times. Always runs as
                            a Foreground Service with visible notification. You
                            are responsible for legal compliance, user consent,
                            and ethical usage in your jurisdiction.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

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
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4" />
                        View on GitHub
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
                      onClick={handleContactClick}
                    >
                      <Mail className="w-4 h-4" />
                      Enterprise Inquiry
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
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center justify-between">
                        <Badge className="bg-background/90 backdrop-blur-sm border-0 px-3 py-1.5">
                          <Shield className="w-3 h-3 mr-1.5" />
                          Android Remote Assistance Framework
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
                    <h4 className="font-clash font-semibold">
                      Core Principles
                    </h4>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="text-center p-2 rounded-lg border">
                      <Eye className="w-4 h-4 mx-auto mb-1 text-blue-500" />
                      <p className="font-satoshi text-xs font-medium">
                        Transparency
                      </p>
                    </div>
                    <div className="text-center p-2 rounded-lg border">
                      <ShieldCheck className="w-4 h-4 mx-auto mb-1 text-green-500" />
                      <p className="font-satoshi text-xs font-medium">
                        Consent-First
                      </p>
                    </div>
                    <div className="text-center p-2 rounded-lg border">
                      <Bell className="w-4 h-4 mx-auto mb-1 text-purple-500" />
                      <p className="font-satoshi text-xs font-medium">
                        24/7 Service
                      </p>
                    </div>
                    <div className="text-center p-2 rounded-lg border">
                      <Lock className="w-4 h-4 mx-auto mb-1 text-red-500" />
                      <p className="font-satoshi text-xs font-medium">Secure</p>
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
            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,0.05)_25%,rgba(68,68,68,0.05)_50%,transparent_50%,transparent_75%,rgba(68,68,68,0.05)_75%)] bg-[length:10px_10px] opacity-100" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(12,14,18,0.9)_85%,rgba(12,14,18,1)_100%)]" />
          </div>

          <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

          {/* Content Container */}
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
              {/* Left Column - Main Content */}
              <div className="lg:col-span-2 space-y-12 lg:space-y-16">
                {/* Supported Actions Table */}
                {/* Supported Actions Table - Corrected Badge components */}
                <motion.section
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  className="space-y-6"
                >
                  <div>
                    <h2 className="font-clash font-bold text-2xl md:text-3xl mb-2">
                      Supported Actions
                    </h2>
                    <p className="font-satoshi text-muted-foreground">
                      Unlimited actions available after first approval with
                      clear indicators
                    </p>
                  </div>

                  <Card>
                    <CardContent className="p-0">
                      <div className="overflow-x-auto">
                        <table className="w-full">
                          <thead>
                            <tr className="border-b bg-muted/50">
                              <th className="text-left p-4 font-clash font-semibold">
                                Feature
                              </th>
                              <th className="text-left p-4 font-clash font-semibold">
                                Status
                              </th>
                              <th className="text-left p-4 font-clash font-semibold">
                                Indicators
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {project.supportedActions.map((action, index) => {
                              const Icon = action.icon;
                              return (
                                <tr
                                  key={index}
                                  className="border-b hover:bg-muted/30 transition-colors"
                                >
                                  <td className="p-4">
                                    <div className="flex items-center gap-3">
                                      <Icon className="w-4 h-4 text-muted-foreground" />
                                      <span className="font-satoshi">
                                        {action.action}
                                      </span>
                                    </div>
                                  </td>
                                  <td className="p-4">
                                    <Badge
                                      variant="outline"
                                      className="border-green-500/20 text-green-500"
                                    >
                                      {action.status}
                                    </Badge>
                                  </td>
                                  <td className="p-4">
                                    <div className="flex gap-1">
                                      <Badge
                                        variant="secondary"
                                        className="font-satoshi text-xs px-2 py-0.5"
                                      >
                                        Foreground Service
                                      </Badge>
                                      {action.action.includes("Mic") && (
                                        <Badge
                                          variant="secondary"
                                          className="font-satoshi text-xs px-2 py-0.5"
                                        >
                                          Mic Indicator
                                        </Badge>
                                      )}
                                      {action.action.includes("Camera") && (
                                        <Badge
                                          variant="secondary"
                                          className="font-satoshi text-xs px-2 py-0.5"
                                        >
                                          Camera Indicator
                                        </Badge>
                                      )}
                                    </div>
                                  </td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      </div>
                    </CardContent>
                  </Card>
                </motion.section>

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
                      Optimized for reliability and minimal resource consumption
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

                {/* Permission Levels */}
                <motion.section
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  className="space-y-6"
                >
                  <div>
                    <h2 className="font-clash font-bold text-2xl md:text-3xl mb-2">
                      Permission Levels
                    </h2>
                    <p className="font-satoshi text-muted-foreground">
                      Granular control over remote capabilities based on user
                      consent
                    </p>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4">
                    {project.permissionLevels.map((mode, index) => {
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
                      Everything needed for ethical and transparent remote
                      assistance
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

                {/* Security Specifications */}
                <motion.section
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  className="space-y-6"
                >
                  <div>
                    <h2 className="font-clash font-bold text-2xl md:text-3xl mb-2">
                      Security Baseline
                    </h2>
                    <p className="font-satoshi text-muted-foreground">
                      Enterprise-grade security features for safe remote
                      operations
                    </p>
                  </div>

                  <Card>
                    <CardContent className="p-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        {project.securitySpecs.map((spec, index) => {
                          const Icon = spec.icon;
                          return (
                            <div key={index} className="space-y-3">
                              <div className="flex items-center gap-3">
                                <Icon className="w-5 h-5 text-blue-500" />
                                <h3 className="font-clash font-bold">
                                  {spec.type}
                                </h3>
                                <Badge
                                  variant={
                                    spec.level === "High"
                                      ? "default"
                                      : spec.level === "Medium"
                                      ? "secondary"
                                      : "outline"
                                  }
                                >
                                  {spec.level}
                                </Badge>
                              </div>
                              <div className="space-y-2 font-satoshi text-sm">
                                <div className="flex justify-between">
                                  <span className="text-muted-foreground">
                                    Implementation:
                                  </span>
                                  <span className="font-medium">
                                    {spec.details}
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
                          <Workflow className="w-8 h-8 text-primary" />
                        </div>
                        <h3 className="font-clash font-bold text-xl">
                          Remote Access Flow
                        </h3>
                        <p className="font-satoshi text-muted-foreground">
                          User Consent → Permission Gate → Action Manager →
                          Secure Response
                        </p>
                        <div className="flex flex-wrap justify-center items-center gap-4 text-sm font-satoshi text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-500">
                              Consent
                            </span>
                            <ChevronRight className="w-4 h-4" />
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-500">
                              Validate
                            </span>
                            <ChevronRight className="w-4 h-4" />
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-500">
                              Execute
                            </span>
                            <ChevronRight className="w-4 h-4" />
                          </div>
                          <div className="px-3 py-1 rounded-full bg-yellow-500/10 text-yellow-500">
                            Respond
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
                  <Tabs defaultValue="workflow" className="w-full">
                    <TabsList className="grid grid-cols-3 mb-6">
                      <TabsTrigger value="workflow">Workflow</TabsTrigger>
                      <TabsTrigger value="api">Command API</TabsTrigger>
                      <TabsTrigger value="deployment">Deployment</TabsTrigger>
                    </TabsList>

                    <TabsContent value="workflow" className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <h3 className="font-clash font-bold text-lg flex items-center gap-2">
                            <Settings className="w-5 h-5" />
                            Setup Workflow
                          </h3>
                          {project.usageExamples.setup.map((example, index) => {
                            const Icon = example.icon;
                            return (
                              <Card key={index}>
                                <CardContent className="p-4">
                                  <div className="space-y-3">
                                    <div className="flex items-center gap-2">
                                      <Icon className="w-4 h-4 text-muted-foreground" />
                                      <p className="font-satoshi text-sm text-muted-foreground">
                                        Step
                                      </p>
                                    </div>
                                    <p className="font-satoshi font-medium">
                                      {example.step}
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
                          })}
                        </div>
                        <div className="space-y-4">
                          <h3 className="font-clash font-bold text-lg flex items-center gap-2">
                            <Cloud className="w-5 h-5" />
                            Remote Operations
                          </h3>
                          {project.usageExamples.remote.map(
                            (example, index) => {
                              const Icon = example.icon;
                              return (
                                <Card key={index}>
                                  <CardContent className="p-4">
                                    <div className="space-y-3">
                                      <div className="flex items-center gap-2">
                                        <Icon className="w-4 h-4 text-muted-foreground" />
                                        <p className="font-satoshi text-sm text-muted-foreground">
                                          Step
                                        </p>
                                      </div>
                                      <p className="font-satoshi font-medium">
                                        {example.step}
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
                                  <Badge className="bg-blue-500/10 text-blue-500 mb-2">
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
                                  Request
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
                      <div className="grid md:grid-cols-3 gap-4">
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
                                <div className="space-y-3">
                                  <p className="font-satoshi text-sm text-muted-foreground">
                                    {option.note}
                                  </p>
                                  <div>
                                    <p className="font-satoshi text-sm text-muted-foreground mb-2">
                                      Command
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
                                </div>
                              </CardContent>
                            </Card>
                          );
                        })}
                      </div>
                    </TabsContent>
                  </Tabs>
                </motion.section>

                {/* Distribution Paths */}
                <motion.section
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  className="space-y-6"
                >
                  <div>
                    <h2 className="font-clash font-bold text-2xl md:text-3xl mb-2">
                      Distribution Paths
                    </h2>
                    <p className="font-satoshi text-muted-foreground">
                      Multiple deployment options for different use cases
                    </p>
                  </div>

                  <Card>
                    <CardContent className="p-0">
                      <div className="overflow-x-auto">
                        <table className="w-full">
                          <thead>
                            <tr className="border-b bg-muted/50">
                              <th className="text-left p-4 font-clash font-semibold">
                                Path
                              </th>
                              <th className="text-left p-4 font-clash font-semibold">
                                Recommended
                              </th>
                              <th className="text-left p-4 font-clash font-semibold">
                                Notes
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {project.distributionPaths.map((path, index) => (
                              <tr
                                key={index}
                                className="border-b hover:bg-muted/30 transition-colors"
                              >
                                <td className="p-4 font-satoshi font-medium">
                                  {path.path}
                                </td>
                                <td className="p-4">
                                  <Badge
                                    variant={
                                      path.recommendation.includes("✅")
                                        ? "default"
                                        : path.recommendation.includes("⚠️")
                                        ? "secondary"
                                        : "outline"
                                    }
                                  >
                                    {path.recommendation}
                                  </Badge>
                                </td>
                                <td className="p-4 font-satoshi text-sm text-muted-foreground">
                                  {path.note}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </CardContent>
                  </Card>
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

                {/* Device Compatibility */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: 0.1 }}
                  className="space-y-6"
                >
                  <h3 className="font-clash font-bold text-xl flex items-center gap-2">
                    <Smartphone className="w-5 h-5 text-blue-500" />
                    Device Compatibility
                  </h3>
                  <div className="space-y-3">
                    {project.compatibility.map((device, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-3 rounded-lg border bg-card/50"
                      >
                        <div className="flex items-center gap-3">
                          <Smartphone className="w-4 h-4 text-muted-foreground" />
                          <div>
                            <span className="font-satoshi font-medium">
                              {device.device}
                            </span>
                            <p className="font-satoshi text-xs text-muted-foreground">
                              {device.version}
                            </p>
                          </div>
                        </div>
                        <Badge
                          variant={
                            device.status === "Full" ? "default" : "secondary"
                          }
                        >
                          {device.status}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Testing Checklist */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: 0.2 }}
                  className="space-y-6"
                >
                  <h3 className="font-clash font-bold text-xl">
                    Testing Checklist
                  </h3>
                  <Card>
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-clash font-semibold text-sm mb-2">
                            Compatibility
                          </h4>
                          <div className="space-y-1">
                            {project.testingChecklist.compatibility.map(
                              (item, idx) => (
                                <div
                                  key={idx}
                                  className="flex items-center gap-2"
                                >
                                  <CheckCircle className="w-3 h-3 text-green-500" />
                                  <span className="font-satoshi text-xs">
                                    {item}
                                  </span>
                                </div>
                              )
                            )}
                          </div>
                        </div>
                        <Separator />
                        <div>
                          <h4 className="font-clash font-semibold text-sm mb-2">
                            Reliability
                          </h4>
                          <div className="space-y-1">
                            {project.testingChecklist.reliability.map(
                              (item, idx) => (
                                <div
                                  key={idx}
                                  className="flex items-center gap-2"
                                >
                                  <CheckCircle className="w-3 h-3 text-blue-500" />
                                  <span className="font-satoshi text-xs">
                                    {item}
                                  </span>
                                </div>
                              )
                            )}
                          </div>
                        </div>
                        <Separator />
                        <div>
                          <h4 className="font-clash font-semibold text-sm mb-2">
                            Edge Cases
                          </h4>
                          <div className="space-y-1">
                            {project.testingChecklist.edgeCases.map(
                              (item, idx) => (
                                <div
                                  key={idx}
                                  className="flex items-center gap-2"
                                >
                                  <AlertCircle className="w-3 h-3 text-yellow-500" />
                                  <span className="font-satoshi text-xs">
                                    {item}
                                  </span>
                                </div>
                              )
                            )}
                          </div>
                        </div>
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
                    Enterprise Deployment
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
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-3 h-3" />
                        GitHub
                      </a>
                    </Button>
                    <Button
                      variant="secondary"
                      size="sm"
                      className="gap-2"
                      onClick={handleContactClick}
                    >
                      <Mail className="w-3 h-3" />
                      Contact
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
                    <ShieldCheck className="w-8 h-8 text-primary" />
                  </div>
                  <h2 className="font-clash font-bold text-2xl md:text-3xl">
                    Need Ethical Remote Access Solutions?
                  </h2>
                  <p className="font-satoshi text-muted-foreground">
                    Build secure, transparent, and consent-first remote
                    assistance applications for legitimate support scenarios.
                    Perfect for IT support, device management, and enterprise
                    remote access.
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
                        Discuss Your Project
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

export default ProjectDetails_8;
