import React, {useState} from 'react';
import AddContact from '../form/Add_contact';
import { default_datos } from '../models/contact';
//import PropTypes from 'prop-types';
import TableView from './table_view';


const ListView = () => {

    const defaultdatos = [default_datos]

    const [Newcontact, setNewcContact] = useState(defaultdatos);

    function addContact(contact) {
        const tempContact = [...Newcontact];
        tempContact.push(contact);
        setNewcContact(tempContact);
        
    }

    function changeState(contact){
        const index = Newcontact.indexOf(contact);
        const tempContact = [...Newcontact];

        tempContact[index].estado = !tempContact[index].estado;
        setNewcContact(tempContact);
    }

    function removeContact(contact){
        const index = Newcontact.indexOf(contact);
        const tempContact = [...Newcontact];
        tempContact.splice(index, 1)
        setNewcContact(tempContact);
    }

    return (
        <div>
        <AddContact Add={addContact}></AddContact>
        <br/>
            <div className='card' style={{ width: '38rem' }}>
                <div className='card-body'>
                    <h1 className='card-title'>Contact List</h1>
                    <div className='card-text '>
                <table >
                <thead>
                    <tr className='thead-dark' style={ {borderBottom: '1px dotted black'}}>
                        <th>Name</th>
                        <th>Last name</th>
                        <th>Number</th>
                        <th>State</th>
                        <th>Option</th>
                    </tr>
                </thead>                    
                    <tbody>
                        { Newcontact.map((contact, index) => {
                            return (
                                <TableView 
                                key={index} contact={contact}  changeState={changeState} removeContact={removeContact}></TableView>
                            )
                        })}
                    </tbody>                    
            </table>                    
            </div>
            </div>
        </div>
        </div>
        
    );
};


ListView.propTypes = {

};
export default ListView;
