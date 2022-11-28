// CÓMO OBTENER UNA LISTA A PARTIR DE OTRA .slice()
const array = ["hola", 1, 2, 3, true, null, "adios"];

// slice() --> No modifica el valor del array original
// .slice (indice inicio, indice final)
console.log(array.slice(1, 4));
const array2 = array.slice(2, 5);
console.log(array2);


// .slice() --> Indicando desde el final con negativos
const array3 = array.slice(2, -2);
console.log(array3);