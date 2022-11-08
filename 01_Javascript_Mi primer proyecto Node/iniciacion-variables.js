// DEFINICIÓN DE VARIABLES

var variable;
let variableLet;
const constante = "Hola soy una constante";

// Variables var pueden reasignar el valor de la variable 
var a = 1;
console.log(a);
a = 4;
console.log(a)

// Variables const (constantes) no se puede reasignar el valor
console.log(constante);
// constante = "Adiós"


// let
let b = 3;
console.log(b);
b = 5;
console.log(b)


// DIFERENCIA ENTRE LET Y VAR
// (Var afecta a todo el código y let afecta SOLO al bloque donde esté siendo declarado)

var variable = "Hola soy una variable VAR"
for (var i = 0; i < 3; i++) {
    var variable = "Soy la segunda variable"
}
console.log(variable)
// variable al ser una variable var aún reasignándola en el bucle for está afectando a la variable original


let variableLet2 = "Hola soy una variable LET"
for (let i = 0; i < 3; i++) {
    let variableLet2 = "Soy la segunda variable"
}
console.log(variableLet2)
// En el caso de let, solo afecta al bloque de código donde esté siendo definido (en el bucle for no se está reasignando)


//////////////////////////////////
// TYPEOFF (Te dice el tipo primitivo)
console.log(typeof 1);
console.log(typeof variable);
console.log(typeof true);
console.log(typeof hola);

var num = 4;
console.log(typeof num);

num = "Hola soy un número"
console.log(typeof num)