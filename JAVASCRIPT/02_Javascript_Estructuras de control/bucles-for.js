// BUCLES FOR

/* ESTRUCTURA BUCLE FOR
for (inicializacion, condicion, actualizacion) {
    // Esto es el bucle
}
*/

/* Es lo mismo:
i = i + 1
i += 1
i++
*/

// i = 0 y el bucle será hasta que sea menor que 10 y se incrementará en 1
for (let i = 0; i < 10; i++ ) {
    // Esto es el bucle
    console.log(i)
}

// i = 0 y el bucle será hasta que sea menor que 10 y se incrementará de 2 en 2
for (let i = 0; i < 10; i += 2) {
    // Esto es el bucle
    console.log(i)
}


// Iterando listas con for
let lista = [1,4,6,2,3,7,10,12]

for (let i = 0; i < lista.length; i++) {
    console.log(lista[i])
}

// Otra forma de iterar - ESTRUCTURA FOR.... OF
for (let valor of lista) {
    console.log(valor)
}


// ESTRUCTURA FOR...EACH
lista.forEach(valor => {
    console.log(valor)
})


// ESTRUCTURA FOR...IN
let persona = {
    nombre: "Claudia",
    apellido: "Hernández",
    edad: 32,
    isDeveloper: true,
}

let prop = "edad";
console.log(persona[prop])


for (let propiedad in persona) {
    console.log(propiedad)
    console.log(persona[propiedad])
}