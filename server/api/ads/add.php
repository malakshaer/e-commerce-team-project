<?php

include("../connection.php");


$pic_url = $_POST["picture_id"];
$link = $_POST["link"];


$query = "INSERT INTO `ads` ( picture_url,link) VALUE (?,?)";
$query = $mysqli->prepare($query);
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
