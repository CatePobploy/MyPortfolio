import { useState } from "react";
import { Container } from "react-bootstrap"

import AccordionList from "../components/features/accordion/AccordionList"
import "../css/main.css";
import whale from "../assets/whale.mp4";

function AboutPage() {
  const [panels, setPanels] = useState([
    { id: 1, title: "What Am I Currently Up To", content: "Lorem ipsum dolor sit amet." },
    { id: 2, title: "What Makes Me Code", content: "Lorem ipsum dolor sit amet." },
    { id: 3, title: "What Have I Got Involved In", content: "Lorem ipsum dolor sit amet." },
  ]);

  return (
    <Container fluid>
        {/* <div className="background-video-container">
        <video className="background-video" autoPlay loop muted>
          <source src={whale} type="video/mp4" />
        </video>
        <div className="video-overlay"></div>
      </div> */}
      <h1>About Me</h1> 
      <AccordionList 
        panels={panels}
      />
    </Container>
  )
}

export default AboutPage