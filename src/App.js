import React from "react";
import Navbar from "./components/Navbar";
import ParallaxHeader from "./components/ParallaxHeader";
import Competences from "./components/Competences";
import { ParallaxBanner } from "react-scroll-parallax";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
export default function App() {
  return (
    <>
      <ParallaxHeader />

      <Navbar />
      <ParallaxBanner
        layers={[
          {
            speed: 10, // Negative values move slower than the scroll
            class: "bodyImage",
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
                <Contact />
              </>
            ),
          },
        ]}
        className="parallaxBody"
      />
      <Footer />
    </>
  );
}
