import { Mail, Linkedin, Github, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-20 sm:py-32 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12 animate-fade-in">
            <span className="font-grotesk text-sm tracking-widest text-accent uppercase font-semibold">
              Get In Touch
            </span>
            <h2 className="font-outfit font-bold text-4xl sm:text-5xl md:text-6xl mt-4 mb-6">
              Let's Work Together
            </h2>
            <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Have a project in mind or want to collaborate? I'd love to hear from you. 
              Let's create something amazing together.
            </p>
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <Button 
              size="lg"
              className="font-grotesk text-lg px-10 py-7 bg-primary hover:bg-primary/90 text-primary-foreground shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 mb-12"
            >
              <Mail className="mr-2 h-5 w-5" />
              your.email@example.com
            </Button>
          </div>
          
          <div className="flex justify-center gap-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-4 rounded-full border-2 border-border hover:border-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-4 rounded-full border-2 border-border hover:border-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-4 rounded-full border-2 border-border hover:border-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110"
            >
              <Twitter className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
