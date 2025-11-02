import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

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
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="font-grotesk text-xs tracking-[0.3em] text-muted-foreground uppercase">
            Tech Stack
          </span>
          <h2 className="font-clash font-extrabold text-5xl sm:text-6xl md:text-7xl mt-2">
            Skills & Tools
          </h2>
        </motion.div>

        {/* First Marquee - Left to Right */}
        <div className="relative mb-8 overflow-hidden">
          <div className="flex gap-4 animate-marquee whitespace-nowrap">
            {[...allSkills, ...allSkills].map((skill, index) => (
              <Badge
                key={`marquee1-${index}`}
                variant="secondary"
                className="font-grotesk text-lg px-8 py-4 bg-card/80 backdrop-blur-sm border-2 border-border hover:border-primary hover:bg-primary/10 transition-all duration-300 cursor-default inline-block"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        {/* Second Marquee - Right to Left */}
        <div className="relative overflow-hidden">
          <div className="flex gap-4 animate-marquee-reverse whitespace-nowrap">
            {[
              ...allSkills.slice().reverse(),
              ...allSkills.slice().reverse(),
            ].map((skill, index) => (
              <Badge
                key={`marquee2-${index}`}
                variant="secondary"
                className="font-grotesk text-lg px-8 py-4 bg-card/80 backdrop-blur-sm border-2 border-border hover:border-primary hover:bg-primary/10 transition-all duration-300 cursor-default inline-block"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
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
      `}</style>
    </section>
  );
};

export default Skills;
