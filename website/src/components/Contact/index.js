import React from 'react'
import {Container, FormWrap, Icon, FormContent, Form, FormH1, FormInput, FormLabel} from './ContactElements'

const Contact = () => {
    return (
        <Container>
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
                    </Form>
                </FormContent>
            </FormWrap>
        </Container>
    )
}

export default Contact