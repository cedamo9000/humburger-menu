<?php
$servername='localhost';
$username='root';
$dbname='Hospital';
$password='Toio';
$con = mysqli_connect ("$servername","$username","$password","$dbname");

// Create connection
if(!$con){
   echo "connection error: " ;
}


?>