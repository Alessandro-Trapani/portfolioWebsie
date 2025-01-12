import React from "react";
import Navbar from "./components/Navbar";
import ParallaxHeader from "./components/ParallaxHeader";
import Competences from "./components/Competences";
import { ParallaxBanner } from "react-scroll-parallax";
import Projects from "./components/Projects";
export default function App() {
  return (
    <>
      <ParallaxHeader />

      <Navbar />
      <ParallaxBanner
        layers={[
          {
            image: "../assets/background.png", // Path to your background image
            speed: 10, // Negative values move slower than the scroll
          },
          {
            speed: -30, // Text layer doesn't move
            style: {
              backgroundSize: "cover", // Ensures the image covers the entire area
              backgroundPosition: "center top", // Centers the image within the container
              backgroundRepeat: "no-repeat", // Prevents image repetition
            },
            children: (
              <>
                <Competences />
                <Projects />
              </>
            ),
          },
        ]}
        className="competencesSection"
      />
    </>
  );
}
