<?php

include("../../connection.php");

  $id = $_POST["id"];
  $name = $_POST["name"];
  


  $query = $mysqli->prepare("UPDATE categories SET name = ? WHERE id = ?");
  $query->bind_param("ss", $name,$id);
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
