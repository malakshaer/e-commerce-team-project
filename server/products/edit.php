<?php

include("../connection.php");

$id = isset($_POST["id"]);
$name = isset($_POST["name"]);
$description = isset($_POST["description"]);
$price =isset($_POST["price"]);
$discount_price = isset($_POST["discount_price"]);
$picture_img = isset($_POST["picture_img"]);


$query = "UPDATE products SET (id, name,description,price,discount_price,picture_img) = (?,?,?,?,?,?) ";
$query = $mysqli->prepare($query);
$query->bind_param("ssssss", $id, $name,$description,$price,$discount_price,$picture_img);
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
