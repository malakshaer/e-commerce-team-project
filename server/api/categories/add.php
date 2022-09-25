<?php

include("../../connection.php");


$name = $_POST["name"];
$seller_id = $_POST["seller_id"];

$query = $mysqli->prepare("INSERT INTO categories(name,seller_id) VALUE (?,?)");
$query->bind_param('ss', $name,$seller_id);
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
