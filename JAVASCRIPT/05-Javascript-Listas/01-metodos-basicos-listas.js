// CÓMO TRABAJAR CON LISTAS (ARRAYS, ARREGLOS, VECTORES,...)
let var1 = 45;
let array = [1, "Hola", false, 4, null, 6, undefined, var1];

console.log(array);


// Acceder a los valores de un array a través de su posición
// array[indice] => 0, 1, 2, 3, ....
console.log(array[0]);
console.log(array[1]);


// Métodos para introducir nuevos valores en el array
// .push() y .unshift() => Mutan el valor de nuestro array
// Valores al final -> PUSH
array.push("final") ;
console.log(array);


// Valores al principio -> UNSHIFT
array.unshift("inicio");
console.log(array);


// MÉTODOS para eliminar valores en nuestros arrays
// .pop() y .shift() => Mutan el valor del array

const array2 = [1, 3, "hola", false];

// Valores al final -> POP
array2.pop();
console.log(array2);


// Valores al principio -> SHIFT
array2.shift();
console.log(array2);


// MÉTODO PARA ELIMINAR/MODIFICAR O AÑADIR VALORES EN EL ARRAY
// splice() (x, y, z)
const array3 = [1, 2, 3, 4, 5, 6];

// Eliminar valores .splice(indice, numValoresAEliminar)
array3.splice(2, 1);
console.log(array3);

// Añadir valores .splice(indice, 0, valores)
array3.splice(2, 0, "hola");
console.log(array3);

// Modificar valores .splice (indice, 1, valores)
array3.splice(2, 1, 3);
console.log(array3);
