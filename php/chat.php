<?php
include "chat_db.php";

if (!isset($_SESSION["user_id"])) {
    header("Location: chat_login.php");
    exit();
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Simple Chat</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

<h2>Welcome, <?php echo $_SESSION["username"]; ?> 
<a href="chat_logout.php">Logout</a></h2>

<div id="chat-box"></div>

<form id="chat-form">
    <input type="text" id="message" placeholder="Type message..." required>
    <button type="submit">Send</button>
</form>

<script>
function fetchMessages() {
    fetch("chat_fetch_messages.php")
        .then(response => response.text())
        .then(data => {
            document.getElementById("chat-box").innerHTML = data;
        });
}

setInterval(fetchMessages, 1000);
fetchMessages();

document.getElementById("chat-form").addEventListener("submit", function(e) {
    e.preventDefault();
    const message = document.getElementById("message").value;

    fetch("chat_send_message.php", {
        method: "POST",
        headers: {"Content-Type": "application/x-www-form-urlencoded"},
        body: "message=" + encodeURIComponent(message)
    }).then(() => {
        document.getElementById("message").value = "";
        fetchMessages();
    });
});
</script>

</body>
</html>
