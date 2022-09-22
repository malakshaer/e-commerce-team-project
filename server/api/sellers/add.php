<?php

include("../../connection.php");

if($_SERVER["REQUEST_METHOD"] == "POST"){
  
  $id = isset($_POST["id"]);
  $name = isset($_POST["name"]);
  $email = isset($_POST["email"]);
  $birthday =isset($_POST["birthday"]);
  $password =isset($_POST["password"]);
  $join_date =isset($_POST["join_date"]);
  $profile_img =isset($_POST["profile_img"]);
  $seller_id = isset($_POST["user_types_id"]);
  
  $query = "INSERT INTO users(name,email,birthday,join_date,profile_img) VALUE (?,?,?,?,?) WHERE `id` = $seller_id";
  $query =$mysqli->prepare($query);
  $query->bind_param("sssss",$name,$email,$birthday,$joined_date,$profile_img);
  $query->execute();

  if($query){
      echo "done successfully";

  }else{
      echo "something went wrong";
  }
}

?>
