<?php
$input_email = $_POST["emailAddress"];
$input_password = $_POST["password"];
$input_fname = $_POST["fname"];
$input_lname = $_POST["lname"];
$input_userType = $_POST["user_type"];

$return = "";
$success = 0;

$connection = mysqli_connect("sql309.infinityfree.com", "if0_37729615", "3HIYz1erYzq2", "if0_37729615_eccommerce");

$accounts_email = array();
$accounts_password = array();
$accounts_fname = array();
$accounts_lname = array();
$accounts_userType = array();

$query = "SELECT * FROM accounts";
$result = mysqli_query($connection, $query);
if (mysqli_num_rows($result) > 0){
    while ($row = mysqli_fetch_assoc($result)){
        array_push($accounts_email, $row["email"]);
        array_push($accounts_password, $row["password"]);
        array_push($accounts_fname, $row["fname"]);
        array_push($accounts_lname, $row["lname"]);
        array_push($accounts_userType, $row["userType"]);
    }
}

if (in_array($input_email, $accounts_email)){
    $return = "Email is already in use.";
    $success = 0;
} else {
    $query = "INSERT INTO accounts (email, password, fname, lname, userType) VALUES ('$input_email', '$input_password', '$input_fname', '$input_lname', '$input_userType')";
    $result = mysqli_query($connection, $query);
    $return = "";
    $success = 1;
}

$data = array("return" => $return, "success" => $success);
echo json_encode($data);
?>