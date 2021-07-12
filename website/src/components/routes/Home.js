import React from 'react'
import {Card} from 'react-bootstrap'
import styled from 'styled-components'

const Styled = styled.div`
    margin-left: auto;
    margin-right: auto;
    width: 30rem;
`;

const Home = () => {
    return(
    <div>
        <Styled>
            <Card>
                <Card.Body>
                    <Card.Title>Hello, My name is Perry. Nice to meet you.</Card.Title>
                    <Card.Text>

                    </Card.Text>
                </Card.Body>
            </Card>
        </Styled>
    </div>
    )
}

export default Home
