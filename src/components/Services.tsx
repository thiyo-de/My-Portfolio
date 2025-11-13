import { Palette, Code, Cpu, Cloud, Database, ArrowRight } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const services = [
  {
    icon: Palette,
    title: "UI/UX Design & Creative",
    description:
      "Crafting visually stunning and user-centered designs that combine aesthetic appeal with functional excellence. From brand identity to interactive prototypes.",
    number: "01",
  },
  {
    icon: Code,
    title: "Frontend Development",
    description:
      "Building responsive, performant, and interactive user interfaces with modern React ecosystem and cutting-edge technologies.",
    number: "02",
  },
  {
    icon: Database,
    title: "Backend & API Development",
    description:
      "Developing robust server-side solutions, RESTful APIs, and efficient data management systems for scalable applications.",
    number: "03",
  },
  {
    icon: Cpu,
    title: "Full Stack MERN Development",
    description:
      "End-to-end web application development using the modern MERN stack, delivering complete solutions from database to deployment.",
    number: "04",
  },
  {
    icon: Cloud,
    title: "DevOps & Deployment",
    description:
      "Streamlining development workflows and ensuring smooth deployment with modern DevOps practices and cloud platforms.",
    number: "05",
  },
];

const AnimatedServiceCard = ({ service, index, onExploreClick }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    ["17.5deg", "-17.5deg"]
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    ["-17.5deg", "17.5deg"]
  );

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const handleExploreClick = () => {
    window.scrollTo({ top: 0, behavior: "auto" });
    onExploreClick();
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className="relative group cursor-pointer h-full"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-0 bg-gradient-to-br from-background to-muted border-2 border-border rounded-3xl shadow-2xl"
      />

      <div
        style={{
          transform: "translateZ(100px)",
        }}
        className="relative bg-muted/30 backdrop-blur-sm border-2 border-border rounded-3xl p-8 h-full transition-all duration-500 group-hover:border-primary/50 flex flex-col"
      >
        <div className="flex flex-col items-center text-center space-y-6 flex-1">
          {/* Icon container - matching About section style */}
          <motion.div
            className="p-4 bg-primary/10 rounded-xl group-hover:bg-primary/15 transition-colors"
            whileHover={{ scale: 1.1, rotate: 5 }}
          >
            <service.icon className="w-8 h-8 text-primary" />
          </motion.div>

          {/* Floating number - matching About section stats */}
          <div className="absolute -top-8 -right-5 w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-lg">
            <span className="font-grotesk font-bold text-primary-foreground text-sm">
              {service.number}
            </span>
          </div>

          {/* Content */}
          <div className="space-y">
            <h3 className="font-clash font-bold text-2xl group-hover:text-primary transition-colors">
              {service.title}
            </h3>
            <p className="font-satoshi text-start pb-8 text-muted-foreground leading-relaxed">
              {service.description}
            </p>
          </div>
        </div>

        {/* Top border and explore button - always at bottom */}
        <div className="w-full pt-4 border-t border-border/30 group-hover:border-primary/30 transition-colors duration-300 mt-auto">
          <button onClick={handleExploreClick} className="w-full">
            <motion.div
              className="flex items-center justify-center gap-2 text-primary font-satoshi font-medium text-sm cursor-pointer"
              whileHover={{ x: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore <ArrowRight className="w-4 h-4" />
            </motion.div>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const Services = () => {
  const navigate = useNavigate();

  const handleServicesClick = () => {
    window.scrollTo({ top: 0, behavior: "auto" });
    navigate("/services-Page");
  };

  return (
    <section
      id="services"
      className="py-20 sm:py-32 bg-background relative overflow-hidden"
    >
      {/* Background matching About section */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -right-10 w-48 h-48 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-10 w-48 h-48 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <motion.span
            className="font-grotesk text-xs tracking-[0.3em] text-muted-foreground uppercase inline-block mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Services
          </motion.span>
          <motion.h2
            className="font-clash text-primary font-extrabold text-5xl sm:text-6xl md:text-7xl mt-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            What I Do
          </motion.h2>
          <motion.p
            className="font-satoshi text-xl text-muted-foreground mt-6 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Comprehensive digital solutions tailored to bring your ideas to life
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <AnimatedServiceCard
              key={index}
              service={service}
              index={index}
              onExploreClick={handleServicesClick}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
