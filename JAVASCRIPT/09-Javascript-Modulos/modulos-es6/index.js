// import {suma, eleva, nombre } from './modulos/matematicas.js'

import * as moduloMatematicas from './modulos/matematicas.js'
import getAuthor, {libro} from './modulos/literatura.js'


const sum = moduloMatematicas.suma(4,12)
console.log(sum)


const potencia = moduloMatematicas.eleva(2, 21)
console.log(potencia)

console.log(moduloMatematicas.nombre)


console.log(getAuthor())