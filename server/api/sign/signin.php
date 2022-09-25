<?php 

include("../../connection.php");

$email = $_POST['email'];
$password = $_POST['password'];
$password = hash('sha256', $password);
$password .= "a";
$query = $mysqli->prepare("SELECT * FROM users WHERE email = ? ");
$query->bind_param('s', $email);
$query->execute();
$array = $query->get_result();

$arr =[];
while($value = $array->fetch_assoc()){
    $arr[] = $value;
}

$result =[];
if(!$arr){
$result['msg']= 'Your mail does not exist';
}elseif($arr[0]['password']== $password){
    $result=$arr[0];
}else{
    $result['msg']= 'Your password is wrong';
}
echo json_encode($result);
?>

