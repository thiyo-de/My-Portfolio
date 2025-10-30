import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";

const experiences = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Innovation Labs",
    description: "Leading development of enterprise applications and mentoring junior developers.",
  },
  {
    year: "2021 - 2023",
    role: "UI/UX Designer & Frontend Developer",
    company: "Creative Digital Agency",
    description: "Designed and developed web applications for diverse clients across industries.",
  },
  {
    year: "2019 - 2021",
    role: "Junior Developer",
    company: "Tech Solutions Pvt Ltd",
    description: "Built responsive websites and contributed to client projects using modern frameworks.",
  },
  {
    year: "2018 - 2019",
    role: "Freelance Designer",
    company: "Self-Employed",
    description: "Worked with startups and small businesses on branding and web design projects.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 sm:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="font-grotesk text-sm tracking-widest text-accent uppercase font-semibold">
            Journey
          </span>
          <h2 className="font-outfit font-bold text-4xl sm:text-5xl md:text-6xl mt-4">
            Experience & Timeline
          </h2>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border" />
            
            <motion.div 
              className="space-y-12"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {experiences.map((exp, index) => (
                <motion.div 
                  key={index}
                  className={`relative flex flex-col md:flex-row gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                  variants={staggerItem}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <motion.div 
                      className="md:pr-8 md:pl-8"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span className="font-grotesk text-sm font-semibold text-accent">
                        {exp.year}
                      </span>
                      <h3 className="font-outfit font-bold text-2xl mt-2 mb-1">
                        {exp.role}
                      </h3>
                      <p className="font-grotesk text-lg text-primary mb-3">
                        {exp.company}
                      </p>
                      <p className="font-inter text-muted-foreground leading-relaxed">
                        {exp.description}
                      </p>
                    </motion.div>
                  </div>
                  
                  {/* Timeline dot */}
                  <motion.div 
                    className="absolute left-8 md:left-1/2 top-0 w-4 h-4 -ml-2 rounded-full bg-primary border-4 border-background shadow-lg"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  />
                  
                  <div className="flex-1" />
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
