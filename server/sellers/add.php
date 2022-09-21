<?php

include("../connection.php");

$id = isset($_POST["id"]);
$name = isset($_POST["name"]);
$email = isset($_POST["email"]);
$birthday =isset($_POST["birthday"]);
$join_date =isset($_POST["join_date"]);
$profile_img =isset($_POST["profile_img"]);
$seller_id = isset($_POST["seller_id"]);
$user_type_id = isset($_POST["user_type_id"]);


$query = "SELECT FROM users(id, name,email,birthday,join_date,profile_img) VALUE (?,?,?,?,?,?) WHERE `user_type_id` = $seller_id";
$query = $mysqli->prepare($query);
$query->bind_param("ssssss", $id, $name,$email,$birthday,$join_date,$profile_img);
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
