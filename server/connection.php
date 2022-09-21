<?php 
    header('Access-Control-Allow-Headers: *');
    header('Access-Control-Allow-Origin: *');
    
    $host = "localhost";
    $username = "root";
    $password = null;
    $db_name = "spruce_db";

    $mysqli = new mysqli($host, $username, $password, $db_name);

?>