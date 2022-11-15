// SETS (CONJUNTOS)
// (Una especie de lista pero se comporta diferente a una lista normal)
// Set -> Conjunto no ordenado de valores o elementos únicos

const array = [1, 2, 3, 4, 5, 6, 5, 1, "hola", { id: 5 }, { id: 5}]

const miSet = new Set(array);
console.log(array)
console.log(miSet)


// MÉTODOS EN SETS
// . add() --> Para añadir valores

miSet.add(9)
console.log(miSet)
miSet.add(1)
console.log(miSet)


// .delete() --> eliminar valores
miSet.delete("hola")
console.log(miSet)


// .clear() --> Eliminar todos los valores del set
// miSet.clear()
// console.log(miSet)


// .has() -> Para saber si contiene un valor (similiar al método .includes de los arrays)
console.log(array.includes(2))
console.log(miSet.has(6))


// .size -> Para saber el tamaño del set (propiedad size) (Nª de Valores únicos)
console.log(miSet.size)


// .forEach --> Para iterar
miSet.forEach(valor => {
    console.log(valor)
})


// .values --> Para obtener objeto iterable
const it_miSet = miSet.values()
console.log(it_miSet)


// Volver a convertir el set en un array (CON FACTOR DE PROPAGACIÓN)
const ar_miSet = [...miSet]
console.log(ar_miSet)