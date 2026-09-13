import { useEffect, useRef, useState } from "react";

// Reveals an element with a fade/slide-up as it scrolls into view, and
// re-hides/replays it each time it leaves and re-enters — matching
// eng.pdn.ac.lk's actual default (its entrance.js resets and replays on
// scroll-back unless "once" is explicitly set). Safe for
// prefers-reduced-motion: the global CSS override already zeroes
// transition/animation duration and delay, so a replay there just flips
// the end state instantly with no visible motion, repeatedly.
export default function useReveal(options) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0, rootMargin: "0px 0px 100px 0px", ...options }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, visible };
}
