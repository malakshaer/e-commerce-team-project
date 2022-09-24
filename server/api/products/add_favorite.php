<?php

include("../../connection.php");



  $products_id = $_POST["products_id"];
  $users_id = $_POST["users_id"];

  $sql = "INSERT INTO favorites(users_id,products_id) VALUE (?,?)";
  $query = $mysqli->prepare($sql);
  $query->bind_param("ss",$users_id,$products_id);
  
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
