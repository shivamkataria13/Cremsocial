import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { RouterProvider } from "react-router";
import { router } from "./routes";
import { Preloader } from "./components/Preloader";
import { MouseGradient } from "./components/MouseGradient";

export default function App() {
  // Skip the intro on admin screens.
  const [showPreloader, setShowPreloader] = useState(!window.location.pathname.startsWith("/admin"));

  const handlePreloaderComplete = () => {
    // Signal that intro is done (Bloom phase started)
    if (typeof window !== "undefined") {
      sessionStorage.setItem("introShown", "true");
      window.dispatchEvent(new Event("intro-complete"));
    }
    setShowPreloader(false);
  };

  useEffect(() => {
    // Clear session storage on reload to force intro? 
    // Or keep it? Usually intro is once per session.
    // User implies "Intro to landing page transition", likely wants to see it on refresh.
    sessionStorage.removeItem("introShown");
  }, []);

  return (
    <>
      <MouseGradient />
      
      <AnimatePresence mode="wait">
        {showPreloader && (
          <Preloader onComplete={handlePreloaderComplete} />
        )}
      </AnimatePresence>

      <div className="relative z-0">
        <RouterProvider router={router} />
      </div>
    </>
  );
}
