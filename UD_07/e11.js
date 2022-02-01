// 11. Crea un documento con dos tag div, dentro de cada uno de los cuales debe haber un botón
// para esconder dichos tag. Cuando se haga click en el botón se ocultará el tag y quedará el botón
// pero con el valor “Show me” en lugar de “Hide me”.

$(function () {

    $("button").click(function () {
        $(this).next().toggle();

        if ($(this).text() == "hide") {
            $(this).text("show");
        } else {
            $(this).text("hide");
        }
    });
});