// FECHAS

// Inicializar fechas
const fecha = new Date() // Fecha de ahora
console.log(fecha)

// Atención! Los meses inicializan en 0 (0 = Enero, 11 = Diciembre)
const fecha2 = new Date(1990, 7, 9, 1, 45)
console.log(fecha2)

// OTra forma de inicializar fecha -- MILISEGUNDOS (0 = 1 Enero 1970)
const fecha3 = new Date(1000000000000)
console.log(fecha3)

// Otra forma
const fecha4 = new Date("August 09, 1990")
console.log(fecha4)



// CÓMO COMPARAR 2 FECHAS
// Saber si hoy es posterior a fecha 2

console.log(fecha < fecha2)



const fecha5 = new Date(1990, 7, 9, 1, 45)
console.log(fecha5)

console.log(fecha2 === fecha5) // ERROR - No se pueden comparar fechas de esta manera

// .getTime() --> Para comparar fechas hay que pasarlas a milisegundos
console.log(fecha2.getTime() === fecha5.getTime()) // OK - Esta es la forma de comparar la igualdad entre fechas


// Cómo obtener el día, el mes y el año de una fecha
// OBTENER DÍA
console.log(fecha2.getDate())

//OBTENER MES (0 = Enero, 11 = Diciembre)
console.log(fecha2.getMonth() + 1 )

// OBTENER AÑO
console.log(fecha2.getFullYear())



// Cómo mostrar una fecha en una string
// .toLocalDateString
// https:// developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objets/Date/toLocaleDateString
console.log(fecha2.toLocaleDateString("es"))