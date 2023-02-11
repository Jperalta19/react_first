import React from 'react';
import { Form, Button } from 'react-bootstrap/'
import { Link } from 'react-router-dom'

const RegisterForm = () => {

    return (
        <div className="d-flex justify-content-center mt-5">
    <Form className="p-3 my-5 d-flex flex-column w-50">
        <Form.Label className='h1 fw-bold mb-3'>
            Register
        </Form.Label>
        <Form.Group className="mb-4" controlId="formBasicUser">
            <Form.Control type="text" placeholder="Enter username" />
        </Form.Group>
        <Form.Group className="mb-4" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-4" controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Text className="d-flex justify-content-between mx-3 mb-4">
        <Form.Check type="checkbox"  value='' label="Remember me" />     
        <a href='/'>Forgot password?</a>
        </Form.Text>       
            <Button className='btn mb-4' type="submit">
                login
            </Button>   
            <Form.Text >            
                <p>A member? <Link className='text-center' to="/">Log In</Link></p>
            </Form.Text>                      
    </Form>
    </div>
    )
}

export default RegisterForm
