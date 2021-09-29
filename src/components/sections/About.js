import React, { forwardRef } from 'react'
import { Container, Image, Table } from 'react-bootstrap'
import SectionHeading from '../SectionHeading'
import me from '../../assets/images/me.jpg'

const About = forwardRef((props, ref) => {
    return (
        <div className="about" ref={ref}>
            <SectionHeading index={1} heading="About" />
            <Container className="about-container"> 
                <div className="about-section-container">
                    <div className="image-blurbox">
                        <div className="about-section-image">
                            <Image src={me} rounded />
                        </div>
                    </div>
                    <div className="about-section-text">
                        <p>
                            Hi! I'm an India-based developer who loves building applications for the web and mobile devices. 
                            I graduated from <span><a target="_blank" rel="noreferrer" href="https://iiitd.ac.in/">IIIT-D</a></span> in January 2021 and my discipline was Electronics and Communication 
                            but in my third semester I took Advanced Programming and it turns out I really love programming and building applications.
                        </p>
                        <p>
                            So, I took as many software development courses that my college offered and started building web and android applications 
                            during my free time.
                        </p>
                        <p>
                            Technologies I've been working with:
                        </p>
                        <Table borderless responsive="sm">
                            <tbody>
                            <tr>
                                <td>
                                    <span><i className="fab fa-js-square" />Javascript (ES6+)</span>
                                    <div className="progress-container">
                                        <div className="progress">
                                            <div className="bar" style={{width: '90%'}}/>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <span><i className="fab fa-node" />Node.js</span>
                                    <div className="progress-container">
                                        <div className="progress">
                                            <div className="bar" style={{width: '80%'}}/>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span><i className="fab fa-react" />React.js</span>
                                    <div className="progress-container">
                                        <div className="progress">
                                            <div className="bar" style={{width: '90%'}}/>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <span><i className="fab fa-android" />Kotlin (android)</span>
                                    <div className="progress-container">
                                        <div className="progress">
                                            <div className="bar" style={{width: '70%'}}/>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span><i className="fab fa-java" />Java</span>
                                    <div className="progress-container">
                                        <div className="progress">
                                            <div className="bar" style={{width: '65%'}}/>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <span><i className="fab fa-python" />Python</span>
                                    <div className="progress-container">
                                        <div className="progress">
                                            <div className="bar" style={{width: '65%'}}/>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            </tbody>
                        </Table>
                    </div>
                </div>
            </Container>
        </div>
    )
})

export default About
