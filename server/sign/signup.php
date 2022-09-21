<?php

if($_SERVER["REQUEST_METHOD"] == "POST")
{
    $mysqli = new mysqli("localhost", "root", "", "spruce_db");
    
    $name = $_POST["name"];
    $email = $_POST["email"];
    $password = $_POST["password"];
    $birthday =$_POST["birthday"];

    $passHash = hash("sha256", $_POST["password"]);
    $password .= "a";
    $query = $mysqli->prepare("INSERT INTO users (`name`,`email`, `password`,`birthday`) VALUES (? ,?, ?, ?)");
    $query->bind_param("ssss", $name, $email,$password,$birthday);
    $query->execute();


    if($query)
    {
    echo "Registration done successfully!";
    
    }
    else
    {
    echo "Something went wrong while registration!<BR>";
    echo "Error Description: ", $mysqli -> error;
    }
    
}

?>