<?php

include("../../connection.php");

  $categories_id = $_GET["categories_id"];
  $name = $_POST["name"];
  $description = $_POST["description"];
  $price =$_POST["price"];
  $discount_price = $_POST["discount_price"];
  $picture_img = $_POST["picture_img"];


  $query = $mysqli->prepare("UPDATE products SET name = ?, description = ?, price = ?, discount_price = ?, picture_img = ? WHERE id = $categories_id");
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

?>
