import React, { useRef } from 'react';
import PropTypes from 'prop-types';


const AddContact = ({Add}) => {
    const name = useRef('');
    const last_Name = useRef('');
    const telephone = useRef('');

    function addContact(e){
        e.preventDefault();

        const newContact1 = {nombre: name.current.value, apellidos: last_Name.current.value, telefono: telephone.current.value, estado: false};

        Add(newContact1);

        name.current.value="";
        last_Name.current.value="";
        telephone.current.value="";
    }
    return (
        <div className='card' style={{ width: '20rem' }}>
            <form className='m-3'>
                <div className='form-group mb-2'>
                    <input ref={name} type='text' className='form-control' placeholder='Name' required autoFocus/>
                </div>
                <div className='form-group mb-2'>
                </div>
                    <input ref={last_Name}  type='text' className='form-control' placeholder='Last name'/>
                <div className='form-group mb2'>
                    <input ref={telephone}  type='text' className='form-control' placeholder='Telephone number' aria-describedby="telefono" required/>
                    <small id="telefono" className='form-text text-muted fwsmall'>Put the numbers without hyphens.</small>
                </div>
                <button onClick={addContact} className='btn btn-success mb-3' type="submit">Add contact</button>
            </form>
        </div>
        
    );
};


AddContact.propTypes = {
    Add: PropTypes.func.isRequired,

};


export default AddContact;
