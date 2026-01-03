import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
    BarChart3,
    CpuIcon,
    DatabaseIcon,
    CodeIcon,
    FolderOpen,
    Key,
    Lock,
    Cloud,
    Download,
    Maximize2,
    CheckCircle2,
    ShieldCheck,
    Monitor,
    ArrowUpRight,
    FileBox,
    HardDrive,
    Layers,
    Settings,
    AlertTriangle,
    Clock,
    Eye,
    CloudUpload,
    AlertCircle,
    ZoomIn
} from "lucide-react";
import ImageViewer from "@/components/ImageViewer";
import { useParams, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import Img1 from "@/assets/ProjectDetails_DroneMerge/1.webp";
import Img2 from "@/assets/ProjectDetails_DroneMerge/2.webp";
import Img3 from "@/assets/ProjectDetails_DroneMerge/3.webp";
import Thumbnail from "@/assets/ProjectDetails_DroneMerge/Thumnail.webp";

const projectDetails = {
    "drone-footage-merge-tool": {
        id: "10",
        title: "Drone Footage Merge Tool",
        tagline: "Automated Footage Organization for Production Teams",
        description: "An internal office tool for automatically merging drone footage from multiple memory cards into organized, editor-ready folders.",
        fullDescription: `
      The Drone Footage Merge Tool is a cross-platform desktop application designed for production offices that handle large volumes of drone footage. It automatically scans multiple memory cards, identifies matching VID_ folders, and merges them into a single organized structure with zero risk of file overwriting.
      
      It solves the problem of time-consuming manual copying from 6+ memory cards per shoot, disorganized folder structures, and the risk of overwriting files with identical names.
    `,
        tags: ["Electron", "Node.js", "Desktop App", "Automation", "File Manipulation"],
        images: [
            Thumbnail,
            Img1,
            Img2,
            Img3
        ],
        slug: "drone-footage-merge-tool",
        category: "Desktop Application",
        liveUrl: "#", // Internal tool, maybe no live link
        githubUrl: "https://github.com/thiyo-de/Drone-Footage-Merge-Tool",
        featured: false,
        role: "Lead Developer",
        duration: "1 month",
        teamSize: "Solo Developer",

        techStack: [
            { name: "Electron", icon: Monitor, color: "text-blue-500" },
            { name: "Node.js", icon: Server, color: "text-green-500" },
            { name: "React", icon: CodeIcon, color: "text-cyan-500" },
            { name: "File System", icon: HardDrive, color: "text-yellow-500" },
            { name: "IPC Bridge", icon: Cpu, color: "text-purple-500" }
        ],

        metrics: [
            { label: "Time Savings", value: "40+ min", description: "Per shoot day", icon: Clock },
            { label: "Overwrite Risk", value: "0%", description: "Safe merge guarantee", icon: ShieldCheck },
            { label: "Platform", value: "Win/Mac", description: "Cross-platform support", icon: Monitor },
            { label: "Accuracy", value: "100%", description: "Automated organization", icon: Target },
            { label: "Files Handled", value: "1000+", description: "Per merge operation", icon: FileBox },
            { label: "User Feedback", value: "Positive", description: "Internal team adoption", icon: Users }
        ],

        coreFeatures: [
            {
                title: "Smart Scanning",
                description: "Read-only scan to preview merge operations before execution, detecting 'VID_' folders automatically.",
                icon: Eye,
                color: "bg-blue-500/10 text-blue-500",
                examples: [
                    "Detects Card 1, Card 2... structure",
                    "Previews total file count & size"
                ]
            },
            {
                title: "Zero Overwrite Risk",
                description: "Automatic renaming of duplicates (e.g., 'Card1__filename.ext') to ensure no footage is lost.",
                icon: ShieldCheck,
                color: "bg-green-500/10 text-green-500",
                examples: [
                    "DJI_0001.MP4 -> Card1__DJI_0001.MP4",
                    "Maintains original timestamps"
                ]
            },
            {
                title: "Cross-Platform",
                description: "Native Windows (.exe) and macOS (.dmg) applications for diverse office environments.",
                icon: Monitor,
                color: "bg-purple-500/10 text-purple-500",
                examples: [
                    "Windows 10/11 Support",
                    "macOS Intel & Apple Silicon"
                ]
            },
            {
                title: "Complete Audit Logs",
                description: "Real-time log panel and persistent log files for every merge operation.",
                icon: FileCode,
                color: "bg-yellow-500/10 text-yellow-500",
                examples: [
                    "Tracks every file copied",
                    "Records errors and skips"
                ]
            }
        ],

        architecture: {
            description: "Secure, sandboxed Electron architecture with strict IPC communication.",
            components: [
                {
                    name: "Renderer (UI)",
                    description: "React-based interface for user interaction and progress tracking",
                    technologies: ["React", "TailwindCSS", "Framer Motion"],
                    icon: Monitor
                },
                {
                    name: "Main Process",
                    description: "Handles heavy file operations and system integration",
                    technologies: ["Node.js FS", "Shell", "Path"],
                    icon: Cpu
                },
                {
                    name: "IPC Bridge",
                    description: "Secure communication layer between UI and System",
                    technologies: ["Context Isolation", "Preload Scripts"],
                    icon: Layers
                }
            ]
        },

        projectStructure: [
            {
                path: "src/main/",
                icon: Server,
                items: ["main.js", "fileSystem.js", "logger.js"],
                files: 5
            },
            {
                path: "src/renderer/",
                icon: Monitor,
                items: ["App.jsx", "components/", "styles/"],
                files: 12
            },
            {
                path: "src/preload/",
                icon: Lock,
                items: ["index.js", "api.js"],
                files: 2
            }
        ],

        // Using dummy data for API section as it's a desktop app, adapting to "IPC API"
        apiExamples: [
            {
                endpoint: "ipcRenderer.invoke('scan-cards')",
                description: "Initiates the folder scanning process",
                method: "IPC",
                request: `{
  "sourcePath": "/Volumes/Untitled/SD_Card",
  "destPath": "/Users/Editor/Project/Footage"
}`,
                response: `{
  "status": "success",
  "foldersFound": 5,
  "totalFiles": 482,
  "conflicts": 12
}`
            }
        ],

        usageExamples: {
            workflow: [
                { input: "Launch App", action: "Opens Dashboard", target: "UI", icon: Monitor },
                { input: "Select Folders", action: "Scans Input", target: "File System", icon: FolderOpen },
                { input: "Start Merge", action: "Copies & Renames", target: "Output Dir", icon: CloudUpload }
            ]
        },

        deployment: [
            { platform: "Windows", command: "npm run dist:win", complexity: "Medium", icon: Monitor },
            { platform: "macOS", command: "npm run dist:mac", complexity: "Medium", icon: Monitor }
        ],

        safetyFeatures: [
            { feature: "Non-destructive (Copy only)", icon: Shield },
            { feature: "Mandatory Confirmation", icon: AlertTriangle },
            { feature: "Sandboxed Renderer", icon: Lock },
            { feature: "Detailed Error Handling", icon: AlertCircle }
        ],

        mediaSpecs: [
            { type: "Video", formats: "MP4, MOV", features: "Large file support" },
            { type: "Metadata", features: "Preserves Original Dates" },
            { type: "Logs", formats: "TXT", features: "Human-readable" }
        ]
    }
};

const ProjectDetails_DroneMerge = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const [activeImage, setActiveImage] = useState(0);

    // Lightbox State
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState("");

    const project = projectDetails["drone-footage-merge-tool"];

    const openLightbox = (imageSrc: string) => {
        setSelectedImage(imageSrc);
        setLightboxOpen(true);
    };

    const handleNavigation = (path: string) => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        navigate(path);
    };

    if (!project) return null; // Should not happen with hardcoded slug access

    return (
        <div className="relative min-h-screen text-foreground overflow-x-hidden">
            {/* Background Elements */}
            <div className="fixed inset-0 z-0 overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,0.08)_25%,rgba(68,68,68,0.08)_50%,transparent_50%,transparent_75%,rgba(68,68,68,0.08)_75%)] bg-[length:7px_7px] opacity-100" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(12,14,18,0.9)_85%,rgba(12,14,18,1)_100%)] pointer-events-none" />
            </div>

            <div className="fixed inset-0 z-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

            {/* Scroll Progress Bar - visual only for now */}
            <motion.div
                className="fixed top-0 left-0 h-1 bg-primary z-50 origin-left"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.5 }}
                style={{ scaleX: 0.5 }}
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
                                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                        <Download className="mr-2 w-5 h-5" />
                                        Download App
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
                                        <div className="text-xs text-muted-foreground font-grotesk uppercase">Safety</div>
                                        <div className="font-bold font-clash">Zero Data Loss</div>
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
                                        <a href="#about" className="block text-sm text-muted-foreground hover:text-primary transition-colors">About the Tool</a>
                                        <a href="#features" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Core Features</a>
                                        <a href="#tech" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Technical Architecture</a>
                                        <a href="#usage" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Usage Guide</a>
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

                            {/* Mobile Download Package */}
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
                                <span className="font-grotesk text-xs tracking-[0.3em] text-primary uppercase">Problem & Solution</span>
                                <h2 className="font-clash font-bold text-3xl sm:text-4xl">The Challenge</h2>
                                <p className="font-satoshi text-lg leading-relaxed text-muted-foreground whitespace-pre-line">
                                    {project.fullDescription}
                                </p>
                            </div>

                            {/* Bento Grid Features */}
                            <div id="features" className="space-y-8">
                                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                                    <div>
                                        <span className="font-grotesk text-xs tracking-[0.3em] text-primary uppercase">Capabilities</span>
                                        <h2 className="font-clash font-bold text-3xl sm:text-4xl mt-2">Core Features</h2>
                                    </div>
                                    <p className="max-w-md text-muted-foreground text-sm sm:text-right">
                                        Built for reliability and speed in high-pressure production environments.
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

                            {/* Tech Stack */}
                            <div id="tech" className="space-y-8">
                                <span className="font-grotesk text-xs tracking-[0.3em] text-primary uppercase">Under the hood</span>
                                <h2 className="font-clash font-bold text-3xl sm:text-4xl">Technical Architecture</h2>

                                <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
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
                                    <div className="relative z-10 grid gap-8 md:grid-cols-3">
                                        {project.architecture.components.map((comp, i) => (
                                            <div key={i} className="flex flex-col gap-4 p-4 rounded-xl border border-white/5 bg-white/5">
                                                <div className="p-3 bg-background rounded-xl w-fit border border-border">
                                                    <comp.icon className="w-5 h-5 text-primary" />
                                                </div>
                                                <div>
                                                    <h4 className="font-bold font-clash mb-1">{comp.name}</h4>
                                                    <p className="text-sm text-muted-foreground mb-3">{comp.description}</p>
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


                            {/* API / Usage Section */}
                            <div id="usage" className="space-y-8">
                                <h2 className="font-clash font-bold text-3xl sm:text-4xl">System Integration</h2>

                                <div className="bg-[#0c0e12] rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
                                    <div className="flex items-center px-4 py-3 border-b border-white/10 bg-white/5">
                                        <div className="flex gap-2 mr-4">
                                            <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                            <div className="w-3 h-3 rounded-full bg-green-500/80" />
                                        </div>
                                        <div className="text-xs font-mono text-muted-foreground flex items-center gap-2">
                                            <Terminal className="w-3 h-3" />
                                            IPC/Log Output
                                        </div>
                                    </div>

                                    <div className="p-0">
                                        <Tabs defaultValue="request" className="w-full">
                                            <div className="border-b border-white/5 px-4">
                                                <TabsList className="bg-transparent h-12 p-0 space-x-6">
                                                    <TabsTrigger value="request" className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:shadow-none rounded-none px-0 text-sm">Action</TabsTrigger>
                                                    <TabsTrigger value="response" className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:shadow-none rounded-none px-0 text-sm">Response Log</TabsTrigger>
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
                    <h3 className="font-clash font-bold text-3xl mb-6">Explore More Projects</h3>
                    <div className="flex justify-center gap-4">
                        <Button size="lg" onClick={() => handleNavigation("/work-Page")}>
                            Browse Portfolio
                        </Button>
                        <Button size="lg" variant="outline" onClick={() => handleNavigation("/contact-Page")}>
                            Contact Developer
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

export default ProjectDetails_DroneMerge;
