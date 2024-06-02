import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div
      className="overflow-x-hidden  text-neutral-300 overflow-hidden
    antialiased selection:bg-cyan-300 selection:text-cyan-900"
    >
      <div className="overflow-x-hidden  absolute top-0 z-[-2] h-fit w-fit bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
        <div className="my-5 mx-20">
          <Navbar />
          <Hero />
          <About />
          <Technologies />
          <Experience />
          <Projects />
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default App;
