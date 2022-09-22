<?php

include("../../connection.php");


$categories_id = isset($_GET["categories_id"]);


$query = "SELECT (name,picture_img) FROM products WHERE `id` = $categories_id";
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
