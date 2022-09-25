<?php

include("../../connection.php");


  
  
  $name = $_POST["name"];
  $email = $_POST["email"];
  $password =$_POST["password"];
  $profile_img =$_POST["profile_img"];
  $user_type_id = 2;
  $is_ban = 0;
  $code = rand(0,10)*10;
  $code .= rand(0,10)*10;
  $passHash = hash("sha256", $_POST["password"]);
  $passHash .= "a";
  
  $query1 = "INSERT INTO users(name,email,profile_img,password,user_type_id) VALUE (?,?,?,?,?)";
  $query =$mysqli->prepare($query1);
  $query->bind_param("sssss",$name,$email,$profile_img,$passHash,$user_type_id);
  $query->execute();
  $last_id = $mysqli->insert_id;

  $query2 = "SELECT * from users WHERE id=?";
  $query =$mysqli->prepare($query2);
  $query->bind_param("s",$last_id);
  $query->execute();
  $array = $query->get_result();

  $response =[];
  while($value = $array->fetch_assoc()){
    $response[] = $value;
  }
  
  if($response){
      echo json_encode($response[0]); 
  }else{
      echo "error";
  }

?>
