<?php

include("../../connection.php");


  
  
  $name = $_POST["name"];
  $email = $_POST["email"];
  $password =$_POST["password"];
  $profile_img =$_POST["profile_img"];
  $user_type_id = 2;
  
  $query1 = "INSERT INTO users(name,email,profile_img,password,user_type_id) VALUE (?,?,?,?,?)";
  $query =$mysqli->prepare($query1);
  $query->bind_param("sssss",$name,$email,$profile_img,$password,$user_type_id);
  $query->execute();

  if($query){
      echo "done successfully";

  }else{
      echo "something went wrong";
  }


?>
