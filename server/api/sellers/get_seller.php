<?php
include("../../connection.php");

$id = $_POST["id"];

$query = $mysqli->prepare("SELECT * FROM users  WHERE id = ?");
$query->bind_param("s", $id);
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
