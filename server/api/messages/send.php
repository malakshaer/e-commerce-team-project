<?php
include("../../connection.php");



    $message = $_POST["message"];
    $sender_id = $_GET["sender_id"];
    
    $sql = "INSERT INTO messages(message,sender_id) VALUE (?,?)";
    $query =$mysqli->prepare($sql);
    $query->bind_param('ss', $message,$sender_id);
    $query->execute();

    if($query){
        echo "done successfully";

    }else{
        echo "something went wrong";
    }



?>