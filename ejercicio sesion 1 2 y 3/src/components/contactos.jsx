import React from 'react';
import PropTypes from 'prop-types';
import {Contactos} from '../Models/contactos.class';

const Contactoscomponets = ({contactos}) => {
    return (
        <div>
        <h2>Nombre: { contactos.nombre } </h2>
        <h3>apellido: { contactos.apellido } </h3>
        <h4>Emali: { contactos.email } </h4>
        <h5>Estado: { contactos.conectado ? 'Conectado':'Desconectado' } </h5>
        </div>
    );
};


Contactoscomponets.propTypes = {
    contactos: PropTypes.instanceOf(Contactos),
    nombre: PropTypes.string,
    apellido: PropTypes.string,
    email: PropTypes.string

};


export default Contactoscomponets;
