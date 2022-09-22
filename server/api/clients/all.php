<?php
include("../../connection.php");


$id = isset($_GET["id"]);
$name = isset($_GET["name"]);
$profile_img =isset($_GET["profile_img"]);
$client_id = isset($_GET["user_type_id"]);

$query = "SELECT FROM users(name,profile_img) = (?,?) WHERE `id` = $client_id";
$query = $mysqli->prepare($query);
$query->bind_param("ss", $name,$profile_img);
$query->execute();
$result =[];
while($value = $arr->fetch_assoc()){
    $result[] = $value;
};

if(!$result){
  $response["exist"] = FALSE;
}else{
  $response["exist"] = TRUE;
}

echo json_encode($response);

?>
