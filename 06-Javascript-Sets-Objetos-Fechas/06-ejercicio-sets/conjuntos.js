/* Crea un archivo llamado conjuntos.js que contenga las siguientes líneas
- Un nuevo Set con los nombres de tu familia
- Modifica el Set original añadiendo tu nombre (duplicado) (debería darte lo mismo)
- Modifica el Set original añadiendo el nombre "Javascript" (ya que empieza a formar parte de tu vida ;)*/


// - Un nuevo Set con los nombres de tu familia
 const arrayFamily = ["Claudia", "Robert", "Efi", "Luismi"]
 const setFamily = new Set(arrayFamily)
 console.log(setFamily)

// - Modifica el Set original añadiendo tu nombre (duplicado) (debería darte lo mismo)
setFamily.add("Claudia")
console.log(setFamily)

// - Modifica el Set original añadiendo el nombre "Javascript" (ya que empieza a formar parte de tu vida ;)
setFamily.add("Javascript")
console.log(setFamily)