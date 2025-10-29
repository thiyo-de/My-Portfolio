import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    category: "Design",
    skills: ["Figma", "Adobe XD", "Illustrator", "Photoshop", "Framer", "UI/UX"],
  },
  {
    category: "Frontend",
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "HTML/CSS"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express", "PostgreSQL", "REST API", "GraphQL"],
  },
  {
    category: "Tools & Platforms",
    skills: ["Git", "Electron", "React Native", "Vite", "Webpack"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 sm:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <span className="font-grotesk text-sm tracking-widest text-accent uppercase font-semibold">
            Skills & Tools
          </span>
          <h2 className="font-outfit font-bold text-4xl sm:text-5xl md:text-6xl mt-4">
            Tech Stack
          </h2>
        </div>
        
        <div className="max-w-5xl mx-auto space-y-12">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="font-outfit font-bold text-2xl mb-6 text-foreground/80">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex}
                    variant="outline"
                    className="font-grotesk text-sm px-4 py-2 border-2 hover:border-primary hover:bg-primary/10 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
