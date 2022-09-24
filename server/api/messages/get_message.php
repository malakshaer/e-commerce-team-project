<?php
    include("../../connection.php");

    $id = $_GET["id"];
    $seller_id =$_GET["seller_id"];


    $query = $mysqli->prepare("SELECT message FROM messages  WHERE receiver_id = ? AND sender_id = ?");
    $query->bind_param('ss', $id,$seller_id);
    $query->execute();
    $array = $query->get_result();
    $query2 =  

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
        
