<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $orderDetails = $_POST['orderDetails'];

    if (empty($name) || empty($email) || empty($orderDetails)) {
        echo json_encode(["status" => "error", "message" => "All fields are required."]);
        exit;
    }

    // Process the order (e.g., save to database, send email)
    echo json_encode(["status" => "success", "message" => "Order submitted successfully."]);
} else {
    echo json_encode(["status" => "error", "message" => "Invalid request method."]);
}
?>
