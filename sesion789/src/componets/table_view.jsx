import React from 'react';

const TableView = ({contact, changeState, removeContact,show}) => {
    
    return (
            <tr>
                <td>{contact.Name}</td>
                <td>{contact.lastName}</td>
                <td>{contact.phone}</td>
                <td>
                    <button onClick={()=>{changeState(contact)}} className='btn text-light' style={{width:'130px', backgroundColor: contact.estado ? 'green' : 'red'}} > {contact.estado ? 'Connected':'Disconnected'}</button>
                </td>
                <td style={{}}>
                    <button  onClick={()=>{removeContact(contact)}} className='btn btn-danger'>Remove</button>
                    </td>  
                <td>
                <button className='btn' style={{width:'80px', background:'gray'}}>Edit</button>
                </td>              
            </tr>
    )
}
export default TableView;
