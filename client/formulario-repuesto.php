<?php
$mensaje =  "Nombre: ".$_POST['nombre']."\n".
            "Telefono: ".$_POST['telefono']."\n".
            "Repuesto: ".$_POST['repuesto']."\n".
            "Comentario: ".$_POST['mensaje'];

$destino ="jcortizojeda@gmail.com";
$remitente=$_POST['email'];
$asunto="COTIZACION DE : ".$_POST['repuesto'];
mail($destino,$asunto,$mensaje,"FROM: $remitente");
echo"Mensaje enviado gracias por contactarnos";
?>