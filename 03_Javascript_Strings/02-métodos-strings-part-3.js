// MÉTODOS DE CADENAS DE TEXTO - PARTE 3
// Expresiones regulares: https//:regexr.com

// Expresiones regulares: búsqueda más avanzada

// --> 9. Expresiones regulares: buscar todas las instancias de una palabra
let texto_largo = "Tito no es un mono cualquiera. A Tito no le gusta trepar por los árboles y odia comer plátanos. Él prefiere pasear por el bosque, oler las flores y recoger las nueces que se caen de los árboles."

console.log(texto_largo.match(/no/g));


// --> 10. Para saber si un texto contiene una palabra (Devuelve true o false)
console.log(texto_largo.includes("prefiere"));
console.log(texto_largo.includes("terremoto"));


// --> 11. Si un texto empieza con una palabra
console.log(texto_largo.startsWith("Tito"));
console.log(texto_largo.startsWith("Hola"));

// --> 12. Si un texto termina con una palabra
console.log(texto_largo.endsWith("."));
console.log(texto_largo.endsWith("árboles."))
