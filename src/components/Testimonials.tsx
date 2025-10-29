import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

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
        <div className="text-center mb-16 animate-fade-in">
          <span className="font-grotesk text-sm tracking-widest text-accent uppercase font-semibold">
            Testimonials
          </span>
          <h2 className="font-outfit font-bold text-4xl sm:text-5xl md:text-6xl mt-4">
            What Clients Say
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="border-2 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:shadow-lg animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
