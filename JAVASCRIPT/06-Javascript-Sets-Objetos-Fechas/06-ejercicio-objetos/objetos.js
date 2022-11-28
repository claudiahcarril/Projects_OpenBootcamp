/* Crea un archivo llamado objetos.js que contenga las siguientes líneas
- Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)
- Una variable que obtenga tu edad a partir del objeto anterior
- Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s
- Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor*/


// - Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)
const myObject = {
    nombre: "Claudia",
    apellido: "Hernández",
    edad: 32,
    altura: 1.74,
    eresDesarrollador: true
}

// - Una variable que obtenga tu edad a partir del objeto anterior
const myAge = myObject.edad
console.log(myAge)

// - Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s
const newObject = [
    {nombre: "Verónica", apellido: "González", edad: 32, altura: 1.70, eresDesarrollador: false},
    {nombre: "Carlos", apellido: "Pérez", edad: 36, altura: 1.75, eresDesarrollador: false},
]

const listObject = {...myObject, ...newObject}
console.log(listObject)

// - Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor
const newList = listObject.sort((a, b) => a.edad - b.edad)
console.log(newList)