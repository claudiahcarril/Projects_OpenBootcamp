// FUNCIONES TIPO FLECHA => (Funciones anónimas)

const array = [1, 5, 6, 2, 7, 12, 8, 92];

const array2 = array.map((valor) => valor * 2)

console.log(array2)


// Definiendo funciones tipo flecha
const dobleDelValor = valor => valor * 2

const array3 = array.map(dobleDelValor)

console.log(array3)
