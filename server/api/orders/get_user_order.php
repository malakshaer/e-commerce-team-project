<?php

include("../../connection.php");

if($id = isset($_GET["id"]) && $seller_id = $_GET["user_type_id"]){
    
    $id = $_GET["id"];
    $client_id = $_GET["user_type_id"];



    $query = "SELECT `o.id` FROM `orders` as o,`users` as u WHERE `o.users_id` = `u.id` =$client_id";
    $query = $mysqli->prepare($query);
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
}
?>