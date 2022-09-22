<?php

include_once("../connection.php");

$id = $_GET["id"];
$email = isset($_GET['email']);
$client_id = $_GET["user_types_id"];



$query = "SELECT `o.id` FROM `orders` as o,`users` as u WHERE `o.users_id` = `u.id` =$client_id";
$query = $mysqli->prepare($query);
$query->execute();
$arr = $query->get_result();


$result =[];
while($value = $arr->fetch_assoc()){
    $result[] = $value;
};

// if the result is empty then the given value does not exist in the table
if(!$result){
    $response["exist"] = FALSE;
}else{
    $response["exist"] = TRUE;
}

echo json_encode($response);
?>