/*
Crea un archivo JS que contenga las siguientes líneas
- Una cadena de texto con tu Nombre
- Otra cadena de texto con tu Apellido
- Una cadena de texto que se llame "estudiante" concatenando tu Nombre y tu Apellido con un espacio entre medias
- Una cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante pero todo en mayúsculas
- Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minúsculas
- Una variable que contenga el número de letras de la cadena "estudiante" contando los espacios
- Una variable que contenga la primera letra del Nombre
- Otra variable que contenga la última letra del Apellido
- Una cadena de texto que elimine los espacios de la variable "estudiante"
- Una variable booleana que diga si el Nombre está contenido en la variable "estudiante"
*/

// Una cadena de texto con tu Nombre
var name = "Claudia"

// Otra cadena de texto con tu Apellido
var surname = "Hernández"

// Una cadena de texto que se llame "estudiante" concatenando tu Nombre y tu Apellido con un espacio entre medias
let estudiante = ""
estudiante = estudiante.concat(name + " " + surname)
console.log(estudiante)

// Una cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante pero todo en mayúsculas
let estudianteMayus = estudiante.toUpperCase()
console.log(estudianteMayus)

// Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minúsculas
let estudianteMinus = estudiante.toLowerCase()
console.log(estudianteMinus)

// Una variable que contenga el número de letras de la cadena "estudiante" contando los espacios
let num_string = estudiante.length
console.log(num_string)

// Una variable que contenga la primera letra del Nombre
let initial = name[0]
console.log(initial)

// Otra variable que contenga la última letra del Apellido
let final_surname = surname[8]
console.log(final_surname)

// Una cadena de texto que elimine los espacios de la variable "estudiante"
let no_spaces = estudiante.replace(" ", "")
console.log(no_spaces)

// Una variable booleana que diga si el Nombre está contenido en la variable "estudiante"
let bool_name = estudiante.includes(name)
console.log(bool_name)

