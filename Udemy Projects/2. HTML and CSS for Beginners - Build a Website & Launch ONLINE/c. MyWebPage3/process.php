<?php ob_start();

    if (isset($_POST['submit'])) {
        $to = "jj.raj94@gmail.com";
        $subject = $_POST['subject'];
        $email = $_POST['email'];
        $txt = $_POST['message'];
        $headers = "From: " .$email . "\r\n" . "CC: jj.raj94@outlook.com";

        mail($to, $subject, $txt, $headers);

        header("Location: contact.html");
    }
?>