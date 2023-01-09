// Esto es un comentario en  TS

/**
 * Generando Documentación en TS
*/

console.log("Hola TS")
console.log("Adiós TS")


// Declaración de variables en TS:
var nombre: string = "Claudia"

console.log("Hola " + nombre)
console.log("¿Qué tal", nombre, "?")
console.log(`Hola de nuevo ${nombre}`)

let email: string = "claudia@claudia.com" // Variable de ámbito local
console.log(`Email de ${nombre} es ${email}`)

const PI: number = 3.1416
// PI = PI + 1 // Error por constante

var apellidos: any = "Hernández" //Tipo any hace que la variable pueda cambiar de tipo (Peligroso)
apellidos = 3

var error: boolean 
error = false

console.log(`¿Hay error?: ${error}`)


// Instanciación múltiple de variables
let a:string,b:boolean,c:number // Instancia 3 variables sin valor inicial

a = "TypeScript" // Espera un string
b = true         // Espera un boolean
c = 8.9          // Espera un number

// -->  c: string = "" // c ya está instanciada y no deja cambiar el tipo

// TIPOS MÁS COMPLEJOS
let listaTareas: string[] = ["Tarea 1", "Tarea 2"]



// 