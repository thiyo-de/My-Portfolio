import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { 
  Code, 
  Palette, 
  Database, 
  Cloud, 
  Smartphone, 
  Zap,
  Cpu,
  Brain,
  TrendingUp
} from "lucide-react";

const skillCategories = [
  {
    icon: Palette,
    title: "Design & Creative",
    color: "from-orange-500 to-red-500",
    description: "Crafting visually stunning and user-centered designs",
    skills: ["Photoshop", "Illustrator", "InDesign", "Canva", "Figma", "UI/UX Design", "Brand Identity"]
  },
  {
    icon: Code,
    title: "Frontend Development",
    color: "from-blue-500 to-cyan-500",
    description: "Building responsive and interactive user interfaces",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "HTML5", "CSS3"]
  },
  {
    icon: Database,
    title: "Backend & Databases",
    color: "from-green-500 to-emerald-500",
    description: "Developing robust server-side solutions and data management",
    skills: ["Node.js", "Express", "MongoDB", "PostgreSQL", "REST APIs", "Mongoose", "Prisma"]
  },
  {
    icon: Cpu,
    title: "Full Stack MERN",
    color: "from-purple-500 to-pink-500",
    description: "End-to-end development with modern JavaScript stack",
    skills: ["MongoDB", "Express.js", "React", "Node.js", "Full Stack", "JavaScript", "API Integration"]
  },
  {
    icon: Cloud,
    title: "DevOps & Deployment",
    color: "from-indigo-500 to-purple-500",
    description: "Streamlining development and deployment processes",
    skills: ["Git", "Vercel", "Netlify", "Heroku", "CI/CD", "Docker", "AWS"]
  },
  {
    icon: Brain,
    title: "Continuous Learning",
    color: "from-yellow-500 to-amber-500",
    description: "Always evolving with emerging technologies and AI",
    skills: ["AI Integration", "Quick Learning", "Adaptability", "Problem Solving", "Innovation", "Research", "Growth Mindset"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 sm:py-32 bg-background relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
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
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
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
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="font-grotesk text-xs tracking-[0.3em] text-muted-foreground uppercase">
            Expertise & Capabilities
          </span>
          <h2 className="font-clash font-extrabold text-4xl sm:text-5xl md:text-6xl mt-4 mb-6">
            Design & Development
            <span className="block bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>
          <p className="font-satoshi text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Bridging creative design with technical execution. I specialize in creating seamless digital experiences 
            while continuously evolving with emerging technologies and AI-driven solutions.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="group relative bg-card/80 backdrop-blur-md border border-border/50 rounded-2xl p-8 hover:border-primary/30 hover:bg-card transition-all duration-500"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              {/* Category Header */}
              <div className="flex items-start gap-4 mb-4">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color} shadow-lg flex-shrink-0`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-clash font-bold text-2xl group-hover:text-primary transition-colors mb-2">
                    {category.title}
                  </h3>
                  <p className="font-satoshi text-sm text-muted-foreground leading-relaxed">
                    {category.description}
                  </p>
                </div>
              </div>

              {/* Skills List */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                  >
                    <Badge 
                      variant="secondary"
                      className="font-grotesk text-sm px-4 py-2 bg-background/50 border-2 border-border hover:border-primary hover:bg-primary/10 transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Growth Mindset Section */}
        <motion.div 
          className="bg-card/50 backdrop-blur-md border border-border/50 rounded-2xl p-8 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-primary to-primary/70 shadow-lg">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-clash font-bold text-3xl">Continuous Growth & AI Adaptation</h3>
              </div>
              <p className="font-satoshi text-lg text-muted-foreground leading-relaxed mb-4">
                I thrive on learning and rapidly adapting to new technologies. With AI becoming integral to modern development, 
                I actively incorporate AI tools and methodologies to enhance productivity, solve complex problems, and drive innovation.
              </p>
              <div className="flex flex-wrap gap-3">
                <Badge className="bg-primary/20 text-primary border-primary/30 px-4 py-2">
                  Quick Learner
                </Badge>
                <Badge className="bg-primary/20 text-primary border-primary/30 px-4 py-2">
                  AI-Enhanced Development
                </Badge>
                <Badge className="bg-primary/20 text-primary border-primary/30 px-4 py-2">
                  Adaptable & Flexible
                </Badge>
                <Badge className="bg-primary/20 text-primary border-primary/30 px-4 py-2">
                  Innovation-Driven
                </Badge>
              </div>
            </div>
            <div className="flex-1 grid grid-cols-2 gap-4">
              <div className="text-center p-6 bg-background/50 rounded-xl border border-border/50">
                <div className="text-3xl font-clash font-bold text-primary mb-2">24+</div>
                <div className="font-satoshi text-muted-foreground">Technologies Mastered</div>
              </div>
              <div className="text-center p-6 bg-background/50 rounded-xl border border-border/50">
                <div className="text-3xl font-clash font-bold text-primary mb-2">AI</div>
                <div className="font-satoshi text-muted-foreground">Enhanced Workflow</div>
              </div>
              <div className="text-center p-6 bg-background/50 rounded-xl border border-border/50">
                <div className="text-3xl font-clash font-bold text-primary mb-2">MERN</div>
                <div className="font-satoshi text-muted-foreground">Full Stack Focus</div>
              </div>
              <div className="text-center p-6 bg-background/50 rounded-xl border border-border/50">
                <div className="text-3xl font-clash font-bold text-primary mb-2">Growth</div>
                <div className="font-satoshi text-muted-foreground">Mindset First</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Animated Marquee Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <div className="text-center mb-8">
            <h3 className="font-clash font-bold text-2xl mb-4">Technologies I Excel With</h3>
            <p className="font-satoshi text-muted-foreground">Continuously expanding my toolkit with emerging technologies</p>
          </div>

          {/* Marquee */}
          <div className="relative overflow-hidden">
            <motion.div 
              className="flex gap-4"
              animate={{ x: [0, -1000] }}
              transition={{
                duration: 40,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              {[...skillCategories.flatMap(cat => cat.skills), ...skillCategories.flatMap(cat => cat.skills)].map((skill, index) => (
                <div
                  key={`marquee-${index}`}
                  className="flex-shrink-0"
                >
                  <Badge 
                    variant="secondary"
                    className="font-grotesk text-base px-6 py-3 bg-card/80 backdrop-blur-sm border-2 border-border hover:border-primary hover:bg-primary/10 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </Badge>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 1.0 }}
        >
          <p className="font-satoshi text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Ready to bring both creative design and technical expertise to your next project? 
            Let's create something exceptional together.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a 
              href="/contact-Page"
              className="inline-flex items-center gap-2 font-grotesk text-lg px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl shadow-lg hover:shadow-primary/30 transition-all duration-300"
            >
              Start a Project Together
              <Zap className="w-5 h-5" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;