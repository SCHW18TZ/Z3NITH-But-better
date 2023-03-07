import React from "react";
import zenith from "../assets/zenith.png";

const Navbar = () => {
  const handleClick = () => {
    const hamburger = document.querySelector("#mobile-menu");
    const tabs = document.querySelector(".navbar__menu");
    //display hamburger menue
    const mobileMenu = () => {
      hamburger.classList.toggle("is-active");
      tabs.classList.toggle("active");
    };

    hamburger.addEventListener("click", mobileMenu);
  };

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <a href="#home" id="navbar__logo">
          Z3NITH
        </a>
        <div className="navbar__toggle" onClick={handleClick} id="mobile-menu">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <ul className="navbar__menu">
          <li className="navbar__item">
            <a href="#home" className="navbar__links" id="home-page">
              Home
            </a>
          </li>
          <li className="navbar__item">
            <a href="#about" className="navbar__links" id="about-page">
              About
            </a>
          </li>
          <li className="navbar__item">
            <a href="#skills" className="navbar__links" id="stack-page">
              Skills
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
