import React, { useState, useEffect } from 'react';

const Solucion = () => {

    const defaultdatos = {
        fecha: new Date(),
        edad: 0,
        nombre: 'Juan E.',
        apellidos: 'Peralta R'
    };  

    const [update, setUpdate] = useState(defaultdatos);

    const updateedad = () => {
        return setUpdate({
            edad: update.edad + 1,
        });
    };

    useEffect(()=> {
        const intervalage = setInterval(() => {
            updateedad();
        }, 1000);
        return () => {
            clearInterval(intervalage);
        };
    });
    return (
        <div>
            <h2>
                Hora Actual: {defaultdatos.fecha.toLocaleTimeString()}
            </h2>
            <h3>
                {defaultdatos.nombre} {defaultdatos.apellidos}
            </h3>
            <h1>
                Edad {update.edad}
            </h1>
        </div>
    );
};


export default Solucion;
