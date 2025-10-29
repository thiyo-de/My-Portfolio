import { Palette, Code2, Sparkles, Layout, Smartphone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Creating intuitive and visually stunning interfaces that users love to interact with.",
  },
  {
    icon: Code2,
    title: "Frontend Development",
    description: "Building responsive, performant web applications with React, Node.js, and modern tools.",
  },
  {
    icon: Sparkles,
    title: "Interactive Experiences",
    description: "Crafting engaging animations and interactions that bring digital products to life.",
  },
  {
    icon: Layout,
    title: "Branding & Identity",
    description: "Developing cohesive brand identities that resonate with your target audience.",
  },
  {
    icon: Smartphone,
    title: "Cross-Platform Apps",
    description: "Building applications that work seamlessly across web, mobile, and desktop platforms.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 sm:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <span className="font-grotesk text-sm tracking-widest text-accent uppercase font-semibold">
            What I Do
          </span>
          <h2 className="font-outfit font-bold text-4xl sm:text-5xl md:text-6xl mt-4">
            Services & Expertise
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="group border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-card/50 backdrop-blur-sm animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="mb-6 inline-flex p-4 rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-outfit font-bold text-xl mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="font-inter text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
