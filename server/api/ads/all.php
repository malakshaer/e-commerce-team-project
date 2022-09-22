<?php

include("../../connection.php");

$ads_id = $_GET["ads_id"];

$query = $mysqli->prepare("SELECT * FROM ads WHERE id = ?");
$query->bind_param('i', $ads_id);
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
