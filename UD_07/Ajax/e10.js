// 10. Envía desde un archivo js al hacer click en un botón, los datos de un formulario que
// hayas hecho anteriormente, a un archivo php, desde donde serán impresos.
// Comprueba los valores desde la herramienta de desarrollo del navegador.

$(function () {

    $('#botonsubmit').click(function () {

        var nombre = $("#firstname").val();
        var apellido = $("#surname").val();

        var parametros = {
            "firstname": nombre,
            "surname": apellido
        };

        $.ajax({
            data: parametros,
            type: 'post',
            url: 'e10.php',
            // EN CASO DE QUE QUIERA ENVIAR.. PERO RECIBIR LUEGO DATOS (ESCRIBO UN DIV #recogida AL ÁRBOL):
            // beforeSend: function () {
            //     $("#recogida").html("Procesando...");
            // },
            // success: function (response) {
            //     $("#recogida").html(response);
            // }
        });
    });
});