import React from 'react'
import { Jumbotron as Jumbo, Container } from 'react-bootstrap'
import styled from 'styled-components'
import rain from '../assets/rain.jpeg'

const Styles = styled.div`
    .jumbo {
        background: url(${rain}) no-repeat;
        color: #ccc;
        height: 150px;
        position: relative;
        z-index: -2;
        margin-bottom: 0px;
    }

    .overlay {
        background-color: #000;
        opacity: 0.6;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: -1;
    }
`;

const Jumbotron = () => {
    return(
        <Styles>
            <Jumbo fluid className='jumbo'>
                <div className='overlay'></div>
                <Container>
                    <h1>Perry Chambers Jr</h1>
                    <p>Software Engineer</p>
                </Container>
            </Jumbo>
        </Styles>
    )
}

export default Jumbotron