// PRINCIPALES OPERACIONES ARITMÉTICAS
let a = 3.5;
let b = 4.8;

// Suma (+)
console.log(a + b);

// Resta (-)
console.log(a - b);

// Multiplicación (*)
console.log(a * b);

// División (/)
console.log(a / b);



// REPRESENTACIÓN DE LOS NÚMEROS EN CADENAS DE TEXTO 
console.log(typeof a);
let a_s = a.toString();

console.log(a_s);
console.log(typeof a_s);



// REDONDEO DE NÚMEROS DECIMALES
let c = 3.3;
let d = c * 3;

console.log(d);


// toFixed(X) --> pide como parámetro el número de decimales (PERO LO CONVIERTE EN STRING)
console.log(d.toFixed(3));
console.log(typeof d.toFixed(3));

let e = 1839.123456789;
let f = 265465132135453;

console.log(e.toFixed(2));
console.log(f.toFixed(2));


//toPrecision --> realiza un redondeo científico (pide como valor el número de cifras significativas)
console.log(e.toPrecision(8));
console.log(f.toPrecision(7));

// También devuelve un string
console.log(typeof e.toPrecision(7));
