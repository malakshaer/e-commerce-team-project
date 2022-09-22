<?php

include_once("../../connection.php");

$seller_id = isset($_GET["user_types_id"]);

$query = "SELECT (picture_url,link) FROM ads WHERE users_id = $seller_id";
$query = $mysqli->prepare($query);
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