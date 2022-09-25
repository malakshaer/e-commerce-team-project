<?php

include("../../connection.php");


  
  $name = $_POST["name"];
  $description = $_POST["description"];
  $price =$_POST["price"];
  $discount_price = $_POST["discount_price"];
  $picture_img = $_POST["picture_img"];
  $category_id = $_POST["category_id"];
  

  $sql = "INSERT INTO products( name,description,price,discount_price,picture_img,category_id) VALUE (?,?,?,?,?,?)";
  $query =$mysqli->prepare($sql);
  $query->bind_param("ssssss",$name, $description, $price,$discount_price,$picture_img,$category_id);
  $query->execute();

  if($query){
      echo "done successfully";

  }else{
      echo "something went wrong";
  }


?>
