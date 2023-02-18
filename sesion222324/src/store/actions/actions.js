// Incremental ID for Todos
let nextContactID = 0;

// Action Types:
export const ADD_CONTACT = 'ADD_CONTACT';
export const TOGGLE_CONTACT = 'TOGGLE_CONTACT'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'


/**
 * 
 * @param {string} text 
 * @returns action ADD_CONTACT
 */
export const addContact = (text) => {
    return {
        type: ADD_CONTACT,
        payload: {
            id: nextContactID ++,
            text
        }
    }
}

/**
 * 
 * @param {number} id 
 * @returns action TOGGLE_CONTACT
 */
export const toggleContact = (id) => {
    return {
        type: TOGGLE_CONTACT,
        payload: {
            id
        }
    }
}

/**
 * 
 * @param {string} filter 
 * @returns action SET_VISIBILITY_FILTER
 */
export const setVisibilityFilter = (filter) => {
    return {
        type: SET_VISIBILITY_FILTER,
        payload: {
            filter
        }
    }
}





