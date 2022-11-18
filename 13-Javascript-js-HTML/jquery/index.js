// $(selector).accion()
// $("li").hide()

// $("h1").hide()

// $(document).ready(() => {})
$(() => {
    // Selectores: id="el-1" -> #el-li (id)
    // Selectores: id="el-1" -> .el-li (class)
    // $("#el-1").hide()

    $(".hide-btn").click(() => {
        // $("h1").hide()
        $("h1").fadeOut()
    })

    $(".show-btn").click(() => {
        // $("h1").show()
        $(".h1").fadeIn()
    })

    $("li").dblclick(() => {
        $("h1").css({color: "red"})
    })

    $(".new-element").click(() => {
        $("ul").append("<li>New Element</li>")
    })
})