<?php


if($_SERVER["REQUEST_METHOD"] == "POST") {

    $mysqli = new mysqli("localhost", "root", "", "spruce_db");

    $email = isset($_POST["email"]);
    $password = isset($_POST["password"]);


    $query = "SELECT * FROM `users` WHERE `email` = $email AND `password` = $password";
    $stmt = $mysqli->query($query);
    
    
    if ($stmt) {

        echo "Login successful"; 
        
    } else {
        
        echo 'Incorrect username and/or password!';
    }

}    
?>

