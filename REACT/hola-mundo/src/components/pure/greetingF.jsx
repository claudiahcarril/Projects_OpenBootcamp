/* Componente de tipo función --> reactClassComponent */ 
/* Componentes funcionales (pueden devolver un html)*/
/**
 * Componentes tipo función: no hay state, ni props, etc
 * Utilizamos hooks
 */

import React, {useState} from 'react';
import PropTypes from 'prop-types';


const GreetingF = (props) => {

    // Breve introducción a useState --> función que nos permite usar un state privado
    // Estructura --> const [variable, método para actualizarlo] = useState(valor inicial)
    const [age, setage] = useState(29)

    const birthday = () => {
        // actualizamos el state
        setage(age + 1)
    }

    return (
        <div>
        <h1>
            ¡HOLA { props.name } desde componente funcional!
        </h1>
         {/* <h2>
            Tu edad es de: { state.age } años
        </h2> */}
        <div>
            <button onClick={birthday}>Cumplir años</button>
        </div>
    </div>
    );
};


GreetingF.propTypes = {
    name: PropTypes.string
};


export default GreetingF;

