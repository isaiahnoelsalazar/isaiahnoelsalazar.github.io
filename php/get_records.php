<?php
include 'db.php';

$sql = "
SELECT 
    a.student_id,
    a.date,
    a.time_in,
    a.time_in_photo,
    a.time_out,
    a.time_out_photo,
    p.fname,
    p.mname,
    p.lname
FROM attendance a
LEFT JOIN ojt_person_details p
    ON a.student_id = p.student_id
ORDER BY a.date DESC
";

$result = $conn->query($sql);

while ($row = $result->fetch_assoc()) {
    echo "<tr>";
    echo "<td>{$row['student_id']}</td>";
    echo "<td>{$row['lname']}, {$row['fname']} {$row['mname']}.</td>";
    echo "<td>{$row['date']}</td>";
    echo "<td>{$row['time_in']}</td>";
    echo "<td>";
    echo $row['time_in_photo'] ? "<img src='{$row['time_in_photo']}' width='80'>" : "No photo";
    echo "</td>";
    echo "<td>{$row['time_out']}</td>";
    echo "<td>";
    echo $row['time_out_photo'] ? "<img src='{$row['time_out_photo']}' width='80'>" : "No photo";
    echo "</td>";
    echo "</tr>";
}
?>