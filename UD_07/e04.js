// 4. Realiza el mismo código que en el script 3 pero ahora selecciona dicho párrafo mediante otro
// selector. (p:first)

$(function () {

    $(".click").click(function () {
        $("p:first").hide();
    });
});