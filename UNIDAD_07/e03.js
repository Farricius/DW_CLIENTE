// 3. En el mismo documento HTML anterior. Suponemos que el encabezado y el primer párrafo
// tienen el atributo class=”intro”.Deberás ocultar al hacer click sobre el botón, dicho párrafo.

$(function () {

    $(".click").click(function () {
        $(".intro").hide();
    });
});