<?php

include("../../connection.php");

$id = isset($_GET["id"]);

$query = "SELECT * FROM products WHERE `id` = ? ";
$query = $mysqli->prepare($query);
$query->bind_param('s', $id);
$query->execute();
$arr = $query->get_result();

$arr =[];
while($value = $array->fetch_assoc()){
    $arr[] = $value;
}

$result =[];
if($arr)
{
  echo "done successfully!";

}
else
{
  echo "Something went wrong!";
}
echo json_encode($result);

?>
