<?php

$recipient = trim($_POST["mail"]);

$phone = trim($_POST["phone"]);
$name = trim($_POST["name"]);
$time = trim($_POST["time"]);
$count = trim($_POST["countPeople"]);
$type = trim($_POST["type"]);
$message = "Замовлення бронювання: \n
Тип бронювання: $type \n
Кількість людей: $count \n
Час: $time \n
Прізвище Ім'я замовника: $name \n
Номер телефону замовника: $phone \n
             ";

$page_title = "Бронювання";

mail($recipient, $page_title, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recipient");
