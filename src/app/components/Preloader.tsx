import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface PreloaderProps {
  onComplete: () => void;
}

export function Preloader({ onComplete }: PreloaderProps) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    // Sequence Timeline:
    // 0.0s: Mount
    // 0.5s: "Hey Kevin..." text appears
    // 2.5s: Text fades out (Step 1)
    // 3.0s: Headline builds (Step 2)
    // 4.2s: Reveal (Glass clears) - This triggers onComplete
    
    const timer1 = setTimeout(() => setStep(1), 2500); 
    const timer2 = setTimeout(() => setStep(2), 3000); 
    const timer3 = setTimeout(() => setStep(3), 4200); 

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  useEffect(() => {
    if (step === 3) {
      onComplete();
    }
  }, [step, onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center pointer-events-none"
      // Remove exit prop from root so it doesn't control children automatically
      initial={{ opacity: 1 }}
    >
      {/* 
        Frosted Glass Layer 
        - High blur initially
        - White tint for "hazy" effect
        - We apply backdrop-filter here so it blurs whatever is behind (MouseGradient)
        - EXIT: This layer fades out SLOWLY (1.5s)
      */}
      <motion.div 
        className="absolute inset-0 z-0 bg-white/40 backdrop-blur-[60px]"
        exit={{ opacity: 0, transition: { duration: 1.5, ease: "easeInOut" } }}
      />

      {/* Content Layer (Above Glass) */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-6 text-center">
        
        {/* Step 0/1: Intro Hook */}
        <AnimatePresence mode="wait">
          {step < 2 && (
            <motion.div
              key="intro-hook"
              className="absolute inset-0 flex items-center justify-center p-8"
              initial={{ opacity: 0, y: 15 }}
              animate={{ 
                opacity: step === 0 ? 1 : 0, 
                y: step === 0 ? 0 : -15,
                filter: step === 1 ? "blur(10px)" : "blur(0px)" 
              }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              <h1 
                className="text-3xl md:text-5xl lg:text-6xl tracking-tight leading-tight max-w-4xl font-medium text-gray-900"
                style={{ fontFamily: 'Oswald, sans-serif', color: '#2d2a3d' }}
              >
                Hi <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600">there!</span>, tired of paying for marketing that doesn't work?
              </h1>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Step 2+: Headline Sequence */}
        {step >= 2 && (
           <motion.div 
             className="relative flex flex-col items-center max-w-5xl w-full"
             // EXIT: This entire container disappears INSTANTLY (duration: 0)
             // This swaps perfectly with the Hero text which appears instantly
             exit={{ opacity: 0, transition: { duration: 0 } }}
           >
              {/* Invisible Spacer for Sparkles (matches Hero) */}
              <div className="h-5 mb-8 w-5 opacity-0"></div>

              {/* Headline Container */}
              <div className="flex flex-col items-center relative z-20 mb-8 w-full">
                 {/* "MARKETING THAT" - Slides Down */}
                 <div className="overflow-hidden">
                   <motion.h1
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-4xl md:text-6xl lg:text-7xl text-gray-900 tracking-tight leading-tight text-center"
                    style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700 }}
                   >
                     MARKETING THAT
                   </motion.h1>
                 </div>

                 {/* "ACTUALLY WORKS" - Slides Up */}
                 <div className="overflow-hidden">
                    <motion.h1
                      initial={{ y: 50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                      className="text-4xl md:text-6xl lg:text-7xl tracking-tight leading-tight text-center"
                      style={{ 
                        fontFamily: 'Oswald, sans-serif', 
                        fontWeight: 700,
                      }}
                    >
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600">
                        ACTUALLY WORKS
                      </span>
                    </motion.h1>
                 </div>
              </div>

              {/* Invisible Spacers for Content Alignment (Matches Hero) */}
              <div className="flex flex-col items-center w-full opacity-0 pointer-events-none select-none">
                 <p className="text-xl md:text-2xl mb-8 font-serif italic">(No Unicorn Promises)</p>
                 <p className="text-base md:text-lg max-w-3xl mx-auto mb-8 leading-relaxed">
                   We help local businesses get real leads...
                 </p>
                 <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6 h-[52px]">
                    <div className="w-[200px]"></div>
                    <div className="w-[200px]"></div>
                 </div>
              </div>
           </motion.div>
        )}
      </div>
    </motion.div>
  );
}
