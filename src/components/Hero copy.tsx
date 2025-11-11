import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#0e0e0e] text-white overflow-hidden px-4 sm:px-6">
      {/* Background Glow */}
      <motion.div
        className="absolute inset-0 flex justify-center items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] lg:w-[600px] lg:h-[600px] bg-green-500/20 blur-[120px] sm:blur-[180px] rounded-full" />
      </motion.div>

      {/* Glassmorphism Container */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 w-full max-w-7xl mx-auto flex flex-col justify-between min-h-[85vh] py-8"
      >
        {/* Top Section */}
        <div className="text-center sm:text-left relative z-20 mb-8 sm:mb-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-4"
          >
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <p className="text-sm text-gray-300">
              Hey👋, I'm a Full Stack Developer
            </p>
          </motion.div>
          
          <h1 className="font-bold leading-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tight bg-gradient-to-r from-green-400 to-green-300 bg-clip-text text-transparent">
            BRUNO
            <br />
            SIMON
          </h1>
        </div>

        {/* Centered Image Container */}
        <div className="flex justify-center items-center flex-1 my-4 sm:my-8">
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-emerald-400/20 rounded-[2rem] blur-xl -z-10" />
            <motion.img
              src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?q=80&w=800&auto=format&fit=crop"
              alt="Bruno Simon - Full Stack Developer"
              className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-[2rem] object-cover border-2 border-white/10 shadow-2xl hover:scale-105 transition-transform duration-300"
              whileHover={{ scale: 1.02 }}
            />
          </motion.div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 lg:gap-8 relative z-20">
          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row lg:flex-col gap-4 sm:gap-6 lg:gap-2">
            <motion.a
              href="mailto:info@brunosimon.com"
              className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group"
              whileHover={{ x: 5 }}
            >
              <Mail className="w-4 h-4 text-green-400" />
              <span>info@brunosimon.com</span>
            </motion.a>
            <motion.a
              href="tel:+390346385302"
              className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group"
              whileHover={{ x: 5 }}
            >
              <Phone className="w-4 h-4 text-green-400" />
              <span>+39 03 463 853 02</span>
            </motion.a>
          </div>

          {/* About + Socials */}
          <div className="flex-1 max-w-2xl">
            <motion.p 
              className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6 text-center lg:text-right"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              I build fast, scalable, and user-friendly web applications using
              modern JavaScript technologies. My main tools of choice are React
              on the frontend and Node.js on the backend.
            </motion.p>
            
            {/* CTA Button */}
            <motion.div 
              className="flex justify-center lg:justify-end mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <Button className="bg-green-500 hover:bg-green-600 text-white px-8 py-6 rounded-full font-semibold group">
                View My Work
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              className="flex justify-center lg:justify-end gap-6 flex-wrap"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              {['Twitter', 'LinkedIn', 'GitHub', 'CodePen'].map((platform) => (
                <motion.a
                  key={platform}
                  href="#"
                  className="text-gray-400 hover:text-green-400 transition-colors text-sm font-medium py-2"
                  whileHover={{ y: -2 }}
                >
                  {platform}
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-green-400 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;