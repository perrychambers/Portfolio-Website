import React from 'react'
//import AboutData from '../../data/AboutData'
import {Card, Accordion, Button, ListGroup} from 'react-bootstrap'
import styled from 'styled-components'
//import tech from '../../assets/tech.png'

const Styled = styled.div`
    margin-left: auto;
    margin-right: auto;
    width: 30rem;
`;

const About = () => {
    return (
    <div className='aboutInfo'>
        <Styled>
            <Card>
                <Card.Header className='text-center'>Background</Card.Header>
                    <Card.Body className='text-center'>
                        <p> I am a new Graduate with a B.S. in Software Engineering with a minor in Computer Science. from the Pennsylvania State University. </p>
                        <p>As a software engineer, I enjoy turning an idea into a reality through the use of good code and design. 
                            My goal is to build scalable and efficient applications that work in the background, while combining it with a user friendly interface and engaging experience.
                        </p>
                        <p>When I'm not coding, I enjoy being outside whether that's hiking, exploring or snowboarding. I also have a deep passion for cooking and trying new things.</p>

                    </Card.Body>
            </Card>
            {/* // FRONT END */}
            <Card>
                <Card.Header className='text-center'>Skills</Card.Header>
                {/* <Card.Img className='cardImg' variant='top'/> */}
                <Accordion>
                    <Card>
                        <Card.Header className='text-center'>
                            <Accordion.Toggle as={Button} variant='link' eventKey='0'>
                                Languages
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey='0'>
                            <Card.Body>
                                <ListGroup className='text-center'>
                                    <ListGroup.Item>JavaScript (ES6)</ListGroup.Item>
                                    <ListGroup.Item>HTML/CSS</ListGroup.Item>
                                    <ListGroup.Item>Java</ListGroup.Item>
                                    <ListGroup.Item>C/C++</ListGroup.Item>
                                    <ListGroup.Item>Python</ListGroup.Item>
                                </ListGroup>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header className='text-center'>
                            <Accordion.Toggle as={Button} variant='link' eventKey='1'>
                                Frameworks
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey='1'>
                            <Card.Body>
                                <ListGroup className='text-center'>
                                    <ListGroup.Item>Vue (Vuex, Router, Vuetify)</ListGroup.Item>
                                    <ListGroup.Item>React (Router)</ListGroup.Item>
                                    <ListGroup.Item>Node</ListGroup.Item>
                                    <ListGroup.Item>Spring</ListGroup.Item>
                                    <ListGroup.Item>Express</ListGroup.Item>
                                    <ListGroup.Item>Spring</ListGroup.Item>
                                </ListGroup>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header className='text-center'>
                            <Accordion.Toggle as={Button} variant='link' eventKey='2'>
                                Tools
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey='2'>
                            <Card.Body>
                                <ListGroup className='text-center'>
                                    <ListGroup.Item>Git & Github</ListGroup.Item>
                                    <ListGroup.Item>Chrome DevTools</ListGroup.Item>
                                    <ListGroup.Item>Vue, React DevTools</ListGroup.Item>
                                    <ListGroup.Item>MongoDB</ListGroup.Item>
                                    <ListGroup.Item>Postman</ListGroup.Item>
                                    <ListGroup.Item>SQL, MySQL</ListGroup.Item>
                                    <ListGroup.Item>AWS (Lambda, API Gateway, S3, CodePipeline) </ListGroup.Item>

                                </ListGroup>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header className='text-center'>
                            <Accordion.Toggle as={Button} variant='link' eventKey='2'>
                                Design
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey='2'>
                            <Card.Body>
                                <ListGroup className='text-center'>
                                    <ListGroup.Item>Photoshop</ListGroup.Item>
                                    <ListGroup.Item>Illustrator</ListGroup.Item>
                                    <ListGroup.Item>Prototyping</ListGroup.Item>
                                </ListGroup>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </Card>
        </Styled>
    </div>
    )

}

export default About
