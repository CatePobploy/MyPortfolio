import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import cd from "../assets/cd.mp4";
import apv from "../assets/apv.mp4";
import abma from "../assets/abma.mp4";
import ccc from "../assets/ccc.mp4";
import bbb from "../assets/bbb.mp4";

function AboutME() {
  return (
    <Container fluid>
      <div className="background-video-container2">
        <video className="background-video" autoPlay loop muted>
          <source src={ccc} type="video/mp4" />
        </video>
        <div className="video-overlay2"></div>
      </div>

      <div id="hero-section" className="left-section">
        <h1 className="hero-title">About ME</h1>
        <p>
          I am a detail-oriented software developer with a main focus on
          front-end development. I am always excited to learn new technologies
          as I love exploring new concepts, tools, and frameworks in order to
          use them personally and professionally.
        </p>
      </div>
    </Container>
  );
}

export default AboutME;
