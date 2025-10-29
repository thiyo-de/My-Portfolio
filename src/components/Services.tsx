import { Palette, Code, Smartphone, Zap, Database } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Creating beautiful, intuitive interfaces that users love to interact with.",
    number: "01"
  },
  {
    icon: Code,
    title: "Frontend Development",
    description: "Building responsive, performant web applications with modern technologies.",
    number: "02"
  },
  {
    icon: Smartphone,
    title: "Cross-Platform Apps",
    description: "Developing native-like experiences for iOS, Android, and desktop platforms.",
    number: "03"
  },
  {
    icon: Zap,
    title: "Interactive Experiences",
    description: "Crafting engaging animations and micro-interactions that delight users.",
    number: "04"
  },
  {
    icon: Database,
    title: "API Development",
    description: "Building robust backend services and RESTful APIs for seamless integration.",
    number: "05"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 sm:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20 animate-fade-in">
          <span className="font-grotesk text-xs tracking-[0.3em] text-muted-foreground uppercase">
            Services
          </span>
          <h2 className="font-clash font-extrabold text-5xl sm:text-6xl md:text-7xl mt-2">
            What I Do
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative border-2 border-border bg-card/50 backdrop-blur-sm hover:border-primary hover:bg-card transition-all duration-500 rounded-2xl p-10 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute top-6 right-6 font-clash text-5xl font-bold text-primary/10 group-hover:text-primary/20 transition-colors">
                {service.number}
              </div>
              
              <div className="space-y-6">
                <div className="p-5 bg-primary/10 rounded-2xl w-fit group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <service.icon className="w-12 h-12 text-primary" />
                </div>
                <h3 className="font-clash font-bold text-3xl group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="font-satoshi text-muted-foreground text-lg leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
