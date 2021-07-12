import React from 'react'
import {Navbar} from 'react-bootstrap'

function Footer() {
    return (
        <div className='footer'>
            <Navbar expand='sm' fixed='bottom' bg='dark' variant='dark'>
                <Navbar.Brand href="#home">Perry Chambers Jr - {new Date().getFullYear()}</Navbar.Brand>
            </Navbar>
        </div>
    )
}

export default Footer
