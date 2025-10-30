import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import About from "@/components/About-Page";
import Footer from "@/components/Footer";
import { pageTransition } from "@/lib/animations";

const About_Page = () => {
  return (
    <motion.div 
      className="min-h-screen bg-background"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
    >
      <Navigation />
      <div className="pt-20">
        <About />
      </div>
      <Footer />
    </motion.div>
  );
};

export default About_Page;
