import React from 'react'
import {Container, FormWrap, Icon, FormContent, Form, FormH1 } from './ContactElements'
import { Button } from '../ButtonElement'

const Contact = ({id, primary, dark}) => {

const copyEmail = () => {
    var text = 'pkc5102@psu.edu';
    navigator.clipboard.writeText(text).then(function() {
        alert('Email copied to clipboard.')
    }, function(err) {
        console.error('Could not copy to clipboard.', err);
    });
}

    return (
        <Container id={id}>
            <FormWrap>
                <Icon to='/'></Icon>
                <FormContent>
                    <Form action='#'>
                        <FormH1>Get in contact with me!</FormH1>
                        {/* <FormLabel htmlFor='for'>Name</FormLabel>
                        <FormInput type='name' required />
                        <FormLabel htmlFor='for'>Email</FormLabel>
                        <FormInput type='email' required />
                        <FormLabel htmlFor='for'>Your Message</FormLabel>
                        <FormInput type='message' required /> */}
                        <Button to='home'
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}
                            primary={primary ? 1 : 0 }
                            dark={dark ? 1 : 0} 
                            onClick={copyEmail}
                        >Send me an email.</Button>
                    </Form>
                </FormContent>
            </FormWrap>
        </Container>
    )
}

export default Contact
