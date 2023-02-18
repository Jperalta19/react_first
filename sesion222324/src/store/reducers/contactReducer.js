import { ADD_CONTACT, TOGGLE_CONTACT } from '../actions/actions';

// Initial TodosState
// Initialy todos is empty
let initialState = [];

export const ContactReducer = (state=initialState, action) => {
    
    switch (action.type) {
        case ADD_CONTACT:
            return [
                ...state,
                {
                    id: action.payload.id,
                    text: action.payload.text,
                    connected: false
                }
            ]
        case TOGGLE_CONTACT:
            return state.map((contact) => 
                (contact.id === action.payload.id)
                ?
                {
                    ...contact,
                    connected: !contact.connected
                }
                :
                contact
            )
    
        default:
            return state;
    }
}