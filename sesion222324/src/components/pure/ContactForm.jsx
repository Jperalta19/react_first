import React, {useRef} from 'react';
import PropTypes from 'prop-types';

const Contactform = ({submit}) => {

    const newText = useRef();

    return (
        <div>
            <h2>Create your Contacts</h2>
            <form onSubmit={(e) => {
                e.preventDefault();
                submit(newText.current.value);
                newText.current.value = '';
            }}>
                <input type='text' ref={newText}/>
                <button type='submit'>
                    Create contact
                </button>
            </form>
        </div>
    );
}

Contactform.propTypes = {
    submit: PropTypes.func.isRequired
}

export default Contactform;
