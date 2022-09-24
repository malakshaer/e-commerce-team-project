<?php
  include("../../connection.php");

  

  $query = $mysqli->prepare("SELECT *  FROM users");
  
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

