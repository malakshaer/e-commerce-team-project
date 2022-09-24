<?php
include("../../connection.php");



$query = "SELECT products_id FROM orders_has_products ORDER BY quantity DESC LIMIT 5";
$query = $mysqli->prepare($query);

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
