import React, { useRef, useEffect } from 'react'
import NavBar from "./navbar/NavBar"
import { Container, Row, Col } from "react-bootstrap"
import Home from "./sections/Home"
import About from './sections/About'
import Experiences from './sections/experiences'
import Projects from './sections/projects'
import Contact from './sections/Contact'
import LeftCol from './sections/LeftCol'
import RightCol from './sections/RightCol'
import { useLocation } from "react-router-dom"
import { TransitionGroup, Transition } from 'react-transition-group' 
import { play } from './Timelines'

function Main() {

  const location = useLocation()

  const { hash, key } = location;

  const home = useRef(null)
  const about = useRef(null)
  const experiences = useRef(null)
  const projects = useRef(null)
  const contact = useRef(null)

  useEffect(() => {

    switch (location.hash) {
      case "#home":
        scrollToDiv(home)
        break
      case "#about":
        scrollToDiv(about)
        break
      case "#experiences":
        scrollToDiv(experiences)
        break
      case "#projects":
        scrollToDiv(projects)
        break
      case "#contact":
        scrollToDiv(contact)
        break
      default:
      // ignore
    }
  }, [location])

  const scrollToDiv = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <TransitionGroup component={null}>
    <Transition
      key={key}
      appear={true}
      onEnter={(node, appears) => play(hash, node, appears)}
      timeout={{enter: 750, exit: 0}}
    >
    <div>
      <NavBar
        linkClick={(ref) => scrollToDiv(ref)}
        refs={[ about, experiences, projects, contact ]}
      />
      <Container className="base">
        <Row>
          <Col className="base-small" xs={1}>
            <LeftCol />
          </Col>
          <Col>
            <Home
              linkClick={(ref) => scrollToDiv(ref)}
              aboutRef={about}
              ref={home} />
            <About ref={about} />
            <Experiences ref={experiences} />
            <Projects ref={projects} />
            <Contact ref={contact} />
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
    </Transition>
    </TransitionGroup>
  )
}

export default Main
