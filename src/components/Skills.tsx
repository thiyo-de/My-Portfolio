import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const allSkills = [
  "React",
  "Tailwind CSS",
  "Framer Motion",
  "Node.js",
  "Express",
  "MongoDB",
  "PostgreSQL",
  "Figma",
  "Illustrator",
  "Photoshop",
  "Git",
  "Docker",
  "AWS",
  "Vercel",
  "Firebase",
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-20 sm:py-32 bg-background overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="font-grotesk text-xs tracking-[0.3em] text-muted-foreground uppercase">
            Tech Stack
          </span>
          <h2 className="font-clash text-primary font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl mt-2">
            Skills & Tools
          </h2>
        </motion.div>

        {/* First Marquee - Left to Right */}
        <div className="relative mb-6 sm:mb-8 overflow-hidden">
          <div className="flex gap-3 sm:gap-4 animate-marquee whitespace-nowrap">
            {[...allSkills, ...allSkills].map((skill, index) => (
              <Badge
                key={`marquee1-${index}`}
                variant="secondary"
                className="font-grotesk text-sm sm:text-base lg:text-lg px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 bg-card/80 backdrop-blur-sm border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300 cursor-default inline-block"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        {/* Second Marquee - Right to Left */}
        <div className="relative overflow-hidden">
          <div className="flex gap-3 sm:gap-4 animate-marquee-reverse whitespace-nowrap">
            {[
              ...allSkills.slice().reverse(),
              ...allSkills.slice().reverse(),
            ].map((skill, index) => (
              <Badge
                key={`marquee2-${index}`}
                variant="secondary"
                className="font-grotesk text-sm sm:text-base lg:text-lg px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 bg-card/80 backdrop-blur-sm border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300 cursor-default inline-block"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        {/* Explore Skills CTA Button */}
        <motion.div
          className="flex justify-center mt-12 sm:mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link to="/skills-Page">
            <motion.button
              className="font-satoshi px-8 sm:px-12 py-3 sm:py-4 bg-primary text-primary-foreground rounded-full border-2 border-primary hover:bg-primary/90 hover:scale-105 transition-all duration-300 text-base sm:text-lg font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore All Skills
            </motion.button>
          </Link>
        </motion.div>
      </div>

      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        @keyframes marquee-reverse {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        
        .animate-marquee-reverse {
          animation: marquee-reverse 40s linear infinite;
        }
        
        .animate-marquee:hover,
        .animate-marquee-reverse:hover {
          animation-play-state: paused;
        }

        /* Responsive animation speeds */
        @media (max-width: 640px) {
          .animate-marquee {
            animation: marquee 30s linear infinite;
          }
          .animate-marquee-reverse {
            animation: marquee-reverse 30s linear infinite;
          }
        }

        @media (min-width: 641px) and (max-width: 1024px) {
          .animate-marquee {
            animation: marquee 35s linear infinite;
          }
          .animate-marquee-reverse {
            animation: marquee-reverse 35s linear infinite;
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;
