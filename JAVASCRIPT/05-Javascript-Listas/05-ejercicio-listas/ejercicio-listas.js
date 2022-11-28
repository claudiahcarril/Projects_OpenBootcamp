/* Crea un archivo JS que contenga las siguientes líneas:
- Una variable que contenga la lista de la compra (mínimo 5 elementos)
- Modifica la lista de la compra y añádele "Aceite de Girasol"
- Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
- Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
- Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
- Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
- Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)*/


// - Una variable que contenga la lista de la compra (mínimo 5 elementos)
const listaCompra = ["Huevos", "Plátanos", "Leche", "Zanahorias", "Pollo"]

// - Modifica la lista de la compra y añádele "Aceite de Girasol"
listaCompra.push("Aceite de Girasol")
console.log(listaCompra)

// - Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
listaCompra.pop()
console.log(listaCompra)

// - Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
const peliculasFavoritas = [
    { titulo : "El padrino", director: "Francis Ford Coppola", fecha: 1972},
    { titulo : "El club de la lucha", director: "David Fincher" , fecha: 1999},
    { titulo : "La lista de Schindler", director: "Steven Spielberg", fecha: 1993},
]

// - Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
const newFilms = peliculasFavoritas.filter(obj => obj.fecha > 1990)
console.log(newFilms)

// - Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
const directors = peliculasFavoritas.map(obj => obj.director)
console.log(directors)

// - Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
const filmsTitles = peliculasFavoritas.map(obj => obj.titulo)
console.log(filmsTitles)

// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
const filmList1 = directors.concat(filmsTitles)
console.log(filmList1)

// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
const filmList2 = [...directors, ...filmsTitles]
console.log(filmList2)