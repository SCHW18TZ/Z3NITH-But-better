import React from "react";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";
import zenith from "../assets/zenith.png";
import { useRef } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";
import Button from "./Button";
const Hero = () => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    const animation = animate(count, 100, { duration: 10 });

    return animation.stop;
  }, []);
  return (
    <div className="HeroPage">
      <h1 className="HeroH1">
        <TypeAnimation
          // Same String at the start will only be typed once, initially
          sequence={["We are l", 2000, "We are o", 2000, "We are l", 2000]}
          speed={50} // Custom Speed from 1-99 - Default Speed: 40
          style={{
            fontSize: "1em",
            color: "white",
            margin: "50px",
            fontFamily: "'poppins', sans-serif",
          }}
          wrapper="span" // Animation will be rendered as a <span>
          repeat={Infinity} // Repeat this Animation Sequence infinitely
          cursor={true} // Show a Cursor at the end of the Animation
        />
      </h1>
      <div className="img">
        <img src={zenith} alt="" />
      </div>
      <div className="HeroLinks">
        {/* <a
          target={"_blank"}
          className="HeroButton"
          href="https://www.youtube.com/watch?v=VROaUIA-ACs"
        >
          Watch Trailer
        </a> */}
        <Button />
        {/* <a
          target={"_blank"}
          className="HeroButton"
          href="http://z3nith.tech/IMG/Z3NITH'22%20Brochure.pdf?"
        >
          Brochure
        </a> */}
      </div>

      <div className="events"></div>
    </div>
  );
};

export default Hero;
