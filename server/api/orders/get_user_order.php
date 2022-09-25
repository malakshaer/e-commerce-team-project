<?php

    include("../../connection.php");



    
    $client_id = $_GET["client_id"];

    $query = "SELECT * FROM orders WHERE client_id = ?";
    $query = $mysqli->prepare($query);
    $query->bind_param("s",$client_id);
    $query->execute();
    $arr = $query->get_result();

    $result =[];
    while($value = $arr->fetch_assoc()){
        $result[] = $value;
    };

    if(!$result){
        $response["exist"] = FALSE;
    }else{
        echo json_encode($result);
    }

    

?>