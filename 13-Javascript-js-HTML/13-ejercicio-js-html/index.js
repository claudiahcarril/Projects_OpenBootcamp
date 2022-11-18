const boton = document.querySelector("#btn")
botonInfo.addEventListener("click", () => {
    alert("Click en el botón")
})


$(() => {
    $("#btn").click(() => {
        $("btn").show("Hola, estoy utilizando jQuery")
    })


})
