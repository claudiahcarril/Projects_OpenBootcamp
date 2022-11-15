/* Crea un archivo llamado fechas.js que contenga las siguientes líneas
- La fecha de hoy
- La fecha de tu nacimiento
- Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento
- Una variable que contenga el día de tu nacimiento
- Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)
- Una variable que contenga el año de tu nacimiento (con 4 dígitos)*/


// - La fecha de hoy
const dateToday = new Date()
console.log(dateToday)

// - La fecha de tu nacimiento
const birthDate = new Date(1990, 7, 9)
console.log(birthDate)

// - Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento
const compDates = dateToday.getTime() > birthDate.getTime()
console.log(compDates)

// - Una variable que contenga el día de tu nacimiento
const birthDay = birthDate.getDate()
console.log(birthDay)

// - Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)
const birthMonth = (birthDate.getMonth() + 1)
console.log(birthMonth)

// - Una variable que contenga el año de tu nacimiento (con 4 dígitos)
const birthYear = birthDate.getFullYear()
console.log(birthYear)
