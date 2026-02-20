<?php
$message = "This message exists because GitHub doesn't recognize PHP without the tag. It defaults to Hack, which is similar to PHP.";
?>
<!DOCTYPE html>
<html>
    <head>
        <title>Attendance Records</title>
        <link rel="stylesheet" href="https://cdn.datatables.net/2.3.7/css/dataTables.dataTables.min.css">
    </head>
    <body>
    <section>
        <form method="post" action="export.php">
            <input type="hidden" name="table_html" id="table_html">
            <button type="submit" onclick="exportTable()">Export to Excel</button>
        </form>
        <div>
            <h2>Attendance Records</h2>
            <table id="record_table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Date</th>
                        <th>Time In</th>
                        <th>Time In Photo</th>
                        <th>Time Out</th>
                        <th>Time Out Photo</th>
                    </tr>
                </thead>
                <tbody id="tbody">
                </tbody>
            </table>
        </div>
    </section>
    </body>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js" integrity="sha512-v2CJ7UaYy4JwqLDIrZUI/4hqeoQieOmAZNXBeQyjo21dadnwR+8ZaIJVT8EE2iyI61OV8e6M8PP2/4hpQINQ/g==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="https://cdn.datatables.net/2.3.7/js/dataTables.min.js"></script>
    <script src="js/records.js"></script>
</html>
