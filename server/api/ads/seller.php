<?php

include_once("../../connection.php");

$seller_id = $_GET["seller_id"];

$query = $mysqli->prepare("SELECT * FROM ads WHERE id = ?");
$query->bind_param('i', $seller_id);
$query->execute();
$array = $query->get_result();

$response = [];

while($value = $array->fetch_assoc()){
    $response[] = $value;
};

if($response){
    echo json_encode($response); 
}else{
    echo "error";
}
?>