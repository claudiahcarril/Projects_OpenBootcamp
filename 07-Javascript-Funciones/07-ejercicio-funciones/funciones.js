/* Crea un archivo JS que contenga las siguientes líneas:
- Una función sin parámetros que devuelva siempre "true"
- Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado
- Una función generadora de índices pares automáticos */


// - Una función sin parámetros que devuelva siempre "true"
function myFunc() {
    return true
}

console.log(myFunc()) 

// - Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado
function resolveAfter5Seconds(x) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(x);
      }, 5000);
    });
  }
  
console.log(resolveAfter5Seconds("Hola soy una promesa"))

// - Una función generadora de índices pares automáticos 
function* generaID() {
    let id = 0;
    while(true) {
        id++
        if (id === 10) {
            return id
        }
        yield id 
    }
}

const gen =generaID()
console.log(gen.next())