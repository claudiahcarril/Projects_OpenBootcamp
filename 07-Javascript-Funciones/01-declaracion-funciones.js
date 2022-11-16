// FUNCIONES 
// Qué son las funciones, cómo se declaran y cómo se utilizan
// (Bloques de código con un fin específico)

const nom = "Claudia"

saludar(nom)

function saludar(nombre) {
    console.log(`Hola ${nombre}`)
}


// PARÁMETROS

let nombre_2 = "Juan"
console.log(nombre_2)

despedir(nombre_2)

function despedir(nombre) {
    nombre = "Diego"
    console.log(`Adiós ${nombre}`)
}



///// OBJETOS
let persona = {nombre: "Claudia", apellido: "Hernández"}

saludarPersona(persona)

function saludarPersona (objeto) {
    console.log(`Hola ${objeto.nombre} ${objeto.apellido}`)
}




///// Parámetros opciones con valor por defecto
function imprimeNumero(numero = 7) {
    console.log(numero)
}

imprimeNumero()



////// Definir funciones con parámetros indeterminados 
// Factor de propagación

function imprimir(...parametros) {
    console.log(parametros)
}

imprimir(1,2, 3, 5, "hola")



// Ejemplo función suma (factor de propagación)

function suma(...nums) {
    return nums.reduce((a, b) => a + b)
}

const s = suma(1,2,3,4,5,25)
console.log(s) // Está dando undefined porque faltaba el RETURN

// Si queremos que una función nos devuelva algo necesita un RETURN


// AMBITO DE UNA FUNCIÓN
// Todo lo que definamos dentro de la función estará dentro del ámbito de la función

function multiplicar(a = 0, b = 0) {
    let variable_interna = "adiós"
    return a * b
}

console.log(multiplicar(4,9))

console.log(variable_interna) //No podemos acceder a esta variable dentro de la función desde fuera