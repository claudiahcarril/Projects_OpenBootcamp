// PROGRAMACIÓN ORIENTADA A OBJETOS

// Declarando un objeto
const persona = {
    nombre: "Claudia",
    edad: 32,
    isDeveloper: true,
    saludo: function() {
        console.log("hola")
    }
}
// console.log(persona)
persona.saludo()

// Definiendo otra persona

const otra_persona = {
    nombre: "Miguel",
    edad: 15,
    isDeveloper: false,
    saludo: function() {
        console.log("hola")
    }
}

otra_persona.saludo()

// Función que crea un objeto => FACTORY FUNTION
const creaPersona = (nombre, edad, isDeveloper) => {
    return {
        nombre, // Esto es igual a nombre: nombre
        edad,
        isDeveloper,
        saludo: function() {
            console.log("Hello")
        }
    }
}

const nueva_persona = creaPersona("Juan", 23, true)
console.log(nueva_persona)

const nueva_persona_2 = creaPersona("Maria", 44, false)