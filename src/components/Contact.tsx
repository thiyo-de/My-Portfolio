import { Mail, Linkedin, Github, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";

const Contact = () => {
  const socialLinks = [
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  ];

  return (
    <section id="contact" className="py-20 sm:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="font-grotesk text-xs tracking-[0.3em] text-muted-foreground uppercase">
              Get In Touch
            </span>
            <h2 className="font-clash font-extrabold text-5xl sm:text-6xl md:text-8xl mt-4 mb-8 leading-tight">
              Let's Work<br />Together
            </h2>
            <p className="font-satoshi text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Have a project in mind or want to collaborate? I'd love to hear from you.
            </p>
          </motion.div>
          
          <motion.div 
            className="mb-12"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                size="lg"
                className="font-grotesk text-xl px-12 py-8 bg-primary hover:bg-primary/90 text-primary-foreground shadow-2xl hover:shadow-primary/20 transition-all duration-300 rounded-full group"
              >
                <motion.div
                  whileHover={{ rotate: 12 }}
                  transition={{ duration: 0.2 }}
                >
                  <Mail className="mr-3 h-6 w-6" />
                </motion.div>
                your.email@example.com
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="flex justify-center gap-4"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {socialLinks.map((link, index) => (
              <motion.a 
                key={index}
                href={link.href} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-5 rounded-full border-2 border-border hover:border-primary hover:bg-primary/10 transition-all duration-300"
                variants={staggerItem}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                aria-label={link.label}
              >
                <link.icon className="w-7 h-7" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
