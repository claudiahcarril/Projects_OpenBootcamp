// COMPARACIONES

// IGUALADAD
 if (5 == 5) {
    console.log("5 es igual a 5")
 }


 let a = 5;
 console.log(typeof a)
 let b = "5";
 console.log(typeof b)

 // == solo compara el valor
 // === compara el valor y el tipo

 if (a == b) {
    console.log("a es igual a b - Débil")
 }


 if (a === b) {
    console.log("a es igual a b - Débil")
 }


 // DESIGUALADAD
 let c = 4;
 let d = "4";

 // Básica
 if (c != d) {
    console.log("C es diferente a D - Débil")
 }

 if (c !== d) {
    console.log("C es diferente a D - Fuerte")
 }


 // MAYORES Y MENORES
 let max = 10;
 let min = 5;

 if (max > min) {
    console.log("Max es mayor que min")
 }

 if (max >= 10) {
    console.log("Max es mayor o igual que")
 }

 if (min < max) {
    console.log("Max es menor que min")
 }

 if (min <= max) {
    console.log("Max es menor o igual que")
 }