import React from 'react'
import { Container } from 'react-bootstrap'
import styled from 'styled-components'

const Styled = styled.div`
    background: #343f4a

`;

const Layout = (props) => {
    return (
        <Styled>
            <Container>
                {props.children}
            </Container>
        </Styled>

    )
}

export default Layout
