import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background pt-20">
      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto text-center space-y-8">
          <div className="inline-block animate-fade-in">
            <p className="font-grotesk text-xs sm:text-sm tracking-[0.3em] text-muted-foreground mb-6 uppercase">
              Designer • Developer • Entrepreneur
            </p>
          </div>
          
          <h1 className="font-clash font-extrabold text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.95] tracking-tighter animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Hi, I'm{" "}
            <span className="block mt-4 bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">
              Your Name
            </span>
          </h1>
          
          <p className="font-satoshi text-xl sm:text-2xl md:text-3xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: "0.3s" }}>
            Designing & Building Digital Experiences That Stand Out
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-12 animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <Button 
              onClick={() => scrollToSection("portfolio")}
              size="lg" 
              className="font-grotesk text-base px-10 py-7 bg-primary hover:bg-primary/90 text-primary-foreground shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group rounded-full"
            >
              View My Work
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              onClick={() => scrollToSection("contact")}
              size="lg" 
              variant="outline"
              className="font-grotesk text-base px-10 py-7 border-2 border-muted hover:bg-muted hover:text-foreground transition-all duration-300 rounded-full"
            >
              Let's Talk
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-border rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
