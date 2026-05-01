import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link, useLocation } from "react-router";
import { Logo } from "./Logo";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [startReveal, setStartReveal] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const isScrolledRef = useRef(false);
  const location = useLocation();

  useEffect(() => {
    let rafId = 0;

    const handleScroll = () => {
      if (rafId) return;

      rafId = window.requestAnimationFrame(() => {
        const nextScrolled = window.scrollY > 50;
        if (nextScrolled !== isScrolledRef.current) {
          isScrolledRef.current = nextScrolled;
          setScrolled(nextScrolled);
        }
        rafId = 0;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      if (rafId) {
        window.cancelAnimationFrame(rafId);
      }
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Check if intro has already run
    const hasIntroRun = sessionStorage.getItem("introShown") === "true";
    
    if (hasIntroRun) {
      setStartReveal(true);
    } else {
      const handleIntroComplete = () => {
        setStartReveal(true);
      };
      
      window.addEventListener("intro-complete", handleIntroComplete);
      return () => window.removeEventListener("intro-complete", handleIntroComplete);
    }
  }, []);

  const menuItems = [
    { name: 'Services', type: 'dropdown' },
    { name: 'Shadow Ops', path: '/shadow-operating' },
    { name: 'About', path: '/about' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  const serviceOptions = [
    { name: 'SEO', path: '/seo' },
    { name: 'Ads', path: '/ads' },
    { name: 'Social Media', path: '/social-media' },
    { name: 'Google Business Profile', path: '/google-business' },
  ];

  // Variants for the whole header container
  const headerVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        duration: 0.8, 
        ease: "easeOut",
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };
  
  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 px-6 py-6"
      initial="hidden"
      animate={startReveal ? "visible" : "hidden"}
      variants={headerVariants}
    >
      <nav className="max-w-7xl mx-auto">
        {/* Enhanced Matte Glass Container */}
        {/* Added: bg-white/70, backdrop-blur-md, and border-white/20 for the glass effect */}
        <div className={`rounded-2xl px-6 py-2 transition-shadow duration-300 bg-white/10 backdrop-blur-md border border-white/20 ${scrolled ? 'shadow-xl' : 'shadow-md'}`}>

          <div className="flex items-center justify-between">
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Link to="/">
                <Logo />
              </Link>
            </motion.div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-6">
              {menuItems.map((item) => (
                <motion.div
                  key={item.name}
                  variants={itemVariants}
                  className="relative"
                  onMouseEnter={() => item.type === 'dropdown' && setServicesDropdown(true)}
                  onMouseLeave={() => item.type === 'dropdown' && setServicesDropdown(false)}
                >
                  {item.type === 'dropdown' ? (
                    <>
                      <button
                        className={`text-gray-800 hover:text-indigo-600 transition-colors relative group font-medium flex items-center gap-2 ${location.pathname.startsWith('/seo') || location.pathname.startsWith('/ads') || location.pathname.startsWith('/social-media') || location.pathname.startsWith('/google-business') ? 'text-indigo-600' : ''}`}
                        style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 500 }}
                      >
                        {item.name}
                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${servicesDropdown ? 'rotate-180' : ''}`} />
                        <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-indigo-500 to-violet-500 transition-all duration-300 ${location.pathname.startsWith('/seo') || location.pathname.startsWith('/ads') || location.pathname.startsWith('/social-media') || location.pathname.startsWith('/google-business') ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                      </button>
                      <AnimatePresence>
                        {servicesDropdown && (
                          <motion.div
                            className="absolute top-full left-0 mt-2 w-48 bg-white/95 backdrop-blur-md rounded-xl border border-gray-200/50 shadow-xl z-50"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                          >
                            <div className="py-2">
                              {serviceOptions.map((option) => (
                                <Link
                                  key={option.path}
                                  to={option.path}
                                  className={`block px-4 py-2.5 text-gray-800 hover:text-indigo-600 hover:bg-indigo-50/50 transition-colors font-medium ${location.pathname === option.path ? 'text-indigo-600 bg-indigo-50/30' : ''}`}
                                  style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 500 }}
                                  onClick={() => setServicesDropdown(false)}
                                >
                                  {option.name}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      to={item.path}
                      className={`text-gray-800 hover:text-indigo-600 transition-colors relative group font-medium ${location.pathname === item.path ? 'text-indigo-600' : ''}`}
                      style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 500 }}
                    >
                      {item.name}
                      <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-indigo-500 to-violet-500 transition-all duration-300 ${location.pathname === item.path ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                    </Link>
                  )}
                </motion.div>
              ))}
              <motion.div
                variants={itemVariants}
              >
                <a href="mailto:shiv@cremsocial.com?subject=Free%20Audit%20Request">
                  <motion.button 
                    className="px-6 py-2.5 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 text-white hover:from-indigo-500 hover:to-violet-500 transition-all duration-300 shadow-lg shadow-indigo-500/30"
                    whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(99, 102, 241, 0.4)" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 500 }} className="tracking-wide text-sm">
                      GET AUDIT
                    </span>
                  </motion.button>
                </a>
              </motion.div>
            </div>
            
            {/* Mobile Menu Button */}
            <motion.button
              variants={itemVariants}
              className="md:hidden text-gray-900"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
          
          {/* Mobile Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div 
                className="md:hidden mt-6 pt-6 border-t border-gray-200/50"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex flex-col gap-4">
                  {menuItems.map((item) => (
                    item.type === 'dropdown' ? (
                      <div key={item.name}>
                        <button
                          className={`text-gray-800 hover:text-indigo-600 transition-colors font-medium w-full text-left flex items-center gap-2 ${location.pathname.startsWith('/seo') || location.pathname.startsWith('/ads') || location.pathname.startsWith('/social-media') || location.pathname.startsWith('/google-business') ? 'text-indigo-600' : ''}`}
                          style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 500 }}
                          onClick={() => setServicesDropdown(!servicesDropdown)}
                        >
                          {item.name}
                          <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${servicesDropdown ? 'rotate-180' : ''}`} />
                        </button>
                        <AnimatePresence>
                          {servicesDropdown && (
                            <motion.div
                              className="mt-2 pl-4 flex flex-col gap-2"
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                            >
                              {serviceOptions.map((option) => (
                                <Link
                                  key={option.path}
                                  to={option.path}
                                  className={`text-gray-800 hover:text-indigo-600 transition-colors font-medium ${location.pathname === option.path ? 'text-indigo-600' : ''}`}
                                  style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 500 }}
                                  onClick={() => {
                                    setIsMenuOpen(false);
                                    setServicesDropdown(false);
                                  }}
                                >
                                  {option.name}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        key={item.name}
                        to={item.path}
                        className={`text-gray-800 hover:text-indigo-600 transition-colors font-medium ${location.pathname === item.path ? 'text-indigo-600' : ''}`}
                        style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 500 }}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )
                  ))}
                  <a href="mailto:shiv@cremsocial.com?subject=Free%20Audit%20Request" onClick={() => setIsMenuOpen(false)}>
                    <button className="px-6 py-2.5 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 text-white w-full">
                      <span style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 500 }} className="tracking-wide text-sm">
                        GET AUDIT
                      </span>
                    </button>
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </motion.header>
  );
}
