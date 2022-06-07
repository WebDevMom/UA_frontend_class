<?php
/* Connection Info */
$mysqli = new mysqli("75.39.198.77", "jordan", "Class2022!", "FrontEndClass");
if($mysqli->connect_error) {
  exit('Could not connect');
}

/* Your SQL Query */
$sql = "SELECT CustomerID, CompanyName, Address, City, State, Zip, Country
FROM CustomerDB WHERE CustomerID = " . $_GET['q']; /* $_GET['q'] is the str we passed from our HTML page */

/* Run SQL Query */
$stmt = $mysqli->prepare($sql);
$stmt->bind_param("s", $_GET['q']);
$stmt->execute();
$stmt->store_result();

/* bind variables to prepared statement */
mysqli_stmt_bind_result($stmt, $col1, $col2, $col3, $col4, $col5, $col6, $col7);

/* Post values */
while (mysqli_stmt_fetch($stmt)) {
    printf("%s\n", $col1);
    printf("%s\n", $col2);
    printf("%s\n", $col3);
    printf("%s\n", $col4);
    printf("%s\n", $col5);
    printf("%s\n", $col6);
    printf("%s\n", $col7);
}
?>
