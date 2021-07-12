import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import {AiFillMail, AiFillGithub, AiFillLinkedin, AiFillPhone } from 'react-icons/ai'

function Footer() {
    return (
        <div className='footer'>
            <Navbar fixed='bottom' bg='light' variant='light'>
                <Navbar.Brand href="#home">Contact Me</Navbar.Brand>
                <Nav className='mr-auto'>
                    <Nav.Link href='#home'><AiFillMail /></Nav.Link>
                    <Nav.Link href='#portfolio'><AiFillGithub /></Nav.Link>
                    <Nav.Link href='#about'><AiFillLinkedin /></Nav.Link>
                    <Nav.Link href='#about'><AiFillPhone />(412)-780-0417</Nav.Link>
                </Nav>
            </Navbar>
        </div>
    )
}

export default Footer
