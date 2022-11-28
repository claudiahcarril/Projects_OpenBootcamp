// Carga y sobrecarga de funciones

function saludar() {
    hola()
}

function hola() {
    console.log("Hola! SOy la función hola()")
}

saludar()

// El intérprete está:
// 1. Ejecuta la función global()                                                               --> CARGA: global()
// 2. Se encuentra con saludar () y la pone por encima de global()                              --> CARGA: saludar() global()
// 3. Cuando entra en saludar() se da cuenta de que tiene que llamar a la función hola()        --> CARGA: hola() saludar global()
// 4. Cuando termina la función hola() la quita de la carga                                     --> CARGA: saludar() global()
// 5. Vuelva a la global()                                                                      --> CARGA: global()

// --> Optimización de memoria por parte de JS


// Stack Over Flow (Sobrecarga de funciones)
// (Puede pasar en funciones recursivas --> Función que hace referencia a sí misma)

// function recursivo() {
//     recursivo()
// }
