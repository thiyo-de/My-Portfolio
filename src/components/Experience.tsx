import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";

const experiences = [
  {
    year: "Feb 2024 – Present",
    role: "Virtual Tour Developer",
    company: "Ruthram 360",
    description:
      "Using MERN stack technologies including React and Node.js to build and integrate interactive features into virtual tours, enhancing both functionality and user experience.",
  },
  // Add more experiences as needed
];

const Experience = () => {
  return (
    <section id="experience" className="py-16 sm:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12 sm:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="font-grotesk text-xs sm:text-sm tracking-[0.3em] text-muted-foreground uppercase">
            Journey
          </span>
          <h2 className="font-clash text-primary font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mt-2 sm:mt-3">
            Experience & Timeline
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line - Hidden on mobile, visible on md and up */}
            <div className="absolute left-6 sm:left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border hidden md:block" />
            
            {/* Mobile timeline line - Only visible on small screens */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border md:hidden" />

            <motion.div
              className="space-y-8 sm:space-y-12"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  className="relative flex flex-col md:flex-row gap-6 sm:gap-8"
                  variants={staggerItem}
                >
                  {/* Content for mobile and tablet - left aligned */}
                  <div className="flex-1 md:hidden">
                    <motion.div
                      className="pl-10 sm:pl-12"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span className="font-satoshi text-xs sm:text-sm font-semibold text-accent">
                        {exp.year}
                      </span>
                      <h3 className="font-grotesk font-bold text-xl sm:text-2xl mt-1 sm:mt-2 mb-1">
                        {exp.role}
                      </h3>
                      <p className="font-grotesk text-lg sm:text-xl text-primary mb-2 sm:mb-3">
                        {exp.company}
                      </p>
                      <p className="font-inter text-sm sm:text-base text-muted-foreground leading-relaxed">
                        {exp.description}
                      </p>
                    </motion.div>
                  </div>

                  {/* Content for desktop - right aligned */}
                  <div className="flex-1 hidden md:block md:text-right">
                    <motion.div
                      className="md:pr-8 lg:pr-12"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span className="font-satoshi text-sm lg:text-base font-semibold text-accent">
                        {exp.year}
                      </span>
                      <h3 className="font-grotesk font-bold text-2xl lg:text-3xl mt-2 mb-1">
                        {exp.role}
                      </h3>
                      <p className="font-grotesk text-lg lg:text-xl text-primary mb-3">
                        {exp.company}
                      </p>
                      <p className="font-inter text-base lg:text-lg text-muted-foreground leading-relaxed">
                        {exp.description}
                      </p>
                    </motion.div>
                  </div>

                  {/* Timeline dot */}
                  <motion.div
                    className="absolute left-6 sm:left-8 md:left-1/2 top-0 w-3 h-3 sm:w-4 sm:h-4 -ml-1.5 sm:-ml-2 rounded-full bg-primary border-2 sm:border-4 border-background shadow-lg"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  />

                  {/* Spacer for desktop layout */}
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;