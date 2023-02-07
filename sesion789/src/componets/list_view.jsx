import React, {useState} from 'react';
import AddContact from '../form/Add_contact';
import TableView from './table_view';


const ListView = () => {

    const defaultdatos = [];

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

    const Contactview = () => {
        return(
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
                    {Newcontact.map((contact, index) => {
                            return (
                                <TableView
                                    key={index} 
                                    contact={contact} 
                                    changeState={changeState} 
                                    removeContact={removeContact}/>
                            )
                        })
                    }
                    </tbody> 
            </table>                        
            
        )
    }

    let view;
    
    if(Newcontact.length > 0 ){
        view = <Contactview></Contactview>
        
    } else{
        view = (
            <h3>There are not contact to show</h3>
        )
    }


    return (
        <div>
        <AddContact Add={addContact}/>
        <br/>
            <div className='card' style={{ width: '48rem' }}>
                <div className='card-body'>
                    <h1 className='card-title'>Contact List</h1>
                    <div className='card-text '>
                        {view}
                        {Newcontact > 0 ? '': ''}                              
            </div>
            </div>
        </div>
        </div>
        
    );
};

export default ListView;
