import { Palette, Code, Smartphone, Zap, Database } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";

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
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="font-grotesk text-xs tracking-[0.3em] text-muted-foreground uppercase">
            Services
          </span>
          <h2 className="font-clash font-extrabold text-5xl sm:text-6xl md:text-7xl mt-2">
            What I Do
          </h2>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className="group relative border-2 border-border bg-card/50 backdrop-blur-sm hover:border-primary hover:bg-card transition-all duration-500 rounded-2xl p-10"
              variants={staggerItem}
              whileHover={{ y: -5, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="absolute top-6 right-6 font-clash text-5xl font-bold text-primary/10 group-hover:text-primary/20 transition-colors">
                {service.number}
              </div>
              
              <div className="space-y-6">
                <motion.div 
                  className="p-5 bg-primary/10 rounded-2xl w-fit"
                  whileHover={{ scale: 1.1, backgroundColor: "hsl(var(--primary) / 0.2)" }}
                  transition={{ duration: 0.3 }}
                >
                  <service.icon className="w-12 h-12 text-primary" />
                </motion.div>
                <h3 className="font-clash font-bold text-3xl group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="font-satoshi text-muted-foreground text-lg leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
