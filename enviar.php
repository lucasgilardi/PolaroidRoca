<?php

$nombre = $_POST['fname'];
$apellido = $_POST['lname'];
$mail = $_POST['mail'];
$tel = $_POST['tel'];
$mes = $_POST['mes'];

$header = 'From:' . $mail . " \r\n";
$header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
$header .= "Mime-Version: 1.0 \r\n";
$header .= "Content-Type: text/plain";

$mensaje = "Este mensaje fue enviado por " . $nombre . ",\r\n";
$mensaje .= "Su email es: " . $mail . " \r\n";
$mensaje .= "Mensaje: " . $_POST['mes'] . " \r\n";
$mensaje .= "Enviado el " . date('d/m/Y', time());

$para = 'polaroidbycami@hotmail.com'; 
$asunto = 'Contacto desde el sitio web'

mail($para, $asunto, utf8_decode($mensaje), $header);

header('Location:index.html');

?>