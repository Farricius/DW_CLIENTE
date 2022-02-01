// 1. Crear un documento HTML con un encabezado, dos párrafos y un botón. Al pulsar el botón
// mediante el selector $(“*”) se debe ocultar todo.
$(function () {

    $(".click").click(function () {
        $("*").hide();
    });
});