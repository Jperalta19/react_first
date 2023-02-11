import React from 'react';
import { Form, Button } from 'react-bootstrap/'
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { Formik, Field, ErrorMessage } from 'formik';


const loginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email format').required('Email is required'),
    password: Yup.string().required('Password is required'),
});

const LoginForms = ({ onSubmit }) => {

return (
        <Formik
            // *** Initial values that the form will take
            initialValues={{}}
            // *** Yup Validation Schema ***
            validationSchema={loginSchema}
            // ** onSubmit Event
            onSubmit={(values, actions) => {
                setTimeout(() => {
                onSubmit(values);
                actions.resetForm({});
                actions.setSubmitting(false);
                }, 500);
            }}>
            {({touched, errors, isSubmitting})=>(
                <div className="d-flex justify-content-center mt-5">
                    <Form className="p-3 my-5 d-flex flex-column w-50">
                        <Form.Label className='h1 fw-bold mb-3'>Log In</Form.Label>
                        <Field className="mb-4 form-control" id="email" type="email" name="email" placeholder="example@email.com" />
                        {/**Email Errors */}
                        {errors.email && touched.email && <ErrorMessage className='alert alert-warning' name="email" component="div" />}
                        <Field className="mb-4 form-control" id="password" name="password" placeholder="password" type="password" />
                        {/* Password Errors */}
                        {errors.password && touched.password && <ErrorMessage className='alert alert-warning' name="email" component="div" />}
                        <Button className='btn mb-4' type="submit">login</Button> 
                        <Form.Text >            
                            <p>Not a member? <Link className='text-center' to="/Register">Register</Link></p>
                        </Form.Text> 
                    </Form>
                </div>
            )}
        </Formik>  
    )
}

export default LoginForms
