<?php
if(isset($_POST['SEND'])){
   define('SECRET_KEY', '');
	require 'PHPMailerAutoload.php';
	require 'credentials.php';

   function getCaptcha($SecretKey){
      $Response = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=".SECRET_KEY."&response={$SecretKey}");
      $Return =json_decode($Response);
      return $Return;
   }

   $Return = getCaptcha($_POST['g-recaptcha-response']);
   var_dump($Return);

   if($Return->success == true && $Return->score > 0.5){

      $mail = new PHPMailer;

$mail->SMTPDebug = 1;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.gmail.com';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'robertbeaudenon@gmail.com';                 // SMTP username
$mail->Password = '';                           // SMTP password
$mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 587;                                    // TCP port to connect to

$mail->setFrom($_POST['email'], $_POST['name']);
$address = 'robertbeaudenon@gmail.com';
$mail->addAddress($address);     // Add a recipient
               
//$mail->addReplyTo(EMAIL);
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');

//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
//$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'From my website, From '.$_POST['email'];
$mail->Body    = $_POST['message'];
//$mail->AltBody = $_POST['message'];

if(!$mail->send()) {
	
    ?><script>alert("Your message could not be sent to Robert. Check your internet connection or try contacting him at robertbeaudenon@gmail.com");</script>
   <?php
} else {
  //  header('Location: ./../index.html');
  
   ?><script>
   alert("Thank you for getting in touch! I will get Back to you very soon.");</script>
    

   <?php

}


   } else {
      ?><script>alert("You are considered a robot by google recaptcha , refresh the page or send me an email.");</script>
    

      <?php
   }


}


?>