// CASOS MUY ESPECÍFICOS - break, continue
let lista = [1,2,3,4,5,6,7,8];

for (let i = 0; i < lista.length; i++) {
    if (lista[i] === 3) {
        continue; //continue => vuelve arriba
    }

    var j = 5;
    const k = 100;
    console.log(lista[i]);

    if (lista[i] > 5) {
        break; // break => salta cuando se cumple la condición
    }
}




// CUÁL ES EL ÁMBITO DE UN BUCLE
// (Alcance de las variables dentro del bucle)
console.log(j);
//console.log(k);
//console.log(i);

// var => variable a nivel de todo el proyecto
// let => variable a nivel del bucle (local)
// const => variable constante a nivel del bucle (local)




//LABELS
// Las etiquetas nos permiten nombrar los bucles for y while
// Nos permiten utilizar break y continue de forma controlada

// EJEMPLO CON ETIQUETA
let unidades = 0;
let decenas = 0;

bucleDecenas: while (true) {
    console.log('El número actual es: ${decenas}');
    bucleUnidades: while (true) {
        unidades++
        if (unidades === 10) {
            unidades = 0
            break bucleUnidades
        }
        if (decenas === 0) {
            console.log('El número actual es: ${decenas}${unidades}')
            break bucleDecenas
        }
    }
    decenas++
}

console.log("Ya hemos terminado")













