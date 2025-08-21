import React from "react";
import "./HeroSection.css";

// Import your images here
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png";

const HeroSection = () => {
  return (
    <section className="hero">
      {/* Navbar */}
      <div className="hero-navbar">
        <h1 className="logo">
          <span className="ted">TED</span>
          <span className="x">x</span>
          TIET
        </h1>
        <button className="menu-btn">≡</button>
      </div>

      {/* Center Image Collage */}
      <div className="hero-images">
        <img src={img1} alt="Person 1" />
        <img src={img2} alt="Person 2" />
        <img src={img3} alt="Person 3" />
        <img src={img4} alt="Person 4" />
        <img src={img5} alt="Person 5" />
      </div>

      {/* Tagline */}
      <div className="hero-text">
        <h2>TED x TIET</h2>
        <p>The unseen dimension</p>
      </div>
    </section>
  );
};

export default HeroSection;
