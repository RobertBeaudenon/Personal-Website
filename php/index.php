<?php

$name = $_POST['full-name'];
$mailFrom = $_POST['email'];
$message = $_POST['message'];

$subject = 'From my website';
$email_body = "User name: $name. \n".
			   "User email: $mailFrom. \n".
			   "User message: $message. \n";

$to = 'robertbeaudenon@gmail.com';
$headers = "From my website :" .$mailFrom;
mail($to, $subject, $email_body, $headers);
header("Location: ./../index.html");

?>