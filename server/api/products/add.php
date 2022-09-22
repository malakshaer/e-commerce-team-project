<?php

include("../../connection.php");

if($_SERVER["REQUEST_METHOD"] == "POST"){
  $id = $_POST["id"];
  $name = $_POST["name"];
  $description = $_POST["description"];
  $price =$_POST["price"];
  $discount_price = $_POST["discount_price"];
  $picture_img = $_POST["picture_img"];
  

  $sql = "INSERT INTO products( name,description,price,discount_price,picture_img) VALUE (?,?,?,?,?)";
  $query =$mysqli->prepare($sql);
  $query->bind_param("sssss",$name, $description, $price,$discount_price,$picture_img);
  $query->execute();

  if($query){
      echo "done successfully";

  }else{
      echo "something went wrong";
  }
}

?>
