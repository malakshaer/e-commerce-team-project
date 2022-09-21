<?php
 
if($_SERVER["REQUEST_METHOD"] == "GET")
{
    $mysqli = new mysqli("localhost", "root", "", "spruce_db");
    
    $email = isset($_GET["email"]);

    $query = "SELECT * FROM `users` WHERE `email` = $email";
    
    $stmt = $mysqli->query($query);

    if($stmt) {
        echo 'This email address is already used!';
    }

}

?>