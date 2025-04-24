<?php 
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $service = htmlspecialchars($_POST['service']);
    $message = htmlspecialchars($_POST['message']);

    $headers = "From: $name <$email>\r\n";
    $recipient = "eli@eliudmuwowo.com";

    if (mail($recipient, $service, $message, $headers)) {
        echo "Thank you for contacting me!";
    } else {
        echo "Sorry, there was an error. Please try again.";
    }
}
?>