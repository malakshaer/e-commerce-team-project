<?php
include("../../connection.php");



    $message = $_POST["message"];
    $sender_id = $_POST["sender_id"];
    $receiver_id = $_POST["receiver_id"];
    
    $sql = "INSERT INTO messages(message,sender_id,receiver_id) VALUE (?,?,?)";
    $query =$mysqli->prepare($sql);
    $query->bind_param('sss', $message,$sender_id,$receiver_id);
    $query->execute();

    if($query){
        echo "done successfully";

    }else{
        echo "something went wrong";
    }



?>