<?php
    include("../../connection.php");

    $client_id = $_POST["client_id"];
    $seller_id =$_POST["seller_id"];


    $query = $mysqli->prepare("SELECT * FROM messages  WHERE receiver_id = ? AND sender_id = ?");
    $query->bind_param('ss', $client_id,$seller_id);
    $query->execute();
    $array = $query->get_result();
    $query2 = $mysqli->prepare("SELECT * FROM messages  WHERE receiver_id = ? AND sender_id = ?");
    $query2->bind_param('ss',$seller_id, $client_id);
    $query2->execute();
    $array2 = $query2->get_result();
    
    

    $response = [];
    $response1 = [];
    $response2 = [];


    while($value = $array->fetch_assoc()){
        $response1[] = $value;
    };
    while($value = $array2->fetch_assoc()){
        $response2[] = $value;
    }
    $response = array_merge($response1,$response2);

    if($response){
        echo json_encode($response); 
    }else{
        echo "error";
    }


?>
        
