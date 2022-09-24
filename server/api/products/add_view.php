<?php

include("../../connection.php");

if($_SERVER["REQUEST_METHOD"] == "POST"){
    
  $id = $_GET["id"];  
  $sql = "UPDATE products SET views = views +1 where id = ?";
  $query =$mysqli->prepare($sql);
  $query->bind_param("s",$id);
  $query->execute();

  if($query){
      echo "done successfully";

  }else{
      echo "something went wrong";
  }
}

?>
