<?php
include("../../connection.php");


$code = $_POST["code"];
$query = $mysqli->prepare("SELECT code FROM users WHERE id = ( SELECT MAX(id) FROM users )");

$query->execute();
$array = $query->get_result();

$response = [];


while($value = $array->fetch_assoc()){
    $response[] = $value;
};

if($response[0]["code"] ==$code ){
    echo "true";
}else{
    echo "false";
}


?>
