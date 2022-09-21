<?php

include("../connection.php");


$ban = isset($_POST["is_ban"]);
$seller_id = isset($_POST["seller_id"]);
$user_type_id = isset($_POST["user_type_id"]);

$query = "UPDATE users SET `is_ban` = 0   WHERE `user_type_id`= $seller_id ";
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
