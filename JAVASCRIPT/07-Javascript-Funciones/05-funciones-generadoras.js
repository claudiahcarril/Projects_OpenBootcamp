// FUNCIONES GENERADORAS
// (Sintaxis especial para funciones especiales)

// Generando un ID incremental (i + 1)
function* generaID() {
    let id = 0;
    while(true) {
        id++
        if (id === 10) {
            return id
        }
        yield id // Hace como un return pero en vez de salir de la función se queda esperando hasta que se vuelva a llamar
    }
}

const gen =generaID()
console.log(gen.next()) //value 1

// Al llamarla otra vez nos devuelve el siguiente valor
// Nos devuelve un objeto
console.log(gen.next().value) //value 2
console.log(gen.next().value) //value 3
console.log(gen.next().value) //value 4
console.log(gen.next().value) //value 5
console.log(gen.next().value) //value 6
console.log(gen.next().value) //value 7
console.log(gen.next().value) //value 8
console.log(gen.next().value) //value 9
console.log(gen.next().value) //value 10, done true (ya ha terminado la función)


