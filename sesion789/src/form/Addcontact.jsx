import React, { useState } from 'react';
import { Formik, Field, Form } from 'formik';
import PropTypes from 'prop-types';
import {Modal, Button} from 'react-bootstrap/';
import { Link } from 'react-router-dom';

function CenterModal(props){
    return(
        <Modal
        {...props}
        size="sm"
        aria-labelledby="modal-title-center"
        centered
        >
        <Modal.Header>
            <Modal.Title id='modal-title-center'>
                Add contact
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Formik
        initialValues={{}}
        onSubmit={(values,actions)=>{
            setTimeout(() => {
            props.AddContact(values);
            actions.resetForm({});
            actions.setSubmitting(false); 
            props.onHide()           
        }, 1000);
        }}
        >
        {({errors})=>
        <Form >
            <Field className="form-control mb-2" name="name" placeholder="Name"/>
            {errors && errors.name}
            <Field className="form-control mb-2" name="lastName" placeholder="Last name"/>
            {errors && errors.lastName}
            <Field className="form-control mb-2" name="phone" placeholder="Telephone"/>
            {errors && errors.phone}
            <div className='d-flex justify-content-around '>
            <Button variant="primary" type="submit">Add contact</Button>
            <Button className='btn-danger'  onClick={props.onHide}>Close</Button>
            </div>
        </Form>
        }

        </Formik> 
        </Modal.Body>
        </Modal>
    )
}

const AddContact = ({ onAdd }) => {

const [modalShow, setModalShow] = useState(false);

    return (
        <div>
        <div>
        <Button style={{margin:'0.3rem'}} variant="primary" onClick={() => {
            setModalShow(true)}}>
        Add new contact
        </Button>
        <Link className='btn btn-danger' to='/'>Salir</Link>
        </div>        
        <CenterModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        AddContact={onAdd}
        />
        </div>
        
    );
};


AddContact.propTypes = {
    onAdd: PropTypes.func.isRequired,

};


export default AddContact;
