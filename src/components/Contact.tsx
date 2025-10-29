import { Mail, Linkedin, Github, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-20 sm:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-16 animate-fade-in">
            <span className="font-grotesk text-xs tracking-[0.3em] text-muted-foreground uppercase">
              Get In Touch
            </span>
            <h2 className="font-clash font-extrabold text-5xl sm:text-6xl md:text-8xl mt-4 mb-8 leading-tight">
              Let's Work<br />Together
            </h2>
            <p className="font-satoshi text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Have a project in mind or want to collaborate? I'd love to hear from you.
            </p>
          </div>
          
          <div className="animate-fade-in mb-12" style={{ animationDelay: "0.1s" }}>
            <Button 
              size="lg"
              className="font-grotesk text-xl px-12 py-8 bg-primary hover:bg-primary/90 text-primary-foreground shadow-2xl hover:shadow-primary/20 transition-all duration-300 hover:scale-105 rounded-full group"
            >
              <Mail className="mr-3 h-6 w-6 group-hover:rotate-12 transition-transform" />
              your.email@example.com
            </Button>
          </div>
          
          <div className="flex justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-5 rounded-full border-2 border-border hover:border-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="w-7 h-7" />
            </a>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-5 rounded-full border-2 border-border hover:border-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110"
            >
              <Github className="w-7 h-7" />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-5 rounded-full border-2 border-border hover:border-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110"
            >
              <Twitter className="w-7 h-7" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
