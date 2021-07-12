import React from 'react'
import { Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css'
import styled from 'styled-components'
import Logo from '../assets/Logo.png'

const Styles = styled.div`
    .navbar {
        background-color: #222l;
    }

    .navbar-brand, .navbar-nav, nav-link {
        color: #bbb;

        &:hover {
            color: white;
        }
    }
`;

export const NavigationBar = () => {
    return(
        <Styles>
            <Navbar bg='light' variant='light'>
                <Navbar.Brand>
                    <img
                        src={Logo}
                        width='30'
                        height='30'
                        alt='PC Logo'
                    />
                </Navbar.Brand>
                <Nav className='justify-content-center' activeKey='/home'>
                    <Nav.Item>
                        <Nav.Link href='/Portfolio-Website/'>Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href='/Portfolio-Website/about'>About</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href='/Portfolio-Website/portfolio'>Portfolio</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href='/Portfolio-Website/contact'>Contact</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar>
        </Styles>
    )
}

export default NavigationBar