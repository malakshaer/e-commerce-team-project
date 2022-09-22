<?php

include("../connection.php");

$date = isset($_POST["order_date"]);
$client_id = $_POST("user_types_id");


$query = "INSERT INTO orders ( order_date) VALUE (?) WHERE `users_id` = $client_id";
$query = $mysqli->prepare($query);
$query->bind_param("s",$date);
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
