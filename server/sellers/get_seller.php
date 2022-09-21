<?php

include("../connection.php");


$seller_id = $_POST["seller_id"];

$query = "SELECT * FROM users  VALUE  WHERE `user_type_id` = $seller_id";
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
