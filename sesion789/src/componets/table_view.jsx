import React from 'react';

const TableView = ({contact, changeState, removeContact,show}) => {
    
    return (
            <tr>
                <td>{contact.nombre}</td>
                <td>{contact.apellidos}</td>
                <td>{contact.telefono}</td>
                <td>
                    <button onClick={()=>{changeState(contact)}} className='btn text-light' style={{backgroundColor: contact.estado ? 'green' : 'red'}} > {contact.estado ? 'Conectado':'Desconectado'}</button>
                </td>
                <td>
                    <button onClick={()=>{removeContact(contact)}} className='btn btn-danger'>Remove</button>
                </td>                
            </tr>
    )
}
export default TableView;
