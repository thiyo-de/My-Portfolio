import { useState } from "react";
import {
  Mail,
  Linkedin,
  Github,
  Twitter,
  Phone,
  MapPin,
  Copy,
  Check,
  Send,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const Contact = () => {
  const [emailCopied, setEmailCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("hello@example.com");
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy email: ", err);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "hello@example.com",
      action: copyEmail,
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567",
      action: null,
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Your City, Country",
      action: null,
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://linkedin.com",
      label: "LinkedIn",
    },
    {
      icon: Github,
      href: "https://github.com",
      label: "GitHub",
    },
    {
      icon: Twitter,
      href: "https://twitter.com",
      label: "Twitter",
    },
  ];

  return (
    <section id="contact" className="py-20 sm:py-32 bg-background relative overflow-hidden">
      {/* Animated Background Orbs - Slower speed */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/15 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3
        }}
      />
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-accent/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 6
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="font-grotesk text-xs tracking-[0.3em] text-muted-foreground uppercase">
              Get In Touch
            </span>
            <h2 className="font-clash font-extrabold text-4xl sm:text-5xl md:text-7xl mt-6 mb-6 leading-tight">
              Let's Create
              <br />
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Amazing Things
              </span>
            </h2>
            <p className="font-satoshi text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Ready to bring your ideas to life? Whether it's a new project or
              collaboration, I'm here to help you achieve your goals.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Contact Information */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Card className="bg-card/80 backdrop-blur-md border-border/50 shadow-2xl relative overflow-hidden">
                  <motion.div 
                    className="absolute -top-20 -right-20 w-40 h-40 bg-primary/10 rounded-full blur-2xl"
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  <CardContent className="p-8 relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary/70 rounded-lg flex items-center justify-center">
                        <Mail className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <h3 className="font-grotesk text-2xl font-semibold">
                          Get in Touch
                        </h3>
                        <p className="font-satoshi text-sm text-muted-foreground">
                          Reach out through any channel
                        </p>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      {contactInfo.map((item, index) => (
                        <motion.div
                          key={item.label}
                          className="flex items-center gap-4 p-4 rounded-xl border border-border/50 bg-background/50 hover:bg-accent/30 transition-all duration-500 cursor-pointer group hover:scale-[1.02] hover:shadow-lg"
                          onClick={item.action || undefined}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                          whileHover={{ y: -2, scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <motion.div 
                            className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-all duration-500"
                            whileHover={{ scale: 1.1, backgroundColor: "hsl(var(--primary) / 0.2)" }}
                            transition={{ duration: 0.3 }}
                          >
                            <item.icon className="w-6 h-6 text-primary" />
                          </motion.div>
                          <div className="flex-1">
                            <p className="font-grotesk text-sm text-muted-foreground">
                              {item.label}
                            </p>
                            <p className="font-satoshi text-base font-medium">{item.value}</p>
                          </div>
                          {item.action && (
                            <Button
                              variant="ghost"
                              size="sm"
                              className="opacity-0 group-hover:opacity-100 transition-all duration-500 hover:bg-primary/20"
                            >
                              {emailCopied ? (
                                <Check className="w-4 h-4 text-primary" />
                              ) : (
                                <Copy className="w-4 h-4" />
                              )}
                            </Button>
                          )}
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <p className="font-grotesk text-sm text-muted-foreground mb-4 text-center lg:text-left">
                  Follow me on social media
                </p>
                <div className="flex justify-center lg:justify-start gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-5 rounded-full border-2 border-border hover:border-primary hover:bg-primary/10 transition-all duration-500 hover:scale-110"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                      whileHover={{ y: -2, scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <social.icon className="w-7 h-7" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="bg-card/80 backdrop-blur-md border-border/50 shadow-2xl sticky top-8 overflow-hidden">
                <motion.div 
                  className="absolute -bottom-20 -left-20 w-40 h-40 bg-primary/10 rounded-full blur-2xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.2, 0.4, 0.2],
                  }}
                  transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                  }}
                />
                <CardContent className="p-8 relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary/70 rounded-lg flex items-center justify-center">
                      <Send className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h3 className="font-grotesk text-2xl font-semibold">
                        Send Message
                      </h3>
                      <p className="font-satoshi text-sm text-muted-foreground">
                        I'll respond within 24 hours
                      </p>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-3">
                        <label
                          htmlFor="name"
                          className="font-grotesk text-sm font-medium"
                        >
                          Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your name"
                          required
                          className="bg-background/50 border-border/50 focus:border-primary/50 transition-all duration-500"
                        />
                      </div>
                      <div className="space-y-3">
                        <label
                          htmlFor="email"
                          className="font-grotesk text-sm font-medium"
                        >
                          Email *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your.email@example.com"
                          required
                          className="bg-background/50 border-border/50 focus:border-primary/50 transition-all duration-500"
                        />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <label
                        htmlFor="subject"
                        className="font-grotesk text-sm font-medium"
                      >
                        Subject *
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="What's this about?"
                        required
                        className="bg-background/50 border-border/50 focus:border-primary/50 transition-all duration-500"
                      />
                    </div>

                    <div className="space-y-3">
                      <label
                        htmlFor="message"
                        className="font-grotesk text-sm font-medium"
                      >
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell me about your project..."
                        rows={5}
                        required
                        className="bg-background/50 border-border/50 focus:border-primary/50 resize-none transition-all duration-500"
                      />
                    </div>

                    <motion.div 
                      whileHover={{ y: -2, scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Button
                        type="submit"
                        size="lg"
                        className="w-full font-grotesk text-lg py-6 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground shadow-xl hover:shadow-primary/30 transition-all duration-500 rounded-xl group"
                      >
                        <Send className="mr-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                        Send Message
                      </Button>
                    </motion.div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;