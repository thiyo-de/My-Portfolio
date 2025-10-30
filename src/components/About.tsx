import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";

const About = () => {
  return (
    <section id="about" className="py-20 sm:py-32 bg-gradient-to-b from-background via-muted/10 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="font-grotesk text-xs tracking-[0.3em] text-muted-foreground uppercase">
              About Me
            </span>
            <h2 className="font-clash font-extrabold text-5xl sm:text-6xl md:text-7xl mt-2">
              Crafting Digital Excellence
            </h2>
          </motion.div>
          
          <motion.div 
            className="space-y-8 font-satoshi text-xl sm:text-2xl leading-relaxed text-muted-foreground"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.p variants={staggerItem}>
              I'm a <span className="text-foreground font-semibold">designer-developer-entrepreneur</span> passionate about creating meaningful digital experiences 
              that blend aesthetics with functionality. With expertise spanning UI/UX design, frontend development, 
              and interactive experiences, I bring ideas to life through clean code and thoughtful design.
            </motion.p>
            
            <motion.p variants={staggerItem}>
              My entrepreneurial mindset drives me to not just build products, but to <span className="text-foreground font-semibold">solve real problems 
              and create value</span>. I believe in the power of cross-platform development and the importance of 
              design thinking in every aspect of software creation.
            </motion.p>
            
            <motion.p variants={staggerItem}>
              Based in Tiruchirappalli, Tamil Nadu, I work with clients globally, transforming their 
              visions into beautifully crafted digital solutions that stand out in today's competitive landscape.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
