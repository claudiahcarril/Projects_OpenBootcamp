// Cómo comparar listas
// .every() --> Nos dice si todos los componentes de una lista cumplen una condición

const array = [4, 6, 7, 8, 3, 6, 2, 1, -4, -7, 12, 5, -40];

const resultado = array.every(valor => {
    if (typeof valor === "number") { // Si todos los valores son números (da un true)
        return true
    } else {
        return false
    }
})

console.log(resultado)


const resultado2 = array.every(valor => {
    if (valor > 0) { // Si todos los valores son mayores que 0 (da false porque algunos son negativos)
        return true
    } else {
        return false
    }
})

console.log(resultado2)

//Opción más optima
const resultado3 = array.every(valor => valor > 0)
console.log(resultado3) 




// Comparación de listas
const arr1 = [1, 2, 3, 4]
const arr2 = [1, 2, 3, 4]

console.log(arr1 === arr2);
// da false porque las listas no se pueden comparar así

// Necesitamos crear una función para comparar las listas
// True si todos los valores son iguales entre sí (entre las 2 listas) y false si no lo son
const compararArrays = (array_1, array_2) => {
    if (array_1.length !== array_2.length) return false
    const res = array_1.every((valor, indice) => valor === array_2[indice])
        return res
}

// Función (primer array, segundo array)
// Compara las longitudes en primer lugar (si son iguales, con every se comparan los valores entre sí)

console.log(compararArrays(arr1, arr2))

const arr3 = [1, 2, 3, 6]

console.log(compararArrays(arr1, arr3))