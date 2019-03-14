// envio de correo
var sistemav;
function combo(t){
    sistemav = t;
}

function carga(){
    
    $("#c_enviar").attr("disabled", true);

    $(".c_error").remove();


        var filter=/^[A-Za-z][A-Za-z0-9_]*@[A-Za-z0-9_]+.[A-Za-z0-9_.]+[A-za-z]$/;
        var s_email = $('#c_mail').val();
        var s_nombre = $('#c_nombre').val();
        var s_telefono = $('#c_telefono').val();


        if (filter.test(s_email)){
                    sendMail = "true";
            }
            else {
                $('#c_emailerror').after("<p class='c_error' id='c_error_mail'>Ingrese e-mail valido.</p>");
                sendMail = "false";
            }

        if (s_nombre.length == 0 ){
                $('#c_nombreerror').after( "<p class='c_error' id='c_error_name'>Ingrese su nombre.</p>" );
                var sendMail = "false";
            }

        if (s_telefono.length == 0 ){
                $('#c_telefonoerror').after( "<p class='c_error' id='c_error_name'>Ingrese su número  telefonico.</p>" );
                var sendMail = "false";
            }
    
        
    if(sendMail == "true"){

        var datos = {
            "nombre" : $('#c_nombre').val(),
            "email" : $('#c_mail').val(),
            "telefono" : $('#c_telefono').val(),
            "repuesto" :$('#c_nombre-repuesto').val(),
            "mensaje" : $('#c_mensaje').val()
        };

        $.ajax({
    
                data:  datos,
                url:   'formulario-repuesto.php',
                type:  'post',
    
                beforeSend: function () {
                        $("#c_enviar").val("Enviando...");
                },
    
                success:  function (response) {
                        $('form')[0].reset(); 
                        $("#c_enviar").val("Enviar");
                        $("#c_information p").html(response);
                        $("#c_information").fadeIn('slow');
                        $("#c_enviar").removeAttr("disabled"); 
                }
    
                });
                    }
                    else
                    {
                        $("#c_enviar").removeAttr("disabled");
                    }
    }

function cargaSendMail(){

    $("#c_enviar").attr("disabled", true);

    $(".c_error").remove();

        var valradsistema;

        var valradsistemaa=document.getElementsByName("radsistema");
        for(var i=0;i<valradsistemaa.length;i++)
        {
            if(valradsistemaa[i].checked)
            valradsistema=valradsistemaa[i].value;            
        }

    var filter=/^[A-Za-z][A-Za-z0-9_]*@[A-Za-z0-9_]+.[A-Za-z0-9_.]+[A-za-z]$/;
    var s_email = $('#c_mail').val();
    var s_nombre = $('#c_nombre').val();
    var s_telefono = $('#c_telefono').val();


    if (filter.test(s_email)){
                sendMail = "true";
            }
            else {
                $('#c_emailerror').after("<p class='c_error' id='c_error_mail'>Ingrese e-mail valido.</p>");
                sendMail = "false";
            }

        if (s_nombre.length == 0 ){
                $('#c_nombreerror').after( "<p class='c_error' id='c_error_name'>Ingrese su nombre.</p>" );
                var sendMail = "false";
            }

        if (s_telefono.length == 0 ){
                $('#c_telefonoerror').after( "<p class='c_error' id='c_error_name'>Ingrese su número  telefonico.</p>" );
                var sendMail = "false";
            }
    
        
    if(sendMail == "true"){

        var datos = {
            "nombre" : $('#c_nombre').val(),
            "email" : $('#c_mail').val(),
            "telefono" : $('#c_telefono').val(),
            "marca" :$('#marcaa').val(),
            "modelo" :$('#modeloo').val(),
            "anio" :$('#anioo').val(),
            "sistemav":sistemav,
            "cilindros":$('#ncilindross').val(),
            "sistema":valradsistema,
            "mensaje" : $('#c_mensaje').val()
        };

        $.ajax({
    
                data:  datos,
                url:   'formulario.php',
                type:  'post',
    
                beforeSend: function () {
                        $("#c_enviar").val("Enviando...");
                },
    
                success:  function (response) {
                        $('form')[0].reset(); 
                        $("#c_enviar").val("Enviar");
                        $("#c_information p").html(response);
                        $("#c_information").fadeIn('slow');
                        $("#c_enviar").removeAttr("disabled"); 
                }
    
                });
                    }
                    else
                    {
                        $("#c_enviar").removeAttr("disabled");
                    }
    
}
