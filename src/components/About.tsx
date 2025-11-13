import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Code2, Palette } from "lucide-react";

const About = () => {
  const navigate = useNavigate();

  const handleLearnMore = () => {
    // Scroll to top and navigate to about page
    window.scrollTo({ top: 0, behavior: "auto" });
    navigate("/about-Page");
  };

  return (
    <section
      id="about"
      className="py-20 sm:py-32 bg-background relative overflow-hidden"
    >
      {/* Minimal Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -right-10 w-48 h-48 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-10 w-48 h-48 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Increased max-width to match reference code */}
        <div className="max-w-6xl mx-auto">
          {/* Updated Header to match Services section */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="font-grotesk text-xs tracking-[0.3em] text-muted-foreground uppercase">
              About Me
            </span>
            <h2 className="font-clash text-primary font-extrabold text-5xl sm:text-6xl md:text-7xl mt-2">
              My Journey
            </h2>
          </motion.div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {/* Main Description */}

            <motion.div
              className="lg:col-span-2 space-y-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <p className="font-satoshi text-lg text-muted-foreground leading-relaxed">
                I'm a{" "}
                <span className="text-foreground font-medium">
                  designer and MERN stack developer
                </span>{" "}
                passionate about crafting digital products that balance
                creativity, usability, and performance.
              </p>

              <p className="font-satoshi text-lg text-muted-foreground leading-relaxed">
                I love{" "}
                <span className="text-foreground font-medium">
                  solving complex problems and building client solutions
                </span>{" "}
                using the power of AI and modern web technologies — turning
                ideas into intelligent, user-friendly experiences.
              </p>

              <p className="font-satoshi text-lg text-muted-foreground leading-relaxed">
                Beyond my professional work, I enjoy exploring{" "}
                <span className="text-foreground font-medium">
                  fun side projects
                </span>{" "}
                that blend creativity, experimentation, and technology — fueling
                my passion for continuous learning.
              </p>

              {/* Skills Pill */}
              <div className="flex flex-wrap gap-3 pt-4">
                {[
                  "UI/UX Design",
                  "MERN Stack",
                  "React/Next.js",
                  "AI Integration",
                  "Problem Solving",
                  "Creative Projects",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-muted/50 rounded-full font-grotesk text-xs text-muted-foreground border border-border/50"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Visual Elements & CTA */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Icon Cards */}
              <div className="space-y-4">
                <motion.div
                  className="flex items-center gap-4 p-4 bg-muted/30 rounded-2xl border border-border/30"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Palette className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-clash font-semibold text-sm">Design</h3>
                    <p className="font-satoshi text-xs text-muted-foreground">
                      UI/UX & Visual
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-center gap-4 p-4 bg-muted/30 rounded-2xl border border-border/30"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2, delay: 0.1 }}
                >
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Code2 className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-clash font-semibold text-sm">
                      Development
                    </h3>
                    <p className="font-satoshi text-xs text-muted-foreground">
                      Frontend & Backend
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-center gap-4 p-4 bg-muted/30 rounded-2xl border border-border/30"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2, delay: 0.2 }}
                >
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Sparkles className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-clash font-semibold text-sm">
                      Innovation
                    </h3>
                    <p className="font-satoshi text-xs text-muted-foreground">
                      AI & Emerging Tech
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    onClick={handleLearnMore}
                    variant="outline"
                    className="rounded-xl w-full font-grotesk font-medium border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 group"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>

          {/* Bottom Stats - Minimal */}
          <motion.div
            className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-border/30"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="text-center">
              <div className="font-clash font-bold text-2xl text-primary mb-1">
                2+
              </div>
              <div className="font-grotesk text-xs text-muted-foreground uppercase tracking-wide">
                Years
              </div>
            </div>
            <div className="text-center">
              <div className="font-clash font-bold text-2xl text-primary mb-1">
                10+
              </div>
              <div className="font-grotesk text-xs text-muted-foreground uppercase tracking-wide">
                Projects
              </div>
            </div>
            <div className="text-center">
              <div className="font-clash font-bold text-2xl text-primary mb-1">
                100%
              </div>
              <div className="font-grotesk text-xs text-muted-foreground uppercase tracking-wide">
                Satisfaction
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
