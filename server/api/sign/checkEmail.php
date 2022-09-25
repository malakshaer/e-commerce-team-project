<?php

include_once("../../connection.php");

$email = $_GET['email'];

$query = $mysqli->prepare("SELECT email FROM users WHERE email = ?");
$query->bind_param('s', $email);
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