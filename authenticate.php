<?php
session_start();

$username = $_POST['username'];
$password = $_POST['password'];

// Perform authentication based on access levels (you need to implement this logic)

// If authentication successful, set session and redirect
if ($validUser) {
  $_SESSION['username'] = $username;
  header('Location: dashboard.php'); // Redirect to dashboard
} else {
  header('Location: login.html'); // Redirect back to login page
}
?>
