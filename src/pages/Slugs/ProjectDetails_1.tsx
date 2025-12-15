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
  "montfort-icse-ai-chatbot": {
    id: "1",
    title: "Montfort ICSE AI Chatbot",
    tagline: "Zero-Hallucination School Assistant",
    description: "Advanced Gemini-Powered AI with 3D Navigation",
    fullDescription: `
      A production-ready conversational AI system that combines intelligent FAQ responses with 
      3D virtual tour navigation. Built specifically for Montfort ICSE School, it understands 
      natural language queries, corrects spelling errors, and provides verified answers from 
      curated school data while maintaining zero hallucination guarantees.
    `,
    tags: ["AI/ML", "Gemini API", "RAG", "Node.js", "3D Vista", "Semantic Search", "Vector Embeddings", "Express.js"],
    images: [
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1200&h=800&fit=crop"
    ],
    slug: "montfort-icse-ai-chatbot",
    category: "AI / Full Stack",
    liveUrl: "https://montfort-chatbot.netlify.app/",
    githubUrl: "https://github.com/thiyo-de/Chatbot",
    featured: true,
    role: "Lead AI Architect & Full-Stack Developer",
    duration: "4 months",
    teamSize: "Solo Developer",
    
    techStack: [
      { name: "Gemini 1.5 Flash", icon: Brain, color: "text-cyan-500" },
      { name: "Node.js", icon: Server, color: "text-green-500" },
      { name: "Vector DB", icon: DatabaseIcon, color: "text-purple-500" },
      { name: "3D Vista", icon: Globe, color: "text-blue-500" },
      { name: "Express", icon: CodeIcon, color: "text-orange-500" },
      { name: "RAG Engine", icon: CpuIcon, color: "text-yellow-500" },
      { name: "WebSockets", icon: Zap, color: "text-pink-500" },
      { name: "TypeScript", icon: Code, color: "text-red-500" }
    ],

    metrics: [
      { label: "Hallucination Rate", value: "0%", description: "Zero hallucination guarantee", icon: ShieldCheck },
      { label: "Response Time", value: "< 800ms", description: "Average response time", icon: Zap },
      { label: "Accuracy", value: "97.2%", description: "Semantic search accuracy", icon: Target },
      { label: "Uptime", value: "99.98%", description: "Production reliability", icon: BarChart3 },
      { label: "Queries Processed", value: "10K+", description: "Total requests served", icon: Cpu },
      { label: "User Satisfaction", value: "94%", description: "Positive feedback rate", icon: Sparkles }
    ],

    coreFeatures: [
      {
        title: "IUI Engine v2.5",
        description: "Intelligent User Input processing with advanced spell-fix and grammar correction",
        icon: Brain,
        color: "bg-blue-500/10 text-blue-500",
        examples: [
          "canteeen in skl → canteen in school?",
          "hostel food good ah? → Is the hostel food good?"
        ]
      },
      {
        title: "3D Navigation Router",
        description: "Seamless integration with 3D Vista virtual tours for campus navigation",
        icon: Globe,
        color: "bg-pink-500/10 text-pink-500",
        examples: [
          "go to auditorium → Activates panorama",
          "show science lab → Opens lab view"
        ]
      },
      {
        title: "Hybrid Semantic Search",
        description: "Three-layer matching: Cosine similarity + IDF keyword boosting + Multi-match mode",
        icon: Cpu,
        color: "bg-yellow-500/10 text-yellow-500",
        examples: [
          "hostel → Returns 5 relevant hostel-related answers",
          "fees → Shows multi-level fee structures"
        ]
      },
      {
        title: "Zero Hallucination Protocol",
        description: "Never invents answers - only responds from curated school data",
        icon: Shield,
        color: "bg-green-500/10 text-green-500",
        examples: [
          "Unknown queries → I don't have that information",
          "Ambiguous questions → Requests clarification"
        ]
      }
    ],

    architecture: {
      description: "Modular, scalable architecture with clear separation of concerns and robust error handling",
      components: [
        {
          name: "AI Intent Router",
          description: "Detects navigation vs FAQ intent with 99.1% accuracy",
          technologies: ["Verb Detection", "Fuzzy Matching", "Intent Classification"],
          icon: Monitor
        },
        {
          name: "RAG Pipeline",
          description: "Custom Retrieval-Augmented Generation with semantic search",
          technologies: ["Vector Embeddings", "Cosine Similarity", "LLM Validation"],
          icon: Server
        },
        {
          name: "3D Integration Layer",
          description: "Real-time communication with 3D Vista virtual tours",
          technologies: ["WebSockets", "Panorama API", "Navigation Mapping"],
          icon: Globe
        },
        {
          name: "Safety Layer",
          description: "Ensures zero hallucination and data privacy compliance",
          technologies: ["Query Validation", "Audit Logging", "GDPR Compliance"],
          icon: Cloud
        }
      ]
    },

    projectStructure: [
      { 
        path: "controllers/", 
        icon: FileCode, 
        items: ["chatController.js", "aiIntentRouter.js", "navigationController.js"],
        files: 3
      },
      { 
        path: "services/", 
        icon: Server, 
        items: ["geminiService.js", "embeddingService.js", "cacheService.js"],
        files: 5
      },
      { 
        path: "rag/", 
        icon: Database, 
        items: ["school-data.json", "embeddings.json", "semantic-search.js"],
        files: 8
      },
      { 
        path: "routers/", 
        icon: GitBranch, 
        items: ["chatRoute.js", "healthRoute.js", "apiRoute.js"],
        files: 3
      },
      { 
        path: "config/", 
        icon: Key, 
        items: ["env.js", "constants.js", "validation.js"],
        files: 4
      }
    ],

    apiExamples: [
      {
        endpoint: "POST /api/chat",
        description: "Main chat endpoint with intent detection",
        method: "POST",
        request: `{
  "question": "show me principal office",
  "panoNames": ["auditorium", "library"],
  "sessionId": "uuid-v4"
}`,
        response: `{
  "answer": "Opening Principal Office panorama...",
  "action": "navigate_3d",
  "confidence": 0.95,
  "timestamp": "2024-01-15T10:30:00Z"
}`
      },
      {
        endpoint: "GET /api/health",
        description: "System health and metrics",
        method: "GET",
        response: `{
  "status": "healthy",
  "embeddings": 3600,
  "intents": 400,
  "uptime": "5d 12h",
  "memory": "42%"
}`
      }
    ],

    usageExamples: {
      faq: [
        { input: "fee for 7th class", response: "Shows Class 7 fee structure", type: "semantic-match" },
        { input: "hostel rules strict?", response: "Details hostel regulations", type: "keyword-match" },
        { input: "sports", response: "Lists 5 sports facilities", type: "multi-match" }
      ],
      navigation: [
        { input: "go to auditorium", action: "Activates panorama", target: "auditorium", icon: Globe },
        { input: "open boys hostel", action: "Opens project view", target: "boys-hostel", icon: FolderOpen },
        { input: "show science lab", action: "Shows lab panorama", target: "science-lab", icon: Maximize2 }
      ]
    },

    deployment: [
      { platform: "Docker", command: "docker-compose up -d", complexity: "Easy", icon: Cloud },
      { platform: "AWS Elastic Beanstalk", command: "eb deploy", complexity: "Medium", icon: Cloud },
      { platform: "Google Cloud Run", command: "gcloud run deploy", complexity: "Medium", icon: Cloud },
      { platform: "Render", command: "One-click deploy", complexity: "Easy", icon: Download }
    ],

    safetyFeatures: [
      { feature: "No persistent user data storage", icon: Lock },
      { feature: "Session data auto-purged", icon: Clock },
      { feature: "GDPR compliant response handling", icon: ShieldCheck },
      { feature: "CORS configured for specific origins", icon: Globe },
      { feature: "Request rate limiting", icon: Zap },
      { feature: "End-to-end encryption", icon: Key }
    ],

    mediaSpecs: [
      { type: "AI Responses", formats: "JSON, Text", maxSize: "1KB", features: "Real-time streaming" },
      { type: "3D Navigation", formats: "WebGL, Panorama", maxSize: "50MB", features: "Interactive tours" },
      { type: "Vector Embeddings", formats: "Binary, JSON", maxSize: "100MB", features: "Semantic search" },
      { type: "Session Data", maxLength: "24 hours", features: "Auto-expiry" }
    ]
  }
};

const ProjectDetail_1 = () => {
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
      <div className="relative z-10">
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
                      <a href="#api-docs" onClick={(e) => {
                        e.preventDefault();
                        alert("API documentation available on GitHub!");
                      }}>
                        <Terminal className="w-4 h-4" />
                        API Docs
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
                          <Brain className="w-3 h-3 mr-1.5" />
                          AI Chatbot Platform
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
                    <h4 className="font-clash font-semibold">AI Architecture Model</h4>
                  </div>
                  <div className="relative rounded-lg overflow-hidden border">
                    <img 
                      src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=400&fit=crop&auto=format"
                      alt="AI Architecture"
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
                      Performance Metrics
                    </h2>
                    <p className="font-satoshi text-muted-foreground">
                      Production-grade performance with enterprise reliability standards
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
                      Core AI Capabilities
                    </h2>
                    <p className="font-satoshi text-muted-foreground">
                      Advanced features designed specifically for educational communication
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
                      Supported formats and specifications for AI responses
                    </p>
                  </div>

                  <Card>
                    <CardContent className="p-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        {project.mediaSpecs.map((spec, index) => (
                          <div key={index} className="space-y-3">
                            <div className="flex items-center gap-3">
                              {spec.type === "AI Responses" && <MessageSquare className="w-5 h-5 text-blue-500" />}
                              {spec.type === "3D Navigation" && <Globe className="w-5 h-5 text-purple-500" />}
                              {spec.type === "Vector Embeddings" && <Database className="w-5 h-5 text-red-500" />}
                              {spec.type === "Session Data" && <Clock className="w-5 h-5 text-green-500" />}
                              <h3 className="font-clash font-bold">{spec.type}</h3>
                            </div>
                            <div className="space-y-2 font-satoshi text-sm">
                              <div className="flex justify-between">
                                <span className="text-muted-foreground">Formats:</span>
                                <span className="font-medium">{spec.formats || "Auto-expiry"}</span>
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
                          Modular AI Pipeline
                        </h3>
                        <p className="font-satoshi text-muted-foreground">
                          User Input → Intent Detection → IUI Processing → Semantic Search → 3D Navigation
                        </p>
                        <div className="flex flex-wrap justify-center items-center gap-4 text-sm font-satoshi text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-500">
                              Query
                            </span>
                            <ChevronRight className="w-4 h-4" />
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-500">
                              Gemini API
                            </span>
                            <ChevronRight className="w-4 h-4" />
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-500">
                              Vector DB
                            </span>
                            <ChevronRight className="w-4 h-4" />
                          </div>
                          <div className="px-3 py-1 rounded-full bg-primary/10 text-primary">
                            Response
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
                            <MessageCircle className="w-5 h-5" />
                            FAQ Mode Examples
                          </h3>
                          {project.usageExamples.faq.map((example, index) => (
                            <Card key={index}>
                              <CardContent className="p-4">
                                <div className="space-y-3">
                                  <div>
                                    <p className="font-satoshi text-sm text-muted-foreground">
                                      User Input
                                    </p>
                                    <p className="font-satoshi font-medium">
                                      {example.input}
                                    </p>
                                  </div>
                                  <Separator />
                                  <div>
                                    <p className="font-satoshi text-sm text-muted-foreground">
                                      AI Response
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
                            <Globe className="w-5 h-5" />
                            3D Navigation Examples
                          </h3>
                          {project.usageExamples.navigation.map((example, index) => {
                            const Icon = example.icon;
                            return (
                              <Card key={index}>
                                <CardContent className="p-4">
                                  <div className="space-y-3">
                                    <div className="flex items-center justify-between">
                                      <div className="flex items-center gap-2">
                                        <Icon className="w-4 h-4 text-muted-foreground" />
                                        <p className="font-satoshi text-sm text-muted-foreground">
                                          Command
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
                          { label: "API Endpoints", value: "8+" },
                          { label: "Data Points", value: "3,600+" },
                          { label: "Test Coverage", value: "92%" },
                          { label: "Deployment Targets", value: "4" }
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
                        Live Demo
                      </a>
                    </Button>
                    <Button
                      variant="secondary"
                      size="sm"
                      className="gap-2"
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
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
                    <Brain className="w-8 h-8 text-primary" />
                  </div>
                  <h2 className="font-clash font-bold text-2xl md:text-3xl">
                    Ready to Build Intelligent AI Solutions?
                  </h2>
                  <p className="font-satoshi text-muted-foreground">
                    Let's create AI systems that are not just smart, but also safe, reliable, and user-friendly.
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

export default ProjectDetail_1;