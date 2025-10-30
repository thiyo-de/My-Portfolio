import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Portfolio from "@/components/Portfolio-Page";
import Footer from "@/components/Footer";
import { pageTransition } from "@/lib/animations";

const Work_Page = () => {
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
        <Portfolio />
      </div>
      <Footer />
    </motion.div>
  );
};

export default Work_Page;
