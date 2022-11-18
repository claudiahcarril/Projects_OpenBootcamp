// LocalStorage

// localStorage.setItem("nombre", "Claudia")
// localStorage.setItem("nombre", "Maria")

console.log(localStorage.getItem("nombre"))

localStorage.setItem("persona", JSON.stringify({nombre: "claudia", edad: 32}))
console.log(JSON.parse(localStorage.getItem("persona")))

// JSON.stringify -> convierto un objeto/array en string
// JSON.parse -> convierte un objeto convertido a través de stringify en un objeto de Javascript

localStorage.removeItem("nombre")



//Session Storage

sessionStorage.setItem("nombre-sesion", "Claudia")


// Cookies
document.cookie = "nombreCookie=ClaudiaCookie"

document.cookie = "nombreCaducidad=Nombre; expires" + new Date(2023, 0, 1).toUTCString()

console.log(document.cookie)

