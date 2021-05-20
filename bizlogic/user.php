<?php 

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, POST, GET, OPTIONS, DELETE");

include("./connection.php");

$useremail = (isset($_GET['email']) ? $_GET['email'] : '');
$userpassword = (isset($_GET['password']) ? $_GET['password'] : '');

$query = "select * from user where email='$useremail' AND password='$userpassword'";
$result = mysqli_query($con , $query);
$array = mysqli_fetch_assoc($result);

$id = isset($array['id']);
$name = isset($array['name']);
$email = isset($array['email']);
$username = isset($array['username']);

echo json_encode(
    array(
        'id' => $id,
        'name' => $name,
        'username' => $username,
        'email' => $email
    )
    );

?> 