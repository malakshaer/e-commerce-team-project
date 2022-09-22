<?php

include("../connection.php");


$ban = isset($_POST["is_ban"]);
$client_id = isset($_POST["user_type_id"]);

$query = "UPDATE users SET `is_ban` = 1   WHERE `id`= ? ";
$query = $mysqli->prepare($query);
$query->bind_param("s", $client_id);
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
