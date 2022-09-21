<?php

include("../connection.php");


$seller_id = isset($_GET["seller_id"]);
$name = isset($_GET["name"]);
$email = isset($_GET["email"]);
$birthday =isset($_GET["birthday"]);
$join_date =isset($_GET["join_date"]);
$profile_img =isset($_GET["profile_img"]);


$query = "SELECT (name,email,birthday,join_date,profile_img) FROM users  WHERE `user_type_id` = $seller_id";
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
