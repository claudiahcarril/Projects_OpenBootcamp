/* Crea un nuevo fichero JS que contenga las siguientes líneas:
- Una clase llamada "Estudiante" que tenga:
- Una variable llamada nombre
- Otra variable lista llamada asignaturas con 3 asignaturas: Javascript, HTML, CSS
- Un método "obtenDatos" que devuelva un objeto con las propiedades nombre y asignaturas
- Crea una nueva instancia de "Estudiante"
- Haz la llamada al método obtenDatos*/


// - Una clase llamada "Estudiante" que tenga:
// - Una variable llamada nombre
// - Otra variable lista llamada asignaturas con 3 asignaturas: Javascript, HTML, CSS
// - Un método "obtenDatos" que devuelva un objeto con las propiedades nombre y asignaturas

class Estudiante {
    constructor(nombre, asignaturas) {
        this.nombre = nombre
        this.asignaturas = asignaturas
    }

    obtenDatos() {
        console.log(`Hola, mi nombre es ${this.nombre} y mis asignaturas son ${this.asignaturas}`)
    }
}

// - Crea una nueva instancia de "Estudiante"

const newEstudiant = new Estudiante("Claudia", ["Javascript", "HTML", "CSS"])
console.log(newEstudiant)

// - Haz la llamada al método obtenDatos
newEstudiant.obtenDatos()


