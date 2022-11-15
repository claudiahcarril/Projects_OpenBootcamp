// OBJETOS

// Definiendo un objeto
const obj = {
    id: 4,
    nombre: "Juan",
    apellido: "González",
    isDeveloper: true,
    libros_favoritos: ["El método", "El código de la manifestación"]
}

// Accediendo a valores de propiedades
console.log(obj.nombre)


// Llamar a propiedades con variables ya declaradas
const prop = "isDeveloper"
console.log(obj[prop])


// Cómo replicar un objeto
const obj2 = obj
console.log(obj2)

obj2.nombre = "Iñigo"
console.log(obj2.nombre)


// Ha cambiado también la propiedad en el objeto original
// (Copia el mismo objeto y asigna la dirección de memoria al obj2 (Los 2 objetos apuntan al mismo sitio))
console.log(obj.nombre)


// No pasa lo mismo con otros valores
let val1 = 4
let val2 = val1

val2 = 6
console.log(val1)
console.log(val2)



// MÉTODOS
// Asignar un objeto de otro con factor de propagación (Aquí si se pueden modificar propiedades sin que cambie)

const obj3 = {...obj}
console.log(obj.nombre)
console.log(obj3.nombre)

obj3.nombre = "Claudia"
console.log(obj.nombre)
console.log(obj3.nombre)




// .sort ()  --> Cómo ordenar listas de objetos en función de una propiedad
// .sort --> muta el valor del array u objeto original
const listaPeliculas = [
    {titulo: "Lo que el viento se llevó", anyo: 1939},
    {titulo: "Titanic", anyo: 1997},
    {titulo: "Moana", anyo: 2016},
    {titulo: "El efecto mariposa", anyo: 2004},
    {titulo: "TED", anyo: 2012},
]

console.log(listaPeliculas)

listaPeliculas.sort((a, b) => a.anyo - b.anyo)
console.log(listaPeliculas)

