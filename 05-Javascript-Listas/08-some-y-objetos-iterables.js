// Comos saber si algunos elementos de una lista cumplen una condición
// .some () --> (Parecido al every) Devolverá un true si alguno de los elementos cumple la condición

const array = [3, 7, 2, 4, 7, 9, 42, 35, 7865, 23, -2];

const res = array.some(valor => valor < 0)
console.log(res)


// Como saber si en el array existe un valor determinado
const existe = array.some(valor => valor === 9)
console.log(existe)


// También con lista de objetos
const listaObjetos = [
    { nombre : "Leire", edad: 35},
    { nombre : "Gorka", edad: 34},
    { nombre : "Miguel", edad: 28},
    { nombre : "Lucia", edad: 3},
    { nombre : "Amaia", edad: 29},
]

const existeMiguel = listaObjetos.some(persona => persona.nombre === "Miguel")
console.log(existeMiguel)

const existeJuan = listaObjetos.some(persona => persona.nombre === "Juan")
console.log(existeJuan)



// Cómo obtener una lista a partir de un objeto iterable (Ejemplo: string, sets, etc)
const str = "Hola soy Claudia"
console.log(str[5])

// .from --> obtener una lista a partir de un string
const ar_str = Array.from(str)
console.log(ar_str)


// También con sets
const set = new Set([2, 3, "hola", 4])
const ar_set = Array.from(set)
console.log(ar_set)




// .keys --> Cómo obtener un iterable de todos los índices de nuestro array
const keys = array.keys()
console.log(keys)

const ar_keys = Array.from(keys)
console.log(ar_keys)