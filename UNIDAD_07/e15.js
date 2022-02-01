// 15. Crea un programa tal que al clickar en un botón anime un cuadrado moviéndolo a la derecha
// 250 px y lo agrande 150 px.

$(function () {

    $(".click").click(function () {
        $("#cuadro").animate({
            //height: #cuadro.height + 150,
            height: '250px',
            width: '250px',
            left: '250px'
            //right: '250px'
        });
    });
});