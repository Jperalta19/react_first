import React from 'react';
import PropTypes from 'prop-types';

const Contact = ({ onClick, connected, text, id }) => {
    return (
        <li onClick={onClick} 
        style={
            {
                color: connected ? 'green' : 'red'  
            } 
        }>
            {id} - {text}
        </li>
    );
}

Contact.propTypes = {
    onClick: PropTypes.func.isRequired,
    connected: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
}

export default Contact;
