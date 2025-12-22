import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight, Sparkles } from "lucide-react";

const ThankYou = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden flex items-center justify-center p-4">
      {/* Enhanced Background with Center Radial Fade */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Texture Layer */}
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,0.08)_25%,rgba(68,68,68,0.08)_50%,transparent_50%,transparent_75%,rgba(68,68,68,0.08)_75%)] bg-[length:7px_7px] opacity-100" />

        {/* Radial Fade Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(12,14,18,0.9)_85%,rgba(12,14,18,1)_100%)] pointer-events-none" />
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

      {/* Animated Glowing Orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-primary/20 rounded-full blur-[100px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-accent/15 rounded-full blur-[100px]"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Content Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 max-w-lg w-full"
      >
        <div className="bg-card/40 backdrop-blur-xl border border-white/5 rounded-3xl p-8 sm:p-12 shadow-2xl overflow-hidden relative group">
          
          {/* Subtle sheen effect */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

          <div className="flex flex-col items-center text-center space-y-8">
            {/* Animated Icon */}
            <div className="relative">
              <motion.div
                initial={{ scale: 0, rotate: -45 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 20,
                  delay: 0.2,
                }}
                className="w-24 h-24 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full flex items-center justify-center border border-primary/20 shadow-[0_0_30px_-5px_hsla(var(--primary)_/_0.3)]"
              >
                <CheckCircle className="w-10 h-10 text-primary drop-shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
              </motion.div>
              
              {/* Floating Sparkles */}
              <motion.div 
                animate={{ y: [-5, 5, -5], scale: [1, 1.2, 1] }} 
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-2 -right-2"
              >
                <Sparkles className="w-6 h-6 text-accent text-primary/60" />
              </motion.div>
            </div>

            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <span className="font-grotesk text-xs sm:text-sm tracking-[0.2em] text-primary uppercase font-medium bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
                  Submission Received
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="font-clash font-bold text-4xl sm:text-5xl bg-gradient-to-br from-white via-white/90 to-white/60 bg-clip-text text-transparent"
              >
                Thank You!
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-muted-foreground font-satoshi text-base sm:text-lg leading-relaxed max-w-xs mx-auto"
              >
                I've received your message and will get back to you shortly. Let's create something amazing together.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="w-full"
            >
              <Link to="/" className="block w-full">
                <Button 
                  size="lg" 
                  className="w-full h-14 font-grotesk text-base bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground shadow-[0_4px_20px_-5px_hsla(var(--primary)_/_0.3)] hover:shadow-[0_8px_30px_-5px_hsla(var(--primary)_/_0.4)] transition-all duration-300 rounded-xl group relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Back to Portfolio
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ThankYou;
