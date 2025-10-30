import {
  Palette,
  Code,
  Smartphone,
  Zap,
  Database,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useRef } from "react";

const services = [
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Creating beautiful, intuitive interfaces that users love to interact with. Focus on user research, wireframing, and prototyping to deliver exceptional digital experiences.",
    number: "01",
    features: [
      "User Research",
      "Wireframing",
      "Prototyping",
      "Design Systems",
      "Usability Testing",
    ],
    gradient: "from-purple-500/20 to-pink-500/20",
    color: "purple",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  },
  {
    icon: Code,
    title: "Frontend Development",
    description:
      "Building responsive, performant web applications with modern technologies. Specializing in React, Next.js, and TypeScript for scalable solutions.",
    number: "02",
    features: [
      "React/Next.js",
      "TypeScript",
      "Performance",
      "Responsive Design",
      "Web Vitals",
    ],
    gradient: "from-blue-500/20 to-cyan-500/20",
    color: "blue",
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  },
  {
    icon: Smartphone,
    title: "Cross-Platform Apps",
    description:
      "Developing native-like experiences for iOS, Android, and desktop platforms. Creating seamless user journeys across all devices.",
    number: "03",
    features: ["React Native", "Flutter", "PWA", "App Store", "Performance"],
    gradient: "from-green-500/20 to-emerald-500/20",
    color: "green",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  },
  {
    icon: Zap,
    title: "Interactive Experiences",
    description:
      "Crafting engaging animations and micro-interactions that delight users. Bringing interfaces to life with smooth, meaningful motion design.",
    number: "04",
    features: [
      "Framer Motion",
      "GSAP",
      "Micro-interactions",
      "WebGL",
      "3D Graphics",
    ],
    gradient: "from-yellow-500/20 to-orange-500/20",
    color: "yellow",
    image: "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  },
  {
    icon: Database,
    title: "API Development",
    description:
      "Building robust backend services and RESTful APIs for seamless integration. Ensuring scalability, security, and optimal performance.",
    number: "05",
    features: [
      "Node.js",
      "GraphQL",
      "REST APIs",
      "Database Design",
      "Cloud Services",
    ],
    gradient: "from-red-500/20 to-rose-500/20",
    color: "red",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  },
  {
    icon: Sparkles,
    title: "AI Integration",
    description:
      "Implementing intelligent features and AI-driven solutions to enhance user experiences and automate complex workflows.",
    number: "06",
    features: [
      "AI APIs",
      "Machine Learning",
      "Automation",
      "Smart Features",
      "Data Analysis",
    ],
    gradient: "from-indigo-500/20 to-violet-500/20",
    color: "indigo",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="py-20 lg:py-32 bg-gradient-to-br from-background via-background to-primary/5 relative overflow-hidden"
    >
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 -left-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.1, 0.3, 0.1],
            x: [0, -15, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Fixed Header Section */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="font-grotesk text-xs tracking-[0.3em] text-muted-foreground uppercase">
            Expertise & Capabilities
          </span>
          <h2 className="font-clash font-extrabold text-4xl sm:text-5xl md:text-6xl mt-4 mb-6">
            Design & Development
            <span className="block bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>
          <p className="font-satoshi text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Bridging creative design with technical execution. I specialize in creating seamless digital experiences 
            while continuously evolving with emerging technologies and AI-driven solutions.
          </p>
        </motion.div>

        {/* Enhanced Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            animate: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {services.map((service, index) => (
            <ServiceCard key={service.number} service={service} index={index} />
          ))}
        </motion.div>

        {/* Enhanced CTA Section */}
        <motion.div
          className="text-center mt-20 lg:mt-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border border-primary/20 rounded-2xl p-8 lg:p-12 max-w-4xl mx-auto backdrop-blur-sm">
            <motion.p 
              className="font-satoshi text-lg lg:text-xl text-muted-foreground mb-8 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Ready to bring your vision to life? Let's collaborate to create
              something extraordinary that stands out in the digital landscape.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className="rounded-2xl px-8 py-6 text-lg font-grotesk font-medium bg-primary hover:bg-primary/90 shadow-lg shadow-primary/25"
                >
                  Start Your Project
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </motion.div>
              <Button
                variant="outline"
                size="lg"
                className="rounded-2xl px-8 py-6 text-lg font-grotesk font-medium border-2"
              >
                View Case Studies
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Enhanced Service Card Component with Faster Tilt Effect
const ServiceCard = ({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Faster tilt effect with smaller divisor
    const rotateX = (y - centerY) / 15; // Changed from 25 to 15 for faster response
    const rotateY = (centerX - x) / 15; // Changed from 25 to 15 for faster response
    
    card.style.transform = `
      perspective(1000px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale3d(1.02, 1.02, 1.02)
    `;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    
    cardRef.current.style.transform = `
      perspective(1000px)
      rotateX(0deg)
      rotateY(0deg)
      scale3d(1, 1, 1)
    `;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.8,
        delay: index * 0.15,
        type: "spring",
        stiffness: 80,
        damping: 15,
      }}
      whileHover={{
        y: -12,
        transition: { duration: 0.4, type: "spring", stiffness: 300 },
      }}
      className="group relative"
    >
      {/* Card Container with Faster Tilt Effect */}
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative bg-card/60 backdrop-blur-xl border border-border/50 rounded-3xl overflow-hidden hover:border-primary/40 transition-all duration-300 h-full flex flex-col will-change-transform" // Reduced duration from 700ms to 300ms
        style={{
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Image Background Overlay with Glassmorphism Filter */}
        <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500 overflow-hidden">
          <img 
            src={service.image} 
            alt={service.title}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 filter blur-[1px] brightness-50 contrast-125" // Added glassmorphism blur
          />
          {/* Enhanced Glassmorphism Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-black/5 backdrop-blur-[2px]" />
        </div>

        {/* Animated Gradient Background */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} // Reduced duration
        />

        {/* Subtle Pattern Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" /> {/* Reduced duration */}

        {/* Content */}
        <div className="relative p-6 lg:p-8 flex-1 flex flex-col z-10" style={{ transform: 'translateZ(50px)' }}>
          {/* Header Section */}
          <div className="flex items-start justify-between mb-8">
            <motion.div
              className="p-4 rounded-2xl bg-background/80 backdrop-blur-md border border-border/50 group-hover:border-primary/40 group-hover:bg-primary/10 transition-all duration-300 shadow-lg" // Reduced duration
              whileHover={{ scale: 1.15, rotate: 8 }}
              transition={{ duration: 0.2, type: "spring" }} // Reduced duration
            >
              <service.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-200" /> {/* Reduced duration */}
            </motion.div>

            {/* Service Number */}
            <div className="text-right">
              <span className="font-grotesk font-black text-5xl lg:text-6xl text-foreground/25 group-hover:text-primary/25 transition-colors duration-300"> {/* Reduced duration */}
                {service.number}
              </span>
            </div>
          </div>

          {/* Title & Description */}
          <div className="mb-8 flex-1 space-y-4">
            <motion.h3 
              className="font-clash font-bold text-2xl lg:text-3xl group-hover:text-primary transition-colors duration-300 leading-tight" // Reduced duration
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }} // Reduced duration
            >
              {service.title}
            </motion.h3>
            <motion.p 
              className="font-satoshi text-muted-foreground text-base lg:text-lg leading-relaxed"
              whileHover={{ x: 2 }}
              transition={{ duration: 0.2 }} // Reduced duration
            >
              {service.description}
            </motion.p>
          </div>

          {/* Features List */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-3">
              {service.features.map((feature, featureIndex) => (
                <motion.div
                  key={featureIndex}
                  initial={{ opacity: 0, scale: 0.8, y: 10 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.3, // Reduced duration
                    delay: index * 0.1 + featureIndex * 0.1,
                  }}
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  <Badge
                    variant="secondary"
                    className="font-grotesk text-xs px-4 py-2 bg-background/80 backdrop-blur-sm border border-border/50 hover:border-primary/40 hover:bg-primary/10 transition-all duration-200 shadow-sm" // Reduced duration
                  >
                    {feature}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Enhanced Interactive Element */}
          <motion.div
            className="mt-auto pt-6 border-t border-border/30 group-hover:border-primary/20 transition-colors duration-300" // Reduced duration
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-center justify-between">
              <span className="font-grotesk font-medium text-sm text-muted-foreground group-hover:text-primary transition-colors duration-200"> {/* Reduced duration */}
                Explore Service
              </span>
              <motion.div
                className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-200" // Reduced duration
                whileHover={{ scale: 1.1, rotate: 45 }}
                transition={{ duration: 0.2 }} // Reduced duration
              >
                <ArrowRight className="w-5 h-5 text-primary group-hover:scale-110 transition-transform duration-200" /> {/* Reduced duration */}
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Enhanced Hover Effects */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" /> {/* Reduced duration */}
        
        {/* Glow Effect */}
        <div className="absolute inset-0 rounded-3xl bg-primary/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-20" /> {/* Reduced duration */}
      </div>

      {/* Outer Glow */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/20 to-accent/20 blur-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-300 -z-30" /> {/* Reduced duration */}
    </motion.div>
  );
};

export default Services;