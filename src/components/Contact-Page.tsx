import { useState } from "react";
import {
  Mail,
  Linkedin,
  Github,
  Instagram,
  Phone,
  MapPin,
  Copy,
  Check,
  Send,
  Loader2, // Added Loader2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  const [emailCopied, setEmailCopied] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("thiyo80203@gmail.com");
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



  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "thiyo80203@gmail.com",
      action: copyEmail,
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9361339871",
      action: null,
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Trichy, Tamil Nadu",
      action: null,
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/thiyoplus-f/",
      label: "LinkedIn",
    },
    {
      icon: Github,
      href: "https://github.com/thiyo-de",
      label: "GitHub",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/thiyo.de?igsh=MWN2OHI3d2ZjbTAzNQ==",
      label: "Instagram",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 md:py-30 lg:py-36 bg-background relative overflow-hidden"
    >
      {/* Enhanced Background with Center Radial Fade */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Texture Layer */}
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,0.08)_25%,rgba(68,68,68,0.08)_50%,transparent_50%,transparent_75%,rgba(68,68,68,0.08)_75%)] bg-[length:7px_7px] opacity-100" />

        {/* Radial Fade Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(12,14,18,0.9)_85%,rgba(12,14,18,1)_100%)] pointer-events-none" />
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

      {/* Animated Background Orbs - Optimized for performance */}
      <motion.div
        className="absolute top-1/4  left-1/4 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-primary/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ willChange: "transform, opacity" }}
      />

      <motion.div
        className="absolute bottom-1/4 right-1/4 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-primary/15 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
        style={{ willChange: "transform, opacity" }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 sm:w-72 sm:h-72 lg:w-80 lg:h-80 bg-accent/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 6,
        }}
        style={{ willChange: "transform, opacity" }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header Section - Improved spacing */}
          <motion.div
            className="text-center mb-16 sm:mb-20 lg:mb-24"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <span className="font-grotesk text-xs tracking-[0.3em] text-muted-foreground uppercase">
              Get In Touch
            </span>
            <h2 className="font-clash font-extrabold text-3xl sm:text-4xl md:text-6xl lg:text-7xl mt-4 sm:mt-6 mb-4 sm:mb-6 leading-tight">
              Let&apos;s Create
              <br />
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Amazing Things
              </span>
            </h2>
            <p className="font-satoshi text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed px-4">
              Ready to bring your ideas to life? Whether it&apos;s a new project
              or collaboration, I&apos;m here to help you achieve your goals.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start">
            {/* Contact Information */}
            <div className="space-y-6 sm:space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Card className="bg-card/80 backdrop-blur-md border-border/50 shadow-xl sm:shadow-2xl relative overflow-hidden">
                  <motion.div
                    className="absolute -top-20 -right-20 w-32 h-32 sm:w-40 sm:h-40 bg-primary/10 rounded-full blur-2xl"
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    style={{ willChange: "transform, opacity" }}
                  />
                  <CardContent className="p-6 sm:p-8 relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary/70 rounded-lg flex items-center justify-center">
                        <Mail className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <h3 className="font-grotesk text-xl sm:text-2xl font-semibold">
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
                          className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl border border-border/50 bg-background/50 hover:bg-accent/30 transition-all duration-300 cursor-pointer group hover:shadow-lg"
                          onClick={item.action || undefined}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true, margin: "-50px" }}
                          transition={{
                            duration: 0.5,
                            delay: 0.2 + index * 0.1,
                          }}
                          whileHover={{ y: -2 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <motion.div
                            className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-all duration-300 flex-shrink-0"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.2 }}
                          >
                            <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                          </motion.div>
                          <div className="flex-1 min-w-0">
                            <p className="font-grotesk text-sm text-muted-foreground truncate">
                              {item.label}
                            </p>
                            <p className="font-satoshi text-sm sm:text-base font-medium truncate">
                              {item.value}
                            </p>
                          </div>
                          {item.action && (
                            <Button
                              variant="ghost"
                              size="sm"
                              className="opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-primary/20 flex-shrink-0 ml-2"
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

              {/* Social Links - Improved spacing and responsiveness */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-center lg:text-left"
              >
                <p className="font-grotesk text-sm text-muted-foreground mb-4">
                  Follow me on social media
                </p>
                <div className="flex justify-center lg:justify-start gap-3 sm:gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 sm:p-4 rounded-full border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300 hover:shadow-lg"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                      whileHover={{ y: -2, scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <social.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Contact Form - Improved spacing and sticky behavior */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:sticky lg:top-24"
            >
              <Card className="bg-card/80 backdrop-blur-md border-border/50 shadow-xl sm:shadow-2xl overflow-hidden">
                <motion.div
                  className="absolute -bottom-20 -left-20 w-32 h-32 sm:w-40 sm:h-40 bg-primary/10 rounded-full blur-2xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.2, 0.4, 0.2],
                  }}
                  transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2,
                  }}
                  style={{ willChange: "transform, opacity" }}
                />
                <CardContent className="p-6 sm:p-8 relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary/70 rounded-lg flex items-center justify-center">
                      <Send className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h3 className="font-grotesk text-xl sm:text-2xl font-semibold">
                        Send Message
                      </h3>
                      <p className="font-satoshi text-sm text-muted-foreground">
                        I&apos;ll respond within 24 hours
                      </p>
                    </div>
                  </div>

                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      
                      // Start sending process
                      setIsSending(true);

                      const templateParams = {
                        from_name: formData.name,
                        from_email: formData.email,
                        subject: formData.subject,
                        message: formData.message,
                        to_name: "Thiyo",
                      };

                      emailjs
                        .send(
                          "service_6q5e6bh",
                          "template_xcsz92o",
                          templateParams,
                          "1HJAmXEI-BouR9vmO"
                        )
                        .then(
                          () => {
                            toast.success("Message sent successfully!");
                            setFormData({
                                name: "",
                                email: "",
                                subject: "",
                                message: "",
                            });
                            // Small delay before redirect
                            setTimeout(() => {
                                setIsSending(false);
                                navigate("/thank-you");
                            }, 500);
                          },
                          (error) => {
                            console.error("FAILED...", error);
                            setIsSending(false);
                            toast.error("Failed to send message. Please try again.");
                          }
                        );
                    }}
                    className="space-y-4 sm:space-y-6"
                  >
                    <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                      <div className="space-y-2 sm:space-y-3">
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
                          disabled={isSending}
                          className="bg-background/50 border-border/50 focus:border-primary/50 transition-all duration-300 text-sm sm:text-base"
                        />
                      </div>
                      <div className="space-y-2 sm:space-y-3">
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
                          disabled={isSending}
                          className="bg-background/50 border-border/50 focus:border-primary/50 transition-all duration-300 text-sm sm:text-base"
                        />
                      </div>
                    </div>

                    <div className="space-y-2 sm:space-y-3">
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
                        disabled={isSending}
                        className="bg-background/50 border-border/50 focus:border-primary/50 transition-all duration-300 text-sm sm:text-base"
                      />
                    </div>

                    <div className="space-y-2 sm:space-y-3">
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
                        disabled={isSending}
                        className="bg-background/50 border-border/50 focus:border-primary/50 resize-none transition-all duration-300 text-sm sm:text-base min-h-[120px]"
                      />
                    </div>

                    <motion.div
                      whileHover={!isSending ? { y: -2 } : {}}
                      whileTap={!isSending ? { scale: 0.98 } : {}}
                      transition={{ duration: 0.2 }}
                    >
                      <Button
                        type="submit"
                        size="lg"
                        disabled={isSending}
                        className="w-full font-grotesk text-base sm:text-lg py-4 sm:py-6 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground shadow-lg hover:shadow-primary/25 transition-all duration-300 rounded-xl group"
                      >
                        {isSending ? (
                          <>
                            <Loader2 className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform duration-300" />
                            Send Message
                          </>
                        )}
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
