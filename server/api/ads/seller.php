<?php

include_once("../../connection.php");

$seller_id = $_GET["seller_id"];

$query = $mysqli->prepare("SELECT * FROM ads WHERE id = ?");
$query->bind_param('i', $seller_id);
$query->execute();
$arr = $query->get_result();


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