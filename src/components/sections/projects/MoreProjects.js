import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import SubHeading from '../../SubHeading'
import { projects } from './projects.data'

function MoreProjects() {
    return (
        <div>
            <SubHeading subheading="More Projects" />
            <Container className="other-projects-container">
                <Row>
                    {projects.map((project, index) => 
                        <Col className="project-col" key={index} md={4} sm={6} fluid="sm">
                            <div className="project">
                                <div className="top-div">
                                    <div className="project-links">
                                            {project.gitlink &&
                                                <a href={project.gitlink}><i className="fab fa-github" /></a>
                                            }
                                            {project.livelink &&
                                                <a href={project.livelink}><i className="fas fa-external-link-alt" /></a>
                                            }   
                                    </div>
                                    <i className={project.icon ? project.icon : "fas fa-code"} />
                                    <h4>
                                        {project.livelink || project.gitlink ? 
                                            <a href={`${project.livelink ? project.livelink : project.gitlink}`}>
                                                {project.titile}
                                            </a>
                                            :
                                            <>
                                                {project.titile}
                                            </>
                                        }
                                    </h4>
                                    <div className="project-desc">
                                        {project.desc}
                                    </div>
                                </div>
                                <div className="project-tech">
                                    {project.tech.map((tech, subIndex) => 
                                        <label key={subIndex}>{tech}</label>
                                    )}
                                </div>
                            </div>
                        </Col>
                    )}        
                </Row>
            </Container>
        </div>
    )
}

export default MoreProjects
