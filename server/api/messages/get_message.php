<?php
include('../connection.php');


if($_SERVER["REQUEST_METHOD"] == "GET"){
    $message = $_GET["message"];
    $sender_id = isset($_GET["sender_id"]);
    $receiver_id = isset($_GET["receiver_id"]);
    $message_date = $_GET["message_date"];
    

    $sql = "SELECT message,message_date FROM messages WHERE (receiver_id, sender_id) = (?,?)";
    $query =$mysqli->prepare($sql);

    $query->bind_param("ss", $receiver_id, $sender_id);
    $query->execute();

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