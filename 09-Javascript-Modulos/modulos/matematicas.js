// MODULOS

function suma(a,b) {
    return a + b
}

function multiplica(a,b) {
    return a * b
}

function eleva(a,b) {
    return a ** b
}

function factorial(a) {
    // Factorial de 5: 4 * 4 * 3 * 2 * 1
    let factorial = 1
    for (let i = 2; i <= a; i++) {
        factorial *= i;
    }
    return factorial
}

// Estamos haciendo "públicas estas funciones" (para poder exportarlas)

module.exports = {
    suma,
    multiplica,
    eleva,
    factorial
}
