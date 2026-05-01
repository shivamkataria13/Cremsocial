import { Outlet, useLocation } from "react-router";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { useSmoothScroll } from "./hooks/useSmoothScroll";
import { useLayoutEffect, useEffect } from "react";

export function Layout() {
  const { pathname } = useLocation();
  
  // Enable smooth scrolling
  useSmoothScroll();

  useLayoutEffect(() => {
    // Scroll handling for page transitions
    // Use useLayoutEffect to ensure scroll happens before paint
    if (typeof window !== 'undefined') {
       window.scrollTo(0, 0);
    }
  }, [pathname]);

  // Secondary scroll reset after Lenis has initialized/settled
  useEffect(() => {
    const timer = requestAnimationFrame(() => {
      window.scrollTo(0, 0);
    });
    return () => cancelAnimationFrame(timer);
  }, [pathname]);

  return (
    <div className="min-h-screen w-full relative overflow-x-hidden">
      <Header />
      
      {/* Main Content Area */}
      <main className="relative pt-24 min-h-screen">
        <div className="w-full h-full">
          <Outlet />
        </div>
      </main>
      
      <Footer />
    </div>
  );
}