// 14. Crea un documento con dos capas, tal que al clickar sobre la primera se despliege hacia abajo
// la segunda mediante el método slideDown().

$(function() {

$("#divxd1").click(function(){
    $("#divxd2").slideDown();
  });
});