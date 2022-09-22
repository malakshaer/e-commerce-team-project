<?php

include("../../connection.php");


    $order_id = $_GET["order_id"];

    $query = $mysqli->prepare("SELECT * FROM products  WHERE id = ?");
    $query->bind_param('i', $order_id);
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