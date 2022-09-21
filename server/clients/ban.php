<?php

include("../connection.php");


$ban = isset($_POST["is_ban"]);
$client_id = isset($_POST["client_id"]);
$user_type_id = isset($_POST["user_type_id"]);


$query = "UPDATE users SET `is_ban` = 0   WHERE `user_type_id`=  $client_id ";
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
