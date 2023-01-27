import React from 'react';
import Contactoscomponets from '../components/contactos';
import { Contactos } from '../Models/contactos.class';

const ListaContactos = () => {

    
    const defaultcontactos  = new Contactos('Juan','Peralta','jepr',false);

    return (
        <div>
            <h1>Tus contactos</h1>
            <Contactoscomponets contactos={defaultcontactos}></Contactoscomponets>
            <button>Cambiar estado</button>
        </div>
    );
}

export default ListaContactos;
