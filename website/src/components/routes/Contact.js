import React from 'react'
import { Form, Button } from 'react-bootstrap'

const Contact = () => {
    return(
    <div className='text-center' color='white'>
        <h2 style={{color: 'white'}}>Contact</h2>
        <h2 style={{color: 'white'}}>_______</h2>
        <p style={{color: 'teal'}}>Have any questions or want to work together?</p>
    
        <div className='text-center'>
            <Form>
                    <Form.Group controlId='formGroupName'>
                        <Form.Control type='name' placeholder='Name' />
                    </Form.Group>
                    <Form.Group controlId='formGroupEmail'>
                        <Form.Control type='email' placeholder='Email' />
                    </Form.Group>
                    <Form.Group controlId='formGroupMessage'>
                        <Form.Control as='textarea' placeholder='Your Message' rows={3} />
                    </Form.Group>
            </Form>

            <Button>
                
            </Button>
        </div>


    </div>
    )

}

export default Contact
