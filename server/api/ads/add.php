<?php

include("../connection.php");


$pic_url = $_POST["picture_id"];
$link = $_POST["link"];
$seller_id = $_POST["user_types_id"];
$user_id = $_POST["user_id"];

$query = "INSERT INTO `ads` ( picture_url,link) VALUE (?,?) WHERE `users_id` = $seller_id";
$query = $mysqli->prepare($query);
$query->execute();


if($query)
{
  echo "done successfully!";

}
else
{
  echo "Something went wrong!";
}

?>
