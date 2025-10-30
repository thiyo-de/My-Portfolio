import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";

const testimonials = [
  {
    quote: "Working with them was an absolute pleasure. The attention to detail and creative vision exceeded our expectations.",
    author: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
  },
  {
    quote: "They transformed our outdated website into a modern, user-friendly platform that our customers love.",
    author: "Michael Chen",
    role: "Product Manager, InnovateCo",
  },
  {
    quote: "Not only skilled in development but also brings a strategic mindset that helped shape our product roadmap.",
    author: "Priya Sharma",
    role: "Founder, DesignHub",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 sm:py-32 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="font-grotesk text-sm tracking-widest text-accent uppercase font-semibold">
            Testimonials
          </span>
          <h2 className="font-outfit font-bold text-4xl sm:text-5xl md:text-6xl mt-4">
            What Clients Say
          </h2>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <Card 
                className="border-2 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:shadow-lg h-full"
              >
                <CardContent className="p-8">
                  <Quote className="w-10 h-10 text-accent/30 mb-4" />
                  <p className="font-inter text-lg text-foreground/80 mb-6 leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <p className="font-outfit font-bold text-lg">
                      {testimonial.author}
                    </p>
                    <p className="font-grotesk text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
