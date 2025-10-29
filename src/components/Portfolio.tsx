import { ExternalLink, ArrowLeft, ArrowRight } from "lucide-react";
import { useRef } from "react";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured online store with cart functionality and payment integration",
    tags: ["React", "Node.js", "Stripe"],
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=1200&h=800&fit=crop",
    number: "01"
  },
  {
    title: "Task Management App",
    description: "Collaborative project management tool with real-time updates",
    tags: ["React", "Firebase", "Tailwind"],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=800&fit=crop",
    number: "02"
  },
  {
    title: "Portfolio Website",
    description: "Creative portfolio showcasing design and development work",
    tags: ["Next.js", "Framer Motion", "TypeScript"],
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&h=800&fit=crop",
    number: "03"
  },
  {
    title: "Mobile Banking App",
    description: "Intuitive banking application with modern UI/UX",
    tags: ["React Native", "Redux", "Node.js"],
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&h=800&fit=crop",
    number: "04"
  },
  {
    title: "Social Media Dashboard",
    description: "Analytics dashboard for social media management",
    tags: ["Vue.js", "Chart.js", "Express"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop",
    number: "05"
  },
  {
    title: "Fitness Tracking App",
    description: "Health and fitness companion with workout tracking",
    tags: ["React", "GraphQL", "MongoDB"],
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1200&h=800&fit=crop",
    number: "06"
  }
];

const Portfolio = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth * 0.8;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="portfolio" className="py-20 sm:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-16 animate-fade-in">
          <div>
            <span className="font-grotesk text-xs tracking-[0.3em] text-muted-foreground uppercase">
              Portfolio
            </span>
            <h2 className="font-clash font-extrabold text-5xl sm:text-6xl md:text-7xl mt-2">
              Featured Projects
            </h2>
          </div>
          <div className="hidden md:flex gap-2">
            <button
              onClick={() => scroll('left')}
              className="p-4 rounded-full border-2 border-border hover:border-primary hover:bg-primary/10 transition-all"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-4 rounded-full border-2 border-border hover:border-primary hover:bg-primary/10 transition-all"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
        
        <div 
          ref={scrollContainerRef}
          className="flex gap-8 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group min-w-[85vw] sm:min-w-[70vw] lg:min-w-[600px] snap-start animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden rounded-2xl bg-card border border-border hover:border-primary transition-all duration-500">
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60" />
                  <div className="absolute top-6 right-6">
                    <span className="font-clash text-6xl font-bold text-primary/20">
                      {project.number}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <ExternalLink className="w-12 h-12 text-primary-foreground" />
                  </div>
                </div>
                
                <div className="p-8 space-y-4">
                  <h3 className="font-clash font-bold text-3xl group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="font-satoshi text-muted-foreground text-lg leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge 
                        key={tagIndex}
                        variant="secondary"
                        className="font-grotesk text-sm px-4 py-1"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default Portfolio;
