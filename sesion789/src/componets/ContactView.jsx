import React from 'react';
import { Card, Table } from 'react-bootstrap';
import useContacts from '../hooks/useContact';
import AddContact from '../form/Addcontact';

const ContactView = ({ user }) => {

    const contacts = useContacts();
    

return (
    <div>
        <AddContact onAdd={(values) => contacts.push(values)} />
        <Card  style={{ width: 'auto', maxWidth:'60%' , marginTop:'0.3rem'}}>
        <Card.Body>
        <div className='d-flex justify-content-between '>
                <h1 className='card-title'>Contact List</h1>
                    <h1>Usuario: {} </h1>
                </div>
                <Card.Text>
                    {contacts.isEmpty()?
                        (
                            <p>There are not contact to show</p>
                        ) 
                        :
                        (
                            <Table responsive hover  size="sm" >
                    <thead>
                    <tr>
                    <th>Name</th>
                    <th>Last name</th>
                    <th>Number</th>
                    <th>State</th>
                    <th>Remove</th>
                    </tr>
                    </thead>
                    <tbody>
                        {contacts.value.map((contact, index)=>(
                            <tr>
                            <td>{contact.name}</td>
                            <td>{contact.lastName}</td>
                            <td>{contact.phone}</td>
                            <td><button /*onClick={()=>{changeState(contact)}}*/ className='btn text-light' style={{width:'130px', backgroundColor: contact.estado ? 'green' : 'red'}} > {contact.estado ? 'Connected':'Disconnected'}</button></td>
                            <td><button onClick={() => contacts.remove(index)} className='btn btn-danger'>Remove</button></td>
                        </tr>
                        ))
                        }
                    </tbody>
                    </Table>
                        )}
                    
                
                </Card.Text>
        </Card.Body>
        <p style={{marginLeft:'8px'}}>Tiene: {contacts.value.length} contacto agregado</p>
            </Card>
            
    </div>
)
}

export default ContactView
