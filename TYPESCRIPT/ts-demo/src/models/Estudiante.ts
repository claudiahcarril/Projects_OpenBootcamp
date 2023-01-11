import { Curso } from "./curso"

export class Estudiante {
    // Propiedades de clase
    nombre: string
    apellidos?: string
    cursos: Curso[]

    // Propiedad privada
    private ID: string = "12345"

    // Constructor
    constructor(nombre: string, cursos: Curso[], apellidos?: string) {
        // Inicializaremos las propiedades
        this.nombre = nombre
        if (apellidos) {
            this.apellidos = apellidos
        }
        this.cursos = cursos
    }

    get horasEstudiadas() {
        let horasEstudiadas = 0
        this.cursos.forEach((curso: Curso) => {
            horasEstudiadas += curso.horas
        })
        return horasEstudiadas
    }

    set ID_Estudiante(id: string) {
        this.ID = id
    }
}