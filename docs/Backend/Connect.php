<?php
$host = "localhost";
$db_user = "root"; 
$db_pass = "";
$db_name = "repform";

$conn = new mysqli($host, $db_user, $db_pass, $db_name);

if ($conn->connect_error) {
    die("Database connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $rep_name = $_POST['name'];

    $stmt = $conn->prepare("INSERT INTO report (Name) VALUES (?)");
    $stmt->bind_param("s", $rep_name);

    if ($stmt->execute()) {
        header("Location: ../Pages/FI-Instruction.html");
        exit(); 
    } else {
        echo "Error saving report: " . $stmt->error;
    }

    $stmt->close();
}

$conn->close();
?>