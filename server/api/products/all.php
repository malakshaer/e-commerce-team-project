<?php

include("../../connection.php");


    $category_id = $_GET["category_id"];
    

    $query = $mysqli->prepare("SELECT * FROM products WHERE category_id = ?");
    $query->bind_param('s', $category_id);
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
