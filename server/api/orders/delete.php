<?php

include("../../connection.php");

$id = isset($_POST["id"]);


$query = "DELETE FROM orders WHERE `id` = ?";

$query = $mysqli->prepare($query);
$query->bind_param("s", $id);
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
