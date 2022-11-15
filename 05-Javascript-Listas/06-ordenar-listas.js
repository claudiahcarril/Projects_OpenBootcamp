// COMO ORDENAR ARRAYS
// .sort() -> Modifica el array

const array = [2, 5, 9, 15, 1, 2, 0, 4];
console.log(array);

// Ordenando de mayor a menor 
array.sort((elementoAnterior, siguienteElemento) => {
    if (elementoAnterior < siguienteElemento) {
        return -1
    } else if (elementoAnterior > siguienteElemento) {
        return +1
    } else { // elementoAnterior === siguienteElemento
        return 0
    }
})

console.log(array)


// Ordenar únicamente arrays numéricos
// Ordenando de mayor a menor
const arrayNumerico = [4, 1, 7, 3, 1, 3, 56, 1, 546];

arrayNumerico.sort((a, b) => b - a)
console.log(arrayNumerico);



//////////////////////////
// Interesante en arrays de objetos 
// Quiero ordenador la lista de objetos de mayor a menor
const listaObjetos = [
    { nombre : "Leire", edad: 35},
    { nombre : "Gorka", edad: 34},
    { nombre : "Miguel", edad: 28},
    { nombre : "Lucia", edad: 3},
    { nombre : "Amaia", edad: 29},
]

// OPción 1:
// listaObjetos.sort((a, b) => {
//     if (a.edad < b.edad) {
//         return -1
//     } else if (a.edad > b.edad) {
//         return +1
//     } else {
//         return 0
//     }
// })

// Opción 2:
listaObjetos.sort((a, b) => a.edad - b.edad)

console.log(listaObjetos);