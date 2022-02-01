// 12. Crea un documento con un botón, tal que al clickarlo como gestor de evento, agrege la
// opacidad de tres elementos div mediante el método fadeIn(). El primer fadeIn() ejecútalo sin
// parámetros, el segundo de manera lenta y el tercero en tres milisegundos.

//$(document).ready(function(){

$(function() {

$(".fad").click(function(){
    $("#divxd1").fadeToggle();
    $("#divxd2").fadeToggle("slow");
    $("#divxd3").fadeToggle(3000);
  });
});

  