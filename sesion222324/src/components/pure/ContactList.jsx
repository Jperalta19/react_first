import React from 'react';
import PropTypes from 'prop-types';
import Contact from './Contact';

const ContactList = ({contacts, onTodoClick}) => {
    return (
        <div>
            <h1>Your TODOs</h1>
            <ul>
                {contacts.map((contact, index) => 
                    (
                        <Contact
                            key={index}
                            {...contact} // id, text, completed
                            onClick = {
                                () => onTodoClick(contact.id)
                            }
                        />
                    )
                )}

            </ul>
            
        </div>
    );
}

ContactList.propTypes = {
    contact: PropTypes.arrayOf(
        PropTypes.shape(
            {
                id: PropTypes.number.isRequired,
                text: PropTypes.string.isRequired,
                connected: PropTypes.bool.isRequired
            }
        ).isRequired
    ).isRequired,
    onTodoClick: PropTypes.func.isRequired       
}

export default ContactList;
