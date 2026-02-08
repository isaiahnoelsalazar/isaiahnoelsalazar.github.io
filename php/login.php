<?php
$input_email = $_POST["emailAddress"];
$input_password = $_POST["password"];

$return = "";
$success = 0;

$connection = mysqli_connect("sql309.infinityfree.com", "if0_37729615", "3HIYz1erYzq2", "if0_37729615_eccommerce");

$accounts_email = array();
$accounts_password = array();

$query = "SELECT * FROM accounts";
$result = mysqli_query($connection, $query);
if (mysqli_num_rows($result) > 0){
    while ($row = mysqli_fetch_assoc($result)){
        array_push($accounts_email, $row["email"]);
        array_push($accounts_password, $row["password"]);
    }
}

if (!in_array($input_email, $accounts_email)){
    $return = "Email not found.";
    $success = 0;
} else {
    $return = "";
    $success = 1;
}

$data = array("return" => $return, "success" => $success);
echo json_encode($data);
?>