//import React from 'react'
import { connect } from 'react-redux'
import { addContact } from '../../store/actions/actions'
import Contactform from '../pure/ContactForm'

const mapStateToProps = (state) => ({
    // Not necessary
})

const mapDispatchToProps = (dispatch) => {
    return {
        submit: (text) => {
            dispatch(addContact(text))
        }
    }
}

const ContactFormContainer = connect(mapStateToProps, mapDispatchToProps)(Contactform)

export default ContactFormContainer
