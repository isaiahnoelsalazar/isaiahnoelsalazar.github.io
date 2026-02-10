<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>DropSite</title>
    </head>
    <body>
        <h2>Upload a file</h2>
        <form action="upload.php" method="post" enctype="multipart/form-data">
            <input type="file" name="file" required>
            <button type="submit">Upload</button>
        </form>
        <hr>
        <h3>Uploaded Files</h3>
        <ul>
        <?php
        $files = array_diff(scandir("file_uploads"), array('.', '..'));
        for ($a = 0; $a < count($files); $a++) {
            echo "<li><a href='file_uploads/".$files[$a]."' download='file_uploads/".$files[$a]."'>".$files[$a]."</a></li>";
        }
        ?>
        </ul>
    </body>
</html>