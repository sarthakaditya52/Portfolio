import React, { forwardRef } from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import SectionHeading from '../../SectionHeading'
import MoreProjects from './MoreProjects'
import { featuredProjects } from './projects.data'

const Projects = forwardRef((props, ref) => {
    return (
        <>
            <div className="projects" ref={ref}>
                <SectionHeading index={3} heading={"My Projects"} />
                <Container className="featured-project-container">
                    {featuredProjects.map((project, index) => 
                        <Row key={index}>
                            <Col className={`project-image-container ${index % 2 !== 0 && "odd"}`}>
                                <div className="image-blurbox">
                                    <a target="_blank" rel="noreferrer" href={project.livelink ? project.livelink : project.gitlink}>
                                        <Image className="project-image" src={project.image} rounded />
                                    </a>
                                </div>
                            </Col>
                            <Col className={`featured-project-info ${index % 2 !== 0 && "odd"}`}>
                                <div className="project-heading">
                                    <h5>Featured Project</h5>
                                    <h3>{project.titile}</h3>
                                </div>
                                <div className="project-info">{project.desc}</div>
                                <div className="project-tech">
                                    {project.tech.map((tech, subIndex) => 
                                        <label key={subIndex}>{tech}</label>
                                    )}
                                </div>
                                <div className="project-links">
                                    {project.gitlink &&
                                        <a target="_blank" rel="noreferrer" href={project.gitlink}><i className="fab fa-github" /></a>
                                    }
                                    {project.livelink &&
                                        <a target="_blank" rel="noreferrer" href={project.livelink}><i className="fas fa-external-link-alt" /></a>
                                    }   
                                </div>
                            </Col>
                        </Row>
                    )}
                </Container>
            </div>
            <MoreProjects />
        </>
    )
})

export default Projects
