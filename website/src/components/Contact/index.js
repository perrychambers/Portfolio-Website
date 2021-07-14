import React from 'react'
import {Container, FormWrap, Icon, FormContent, Form, FormH1, FormInput, FormLabel} from './ContactElements'
import { Button } from '../ButtonElement'

const Contact = ({id, primary, dark}) => {


    return (
        <Container id={id}>
            <FormWrap>
                <Icon to='/'></Icon>
                <FormContent>
                    <Form action='#'>
                        <FormH1>Contact Me</FormH1>
                        <FormLabel htmlFor='for'>Name</FormLabel>
                        <FormInput type='name' required />
                        <FormLabel htmlFor='for'>Email</FormLabel>
                        <FormInput type='email' required />
                        <FormLabel htmlFor='for'>Your Message</FormLabel>
                        <FormInput type='message' required />
                        <Button to='home'
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}
                            primary={primary ? 1 : 0 }
                            dark={dark ? 1 : 0}
                            onClick={() => { alert('Section under development.')}}
                        >Submit</Button>
                    </Form>
                </FormContent>
            </FormWrap>
        </Container>
    )
}

export default Contact
