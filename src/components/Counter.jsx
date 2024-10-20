import React, { useState, useEffect } from 'react';

const Counter = () => {

    const [contador, setContador] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setContador((contador) => contador + 1)
        }, 1000);
    })

    //Se agrega padStart para tener 5 digitos en el contador 

    const formatoContador = contador.toString().padStart(5, '0');


    return (
        <div>
            <h1>Contador: {formatoContador}</h1>
        </div>
    );
};

export default Counter;