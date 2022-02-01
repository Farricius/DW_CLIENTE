// 9. Cargar una cadena de texto, por ejemplo un echo “hola mundo”, generada en php en
// formato json (json_encode), en un div al hacer click en un botón.

$(document).ready(function () {
    $('button#button').click(function () {
        $.ajax({
            url: this.href,
            type: 'GET',
            dataType: 'html',
            success: function (data) {
                $('#test').html(data);
            }
        });
    });
});

// $(document).ready(function(){
//   $("button").click(function(){
//     $.ajax({url: "e09.php", success: function(result){
//       $("#ŧest").html(result);
//     }});
//   });
// });

// $(function () {
//     $("#boton").click(function() {

//     $.ajax({
//             url:   'e09.php',
//             type:  'post',
//             success:  function (response) {
//                     // suma = response["valor1"] + response["valor2"];
//                     $("#test").html(texto);
//             }
//         });
//     });
// });