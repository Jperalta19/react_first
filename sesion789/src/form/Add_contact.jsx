import React, { useRef } from 'react';
import PropTypes from 'prop-types';


const AddContact = ({Add}) => {
    const Name = useRef('');
    const lastName = useRef('');
    const phone = useRef('');

    function addContact(e){
        e.preventDefault();

        const newContact1 = {Name: Name.current.value, lastName: lastName.current.value, phone: phone.current.value, status: false};

        Add(newContact1);

        Name.current.value="";
        lastName.current.value="";
        phone.current.value="";
    }
    return (
        <div className='card' style={{ width: '20rem' }}>
            <form onSubmit={addContact} className='m-3'>
                <div className='form-group mb-2'>
                    <input ref={Name} type='text' className='form-control' placeholder='Name' required autoFocus/>
                </div>
                <div className='form-group mb-2'>
                <input ref={lastName}  type='text' className='form-control' placeholder='Last name'/>
                </div>
                <div className='form-group mb2'>
                    <input ref={phone}  type='text' className='form-control' placeholder='Telephone number' aria-describedby="telefono" required/>
                    <small id="telefono" className='form-text text-muted fwsmall'>Put the numbers without hyphens.</small>
                </div>
                <button className='btn btn-success mb-3' type="submit">Add contact</button>
            </form>
        </div>
        
    );
};


AddContact.propTypes = {
    Add: PropTypes.func.isRequired,

};


export default AddContact;
