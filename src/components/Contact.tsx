import { Mail, Linkedin, Github, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();

  const handleEmailClick = () => {
    window.scrollTo({ top: 0, behavior: "auto" });
    navigate("/contact-Page");
  };

  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/thiyoplus-f/",
      label: "LinkedIn",
    },
    { icon: Github, href: "https://github.com/thiyo-de", label: "GitHub" },
    {
      icon: Instagram,
      href: "https://www.instagram.com/thiyo.de?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      label: "Instagram",
    },
  ];

  return (
    <section id="contact" className="py-16 sm:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            className="mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="font-grotesk text-xs sm:text-sm tracking-[0.3em] text-muted-foreground uppercase">
              Available for Work
            </span>
            <h2 className="font-clash text-primary font-extrabold text-3xl sm:text-4xl md:text-6xl lg:text-7xl mt-4 mb-6 sm:mb-8 leading-tight">
              Let's Work
              <br />
              Together
            </h2>
            <p className="font-satoshi text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed px-4">
              Looking for new opportunities and exciting projects. Let's discuss
              how I can contribute to your team.
            </p>
          </motion.div>

          <motion.div
            className="mb-8 sm:mb-12"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={handleEmailClick}
                size="lg"
                className="font-grotesk text-base sm:text-lg lg:text-xl px-8 sm:px-10 lg:px-12 py-6 sm:py-7 lg:py-8 bg-primary hover:bg-primary/90 text-primary-foreground shadow-2xl hover:shadow-primary/20 transition-all duration-300 rounded-full group"
              >
                <motion.div
                  whileHover={{ rotate: 12 }}
                  transition={{ duration: 0.2 }}
                >
                  <Mail className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6" />
                </motion.div>
                Thiyo80203@gmail.com
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex justify-center gap-3 sm:gap-4"
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
                className="p-3 sm:p-4 lg:p-5 rounded-full border-2 border-border hover:border-primary hover:bg-primary/10 transition-all duration-300"
                variants={staggerItem}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                aria-label={link.label}
              >
                <link.icon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;