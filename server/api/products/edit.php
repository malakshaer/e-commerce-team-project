<?php

include("../../connection.php");

  $id = $_POST["id"];
  $name = $_POST["name"];
  $description = $_POST["description"];
  $price =$_POST["price"];
  $discount_price = $_POST["discount_price"];
  $picture_img = $_POST["picture_img"];


  $query = $mysqli->prepare("UPDATE products SET name = ?, description = ?, price = ?, discount_price = ?, picture_img = ? WHERE id = ?");
  $query->bind_param("ssssss", $name,$description,$price,$discount_price,$picture_img,$id);
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
