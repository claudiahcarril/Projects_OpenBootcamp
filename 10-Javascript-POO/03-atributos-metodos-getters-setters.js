// ÁMBITO DE CLASES (MÉTODOS PRIVADOS Y PÚBLICOS)

class Persona {
    // Private -> # (Solo se puede acceder desde dentro de la clase)
    // Atributos y métodos privados con #
    #nombre
    #edad
    #obtenedad

    // Protected -> _  (Solo se puede acceder desde dentro de la clase y desde clases descendientes)
    // Atributos y métodos protegidos con _
    _isdeveloper = true

    constructor(nombre, edad) {
        this.#nombre = nombre
        this.#edad = edad
    }

    saludo() {
        console.log(`Hola, mi nombre es ${this.nombre}, tengo ${this.edad} años.`)
    }

    #obtenNombre() { // Función GETTER -> Nos permite acceder (de forma controlada)  a algún atributo protegido
        return this.#nombre
    }

    getEdad() { // Función GETTER ->
        return this.#edad
    }

    setEdad(nuevaedad) {  // Función SETTER ->
        this.#edad = nuevaedad
    }

}


const persona = new Persona("Claudia", 32)
// console.log(persona)
// console.log(persona.nombre)
persona.saludo()



// MÉTODOS Y VARIABLES PRIVADOS Y PROTEGIDOS (Para que no se pueda cambiar)
persona.nombre = "Adiós"
console.log(persona)

// console.log(persona.#obtenNombre())



/////////////////////
// GETTERS -> Métodos que nos permiten obtener atributos/métodos privados o protegidos
// EJEMPLO:

// #obtenNombre() { // Función GETTER -> Nos permite acceder (de forma controlada)  a algún atributo protegido
//     return this.#nombre
// }


// Las getter tienen que poder acceder a los atributos/métodos privados o protegidos
const edad = persona.getEdad()
console.log(edad)



/////////////////////
// SETTERS -> Métodos que nos permiten cambiar el valor de alguno de los aributos/métodos privados o protegidos
// (Ejemplo: quiero cambiar la edad de la persona)

persona.setEdad(34)
console.log(persona.getEdad()) //Cambia de 32 a 34