<?php
include 'db.php';
date_default_timezone_set('Asia/Manila');
if ($_SERVER["REQUEST_METHOD"] == "POST"){
    $student_id = $_POST['student_id'];
    $action = $_POST['action'];
    $date = date("Y-m-d");
    $now = date("Y-m-d h:i:s A");
    $photoPath = null;
    $data = null;
    if ($action == "time_in") {
        $does_person_exist = $conn->query("SELECT * FROM ojt_person_details WHERE student_id='$student_id'");
        if ($does_person_exist->num_rows == 1){
            if (!empty($_POST['photo'])) {
                $img = $_POST['photo'];
                $img = str_replace('data:image/png;base64,', '', $img);
                $img = str_replace(' ', '+', $img);
                $data = base64_decode($img);
                if (!is_dir("uploads")) {
                    mkdir("uploads", 0777, true);
                }
                $photoPath = "uploads/" . $student_id . "_" . $action . "_" . time() . ".png";
            }
            $check = $conn->query("SELECT * FROM attendance WHERE student_id='$student_id' AND date='$date'");
            if ($check->num_rows > 0) {
                echo "<script>Swal.fire('You have already timed in today.');</script>";
            } else {
                file_put_contents($photoPath, $data);
                $conn->query("INSERT INTO attendance (student_id, time_in, date, time_in_photo) VALUES ('$student_id', '$now', '$date', '$photoPath')");
                echo "<script>Swal.fire({title: 'Time in successful!', text: 'You have successfully timed in.', icon: 'success'});</script>";
            }
        } else {
            echo "<script>Swal.fire({title: 'Time in unsuccessful!', text: 'Person does not exist in the database.', icon: 'error'});</script>";
        }
    } else if ($action == "time_out") {
        $does_person_exist = $conn->query("SELECT * FROM ojt_person_details WHERE student_id='$student_id'");
        if ($does_person_exist->num_rows == 1){
            if (!empty($_POST['photo'])) {
                $img = $_POST['photo'];
                $img = str_replace('data:image/png;base64,', '', $img);
                $img = str_replace(' ', '+', $img);
                $data = base64_decode($img);
                if (!is_dir("uploads")) {
                    mkdir("uploads", 0777, true);
                }
                $photoPath = "uploads/" . $student_id . "_" . $action . "_" . time() . ".png";
            }
            $conn->query("UPDATE attendance SET time_out='$now', time_out_photo='$photoPath' WHERE student_id='$student_id' AND date='$date' AND time_out IS NULL");
            if ($conn->affected_rows > 0) {
                file_put_contents($photoPath, $data);
                echo "<script>Swal.fire({title: 'Time out successful!', text: 'You have successfully timed out.', icon: 'success'});</script>";
            } else {
                echo "<script>Swal.fire('No time in record found or already timed out.');</script>";
            }
        } else {
            echo "<script>Swal.fire({title: 'Time out unsuccessful!', text: 'Person does not exist in the database.', icon: 'error'});</script>";
        }
    }
}
?>