<?php

include("../../connection.php");

$id = $_GET["id"];

$query = "SELECT * FROM products WHERE id = ? ";
$query = $mysqli->prepare($query);
$query->bind_param('s', $id);
$query->execute();

$array = $query->get_result();

$response = [];
while($a = $array->fetch_assoc()){
    $response[] = $a;
}

$json = json_encode($response);
echo $json;

?>
