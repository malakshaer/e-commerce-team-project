<?php
  include("../../connection.php");

  $client_id = $_GET["client_id"];

  $query = $mysqli->prepare("SELECT name,profile_img  FROM users WHERE id = ?");
  $query->bind_param('i', $client_id);
  $query->execute();
  $array = $query->get_result();

  $response = [];

  while($value = $array->fetch_assoc()){
      $response[] = $value;
  };

  if($response){
      echo json_encode($response); 
  }else{
      echo "error";
  }


?>

