import { ParallaxBanner } from "react-scroll-parallax";
import useSchreenSize from "../hooks/useSchreenSize";
import typeWriter from "../utils/typeWriter";

export default function ParallaxHeader() {
  const schreenSize = useSchreenSize().width;

  window.onload = () => {
    typeWriter("WelcomeMessage", "Welcome", 200);
  };
  let multiplier = 1,
    bottomMultiplier = 1;

  function determinPosition(basePosition, sizeMultiplier) {
    if (typeof basePosition === "number") {
      // If the input is a number, multiply directly and convert to string
      return String(basePosition * sizeMultiplier) + "%";
    }
  }
  // Get the screen size

  if (schreenSize < 1000) {
    multiplier = 1.15; // Adjust multiplier for smaller screens
    bottomMultiplier = 0.95;
  }

  return (
    <ParallaxBanner
      layers={[
        {
          image: "public/assets/starry-sky.jpg",
          speed: -65,
          style: {
            backgroundColor: "#011C27",
            backgroundSize: "cover", // Ensures the image covers the entire area
            backgroundPosition: "top", // Centers the image within the container
            backgroundRepeat: "no-repeat", // Prevents image repetition
            // Prevents the image from repeating
          },
        },
        {
          image: "../assets/mountain0.svg",
          speed: -60,
          style: {
            backgroundSize: "contain", // Makes sure the image is fully visible without cropping
            backgroundPosition:
              "top " + determinPosition(52, multiplier) + " left", // Centers the image
            backgroundRepeat: "no-repeat", // Prevents the image from repeating
          },
        },
        {
          image: "../assets/mountain1.svg",
          speed: -50,
          style: {
            backgroundSize: "contain", // Makes sure the image is fully visible without cropping
            backgroundPosition:
              "top " + determinPosition(58, multiplier) + " left", // Centers the image
            backgroundRepeat: "no-repeat", // Prevents the image from repeating
          },
        },
        {
          image: "../assets/mountain2.svg",
          speed: -40,
          style: {
            backgroundSize: "contain", // Makes sure the image is fully visible without cropping
            backgroundPosition:
              "top " + determinPosition(65, multiplier) + " left", // Centers the image
            backgroundRepeat: "no-repeat", // Prevents the image from repeating
          },
        },
        {
          image: "../assets/mountain3.svg",
          speed: -30,
          style: {
            backgroundSize: "contain", // Makes sure the image is fully visible without cropping
            backgroundPosition:
              "top " + determinPosition(70, multiplier) + " left", // Centers the image
            backgroundRepeat: "no-repeat", // Prevents the image from repeating
          },
        },
        {
          image: "../assets/mountain4.svg",
          speed: -20,
          style: {
            backgroundSize: "contain", // Makes sure the image is fully visible without cropping
            backgroundPosition:
              "top " + determinPosition(80, multiplier) + " left", // Centers the image
            backgroundRepeat: "no-repeat", // Prevents the image from repeating
          },
        },
        {
          backgroundPosition: "0 120",
          speed: -65,
          children: (
            <div class="welcomeTextDiv ">
              <h1 id="WelcomeMessage" class="welcomeText"></h1>
            </div>
          ),
        },
        {
          image: "../assets/mountain5.svg",
          speed: 0,
          style: {
            backgroundSize: "contain", // Makes sure the image is fully visible without cropping
            backgroundPosition:
              "top " + determinPosition(110, bottomMultiplier) + " left", // Centers the image
            backgroundRepeat: "no-repeat", // Prevents the image from repeating
          },
        },
      ]}
      className="aspect-[2/1] parallaxHeader"
      style={{ height: "100vh", margin: "0 auto" }}
    />
  );
}
