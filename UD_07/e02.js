// 2. En el mismo documento HTML anterior. Al pulsar el botón debe ocultarse dicho botón.
// Modifícalo para que se oculte ahora con un doble click.

$(function () {

    $(".click").dblclick(function () {
        $("*").hide();
    });
});