<?php

$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$text_comment = $_POST['text_comment'];

    /*ЕСЛИ ВСЕ ПОЛЯ ЗАПОЛНЕНЫ НАЧИНАЕМ СОБИРАТЬ ДАННЫЕ ДЛЯ ОТПРАВКИ*/
    $to = "info@bodybalance.kz"; /* Адрес, куда отправляем письма*/
    $subject = "Сообщение из формы обратной связи на сайте"; /*Тема письма*/
    $headers = "MIME-Version: 1.0\r\n";
    $headers .= "Content-type: text/html; charset=utf-8\r\n";
    $headers .= "From: <mail@bodybalance.kz>\r\n";/*ОТ КОГО*/
    /*ВО ВНУТРЬ ПЕРЕМЕННОЙ $message ЗАПИСЫВАЕМ ДАННЫЕ ИЗ ПОЛЕЙ */
    $message .= "Имя пользователя: ".$name."\n <br>";
    $message .= "Почта: ".$email."\n <br>";
    $message .= "Телефон: ".$phone."\n <br>";
    $message .= "Сообщение: ".$text_comment."\n";

    /*ДЛЯ ОТЛАДКИ ВЫ МОЖЕТЕ ПРОВЕРИТЬ ПРАВИЛЬНО ЛИ ЗАПИСАЛИCM ДАННЫЕ ИЗ ПОЛЕЙ*/

    $send = mail($to, $subject, $message, $headers);
?>
