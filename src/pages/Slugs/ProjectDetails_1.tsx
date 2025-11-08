import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ArrowLeft, Calendar, Users, Target } from "lucide-react";
import { useParams, Link } from "react-router-dom";

// This would typically come from an API or CMS
const projectDetails = {
  "Modern-E-Commerce-Platform": {
    id: "1",
    title: "Modern E-Commerce Platform",
    description: "A comprehensive e-commerce solution designed to revolutionize online shopping experiences through intuitive design and robust functionality",
    fullDescription: `
      As the Lead UI/UX Developer, I spearheaded the creation of a modern e-commerce platform that combines 
      aesthetic appeal with functional excellence. The project focused on creating a seamless shopping journey 
      from product discovery to checkout completion.

      Key challenges included reducing cart abandonment, improving mobile responsiveness, and creating 
      an intuitive admin dashboard for store management. Through extensive user research and A/B testing, 
      we developed a solution that not only met but exceeded user expectations.
    `,
    tags: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind", "Redux", "JWT"],
    images: [
      "https://images.unsplash.com/photo-1557821552-17105176677c?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=800&fit=crop"
    ],
    slug: "Modern-E-Commerce-Platform",
    category: "Full Stack",
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    role: "Lead UI/UX Developer",
    duration: "6 months",
    teamSize: "8 people",
    
    // Business Impact & Value Delivered
    impact: [
      {
        metric: "35%",
        description: "Increase in conversion rates through optimized user flows"
      },
      {
        metric: "28%",
        description: "Reduction in bounce rate with mobile-first design"
      },
      {
        metric: "42%",
        description: "Improvement in checkout completion rate"
      },
      {
        metric: "60%",
        description: "Faster page load times leading to better SEO rankings"
      }
    ],

    // Problem & Solution
    problem: "Traditional e-commerce platforms suffered from complex navigation, slow performance, and high cart abandonment rates, resulting in lost sales and poor user satisfaction.",
    
    solution: "Designed and developed a modern, mobile-first e-commerce platform with intuitive navigation, one-click checkout process, and personalized product recommendations using AI algorithms.",

    // Key Features with UX Focus
    features: [
      {
        title: "Intuitive Product Discovery",
        description: "Advanced search and filtering system with visual product previews and personalized recommendations",
        uxBenefit: "Reduced product search time by 65% and increased product discovery"
      },
      {
        title: "Seamless Checkout Flow",
        description: "One-page checkout with multiple payment options and guest checkout capability",
        uxBenefit: "Decreased checkout abandonment by 42% and improved conversion rates"
      },
      {
        title: "Mobile-First Design",
        description: "Responsive design optimized for mobile devices with touch-friendly interactions",
        uxBenefit: "Increased mobile conversions by 55% and improved user satisfaction"
      },
      {
        title: "Admin Dashboard",
        description: "Comprehensive management system with real-time analytics and inventory management",
        uxBenefit: "Reduced administrative tasks by 70% and improved decision-making"
      }
    ],

    // Design Process
    designProcess: [
      {
        phase: "Research & Discovery",
        activities: [
          "User interviews and surveys",
          "Competitive analysis",
          "User journey mapping",
          "Pain point identification"
        ]
      },
      {
        phase: "Design & Prototyping",
        activities: [
          "Wireframing and information architecture",
          "Interactive prototyping",
          "Usability testing",
          "Design system creation"
        ]
      },
      {
        phase: "Development & Implementation",
        activities: [
          "Component-driven development",
          "Performance optimization",
          "Accessibility implementation",
          "Cross-browser testing"
        ]
      },
      {
        phase: "Testing & Launch",
        activities: [
          "User acceptance testing",
          "A/B testing implementation",
          "Analytics setup",
          "Performance monitoring"
        ]
      }
    ],

    // Technical Implementation
    technicalDetails: {
      frontend: "React with TypeScript, Redux for state management, Tailwind CSS for styling, Framer Motion for animations",
      backend: "Node.js with Express, MongoDB for database, JWT for authentication",
      integrations: "Stripe for payments, SendGrid for email, Cloudinary for media, AWS for hosting",
      performance: "Lighthouse scores: Performance 95+, Accessibility 100, Best Practices 100, SEO 100"
    },

    // Lessons Learned
    lessons: [
      "Importance of mobile-first design in e-commerce",
      "Value of progressive web app features for mobile users",
      "Impact of micro-interactions on user engagement",
      "Need for comprehensive error handling and user feedback"
    ],

    // Testimonial
    testimonial: {
      quote: "The platform completely transformed our online business. The intuitive design and seamless user experience resulted in immediate growth in sales and customer satisfaction.",
      author: "Sarah Chen, CEO at RetailTech",
      position: "Client"
    }
  },
  // ... other project details
};

const ProjectDetail_1 = () => {
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
              <Button size="lg" className="gap-2">
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </Button>
              <Button variant="outline" size="lg" className="gap-2">
                <Github className="w-4 h-4" />
                Source Code
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
            <h2 className="font-clash font-bold text-3xl mb-4">Business Impact</h2>
            <p className="font-satoshi text-muted-foreground text-lg">
              Measurable results and value delivered through strategic design and development
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
                The Challenge
              </h3>
              <p className="font-satoshi text-lg leading-relaxed">
                {project.problem}
              </p>
            </motion.div>

            {/* Solution */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="font-clash font-bold text-2xl mb-6 text-primary">
                My Solution
              </h3>
              <p className="font-satoshi text-lg leading-relaxed">
                {project.solution}
              </p>
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
            <h2 className="font-clash font-bold text-3xl mb-4">Key Features & UX Benefits</h2>
            <p className="font-satoshi text-muted-foreground text-lg">
              How each feature directly contributes to user satisfaction and business goals
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
                  <h3 className="font-clash font-bold text-2xl">{feature.title}</h3>
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
                      Feature Visualization
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
            <h2 className="font-clash font-bold text-3xl mb-4">Design & Development Process</h2>
            <p className="font-satoshi text-muted-foreground text-lg">
              A user-centered approach ensuring quality at every stage
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
              <h2 className="font-clash font-bold text-3xl mb-6">Technical Implementation</h2>
              <div className="space-y-6">
                <div>
                  <h4 className="font-clash font-bold text-lg mb-2">Frontend</h4>
                  <p className="font-satoshi text-muted-foreground">
                    {project.technicalDetails.frontend}
                  </p>
                </div>
                <div>
                  <h4 className="font-clash font-bold text-lg mb-2">Backend</h4>
                  <p className="font-satoshi text-muted-foreground">
                    {project.technicalDetails.backend}
                  </p>
                </div>
                <div>
                  <h4 className="font-clash font-bold text-lg mb-2">Integrations</h4>
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
                <h3 className="font-clash font-bold text-2xl mb-4">Key Learnings</h3>
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
            <h2 className="font-clash font-bold text-3xl mb-6">Ready to Create Something Amazing?</h2>
            <p className="font-satoshi text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's collaborate to build digital experiences that drive results and delight users.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" className="gap-2">
                <ExternalLink className="w-4 h-4" />
                Start a Project
              </Button>
              <Button variant="outline" size="lg">
                View More Work
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail_1;