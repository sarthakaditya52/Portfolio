import React from 'react'
import NavBar from "./components/navbar/NavBar"
import { Container, Row, Col } from "react-bootstrap";
import Home from "./components/sections/Home";
import About from './components/sections/About';
import Experiences from './components/sections/experiences';
import Projects from './components/sections/projects';
import Contact from './components/sections/Contact';
import LeftCol from './components/sections/LeftCol';
import RightCol from './components/sections/RightCol';

function App() {
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

export default App;
