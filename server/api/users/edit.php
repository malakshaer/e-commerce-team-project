<?php

include("../../connection.php");

$id = $_POST["id"];
$name = $_POST["name"];
$email = $_POST["email"];
$password = $_POST["password"];
$password = hash('sha256', $password);
$password .= "a";

$query = "UPDATE  users SET name = ?,email = ?,password = ? WHERE id = ?";
$query = $mysqli->prepare($query);
$query->bind_param("ssss", $name,$email,$password,$id);
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
