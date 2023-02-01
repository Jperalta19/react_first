import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Contactos, } from '../Models/contactos.class';

function Contactoscomponets  ({contactos})  {

    const [conectado, setConectado] = useState(contactos.estado);

    return (
        <div>
            <h2>Nombre: { contactos.nombre } </h2>
            <h3>apellido: { contactos.apellido } </h3>
            <h4>Emali: { contactos.email } </h4>
            <h5>Estado: {conectado === false ? 'desconectado':'conectado'} </h5>
            <button onClick={() => setConectado(!conectado)}>Cambiar estado</button>
        </div>
    );
};


Contactoscomponets.propTypes = {
    contactos: PropTypes.instanceOf(Contactos)
};


export default Contactoscomponets;
