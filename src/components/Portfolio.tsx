import { ExternalLink, ArrowLeft, ArrowRight } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const projects = [
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
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [visibleCards, setVisibleCards] = useState<number>(3);
  const navigate = useNavigate();

  // Calculate visible cards based on screen size
  useEffect(() => {
    const updateVisibleCards = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setVisibleCards(1);
      } else if (width < 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };

    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);
    return () => window.removeEventListener("resize", updateVisibleCards);
  }, []);

  const handleProjectClick = (route: string) => {
    window.scrollTo({ top: 0, behavior: "auto" });
    navigate(route);
  };

  const handleViewAllProjects = () => {
    window.scrollTo({ top: 0, behavior: "auto" });
    navigate("/work-Page");
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.clientWidth * 0.85;
      const gap = 24;
      const scrollAmount = (cardWidth + gap) * visibleCards;

      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });

      // Update current index
      setCurrentIndex(prev => {
        if (direction === "right") {
          return Math.min(prev + visibleCards, projects.length - visibleCards);
        } else {
          return Math.max(prev - visibleCards, 0);
        }
      });
    }
  };

  const canScrollLeft = currentIndex > 0;
  const canScrollRight = currentIndex < projects.length - visibleCards;

  return (
    <section
      id="portfolio"
      className="py-20 sm:py-32 bg-background overflow-hidden"
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
          <div className="flex-1">
            <span className="font-grotesk text-xs tracking-[0.3em] text-muted-foreground uppercase">
              Portfolio
            </span>
            <h2 className="font-clash text-primary font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl mt-2">
              Featured Projects
            </h2>
          </div>
          
          <div className="flex gap-2 self-start lg:self-auto">
            <motion.button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className={`p-3 sm:p-4 rounded-full border-2 transition-all ${
                !canScrollLeft 
                  ? "border-border/30 text-muted-foreground/30 cursor-not-allowed" 
                  : "border-border hover:border-primary hover:bg-primary/10"
              }`}
              whileHover={!canScrollLeft ? {} : { scale: 1.1 }}
              whileTap={!canScrollLeft ? {} : { scale: 0.95 }}
            >
              <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </motion.button>
            <motion.button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className={`p-3 sm:p-4 rounded-full border-2 transition-all ${
                !canScrollRight
                  ? "border-border/30 text-muted-foreground/30 cursor-not-allowed" 
                  : "border-border hover:border-primary hover:bg-primary/10"
              }`}
              whileHover={!canScrollRight ? {} : { scale: 1.1 }}
              whileTap={!canScrollRight ? {} : { scale: 0.95 }}
            >
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </motion.button>
          </div>
        </motion.div>

        {/* Projects Container */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 lg:gap-8 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            scrollPadding: "0px 16px",
          }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group flex-shrink-0 w-[85vw] sm:w-[70vw] md:w-[60vw] lg:w-[30vw] xl:w-[28vw] 2xl:w-[400px] snap-start"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <button
                onClick={() => handleProjectClick(project.route)}
                className="block h-full w-full text-left"
              >
                <motion.div
                  className="relative overflow-hidden rounded-2xl bg-card border border-border hover:border-primary transition-all duration-300 h-full flex flex-col"
                  whileHover={{ y: -4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="relative overflow-hidden aspect-[4/3] flex-shrink-0">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.4 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60" />
                    <div className="absolute top-4 right-4 sm:top-6 sm:right-6">
                      <span className="font-clash text-4xl sm:text-5xl lg:text-6xl font-bold text-primary/20">
                        {project.number}
                      </span>
                    </div>
                    <motion.div
                      className="absolute inset-0 bg-primary/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    >
                      <div className="text-center">
                        <ExternalLink className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-primary-foreground mb-2 mx-auto" />
                        <span className="font-satoshi text-primary-foreground text-sm sm:text-base">
                          View Project
                        </span>
                      </div>
                    </motion.div>
                  </div>

                  <div className="p-6 sm:p-8 space-y-4 flex-1 flex flex-col">
                    <h3 className="font-clash font-bold text-2xl sm:text-3xl group-hover:text-primary transition-colors line-clamp-2">
                      {project.title}
                    </h3>
                    <p className="font-satoshi text-muted-foreground text-base sm:text-lg leading-relaxed flex-1 line-clamp-3">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge
                          key={tagIndex}
                          variant="secondary"
                          className="font-grotesk text-xs sm:text-sm px-3 sm:px-4 py-1"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </button>
            </motion.div>
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-8">
          <div className="flex gap-2">
            {Array.from({ 
              length: Math.ceil(projects.length / visibleCards) 
            }).map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  const newIndex = index * visibleCards;
                  setCurrentIndex(newIndex);
                  if (scrollContainerRef.current) {
                    const cardWidth = scrollContainerRef.current.clientWidth * 0.85;
                    const gap = 24;
                    const scrollAmount = (cardWidth + gap) * newIndex;
                    scrollContainerRef.current.scrollTo({
                      left: scrollAmount,
                      behavior: "smooth"
                    });
                  }
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === Math.floor(currentIndex / visibleCards)
                    ? "bg-primary"
                    : "bg-border hover:bg-primary/50"
                }`}
              />
            ))}
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
          {/* View All Projects Button */}
          <button
            onClick={handleViewAllProjects}
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full border-2 border-primary text-primary font-satoshi font-medium text-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105"
          >
            View All Projects
            <ExternalLink className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
          </button>
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

export default Portfolio;