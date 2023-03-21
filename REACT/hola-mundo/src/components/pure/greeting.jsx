/* Componente de tipo clase --> reactClassComponent */ 

import React, { Component } from 'react';
import PropTypes from 'prop-types';


/**
 * ESTRUCTURA DE UN JSX (Combinación de contenido JS con HTML)
 * Clase que se extiende de component y requiere del método render()
 * render() --> devuelve un html
 * **** DEVOLVER UN ÚNICO ELEMENTO
 */
class Greeting extends Component {
    /* props --> información que va a recibir el componente por atributos*/
    constructor(props){
        super(props)
        this.state = {
            age : 29
        } // Valor privado del componente que si se modifica se modificaría la vista
    }

    render() {
        return (
            <div>
                <h1>
                    ¡HOLA { this.props.name }!
                </h1>
                <h2>
                    Tu edad es de: { this.state.age } años
                </h2>
                <div>
                    <button onClick={this.birthday}>Cumplir años</button>
                </div>
            </div>
        );
    }

    // Cambiando el state (que es privado) con setState (generando un nuevo estado) --> Nueva renderización en la vista
    birthday = () => {
        this.setState((prevState) => (
            {
                age: prevState.age + 1
            }
        ))
    }

}

/**
 * propTypes --> el contenido que se le puede pasar a un componente desde un componente de orden superior
 */
Greeting.propTypes = {
    name: PropTypes.string 
};


export default Greeting;
