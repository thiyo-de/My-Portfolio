import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone, Github, Linkedin, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import thiyo from "../assets/thiyo.avif"

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#0e0e0e] text-white overflow-hidden px-4 sm:px-6">
      {/* Enhanced Background Textures */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Texture Layer */}
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,0.08)_25%,rgba(68,68,68,0.08)_50%,transparent_50%,transparent_75%,rgba(68,68,68,0.08)_75%)] bg-[length:7px_7px] opacity-100" />

        {/* Radial Fade Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(12,14,18,0.9)_85%,rgba(12,14,18,1)_100%)] pointer-events-none" />
      </div>

      {/* Grid Texture Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

      {/* Background Glow */}
      <motion.div
        className="absolute inset-0 flex justify-center items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] lg:w-[600px] lg:h-[600px] bg-green-500/20 blur-[120px] sm:blur-[180px] rounded-full" />
      </motion.div>

      {/* Image Container with Bottom Entrance Animation */}
      <motion.div
        className="absolute inset-0 z-5 flex items-end justify-center overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        {/* Bottom Fade Gradient Overlay */}
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-[#0e0e0e] to-transparent z-10" />
        
        {/* Image Animating from Bottom */}
        <motion.img
          src={thiyo}
          alt="Bruno Simon - Full Stack Developer"
          className="h-[75vh] w-auto object-contain object-bottom"
          style={{ 
            mixBlendMode: 'normal',
            filter: 'none'
          }}
          initial={{ 
            y: "100%",
            opacity: 0,
            scale: 1.1
          }}
          animate={{ 
            y: 0,
            opacity: 1,
            scale: 1
          }}
          transition={{ 
            duration: 1.5,
            ease: "easeOut",
            delay: 0.7
          }}
          whileHover={{
            scale: 1.02,
            transition: { duration: 0.8 }
          }}
        />
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
            BRUNO SIMON
          </h1>
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

            {/* Social Links with Icons */}
            <motion.div 
              className="flex justify-center lg:justify-end gap-6 flex-wrap"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              {[
                { platform: 'GitHub', icon: Github, href: '#' },
                { platform: 'LinkedIn', icon: Linkedin, href: '#' },
                { platform: 'Instagram', icon: Instagram, href: '#' }
              ].map(({ platform, icon: Icon, href }) => (
                <motion.a
                  key={platform}
                  href={href}
                  className="flex items-center gap-2 text-gray-400 hover:text-green-400 transition-colors text-sm font-medium py-2"
                  whileHover={{ y: -2 }}
                >
                  <Icon className="w-4 h-4" />
                  <span>{platform}</span>
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
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