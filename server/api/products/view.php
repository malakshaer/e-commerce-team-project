<?php

include_once("../../connection.php");

$product_id = $_GET['product_id'];

$query = $mysqli->prepare("SELECT views FROM products WHERE id = ?");
$query->bind_param('s', $product_id);
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