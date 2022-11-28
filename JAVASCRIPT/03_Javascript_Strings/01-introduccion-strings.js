// STRINGS

let str_dbl = "Hola soy un texto con comillas dobles";
let str_sng = 'Hola soy un texto con comillas simples';


console.log(str_dbl);
console.log(str_sng);


let str_comillas = 'El otro día me dijo literalmente "ve a sacar la basura "'


// COMILLAS INVERTIDAS (BACKTICKS)
let str_backticks = `Hola esto es una string con backticks` 
console.log(str_backticks)

//Funcionalidad extra (permite introducir variables)
let nombre = "Claudia";
let saludo = `Hola, ${nombre} bienvenida`

console.log(saludo)


// PLANTILLAS HTML (los `` permite saltos de línea)

let plantilla = `
<html>
    <h1>Página web de ${nombre}</h1>
    <p>Este es un párrafo</p>
</html>
`
console.log(plantilla)


// INTRODUCCIÓN DE VARIABLES EN HTML

let libros = ["Empieza por el porqué", "El monje que vendió su ferrari", "El poder del ahora"]

