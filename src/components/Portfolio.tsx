import { ExternalLink, ArrowLeft, ArrowRight, Construction } from "lucide-react";
import { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import MontfortThumbnail from "@/assets/montfort-school-ai-chatbot-system/Thumnail.webp";
import MontfortICSEThumbnail from "@/assets/ProjectDetails_MontfortICSE/Thumnail.webp";
import DSFounderThumbnail from "@/assets/ProjectDetails_DSFounderWishes/Thumnail.webp";
import DroneMergeThumbnail from "@/assets/ProjectDetails_DroneMerge/Thumnail.webp";
import VowelQuestThumbnail from "@/assets/ProjectDetails_VowelQuest/Thumnail.webp";
import RuthramThumbnail from "@/assets/ProjectDetails_Ruthram360/Thumnail.webp";
import VRTourThumbnail from "@/assets/ProjectDetails_VRTourGallery/Thumnail.webp";
import GamifyThumbnail from "@/assets/ProjectDetails_GamifyMenu/Thumnail.webp";
import QRCodeThumbnail from "@/assets/ProjectDetails_QRCodeGenerator/Thumnail.webp";
import RemoteAccessThumbnail from "@/assets/ProjectDetails_RemoteAccessApp/Thumnail.webp";

const projects = [
  {
    title: "Montfort AI Admin Dashboard",
    description: "A powerful, no-code admin interface for managing the Montfort AI Chatbot's knowledge base.",
    tags: ["Admin Panel", "Dashboard", "CMS"],
    image: MontfortThumbnail,
    slug: "montfort-school-ai-chatbot-system",
  },
  {
    title: "Montfort ICSE AI Chatbot",
    description: "Advanced Gemini-Powered AI with 3D Navigation",
    tags: ["AI/ML", "Gemini API", "RAG"],
    image: MontfortICSEThumbnail,
    slug: "montfort-icse-ai-chatbot",
  },
  {
    title: "DS Founder Birthday Wishes",
    description: "Interactive platform for collecting and displaying birthday wishes",
    tags: ["React", "Supabase", "Cloudinary"],
    image: DSFounderThumbnail,
    slug: "ds-founder-birthday-wishes",
  },
  {
    title: "Drone Footage Merge Tool",
    description: "Automated Footage Organization for Production Teams",
    tags: ["Electron", "Node.js", "Automation"],
    image: DroneMergeThumbnail,
    slug: "drone-footage-merge-tool",
  },
  {
    title: "Vowel Quest – Space Shooter",
    description: "Educational space shooter game for vowel recognition learning",
    tags: ["HTML5 Canvas", "JavaScript", "Game Dev"],
    image: VowelQuestThumbnail,
    slug: "vowel-quest",
  },
  {
    title: "Ruthram360°",
    description: "Transforming Spaces into Immersive Digital Experiences",
    tags: ["React 18", "360° Virtual Tours", "Google Street View"],
    image: RuthramThumbnail,
    slug: "ruthram360",
  },
  {
    title: "VR Tour Gallery Uploader",
    description: "Interactive user photo upload feature for immersive VR experiences",
    tags: ["VR Integration", "Flask", "React"],
    image: VRTourThumbnail,
    slug: "vr-tour-gallery",
  },
  {
    title: "Gamified Menu",
    description: "Dynamic, gamified navigation menu with sound effects",
    tags: ["UI/UX Design", "Sound Design", "React"],
    image: GamifyThumbnail,
    slug: "gamify-menu",
  },
  {
    title: "QR Code Generator",
    description: "Generate, save, and manage QR codes with ease",
    tags: ["JavaScript", "QR Codes", "Local Storage"],
    image: QRCodeThumbnail,
    slug: "qr-code-generator",
  },
  {
    title: "RemoteAccessApp",
    description: "24/7 Foreground Service with Persistent Notification",
    tags: ["Android", "Kotlin", "Foreground Service"],
    image: RemoteAccessThumbnail,
    slug: "remote-access-app",
    isUnderDevelopment: true,
  },
];

const Portfolio = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
    containScroll: "trimSnaps",
    dragFree: true
  });

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const navigate = useNavigate();

  const updateScrollState = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollLeft(emblaApi.canScrollPrev());
    setCanScrollRight(emblaApi.canScrollNext());
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    updateScrollState();
    setScrollSnaps(emblaApi.scrollSnapList());

    emblaApi.on("select", updateScrollState);
    emblaApi.on("reInit", updateScrollState);

    return () => {
      emblaApi.off("select", updateScrollState);
      emblaApi.off("reInit", updateScrollState);
    };
  }, [emblaApi, updateScrollState]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  const handleProjectClick = (route: string) => {
    window.scrollTo({ top: 0, behavior: "auto" });
    navigate(route);
  };

  const handleViewAllProjects = () => {
    window.scrollTo({ top: 0, behavior: "auto" });
    navigate("/work-Page");
  };

  return (
    <section id="portfolio" className="py-20 sm:py-32 bg-background overflow-hidden">
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
            <button
              onClick={scrollPrev}
              disabled={!canScrollLeft}
              className={`p-3 sm:p-4 rounded-full border-2 transition-all ${!canScrollLeft
                  ? "border-border/30 text-muted-foreground/30 cursor-not-allowed"
                  : "border-border hover:border-primary hover:bg-primary/10"
                }`}
            >
              <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <button
              onClick={scrollNext}
              disabled={!canScrollRight}
              className={`p-3 sm:p-4 rounded-full border-2 transition-all ${!canScrollRight
                  ? "border-border/30 text-muted-foreground/30 cursor-not-allowed"
                  : "border-border hover:border-primary hover:bg-primary/10"
                }`}
            >
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </motion.div>

        {/* Embla Carousel viewport */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6 lg:gap-8 touch-pan-y">
            {projects.map((project, index) => {
              const number = (index + 1).toString().padStart(2, "0");
              const route = `/portfolio/${project.slug}`;

              return (
                <div
                  key={index}
                  className="flex-shrink-0 w-[85vw] sm:w-[70vw] md:w-[60vw] lg:w-[30vw] xl:w-[28vw] 2xl:w-[400px] min-w-0"
                >
                  <motion.div
                    className="h-full"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                  >
                    <button
                      onClick={() => handleProjectClick(route)}
                      className="block h-full w-full text-left group"
                    >
                      <div className="relative overflow-hidden rounded-2xl bg-card border border-border hover:border-primary transition-all duration-300 h-full flex flex-col hover:-translate-y-1">
                        <div className="relative overflow-hidden aspect-[4/3] flex-shrink-0">
                          <img
                            src={project.image}
                            alt={project.title}
                            loading="lazy"
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60" />
                          <div className="absolute top-4 right-4 sm:top-6 sm:right-6">
                            <span className="font-clash text-4xl sm:text-5xl lg:text-6xl font-bold text-primary/75">
                              {number}
                            </span>
                          </div>
                          {(project as any).isUnderDevelopment && (
                            <div className="absolute top-4 left-4 sm:top-6 sm:left-6">
                              <Badge variant="destructive" className="font-grotesk text-xs px-2 py-1 bg-yellow-500/10 text-yellow-500 border-yellow-500/20 hover:bg-yellow-500/20 border backdrop-blur-sm">
                                <Construction className="w-3 h-3 mr-1" /> Development
                              </Badge>
                            </div>
                          )}
                          <div className="absolute inset-0 bg-primary/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="text-center">
                              <ExternalLink className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-primary-foreground mb-2 mx-auto" />
                              <span className="font-satoshi text-primary-foreground text-sm sm:text-base">
                                View Project
                              </span>
                            </div>
                          </div>
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
                      </div>
                    </button>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-8">
          <div className="flex gap-2">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === selectedIndex
                    ? "bg-primary w-8"
                    : "bg-border hover:bg-primary/50"
                  }`}
                aria-label={`Go to slide ${index + 1}`}
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