import React from "react";
import ccate from "../assets/ccate.jpg";
import science from "../assets/science.png";
import html from "../assets/html.png";
import social from "../assets/social.png";
import java from "../assets/java.png";
import tailwind from "../assets/tailwind.png";
import scss from "../assets/scss.png";
import nodejs from "../assets/nodejs.png";
import bootstrap from "../assets/bootstrap.png";
import php from "../assets/php.png";
import cate1 from "../assets/cate1.jpg";
import cate2 from "../assets/cate2.jpg";

function Aboutme2() {
  return (
    <section className="hero-container">
      <div className="hero-content column">
        <h1 className="aboutMe ">About Me</h1>
        <p className="word">
          I am a detail-oriented software developer with a main focus on
          front-end development. I am always excited to learn new technologies
          as I love exploring new concepts, tools, and frameworks in order to
          use them personally and professionally.
        </p>

        <div className="column">
          <div className="tech-icons-row">
            <div className="tech-icon">
              <img src={science} alt="" />
            </div>
            <div className="tech-icon">
              <img src={html} alt="" />
            </div>
            <div className="tech-icon">
              <img src={social} alt="" />
            </div>
            <div className="tech-icon">
              <img src={java} alt="" />
            </div>
          </div>
          <div className="tech-icons-row">
            <div className="tech-icon">
              <img src={tailwind} alt="" />
            </div>
            <div className="tech-icon">
              <img src={scss} alt="" />
            </div>
            <div className="tech-icon">
              <img src={nodejs} alt="" />
            </div>
            <div className="tech-icon">
              <img src={bootstrap} alt="" />
            </div>
            <div className="tech-icon">
              <img src={php} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="heroImage">
        <div className="column">
          <img className="cate" src={cate1} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Aboutme2;
