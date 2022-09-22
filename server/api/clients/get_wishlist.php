<?php

include("../../connection.php");
   
$wish_id = $_GET["wish_id"];

$query = $mysqli->prepare("SELECT * FROM products  WHERE id = ?");
$query->bind_param('i', $wish_id);
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