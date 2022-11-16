// GESTIÓN DE ERRORES
const miFuncion = valor => {
    if (typeof valor === "number") {
        return 2 * valor
    }
    // return false 
    throw new Error("El valor debe ser de tipo numérico")
}

// const elDoble = miFuncion("22a") // NaN


// Gestionando el error
// 
const numero = "8"

try {
    // Código que puede fallar
    console.log("Está ejecutándose de manera correcta")
    //const doble = miFuncion(numero)
    console.log(doble)
} catch(e) {
    // En caso de fallar, quiero que ejecutes esto
    console.error("ERROR!")
    console.error(`El valor de e es: ${e}`)
} finally {
    console.log("Esto se va a ejecutar tanto si se produce algún error, como si no existe ninguno")
}


// ERRORES MÁS COMUNES
// InternalError --> Se produce cuando hay un problema interno (ej: función con recursividad)
// SyntaxError --> Se produce cuando hay un fallo de sintaxis
// TypeError --> Se produce cuando, por ejemplo, si hay una función que espera un número por parámetro y pasamos un boolean
// RangeError --> Se produce cuando se trata de acceder a una posición que sobrepasa el rango (Ejemplo: acceder al elemento 12 de un array de 10 elementos)
// ReferenceError --> Se lanza cuando no existe la referencia a la que está intentando acceder