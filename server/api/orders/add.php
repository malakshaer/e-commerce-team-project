<?php

  include("../../connection.php");


  
  
  $client_id = $_POST["client_id"];
  $seller_id= $_POST["seller_id"];
  $product_list = $_POST["product_list"];




  
  
  $sql = "INSERT INTO orders(client_id) VALUE (?)";
  $query = $mysqli->prepare($sql);
  $query->bind_param("s",$client_id);
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
