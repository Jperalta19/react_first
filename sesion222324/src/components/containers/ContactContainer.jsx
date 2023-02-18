//import React from 'react'
import { connect } from 'react-redux'

// Actions
import { toggleContact } from '../../store/actions/actions'

import ContactList from '../pure/ContactList';

// Filter Todo List
const filterContact = (contact, filter) => {

    switch (filter) {
        case 'SHOW_ALL':
            return contact;
        case 'SHOW_DISCONNECT':
            return contact.filter((contact) => !contact.connect);
        case 'SHOW_CONNECT':
            return contact.filter((contact) => contact.connect);
        default:
            return contact;
    }

}

const mapStateToProps = (state) => {
    return {
        contact: filterContact(state.todosState, state.filterState)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onTodoClick: (id) => {
            dispatch(toggleContact(id))
        }
    }
}

// We connect State & Dispach to TodoList's Props 
const ContactContainer = connect(mapStateToProps, mapDispatchToProps)(ContactList)

export default ContactContainer;
