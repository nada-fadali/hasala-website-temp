<?php

if(isset($_POST['type'])) {

	function died($error) {
		// your error code can go here
		echo "Error yo";
		die();
	}


	// validation expected data exists
	if(!isset($_POST['message'])) {

		died('We are sorry, but there appears to be a problem with the form you submitted.');
	}

	$first_name = $_POST['first_name'];
	$last_name = $_POST['last_name'];
	$message = $_POST['message']; // required
	$position = $_POST['position'];
	$email = $_POST['email'];
	$phone = $_POST['phone'];

	switch ($_POST['type']) {
		case '0':
			$type = "Corporate";
			break;
		case '1':
			$type = "Individual";
			break;
		case '2':
			$type = "CSR";
			break;
		case '3':
			$type = "Media";
			break;

		case '4':
			$type = "NGO";
			break;

		default:
			$type = "unknown";
			break;
	}

	// EDIT
	$email_to = "nada.fadali@gmail.com";
	$email_from = "root@ubuntu-512mb-lon1-01";
	$email_subject = $type . " contacted Hasala";


	function clean_string($string) {
		$bad = array("content-type","bcc:","to:","cc:","href");
		return str_replace($bad,"",$string);
	}

	$email_message = "First Name: " . clean_string($first_name) . "\n";
	$email_message .= "Last Name: " . clean_string($last_name) . "\n";
	$email_message .= "Position: " . clean_string($position) . "\n";
	$email_message .= "Email: " . clean_string($email) . "\n";
	$email_message .= "Phone: " . clean_string($phone) . "\n\n";
	$email_message .= "Message: \n" . $message;

	// create email headers

	$headers = 'From: '.$email_from."\r\n".
	'Reply-To: '.$email_from."\r\n" .
	'X-Mailer: PHP/' . phpversion();
	echo mail($email_to, $email_subject, $email_message, $headers);

}
?>
