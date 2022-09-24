<?php

include("../../connection.php");


    $categories_id = $_GET["categories_id"];
    

    $query = $mysqli->prepare("SELECT * FROM products WHERE categories_id = ?");
    $query->bind_param('s', $categories_id);
    $query->execute();

    $array = $query->get_result();

    $response =[];

    while($value = $array->fetch_assoc()){
        $response[] = $value;
    };

    if($response){
        echo json_encode($response); 
    }else{
        echo "error";
    }

    
// }
?>
