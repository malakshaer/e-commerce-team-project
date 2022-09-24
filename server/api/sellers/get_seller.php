<?php
include("../../connection.php");



$query = $mysqli->prepare("SELECT * FROM users  WHERE user_types_id = 2");
// $query->bind_param('i', 2);
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
