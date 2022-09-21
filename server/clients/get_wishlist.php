<?php

   include("../connection.php");
   
   if($_SERVER["REQUEST_METHOD"] == "GET")
   {
    
        
        $client_id = isset($_POST["client_id"]);
        
        
        $query= "SELECT `products_id` FROM `wishlists` WHERE `users_id` = $client_id";
        
        $res = $mysqli -> query($query);

        if($res)
        {
        echo "Data inserted into the database successfully!";
        }
        else
        {
        echo "Something went wrong!<BR>";
        }
    }
?>