<?php

include("../connection.php");

$id = isset($_POST["id"]);
$date = isset($_POST["order_date"]);



$query = "DELETE FROM orders WHERE (id, order_date) = (?,?)";

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
