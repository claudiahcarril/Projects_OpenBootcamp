// INHERITANCE (HERENCIA)

class Persona {
    _nombre
    _edad
    constructor(nombre, edad, isDeveloper) {
        this._nombre = nombre
        this._edad = edad
    }

    saludo() {
        console.log(`Hola, mi nombre es ${this._nombre}, tengo ${this._edad} años.`)
    }

}

// Creando subclase
class Desarrollador extends Persona {
    constructor(nombre, edad, lenguaje) {
        super(nombre, edad)
        this.lenguaje = lenguaje
    }
    saludo() { // Polimorfismo (reescribiendo)
        super.saludo()
        console.log(`Y soy desarrolladora de ${this.lenguaje}`)
    }
}

const nuevodev = new Desarrollador("Claudia", 32, "Javascript")
console.log(nuevodev)
nuevodev.saludo()




// POLIMORFISMO

