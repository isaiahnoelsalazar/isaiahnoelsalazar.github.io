<?php
include "chat_db.php";

if (!isset($_SESSION["user_id"])) {
    header("Location: chat_login.php");
    exit();
}

$currentUser = $_SESSION["user_id"];
$result = $conn->query("SELECT id, username FROM users WHERE id != $currentUser");
?>

<h2>Welcome <?php echo $_SESSION["username"]; ?> 
<a href="chat_logout.php">Logout</a></h2>

<h3>Select User to Chat:</h3>

<ul>
<?php while ($row = $result->fetch_assoc()): ?>
    <li>
        <a href="private_chat.php?user=<?php echo $row["id"]; ?>">
            <?php echo htmlspecialchars($row["username"]); ?>
        </a>
    </li>
<?php endwhile; ?>
</ul>
