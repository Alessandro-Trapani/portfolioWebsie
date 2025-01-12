import { useEffect } from "react";

export default function useNavbarAnimation(navbarId = "navbar") {
  useEffect(() => {
    const navbar = document.getElementById(navbarId);

    const handleScroll = () => {
      if (!navbar) return; // Ensure navbar exists
      if (window.scrollY < window.innerHeight) {
        navbar.style.animation = "slideIn 1s forwards";
      } else {
        navbar.style.visibility = "visible";
        navbar.style.animation = "slideOut 1s forwards";
      }
    };

    // Attach scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navbarId]); // Dependency ensures it reacts to navbarId changes
}
