import React from "react";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import cd from "../assets/cd.mp4";
import { IoIosMail } from "react-icons/io";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import NotFound from "./NotFound";

function Contact() {
  return (
    <Container fluid>
      <div className="background-video-container">
        <video className="background-video" autoPlay loop muted>
          <source src={cd} type="video/mp4" />
        </video>
        <div className="video-overlay3"></div>
      </div>

      <div id="hero-section">
        <div>
          <h1 className="hero-title typed-out">Contact</h1>
        </div>
        <p className="hero-subtitle container">
          <p>
            Don't hesitate to get in touch using your preferred method of
            contact! Whether you have ongoing work or freelance opportunities,
            big or small, I'm here for it. You can reach out to me via email at
            <a href="mailto: catepobploy@gmail.com" className="mail">
              catepobploy@gmail.com
            </a>
            . I'm always open to new opportunities and will make sure to respond
            as soon as possible. Looking forward to hearing from you!
          </p>
        </p>

        <div className="tech-icons-row">
          <a href="mailto:catepobploy@gmail.com" className="linkBtn">
            <IoIosMail />
          </a>

          <a href="https://github.com/CatePobploy" className="linkBtn">
            <IoLogoGithub />
          </a>

          <a href="./Notfound" className="linkBtn">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </Container>
  );
}

export default Contact;
