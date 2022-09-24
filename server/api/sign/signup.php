<?php
include("../../connection.php");

if($_SERVER["REQUEST_METHOD"] == "POST")
{
    
    $name = $_POST["name"];
    $email = $_POST["email"];
    $password = $_POST["password"];
    $birthday =$_POST["birthday"];
    $user_types_id = 2;
    $is_ban = 0;
    $code = rand(0,10)*100;
    $code .= rand(0,10)*100;
    $subject = "Signup | Verification";
    $message = 
    "Thanks for signing up!
    Your account has been created, Please verify your Code.
    Code: $code";

    ini_set("SMTP","localhost");
    ini_set("smtp_port","25");
    ini_set("sendmail_from","00000@gmail.com");
    ini_set("sendmail_path", "http://localhost:8080/e-commerce-team-project/server/api/sign/signup.php");

    $email = mail($email,$subject,$message);

    $passHash = hash("sha256", $_POST["password"]);
    $passHash .= "a";
    $query = $mysqli->prepare("INSERT INTO users (`name`,`email`, `password`,`code`,`birthday`,`user_types_id`,`is_ban`) VALUES (?,?,? ,?, ?,?, ?)");
    $query->bind_param("sssssss", $name, $email,$passHash,$code,$birthday,$user_types_id,$is_ban);
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
