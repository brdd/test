<?php
$user = $_POST['user'];
$pass = $_POST['pass'];

if(($user == "admin") && ($pass == "admin")){
        include("admin.php");
}else{
    if(isset($_POST)){
?>
            <form method="POST" action="secureadmin.php">
            User <input type="text" name="user"></input><br/>
            Pass <input type="password" name="pass"></input><br/>
            <input type="submit" name="submit" value="Go"></input>
            </form>
    <?php }
}?>