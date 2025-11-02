import { motion } from "framer-motion";
import About from "@/components/About-Page";

const About_Page = () => {
  return (
    <motion.div
      className="min-h-screen bg-background"
    >
      <About />
    </motion.div>
  );
};

export default About_Page;
