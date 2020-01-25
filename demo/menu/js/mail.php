<?php
$recipient = 'batymhotel5@gmail.com';
$phone = trim($_POST["phone"]);
$name = trim($_POST["name"]);
$checkin = trim($_POST["check-in"]);
$checkout = trim($_POST["check-out"]);
$email = trim($_POST["email"]);
$countPeople = trim($_POST["countPeople"]);
$childCount = trim($_POST["childCount"]);
$roomCount = trim($_POST["roomCount"]);

$type = trim($_POST["type"]);
$message = "Бронирование: \n
Имя: $name \n
Номер: $phone \n
Email: $email \n
Check-in дата: $checkin \n
Check-out дата: $checkout \n
Количество взрослых: $countPeople \n
Количество детей: $childCount \n
Количество номеров: $roomCount \n
             ";

$page_title = "Бронирование";

mail($recipient, $page_title, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recipient");
