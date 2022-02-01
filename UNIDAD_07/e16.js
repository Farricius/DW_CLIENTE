// 16. Crear un programa, tal que al clickar en un botón se mueva un cuadrado 100 px a la derecha y
// si dentro del cuadrado pone HELLO aumente el tamaño de la letra.

$(function () {

    $(".click").click(function () {

        // si tiene "HELLO" aumentar letra:
        if ($('#cuadro > div.field-item:contains("HELLO")')) {
            var fontSize = parseInt($("body").css("font-size"));
            fontSize = '30px';
            $("#cuadro").css({ 'font-size': fontSize });
        }

        $("#cuadro").animate({
            left: '100px'
        });
    });
});