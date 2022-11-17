// COMO DECLARAR UNA CLASE
// Creando un objeto de clase Persona

class Persona {
    // Variables (atributos)
    nombre;
    edad;
    isDeveloper;

    //Método constructor (para instanciar)
    constructor(nombre, edad, isDeveloper) {
        this.nombre = nombre
        this.edad = edad
        this.isDeveloper = isDeveloper
    }

    // Métodos
    saludo() {
        console.log(`Hola, mi nombre es ${this.nombre}, tengo ${this.edad} años.`)
    }
}

// COMO INSTANCIAR UN OBJETO de CLASE PERSONA
const nueva_persona = new Persona("Claudia", 32, true)
console.log(nueva_persona)
nueva_persona.saludo()


let numero = 60 // Inicializando una variable
let persona_2 = new Persona("Maria", 34, false) //Instanciando


// instanceof -> similar a typeof pero para clases
console.log(typeof persona_2) //object
console.log(persona_2 instanceof Persona) // Devuelve true