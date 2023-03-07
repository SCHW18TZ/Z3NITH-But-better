import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Toe from "./Components/Toe";
import { motion, useScroll, useSpring } from "framer-motion";
import { AnimatePresence } from "framer-motion";
function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="App">
      <AnimatePresence>
        <motion.div className="progress-bar" style={{ scaleX }} />
        <Navbar />
        <Hero />
        {/* <Toe /> */}
        <About />
      </AnimatePresence>
    </div>
  );
}

export default App;
