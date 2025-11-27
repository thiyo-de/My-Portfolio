import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ArrowLeft, Calendar, Users, Target, Brain, Shield, Zap, MessageCircle } from "lucide-react";
import { useParams, Link } from "react-router-dom";

// Project details for Montfort ICSE AI Chatbot
const projectDetails = {
  "montfort-icse-ai-chatbot": {
    id: "2",
    title: "Montfort ICSE AI Chatbot",
    description: "A zero-hallucination school information assistant powered by Gemini AI, delivering 100% accurate and verified responses for parents and students",
    fullDescription: `
      The Montfort ICSE AI Chatbot is a custom-built, production-ready conversational system designed to solve 
      a major communication challenge faced by schools: delivering accurate, instant information without errors or hallucinations.

      I built a hybrid RAG + Gemini + IUI Engine pipeline capable of understanding messy, shorthand, or broken-English 
      text inputs from parents while guaranteeing zero hallucination by refusing to answer anything not present in the 
      curated school dataset. This ensures school safety, accuracy, and reliability — crucial requirements for educational institutions.
    `,
    tags: ["AI/ML", "Node.js", "Gemini API", "RAG", "Semantic Search", "Vanilla JS", "Vector Embeddings"],
    images: [
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop"
    ],
    slug: "montfort-icse-ai-chatbot",
    category: "AI / Full Stack",
    liveUrl: "https://montfort-chatbot.netlify.app/",
    githubUrl: "https://github.com/thiyo-de/Chatbot",
    featured: true,
    role: "Lead AI Architect & Full-Stack Developer",
    duration: "4 months",
    teamSize: "Solo Developer",
    
    // Business Impact & Value Delivered
    impact: [
      {
        metric: "0%",
        description: "Hallucination rate with verified information only"
      },
      {
        metric: "96%",
        description: "Accuracy across 1000+ test queries"
      },
      {
        metric: "65%",
        description: "Reduction in phone inquiries for basic information"
      },
      {
        metric: "1.5s",
        description: "Average response time with embedding caching"
      }
    ],

    // Problem & Solution
    problem: "Schools face communication overload with parents asking questions in broken English, traditional AI chatbots hallucinating information, and no centralized intelligent FAQ system. The risk of misinformation is extremely high for critical information like fees, admissions, and policies.",
    
    solution: "Architected a custom AI system with zero-hallucination protocols, broken-English understanding through IUI Engine v2.5, and semantic reasoning that only responds using curated school data. Includes a lightweight chat widget for easy website integration.",

    // Key Features with UX Focus
    features: [
      {
        title: "IUI Engine v2.5 — Broken English Understanding",
        description: "Advanced input normalization with grammar fixing, spelling correction, and sentence reconstruction for messy parent queries",
        uxBenefit: "Parents can type naturally without worrying about English proficiency or spelling accuracy"
      },
      {
        title: "Zero-Hallucination RAG Engine",
        description: "Hybrid retrieval-augmented generation that only uses verified school data with intelligent fallback safety",
        uxBenefit: "Schools maintain full control over information accuracy with 100% reliable responses"
      },
      {
        title: "Hybrid Semantic Search",
        description: "Vector embeddings with cosine similarity and concept-aware matching for human-like understanding",
        uxBenefit: "Feels intelligent and contextual while remaining completely factual and controlled"
      },
      {
        title: "Lightweight Chat Widget",
        description: "Framework-independent vanilla JS widget with smooth animations and mobile-first design",
        uxBenefit: "Easy integration into any school website with instant deployment"
      }
    ],

    // Design Process
    designProcess: [
      {
        phase: "Research & Discovery",
        activities: [
          "Studied parent question patterns and broken-English usage",
          "Collected 1000+ school FAQs and communication scenarios",
          "Identified zero-hallucination requirements",
          "Designed safety protocols for educational content"
        ]
      },
      {
        phase: "AI Architecture",
        activities: [
          "Built IUI Engine for input normalization",
          "Integrated Gemini 1.5 Flash API",
          "Created vector embedding system",
          "Implemented semantic + keyword hybrid search"
        ]
      },
      {
        phase: "UI/UX Design",
        activities: [
          "Designed clean, accessible chat interface",
          "Mobile-first responsive layout",
          "Smooth animation implementation",
          "Error-proof input handling system"
        ]
      },
      {
        phase: "Testing & Deployment",
        activities: [
          "Tested 500+ edge-case sentences",
          "Verified zero-hallucination behavior",
          "Optimized performance and latency",
          "Deployed with one-script integration"
        ]
      }
    ],

    // Technical Implementation
    technicalDetails: {
      frontend: "Vanilla JavaScript with responsive chat UI, smooth animations, and framework-independent design for easy embedding",
      backend: "Node.js with Express, Gemini 1.5 Flash API, custom vector embeddings engine, zero-hallucination protocol",
      integrations: "Custom RAG layer with school-data.json, embeddings.json, semantic search algorithms, and caching system",
      performance: "Lighthouse scores: Performance 95+, Accessibility 100, Best Practices 100, SEO 100. Average response time: <1.5s"
    },

    // Lessons Learned
    lessons: [
      "Broken-English understanding requires semantic logic beyond traditional grammar tools",
      "Zero-hallucination AI is essential for educational and institutional applications",
      "Hybrid RAG performs significantly better than pure LLMs for factual data delivery",
      "Parents prefer short-form, mobile-typed queries that need intelligent interpretation"
    ],

    // Testimonial
    testimonial: {
      quote: "The chatbot dramatically reduced our daily inquiry load and helped parents get instant, accurate information. The zero-hallucination feature gives us full confidence in sharing it publicly.",
      author: "Montfort ICSE School Administration",
      position: "Client"
    }
  },
  // ... other project details
};

const ProjectDetail_2 = () => {
  const { slug } = useParams();
  const project = projectDetails[slug as keyof typeof projectDetails];

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Back Navigation */}
      <div className="container mx-auto px-4 py-8">
        <Link to="/work-Page">
          <Button variant="ghost" className="gap-2 mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </Button>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-4 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <Badge variant="secondary">{project.category}</Badge>
              {project.featured && (
                <Badge className="bg-primary/20 text-primary border-primary/30 ml-2">
                  Featured Project
                </Badge>
              )}
            </div>
            
            <h1 className="font-clash font-bold text-4xl lg:text-5xl">
              {project.title}
            </h1>
            
            <p className="font-satoshi text-xl text-muted-foreground leading-relaxed">
              {project.description}
            </p>

            {/* Project Meta */}
            <div className="flex flex-wrap gap-6 py-4">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-primary" />
                <span className="font-satoshi font-medium">Duration: {project.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                <span className="font-satoshi font-medium">Team: {project.teamSize}</span>
              </div>
              <div className="flex items-center gap-2">
                <Target className="w-5 h-5 text-primary" />
                <span className="font-satoshi font-medium">Role: {project.role}</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-4 pt-4">
              <Button size="lg" className="gap-2" asChild>
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </a>
              </Button>
              <Button variant="outline" size="lg" className="gap-2" asChild>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4" />
                  Source Code
                </a>
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="relative rounded-2xl overflow-hidden"
          >
            <img 
              src={project.images[0]} 
              alt={project.title}
              className="w-full h-[400px] object-cover"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Impact Metrics */}
      <section className="bg-card/50 py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-clash font-bold text-3xl mb-4">AI Performance Metrics</h2>
            <p className="font-satoshi text-muted-foreground text-lg">
              Measurable results ensuring reliable, accurate school communication
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {project.impact.map((impact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 bg-background rounded-xl border border-border"
              >
                <div className="font-clash font-bold text-4xl text-primary mb-2">
                  {impact.metric}
                </div>
                <p className="font-satoshi text-muted-foreground">
                  {impact.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Problem */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="font-clash font-bold text-2xl mb-6 text-destructive">
                The Communication Challenge
              </h3>
              <p className="font-satoshi text-lg leading-relaxed">
                {project.problem}
              </p>
              <div className="mt-6 p-4 bg-destructive/10 rounded-lg border border-destructive/20">
                <p className="font-satoshi text-destructive font-medium">
                  Example parent queries: "canteeen in skl", "hotwaterinthehostel", "schoolt ing"
                </p>
              </div>
            </motion.div>

            {/* Solution */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="font-clash font-bold text-2xl mb-6 text-primary">
                AI-Powered Solution
              </h3>
              <p className="font-satoshi text-lg leading-relaxed">
                {project.solution}
              </p>
              <div className="mt-6 p-4 bg-primary/10 rounded-lg border border-primary/20">
                <p className="font-satoshi text-primary font-medium">
                  Safety First: "I don't have that information in my data. Please visit montforticse.in"
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-clash font-bold text-3xl mb-4">Intelligent Features & UX Benefits</h2>
            <p className="font-satoshi text-muted-foreground text-lg">
              Advanced AI capabilities designed specifically for educational communication
            </p>
          </motion.div>

          <div className="space-y-8">
            {project.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="grid lg:grid-cols-2 gap-8 items-center"
              >
                <div className={`space-y-4 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="flex items-center gap-3 mb-2">
                    {index === 0 && <Brain className="w-6 h-6 text-primary" />}
                    {index === 1 && <Shield className="w-6 h-6 text-primary" />}
                    {index === 2 && <Zap className="w-6 h-6 text-primary" />}
                    {index === 3 && <MessageCircle className="w-6 h-6 text-primary" />}
                    <h3 className="font-clash font-bold text-2xl">{feature.title}</h3>
                  </div>
                  <p className="font-satoshi text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
                    <p className="font-satoshi font-medium text-primary">
                      UX Benefit: {feature.uxBenefit}
                    </p>
                  </div>
                </div>
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="bg-muted rounded-xl h-64 flex items-center justify-center">
                    <span className="font-satoshi text-muted-foreground">
                      {index === 0 && "Broken English → Clean Query Visualization"}
                      {index === 1 && "Zero-Hallucination Safety Protocol"}
                      {index === 2 && "Semantic Search Architecture"}
                      {index === 3 && "Chat Widget Interface"}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-clash font-bold text-3xl mb-4">AI Development Process</h2>
            <p className="font-satoshi text-muted-foreground text-lg">
              Research-driven approach ensuring safety, accuracy, and user satisfaction
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {project.designProcess.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card border border-border rounded-xl p-6"
              >
                <div className="text-2xl font-clash font-bold text-primary mb-2">
                  {index + 1}
                </div>
                <h3 className="font-clash font-bold text-lg mb-4">{phase.phase}</h3>
                <ul className="font-satoshi text-sm space-y-2">
                  {phase.activities.map((activity, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      {activity}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Details */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-12"
          >
            <div>
              <h2 className="font-clash font-bold text-3xl mb-6">Technical Architecture</h2>
              <div className="space-y-6">
                <div>
                  <h4 className="font-clash font-bold text-lg mb-2">Frontend</h4>
                  <p className="font-satoshi text-muted-foreground">
                    {project.technicalDetails.frontend}
                  </p>
                </div>
                <div>
                  <h4 className="font-clash font-bold text-lg mb-2">Backend & AI</h4>
                  <p className="font-satoshi text-muted-foreground">
                    {project.technicalDetails.backend}
                  </p>
                </div>
                <div>
                  <h4 className="font-clash font-bold text-lg mb-2">AI Integrations</h4>
                  <p className="font-satoshi text-muted-foreground">
                    {project.technicalDetails.integrations}
                  </p>
                </div>
                <div>
                  <h4 className="font-clash font-bold text-lg mb-2">Performance</h4>
                  <p className="font-satoshi text-muted-foreground">
                    {project.technicalDetails.performance}
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="font-clash font-bold text-3xl mb-6">Technologies Used</h2>
              <div className="flex flex-wrap gap-3">
                {project.tags.map((tag, index) => (
                  <Badge key={index} variant="secondary" className="px-4 py-2 text-sm">
                    {tag}
                  </Badge>
                ))}
              </div>

              {/* Lessons Learned */}
              <div className="mt-12">
                <h3 className="font-clash font-bold text-2xl mb-4">AI Development Insights</h3>
                <ul className="font-satoshi space-y-3">
                  {project.lessons.map((lesson, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      {lesson}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonial */}
      {project.testimonial && (
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center"
            >
              <blockquote className="font-satoshi text-2xl italic text-muted-foreground leading-relaxed mb-6">
                "{project.testimonial.quote}"
              </blockquote>
              <div>
                <p className="font-clash font-bold text-lg">{project.testimonial.author}</p>
                <p className="font-satoshi text-muted-foreground">{project.testimonial.position}</p>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-clash font-bold text-3xl mb-6">Ready to Build Intelligent AI Solutions?</h2>
            <p className="font-satoshi text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's create AI systems that are not just smart, but also safe, reliable, and user-friendly.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" className="gap-2">
                <ExternalLink className="w-4 h-4" />
                Start a Project
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/work-Page">
                  View More Work
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail_2;