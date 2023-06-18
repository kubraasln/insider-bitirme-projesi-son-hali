
<html>
    <head>
    </head>

    <body>

    <?php 
$server = "localhost"; 
$user = "kubra"; 
$pw= "kubra123!"; 
$db = "kubradb";
$connect=mysqli_connect($server, $user, $pw, $db);

if(!$connect){

die("ERROR: Cannot connect to database $db on server $server 
using user name $user (".mysqli_connect_errno().
", ".mysqli_connet_error().")");
}

$mailaddress= $_POST['eMail'];
$fullname=$_POST['userName'];
$password = $_POST['password'];

$userQuery= "INSERT INTO usertable (mailaddress, fullname, password) 
VALUES ('$mailaddress', '$fullname', '$password' ";

$result= mysqli_query($connect, $userQuery);



if (!$result){
    die("Could not successfully run query ($userQuery) from $db: ". 
    mysqli_error($connect) );
}


else
{
    // print("><h1>ADD A NEW PERSONNEL RECORD</h1>");
    // print ("<p>The following record was added to the personnel table:</p>"); 
    print("
    <table border='0'>  
    <tr><td>mailaddress</td><td>$mailaddress</td></tr>
    <tr><td>fullname</td><td>$fullname</td><tr>
    <tr><td>password</td><td>$password</td></tr>
    </table>");
}

mysqli_close($connect);


?>

    
</body>

</html>