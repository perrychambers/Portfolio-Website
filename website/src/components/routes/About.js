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
                <Card.Header className='text-center'>About Me</Card.Header>
                    <Card.Body className='text-center'>
                        I am a new Graduate with a B.S. in Software Engineering from the Pennsylvania State University.

                        My friends and peers would describe me as a hard worker that strives to complete a task to the best of my
                        ability and efficiently as I can be.

                        I am seeking employment as a Software Engineer in the Web Development Field. I have a good amount of experience with modern Development
                        tools that you can find in my portfolio.
                    </Card.Body>
            </Card>
            {/* // FRONT END */}
            <Card>
                <Card.Header className='text-center'>Front-End Development Exposure</Card.Header>
                {/* <Card.Img className='cardImg' variant='top'/> */}
                <Accordion defaultActiveKey='0'>
                    <Card>
                        <Card.Header className='text-center'>
                            <Accordion.Toggle as={Button} variant='link' eventKey='0'>
                                Vue
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey='0'>
                            <Card.Body>
                                <ListGroup className='text-center'>
                                    <ListGroup.Item>Vue 2</ListGroup.Item>
                                    <ListGroup.Item>Vue Router</ListGroup.Item>
                                    <ListGroup.Item>Vuex State Management</ListGroup.Item>
                                    <ListGroup.Item>Vuetify</ListGroup.Item>
                                    <p className='text-center'>Primarily used during my Senior Capstone Project</p>
                                </ListGroup>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header className='text-center'>
                            <Accordion.Toggle as={Button} variant='link' eventKey='1'>
                                React
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey='1'>
                            <Card.Body>
                                <ListGroup className='text-center'>
                                    <ListGroup.Item>React Router</ListGroup.Item>
                                    <ListGroup.Item>React-Bootstrap</ListGroup.Item>
                                    <p>React was used to create this website</p>
                                </ListGroup>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header className='text-center'>
                            <Accordion.Toggle as={Button} variant='link' eventKey='2'>
                                HTML/CSS/JS
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey='2'>
                            <Card.Body>Hello!</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </Card>
            {/* Back END */}
            <Card>
                <Card.Header className='text-center'>Back-End Development Exposure</Card.Header>
                {/* <Card.Img className='cardImg' variant='top'/> */}
                <Accordion defaultActiveKey='0'>
                    <Card>
                        <Card.Header className='text-center'>
                            <Accordion.Toggle as={Button} variant='link' eventKey='0'>
                                Spring
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey='0'>
                            <Card.Body>
                                <ListGroup className='text-center'>
                                    <p>Some bs here</p>
                                </ListGroup>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header className='text-center'>
                            <Accordion.Toggle as={Button} variant='link' eventKey='1'>
                                Node
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey='1'>
                            <Card.Body>
                                <ListGroup className='text-center'>
                                    <p>Some bs here</p>
                                </ListGroup>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header className='text-center'>
                            <Accordion.Toggle as={Button} variant='link' eventKey='2'>
                                HTML/CSS/JS
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey='2'>
                            <Card.Body>Hello!</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </Card>

        </Styled>

    </div>
    )

}

export default About
