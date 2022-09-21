<?php
include('../connection.php');


if($_SERVER["REQUEST_METHOD"] == "POST"){
    $message = $_POST["message"];
    $sender_id = isset($_POST["sender_id"]);
    $receiver_id = isset($_POST["receiver_id"]);
    $message_date = $_POST["message_date"];
    

    $sql = "INSERT INTO messages(receiver_id, sender_id,message_date,message) VALUE (?,?,?,?)";
    $query =$mysqli->prepare($sql);

    $query->bind_param("ssss", $receiver_id, $sender_id, $message_date, $message);
    $query->execute();

    if($query){
        echo "done successfully";

    }else{
        echo "something went wrong";
    }
}

    

    

    // $response = [];
    // $response["success"] = true;

    // echo json_encode($response);


    


?>