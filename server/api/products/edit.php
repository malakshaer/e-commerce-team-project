<?php

include("../../connection.php");

if($_SERVER["REQUEST_METHOD"] == "POST"){
  
  $product_id = $_POST["id"];
  $name = $_POST["name"];
  $description = $_POST["description"];
  $price =isset($_POST["price"]);
  $discount_price = isset($_POST["discount_price"]);
  $picture_img = isset($_POST["picture_img"]);


  $query = "UPDATE `products` SET (name,description,price,discount_price,picture_img) = (?,?,?,?,?) WHERE `id`= $product_id";
  $query = $mysqli->prepare($query);
  $query->bind_param("sssss", $name,$description,$price,$discount_price,$picture_img);
  $query->execute();


  if($query)
  {
    echo "done successfully!";

  }
  else
  {
    echo "Something went wrong!";
  }
}
?>
