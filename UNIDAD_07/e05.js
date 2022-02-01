// 5. Selecciona el primer elemento de la primera lista y oculta dicho elemento.
// Lista 1:

// • Tortilla
// • Jamón
// • Queso

// Lista 2:

// • Coca Cola
// • Leche
// • Té

$(function () {

    $("li:first").click(function () {
        $("li:first").hide();
    });
});