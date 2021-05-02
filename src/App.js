import React from 'react'
import NavBar from "./components/navbar/NavBar"
import { Container, Row, Col } from "react-bootstrap";
import Home from "./components/Home";

function App() {
  return (
    <div>
      <NavBar />
      <Container className="base">
        <Row>
          <Col className="base-small" xs={1}>1 of 3</Col>
          <Col>
            <Home />
          </Col>
          <Col className="base-small" xs={1}>3 of 3</Col>
        </Row>
      </Container>
    </div>
  )
}

export default App;
