import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import {Navbar, Nav} from 'react-bootstrap'


function Toolbar() {
    return (
        <div class='NavBar'>
            <Navbar fixed='top' bg='light' variant='light'>
                <Navbar.Brand href="#home">Perry Chambers Jr</Navbar.Brand>
                <Nav className='mr-auto'>
                    <Nav.Link href='#home'>Home</Nav.Link>
                    <Nav.Link href='#portfolio'>Portfolio</Nav.Link>
                    <Nav.Link href='#about'>About</Nav.Link>
                </Nav>
            </Navbar>

        </div>

    )
}

export default Toolbar
