<?php

include("../../connection.php");

if($_SERVER["REQUEST_METHOD"] == "GET"){
    
    $categories_id = isset($_GET["categories_id"]);


    $query = "SELECT * FROM products WHERE `id` = ?";
    $query = $mysqli->prepare($query);
    $query->bind_param('s', $categories_id);
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
