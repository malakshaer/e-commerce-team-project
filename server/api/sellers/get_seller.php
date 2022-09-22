<?php

include("../../connection.php");


$name = isset($_GET["name"]);
$email = isset($_GET["email"]);
$birthday =isset($_GET["birthday"]);
$join_date =isset($_GET["join_date"]);
$profile_img =isset($_GET["profile_img"]);
$seller_id = isset($_GET["user_type_id"]);

$query = "SELECT * FROM users  WHERE `id` = $seller_id";
$query = $mysqli->prepare($query);
$query->bind_param('s', $id);
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
