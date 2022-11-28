// Cómo unir dos listas .concat(lista2)

const lista1 = ["hola", 2, false, null];
const lista2 = ["adiós", 8, true, undefined];

// Devuelve una nueva lista concatenada
console.log(lista1.concat(lista2));
// No muta los valores de la lista
console.log(lista1);

const lista3 = lista1.concat(lista2);
console.log(lista3);



// COMO UNIR DOS LISTAS CON EL FACTOR DE PROPAGACIÓN ...
// (Trata cada valor de la lista por separado)
console.log(...lista3)

const lista4 = [...lista1, ...lista2];
console.log(lista4);


// ERROR!! Mal entendido el concepto del factor de propagación (LISTA DE LISTAS)
const lista5 = [lista1, lista2];
console.log(lista5);

