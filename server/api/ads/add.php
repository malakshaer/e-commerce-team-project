<?php

include("../../connection.php");


$pic_url = $_POST["picture_url"];
$link = $_POST["link"];
$seller_id = $_POST["seller_id"];

$query = "INSERT INTO ads ( picture_url,link) VALUE (?,?) WHERE id = $seller_id";
$query = $mysqli->prepare($query);
$query->bind_param('ss', $pic_url,$link);
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
