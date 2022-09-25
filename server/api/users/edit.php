<?php

include("../../connection.php");

$id = $_POST["id"];
$name = $_POST["name"];
$email = $_POST["email"];
$birthday = $_POST["birthday"];
$password = $_POST["password"];
$password = hash('sha256', $password);
$password .= "a";
$profile_img =$_POST["profile_img"];

$query = "UPDATE  users SET name = ?,email = ?,birthday = ?,password = ?,profile_img = ? WHERE id = ?";
$query = $mysqli->prepare($query);
$query->bind_param("ssssss", $name,$email,$birthday,$password,$profile_img,$id);
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
