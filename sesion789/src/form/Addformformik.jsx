import React from 'react'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const Addformformik = () => {

    const TaskSchema = Yup.object().shape({
        name: Yup.string().min(2, 'Too Short!').max(20, 'Too Long!').required('Required'),
        LastName: Yup.string().min(2, 'Too Short!').max(20, 'Too Long!').required('Required'),
        phone: Yup.number().min(3, 'Too Short!').max(17, 'Too Long!').required('Required'),
    });


    const df = {};

    return (
        <div>
            <h1 style={{marginTop:'20px'}}>Add new contact</h1>
            <Formik
                initialValues={df}
                onSubmit={(values, actions) =>{
                    setTimeout(() => {
                        df.push(values);
                        actions.resetForm({});
                        actions.setSubmitting(false);
                    },500)
                }}
                validationSchema={TaskSchema}
                
                >
                {({errors}) => {
                    <Form>
                        <Field name="name" placeholer="Name"/>
                        {errors && errors.name}
                        <Field lastName="lastname" placeholder="Last Name" />
                        {errors && errors.lastName}
                        <Field phone="prone" placeholder="Phone number" />
                        {errors && errors.phone}
                        <button type="submit">Submit</button>
                    </Form>
                }}
            </Formik>
        </div>
    )
}

export default Addformformik
