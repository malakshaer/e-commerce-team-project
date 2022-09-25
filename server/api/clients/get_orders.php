<?php

    include("../../connection.php");
    
    $client_id = $_GET["client_id"];

    $query= "SELECT * FROM orders  WHERE client_id = $client_id";
    $query = $mysqli->prepare($query);
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