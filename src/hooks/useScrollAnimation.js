import { useEffect } from "react";
export default function useScrollAnimation(
  className = "animated",
  visibleClass = "visible"
) {
  useEffect(() => {
    const checkVisibility = () => {
      const elements = document.querySelectorAll(`.${className}`);

      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          element.classList.add(visibleClass);
        }
      });
    };

    window.addEventListener("scroll", checkVisibility);
    checkVisibility(); // Check visibility immediately on load

    return () => {
      window.removeEventListener("scroll", checkVisibility);
    };
  }, [className, visibleClass]);
}
