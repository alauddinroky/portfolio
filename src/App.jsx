import React from "react";
import "./index.css";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import About from "./components/AboutMe/About";
import Experiences from "./components/Experiences/Experiences";
import Projects from "./components/Projects/Projects";
import Contact from "./components/ContactMe/Contact";
function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <About />
      <Experiences />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
