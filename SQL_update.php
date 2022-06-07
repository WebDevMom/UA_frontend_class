<?php
/* Connection Info */
$mysqli = new mysqli("75.39.198.77", "jordan", "Class2022!", "FrontEndClass");
if($mysqli->connect_error) {
    exit('Could not connect');
}

/* SQL Update Query */
$sql = 'UPDATE CustomerDB SET CompanyName = ' . $_GET['q'] . 'WHERE CustomerID = ' . $_GET['k'];

/* Run SQL Query */
$stmt = $mysqli->prepare($sql);
$stmt->bind_param("s", $_GET['q'], $_GET['k']);
$stmt->execute();
$stmt->store_result();
printf('Success');
?>