import React from "react";
import "./HeroSection.css";

import bgd2 from "../assets/bgd2.jpeg";
import img1 from "../assets/1.png";
import img2 from "../assets/2.png";
import img3copy from "../assets/31.png";
import img3 from "../assets/3.jpeg";
import img5 from "../assets/5.png";
import img6 from "../assets/6.png";
import img7 from "../assets/7.png";
import img4 from "../assets/4.png";

const HeroSection = () => {
  return (
    <section className="homefnt" style={{ backgroundImage: `url(${bgd2})` }}>
      <div className="home">
        <span className="textmask" style={{ "--bg-img": `url(${img1})` }}>T</span>
        <span className="textmask" style={{ "--bg-img": `url(${img2})` }}>E</span>
        <span className="textmask" style={{ "--bg-img": `url(${img3copy})` }}>D</span>
        <span className="textmask" style={{ "--bg-img": `url(${img3})` }}>x</span>
        <span className="textmask" style={{ "--bg-img": `url(${img5})` }}>T</span>
        <span className="textmask" style={{ "--bg-img": `url(${img6})` }}>I</span>
        <span className="textmask" style={{ "--bg-img": `url(${img7})` }}>E</span>
        <span className="textmask" style={{ "--bg-img": `url(${img4})` }}>T</span>
      </div>
    </section>
  );
};

export default HeroSection;
