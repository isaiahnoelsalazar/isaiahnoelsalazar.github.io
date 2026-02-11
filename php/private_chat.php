<?php
include "chat_db.php";

if (!isset($_SESSION["user_id"])) {
    header("Location: chat_login.php");
    exit();
}

if (!isset($_GET["user"])) {
    header("Location: chat_users.php");
    exit();
}

$receiver_id = (int) $_GET["user"];
$_SESSION["chat_with"] = $receiver_id;

$userQuery = $conn->query("SELECT username FROM users WHERE id = $receiver_id");
$userData = $userQuery->fetch_assoc();
?>

<h2>Chat with <?php echo htmlspecialchars($userData["username"]); ?>
<a href="chat_users.php">Back</a></h2>

<div id="chat-box"></div>

<form id="chat-form">
    <input type="text" id="message" placeholder="Type message..." required>
    <button type="submit">Send</button>
</form>

<script>
function fetchMessages() {
    fetch("chat_fetch_messages.php")
        .then(res => res.text())
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
