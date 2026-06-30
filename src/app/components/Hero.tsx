import { ArrowRight, Sparkles } from "lucide-react";
import { motion, useMotionValue, useScroll } from "motion/react";
import { useEffect, useState, useCallback } from "react";
import { useLocation, Link } from "react-router";

export function Hero() {
  const { scrollY } = useScroll();
  const location = useLocation();

  // Use manually-controlled motion values so we can guarantee initial state
  const opacity = useMotionValue(1);
  const y = useMotionValue(0);

  // Recalculate transforms from scroll position
  const updateTransforms = useCallback((scrollVal: number) => {
    // Opacity: 1 when scroll <= 50, fades to 0 at scroll 300
    if (scrollVal <= 50) {
      opacity.set(1);
    } else if (scrollVal >= 300) {
      opacity.set(0);
    } else {
      opacity.set(1 - (scrollVal - 50) / 250);
    }
    // Parallax Y: 0 at scroll 0, 150 at scroll 500
    const yVal = Math.min(scrollVal * 0.3, 150);
    y.set(yVal);
  }, [opacity, y]);

  // On mount and on every navigation to this page, reset to visible
  useEffect(() => {
    // Force scroll to top immediately
    window.scrollTo(0, 0);
    // Ensure motion values are reset to fully visible
    opacity.set(1);
    y.set(0);
  }, [location.pathname, opacity, y]);

  // Subscribe to scroll changes and update transforms
  useEffect(() => {
    const unsubscribe = scrollY.on('change', (latest) => {
      updateTransforms(latest);
    });
    return unsubscribe;
  }, [scrollY, updateTransforms]);

  const [startReveal, setStartReveal] = useState(() => {
    if (typeof window !== 'undefined') {
      return sessionStorage.getItem("introShown") === "true";
    }
    return false;
  });
  
  const [showHeadline, setShowHeadline] = useState(() => {
    if (typeof window !== 'undefined') {
      return sessionStorage.getItem("introShown") === "true";
    }
    return false;
  });

  useEffect(() => {
    // Safety check: ensure state matches storage on mount
    const hasIntroRun = sessionStorage.getItem("introShown") === "true";
    if (hasIntroRun) {
      setStartReveal(true);
      setShowHeadline(true);
    }
    
    if (!hasIntroRun) {
      // Wait for the intro to complete (Bloom phase)
      const handleIntroComplete = () => {
        // Start animating the surrounding content
        setStartReveal(true);
        // Show the headline IMMEDIATELY to swap with Preloader text
        setShowHeadline(true);
      };
      
      window.addEventListener("intro-complete", handleIntroComplete);
      return () => window.removeEventListener("intro-complete", handleIntroComplete);
    }
  }, []);

  // Animation variants for the surrounding content (reveal after preloader)
  const contentVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.1
      }
    }
  };
  
  const starVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1, 
      opacity: 1,
      transition: { type: "spring", stiffness: 200, damping: 10, delay: 0.2 }
    }
  };

  return (
    <section className="relative min-h-[100dvh] flex flex-col items-center justify-center px-6 overflow-hidden pt-16 md:pt-0 pb-20">
      <motion.div 
        className="max-w-5xl w-full relative z-10 flex flex-col items-center mt-[-60px]"
        style={{ y, opacity }}
      >
        <motion.div 
          className="flex items-center justify-center gap-2 mb-4"
          initial="hidden"
          animate={startReveal ? "visible" : "hidden"}
          variants={starVariants}
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <Sparkles className="w-5 h-5 text-purple-600" />
          </motion.div>
        </motion.div>
        
        {/* 
           Static Headline - Structure MUST MATCH Preloader EXACTLY
           Preloader uses a flex-col container with two divs.
        */}
        <div className={`flex flex-col items-center relative z-20 mb-8 w-full transition-opacity duration-0 ${showHeadline ? 'opacity-100' : 'opacity-0'}`}>
           <div className="overflow-hidden">
             <h1 
               className="text-4xl md:text-6xl lg:text-7xl text-gray-900 tracking-tight leading-tight text-center"
               style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700 }}
             >
               MARKETING THAT
             </h1>
           </div>

           <div className="overflow-hidden">
              <h1 
                className="text-4xl md:text-6xl lg:text-7xl tracking-tight leading-tight text-center"
                style={{ 
                  fontFamily: 'Oswald, sans-serif', 
                  fontWeight: 700,
                }}
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600">
                  ACTUALLY WORKS
                </span>
              </h1>
           </div>
        </div>
        
        <motion.div
          initial="hidden"
          animate={startReveal ? "visible" : "hidden"}
          variants={contentVariants}
          className="flex flex-col items-center w-full"
        >
          <motion.p 
            variants={contentVariants}
            className="text-xl md:text-2xl mb-8 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600 text-center"
            style={{ fontFamily: 'Playfair Display, serif', fontStyle: 'italic' }}
          >
            (No Unicorn Promises)
          </motion.p>
          
          <motion.p 
            variants={contentVariants}
            className="text-base md:text-lg text-gray-800 max-w-3xl mx-auto mb-8 leading-relaxed text-center"
          >
            We help local businesses get real leads and creators turn followers into income—using SEO, ads, and shadow operating. No fluff, no mystery, just numbers that make sense.
          </motion.p>

          <motion.div 
            variants={contentVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-6"
          >
            <Link to="/contact">
              <motion.button 
                className="group px-6 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 text-white transition-all duration-300 shadow-lg shadow-indigo-500/30 flex items-center justify-center gap-2 cursor-pointer"
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 20px 40px -12px rgba(99, 102, 241, 0.5)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 500 }} className="tracking-wide text-sm">
                  Skip the BS, Get My Free Audit
                </span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="w-4 h-4" />
                </motion.div>
              </motion.button>
            </Link>

            <motion.a
              href="#services"
              className="px-6 py-3 rounded-full glass-card-matte text-gray-900 font-medium flex items-center justify-center gap-2 hover:scale-105 transition-transform cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 500 }} className="tracking-wide text-sm">
                See What We Can Do for You
              </span>
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-5 h-8 border-2 border-indigo-400 rounded-full flex justify-center pt-1.5"
        >
          <motion.div 
            className="w-1 h-1 bg-indigo-500 rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
