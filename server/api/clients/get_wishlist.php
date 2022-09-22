<?php

   include("../connection.php");
   
   if($_SERVER["REQUEST_METHOD"] == "GET")
   {
    
        $client_id = isset($_GET["user_types_id"]);
        
    
        $query= "SELECT `w.products_id` FROM `wishlists` as w,`users` as u WHERE `w.users_id`=`u.id` = $client_id";
        
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