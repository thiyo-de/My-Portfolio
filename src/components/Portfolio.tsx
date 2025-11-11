import { ExternalLink, ArrowLeft, ArrowRight } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

// Define TypeScript interfaces
interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  number: string;
  route: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

const projects: Project[] = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured online store with cart functionality and payment integration",
    tags: ["React", "Node.js", "Stripe"],
    image:
      "https://images.unsplash.com/photo-1557821552-17105176677c?w=1200&h=800&fit=crop",
    number: "01",
    route: "/projects/ecommerce-platform",
  },
  {
    title: "Task Management App",
    description: "Collaborative project management tool with real-time updates",
    tags: ["React", "Firebase", "Tailwind"],
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=800&fit=crop",
    number: "02",
    route: "/projects/task-management",
  },
  {
    title: "Portfolio Website",
    description: "Creative portfolio showcasing design and development work",
    tags: ["Next.js", "Framer Motion", "TypeScript"],
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&h=800&fit=crop",
    number: "03",
    route: "/projects/portfolio-website",
  },
  {
    title: "Mobile Banking App",
    description: "Intuitive banking application with modern UI/UX",
    tags: ["React Native", "Redux", "Node.js"],
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&h=800&fit=crop",
    number: "04",
    route: "/projects/banking-app",
  },
  {
    title: "Social Media Dashboard",
    description: "Analytics dashboard for social media management",
    tags: ["Vue.js", "Chart.js", "Express"],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop",
    number: "05",
    route: "/projects/social-dashboard",
  },
  {
    title: "Fitness Tracking App",
    description: "Health and fitness companion with workout tracking",
    tags: ["React", "GraphQL", "MongoDB"],
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1200&h=800&fit=crop",
    number: "06",
    route: "/projects/fitness-app",
  },
];

const Portfolio = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [visibleCards, setVisibleCards] = useState<number>(1);

  // Calculate visible cards based on screen size
  useEffect(() => {
    const updateVisibleCards = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setVisibleCards(1);
      } else if (width < 768) {
        setVisibleCards(1.2);
      } else if (width < 1024) {
        setVisibleCards(1.5);
      } else if (width < 1280) {
        setVisibleCards(2);
      } else {
        setVisibleCards(2.5);
      }
    };

    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);
    return () => window.removeEventListener("resize", updateVisibleCards);
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const cardWidth =
        scrollContainerRef.current.scrollWidth / projects.length;
      const scrollAmount = cardWidth * visibleCards;

      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="portfolio"
      className="py-16 sm:py-24 lg:py-32 bg-background overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 lg:mb-16 gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex-1 max-w-4xl">
            <span className="font-grotesk text-xs tracking-[0.3em] text-muted-foreground uppercase">
              Portfolio
            </span>
            <h2 className="font-clash text-primary font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl mt-2">
              Featured Projects
            </h2>
            <p className="font-satoshi text-lg text-muted-foreground mt-4 max-w-lg">
              A collection of my latest work showcasing modern design and
              development practices
            </p>
          </div>

          <div className="flex gap-3">
            <motion.button
              onClick={() => scroll("left")}
              className="p-3 sm:p-4 rounded-full border-2 border-border hover:border-primary hover:bg-primary/10 transition-all duration-300 bg-background/80 backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Scroll left"
            >
              <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </motion.button>
            <motion.button
              onClick={() => scroll("right")}
              className="p-3 sm:p-4 rounded-full border-2 border-border hover:border-primary hover:bg-primary/10 transition-all duration-300 bg-background/80 backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Scroll right"
            >
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </motion.button>
          </div>
        </motion.div>

        {/* Projects Grid - Desktop */}
        <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard project={project} index={index} />
            </motion.div>
          ))}
        </div>

        {/* Horizontal Scroll - Mobile & Tablet */}
        <div className="lg:hidden">
          <div
            ref={scrollContainerRef}
            className="flex gap-4 sm:gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8 -mx-4 px-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {projects.map((project, index) => (
              <div
                key={project.number}
                className="flex-shrink-0 snap-start"
                style={{ width: "calc(85vw - 2rem)" }}
              >
                <ProjectCard project={project} index={index} />
              </div>
            ))}
          </div>

          {/* Mobile Pagination Dots */}
          <div className="flex justify-center mt-8">
            <div className="flex gap-2">
              {projects.map((project) => (
                <div
                  key={project.number}
                  className="w-2 h-2 rounded-full bg-border transition-all duration-300"
                />
              ))}
            </div>
          </div>
        </div>

        {/* CTA Buttons Section */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12 lg:mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {/* Secondary CTA - View All */}
          <Link
            to="/work-Page"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full border-2 border-primary text-primary font-satoshi font-medium text-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105"
          >
            View All Projects
            <ExternalLink className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
          </Link>
        </motion.div>

        {/* Additional Info Text */}
        <motion.div
          className="text-center mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <p className="font-satoshi text-muted-foreground text-sm">
            Explore more case studies, detailed process, and live demos
          </p>
        </motion.div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

// Separate Project Card Component with proper TypeScript typing
const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <Link to={project.route} className="block h-full group">
      <motion.div
        className="relative overflow-hidden rounded-2xl bg-card border border-border hover:border-primary transition-all duration-500 h-full flex flex-col group-hover:shadow-2xl group-hover:shadow-primary/10"
        whileHover={{ y: -8 }}
      >
        {/* Image Container */}
        <div className="relative overflow-hidden aspect-[4/3] flex-shrink-0">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.7 }}
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/30 to-transparent" />

          {/* Project Number */}
          <div className="absolute top-4 right-4">
            <span className="font-clash text-3xl sm:text-4xl font-bold text-primary/20">
              {project.number}
            </span>
          </div>

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-primary/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
            <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <ExternalLink className="w-8 h-8 sm:w-10 sm:h-10 text-primary-foreground mb-3 mx-auto" />
              <span className="font-satoshi text-primary-foreground font-medium text-sm sm:text-base block">
                View Project Details
              </span>
            </div>
          </div>
        </div>

        {/* Content Container */}
        <div className="p-6 sm:p-8 space-y-4 flex-1 flex flex-col">
          <div>
            <h3 className="font-clash font-bold text-xl sm:text-2xl group-hover:text-primary transition-colors duration-300 line-clamp-2 mb-2">
              {project.title}
            </h3>
            <p className="font-satoshi text-muted-foreground text-sm sm:text-base leading-relaxed line-clamp-3">
              {project.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-2 pt-2 mt-auto">
            {project.tags.map((tag: string, tagIndex: number) => (
              <Badge
                key={tagIndex}
                variant="secondary"
                className="font-grotesk text-xs px-3 py-1 border"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default Portfolio;
