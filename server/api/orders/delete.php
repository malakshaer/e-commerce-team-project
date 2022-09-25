<?php

include("../../connection.php");



  $client_id = $_GET["client_id"];
  
  $query =$mysqli->prepare("DELETE FROM orders WHERE id = ?");
  $query->bind_param('i', $client_id);
  $array = $query->get_result();

  $query->execute();

  if($query){
      echo "done successfully";

  }else{
      echo "something went wrong";
  }


?>

