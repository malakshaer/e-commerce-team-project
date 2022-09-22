<?php
include("./server/connection.php");

if($_SERVER["REQUEST_METHOD"] == "POST")
{
    
    
    $id = $_POST["id"];
    $order_date = $_POST["order_date"];
    $client_id = $_POST["user_types_id"];
    
    $query = "INSERT INTO orders(id,order_date) WHERE id = $client_id";
    $query = $mysqli->prepare($query);
    $query->execute();

    if($query)
    {
    echo "Registration done successfully!";
    
    }
    else
    {
    echo "Something went wrong while registration!";
    }
    
}

?>