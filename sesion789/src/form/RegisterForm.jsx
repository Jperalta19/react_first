import React from 'react';
import { Form, Button } from 'react-bootstrap/';
import { Link } from 'react-router-dom';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const RegisterForm = ({ onSubmit }) => {

    const registerSchema = Yup.object().shape({
        username: Yup.string().min(6, 'Username too short').max(12, 'Username too long').required('Username is required'),
        email: Yup.string().email('Invalid email format').required('Email is required'),
        password: Yup.string().min(8, 'Password too short').required('Password is required'),
        confirm: Yup.string().when('password', {is: (value) => !!(value && value.length > 0),
        then: Yup.string().oneOf([Yup.ref('password')], '¡Passwords must match!'),}).required('You must confirm the password'),
    })

    return (
        <Formik
        initialValues={{}}
        // *** Yup Validation Schema ***
        validationSchema={registerSchema}
        // ** onSubmit Event
        onSubmit={async (values) => {
            await new Promise((r) => setTimeout(r, 1000));
            onSubmit(values);
            console.log(values);
        }}
        >
        {({ touched, errors, isSubmitting })=>(
            <div className="d-flex justify-content-center mt-5">
                <Form className="p-3 my-5 d-flex flex-column w-50" >
                    <Form.Label className='h1 fw-bold mb-3'>Register</Form.Label>

                    {/* Username Errors */}
                    {errors.username && touched.username && <ErrorMessage className='alert alert-warning' name="username" component="div" />}

                    <Field className="mb-4 form-control" id="username" type="text" name="username" placeholder="Your username"/>

                    {/* Email Errors */}
                    {errors.email && <ErrorMessage className='alert alert-warning' name="email" component="div" />}

                    <Field className="mb-4 form-control" id="email" type="email" name="email" placeholder="example@email.com" />

                    <Field className="mb-4 form-control" id="password" name="password" placeholder="password" type="password" />

                    {/* Password Errors */}
                    {errors.password && <ErrorMessage className='alert alert-warning' name="password" component="div" />}


                    <Field className="mb-4 form-control" id="confirm" name="confirm" placeholder="confirm passsword" type="password" />

                     {/* Confirm Password Errors */}
                    {errors.confirm && <ErrorMessage className='alert alert-warning' name="confirm" component="div"/>}

                    <Button className='btn mb-4' type="submit">Register</Button>
                    <Form.Text>
                        <p>A member? <Link to="/Login" className='text-center' >Log in</Link></p>
                    </Form.Text>
                    {isSubmitting ? <p>Sending your credentials...</p> : null}
                </Form>
            </div>
        )}
    </Formik>
    )
}

export default RegisterForm
