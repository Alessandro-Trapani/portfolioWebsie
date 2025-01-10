import React from "react";
import Navbar from "./components/Navbar";
import ParallaxSec from "./components/ParallaxSec";
import Competences from "./components/Competences";
import Header from "./components/Header";
import useSchreenSize from "./hooks/useSchreenSize";

export default function App() {
  return (
    <>
      <ParallaxSec />
      <Navbar />
      <Competences />
    </>
  );
}
//<Header />
//      <Navbar />
//     <Competences />
