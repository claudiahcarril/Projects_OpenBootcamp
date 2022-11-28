// --> OPERADOR value.Of() --> Obtener valores numéricos a partir de literales
let a = 2;
let b = new Number(3); //--> obtiene literalmente el valor numérico de esta variable

console.log(a);
console.log(b);

// b se sigue comportando como el número 3
console.log(a + b);  // ---> EN LA CONSOLA ES LO MISMO QUE:
console.log(a.valueOf() + b.valueOf());

// Obteniendo valor primitivo de una variable declarada
console.log(b.valueOf());

// También para Strings
let str = new String("Hola soy una string");
console.log(str);
console.log(str.valueOf())


//  --> NaN - Infinity
// NaN (Not a Number): cuando aparece significa que estamos utilizando un método numérico en algo que no es numérico
let n = Number("adiós");
console.log(n);

console.log(isNaN(n));

// Algo dividido entre 0 tiende a infinito 
let numerador = 19;
let divisor = 0;

console.log(numerador / divisor);

let divisor_2 = null;
console.log(numerador / divisor_2);




//  --> Cómo convertir los string a valores númericos con Number, parseInt y parseFloat
let numer = "5.89"
let num2 = 17.2;

console.log(typeof numer);
console.log(numer + num2); // NO SUMA (ESTÁ CONCATENANDO)

// Number: Operador nos permite convertir un string en un número
console.log(Number(numer) + num2);

// parseInt: conviertiendo a un entero
console.log(parseInt(numer)); //No coge los decimales (5)

// parseFloat: conviertiendo a un flotante
console.log(parseFloat(numer)); //Si coge los decimales (5.89)


let num3 = 4;

console.log(parseInt(num3));
console.log(parseFloat(num3));



//  --> Números hexadecimales (Números en base 16 utilizados en asignación de memoria (Ej: bits))
let numHex = '0x3a5b7'
console.log(parseInt(numHex));


//  --> Obtener los valores máximo y mínimo en JavaScript
let min_precision = Number.EPSILON // la mínima diferencia que puede haber entre 2 números
let min_valor_JS = Number.MIN_VALUE;
let max_valor_JS = Number.MAX_VALUE;

console.log(min_precision);
console.log(min_valor_JS);
console.log(max_valor_JS);