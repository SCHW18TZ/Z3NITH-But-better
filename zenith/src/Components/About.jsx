import React from "react";
import { AnimatePresence } from "framer-motion";
const About = () => {
  return (
    <AnimatePresence>
      <section class="about__section" id="about">
        <div className="about__container">
          <div className="about__card">
            <h1>Who are we? </h1>
          </div>
          <br />
          <p>
            Z3NITH has always been a labyrinth of competition - futuristic yet
            historic <br /> spread across the nation empowering students to
            compete, grow and educate themselves since 2011. <br /> And here we
            are at the eleventh iteration of the Futurz Club-hosted tech revel.
            Let there be dawn.
          </p>
        </div>
      </section>
    </AnimatePresence>
  );
};

export default About;
