import { ExternalLink, ArrowLeft, ArrowRight } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Montfort ICSE AI Chatbot",
    description: "Advanced Gemini-Powered AI with 3D Navigation",
    tags: ["AI/ML", "Gemini API", "RAG"],
    image:
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1200&h=800&fit=crop",
    slug: "montfort-icse-ai-chatbot",
  },
  {
    title: "DS Founder Birthday Wishes",
    description:
      "Interactive platform for collecting and displaying birthday wishes",
    tags: ["React", "Supabase", "Cloudinary"],
    image:
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=1200&h=800&fit=crop&auto=format",
    slug: "ds-founder-birthday-wishes",
  },
  {
    title: "Vowel Quest – Space Shooter",
    description:
      "Educational space shooter game for vowel recognition learning",
    tags: ["HTML5 Canvas", "JavaScript", "Game Dev"],
    image:
      "https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=1200&h=800&fit=crop&auto=format",
    slug: "vowel-quest",
  },
  {
    title: "Ruthram360°",
    description: "Transforming Spaces into Immersive Digital Experiences",
    tags: ["React 18", "360° Virtual Tours", "Google Street View"],
    image:
      "https://github.com/thiyo-de/Ruthram-360/raw/main/Web%20UI/1.png",
    slug: "ruthram360",
  },
  {
    title: "VR Tour Gallery Uploader",
    description:
      "Interactive user photo upload feature for immersive VR experiences",
    tags: ["VR Integration", "Flask", "React"],
    image:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=1200&h=800&fit=crop&auto=format",
    slug: "vr-tour-gallery",
  },
  {
    title: "Gamified Menu",
    description:
      "Dynamic, gamified navigation menu with sound effects",
    tags: ["UI/UX Design", "Sound Design", "React"],
    image:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1200&h=800&fit=crop&auto=format",
    slug: "gamify-menu",
  },
  {
    title: "QR Code Generator",
    description: "Generate, save, and manage QR codes with ease",
    tags: ["JavaScript", "QR Codes", "Local Storage"],
    image:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=1200&h=800&fit=crop&auto=format",
    slug: "qr-code-generator",
  },
  {
    title: "RemoteAccessApp",
    description:
      "24/7 Foreground Service with Persistent Notification",
    tags: ["Android", "Kotlin", "Foreground Service"],
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&h=800&fit=crop&auto=format",
    slug: "remote-access-app",
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
          {projects.map((project, index) => {
            const number = (index + 1).toString().padStart(2, "0");
            const route = `/work/${project.slug}`;

            return (
              <motion.div
                key={index}
                className="group flex-shrink-0 w-[85vw] sm:w-[70vw] md:w-[60vw] lg:w-[30vw] xl:w-[28vw] 2xl:w-[400px] snap-start"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <button
                  onClick={() => handleProjectClick(route)}
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
                          {number}
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
                        {project.tags.slice(0, 3).map((tag, tagIndex) => (
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
            );
          })}
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-8">
          <div className="flex gap-2">
            {Array.from({ 
              length: Math.ceil(projects.length / visibleCards) 
            }).map((_, index) => {
              const totalPages = Math.ceil(projects.length / visibleCards);
              // Calculate effective max index for scrolling
              const maxScrollIndex = Math.max(0, projects.length - visibleCards);
              
              // Determine active dot
              // If we are at the end (or past it), activate the last dot
              const activeDotIndex = currentIndex >= maxScrollIndex 
                ? totalPages - 1 
                : Math.floor(currentIndex / visibleCards);

              const isActive = index === activeDotIndex;

              return (
              <button
                key={index}
                onClick={() => {
                  // Clamp the new index to valid bounds to prevent whitespace
                  const newIndex = Math.min(
                    index * visibleCards, 
                    maxScrollIndex
                  );
                  
                  setCurrentIndex(newIndex);
                  
                  if (scrollContainerRef.current) {
                    const cardWidth = scrollContainerRef.current.clientWidth * 0.85;
                    const gap = 24;
                    // We need to calculate scroll position based on the new index
                    // However, we should be careful about the "clamped" index vs visual calculation
                    // Using the same logic as the scroll function helps consistency
                    const scrollAmount = (cardWidth + gap) * newIndex;
                    
                    scrollContainerRef.current.scrollTo({
                      left: scrollAmount,
                      behavior: "smooth"
                    });
                  }
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  isActive
                    ? "bg-primary w-8"
                    : "bg-border hover:bg-primary/50"
                }`}
              />
            );
            })}
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