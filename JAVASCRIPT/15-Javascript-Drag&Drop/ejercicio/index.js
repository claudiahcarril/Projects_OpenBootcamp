const parrafos = document.querySelectorAll(".parrafo")
const secciones = document.querySelectorAll(".seccion")

parrafos.forEach(parrafo => {
    parrafo.addEventListener("dragstart", () => {
        console.log("Inicio de arrastre")
        console.log("Estoy arrastrando el parrafo" + parrafo.innerText)
        parrafo.classList.add("dragging")
        event.dataTransfer.setData("id", parrafo.id)
        const ele_fantasma = document.querySelector(".imagen-fantasma")
        event.dataTransfer.setDragImage(ele_fantasma, 0, 0)
    })
    parrafo.addEventListener("dragend", () => {
        console.log("He terminado de arrastar")
        parrafo.classList.remove("dragging")
    })
})


secciones.forEach(seccion => {
    seccion.addEventListener("dragover", event => {
        event.preventDefault()
        event.dataTransfer.dropEffect = move
        console.log("Drag Over")
        //
    })
    seccion.addEventListener("drop", event => {
        console.log("Drop")
        const id_parrafo = event.dataTransfer.getData("id")
        console.log("Parrafo id: ", id_parrafo)
        const parrafo = document.getElementById(id_parrafo)
        seccion.appendChild(parrafo)
    })
})