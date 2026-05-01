import { useEffect } from "react";
import { useLocation } from "react-router";

export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // 1. Force the normal browser scroll
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // "instant" bypasses the smooth scroll animation
    });

    // 2. Force the document body and HTML element to scroll
    document.documentElement.scrollTo({ top: 0, behavior: "instant" });
    document.body.scrollTo({ top: 0, behavior: "instant" });

    // 3. If Figma wrapped the app in an overflow box, scroll that too
    const rootElement = document.getElementById("root");
    if (rootElement) {
      rootElement.scrollTo({ top: 0, behavior: "instant" });
    }

    // 4. Force Lenis to reset (if the Figma export initialized it globally)
    if (typeof window !== "undefined" && (window as any).lenis) {
      (window as any).lenis.scrollTo(0, { immediate: true });
    }

  }, [pathname]);

  return null;
}
