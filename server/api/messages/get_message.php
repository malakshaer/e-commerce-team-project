<?php
    include("../../connection.php");

    $receiver_id = $_GET["receiver_id"];

    $query = $mysqli->prepare("SELECT * FROM messages  WHERE id = ?");
    $query->bind_param('i', $receiver_id);
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
        
