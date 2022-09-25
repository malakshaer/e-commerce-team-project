<?php
include("../../connection.php");

if($_SERVER["REQUEST_METHOD"] == "POST")
{
    
    $name = $_POST["name"];
    $email = $_POST["email"];
    $password = $_POST["password"];
    $birthday =$_POST["birthday"];
    $user_type_id = 1;
    $is_ban = 0;
    $code = rand(0,10)*10;
    $code .= rand(0,10)*10;
    $subject = "Signup | Verification";
    $message = 
    "Thanks for signing up!
    Your account has been created, Please verify your Code.
    Code: $code";

    ini_set("SMTP","localhost");
    ini_set("smtp_port","25");
    ini_set("sendmail_from","00000@gmail.com");
    ini_set("sendmail_path", "http://localhost:8080/e-commerce-team-project/server/api/sign/signup.php");

    mail($email,$subject,$message);

    $passHash = hash("sha256", $_POST["password"]);
    $passHash .= "a";
    $query = $mysqli->prepare("INSERT INTO users (`name`,`email`, `password`,`code`,`birthday`,`user_type_id`,`is_ban`) VALUES (?,?,? ,?, ?,?, ?)");
    $query->bind_param("sssssss", $name, $email,$passHash,$code,$birthday,$user_type_id,$is_ban);
    $query->execute();

    $last_id = $mysqli->insert_id;

    $query2 = "SELECT * from users WHERE id=?";
    $query =$mysqli->prepare($query2);
    $query->bind_param("s",$last_id);
    $query->execute();
    $array = $query->get_result();
  
    $response =[];
    while($value = $array->fetch_assoc()){
      $response[] = $value;
    }
  
  
    
    if($response){
        echo json_encode($response[0]); 
    }else{
        echo "error";
    }
    
}

?>
