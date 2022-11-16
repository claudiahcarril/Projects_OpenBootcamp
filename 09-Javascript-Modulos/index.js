// Formas de importar/exportar módulos
// 1. CommonJS - require
// 2. Import ES6 -import

// 1. CommonJS - require
// const moduloMatematicas = require("./modulos/matematicas.js")
// // console.log(moduloMatematicas)


// const fact = moduloMatematicas.factorial(5)
// console.log(fact)

// const sum = moduloMatematicas.suma(12,90)
// console.log(sum)


// 2. Import ES6 -import

const { factorial, suma } = require("./modulos/matematicas.js")

const fact = factorial(5)
console.log(fact)

const sum = suma(12,90)
console.log(sum)