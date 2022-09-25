<?php

include("../../connection.php");


$user_id = $_POST["user_id"];

$query = "UPDATE users SET is_ban = !is_ban   WHERE id= ? ";
$query = $mysqli->prepare($query);
$query->bind_param("s", $user_id);
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
