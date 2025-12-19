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
  Touchpad,
  MousePointer,
  Hand,
  Move
} from "lucide-react";
import { useParams, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";

const projectDetails = {
  "gamify-menu": {
    id: "5",
    title: "Gamified Menu — Interactive Navigation Experience",
    tagline: "Engage users with sound-enhanced, accessible navigation",
    description: "A dynamic, gamified navigation menu with sound effects and keyboard accessibility",
    fullDescription: `
      Gamify Menu transforms standard website navigation into an engaging, interactive experience. 
      Inspired by video game UIs, this project implements a responsive menu system enhanced with 
      subtle sound effects, smooth animations, and comprehensive keyboard accessibility.
      
      The focus is on "micro-interactions"—those small details that make a user interface feel 
      alive and premium. From the satisfying "click" sounds to the fluid hover states, every 
      interaction is designed to provide immediate, delightful feedback.
    `,
    tags: [
      "Gamification",
      "UI/UX Design",
      "Sound Design",
      "Accessibility",
      "Keyboard Navigation",
      "CSS Animations",
      "React",
      "Interactive",
    ],
    images: [
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1200&h=800&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=1200&h=800&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1614036634955-8d26fb04c606?w=1200&h=800&fit=crop&auto=format",
    ],
    slug: "gamify-menu",
    category: "UI Component / Web Application",
    liveUrl: "https://gammifymenu.netlify.app/",
    githubUrl: "https://github.com/thiyo-de/Gamify_Menu",
    featured: true,
    role: "Frontend Developer & UI Designer",
    duration: "2 Weeks",
    teamSize: "Solo Project",

    techStack: [
      { name: "HTML5", icon: FileCode, color: "text-orange-500" },
      { name: "CSS3", icon: Palette, color: "text-blue-500" },
      { name: "JavaScript", icon: CodeIcon, color: "text-yellow-500" },
      { name: "Netlify", icon: Cloud, color: "text-green-500" },
      { name: "Render", icon: Server, color: "text-purple-500" },
      { name: "Responsive Design", icon: Smartphone, color: "text-pink-500" },
      { name: "Touch Events", icon: Touchpad, color: "text-cyan-500" },
      { name: "Audio API", icon: Headphones, color: "text-indigo-500" },
    ],

    metrics: [
      {
        label: "User Engagement",
        value: "+40%",
        description: "Menu interaction rate",
        icon: Users,
      },
      {
        label: "Load Time",
        value: "<100ms",
        description: "Lightweight assets",
        icon: Zap,
      },
      {
        label: "Accessibility",
        value: "100%",
        description: "WCAG/ARIA compliant",
        icon: CheckCircle,
      },
      {
        label: "Sound Assets",
        value: "5",
        description: "Optimized SFX files",
        icon: Music,
      },
      {
        label: "Mobile Support",
        value: "Full",
        description: "Touch optimized",
        icon: Smartphone,
      },
      {
        label: "Browser Support",
        value: "All",
        description: "Cross-browser compatible",
        icon: Globe,
      },
    ],

    coreFeatures: [
      {
        title: "Audio Feedback System",
        description:
          "Intelligent sound triggering on hover and click interactions",
        icon: Headphones,
        color: "bg-indigo-500/10 text-indigo-500",
        examples: [
          "Hover 'pop' sounds",
          "Click confirmation",
          "Sound toggle control",
          "Volume management",
        ],
      },
      {
        title: "Keyboard Accessibility",
        description:
          "Full navigation control without using a mouse",
        icon: Keyboard,
        color: "bg-blue-500/10 text-blue-500",
        examples: [
          "Tab navigation",
          "Enter/Space activation",
          "Focus indicators",
          "ARIA labels",
        ],
      },
      {
        title: "Responsive Animations",
        description: "Fluid transitions and effects for all screen sizes",
        icon: Layers,
        color: "bg-pink-500/10 text-pink-500",
        examples: [
          "Smooth expansions",
          "Hover transforms",
          "Mobile drawer",
          "Performance optimized",
        ],
      },
      {
        title: "Game-Inspired UI",
        description: "Visual design language borrowing from gaming interfaces",
        icon: Gamepad2,
        color: "bg-purple-500/10 text-purple-500",
        examples: [
          "Neon/Cyberpunk styling",
          "Dynamic borders",
          "Interactive states",
          "Visual feedback",
        ],
      },
    ],

    architecture: {
      description:
        "Component-based architecture focused on event handling and state management for audio/visual synchronization",
      components: [
        {
          name: "Navigation Controller",
          description:
            "Manages active states, routing, and menu visibility logic",
          technologies: ["DOM API", "State Management", "Event Listeners"],
          icon: Navigation,
        },
        {
          name: "Audio Engineer",
          description:
            "Handles sound asset loading, playback, and concurrency",
          technologies: ["Web Audio API", "Preloading", "Event Triggers"],
          icon: Music,
        },
        {
          name: "Input Manager",
          description:
            "Unifies mouse, touch, and keyboard input events",
          technologies: ["Touch API", "Keyboard Events", "Pointer Events"],
          icon: Keyboard,
        },
        {
          name: "Visual Renderer",
          description:
            "Handles CSS animations and DOM updates for UI feedback",
          technologies: ["CSS Transitions", "Keyframes", "Class Toggling"],
          icon: Layers,
        },
      ],
    },

    projectStructure: [
      {
        path: "assets/sounds/",
        icon: Music,
        items: ["hover.mp3", "click.mp3", "open.wav"],
        files: 5,
      },
      {
        path: "styles/",
        icon: Palette,
        items: ["main.css", "animations.css", "responsive.css"],
        files: 3,
      },
      {
        path: "scripts/",
        icon: Code,
        items: ["app.js", "audio.js", "events.js"],
        files: 4,
      },
      {
        path: "index.html",
        icon: FileCode,
        items: ["Main structure", "Template"],
        files: 1,
      },
    ],

    difficultyModes: [
      {
        level: "Casual",
        icon: Eye,
        description: "Visual-only feedback without sound",
        features: ["Standard hover states", "Basic transitions", "No audio"],
      },
      {
        level: "Gamer",
        icon: Gamepad2,
        description: "Full audio-visual experience",
        features: ["Sound effects", "Complex animations", "Haptic feedback"],
      },
      {
        level: "Speedrunner",
        icon: Zap,
        description: "Optimized for keyboard power users",
        features: ["Shortcuts", "Zero latency", "High contrast"],
      },
    ],

    usageExamples: {
      desktop: [
        {
          input: "Hover Item",
          action: "Playing hover.mp3 + Scale effect",
          icon: MousePointer,
        },
        { input: "Click Item", action: "Playing click.mp3 + Navigation", icon: Music },
        {
          input: "Press Tab",
          action: "Focus next item + Ring highlight",
          icon: Keyboard,
        },
      ],
      mobile: [
        { input: "Tap Menu", action: "Slide drawer open", icon: Smartphone },
        { input: "Long Press", action: "Context action", icon: Hand },
        { input: "Swipe", action: "Close menu", icon: Move },
      ],
    },

    deployment: [
      {
        platform: "Netlify",
        command: "netlify deploy --prod",
        complexity: "Easy",
        icon: Cloud,
      },
      {
        platform: "GitHub Pages",
        command: "gh-pages -d build",
        complexity: "Easy",
        icon: Github,
      },
      {
        platform: "Vercel",
        command: "vercel --prod",
        complexity: "Easy",
        icon: CloudIcon,
      },
    ],
  },
};

const ProjectDetail_6 = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [activeImage, setActiveImage] = useState(0);
  const [activeTab, setActiveTab] = useState("desktop");
  const project = projectDetails["gamify-menu"];

  const handleNavigation = (path: string) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate(path);
  };

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    // setCopied(id); // Simple feedback logic
  };

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto">
            <Gamepad2 className="w-8 h-8 text-muted-foreground" />
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
                     <Gamepad2 className="w-6 h-6 text-purple-500" />
                   </div>
                   <div>
                     <div className="text-xs text-muted-foreground font-grotesk uppercase">Interaction</div>
                     <div className="font-bold font-clash">Gamified</div>
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
                     <a href="#modes" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Experience Modes</a>
                     <a href="#usage" className="block text-sm text-muted-foreground hover:text-primary transition-colors">How to Play</a>
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
               
               {/* About */}
               <div id="about" className="space-y-6">
                 <span className="font-grotesk text-xs tracking-[0.3em] text-primary uppercase">Context</span>
                 <h2 className="font-clash font-bold text-3xl sm:text-4xl">The Concept</h2>
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

               {/* Bento Grid Features */}
               <div id="features" className="space-y-8">
                 <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                   <div>
                     <span className="font-grotesk text-xs tracking-[0.3em] text-primary uppercase">Immersion</span>
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

                {/* Difficulty Modes (Mapped as Experience Modes) */}
                <div id="modes" className="space-y-8">
                   <h2 className="font-clash font-bold text-3xl sm:text-4xl">Experience Modes</h2>
                   <div className="grid md:grid-cols-3 gap-6">
                      {project.difficultyModes.map((mode, i) => (
                        <Card key={i} className="border-border/50 bg-card/30 relative overflow-hidden group">
                           <div className="absolute inset-0 bg-gradient-to-br from-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                           <CardContent className="p-6 relative">
                              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-background border border-border">
                                 <mode.icon className="w-6 h-6 text-primary" />
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
                  <h2 className="font-clash font-bold text-3xl sm:text-4xl">How to Play</h2>
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
                   <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                      {project.projectStructure.map((item, i) => (
                         <div key={i} className="p-4 rounded-xl bg-muted/20 border border-border flex items-center gap-4">
                            <div className="p-2 bg-background rounded border border-border">
                               <item.icon className="w-5 h-5 text-primary" />
                            </div>
                            <div>
                               <div className="font-mono text-sm font-bold text-blue-300">{item.path}</div>
                               <div className="text-xs text-muted-foreground">
                                  {item.files} files • {item.items.slice(0, 1).join(" ")}...
                               </div>
                            </div>
                         </div>
                      ))}
                   </div>
                </div>

                {/* Deployment Section */}
                <div id="deployment" className="space-y-8">
                  <h2 className="font-clash font-bold text-3xl sm:text-4xl">Deployment Options</h2>
                   <div className="grid md:grid-cols-3 gap-4">
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

export default ProjectDetail_6;