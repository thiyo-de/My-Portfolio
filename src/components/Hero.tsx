import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--accent)/0.08),transparent_50%)]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 animate-fade-in">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <div className="inline-block">
            <p className="font-grotesk text-sm sm:text-base tracking-wider text-muted-foreground mb-4 uppercase">
              Designer • Developer • Entrepreneur
            </p>
          </div>
          
          <h1 className="font-outfit font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-tight tracking-tight">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Your Name
            </span>
          </h1>
          
          <p className="font-outfit text-2xl sm:text-3xl md:text-4xl font-semibold text-foreground/80 max-w-3xl mx-auto">
            Designing & Building Digital Experiences
          </p>
          
          <p className="font-grotesk text-base sm:text-lg text-muted-foreground flex items-center justify-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-accent animate-pulse" />
            Based in Tiruchirappalli, Tamil Nadu, India
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button 
              size="lg" 
              className="font-grotesk text-base px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
            >
              View My Work
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="font-grotesk text-base px-8 py-6 border-2 hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all duration-300"
            >
              Let's Talk
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-muted-foreground/30 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
