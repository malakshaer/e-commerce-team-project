<?php

include_once("../../connection.php");

$id = isset($_GET['id']);

$query = $mysqli->prepare("SELECT views FROM products WHERE `id` = ?");
$query->bind_param('s', $id);
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