import React, { useState, useEffect } from 'react';
import MediaButtons from './MediaButtons';

const Counter = () => {
    const [contador, setContador] = useState(0);
    const [paused, setPaused] = useState(false);

    useEffect(() => {
        let interval;

        if (!paused) {
            interval = setInterval(() => {
                setContador((contador) => contador + 1)
            }, 1000);
        }

        return () => clearInterval(interval);
    }, [paused]);


    // Se crean funciones para cambiar el estado del condicional
    const activarPause = () => {
        setPaused(true);
    }
    const activarResume = () => {
        setPaused(false);
    }
    const activarReiniciar = () => {
        setContador(0);
    }


    //Se agrega padStart para tener 5 digitos en el contador 
    const formatoContador = contador.toString().padStart(5, '0');


    return (
        <div>
            <h1>Contador: {formatoContador}</h1>
            <MediaButtons Pause={activarPause} Resume={activarResume} Reiniciar={activarReiniciar} />
        </div>
    );
};

export default Counter;