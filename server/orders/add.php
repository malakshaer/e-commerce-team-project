<?php

include("../connection.php");

$id = isset($_POST["id"]);
$date = isset($_POST["order_date"]);



$query = "INSERT INTO orders (id, order_date) VALUE (?,?)";
$query = $mysqli->prepare($query);
$query->bind_param("ss", $id, $date);
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
