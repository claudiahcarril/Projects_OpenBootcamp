// MÉTODOS DE CADENAS DE TEXTO (Parte 2)

// --> 4. Pasar a mayúscula o minúscula (viceversa)

let input = "Escorpio";
let db = "escorpio";

// tolowerCase() - toUpperCase()
console.log(input.toUpperCase());

console.log(input.toLocaleLowerCase() == db.toLocaleLowerCase());

//toLocaleUpperCase y toLocaleLowerCase --> para idiomas especídifcos que la mayúscula o minúscula es diferente (ejmplo: turco)



// --> 5. Concatenar 2 strings

let str_1 = "Hola soy la primera cadena";
let str_2 = "y yo soy la segunda";

// Opción 1:
console.log(str_1.concat(" ", str_2));

// Opción 2: (Cuidado el + con número porque puede sumarlos en vez de concatenarlos)
console.log(str_1 + " " + str_2);

//Opción 3:
console.log(`${str_1} ${str_2}`);



// --> 6. Eliminar espacios al inicio y al final
let str_3 = "     Hola soy un string con espacios al final.  "
console.log(str_3.length)

console.log(str_3.trim().length);
console.log(str_3.trimStart().length);
console.log(str_3.trimEnd().length);



// --> 7. Obtener el caracter que hay en cierta posición del string
let str_4 = "Hola soy el string número 4"

console.log(str_4.charAt(5));
console.log(str_4[5]);



// --> 8. Obtener la posición de una palabra dentro de una cadena de caracteres
let str_5 = "Hola soy Claudia y me gusta el surf. Como  me llamo Claudia";

// indexOf -> devuelve la posición de la primera letra de la palabra
console.log(str_5.indexOf("Claudia"));
console.log(str_5.charAt(9));

// Si no devuelve la palabra devolverá un -1
console.log(str_5.indexOf("Chaludia"));


// lastIndexOf -> Nos pasa la posición de la última instancia
console.log(str_5.lastIndexOf("Claudia"))