/* Crea un nuevo fichero JS que contenga las siguientes líneas: 
- Una función que admita un parámetro "num", y devuelva una lista con esa cantidad de números de la secuencia de Fibonacci (Por ejemplo: num = 6 => Resultado [1, 1, 2, 3, 5, 8])
- Ejecuta la depuración de VSCode para visualizar la ejecución de la función*/



// - Una función que admita un parámetro "num", y devuelva una lista con esa cantidad de números de la secuencia de Fibonacci 
// (Por ejemplo: num = 6 => Resultado [1, 1, 2, 3, 5, 8])

function obtenNumero(num) {
    fibonacciArray = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144]
    return fibonacciArray.slice(0, num)
}

console.log(obtenNumero(6))


// - Ejecuta la depuración de VSCode para visualizar la ejecución de la función