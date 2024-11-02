<?php
require '../vendor/phpmailer/phpmailer/PHPMailerAutoload.php';
// Check for empty fields
if(empty($_POST['name'])  		||
   empty($_POST['email']) 		||
   empty($_POST['phone']) 		||
   empty($_POST['message'])	||
   !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
   {
	echo "No arguments Provided!";
	return false;
   }

$mail = new PHPMailer;

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.gmail.com';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'keerthi@effectivesolutions.lk';                 // SMTP username
$mail->Password = 'keerthi123';                           // SMTP password
$mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 587;                                    // TCP port to connect to
	
$name = $_POST['name'];
$email_address = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];

$mail->setFrom('keerthi@effectivesolutions.lk');
$mail->addAddress('keerthi@effectivesolutions.lk');     // Add a recipient
$mail->addReplyTo($email_address);
$mail->Subject = "Website Contact Form:  $name";
$mail->Body = "You have received a new message from your website contact form.\n\n"."Here are the details:\n\nName: $name\n\nEmail: $email_address\n\nPhone: $phone\n\nMessage:\n$message";

if(!$mail->send()) {
//   echo 'Message could not be sent.';
//   echo 'Mailer Error: ' . $mail->ErrorInfo;
   return false;
} else {
   return true;
}
	
// Create the email and send the message
//$to = 'charithprsg@gmail.com'; // Add your email address inbetween the '' replacing yourname@yourdomain.com - This is where the form will send a message to.
//$email_subject = "Website Contact Form:  $name";
//$email_body = "You have received a new message from your website contact form.\n\n"."Here are the details:\n\nName: $name\n\nEmail: $email_address\n\nPhone: $phone\n\nMessage:\n$message";
//$headers = "From: noreply@effectivesolutions.lk\n"; // This is the email address the generated message will be from. We recommend using something like noreply@yourdomain.com.
//$headers .= "Reply-To: $email_address";
//mail($to,$email_subject,$email_body,$headers);
//return true;
?>