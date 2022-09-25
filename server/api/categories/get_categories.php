<?php
include("../../connection.php");

$seller_id = $_POST["seller_id"];

$query = $mysqli->prepare("SELECT * FROM categories  WHERE id = ?");
$query->bind_param("s", $seller_id);
$query->execute();
$array = $query->get_result();

$response = [];

while($value = $array->fetch_assoc()){
    $response[] = $value;
};

if($response){
    echo json_encode($response); 
}else{
    echo "error!";
}


?>
