<?php
$conn = new mysqli("sql309.infinityfree.com", "if0_37729615", "3HIYz1erYzq2", "if0_37729615_ojt_attendance");

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>