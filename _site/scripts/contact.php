<?php

if(isset($_POST['email'])) {
	function died($error) {
		// your error code can go here
		echo "Error yo";
		die();
	}


	// validation expected data exists
	if(!isset($_POST['first_name']) ||
		!isset($_POST['last_name']) ||
		!isset($_POST['message'])) {

		died('We are sorry, but there appears to be a problem with the form you submitted.');
	}

	$first_name = $_POST['first_name']; // required
	$last_name = $_POST['last_name']; // required
	$message = $_POST['message']; // required
	$position = $_POST['position'];
	$type = $_POST['type'];

	// EDIT
	$email_to = "nada.fadali@gmail.com";
	$email_subject = $first_name . "Contacted Hasala [".$type."]";


	function clean_string($string) {
		$bad = array("content-type","bcc:","to:","cc:","href");
		return str_replace($bad,"",$string);
	}

	$email_message .= .clean_string($first_name)." ".clean_string($last_name)." sent this message \n";
	$email_message .= $message;

	// create email headers

	$headers = 'From: '.$email_from."\r\n".
	'Reply-To: '.$email_from."\r\n" .
	'X-Mailer: PHP/' . phpversion();
	@mail($email_to, $email_subject, $email_message, $headers);


?>

