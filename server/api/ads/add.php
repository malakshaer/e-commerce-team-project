<?php

include("../../connection.php");

$picture_url = $_POST["picture_url"];
$link = $_POST["link"];
$seller_id = $_POST["seller_id"];

$query = $mysqli->prepare("INSERT INTO ads(picture_url,link,seller_id) VALUE (?,?,?)");
$query->bind_param('sss', $picture_url,$link,$seller_id);
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
