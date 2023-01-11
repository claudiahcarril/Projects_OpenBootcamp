// Esto es un comentario en  TS

import { deleteAllCookies, deleteCookie, getCookieValue, setCookie } from 'cookies-utils'

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





// --------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------
// FUNCIONES

/**
 * Función que muestra un saludo por consola
 */
function saludar() {
    let nombre = "Claudia"
    console.log(`Hola ${nombre}`)    
}

// Invocación de la función
saludar()


/**
 * Función que muestra un saludo por consola a una persona
 * @param nombre Nombre de la persona a saludar
 */
function saludarPersona(nombre: string) {
    console.log(`Hola ${nombre}`) 
}

saludarPersona("Claudia")


/**
 * Función que muestra un adiós por consola a una persona
 * @param nombre Nombre de la persona a saludar, por defecto será "Pepe"
 */
function despedirPersona(nombre: string = "Pepe") {
    console.log(`Adiós ${nombre}`)
}

despedirPersona() // Adiós Pepe
despedirPersona("Alba") // Adiós Alba


/**
 * Función que muestra un adiós por consola a una persona
 * @param nombre (OPcional) Nombre de la persona a despedir
 */
function despedidaOpcional(nombre?: string | undefined) {
    if (nombre) {
        console.log(`Adiós ${nombre}`)
    } else {
        console.log(`Adiós`)
    }
}

despedidaOpcional() // Adiós
despedidaOpcional("Juanjo") // Adiós Juanjo



function variosParams(nombre: string, apellidos?: string, edad: number = 18 ) {
    if (apellidos) {
        console.log(`${nombre} ${apellidos} tiene ${edad} años`)
    } else {
        console.log(`${nombre} tiene ${edad} años`)
    }
}

variosParams("Martin") // Martín tiene 18 años
variosParams("Martín", "Pérez") // Martín Pérez tiene 18 años
variosParams("Martín", undefined, 30) // Martín tiene 30 años
variosParams("Martin", "Pérez", 30) // Martín Pérez tiene 30 años
variosParams(nombre="Martín", apellidos="Pérez") // Martín Pérez tiene 30 años



function ejemploVariosTipos(a: string | number) {
    if (typeof(a) === 'string') {
        console.log("A es un string")
    } else if (typeof(a) === 'number') {
        console.log("A es un number")
    }
    else {
        console.log("A no es un number ni un string")
        throw Error ("A no es un string ni un number")
    }
}

ejemploVariosTipos("Hola")
ejemploVariosTipos(3)

/**
 * 
 * @param nombre Nombre de la persona
 * @param apellidos Apellidos de la persona
 * @returns Nombre completo de la persona
 */
function ejemploReturn(nombre: string, apellidos: string): string | number{
    return `${nombre} ${apellidos}`
}

const nombreCompleto = ejemploReturn("Claudia", "Hernández")
console.log(nombreCompleto) // Claudia Hernández
console.log(ejemploReturn("Claudia", "Hernández")) // Claudia Hernández


/**
 * Función con factor de propagación
 * @param nombres es una lista de nombres de string
 */
function ejemploMultipleParams(...nombres: string[]){
    nombres.forEach((nombre) => {
        console.log(nombre)
    })
}

ejemploMultipleParams("Claudia")
ejemploMultipleParams("Claudia", "Laura", "Pepe")


const lista = ["Alberto", "Sandra"]
ejemploMultipleParams(...lista)



// --------------------------------------------------------------------------------------
// ARROW FUNCTIONS

type Empleado = {
    nombre: string,
    apellidos: string,
    edad: number
}

let empleadoMartin: Empleado = {
    nombre: "Claudia",
    apellidos: "Hernández",
    edad: 32
}

const mostrarEmpleado = (empleado: Empleado) => `${empleado.nombre} tiene ${empleado.edad} años`

// Llamamos a la función flecha
mostrarEmpleado(empleadoMartin)

const datosEmpleado = (empleado: Empleado): string => {
    if (empleado.edad > 70) {
        return `Empleado ${empleado.nombre} está en edad de jubilación`
    } else {
        return `Empleado ${empleado.nombre} está en edad laboral`
    }
}

datosEmpleado(empleadoMartin) // Empleado Martín está en edad laboral

const obtenerSalario = (empleado: Empleado, cobrar: () => `Cobrar`) => {
    if (empleado.edad > 70) {
        return 
    } else {
        cobrar() // callback a ejecutar
    }
}


const cobrarEmpleado = (empleado: Empleado) => {
    console.log(`${empleado.nombre} cobra su salario`)
}

obtenerSalario(empleadoMartin, () => 'Cobrar')



// --------------------------------------------------------------------------------------
// FUNCIONES ASÍNCRONAS Async Function

async function ejemploAsync(): Promise<string> {
    await console.log("Tarea a completar antes de seguir con la secuencia de instrucciones")
    console.log("Tarea completada")
    return "Completado"
}

ejemploAsync().then((respuesta) => {
    console.log("Respuesta", respuesta)
}).catch((error) => {
    console.log("Ha habido un error", error)
}).finally(() => "Todo ha terminado")


// Generators (Funciones generadoras)
function* ejemploGenerator() {

    // yield --> para emitir valores
    let index = 0
    while (index < 5) {
        // Emitimos un valor incrementado
        yield index++
    }

}

// Guardamos la función generadora en una variable
let generadora = ejemploGenerator()

// Accedemos a los valores emitidos
console.log(generadora.next().value) // 0
console.log(generadora.next().value) // 1
console.log(generadora.next().value) // 2
console.log(generadora.next().value) // 3


// WORKER

function* watcher(valor: number) {
    yield valor // emitimmos el valor inicial
    yield* worker(valor) // Llamamos a las emisiones del worker para que emita otros valores
    yield valor + 4 // emitimos valor final + 4
}

function* worker(valor: number) {
    yield valor + 1
    yield valor + 2
    yield valor + 3
}

let generatorSaga = watcher(0)
console.log(generatorSaga.next().value) // 0 (lo ha hecho el watcher)
console.log(generatorSaga.next().value) // 1 (lo ha hecho el worker)
console.log(generatorSaga.next().value) // 2 (lo ha hecho el worker)
console.log(generatorSaga.next().value) // 3 (lo ha hecho el worker)
console.log(generatorSaga.next().value) // 4 (lo ha hecho el watcher)



// Sobrecarga de funciones
function mostrarError(error: string | number) {
    console.log("Ha habido un error:", error)
}




// --------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------
// PERSISTENCIA DE DATOS EN EL NAVEGADOR

// 1. LocalStorage --> Almacena los datos en el navegador (no se eliminan automáticamente)
// 2. SessionStorage --> La diferencia radica en la sesión de navegador. Es decir, los datos se persisten en la sesión de navegador
// 3. Cookies --> Tienen una fecha de caducidad y también tienen un ámbito de URL



// LocalStorage y SessionStorage
// function guardarEnLocalStorage(): void {
//     localStorage.set("Nombre", "Martín") //guardar datos
// }

// function leer():void {
//     let nombre = localStorage.length("nombre") // leer datos
// }



// Cookies
const cookieOptions = {
    name: "usuario", // string,
    value: "Martín", // string,
    maxAge: 600, // optional number (value in seconds),
    expires: new Date(2099, 10, 1), // optional Date,
    path: "/", // optional string,
  };

// Seteamos la cookie
setCookie(cookieOptions)

// Leer una cookie
let cookieUsuario = getCookieValue("usuario")

// Eliminar cookie
deleteCookie("usuario")

// Eliminar todas las cookies
deleteAllCookies()



// --------------------------------------------------------------------------------------
// GESTIÓN DE EVENTOS

// Clase temporizador
class Temporizador {
    public terminar?: (tiempo: number) => void

    public empezar(): void {
        setTimeout(() => {
            // Comprobamos que exista la función terminar como callback
            if (!this.terminar) return
            // Cuando haya pasado el tiempo, se ejecutará la función terminar
            this.terminar(Date.now())
        }, 10000)
    }
}

const miTemporizador: Temporizador = new Temporizador()

// Definimos la función del callback a ejecturar cuando termine el tiempo
miTemporizador.terminar = (tiempo: number) => {
    console.log("Evento terminado en: ", tiempo)
}

// Lanzamos el temporizador
miTemporizador.empezar() // Se inicia el timeout y cuando termine, se ejecuta la función terminar()


setInterval(() => console.log("Tic"), 1000) // Imprimir "tic" cada segundo por consola


// Eliminar la ejecución de la función
delete miTemporizador.terminar


