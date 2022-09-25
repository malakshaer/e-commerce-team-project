<?php

include("../../connection.php");


$seller_id = $_GET["seller_id"];

$query = "UPDATE users SET is_ban = 1   WHERE id= ? ";
$query = $mysqli->prepare($query);
$query->bind_param("s", $seller_id);
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
