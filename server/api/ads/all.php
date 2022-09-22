<?php

include("../connection.php");

$client_id = $_GET["user_types_id"];

$query = "SELECT * FROM `ads` WHERE users_id = $client_id";
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
