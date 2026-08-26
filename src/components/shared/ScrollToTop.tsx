import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      // Force scroll to top instantly
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant"
      });
      // Fallback timeout for some browsers/React rendering cycles
      setTimeout(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      }, 0);
    }
  }, [pathname, hash]);

  return null;
}
