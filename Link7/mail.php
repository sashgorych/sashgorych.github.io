<?php

$recipient = "oleksandr.gorychan@gmail.com";

$email = trim($_POST["email"]);
$comment = trim($_POST["mess"]);
$type = trim($_POST["name"]);

$message = "email: $email \n\n Коммент: $comment ";

$page_title = " \"$type\"";

mail($recipient, $page_title, $message);
?>