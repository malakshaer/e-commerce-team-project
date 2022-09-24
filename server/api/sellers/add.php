<?php

include("../../connection.php");

if($_SERVER["REQUEST_METHOD"] == "POST"){
  
  $id = ($_POST["id"]);
  $name = ($_POST["name"]);
  $email = ($_POST["email"]);
  $birthday =($_POST["birthday"]);
  $password =($_POST["password"]);
  $profile_img =($_POST["profile_img"]);
  
  
  $query = "INSERT INTO users(id,name,email,birthday,profile_img,password) VALUE (?,?,?,?,?,?)";
  $query =$mysqli->prepare($query);
  $query->bind_param("ssssss",$seller_id,$name,$email,$birthday,$profile_img,$password);
  $query->execute();

  if($query){
      echo "done successfully";

  }else{
      echo "something went wrong";
  }
}

?>
