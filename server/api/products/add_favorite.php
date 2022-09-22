<?php

include("../../connection.php");

if($_SERVER["REQUEST_METHOD"] == "POST"){

  $product_id = $_POST["id"];
  $client_id = $_POST["user_types_id"];

  $query = "SELECT * FROM products as p,favorites as f WHERE `f.products_id` = `p.id` = $client_id";
  $query = $mysqli->prepare($query);
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
