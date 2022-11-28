/* Crea un nuevo proyecto de Node:
- Instala la dependencia Winston
- En el archivo index.js crea una función que devuelva un error con un mensaje personalizado
- Registra el error en un archivo a través de un try...catch*/


// - Instala la dependencia Winston
// - En el archivo index.js crea una función que devuelva un error con un mensaje personalizado
const funcionError = valor => {
    if (typeof valor === "number") {
        return 2 * valor
    }
    throw new Error("Tienes que poner un valor numérico")
}

const numero = funcionError("8dsfds")

try {
    console.log("Está ejecutándose de manera correcta")
} catch(e) {
    console.error("ERROR!")
    console.error(`El valor de e es: ${e}`)
} 




// - Registra el error en un archivo a través de un try...catch