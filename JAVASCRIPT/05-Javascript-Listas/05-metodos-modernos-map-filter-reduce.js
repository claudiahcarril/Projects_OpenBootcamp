// TRABAJAR CON MÉTODOS MÁS AVANZADOS
// .map()  .filter()  .reduce()

const array = ["San Sebastián", "Madrid", "Barcelona", "Alicante", "Bilbao"];

// Lo visto anteriormente para iterar .forEach()
array.forEach(v => {
    console.log(v)
})

// .map() -> Si queremos retornar un nuevo array modificando valores
const newArray = array.map((valor, indice) => {
    console.log(indice)
    return `${indice + 1} - ${valor}`
})
console.log(newArray);

// -map() --> OPTIMIZADO
const newArray2 = array.map((valor, indice) => `${indice + 1} - ${valor}`)
console.log(newArray2);



// .filter() -> 
// (Se suele utilizar con listas de objetos)

const listaObjetos = [
    { nombre : "Leire", edad: 35},
    { nombre : "Gorka", edad: 34},
    { nombre : "Miguel", edad: 28},
    { nombre : "Lucia", edad: 3},
    { nombre : "Amaia", edad: 29},
]

// Filtrando lista objetos mayores de 30 años
// Opción 1:
// const personasMayores = listaObjetos.filter(obj => {
//     if (obj.edad > 30) {
//         return true
//     } else {
//         return false
//     }
// })

// Opción 2:
const personasMayores = listaObjetos.filter(obj => obj.edad > 30)

console.log(personasMayores);

// Si queremos todos los objetos menos "Miguel"
const nuevaLista = listaObjetos.filter(obj => obj.nombre !== "Miguel")
console.log(nuevaLista);




// .reduce() -> Sirve para obtener un valor a partir de una lista (Ejemplo: sumar todas las edades)
// Puede recibir 4 parametros: (acumulado, valorActual, indice, arrayOriginal)
const valores = [3, 56, 23, 5, 90, 100];

const suma = valores.reduce((acumulado, valorActual, indice, arrayOriginal) => {
    console.log(acumulado)
    console.log(valorActual)
    console.log(indice)
    console.log(arrayOriginal)
    return acumulado + valorActual
})
console.log(suma)