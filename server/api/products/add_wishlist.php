<?php

include("../../connection.php");



  $product_id = $_POST["product_id"];
  $user_id = $_POST["user_id"];

  $sql = "INSERT INTO wishlists(client_id,product_id) VALUE (?,?)";
  $query = $mysqli->prepare($sql);
  $query->bind_param("ss",$user_id,$product_id);
  
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
