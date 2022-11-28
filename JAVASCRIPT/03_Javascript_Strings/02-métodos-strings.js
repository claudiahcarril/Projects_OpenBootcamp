// MÉTODOS MÁS UTILIZADOS CON STRINGS

// --> 1. Cómo obtener la longitud de un string
let str = "Hola soy un string";
console.log(str.length)

// --> 2. Obtener partes de cadenas de caracteres
// Tres opciones: slice() substring() substr()

// SLICE: Primer valor número por donde empieza y el segundo valor el número donde acaba
let slice_str = str.slice(5, 10);
console.log(slice_str);

// SUBSTRING:
let substring_str = str.substring(5, 10);
console.log(substring_str);

// SUBSTR: (Pasar posición inicial y longitud) --> ESTÁ OBSOLETO
let substr_str = str.substr(5, 10);
console.log(substr_str)



// --> 3. Reemplazar parte del contenido de una string
let cadena = "Hola mi nombre es Claudia";
console.log(cadena);

// REPLACE: (Valor a encontrar y valor por el que tiene que cambiar)
console.log(cadena.replace("Claudia", "Laura"));

// Por defecto el método REPLACE solo actúa sobre el primer elemento que encuentra 
// (Ejemplo: queremos cambiar todos los "los" por "cinco" --> solo cambia el primero)
let texto_largo = "Tito no es un mono cualquiera. A Tito no le gusta trepar por los árboles y odia comer plátanos. Él prefiere pasear por el bosque, oler las flores y recoger las nueces que se caen de los árboles"
console.log(texto_largo.replace("los", "cinco"));

// Para cambiar todos los elementos --> Necesitamos EXPRESIONES REGULARES
// Al utilziar la expresión regular /g (global), reemplaza todas las instancias

console.log(texto_largo.replace(/los/g, "cinco"));


