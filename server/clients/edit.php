<?php

include("../connection.php");

$id = isset($_POST["id"]);
$name = isset($_POST["name"]);
$email = isset($_POST["email"]);
$birthday =isset($_POST["birthday"]);
$join_date =isset($_POST["join_date"]);
$profile_img =isset($_POST["profile_img"]);
$client_id = isset($_POST["client_id"]);
$user_type_id = isset($_POST["user_type_id"]);


$query = "UPDATE  users SET (id, name,email,birthday,join_date,profile_img) = (?,?,?,?,?,?)";
$query = $mysqli->prepare($query);
$query->bind_param("ssssss", $id, $name,$email,$birthday,$join_date,$profile_img);
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
