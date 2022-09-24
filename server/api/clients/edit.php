<?php

include("../../connection.php");


$name = $_POST["name"];
$email = $_POST["email"];
$birthday = $_POST["birthday"];
$profile_img = $_POST["profile_img"];
$password = $_POST["password"];
$password = hash('sha256', $password);
$password .= "a";
$client_id =$_POST["client_id"];


$query = "UPDATE  users SET name = ?,email = ?,birthday = ?,password = ?,profile_img = ? WHERE id = $client_id";
$query = $mysqli->prepare($query);
$query->bind_param("sssss", $name,$email,$birthday,$password,$profile_img);
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
