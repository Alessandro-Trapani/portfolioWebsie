import { ParallaxBanner } from "react-scroll-parallax";
import useSchreenSize from "../hooks/useSchreenSize";

export default function Parallax() {
  const schreenSize = useSchreenSize().width;

  let mountainBackSize, mountainMiddleSize, mountainFrontSize;

  if (schreenSize >= 1550) {
    mountainBackSize = "0 120%";
    mountainMiddleSize = "0 110%";
    mountainFrontSize = "0 75%";
  } else if (schreenSize >= 1400) {
    mountainBackSize = "0 120%";
    mountainMiddleSize = "0 80%";
    mountainFrontSize = "0 65%";
  } else if (schreenSize >= 1200) {
    mountainBackSize = "0 90%";
    mountainMiddleSize = "0 60%";
    mountainFrontSize = "0 55%";
  } else if (schreenSize >= 600) {
    mountainBackSize = "0 -150px";
    mountainMiddleSize = "0 -200px";
    mountainFrontSize = "40% 50%";
  } else {
    mountainBackSize = "0 -150px";
    mountainMiddleSize = "0 -250px";
    mountainFrontSize = "40% 0%";
  }

  return (
    <ParallaxBanner
      layers={[
        {
          image: "../assets/ursa.jpg",
          speed: -40,
          style: {
            backgroundSize: "cover", // Ensures the image covers the entire area
            backgroundPosition: " center", // Centers the image within the container
            backgroundRepeat: "no-repeat", // Prevents image repetition
            minHeight: "100%", // Prevents the image from repeating
          },
        },

        {
          image: "../assets/mountainBack.png",
          speed: -60,
          style: {
            backgroundSize: "cover", // Makes sure the image is fully visible without cropping
            backgroundPosition: mountainBackSize, // Centers the image
            backgroundRepeat: "no-repeat", // Prevents the image from repeating
          },
        },
        {
          image: "../assets/mountainMiddle.png",
          speed: -30,
          style: {
            backgroundSize: "cover", // Makes sure the image is fully visible without cropping
            backgroundPosition: mountainMiddleSize, // Centers the image
            backgroundRepeat: "no-repeat", // Prevents the image from repeating
          },
        },
        {
          backgroundPosition: "0 120",
          speed: -40,
          children: (
            <div class="welcomeTextDiv ">
              <h1 id="WelcomeMessage" class="welcomeText"></h1>
            </div>
          ),
        },
        {
          image: "../assets/mountFront.png",
          speed: 0,
          style: {
            backgroundSize: "cover", // Makes sure the image is fully visible without cropping
            backgroundPosition: mountainFrontSize, // Centers the image
            backgroundRepeat: "no-repeat", // Prevents the image from repeating
          },
          id: "navbarTrigger",
        },
      ]}
      className="aspect-[2/1]"
      style={{ height: "100vh", margin: "0 auto" }}
    />
  );
}
window.addEventListener("load", () => {
  setTimeout(() => typeWriter("WelcomeMessage", "Welcome", 200), 1000);

  function typeWriter(id, txt, speed, i = 0) {
    const element = document.getElementById(id);
    if (!element) {
      console.error(`Element with id "${id}" not found.`);
      return;
    }

    if (i < txt.length) {
      element.innerHTML += txt.charAt(i);
      setTimeout(() => typeWriter(id, txt, speed, i + 1), speed);
    }
  }
});
