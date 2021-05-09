import React, { forwardRef, useState } from 'react'
import { Button, Col, Container, ListGroup, Row } from 'react-bootstrap'
import SectionHeading from '../../SectionHeading'
import experiences from './experiences.data'

const Experiences = forwardRef((props, ref) => {

    const [index, setIndex] = useState(0)

    return (
        <div className="experience" ref={ref}>
            <SectionHeading index={2} heading="Experiences" />
            <Container className="experience-container">
                <Row>
                    <Col className="company-container" md={3}>
                        {experiences.map((data, indexData) => 
                            <Button onClick={() => setIndex(indexData)} className={`company-button ${index === indexData && 'active'}`} key={indexData}>
                                {data.company}
                            </Button>
                        )}
                    </Col>
                    <Col className="desc-container" fluid="md">
                        {experiences.map((data, indexData) => 
                            <div key={indexData} className={`description ${index === indexData && 'active fade-in'}`}>
                                <span className="desc-heading-container">
                                    <div className="desc-heading-index">
                                        {data.position} 
                                    </div>
                                    { indexData !== 0 && 
                                        <div className="desc-heading">
                                            @&nbsp;{data.company}
                                        </div>
                                    }
                                </span>
                                <p>
                                    {data.start} - {!data.end && !data.duration ? 'Present' :
                                        data.end ? data.end : data.duration
                                    }
                                </p>
                                <ListGroup className="desc-info" variant="flush">
                                    {data.description.map((info, desIndex) =>
                                        <span key={desIndex}>
                                            &#9672;
                                            <ListGroup.Item className="desc-info-item">{info}</ListGroup.Item>
                                        </span>
                                    )}
                                </ListGroup>
                            </div>
                        )}
                    </Col>
                </Row>
            </Container>
        </div>
    )
})

export default Experiences
