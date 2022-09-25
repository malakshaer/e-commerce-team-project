<?php

include("../../connection.php");

if($_SERVER["REQUEST_METHOD"] == "POST"){
  
  $date = $_POST["date"];
  $client_id = $_GET["client_id"];
  $product_id = $_GET["product_id"];
  
  $query = "INSERT INTO orders(id,client_id, order_date) VALUE (?,?,?)";
  $query = $mysqli->prepare($query);
  $query->bind_param("sss",$product_id,$client_id,$date);
  $query->execute();

  if($query)
  {
    echo "done successfully!";

  }
  else
  {
    echo "Something went wrong!";
  }
}
?>
