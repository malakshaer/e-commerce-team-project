<?php

include_once("../connection.php");

$email = isset($_POST['email']);

$query = $mysqli->prepare("SELECT email FROM users WHERE email = ?");
$query->bind_param('s', $email);
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