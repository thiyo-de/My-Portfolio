import { ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A modern, full-featured online shopping experience with seamless checkout.",
    tags: ["React", "Node.js", "Stripe"],
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&auto=format&fit=crop",
  },
  {
    title: "Mobile Banking App",
    description: "Intuitive financial management app with real-time transactions and analytics.",
    tags: ["React Native", "UI/UX", "Fintech"],
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop",
  },
  {
    title: "Design System",
    description: "Comprehensive component library for enterprise-level applications.",
    tags: ["Figma", "React", "Documentation"],
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&auto=format&fit=crop",
  },
  {
    title: "SaaS Dashboard",
    description: "Analytics dashboard with real-time data visualization and insights.",
    tags: ["TypeScript", "Chart.js", "API"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop",
  },
  {
    title: "Portfolio Website",
    description: "Creative portfolio site with smooth animations and transitions.",
    tags: ["Framer", "Design", "Animation"],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop",
  },
  {
    title: "Brand Identity",
    description: "Complete brand refresh including logo, colors, and guidelines.",
    tags: ["Branding", "Illustrator", "Strategy"],
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&auto=format&fit=crop",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 sm:py-32 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <span className="font-grotesk text-sm tracking-widest text-accent uppercase font-semibold">
            My Work
          </span>
          <h2 className="font-outfit font-bold text-4xl sm:text-5xl md:text-6xl mt-4">
            Featured Projects
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="group overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl bg-card/50 backdrop-blur-sm cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden aspect-video">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <ExternalLink className="w-8 h-8 text-primary transform -translate-y-4 group-hover:translate-y-0 transition-transform" />
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="font-outfit font-bold text-xl mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="font-inter text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge 
                      key={tagIndex}
                      variant="secondary"
                      className="font-grotesk text-xs"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
