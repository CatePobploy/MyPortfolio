// Import Bootstrap modules
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { Navbar, Nav } from "react-bootstrap";
import cate from "../layout/cate.png";
import React from "react";
import Cate from "../../assets/Cate.svg";

const Header = () => {
  return (
    <Navbar className="mb-4" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src={Cate}
            alt="CATE Logo"
            className="mb-1"
            style={{
              position: "flex",
              // height: "60px",
              width: "50px",
              marginBottom: "0px",
              margin: "0px",
              color: "aqua",
            }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about" style={{ marginBottom: "0px" }}>
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/projects">
              Projects
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
