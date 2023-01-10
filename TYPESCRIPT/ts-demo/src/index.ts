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



// --------------------------------------------------------------------------------------
// TIPOS MÁS COMPLEJOS
// Lista de cadenas de texto
let listaTareas: string[] = ["Tarea 1", "Tarea 2"]

// Combinación de tipos en listas
// let valores = (string | number | boolean) = [false, "Hola", true, 56]


// Enumerados
enum Estados {
    "Completado" = "C",
    "Incompleto" = "I",
    "Pendiente" = "P"
}

enum PuestoCarrera {
    "Primero" = 1,
    "Segundo",
    "Tercero"
}

// Aquí se guarda un valor (string o número)
let estadoTarea: Estados = Estados.Completado

let puestoMaraton: PuestoCarrera = PuestoCarrera.Segundo


// --------------------------------------------------------------------------------------
// INTERFACES
interface Tarea {
    nombre: string,
    estado: Estados,
    importancia: number
}

// --> Podemos crear variables que sigan la interface Tarea
let tarea1: Tarea = {
    nombre: "Tarea 1",
    estado: Estados.Pendiente,
    importancia: 10
}

console.log(`Tarea: ${tarea1.nombre}`)


// --------------------------------------------------------------------------------------
// Asignación múltiple de variables

let miTarea = {
    titulo: "Mi Tarea",
    estado: Estados.Completado,
    urgencia: 1
}

// Declaración 1 a 1
let miTitulo = miTarea.titulo
let miEstado = miTarea.estado
let miUrgencia = miTarea.urgencia


// --------------------------------------------------------------------------------------
// ** FACTOR SPREAD (Propagación)
// En asignación de variables
let {titulo, estado, urgencia} = miTarea

// En listas
let listaCompraLunes: string[] = ["Leche", "Patatas"]
let listaCompraMartes: string[] = [...listaCompraLunes, "Pan", "Huevos"]
let listaCompraMiercoles: string[] = ["Carne", "Pescado"]

let listaCompraSemana = [...listaCompraLunes, ...listaCompraMiercoles]

// En objetos
let estadoApp = {
    usuario: "admin",
    session: 3,
    jwt: "Bear29830209"
}

// Cambiar un valor por propagación
let nuevoEstado = {
    ...estadoApp,
    session: 4
}


// --------------------------------------------------------------------------------------
// TYPES DE TYPESCRIPT : creando tipos propios (conjuntos de datos más complejos)
type Producto = {
    precio: number,
    nombre: string,
    anio: number
}

let coche: Producto = {
    nombre: "Audi",
    precio: 45000,
    anio: 2010
}

// --------------------------------------------------------------------------------------
// ** Condicionales
// Operadores ternarios
console.log(coche.anio < 2010 ? `Coche: ${coche.nombre} es viejo` : `Coche: ${coche.nombre} es nuevo`)

// If -  else
if (error) {
    console.log("Hay un error!")
} else {
    console.log("No hay un error")
}

// If - else if - else
if (coche.anio < 2010) {
    console.log(`Coche: ${coche.nombre} es viejo`)
} else if (coche.anio === 2010) {
    console.log(`Coche: ${coche.nombre} es de 2010`)
} else {
    console.log(`Coche: ${coche.nombre} es nuevo`)
}


// --------------------------------------------------------------------------------------
// Switch
switch (tarea1.estado) {
    case Estados.Completado:
        console.log("La tarea está completada")
        break;
    case Estados.Incompleto:
        console.log("La tarea no está completada")
        break;
    case Estados.Pendiente:
        console.log("La tarea está pendiente de comprobarse")
        break;
    default:
        break;
}



// --------------------------------------------------------------------------------------
// CApturar errores TRY CATCH
try {
    
} catch (error) {
    
}


// --------------------------------------------------------------------------------------
// BUCLES - for
let listaTareasNueva: Tarea[] = [
    {
        nombre: "Tarea 1",
        estado: Estados.Completado,
        importancia: 2
    },
    {
        nombre: "Tarea 2",
        estado: Estados.Pendiente,
        importancia: 0    
    },
    {
        nombre: "Tarea 3",
        estado: Estados.Completado,
        importancia: 15
    }
]

listaTareasNueva.forEach((tarea: Tarea, index: number) => {
    console.log(`${index} - ${tarea.nombre}`)
})


for (let index = 0; index < listaTareasNueva.length; index++) {
    const tarea = listaTareasNueva[index];
    console.log(`${index} - ${tarea.nombre}`)
}



// Bucles WHILE
while (tarea1.estado !== Estados.Completado) {
    if (tarea1.importancia == 5) {
        Estados.Completado
        break;
    } else {
        tarea1.importancia ++
    }
}


// Bucles DO WHILE (Se ejecuta al menos una vez)
do {
    tarea1.importancia++
    tarea1.estado = Estados.Completado
} while (tarea1.estado !== Estados.Completado);