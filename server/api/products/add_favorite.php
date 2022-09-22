<?php

include("../../connection.php");

$product_id = $_POST["products_id"];
$client_id = isset($_POST["user_types_id"]);
$id = $_POST["id"];


$query = "SELECT * FROM products as p,favorites as f WHERE `f.products_id` = `p.id` = $client_id";
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
