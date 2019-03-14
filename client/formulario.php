<?php
$mensaje =  "Nombre: ".$_POST['nombre']."\n".
            "Telefono: ".$_POST['telefono']."\n".
            "Marca: ".$_POST['marca']."\n".
            "Modelo: ".$_POST['modelo']."\n".
            "Cilindros: ".$_POST['cilindros']."\n".
            "Anio: ".$_POST['anio']."\n".
            "Motor: ".$_POST['sistemav']."\n".
            "Sistema: ".$_POST['sistema']."\n".
            "Comentario: ".$_POST['mensaje'];

$destino ="jcortizojeda@gmail.com";
$remitente=$_POST['email'];
$asunto="COTIZACION DE LA PAGINA WEB PARA UN: ".$_POST['marca'].",".$_POST['modelo'].",".$_POST['anio'];
mail($destino,$asunto,$mensaje,"FROM: $remitente");
echo"Mensaje enviado gracias por contactarnos";
?>