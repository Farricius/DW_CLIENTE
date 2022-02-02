// 11. Modifica el ejercicio anterior para pasar los datos del formulario en el metodo $.post
// usando el método serialize() de JQuery.

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