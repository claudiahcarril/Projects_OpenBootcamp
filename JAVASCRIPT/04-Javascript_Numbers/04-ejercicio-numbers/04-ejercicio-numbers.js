/* Crea un archivo JS que contenga las siguientes líneas:
- Una variable que contenga tu altura en centímetros (entero)
- Una variable que contenga tu altura en metros (número de coma flotante)
- Una variable que contenga tu peso en kilogramos (número de coma flotante)
- Una variable que contenga tu altura en metros redondeada hacia arriba
- Una variable que contenga tu peso en kilogramos redondeado hacia abajo
- Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" es igual al máximo valor que se puede obtener en Javascript*/



// Una variable que contenga tu altura en centímetros (entero)
let altura = 174

// Una variable que contenga tu altura en metros (número de coma flotante)
let altura_metros = 1.74

// Una variable que contenga tu peso en kilogramos (número de coma flotante)
let peso = 61.5

// Una variable que contenga tu altura en metros redondeada hacia arriba
let round_altura = altura_metros.toFixed();
console.log(round_altura)

// Una variable que contenga tu peso en kilogramos redondeado hacia abajo
let round_peso = Math.floor(peso);
console.log(round_peso)

// Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" es igual al máximo valor que se puede obtener en Javascript*/
let max_valor_JS = false;
if (Number.MAX_VALUE === Number.MAX_VALUE + 1) {
    max_valor_JS = true;
    console.log(max_valor_JS);
} else {
    console.log(max_valor_JS)
}


