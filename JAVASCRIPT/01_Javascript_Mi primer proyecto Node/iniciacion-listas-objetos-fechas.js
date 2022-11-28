// Listas, array o arreglo
const lista = [1,true,3,"hola",undefined];
console.log(lista);

const lista2 = new Array([1,true,3,"hola",undefined]);
console.log(lista2);

const lista3 = new Array(3);
lista3[0] = "Soy el primer elemento"
console.log(lista3)

const lista4 = [lista, lista2, lista3];
console.log(lista4);


// Objetos
// Definiendo objeto móvil con atributos
const movil = {
    altura: 3,
    anchura: 5,
    marca: "Xiaomi",
    isWhite: false,
    contactos: ["Gorka", "Martín"],
    tarjeta: {
        marca: "Sandisk",
        almacenamiento: 32,
    }
}

console.log(movil.anchura);

movil.anyo = 2019;
console.log(movil.anyo)



// Fechas
// Librería de apoyo para trabajar con fechas: Moment.js

const ahora = new Date();
console.log(ahora);

const fecha_milis = new Date(10); //Utilizando los milisegundos
console.log(fecha_milis);

const fecha_cadena = new Date("march 25 2020");
console.log(fecha_cadena);

const fecha_valores = new Date(2022, 0, 15); //Como en las listas, Enero empieza por 0
console.log(fecha_valores);

const dia = ahora.getDate()
const mes = ahora.getMonth() + 1
const anyo = ahora.getFullYear()

console.log (dia, mes, anyo)