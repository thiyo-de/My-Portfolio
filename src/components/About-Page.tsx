import { Mail, Linkedin, Github, Twitter, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";

const About = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com/yourusername", label: "GitHub" },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/yourusername",
      label: "LinkedIn",
    },
    {
      icon: Twitter,
      href: "https://twitter.com/yourusername",
      label: "Twitter",
    },
  ];

  const skills = [
    "UI/UX Design",
    "Frontend Development",
    "React/Next.js",
    "TypeScript",
    "Framer Motion",
    "Figma",
    "Responsive Design",
    "User Research",
  ];

  const stats = [
    { number: "3+", label: "Years Experience" },
    { number: "50+", label: "Projects Completed" },
    { number: "25+", label: "Happy Clients" },
  ];

  const handleDownloadResume = () => {
    // Replace with your actual resume file path
    const resumeUrl = "/resume.pdf";
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Your_Name_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-20 sm:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
              About Me
            </span>
            <h2 className="font-clash font-extrabold text-5xl sm:text-6xl md:text-8xl mt-4 mb-8 leading-tight">
              Crafting Digital
              <br />
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Excellence
              </span>
            </h2>
            <p className="font-satoshi text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Transforming ideas into exceptional digital solutions through
              design and development
            </p>
          </motion.div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Text Content */}
            <motion.div
              className="space-y-8"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <motion.p
                variants={staggerItem}
                className="font-satoshi text-lg text-muted-foreground leading-relaxed"
              >
                I'm a{" "}
                <span className="font-semibold text-foreground">
                  designer & developer
                </span>{" "}
                passionate about creating meaningful digital experiences that
                blend aesthetics with functionality. Currently seeking new
                opportunities to bring innovative ideas to life through clean
                code and thoughtful design.
              </motion.p>

              <motion.p
                variants={staggerItem}
                className="font-satoshi text-lg text-muted-foreground leading-relaxed"
              >
                My expertise spans{" "}
                <span className="font-semibold text-foreground">
                  UI/UX design, frontend development, and interactive
                  experiences
                </span>
                . I believe in the power of design thinking and user-centered
                approaches to create products that not only look beautiful but
                also solve real problems.
              </motion.p>

              <motion.p
                variants={staggerItem}
                className="font-satoshi text-lg text-muted-foreground leading-relaxed"
              >
                Based in Tiruchirappalli, Tamil Nadu, I'm ready to collaborate
                with teams and clients globally, transforming visions into
                beautifully crafted digital solutions.
              </motion.p>

              {/* Skills */}
              <motion.div
                className="flex flex-wrap gap-3 pt-4"
                variants={staggerItem}
              >
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-muted rounded-full text-sm font-medium text-foreground border border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                className="flex flex-wrap gap-4 pt-6"
                variants={staggerItem}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    size="lg"
                    className="font-satoshi text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full group"
                    onClick={scrollToContact}
                  >
                    <Mail className="mr-3 h-5 w-5" />
                    Get In Touch
                  </Button>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="font-satoshi text-lg px-8 py-6 rounded-full border-2 border-border hover:border-primary hover:bg-primary/5 transition-all duration-300"
                    onClick={handleDownloadResume}
                  >
                    <Download className="mr-3 h-5 w-5" />
                    Download Resume
                  </Button>
                </motion.div>
              </motion.div>

              {/* Social Links */}
              <motion.div className="flex gap-4 pt-6" variants={staggerItem}>
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-full border-2 border-border hover:border-primary hover:bg-primary/10 transition-all duration-300"
                    variants={staggerItem}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={link.label}
                  >
                    <link.icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Column - Profile Image & Stats */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              {/* Enhanced Profile Image Container */}
              <div className="relative group">
                {/* Animated Gradient Border */}
                <div className="absolute -inset-4 bg-gradient-to-r from-primary via-primary/50 to-primary rounded-3xl blur-xl opacity-30 group-hover:opacity-50 group-hover:scale-105 transition-all duration-500"></div>
                
                {/* Main Image Container */}
                <div className="relative rounded-2xl overflow-hidden border-2 border-border/50 bg-muted/20 backdrop-blur-sm">
                  <div className="aspect-square w-full overflow-hidden">
                    <img
                      src="/profile-image.jpg"
                      alt="Profile Picture"
                      width={600}
                      height={600}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      onError={(e) => {
                        // Fallback if image doesn't exist
                        e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='600' viewBox='0 0 600 600'%3E%3Crect width='600' height='600' fill='%23f3f4f6'/%3E%3Ccircle cx='300' cy='250' r='80' fill='%23d1d5db'/%3E%3Crect x='220' y='350' width='160' height='100' rx='20' fill='%23d1d5db'/%3E%3C/svg%3E";
                      }}
                    />
                  </div>
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-background/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Enhanced Availability Badges */}
                <motion.div
                  className="absolute -bottom-3 -left-3 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground px-5 py-3 rounded-xl font-satoshi font-bold text-sm shadow-lg border border-primary/20"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    Open for Work
                  </div>
                </motion.div>

                <motion.div
                  className="absolute -top-3 -right-3 bg-background/80 backdrop-blur-sm border border-primary/20 px-5 py-3 rounded-xl font-satoshi font-semibold text-sm text-foreground shadow-lg"
                  initial={{ y: -20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 1 }}
                  whileHover={{ scale: 1.05, y: 2 }}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    Available Now
                  </div>
                </motion.div>

                {/* Floating Elements */}
                <motion.div
                  className="absolute -bottom-6 -right-6 w-12 h-12 bg-primary/20 rounded-full blur-md"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>

              {/* Enhanced Stats Grid */}
              <div className="grid grid-cols-3 gap-4 mt-12">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="bg-muted/50 border border-border rounded-2xl p-5 text-center hover:bg-primary/5 hover:border-primary/30 transition-all duration-300 group backdrop-blur-sm"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                  >
                    <div className="font-clash font-bold text-3xl text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                      {stat.number}
                    </div>
                    <div className="font-satoshi text-xs text-muted-foreground uppercase tracking-wider group-hover:text-foreground transition-colors duration-300">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Enhanced Availability Banner */}
          <motion.div
            className="mt-20 p-8 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border border-primary/20 rounded-2xl text-center backdrop-blur-sm relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-0 left-0 w-32 h-32 bg-primary rounded-full -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-primary rounded-full translate-x-1/2 translate-y-1/2"></div>
            </div>
            
            <p className="font-satoshi text-lg text-foreground relative z-10">
              <span className="font-semibold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Currently available for new opportunities
              </span>{" "}
              - Let's discuss how we can work together to bring your ideas to
              life!
            </p>
            
            <motion.div
              className="mt-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
            >
              <Button
                size="lg"
                className="font-satoshi bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8"
                onClick={scrollToContact}
              >
                Start a Project
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;