// FUNCIONES ASÍNCRONAS 
// Cuando hacemos una llamada a una API pueden tardar en responder

function miAsinc() {
    // Hace una llamada a una base de datos externa
    // También puede que no llegue porque nos esté dando algún error
}


// PROMESAS (Pueden o no ejecutarse de forma exitosa)
// Forma de controlar los éxitos y los rechazos
// Admite una función ejecutora (admite 2 parámetros: resolve y reject)
const miPromesa = new Promise((resolve, reject) => {
    const i = Math.floor(Math.random() * 2)
    // Si está todo correcto
    if (i !== 0) {
        resolve()
    } else {
        reject()
    }
})


// Cómo consumir estas promesas
miPromesa
    .then(() => console.log("Se ha ejecutado de forma correcta"))
    .catch(() => console.log("ERROR"))
    .finally(() => console.log("Yo me ejecuto siempre"))

