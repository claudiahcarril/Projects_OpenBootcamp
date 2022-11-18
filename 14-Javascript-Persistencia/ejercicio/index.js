const name = "Claudia"
const lastName = "Hernández"

const persona = {nombre: "Claudia", apellido: "Hernández"}

sessionStorage.setItem(persona)
sessionStorage.getItem(persona)

localStorage.setItem(persona)
localStorage.getItem(persona)


document.cookie = "nombreCookie=ClaudiaCookie"
document.cookie = "nombreCaducidad=Nombre; expires" + new Date(2022, 10, 1).toUTCString()