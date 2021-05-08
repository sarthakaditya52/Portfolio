import React from 'react'
import NavBar from "./navbar/NavBar"
import { Container, Row, Col } from "react-bootstrap";
import Home from "./sections/Home";
import About from './sections/About';
import Experiences from './sections/experiences';
import Projects from './sections/projects';
import Contact from './sections/Contact';
import LeftCol from './sections/LeftCol';
import RightCol from './sections/RightCol';

function Main() {
  return (
    <div>
      <NavBar />
      <Container className="base">
        <Row>
          <Col className="base-small" xs={1}>
            <LeftCol />
          </Col>
          <Col>
            <Home />
            <About />
            <Experiences />
            <Projects />
            <Contact />
            <footer>
              Made by <span>Sarthak Aditya</span>
            </footer>
          </Col>
          <Col className="base-small" xs={1}>
            <RightCol />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Main;
